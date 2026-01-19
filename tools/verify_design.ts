import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { EventSource } from "eventsource";

// Polyfill EventSource for Node.js environment
global.EventSource = EventSource as any;

async function main() {
    console.log("Connecting to Figma MCP Server...");

    const transport = new SSEClientTransport(
        new URL("http://127.0.0.1:3845/sse")
    );

    const client = new Client(
        {
            name: "FigmaDesignerVerifier",
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
        console.log("Connected to Figma MCP Server!");

        // List available tools
        const tools = await client.listTools();
        const contextTool = tools.tools.find(t => t.name === "get_design_context");

        if (contextTool) {
            // Check for command line arguments
            // Usage: npm run verify -- --id=123:456
            const args = process.argv.slice(2);
            let targetNodeId: string | null = null;

            for (const arg of args) {
                if (arg.startsWith("--id=")) {
                    targetNodeId = arg.split("=")[1];
                }
            }

            // Define display logic
            function displayVerificationResult(codeString: string, currentName?: string, currentNodeId?: string) {
                const matchName = codeString.match(/data-name="([^"]+)"/);
                const name = currentName || (matchName ? matchName[1] : "Unknown Element");

                const matchId = codeString.match(/data-node-id="([^"]+)"/);
                const id = currentNodeId || (matchId ? matchId[1] : "unknown");

                console.log(`\n🔎 Selection: ${name} (ID: ${id})`);
                console.log("--------------------------------------------------");

                console.log("Generated Code Snippet:");
                console.log(codeString.substring(0, 300) + "...");
                console.log("--------------------------------------------------");

                // Check for rate limit error in content
                if (codeString.includes("Rate limit exceeded")) {
                    console.log("\n⚠️  Figma API Rate Limit Exceeded");
                    console.log("   The Figma MCP server is currently limiting requests.");
                    console.log("   Please wait a while before trying again.");
                    return;
                }

                // Button Specific Checks
                if (name === "Button" || codeString.includes("Button")) {
                    console.log("✅ Component Verification: BUTTON");
                    // Check for Tailwind classes matching our design
                    const checks = [
                        { pattern: /rounded-\[6px\]/, label: "Corner Radius (6px)" },
                        { pattern: /px-\[16px\]/, label: "Padding X (16px)" },
                        { pattern: /py-\[8px\]/, label: "Padding Y (8px)" },
                        { pattern: /bg-\[#1a80e5\]|bg-blue/, label: "Background Color (Primary)" }
                    ];

                    checks.forEach(check => {
                        if (check.pattern.test(codeString)) {
                            console.log(`   ✅ ${check.label}: Found`);
                        } else {
                            console.log(`   ❌ ${check.label}: NOT Found in code`);
                        }
                    });
                    if (codeString.includes("Primary Action") || codeString.includes("Secondary Action")) {
                        console.log(`   ✅ Label Content Found`);
                    }
                } else {
                    console.log("ℹ️  Generic Element Verification");

                    // Attempt to extract common styles
                    const stylePatterns = [
                        { label: "Background", regex: /bg-\[?([^\]" ]+)\]?/ },
                        { label: "Text Color", regex: /text-\[?([^\]" ]+)\]?/ },
                        { label: "Corner Radius", regex: /rounded-\[?([^\]" ]+)\]?/ },
                        { label: "Padding", regex: /p[xy]?-\[?([^\]" ]+)\]?/g }, // Global to find multiple
                        { label: "Font", regex: /font-\['([^']+)'\]/ },
                        { label: "Width", regex: /w-\[?([^\]" ]+)\]?/ },
                        { label: "Height", regex: /h-\[?([^\]" ]+)\]?/ },
                    ];

                    console.log("   Extracted Visual Properties:");
                    let found = false;

                    stylePatterns.forEach(p => {
                        if (p.label === "Padding") {
                            const matches = codeString.match(p.regex);
                            if (matches) {
                                matches.forEach(m => console.log(`   - ${p.label}: ${m}`));
                                found = true;
                            }
                        } else {
                            const match = codeString.match(p.regex);
                            if (match && match[1]) {
                                console.log(`   - ${p.label}: ${match[1]}`);
                                found = true;
                            }
                        }
                    });

                    if (!found) {
                        console.log("   - No specific Tailwind styles detected in common formats.");
                    }
                }
            }

            if (targetNodeId) {
                // SINGLE RUN MODE
                console.log(`\n🔎 Verifying specific Node ID: ${targetNodeId}`);
                try {
                    const result: any = await client.callTool({
                        name: "get_design_context",
                        arguments: { nodeId: targetNodeId }
                    });

                    const content = result.content?.[0]?.text;
                    if (content) {
                        displayVerificationResult(content, undefined, targetNodeId);
                    } else {
                        console.log("No content returned for this Node ID.");
                    }
                } catch (e: any) {
                    console.error("Error fetching node context:", e.message);
                }
                setTimeout(() => process.exit(0), 100);
                return;
            }

            // INTERACTIVE MODE
            console.log("Interactive Mode Started.");
            console.log("👉 Select an element in Figma, then press ENTER in this terminal to verify it.");
            console.log("   (Press Ctrl+C to exit)");

            const stdin = process.stdin;
            stdin.setEncoding('utf-8');

            stdin.on('data', async () => {
                console.log("Verifying current selection...");
                try {
                    const result: any = await client.callTool({
                        name: "get_design_context",
                        arguments: {}
                    });

                    const content = result.content?.[0]?.text;
                    if (!content) {
                        console.log("No content received. Ensure you have an element selected.");
                        return;
                    }

                    const codeString = content;

                    // Simple hash or length check to detect change, or check specific data attributes
                    const matchId = codeString.match(/data-node-id="([^"]+)"/);
                    const currentNodeId = matchId ? matchId[1] : "unknown";

                    // Also get name
                    const matchName = codeString.match(/data-name="([^"]+)"/);
                    const currentName = matchName ? matchName[1] : "Unknown Element";

                    displayVerificationResult(codeString, currentName, currentNodeId);
                    console.log("\n👉 Press ENTER again to verify next selection...");

                } catch (err: any) {
                    console.error("Error fetching context:", err.message);
                }
            });

            // Keep process alive
            await new Promise(() => { });

        } else {
            console.log("\n'get_design_context' tool not found. Please ensure Figma is running, Dev Mode is ON, and you have selected the component.");
        }

        // List resources if any
        try {
            const resources = await client.listResources();
            console.log("\nAvailable Resources:");
            resources.resources.forEach((r) => {
                console.log(`- ${r.name} (${r.uri})`);
            });
        } catch (e) {
            // console.log("Could not list resources or none available.");
        }

    } catch (error) {
        console.error("Error connecting to Figma MCP:", error);
        console.error("Make sure Figma Desktop is open, Dev Mode is on, and MCP Server is enabled.");
    }
}

main();
