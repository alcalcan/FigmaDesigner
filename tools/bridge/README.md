# Bridge Server Documentation

The **Bridge Server** acts as the intermediary between the Figma Plugin and the local file system. It handles capturing designs, saving assets, and triggering component generation.

## 📂 Structure

The bridge code has been refactored into a modular structure under `tools/bridge/`:

- **`bridge.ts`**: Main entry point. Starts the HTTP server (Port 4000) and delegates requests.
- **`state.ts`**: Manages shared state like the "pending command" queue and CLI spinners.
- **`types.ts`**: Shared TypeScript interfaces.
- **`utils.ts`**: Helper functions (file system walking, strict sanitization, etc.).
- **`server_tools/`**: Contains core logic classes moved from the root `tools/` folder (`ComponentGenerator`, `CleaningService`, etc.).
- **`handlers/`**: Request handlers grouped by domain:
  - **`extraction.ts`**: Endpoints for listing and reading captured JSONs (`/list`, `/read`).
  - **`components.ts`**: Endpoints for managing generated components (`/list-components`, `/delete-component`).
  - **`assets.ts`**: Endpoints for saving captured data and assets (`/save-packet`, `/save-asset`).
  - **`generation.ts`**: Endpoints for triggering code generation and previews (`/generate-to-code`, `/generate-code-preview`).
  - **`system.ts`**: System endpoints (`/poll`, `/log`, `/delete`, `/move`).

## 🚀 Running the Server

### Standard Development Mode
This runs the bridge, plugin build watcher, and Next.js web control center together. This is the recommended way to work.
```bash
npm run watch
```

The stack uses:
- Bridge: `http://127.0.0.1:4000`
- Web Control Center: `http://127.0.0.1:3000`

### Standalone Bridge
If you only want to run the Bridge Server without rebuilding the other tools:
```bash
npm run bridge
```

### Restarting
If you make changes to any file in `tools/bridge/`, `nodemon` will automatically restart the server.
If you need to manually restart (e.g., after installing new dependencies), press `Ctrl+C` in the terminal and run the command again.

## 🔌 API Endpoints

### System
- `GET /poll`: Used by the plugin to check for pending commands (e.g., "capture").
- `POST /log`: Logs messages from the plugin to the local terminal.

### Remote Session Transport
- `POST /session/open`: Create a session and return `sessionId` + web URL (plugin-owned session authority).
- `GET /session/:id/poll`: Plugin fetches next command from ordered queue.
- `POST /session/:id/command`: Web app enqueues a command with optional idempotency key.
- `POST /session/:id/event`: Plugin emits command progress/results and acknowledgements.
- `GET /session/:id/events`: SSE stream consumed by the web app.
- `GET /session/:id/status`: Session health and queue stats.
- `GET /session/active-plugin`: Resolve the active plugin session for web session sync.

### Extraction & Assets
- `POST /save-packet`: Atomic save of a component capture (JSON + Assets).
- `GET /list`: Lists all captured designs in `tools/extraction/`.
- `GET /read?path=...`: Reads a specific capture JSON.

### Generation
- `POST /generate-code-preview`: Generates a temporary preview of a component.
- `POST /generate-to-code`: Permanently generates a component into `components/`.
- `POST /refactor-code`: Manually triggers the refactoring logic on an existing file.

### Management
- `POST /delete`: Deletes a captured design (and its assets/folder if empty).
- `POST /move`: Moves a capture or a generated component to a different folder.
- `POST /delete-component`: Deletes a generated component and cleans up `components/index.ts`.
