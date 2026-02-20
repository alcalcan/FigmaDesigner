# Flows Directory

This directory contains `Flow` components for the Figma Designer plugin.

## What is a Flow?
A "Flow" is a structural component designed to combine multiple "Pages" or "Screens" together, typically arranged in a horizontal or vertical layout to showcase an entire user journey or demo suite. Think of it as a master container that renders several page components side-by-side.

## Creating a Flow
1. Create a new `.ts` file inside a project subdirectory (e.g., `flows/MyProject/MyFlow.ts`).
2. Export a class that extends `BaseComponent`.
3. In the `create` method, instantiate a `figma.createFrame()`.
4. Configure layout properties (e.g., `layoutMode = "HORIZONTAL"`).
5. Instantiate one or more Page components from the `pages/` directory.
6. Call `await page.create({})` on each page and append them to the flow container using `appendChild`.
7. Return the flow container.

## Example
```typescript
import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { MyFirstPage } from "../../pages/MyProject/MyFirstPage";
import { MySecondPage } from "../../pages/MyProject/MySecondPage";

export class SimpleFlow extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const flowContainer = figma.createFrame();
        flowContainer.name = "SimpleFlow";
        flowContainer.layoutMode = "HORIZONTAL";
        flowContainer.itemSpacing = 100;
        flowContainer.fills = [];

        const page1 = new MyFirstPage();
        const page2 = new MySecondPage();

        flowContainer.appendChild(await page1.create({}));
        flowContainer.appendChild(await page2.create({}));

        return flowContainer;
    }
}
```

## Registration
Flows placed in this directory will be automatically detected by the build script (`tools/build.ts` -> `RegisterComponents.ts`). They will appear under the "Flows" tab in the Figma Plugin UI, alongside standard components and pages.
