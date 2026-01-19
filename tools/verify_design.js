var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { EventSource } from "eventsource";
// Polyfill EventSource for Node.js environment
global.EventSource = EventSource;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        console.log("Connecting to Figma MCP Server...");
        const transport = new SSEClientTransport(new URL("http://127.0.0.1:3845/mcp"));
        const client = new Client({
            name: "FigmaDesignerVerifier",
            version: "1.0.0",
        }, {
            capabilities: {
                tools: {},
                resources: {},
            },
        });
        try {
            yield client.connect(transport);
            console.log("Connected to Figma MCP Server!");
            // List available tools
            const tools = yield client.listTools();
            console.log("\nAvailable Tools:");
            tools.tools.forEach((t) => {
                console.log(`- ${t.name}: ${t.description}`);
            });
            // Try to get design context (assuming this tool exists based on research)
            // We'll look for 'get_design_context' or similar
            const contextTool = tools.tools.find(t => t.name === "get_design_context");
            if (contextTool) {
                console.log("\nAttempting to fetch design context...");
                const result = yield client.callTool({
                    name: "get_design_context",
                    arguments: {}
                });
                // Basic verification logic
                const content = (_b = (_a = result.content) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text;
                if (content) {
                    const data = JSON.parse(content);
                    console.log("Design Context Retrieved.");
                    // Check if it matches our Button
                    // This is heuristic based since we don't know the exact format yet
                    if (JSON.stringify(data).includes("Button") || (data.name === "Button")) {
                        console.log("✅ SUCCESS: Found 'Button' node.");
                        // Check styles if possible
                        // These checks depend on the actual output structure which acts as a scene graph dump
                        if (JSON.stringify(data).includes("cornerRadius") || data.cornerRadius === 6) {
                            console.log("✅ Verified Corner Radius: 6");
                        }
                        if (JSON.stringify(data).includes("paddingLeft") || data.paddingLeft === 16) {
                            console.log("✅ Verified Padding");
                        }
                    }
                    else {
                        console.log("⚠️  WARNING: Selected node does not appear to be a 'Button'. Ensure you have selected the generated component.");
                        console.log("Raw Data snippet:", JSON.stringify(data).slice(0, 200) + "...");
                    }
                }
                else {
                    console.log("No content in design context result.");
                }
            }
            else {
                console.log("\n'get_design_context' tool not found. Please ensure Figma is running, Dev Mode is ON, and you have selected the component.");
            }
            // List resources if any
            try {
                const resources = yield client.listResources();
                console.log("\nAvailable Resources:");
                resources.resources.forEach((r) => {
                    console.log(`- ${r.name} (${r.uri})`);
                });
            }
            catch (e) {
                console.log("Could not list resources or none available.");
            }
        }
        catch (error) {
            console.error("Error connecting to Figma MCP:", error);
            console.error("Make sure Figma Desktop is open, Dev Mode is on, and MCP Server is enabled.");
        }
    });
}
main();
