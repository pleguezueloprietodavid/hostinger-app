import { promises as fs } from 'fs';
import path from 'path';

async function fixRoutes() {
    const source = path.join(process.cwd(), 'src', 'app', 'api');
    const dest = path.join(process.cwd(), 'build', 'server', 'src', 'app', 'api');

    try {
        // Check if source exists
        try {
            await fs.access(source);
        } catch {
            console.log('No API routes to copy.');
            return;
        }

        // Ensure destination exists
        await fs.mkdir(dest, { recursive: true });

        // Copy directory content
        async function copyDir(src, dest) {
            const entries = await fs.readdir(src, { withFileTypes: true });

            for (const entry of entries) {
                const srcPath = path.join(src, entry.name);
                const destPath = path.join(dest, entry.name);

                if (entry.isDirectory()) {
                    await fs.mkdir(destPath, { recursive: true });
                    await copyDir(srcPath, destPath);
                } else {
                    await fs.copyFile(srcPath, destPath);
                }
            }
        }

        await copyDir(source, dest);
        console.log('✅ Fix: API routes copied to build/server/src/app/api');
    } catch (error) {
        console.error('❌ Fix failed:', error);
        process.exit(1);
    }
}

fixRoutes();
