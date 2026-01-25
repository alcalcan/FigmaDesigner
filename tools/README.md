# Tools Documentation

This directory contains the core tooling for the Figma-to-Code pipeline. These scripts handle everything from extracting design data to generating, refactoring, and verifying clean TypeScript components.

## Core Pipeline

### `bridge.ts`
**The Orchestrator.**
A Node.js server that acts as the bridge between the Figma Plugin and the local filesystem.
-   **Endpoints:** Handles requests to list extractions, generate code (`/generate-to-code`), move files, and delete components.
-   **Automation:** automatically triggers `ComponentGenerator` and `ComponentRefactorer` when requested.
-   **Asset Management:** Handles saving of images and assets from the plugin.

### `ComponentGenerator.ts`
**The Generator.**
Converts raw JSON data extracted from Figma into a functional TypeScript component file (`.ts`).
-   **Features:** Handles AutoLayout conversion, text property mapping, vector path generation, and asset bundling.
-   **Optimization:** Automatically optimizes large image assets using `sips` if they exceed 2MB.

### `ComponentRefactorer.ts`
**The Compiler.**
Transforms the raw, imperative code generated effectively into a clean, declarative `NodeDefinition` structure.
-   **Why:** Raw Figma API calls are verbose and hard to read. This tool converts them into a React-like (or object-like) JSON definition.
-   **Features:**
    -   Detects and flattens vector structures (`shouldFlatten`).
    -   Compacts simple property assignments.
    -   Handles boolean operations/groups correctly.

## MCP Integration Tools (Model Context Protocol)
These tools use the Figma MCP Server to interact directly with the active Figma document.

### `capture.ts`
**Active Capture Service.**
Connects to the Figma MCP server and watches for selection changes.
-   **Function:** When you select an element in Figma, it automatically captures the design data and saves it to `tools/extraction/[Project]/[Element]_[Timestamp].txt`.

### `verify_design.ts`
**Design Verification CLI.**
A verification tool that checks if your code matches the Figma design.
-   **Interactive Mode:** Watch selection and verify in real-time.
-   **Checks:** Verifies Tailwind classes (padding, colors, radius) against the selected Figma element properties.

## Utilities

### `CleaningService.ts`
**Cleanup Helper.**
Safely removes usages of deleted components from your `pages/` directory to prevent build errors.
-   **Action:** Replaces removed component instances with `new Placeholder("ComponentName")`.

### `Reformatter.ts`
**Manual Formatter.**
A standalone script to prettify the JSON `NodeDefinition` within an existing component file.
-   **Note:** Primarily for manual usage using `node tools/Reformatter.ts <path>`. Redundant if you use the standard generation pipeline.

### `build.ts` & `pre-build.ts`
Build automation scripts that wrap `esbuild` or `ts-node` to compile the plugin and other tools.

### `manual_cleanup.ts`
Trigger script to run `CleaningService` manually on specific files.
