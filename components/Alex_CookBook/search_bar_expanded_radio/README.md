# Search Bar Expanded (Radio)

A specialized variant of the `search_bar` component that showcases the radio selection style in its filter dropdowns.

## Features

- **Radio Selection**: Demonstrates the `selectionType: "radio"` capability in filter chips.
- **Pre-set State**: Automatically expands the "Sort By" chip with sorting options.
- **Composition**: Builds upon the standard `search_bar` implementation.

## Interface

Uses the same `ComponentProps` as `search_bar`.

## Implementation Example

```typescript
const searchRadio = new search_bar_expanded_radio();
const bar = await searchRadio.create({
    // Props here
});
```

## Component File
[search_bar_expanded_radio.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/search_bar_expanded_radio/search_bar_expanded_radio.ts)
