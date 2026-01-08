import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Simple entry point wrapper for Hostinger
// This allows Hostinger to set "server.js" as the startup file
const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';

console.log('Starting application via npm start...');

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
