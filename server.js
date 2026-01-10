
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- CONFIG ---
// Hostinger usually provides PORT. If not, fallback to 3000.
const PORT = process.env.PORT || 3000;

console.log(`[Server Launcher] Starting... Port: ${PORT}`);

// --- FIX ROUTE PATHS (Prevents ENOENT error) ---
function ensureApiRoutesExist() {
  const targetDir = join(__dirname, 'build', 'server', 'src', 'app', 'api');
  const sourceDir = join(__dirname, 'src', 'app', 'api');

  if (!fs.existsSync(targetDir)) {
    console.log('[Server Launcher] Fixing API routes...');
    try {
      if (fs.existsSync(sourceDir)) {
        fs.cpSync(sourceDir, targetDir, { recursive: true });
      } else {
        fs.mkdirSync(targetDir, { recursive: true });
      }
    } catch (e) {
      console.error('[Server Launcher] Warning: Could not copy API routes:', e);
    }
  }
}

ensureApiRoutesExist();

// --- LAUNCH REAL SERVER ---
// We use 'npx react-router-serve' to correctly launch the build artifact.
const command = 'npx';
const args = ['react-router-serve', 'build/server/index.js'];

console.log(`[Server Launcher] Executing: ${command} ${args.join(' ')}`);

const child = spawn(command, args, {
  stdio: 'inherit',
  cwd: __dirname,
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: String(PORT),
    HOST: '0.0.0.0' // Bind to all interfaces for Hostinger
  },
  shell: true // Important for npx on some Linux shells
});

child.on('error', (err) => {
  console.error('[Server Launcher] CRITICAL ERROR spawning server:', err);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`[Server Launcher] Process exited with code ${code}`);
  process.exit(code);
});
