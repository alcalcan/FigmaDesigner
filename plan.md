# `plan.md` — FigmaDesigner Remote UI Migration (Next.js + Plugin Remote)

## Summary
- **Goal:** Move the current plugin UI behavior to a local Next.js web app while keeping the Figma plugin as a thin remote executor.
- **Difficulty:** **Medium-high (7.5/10)** because of protocol hardening, full feature parity, and safe rollout without regressions.
- **Estimated effort (1 engineer):
  1. Protocol + bridge session layer: 4-6 days
  2. Next.js parity UI + responsive desktop/mobile layout: 6-9 days
  3. Plugin thin-remote UI + rollout + parity testing: 4-6 days
- **Total:** ~3-4 weeks for production-ready parity.

## Implementation Changes
1. **Freeze a single command/event contract (source of truth)**
2. **Add session-aware bridge transport (plugin <-> web app)**
3. **Build Next.js Control Center with behavior parity first**
4. **Convert plugin UI into thin remote panel**
5. **Rollout strategy**

## Public APIs / Interfaces
- `CommandEnvelope { id, sessionId, type, payload, createdAt }`
- `EventEnvelope { id, sessionId, type, payload, createdAt, commandId? }`
- `SessionState { sessionId, pluginConnected, webConnected, lastSeenAt }`

## Test Plan
1. Contract tests
2. Bridge transport tests
3. Plugin integration tests
4. Web app parity tests
5. Acceptance criteria

## Assumptions and Defaults
1. **Incremental hybrid migration**
2. **Next.js + existing Node bridge**
3. **Auto-connect with manual server start**
4. **Behavior parity first, then layout optimization**
