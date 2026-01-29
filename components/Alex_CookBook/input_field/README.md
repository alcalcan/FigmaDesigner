# Input Field

A versatile text input component supporting placeholders, values, helper text, and various icon configurations.

## Features

- **Flexible Types**: Supports `simple` (flat) or `dropdown` (with caret) styles.
- **Icon Support**: Can display icons at the front or back, including a built-in search icon.
- **Helper Text**: Optional descriptive text below the input, with `info`, `error`, and `warning` states.
- **Visual Feedback**: Distinct styles for placeholder vs. active text.

## Interface

```typescript
interface InputFieldProps extends ComponentProps {
    placeholder: string;         // Placeholder text
    value?: string;               // Active input value
    helperText?: string;          // Optional hint text below
    type?: "simple" | "dropdown"; // Visual style
    frontIcon?: string;           // Custom SVG for the front
    backIcon?: string;            // Custom SVG for the back
    showSearchIcon?: boolean;     // Quick search icon toggle
    searchIconPosition?: "front" | "back";
    helperType?: "info" | "error" | "warning"; // Severity of helper text
}
```

## Implementation Example

```typescript
const input = new input_field();
const myInput = await input.create({
    placeholder: "Enter your email",
    helperText: "Email is required",
    helperType: "error",
    type: "simple"
});
```

## Component File
[input_field.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/input_field/input_field.ts)
