# Component Generator & Reconstruction System Report
**Date:** January 21, 2026  
**Status:** Work In Progress (Layout Generation Alignment Phase)  

## 1. Executive Summary
The objective is to achieve **100% fidelity code generation** for Figma components. This means taking a JSON captured from Figma and generating a TypeScript file (`ComponentGenerator.ts`) that, when run in Figma, produces a node tree pixel-perfectly identical to the original.

Currently, we have **parity issues** with layout alignment. The `JsonReconstructor.ts` (our "Golden Standard" implementation) correctly rebuilds the nodes from JSON. However, the `ComponentGenerator.ts` (which writes code to rebuild nodes) produces components with minor misalignment, specifically in nested Auto Layout frames.

This report documents the architecture, the specific problem, attempted fixes, and the technical roadmap to solve it.

## 2. System Architecture

The system consists of four main stages:

1.  **Extraction (Capture)**:
    -   **Tool:** `code.ts` (Figma Plugin)
    -   **Input:** Selected Figma Node
    -   **Output:** JSON File (`Frame_1682.json`)
    -   **Logic:** Serializes all properties including `relativeTransform`, `layoutMode`, `fills`, etc. Normalizes images and gradients into "Portable Paints".

2.  **Bridge**:
    -   **Tool:** `tools/bridge.ts` (Express Server)
    -   **Function:** Connects the local file system with the Figma Plugin environment. Exposes endpoints like `/generate-to-code`.

3.  **Reconstruction (The "Truth")**:
    -   **Tool:** `components/JsonReconstructor.ts`
    -   **Function:** Reads JSON and uses Figma API to build nodes directly.
    -   **Status:** **Functional.** Handles `layoutAlign`, `layoutGrow`, and `relativeTransform` correctly using a strict order of operations.

4.  **Component Generation (The Problem Area)**:
    -   **Tool:** `tools/ComponentGenerator.ts`
    -   **Function:** Reads JSON and **writes TypeScript strings**. This TypeScript code, when later executed by the user/plugin, attempts to replicate the Reconstruction logic.
    -   **Status:** **Misaligned.** It historically lacked `layoutAlign`/`layoutGrow` and applied transforms in the wrong order.

## 3. The Problem: Layout Misalignment

**Symptoms:**
- Generated components have elements slightly offset (e.g., y=9.5 instead of centered).
- Nested Auto Layout frames do not respect `space-between` or `stretch` correctly.
- Discrepancy between `JsonReconstructor` output (correct) and `ComponentGenerator` output (incorrect).

**Root Cause Analysis:**
Figma's API is sensitive to the **Order of Operations**.
- Setting `relativeTransform` on a node *before* it is added to a parent can result in the transform being relative to the Page (0,0) or being overwritten when parent constraints are applied.
- Auto Layout children behave differently: their `x` and `y` are determined by the parent's `primaryAxisAlignItems`, `padding`, etc.
- If a script sets `x/y` or `relativeTransform` on an Auto Layout child, Figma might ignore it or (worse) interpret it as an "Absolute Position" override if `layoutPositioning` isn't strictly controlled.

## 4. Current State & Recent Fixes

We have modified `tools/ComponentGenerator.ts` to closer match `JsonReconstructor`.

### Fix 1: Added Missing Layout Properties
We added generation logic for:
- `layoutAlign` (STRETCH, INHERIT)
- `layoutGrow` (0, 1)
- `layoutPositioning` (AUTO, ABSOLUTE)

### Fix 2: Order of Operations (Transform Logic)
We identified that `relativeTransform` was being written *before* the `.appendChild(child)` call.
**Change:** Generation now writes the transform assignment *after* `.appendChild(child)`.

**Comparison:**

| Feature | JsonReconstructor (Working) | ComponentGenerator (Previous) | ComponentGenerator (Current) |
| :--- | :--- | :--- | :--- |
| **Logic Location** | Runtime (`applySizeAndTransform`) | Static String Generation | Static String Generation |
| **Transform Timing** | Atomic, during creation | Before Reparenting | **After Reparenting** |
| **Auto Layout Checks** | Checks `inAutoLayout` & `layoutPositioning` before applying matrix | None | None (Blind assignment) |

## 5. Discrepancy & Roadmap

**The Missing Link:**
`JsonReconstructor` uses a helper `TransformHelpers.ts -> applySizeAndTransform()`.
This helper explicitly checks:
```typescript
if (inAutoLayout && positioning !== "ABSOLUTE") {
    // Translation will be ignored anyway in auto-layout flow.
    node.relativeTransform = [[t[0][0], t[0][1], 0], [t[1][0], t[1][1], 0]];
}
```
**`ComponentGenerator` currently lacks this intelligence.** It blindly dumps the `relativeTransform` from the JSON. If the JSON contains a translation (tx, ty) for an Auto Layout child (which captured data *preserves* as the actual position), applying it blindly might conflict with the Auto Layout engine which wants to own the position.

### Recommended Steps to 100% Resolution

1.  **Refine Generator Logic**: Update `ComponentGenerator.ts` to implement the logic from `applySizeAndTransform` during code generation.
    -   *If* parent is known to be Auto Layout (needs tracking parent context in recursion) AND child is `layoutPositioning: "AUTO"`:
    -   **Strip User Translation**: Generate code that sets `relativeTransform` with `0, 0` for the translation components (tx, ty), preserving only scale/rotation.
    -   Let the Auto Layout engine handle the positioning properties (`layoutAlign`, `layoutGrow`).

2.  **Verify Parent Context**: The generator currently processes nodes recursively but might not fully be aware of the *parent's* layout mode when generating the *child's* code block. We may need to pass `parentLayoutMode` down the recursive `generateNodeCode` function.

3.  **Validate**: Regenerate `Frame_1682.ts` and inspect if the `relativeTransform` for children like "Frame 1607" has `0` for offsets.

## 6. Libraries & Tools
-   **Figma Plugin API**: The target runtime.
-   **TypeScript**: Source language.
-   **Node.js**: Execution environment for the generator script.
-   `fs / path`: For file system access.
-   **JSON**: Intermediate data format.

---
**Author:** Antigravity (Agent)
**For:** User & External Review
