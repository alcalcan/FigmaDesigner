import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

async function testProceduralFlow() {
    console.log("🚀 Starting Procedural Flow Verification...");

    const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
    const project = 'Alex_CookBook';
    const component = 'checkbox_SubSection';
    const timestampedFolder = 'checkbox_SubSection_2026-01-28_10-17-51';

    const card1Dir = path.join(extractionRoot, project, timestampedFolder);
    const jsonPath = path.join(card1Dir, `${component}.json`);
    const relativePath = path.join(project, timestampedFolder, `${component}.json`);

    if (!fs.existsSync(jsonPath)) {
        console.error(`❌ Test JSON not found: ${jsonPath}`);
        return;
    }

    const postData = JSON.stringify({
        path: relativePath,
        project: project,
        simplified: true,
        procedural: true
    });

    const options = {
        hostname: '127.0.0.1',
        port: 3001,
        path: '/generate-to-code',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    console.log(`📡 Sending procedural generation request for ${relativePath}...`);

    const req = http.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
            try {
                const responseData = JSON.parse(body);
                console.log("✅ Response:", responseData);

                if (responseData.status === 'ok') {
                    const tsPath = path.join(process.cwd(), 'components', project, 'Card_1', 'Card_1.ts');
                    if (fs.existsSync(tsPath)) {
                        const content = fs.readFileSync(tsPath, 'utf8');
                        if (content.includes('LIST_DATA') || content.includes('.map(')) {
                            console.log("✨ SUCCESS: Generated file contains procedural markers!");
                        } else {
                            console.warn("⚠️ WARNING: Generated file exists but does not look procedural.");
                            console.log("First 200 chars:", content.substring(0, 200));
                        }
                    } else {
                        console.error("❌ Generated TS file not found at expected path:", tsPath);
                    }
                }
            } catch (e: any) {
                console.error("❌ Failed to parse response:", e.message);
                console.log("Raw body:", body);
            }
        });
    });

    req.on('error', (e) => {
        console.error(`❌ Request failed: ${e.message}`);
    });

    req.write(postData);
    req.end();
}

testProceduralFlow();
