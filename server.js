
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- CRITICAL FOR HOSTINGER: USE THE ASSIGNED PORT ---
const PORT = process.env.PORT || 3000;

console.log(`[Server] Starting application on port ${PORT}...`);

// Ensure API structure matches expected output (Fix for ENOENT)
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

// --- LAUNCH THE REACT ROUTER SERVER ---
// We start the build directly using node, passing the PORT env var explicitly
const serverBuildPath = join(__dirname, 'build', 'server', 'index.js');
const command = process.platform === 'win32' ? 'node.exe' : 'node';

const child = spawn(command, [serverBuildPath], {
  stdio: 'inherit',
  cwd: __dirname,
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: PORT  // EXPLICITLY PASS THE HOSTINGER PORT
  }
});

child.on('error', (err) => {
  console.error('[Server] Failed to spawn child process:', err);
  process.exit(1);
});

child.on('close', (code) => process.exit(code));
