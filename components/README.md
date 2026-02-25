# 🏗️ Figma Component Development Guide

This document is a comprehensive guide for anyone building components in this plugin. It explains how to use our **Declarative Layout Engine** to create maintainable, data-driven Figma components.

---

## 1. Core Philosophy: Declarative UI
In traditional Figma plugin development, you create nodes step-by-step:
```typescript
// ❌ Imperative Style (Hard to read)
const frame = figma.createFrame();
frame.resize(100, 100);
frame.layoutMode = "VERTICAL";
const text = figma.createText();
frame.appendChild(text);
```

In our system, you describe the **entire tree** as data:
```typescript
// ✅ Declarative Style (Easy to read & maintain)
const structure: NodeDefinition = {
    type: "FRAME",
    props: { layoutMode: "VERTICAL", fills: [...] },
    children: [ { type: "TEXT", props: { characters: "Hello" } } ]
};
```
The `BaseComponent` takes this "Blueprint" and builds the actual Figma nodes for you.

---

## 2. Anatomy of a Component

Every component follows this exact pattern:

1.  **Imports**: Grab types from `../../BaseComponent`.
2.  **Class**: Extend `BaseComponent`.
3.  **`create(props)`**: The entry point. It receives data (title, images, etc.) and returns a Figma node.
4.  **`NodeDefinition`**: This is your JSON-like object describing the UI.
5.  **`renderDefinition`**: Call this to turn your Blueprint into reality.

---

## 3. The `NodeDefinition` Reference

Here is a breakdown of the most common properties you'll use.

### `type` (The Node Identity)
- `FRAME`: Use this for everything that contains other things. **Always use for Auto Layout.**
- `TEXT`: For any text. Automatically handles font loading if you provide a `font` prop.
- `VECTOR`: For icons and complex shapes. Use `svgContent` to pass the raw path.
- `COMPONENT`: For nesting other components (e.g., using a `Button` inside a `Card`).

### `props` (The "Inside" Styling)
These values match Figma's API properties but are handled safely.
- **Layout**: `layoutMode`, `itemSpacing`, `paddingTop/Right/Bottom/Left`.
- **Align**: `primaryAxisAlignItems`, `counterAxisAlignItems`.
- **Style**: `fills`, `strokes`, `cornerRadius`, `opacity`, `visible`.
- **Text**: `characters`, `fontSize`, `font: { family: "...", style: "..." }`.

### `layoutProps` (The "Outside" Box)
- `width`, `height`: Set to a number for fixed size, or omit for Auto sizing.
- `parentIsAutoLayout`: Set to `true` if this node's parent has a `layoutMode`.
- `layoutPositioning`: Set to `"ABSOLUTE"` to break out of Auto Layout.

---

## 4. Building the `recipe_card` (Step-by-Step)

Let's look at how the `recipe_card` was actually built.

### Step 1: Handling Dynamic Data
We want the card to show different titles. We use the `props` passed into `create`:
```typescript
const structure: NodeDefinition = {
  type: "TEXT",
  props: {
    characters: props.title || "Unknown Recipe", // Fallback logic
```

### Step 2: Nesting Frames
The `recipe_card` has a "Content Container" and a "Footer". We nest them in the `children` array:
```typescript
children: [
  { name: "Content", type: "FRAME", ... },
  { name: "Footer", type: "FRAME", ... }
]
```

{
  type: "VECTOR",
  shouldFlatten: true,
  svgContent: SVG_timer_icon,
  layoutProps: { width: 18, height: 18 }
}
```

### Step 4: Using Frames for Scalable Icons (SVG Tip) 🖼️
If an icon has specific internal padding (like hamburger lines not touching edges), using `type: "VECTOR"` might flatten the paths and lose that padding, resulting in distortion when resized.
- **Solution:** Wrap SVG content in a `FRAME` instead of a `VECTOR` to preserve the aspect ratio and intended alignment.

```typescript
{
  type: "FRAME",
  name: "Icon Wrapper",
  svgContent: SVG_icon,
  layoutProps: { width: 24, height: 24 }
}
```

---

## 5. The Compactor: Professional Code 💎

After you write your structure by hand, it might look messy. We use a tool to "Compact" the properties onto single lines.

**How to run it:**
```bash
npx ts-node tools/CompactStructure.ts components/Alex_CookBook/recipe_card/recipe_card.ts
```

- **Consistency**: It ensures all components in the project look like they were written by the same person.

### ⚠️ Safety First: Backup & Compare
The Compactor is a powerful code-rewriting tool. To ensure it hasn't changed your logic, always run it with this "Backup & Compare" workflow:

```bash
# 1. Create a quick backup
cp path/to/file.ts path/to/file.ts.bak

# 2. Run the compactor
npx ts-node tools/CompactStructure.ts path/to/file.ts

# 3. Compare the results
diff -u path/to/file.ts.bak path/to/file.ts
```
If everything looks good, you can safely delete the `.bak` file.

---

## 6. Layout Mastery: Hug vs. Fill 📐

To prevent content from being cropped (e.g., text being cut off), you must understand how to control sizing.

### 1. "Hug Contents" (Hugging)
Use this when you want a frame to shrink or grow based on what's inside it.
- **How:** In `props`, set `primaryAxisSizingMode: "AUTO"` or `counterAxisSizingMode: "AUTO"`.
- **Text Safety:** For `TEXT` nodes, always set `textAutoResize: "HEIGHT"` or `"WIDTH_AND_HEIGHT"`. This ensures the text box expands to fit the characters.

### 2. "Fill Container" (Filling)
Use this when you want a child to stretch and take up all available space in its parent.
- **Parent is Vertical:** 
    - Set `layoutAlign: "STRETCH"` to fill the **width**.
    - Set `layoutGrow: 1` to fill the remaining **height**.
- **Parent is Horizontal:** 
    - Set `layoutGrow: 1` to fill the remaining **width**.
    - Set `layoutAlign: "STRETCH"` to fill the **height**.

### 3. The "No-Crop" Checklist
✅ Every `TEXT` node should have `textAutoResize` set.
✅ The root Frame should usually have `primaryAxisSizingMode: "AUTO"` to grow with its content.
✅ Large containers should have `fills: []` (empty array).
✅ Internal frames (like a "Details" stack) should have `layoutAlign: "STRETCH"` if they need to fill the width.
✅ **Flatten your structure**: Avoid deeply nested frames for simple text stacks. This makes `HUG` behavior much more predictable and easier to debug.

### 4. The "Fill Container" Gotcha ⚠️
If you set `layoutAlign: "STRETCH"` on a child node, you MUST also set the corresponding axis sizing to `"FIXED"`, NOT `"AUTO"`.
- **Why**: Figma treats `AUTO` sizing (Hug) as higher priority. If you say "Hug Contents" (`AUTO`), Figma will ignore your "Fill Container" (`STRETCH`) instruction.
- **Fix**: For a Header filling width: `primaryAxisSizingMode: "FIXED"`, `layoutAlign: "STRETCH"`.

---

## 7. AI Generation Rules 🤖

If you are using an AI (like ChatGPT or Gemini) to help write these components, **copy-paste these rules into your prompt** to ensure it generates working code:

1.  **Crucial: `parentIsAutoLayout`**: Every child node inside a folder/frame that has `layoutMode` MUST have `"parentIsAutoLayout": true` in its `layoutProps`. If the node is the very top-root frame, it should be `false`.
2.  **Images & Avatars**: Do NOT use `imageHash`. Use `assetRef` for URLs or Base64 strings.
    *   *Correct:* `fills: [{ type: "IMAGE", assetRef: props.avatarUrl, scaleMode: "FILL" }]`
3.  **Container Frames**: Frames used just for grouping should have `fills: []` to remain transparent.
4.  **Vector Icons**: Always use `type: "VECTOR"`, `shouldFlatten: true`, and provide the `svgContent` from an import.
5.  **Imports**: Always import `BaseComponent`, `NodeDefinition`, and `ComponentProps` from `../../BaseComponent`.

---

## 8. Lessons Learned: The "Fill Container" Trap 🪤

We encountered a critical issue where children set to `Fill Container` (`layoutGrow: 1`) would collapse to width 0 if their parent was set to `Hug Contents` (`primaryAxisSizingMode: "AUTO"`).

### The Scenario
- **Parent**: Horizontal Frame, set to `Hug Contents` (Auto width).
- **Children**: Cards inside, set to `Fill Container` (Grow to fill width).

### The Conflict
Figma logic crash: "Parent says 'I am as wide as my children', but Children say 'We are as wide as the Parent'." This circular dependency causes the layout to collapse.

### The Fix
If you want children to `Fill Container`, the Parent **MUST** have a fixed size on that axis (or be stretched by *its* parent).
- **Correct Setup**:
  - Parent: `primaryAxisSizingMode: "FIXED"` (and optionally `layoutAlign: "STRETCH"` to follow its own parent).
  - Children: `layoutGrow: 1`.

---

## 9. Handling Gaps Dynamically (The Top Bar Rule) ↔️

In complex components like `top_bar`, you might need the gap between elements to behave differently depending on what is rendered:

### The Problem
If a Top Bar has a `Left Section`, a `Center Section`, and a `Right Section`, you want a fixed gap (e.g., `itemSpacing: 48`) between them so they don't look awkwardly spaced.
If a Top Bar **only** has a `Left Section` and a `Right Section`, a fixed 48px gap will put them right next to each other, leaving the rest of the Top Bar empty. We want them pushed to opposite edges!

### The Solution: Conditional Alignment
Figma uses `primaryAxisAlignItems: "SPACE_BETWEEN"` to implement "Auto Gap" (pushing elements to opposite edges). To make a component adaptable, evaluate its structure before returning the definition:

```typescript
// 1. Check if the middle element exists
const hasCenterSection = centerSection.children && centerSection.children.length > 0;

// 2. Conditionally set the alignment
const finalAlignItems = hasCenterSection ? "CENTER" : "SPACE_BETWEEN";

// 3. Apply to the root structure
const structure: NodeDefinition = {
    type: "FRAME",
    props: {
        primaryAxisAlignItems: finalAlignItems, 
        itemSpacing: 48 // Only respected when align is NOT SPACE_BETWEEN
    },
    // ...
}
```
**Rule of thumb:** If the center is empty, let Auto Gap (`SPACE_BETWEEN`) take over. If the center is present, strictly enforce your `itemSpacing` with `CENTER`.

---

## 10. The "Empty Frame" 100x100 Gotcha (Hugging Heights) 📦

When building containers that should dynamically `HUG` their contents vertically (like a `counterAxisSizingMode: "AUTO"` in a horizontal `TopBar`), beware of empty frames!

### The Problem
If your API attempts to create an empty `FRAME` (for example, a `Center Section` that has no navigation links to display), Figma will instantiate it with a default intrinsic size of **100x100 pixels**. 
Because your `TopBar` is set to `HUG` its height around its tallest child, that invisible 100px empty spacer will immediately stretch your entire TopBar to be 100px tall!

### The Solution: Omit Empty Containers
Before adding structural sections or spacers to your final `children` array, you must explicitly check if they have content:

```typescript
// ❌ WRONG: Pushing a frame unconditionally
children.push(centerSection); 
// If centerSection has no children, it becomes 100x100 and destroys your height hug!

// ✅ RIGHT: Omit empty frames entirely
if (centerSection.children && centerSection.children.length > 0) {
    children.push(centerSection);
}
```
**Rule of thumb:** If a frame is strictly for Auto Layout wrapping and contains no fills or UI elements, do not push it to the `children` array unless it has at least one child inside it.

### The "Shadow Clipping" Trap 🌑
If your component has children with high-radius shadows (like floating islands), the parent frame might clip those shadows if `clipsContent: true`.

---

## 11. Lesson Learned: `layoutPositioning = "ABSOLUTE"` Runtime Error

Error seen:
`Can only set layoutPositioning = ABSOLUTE if the parent node has layoutMode !== NONE`

### Why this happens
- You set `node.layoutPositioning = "ABSOLUTE"` before the node is appended to an Auto Layout parent.
- Or the target parent uses `layoutMode: "NONE"`.

### Reliable pattern (always use this order)
```typescript
parent.appendChild(child);                  // parent must be HORIZONTAL or VERTICAL
child.layoutPositioning = "ABSOLUTE";      // set AFTER append
child.x = ...;
child.y = ...;
```

### Extra reminder for connector/guide lines in threads
- Never keep reply columns on `layoutGrow: 1` if line height is computed from content. It can inflate height and create giant tails.
- Compute line end from concrete child heights (e.g., first reply + gap + second reply), not from a potentially stretched container.
- **Solution:** Always set `clipsContent: false` on components and their demo wrappers if they contain floating or shadowed elements.

---

## 11. Design Principles 🎨

To create professional-looking components, follow these visual rules:

### 1. Button Sizing (Hug vs. Fill)
- **Rule:** Generally, buttons and individual action items should **Hug Contents** (`AUTO`).
- **Why:** Stretching a button with a short label (like "Follow") across a wide card looks unbalanced and takes up unnecessary visual weight.
- **Exception:** Only use "Fill Container" (`STRETCH`) for buttons if you are building a specific mobile-style "Full Width Button" UI.

### 2. Item Spacing
- Use standard spacing (8px, 12px, 16px, 24px) for `itemSpacing`. Consistent spacing makes the UI feel "snapped" and intentional.

---

## 12. Pro Tips
- **Use HUG vs FILL**: If you want a frame to take the size of its children, don't set a `width`/`height` in `layoutProps` and use `primaryAxisSizingMode: "AUTO"`.
- **Absolute Positioning**: If you need a badge in the corner of an image, use `layoutPositioning: "ABSOLUTE"` in the child's `layoutProps`. 
    > [!IMPORTANT]
    > **The Absolute Gotcha**: Figma's API ONLY allows Absolute Positioning for children of nodes with `layoutMode` set to `VERTICAL` or `HORIZONTAL`. If your parent frame has `layoutMode: "NONE"`, setting `layoutPositioning: "ABSOLUTE"` will trigger a crash.
- **Text Truncation vs. AutoResize**: Be careful! Setting `textTruncation: "ENDING"` on a text node that is supposed to `HUG` its parent can sometimes cause the parent to ignore the text's actual height. If you want a truly dynamic card, remove truncation and let the text wrap naturally with `textAutoResize: "HEIGHT"`.
- **Fonts**: Always specify the `font` property in `TEXT` nodes if it's not the default Inter.

---

## 13. Lessons Learned: Structural Identity vs. Visual Approximation 🏗️

When replicating complex Figma components, especially those with multiple variants (like "Aligned" vs "Centered"), you might be tempted to just **scale** a shared group to visually match the target.

### The Trap 🪤
You see a group of shirts that looks 50% smaller in the "Aligned" variant. You write:
```typescript
// ❌ Visual Approximation
relativeTransform: [[0.5, 0, x], [0, 0.5, y]]
```
This serves as a "visual guess." It might look close, but it will often drift by a few pixels, and spacing will be a nightmare to debug.

### The Solution: Structural Identity ✅
Inspect the *actual* structure of the target variant in Figma. Does the designer use a scale of 0.5? or did they resize the group and items explicitly with a scale of 1?

**Always match the Reference Structure:**
If the target variant has a group width of `357` and item width of `176.95`, use those **exact numbers** with `scale: 1`.

```typescript
// ✅ Structural Identity
scale = 1; // Match the source scale
groupWidth = 357; // Match the source dimensions
shirtWidth = 176.95; // Match the source children
```

**Why?**
1.  **Pixel Perfection**: You stop guessing scaling factors (is it 0.55? 0.5869?) and use integer/exact coordinates.
2.  **Asset Specificity**: Sometimes a specific layout requires specific assets (e.g., pre-cropped images). Don't be afraid to import layout-specific assets to ensure the component behaves exactly as the design intended.

---

## 14. Lessons Learned: The Silent Build Failure & Font Loading 🕵️‍♂️

### The Incident
We spent hours debugging why a font ("Champions Display") wasn't loading. The code looked perfect, logs were added, but **nothing appeared in the console**.

### The Root Cause 🐛
A **typo in an import path** (`Competition_newsletters` vs `Newsletters_competititon`) in a *different* file caused the TypeScript build to fail silently or partially. The `code.js` file wasn't being updated, so we were running old code despite hitting "Save".

### Key Takeaways
1.  **Check the Build Date**: If your changes aren't showing up, run `ls -l code.js` (or check the file timestamp). If it's old, your build is failing.
2.  **Verify the Build Output**: Use `grep "MyUniqueLogString" code.js` to PROVE your new code is actually in the bundle.
3.  **Dynamic Fonts**: `figma.loadFontAsync({ family: "Champions", style: "Display" })` often fails if you don't use the *exact* internal name.
    *   **Solution**: Use `figma.listAvailableFontsAsync()` to find the *real* name on the user's system, then load *that* specific object.
4.  **Toast Debugging**: `console.log` is great, but `figma.notify("Debug: ...")` is better because it's impossible to miss on the canvas.
