# Component Development Story

This document explains the recommended workflow for creating and maintaining components in this library. Follow these principles to ensure consistency, maintainability, and high performance.

## 1. The Power of Reuse (DRY)
The most important rule: **Don't redefine what already exists.** 
If you are building a complex component (like an expanded search bar), import the base components and reuse them.

```typescript
import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { search_bar } from "../search_bar/search_bar";

export class search_bar_expanded extends BaseComponent {
    async create(props: ComponentProps) {
        // Reuse the base component logic
        const base = new search_bar();
        const root = await base.create(props);
        
        // Only add the "delta" (the new parts)
        const dropdown = figma.createFrame();
        // ...
        return root;
    }
}
```

## 2. Declarative UI with `NodeDefinition`
For new structures, use the `NodeDefinition` JSON format. This allows the `BaseComponent` to handle layout, styling, and SVG injection consistently.

- **Props**: Use for styling (fills, strokes, cornerRadius).
- **LayoutProps**: Use for positioning and sizing (x, y, width, height, layoutMode).
- **SVG**: Use `svgContent` to inject SVG strings directly.

## 3. Tooling for Clean Code
Manual JSON editing can get messy. We have tools to keep the code compact and readable.

### Reformatter
If your `NodeDefinition` is too long or messy, use the `Reformatter` tool. It compacts `props` and `layoutProps` into single lines while keeping the tree structure readable.

**Usage:**
```bash
npx ts-node tools/Reformatter.ts components/Alex_CookBook/your_component/your_component.ts
```

### Component Refactorer
If you have an old component written using imperative Figma API calls (e.g., `figma.createFrame()`), the `ComponentRefactorer` can automatically convert it to the declarative `NodeDefinition` format.

**Usage:**
```bash
npx ts-node tools/ComponentRefactorer.ts components/Alex_CookBook/your_component/your_component.ts
```

## 4. Best Practices
- **Hugging Contents**: Use `primaryAxisSizingMode: "AUTO"` or `counterAxisSizingMode: "AUTO"` to let frames wrap their children (like dropdown menus).
- **Transparency**: Avoid adding background fills to large root containers. Let them be transparent (`fills: []`) unless they specifically need a background.
- **Font Loading**: Always `await figma.loadFontAsync()` before setting text characters. "Inter Regular" is the default.
- **Absolute Positioning**: Ensure a node is appended to a layout-aware parent before setting `layoutPositioning = "ABSOLUTE"`.
