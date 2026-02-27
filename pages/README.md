# 📐 Pages Layout & Structure Guide 

This document explains exactly how we structure, size, and layout nodes in our Demo Pages (`/pages/.../*.ts`) so they are 100% responsive, scalable, and match the Component API properly.

---

## 1. The Core Philosophy
In the pages, we are NOT using the declarative `NodeDefinition` JSON object (which is used in `components/*`). Instead, we are using the **Imperative Figma API** directly (`figma.createFrame()`, `figma.createText()`). 

Because of this, we must explicitly set resizing modes on **every single node**. If you forget, Figma relies on dangerous defaults (like `FIXED`) which prevents our layouts from adapting to their content.

---

## 2. Global Strategy: Hug Height, Fill Width
When building page elements (Sections, Containers, Cards, Titles), follow this exact rule:
> **The main element fills the page width, and hugs the content height.**

### 1. Root Container
The root frame of the page acts as the simulated canvas.
```typescript
const root = figma.createFrame();
root.layoutMode = "VERTICAL";
// Fill Width
root.counterAxisSizingMode = "FIXED"; 
root.resize(1200, 100); // Set initial width, height is arbitrary because it hugs
// Hug Height
root.primaryAxisSizingMode = "AUTO"; 
```

### 2. Main Child Elements (Sections, Feature Headers)
They should stretch to fill the root horizontally, and shrink-wrap vertically.
```typescript
const section = figma.createFrame();
section.layoutMode = "VERTICAL";

// ⭐ Rule 1: Fill Page Width
section.layoutAlign = "STRETCH"; 
section.counterAxisSizingMode = "FIXED"; // CRITICAL: STRETCH requires FIXED sizing.

// ⭐ Rule 2: Hug Height
section.primaryAxisSizingMode = "AUTO";
```

### 3. Inner Elements (Cards, Text)
Inner elements should either `FILL` the parent or `HUG` themselves inside.

#### For Containers (Cards):
```typescript
const card = figma.createFrame();
card.layoutMode = "VERTICAL";

// Card Width: Fill
card.layoutAlign = "STRETCH";
card.counterAxisSizingMode = "FIXED";

// Card Height: Hug
card.primaryAxisSizingMode = "AUTO";
```

#### For Text Nodes:
Figma text nodes must have `textAutoResize` explicitly applied to prevent cropping.
```typescript
const text = figma.createText();

// Option A: Text fills the width of the card and wraps downwards (Hugs height)
text.layoutAlign = "STRETCH";
text.textAutoResize = "HEIGHT";

// Option B: Text hugs its own text exactly (both width and height)
text.layoutAlign = "MIN"; // default
text.textAutoResize = "WIDTH_AND_HEIGHT";
```

---

## 3. Dealing with Complex Charts / Absolute Plots
Charts often require a `plot` area with `layoutMode = "NONE"` so bars and splines can be absolutely positioned. 

How do we hug height if there is a fixed plot?
The trick is to make the `plot` exactly as tall and wide as it needs to be with `FIXED / FIXED`, but make its **parent Card** `HUG` the height.

```typescript
// 1. Plot Area uses FIXED dimensions
const plot = figma.createFrame();
plot.layoutMode = "NONE";
plot.layoutAlign = "STRETCH";           // Fills width of card
plot.primaryAxisSizingMode = "FIXED";   // FIXED height
plot.counterAxisSizingMode = "FIXED";   // FIXED width
plot.resize(root.width - padding, 270); // Give it absolute bounds

// 2. Parent Card HUGS Height
const card = figma.createFrame();
card.layoutMode = "VERTICAL";
card.primaryAxisSizingMode = "AUTO";    // Wraps the FIXED plot + Header Text
card.layoutAlign = "STRETCH";           
```

---

## 4. API Calls & Data Connections

### Where do variables come from?
Our page files instantiate components imported from `../../components/`. 
```typescript

const tb = new top_bar();
const node = await tb.create({ variant: "simple" });
```
We pass `props` manually in demos, but eventually, real plugin endpoints inject these.

### What do you specifically call?
When adding text or sections, we abstract it nicely:
2. `renderDefinition()` is called heavily under the hood inside `BaseComponent.ts`.

---

## 5. Performance & Styling Gotchas ⚡

### 1. The "Empty Frame" 100x100 Default
Figma defaults empty frames to 100x100px. If you create a frame intended to `HUG` contents but don't append anything, it will stretch your layout.
- **Rule:** Conditionally create/append frames only if they have content, or precisely define their size if they must exist.

### 2. The "Shadow Clipping" Trap 🌑
Shadows with high radius (like those in our "Floating Island" TopBars) are often clipped by parent containers.
- **Rule:** Set `.clipsContent = false` on the root node and any demo wrappers (`shadowWrapper`) to ensure shadows render correctly.

---

## 6. Cheat Sheet (Imperative Figma Layouts)

| Layout Goal | horizontal container property | vertical container property |
| ----------- | ----------------------------- | --------------------------- |
| **Hug Width** | `primaryAxisSizingMode = "AUTO"` | `counterAxisSizingMode = "AUTO"` |
| **Fill Width** | `layoutGrow = 1` | `layoutAlign = "STRETCH"; counterAxisSizingMode = "FIXED"` |
| **Hug Height**| `counterAxisSizingMode = "AUTO"` | `primaryAxisSizingMode = "AUTO"` |
| **Fill Height**| `layoutAlign = "STRETCH"; counterAxisSizingMode = "FIXED"` | `layoutGrow = 1` |

> **Remember:** `"AUTO"` overrides everything. If a parent is `"AUTO"`, the child cannot `STRETCH` against it.
