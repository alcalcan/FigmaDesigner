# FigmaDesigner Web Control Center

## Run locally
```bash
npm --prefix web install
npm --prefix web run dev
```

The app runs at `http://127.0.0.1:3000` and connects to the bridge at `http://127.0.0.1:4000`.

## Build
```bash
npm --prefix web run build
npm --prefix web run start
```

## Session flow
1. Plugin opens/maintains a bridge session.
2. Web app sends commands via `/session/:id/command`.
3. Plugin polls commands via `/session/:id/poll`.
4. Plugin emits progress/results via `/session/:id/event`.
5. Web app receives events via `/session/:id/events` (SSE).
