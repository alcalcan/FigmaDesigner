# Chip Expand

A button-like chip component that can be expanded to reveal a dropdown menu.

## Features

- **Dynamic Indicator**: Chevron icon that rotates when the chip is expanded.
- **Dropdown Integration**: Automatically spawns a `dropdown_options` menu when `expanded` is true and `dropdownOptions` are provided.
- **Active State**: Highlights the chip when `selected` is true.

## Interface

```typescript
interface ChipExpandProps extends ComponentProps {
    text?: string;             // Label text
    selected?: boolean;        // Active highlight state
    expanded?: boolean;        // Toggle chevron and dropdown visibility
    dropdownOptions?: { name: string, selected: boolean }[]; // Options for the menu
    selectionType?: "checkbox" | "radio"; // Style of selection in the menu
}
```

## Implementation Example

```typescript
const chip = new chip_expand();
const filterChip = await chip.create({
    text: "Status: All",
    expanded: true,
    dropdownOptions: [
        { name: "Active", selected: false },
        { name: "Completed", selected: true }
    ],
    selectionType: "radio"
});
```

## Component File
[chip_expand.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/chip_expand/chip_expand.ts)
