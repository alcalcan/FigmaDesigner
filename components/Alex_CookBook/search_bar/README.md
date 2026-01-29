# Search Bar

A comprehensive search bar component that integrates an input field with a collection of expandable filter chips.

## Features

- **Integrated Input**: Uses the `input_field` component for text entry.
- **Dynamic Chips**: Displays a row of filter chips (`chip_expand`) that can have their own dropdown menus.
- **Customizable Config**: Allows passing custom chip labels and dropdown configurations.
- **Auto-layout**: Horizontal alignment with space-between positioning for input and chips.

## Interface

```typescript
interface SearchBarProps extends ComponentProps {
    placeholder?: string; // Search input placeholder
    chips?: Array<{
        label: string;
        expanded?: boolean;
        dropdownOptions?: Array<{ name: string, selected: boolean }>;
        selectionType?: "checkbox" | "radio";
    }>; // Configuration for the filter chips
}
```

## Implementation Example

```typescript
const search = new search_bar();
const bar = await search.create({
    placeholder: "Search ingredients...",
    chips: [
        { label: "Healthy" },
        { label: "Quick", expanded: false }
    ]
});
```

## Component File
[search_bar.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/search_bar/search_bar.ts)
