# Toggle

A simple switch component used to toggle between two states (ON and OFF).

## Features

- **Visual States**: Distinct colors for ON (Green) and OFF (Gray).
- **Smooth Animation Ready**: Designed with a knob and background structure suitable for future micro-animations.
- **Compact Design**: Fixed 42x22 dimensions for standard sidebar or settings usage.

## Interface

```typescript
interface ToggleProps extends ComponentProps {
    isOn?: boolean; // Active state of the switch
    x?: number;
    y?: number;
}
```

## Implementation Example

```typescript
const t = new toggle();
const mySwitch = await t.create({
    isOn: true
});
```

## Component File
[toggle.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/toggle/toggle.ts)
