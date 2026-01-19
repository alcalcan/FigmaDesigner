import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { EventSource } from "eventsource";
import * as fs from 'fs';
import * as path from 'path';

// Polyfill EventSource for Node.js environment
global.EventSource = EventSource as unknown as typeof global.EventSource;

async function main() {
    console.log("Connecting to Figma MCP Server for Capture...");

    const transport = new SSEClientTransport(
        new URL("http://127.0.0.1:3845/sse")
    );

    const client = new Client(
        {
            name: "FigmaCaptureTool",
            version: "1.0.0",
        },
        {
            capabilities: {
                sampling: {},
            },
        }
    );

    try {
        await client.connect(transport);
        console.log("✅ Connected! Watching for selection changes...");
        console.log("   (Press Ctrl+C to stop)");

        let lastNodeId: string | null = null;

        // POLLING LOOP
        setInterval(async () => {
            try {
                // 1. Get Design Context
                // We use a short timeout to avoid hanging if the server is busy
                const result = await client.callTool({
                    name: "get_design_context",
                    arguments: {}
                });

                const content = (result.content as { text: string }[])?.[0]?.text;
                if (!content) {
                    // Nothing selected
                    if (lastNodeId !== null) {
                        console.log("Selection cleared.");
                        lastNodeId = null;
                    }
                    return;
                }

                // 2. Identify Selection (Simple check to see if it's new)
                // We extract the Node ID to check if it's different from the last one
                const matchId = content.match(/data-node-id="([^"]+)"/);
                const currentNodeId = matchId ? matchId[1] : null;

                if (!currentNodeId) {
                    // Can't identify ID, might be same selection or valid content without ID?
                    // Skip if we can't identify uniqueness to avoid spamming files
                    return;
                }

                if (currentNodeId === lastNodeId) {
                    // Same selection, do nothing
                    return;
                }

                // NEW SELECTION DETECTED
                lastNodeId = currentNodeId;

                // 3. Extract Meta Data
                const projectName = "Default_Project";
                // Attempt to match project name if available in content (depends on MCP tool output)
                // Assuming it's not easily available, we stick to Default or try to infer.

                const matchName = content.match(/data-name="([^"]+)"/);
                const nodeName = matchName ? matchName[1] : "Unknown_Element";

                console.log(`\n📸 New Selection: ${nodeName} (${currentNodeId})`);

                // 4. Prepare File Path
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                // Sanitize project name if we ever get it
                const sanitaryProjectName = projectName.replace(/[^a-z0-9]/gi, '_');

                const projectDir = path.join(process.cwd(), 'tools', 'extraction', sanitaryProjectName);

                if (!fs.existsSync(projectDir)) {
                    fs.mkdirSync(projectDir, { recursive: true });
                }

                const filename = `${nodeName.replace(/[^a-z0-9]/gi, '_')}_${timestamp}.txt`;
                const filePath = path.join(projectDir, filename);

                // 5. Write to File
                fs.writeFileSync(filePath, content);

                console.log(`   ✅ Auto-saved to: tools/extraction/${sanitaryProjectName}/${filename}`);

            } catch (err: unknown) {
                // Ignore transient errors during polling (e.g. rate limits or connection blips)
            }
        }, 1000); // Poll every 1 second

        // Keep process alive
        await new Promise(() => { });

    } catch (error) {
        console.error("Error connecting to Figma MCP:", error);
    }
}

main();
