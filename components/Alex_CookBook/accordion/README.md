# Accordion

An expandable/collapsible section component used to hide or show detailed information or children components.

## Features

- **Toggleable**: Supports expanded and collapsed states with corresponding +/- icons.
- **Flexible Content**: Can display a simple text description or complex child nodes.
- **Visual Feedback**: Border bottom separation in the header for clear distinction.
- **Theming**: Customizable title color.

## Interface

```typescript
interface AccordionProps extends ComponentProps {
    title?: string;         // Header text
    description?: string;   // Text content shown when expanded (if no children)
    isExpanded?: boolean;   // Control expanded state
    titleColor?: RGB;       // Custom color for the title and icon
    children?: NodeDefinition[]; // Custom nested components
}
```

## Implementation Example

```typescript
const acc = new accordion();
const section = await acc.create({
    title: "Module 1: Introduction",
    description: "This module covers the basics of Figma for developers.",
    isExpanded: true,
    titleColor: { r: 0, g: 0.5, b: 0.8 }
});
```

## Component File
[accordion.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/accordion/accordion.ts)
