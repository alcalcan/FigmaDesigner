
import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { search_bar_expanded_radio } from "../../components/Alex_CookBook/search_bar_expanded_radio/search_bar_expanded_radio";
import { Page_title } from "../../components/Alex_CookBook/Page_title/Page_title";
import { progress_stepper } from "../../components/Alex_CookBook/progress_stepper/progress_stepper";

export class RadioSearchDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "Radio Search Demo";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 40;
        root.paddingTop = 60;
        root.paddingLeft = 120; // Standard padding
        root.paddingRight = 120; // Standard padding
        root.paddingBottom = 60;
        root.primaryAxisSizingMode = "AUTO"; // Allow growing vertically
        root.counterAxisSizingMode = "FIXED"; // Standard for pages
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.98 } }];

        root.resize(1680, 1050);

        // Page Title Component
        const pageTitleComp = new Page_title();
        const pageTitleNode = await pageTitleComp.create({
            x: 0,
            y: 0,
            title: "Search Bar & Steppers",
            subtitle: "Explore our components"
        });
        root.appendChild(pageTitleNode);

        // Component
        const searchComp = new search_bar_expanded_radio();
        const searchNode = await searchComp.create({
            x: 0,
            y: 0,
            placeholder: "Search for resources..."
        });
        (searchNode as FrameNode).layoutAlign = "STRETCH";

        root.appendChild(searchNode);

        // --- Progress Stepper Demo ---
        const progressLabel = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        progressLabel.characters = "Progress Stepper";
        progressLabel.fontSize = 20;
        root.appendChild(progressLabel);

        const progressComp = new progress_stepper();

        // Example 1: Step 1 Active
        const prog1 = await progressComp.create({
            steps: ["Select campaign", "Create group", "Create ad"],
            currentStep: 0
        });
        root.appendChild(prog1);

        // Example 2: Step 2 Active
        const prog2 = await progressComp.create({
            steps: ["Select campaign", "Create group", "Create ad"],
            currentStep: 1
        });
        root.appendChild(prog2);

        // Example 3: Finished
        const prog3 = await progressComp.create({
            steps: ["Select campaign", "Create group", "Create ad"],
            currentStep: 3 // All done
        });
        root.appendChild(prog3);

        // Example 4: Large, Custom Font & Custom Color
        const prog4 = await progressComp.create({
            steps: ["Plan", "Design", "Review", "Launch"],
            currentStep: 1,
            indicatorSize: 32,
            fontFamily: "Inter",
            activeColor: { r: 0.9, g: 0.2, b: 0.2 } // Reddish
        });
        root.appendChild(prog4);

        // Example 5: Square & Numbers for completed
        const prog5 = await progressComp.create({
            steps: ["Step A", "Step B", "Step C"],
            currentStep: 2,
            indicatorShape: "SQUARE",
            completedStepContent: "NUMBER",
            activeColor: { r: 0.1, g: 0.7, b: 0.4 } // Greenish
        });
        root.appendChild(prog5);

        // Example 6: Letters & Checkmark completion (SQUARE)
        const prog6 = await progressComp.create({
            steps: ["Intro", "Setup", "Finalize"],
            currentStep: 1,
            indicatorShape: "SQUARE",
            indicatorContent: "LETTER",
            completedStepContent: "CHECK"
        });
        root.appendChild(prog6);

        // Example 7: Dots (Radio style) - CIRCLE
        const prog7 = await progressComp.create({
            steps: ["Step 1", "Step 2", "Step 3"],
            currentStep: 1,
            indicatorContent: "DOT",
            completedStepContent: "DOT",
            activeColor: { r: 1, g: 0.5, b: 0 } // Orange
        });
        root.appendChild(prog7);

        // Example 8: Dots (Radio style) - SQUARE
        const prog8 = await progressComp.create({
            steps: ["Small", "Medium", "Large"],
            currentStep: 0,
            indicatorShape: "SQUARE",
            indicatorContent: "DOT",
            completedStepContent: "CHECK",
            activeColor: { r: 0.5, g: 0, b: 0.5 } // Purple
        });
        // Example 9: Dark / High-Contrast
        const prog9 = await progressComp.create({
            steps: ["Task 1", "Task 2", "Task 3"],
            currentStep: 2,
            indicatorShape: "CIRCLE",
            indicatorContent: "NUMBER",
            activeColor: { r: 0.1, g: 0.1, b: 0.1 }, // Black active
            completedColor: { r: 0, g: 0.8, b: 0 }, // Neon Green completed
            pendingColor: { r: 0.9, g: 0.9, b: 0.9 } // Light grey pending
        });
        root.appendChild(prog9);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
