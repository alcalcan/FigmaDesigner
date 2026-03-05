# pagination

Reusable Alex CookBook pagination component, aligned with UEFA Library pagination style.

## Props
- `width?: number | "fill"`
- `itemsPerPageLabel?: string`
- `itemsPerPageValue?: string | number`
- `rangeLabel?: string`
- `pageLabel?: string`
- `firstLabel?: string`
- `lastLabel?: string`
- `showFirstLast?: boolean`
- `firstDisabled?: boolean`
- `prevDisabled?: boolean`
- `nextDisabled?: boolean`
- `lastDisabled?: boolean`
- `accentColor?: RGB`
- `textColor?: RGB`
- `mutedColor?: RGB`
- `borderColor?: RGB`

## Example
```ts
const node = await new pagination().create({
  width: "fill",
  itemsPerPageValue: 10,
  rangeLabel: "1 - 10 of 50",
  pageLabel: "Page 1 of 5",
  prevDisabled: true,
  nextDisabled: false,
});
```
