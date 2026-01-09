import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'src', 'app', 'api');
const targetDir = path.join(__dirname, 'build', 'server', 'src', 'app', 'api');

console.log('[Fix-Routes] script starting...');

try {
    // Ensure target directory exists
    if (!fs.existsSync(targetDir)) {
        console.log(`[Fix-Routes] Creating directory: ${targetDir}`);
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy files if source exists
    if (fs.existsSync(sourceDir)) {
        console.log(`[Fix-Routes] Copying API routes from ${sourceDir} to ${targetDir}`);
        fs.cpSync(sourceDir, targetDir, { recursive: true });
        console.log('[Fix-Routes] Success! Routes copied.');
    } else {
        console.log('[Fix-Routes] Warning: Source API folder not found, skipping copy.');
    }
} catch (err) {
    console.error('[Fix-Routes] Error:', err);
    // We don't exit with error to avoid stopping the server deployment, 
    // worst case routes just won't work but site handles 404.
}
