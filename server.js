import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { createServer } from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('[Server] Starting custom entry point...');

// --- FIX ROUTE PATHS ON STARTUP ---
// (Mantenemos esta parte vital que ya teníamos)
function ensureApiRoutesExist() {
  const targetDir = join(__dirname, 'build', 'server', 'src', 'app', 'api');
  const sourceDir = join(__dirname, 'src', 'app', 'api');
  if (!fs.existsSync(targetDir)) {
    try {
      if (fs.existsSync(sourceDir)) {
        fs.cpSync(sourceDir, targetDir, { recursive: true });
        console.log(`[Server Fix] ✅ API routes copied.`);
      } else {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`[Server Fix] Created empty directory.`);
      }
    } catch (err) {
      console.error(`[Server Fix] Error copying routes:`, err);
    }
  }
}
ensureApiRoutesExist();

// --- ATTEMPT TO START APP VIA REACT-ROUTER-SERVE ---
// This is what 'npm start' does usually.
const serverBuildPath = join(__dirname, 'build', 'server', 'index.js');

if (fs.existsSync(serverBuildPath)) {
  console.log('[Server] Found build/server/index.js, launching...');

  // We launch the actual server process
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const child = spawn(command, ['run', 'start'], {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, NODE_ENV: 'production', PORT: process.env.PORT || '3000' }
  });

  child.on('error', (err) => console.error('[Server] Failed to start:', err));
} else {
  // FALLBACK: If build is missing, serve a simple error page so we don't get 403
  console.error('[Server] CRITICAL: build/server/index.js not found!');

  const server = createServer((req, res) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Deployment Error: build/server/index.js is missing on the server. Please check deployment logs.');
  });

  server.listen(process.env.PORT || 3000, () => {
    console.log('[Server] Fallback error server running');
  });
}
