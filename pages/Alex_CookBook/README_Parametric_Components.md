# Parametric Component Creation in Figma

This document outlines the conclusions drawn from the `top_menu.ts` component and how its parametric creation approach significantly simplifies building complex, variant-rich UI components in the Figma plugin environment. 

## The Core Concept

Instead of creating disparate, rigidly structured components or relying on heavy imperative Figma API scripts (`figma.createFrame()`, etc.), the **Parametric Component Approach** uses a single `create(props)` method. This method accepts a highly semantic, data-driven configuration object and returns a dynamically constructed `NodeDefinition` tree, which is then rendered by the `BaseComponent` engine.

### Key Benefits Identified in `top_menu.ts`

1. **Single Point of Entry (`create(props)`)**: Consumers don't need to know how the component is structured internally. They just pass what they want: `hasLogo: true`, `navItems: ["Home", "About"]`, and the component figures out the layout.
2. **Semantic Feature Flags**: Using simple booleans (`isFloating`, `showSearchInCenter`, `showNotifications`) allows the component to internally handle complex stylistic changes simultaneously (e.g., `isFloating` automatically removes side padding, adds full border radius, and injects a drop shadow).
3. **Data-Driven Repeaters**: By passing arrays of objects (`navItems`), the component iterates and constructs the UI dynamically, determining active states, icon placements, text styling, padding, and grow behavior automatically.
4. **Declarative Rendering**: Moving away from imperative Figma node creation towards a JSON-based `NodeDefinition` tree makes visualizing the component structure much easier and code maintenance simpler.
5. **Architectural Escape Hatches**: When strict parameters aren't enough, the pattern provides injection points (`customCenterNode`, `customRightNode`) for last-resort custom nodes, while keeping standard usage on semantic params (`main_body`, `customRightItems`, `navItems`).

## Top Menu Parametric Rules (Current)

These are the concrete rules we follow in `TopMenuDemo.ts`:

1. **Demo calls should be semantic**: Prefer simple params (`text`, `image`, `gap`, `padding`, `grow`, `main_body`) and avoid raw `type/frame/props/layoutProps` blocks in demo pages.
2. **Use `main_body` for root frame styling**: Root padding/fill/stroke/shadow/alignment belong in `main_body`.  
   - `main_body.width` / `main_body.height` are treated as layout sizing for the TopMenu frame.
3. **Use `navItems` as content objects, not node trees**:  
   - Supported simple nav fields include:  
   `text`, `name`, `isSelected`, `image`, `imageWidth`, `imageHeight`, `iconPosition`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingBottom`, `gap`, `grow`, `fontFamily`, `fontStyle`, `fontSize`, `textColor`.
4. **Use `customRightItems` for humane right-side composition**:  
   - Supported item forms: `{ text: "..." }`, `{ image: "..." }`, `{ space: N }`.
5. **Use custom node escape hatches only when truly necessary**:  
   - `customCenterNode` / `customRightNode` are fallback mechanisms, not the default authoring path.

## Applying the Pattern: A Refactoring Example

To see how this pattern simplifies the codebase, consider the `sidebar` component and its usage in `SidebarsLayoutDemo.ts`.

### The Current Problem
In `SidebarsLayoutDemo.ts`, standard sidebars are created nicely via `sb.create({ variant: "default" })`. However, to create the **Ecommerce Filter Variant**, the demo falls back to writing over 150 lines of imperative Figma API code in a custom method `createEcommerceFilterSidebarVariant()`. This breaks the component abstraction, duplicates effort, and clutters the demo file.

### The Parametric Solution
By adopting the parametric approach, we can update the `sidebar.ts` component to handle this natively:

1. **Extend the Props Interface**: Add a new variant and specific filter properties.
   ```typescript
   export interface SidebarProps extends ComponentProps {
       variant?: "default" | "collapsed" | "floating" | "floating-collapsed" | "ecommerce-filter";
       filterCategories?: {
           name: string;
           items: { label: string; count?: string; selected?: boolean }[];
       }[];
   }
   ```

2. **Handle the Logic in `create()`**: Inside `sidebar.ts`, we check for `variant === "ecommerce-filter"`. If true, we construct the `NodeDefinition` tree dynamically based on `props.filterCategories`.

3. **Simplify the Demo**: The massive block of imperative code in `SidebarsLayoutDemo.ts` gets replaced by a clean, semantic call:
   ```typescript
   await sb.create({
       variant: "ecommerce-filter",
       filterCategories: [
           {
               name: "Category",
               items: [
                   { label: "Woman", count: undefined },
                   { label: "Tops", count: "37", selected: true },
                   { label: "Jackets", count: "22" }
               ]
           },
           // ... others
       ]
   });
   ```

### Conclusion
Transitioning components to a strict parameter-driven architectural model reduces boilerplate, centralizes design logic into the component definition files (where it belongs), and keeps demo pages in `Alex_CookBook` clean, semantic, and easy to maintain.
