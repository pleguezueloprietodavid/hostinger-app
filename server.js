import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- FIX ROUTE PATHS ON STARTUP ---
// This ensures that the API routes expected by React Router server build exist.
// Hostinger/Linux environment often fails to preserve this structure during build artifact copy.
async function ensureApiRoutesExist() {
  const targetDir = join(__dirname, 'build', 'server', 'src', 'app', 'api');
  const sourceDir = join(__dirname, 'src', 'app', 'api');

  console.log(`[Server Fix] Checking API routes directory: ${targetDir}`);

  if (!fs.existsSync(targetDir)) {
    console.log(`[Server Fix] Target directory missing. Attempting to copy from source...`);
    try {
      if (fs.existsSync(sourceDir)) {
        fs.cpSync(sourceDir, targetDir, { recursive: true });
        console.log(`[Server Fix] ✅ API routes copied successfully.`);
      } else {
        console.warn(`[Server Fix] ⚠️ Source API directory not found at ${sourceDir}. Routes may fail.`);
        // Create empty directory to prevent crash
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`[Server Fix] Created empty directory to prevent startup crash.`);
      }
    } catch (err) {
      console.error(`[Server Fix] ❌ Failed to copy API routes:`, err);
    }
  } else {
    console.log(`[Server Fix] API routes directory already exists.`);
  }
}

// execute fix immediately
ensureApiRoutesExist();

// --- START SERVER ---
console.log('Starting application via npm start...');

// Use 'npm start' or node directly depending on environment
// We point to the build output
const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const child = spawn(command, ['run', 'start'], {
  stdio: 'inherit',
  cwd: __dirname,
  env: {
    ...process.env,
    NODE_ENV: 'production',
  }
});

child.on('error', (err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Application exited with code ${code}`);
  process.exit(code);
});
