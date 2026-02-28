# How to use

The `tv.create()` (Tree View) component allows you to easily render hierarchical, nested nodes (like a file explorer or category list) onto a Figma page. 

This guide is designed for beginners creating node structures in their pages.

## Basic Implementation

To render a Tree View on a page, you will pass a configuration object into `tv.create()`. The most important property is `nodes`, which is an array of objects representing each line in the tree.

Here is a minimal example of how to implement a basic file explorer structure inside a page script (like `TreeViewDemo.ts`):

```typescript
import { tv } from "../../components/Alex_CookBook/tree_view/tree_view";

// ... inside your page builder logic ...

const simpleTree = await tv.create({
    width: 320,
    nodes: [
        { 
            title: "src", 
            indentLevel: 0, 
            isExpanded: true,
            iconType: "chevron-down" 
        },
        { 
            title: "components", 
            indentLevel: 1, 
            isExpanded: true,
            iconType: "chevron-down" 
        },
        { 
            title: "Button.tsx", 
            indentLevel: 2,
            iconType: "file" // Or a custom file icon
        },
        { 
            title: "package.json", 
            indentLevel: 0,
            iconType: "file" 
        }
    ]
});

// Add the rendered auto-layout frame to your page wrapper
pageWrapper.appendChild(simpleTree);
```

## Key Properties Explained

### The Component Configuration (Passed to `tv.create()`)
- **`width`**: Number. The width of the entire tree view container.
- **`dense`**: Boolean. If true, the tree view will be compact (smaller icons, tighter spacing). Good for technical panels like IDEs.
- **`nodes`**: Array of `TreeViewNodeItem`. This is where all the content goes.

### The Node Item (`TreeViewNodeItem`)
Each item in the `nodes` array represents a single row. The relation between rows is determined *entirely* by their `indentLevel`. 

- **`title`**: String (Required). The main text for the row.
- **`indentLevel`**: Number (Required). `0` is the root level. `1` is nested under `0`. `2` is nested under `1`, etc. You MUST increase the indent level sequentially to create sub-folders.
- **`isExpanded`**: Boolean. If true, any children below this node will visibly connect to it. (Note: The user is currently responsible for filtering out hidden child nodes from the array if the parent is collapsed).
- **`iconType`**: String. Standard icons like `"chevron-down"`, `"chevron-right"`, `"folder"`, etc.
- **`subTitle`**: String. Secondary text displayed below the title.
- **`description`**: String. Even smaller grey text.
- **`rightContent`**: Array of Figma Node definitions. Used to pass buttons, badges, or avatars that should appear on the far right side of the row.

## Advanced Examples

### Changing Colors and Icons
You can customize the icon color status directly on a node:
```typescript
{
    title: "Project Files",
    indentLevel: 0,
    iconColor: "warning", // Renders icon in an orange/yellow hue
    status: "active" // Bolds the title text
}
```

### Adding Badges to the Right Side
To add dynamic content like badges or actions to the right side of a row, use the static helper methods on `tree_view`:

```typescript
import { tv as tree_view } from "../../components/Alex_CookBook/tree_view/tree_view";

// ...
nodes: [
    {
        title: "node_modules",
        indentLevel: 0,
        rightContent: [
            tree_view.badge("Ignored", "default")
        ]
    }
]
```

### Adding Checkboxes
You can easily turn a tree into a multi-select list by toggling the checkbox property. You don't need to specify `iconType` if you use checkboxes:

```typescript
{
    title: "Select All Settings",
    indentLevel: 0,
    checkbox: "indeterminate" // Can be true, false, or "indeterminate"
},
{
    title: "Feature A",
    indentLevel: 1,
    checkbox: true
}
```
