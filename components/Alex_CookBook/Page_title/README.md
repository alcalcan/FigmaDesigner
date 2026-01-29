# Page Title

A simple header component for pages, displaying a large title and an optional subtitle.

## Features

- **Typography**: Uses 'Inter' Bold for the title and 'Inter' Regular for the subtitle.
- **Layout**: Vertical auto-layout with 8px spacing.
- **Visuals**: Clean, typographic design with professional color choices.

## Interface

```typescript
interface ComponentProps {
    title?: string;     // Main page title (default: "Page Title")
    subtitle?: string;  // Optional subtitle text
    x?: number;         // X position
    y?: number;         // Y position
}
```

## Implementation Example

```typescript
const pageTitleComp = new Page_title();
const header = await pageTitleComp.create({
    title: "Course Overview",
    subtitle: "Explore the available modules and tracks"
});
```

## Component File
[Page_title.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/Page_title/Page_title.ts)
