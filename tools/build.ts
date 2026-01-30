import * as esbuild from 'esbuild';
import * as fs from 'fs';
import { checkAndRecover } from './pre-build';
import { registerComponents } from './bridge/server_tools/RegisterComponents';

async function startBuild(options?: { watch?: boolean }) {
    const isWatch = options?.watch ?? process.argv.includes('--watch');
    let context: esbuild.BuildContext | null = null;

    const runBuild = async () => {
        if (context) {
            await context.dispose();
        }

        context = await esbuild.context({
            entryPoints: ['code.ts'],
            bundle: true,
            outfile: 'code.js.tmp',
            format: 'iife',
            target: 'es6',
            sourcemap: true,
            loader: {
                '.png': 'base64',
                '.jpg': 'base64',
                '.jpeg': 'base64',
                '.svg': 'text',
                '.bin': 'base64'
            },
            plugins: [
                {
                    name: 'atomic-write',
                    setup(build) {
                        build.onStart(async () => {
                            // Run registration first to ensure imports exist
                            registerComponents();
                            const recoveredAny = await checkAndRecover();
                            if (recoveredAny) {
                                console.log("🔄 Files recovered. Esbuild will detect changes and rebuild...");
                            }
                        });
                        build.onEnd(result => {
                            if (result.errors.length > 0) {
                                console.error(`❌ Build failed with ${result.errors.length} errors.`);
                            } else {
                                try {
                                    // Atomic move of code.js.tmp to code.js
                                    if (fs.existsSync('code.js.tmp')) {
                                        fs.renameSync('code.js.tmp', 'code.js');
                                    }
                                    // Also move sourcemap if it exists
                                    if (fs.existsSync('code.js.tmp.map')) {
                                        fs.renameSync('code.js.tmp.map', 'code.js.map');
                                    }
                                    const now = new Date().toLocaleTimeString();
                                    console.log(`✅ Atomic Build successful at ${now}`);
                                } catch (err: any) {
                                    console.error(`❌ Failed to finalize atomic build: ${err.message}`);
                                }
                            }
                        });
                    },
                }
            ]
        });

        console.log("🛠️ Initializing build...");
        if (isWatch) {
            console.log("👀 Watching for changes (Atomic mode enabled)...");
            await context.watch();
        } else {
            // For single build, we must actually finish successfully
            registerComponents();
            await checkAndRecover();
            await context.rebuild();
            console.log("✨ Build complete.");
            await context.dispose();
        }
    };

    await runBuild();
}


export { startBuild };

if (require.main === module) {
    startBuild().catch(err => {
        console.error("Fatal error in build script:", err);
        process.exit(1);
    });
}
