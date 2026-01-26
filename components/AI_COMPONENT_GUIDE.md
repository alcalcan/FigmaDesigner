### This is a rule guide 📏

This guide is for **me (your AI assistant)** to help me generate working, high-quality Figma components that follow the exact standards and declarative patterns of **this project**. 

### 🏷️ Native Figma Terminology
We use **the exact same property names** as the [Figma Plugin API](https://www.figma.com/plugin-docs/api/properties/nodes-primaryaxissizingmode/) (e.g., `primaryAxisSizingMode`, `counterAxisAlignItems`, `itemSpacing`). The only difference is that we describe them in a static JSON structure rather than calling imperative setters.

## 🏗️ The Declarative Pattern
We do **not** write imperative Figma API code. Instead, we use a declarative `NodeDefinition` tree.

### Simple Example:
```typescript
const structure: NodeDefinition = {
  type: "FRAME",
  name: "My Card",
  props: { 
    layoutMode: "VERTICAL", 
    primaryAxisSizingMode: "AUTO", // "Hug Contents"
    itemSpacing: 16,
    paddingTop: 24, paddingRight: 24, paddingBottom: 24, paddingLeft: 24,
    fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
  },
  layoutProps: { parentIsAutoLayout: false },
  children: [
    {
      type: "TEXT",
      props: { 
        characters: "Hello World", 
        fontSize: 16,
        textAutoResize: "HEIGHT" // Important: prevents cropping
      },
      layoutProps: { parentIsAutoLayout: true, layoutAlign: "STRETCH" } // "Fill Container"
    }
  ]
};
```

## 📐 Layout Rules (CRITICAL)
1.  **HUG**: To make a frame fit its content, set `primaryAxisSizingMode: "AUTO"`.
2.  **FILL**: To make a child stretch, set `layoutAlign: "STRETCH"` (for width in vertical stacks) or `layoutGrow: 1` (for width in horizontal stacks).
3.  **parentIsAutoLayout**: Set to `true` for **EVERY** child inside an Auto Layout frame.
4.  **No Cropping**: Always set `textAutoResize: "HEIGHT"` on **TEXT** nodes.

## 🖼️ Assets & State
- **Images**: Use `assetRef` for URLs/Base64 strings in `fills`.
- **Icons**: Use `type: "VECTOR"`, `shouldFlatten: true`, and provide `svgContent`.
- **Dynamic**: Use ternary operators (`? :`) inside the `NodeDefinition` to handle `props`.

## 🛠️ Tooling
After generating code, remind the user to run:
`npx ts-node tools/CompactStructure.ts <file_path>`
