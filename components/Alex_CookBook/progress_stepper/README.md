# Progress Stepper

A versatile multi-step progress indicator for Wizards, Sign-up flows, and step-by-step processes.

## Features

- **Dynamic States**: Handles Completed, Active, and Pending steps with distinct visual styles.
- **Customizable Indicators**:
    - **Shapes**: Circle (default) or Square (subtle 2px rounding).
    - **Content**: Numbers, Letters (A, B, C), Radio-style Dots, or Checkmarks.
    - **Completion Overrides**: Choose to show a Checkmark or the original step indicator (Number/Letter) when a step is done.
- **Theming**: Custom colors for Active, Completed, and Pending states.
- **Layout**: Automatic horizontal stretching and spacing with connector lines.

## Interface

```typescript
interface ProgressStepperProps extends ComponentProps {
    steps: string[];                  // Array of labels for the steps
    currentStep: number;              // Zero-indexed index of the current active step
    width?: number;                   // Fixed width (defaults to 600 if not in auto-layout)
    indicatorSize?: number;           // Diameter/Size of the step indicator (default: 24)
    activeColor?: RGB;                // Fill color for the active step
    completedColor?: RGB;             // Fill color for completed steps & connector lines
    pendingColor?: RGB;               // Color for pending steps & background lines
    fontFamily?: string;              // Custom font (default: "Open Sans")
    indicatorShape?: "CIRCLE" | "SQUARE"; // Shape of the indicator
    indicatorContent?: "NUMBER" | "CHECK" | "LETTER" | "DOT"; // Default content style
    completedStepContent?: "CHECK" | "NUMBER" | "LETTER" | "DOT"; // Override for finished steps
}
```

## Implementation Example

```typescript
const progressComp = new progress_stepper();
const myStepper = await progressComp.create({
    steps: ["Plan", "Design", "Review", "Launch"],
    currentStep: 1,                   // "Design" is active
    indicatorShape: "CIRCLE",
    indicatorContent: "NUMBER",
    completedStepContent: "CHECK",    // Finished steps show a check
    activeColor: { r: 0.1, g: 0.5, b: 0.9 }
});
```

## Component File
[progress_stepper.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/progress_stepper/progress_stepper.ts)
