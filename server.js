
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- CONFIG ---
const PORT = process.env.PORT || 3000;

console.log(`[Server] Wrapper starting. Target Port: ${PORT}`);

// --- FIX ROUTE PATHS ---
function ensureApiRoutesExist() {
  const targetDir = join(__dirname, 'build', 'server', 'src', 'app', 'api');
  const sourceDir = join(__dirname, 'src', 'app', 'api');
  if (!fs.existsSync(targetDir)) {
    try {
      if (fs.existsSync(sourceDir)) {
        fs.cpSync(sourceDir, targetDir, { recursive: true });
      } else {
        fs.mkdirSync(targetDir, { recursive: true });
      }
    } catch (e) { }
  }
}
ensureApiRoutesExist();

// --- LAUNCH REAL SERVER ---
// We use 'npx react-router-serve' to correctly launch the build artifact.
// Using 'node' directly might fail if the artifact isn't self-contained.
const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['react-router-serve', 'build/server/index.js'];

console.log(`[Server] Executing: ${command} ${args.join(' ')}`);

const child = spawn(command, args, {
  stdio: 'inherit',
  cwd: __dirname,
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: String(PORT)
  }
});

child.on('error', (err) => {
  console.error('[Server] CRITICAL ERROR spawning server:', err);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`[Server] Process exited with code ${code}`);
  process.exit(code);
});
