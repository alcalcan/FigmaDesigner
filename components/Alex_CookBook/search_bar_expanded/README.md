# Search Bar Expanded

A pre-configured variant of the `search_bar` component that comes with an open "Author" filter and a list of writers.

## Features

- **Composition**: Inherits all features from the `search_bar` component.
- **Pre-set State**: Automatically expands the "Author" chip.
- **Data-driven**: Populated with a list of famous football book writers by default.

## Interface

Uses the same `ComponentProps` as `search_bar`.

## Implementation Example

```typescript
const searchExpanded = new search_bar_expanded();
const bar = await searchExpanded.create({
    // Props here
});
```

## Component File
[search_bar_expanded.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/search_bar_expanded/search_bar_expanded.ts)
