import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { progress_stepper } from "../../components/Alex_CookBook/progress_stepper/progress_stepper";

export class ProgressStepperDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Light" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Progress Stepper Showcase", 1200);

        await this.addHeader(
            root,
            "Progress Stepper",
            "Showcasing various styles and states of the interactive progress stepper component."
        );

        // --- SECTION 1: Standard Progression ---
        await this.addSection(root, "Standard Progression", "Default sequential numeric steps with checkmarks for completion.", async (container) => {
            const ps = new progress_stepper();

            container.appendChild(await ps.create({
                width: 900,
                steps: ["Cart", "Checkout", "Payment", "Review", "Complete"],
                currentStep: 2
            }));

            // Highlighting a fully completed sequence
            container.appendChild(await ps.create({
                width: 900,
                steps: ["Setup", "Configuration", "Deployment"],
                currentStep: 3,
                activeColor: { r: 0.1, g: 0.7, b: 0.3 } // Green
            }));
        });

        // --- SECTION 2: Alphabetical Steps ---
        await this.addSection(root, "Alphabetical Steps", "Using letters instead of numbers with a square indicator shape.", async (container) => {
            const ps = new progress_stepper();

            container.appendChild(await ps.create({
                width: 900,
                steps: ["Registration", "Verification", "Onboarding", "Access"],
                currentStep: 1,
                indicatorShape: "SQUARE",
                indicatorContent: "LETTER"
            }));
        });

        // --- SECTION 3: Minimal Dots ---
        await this.addSection(root, "Minimal Dots", "Simplified dot indicators with custom active and completed colors.", async (container) => {
            const ps = new progress_stepper();

            container.appendChild(await ps.create({
                width: 900,
                steps: ["Step 1", "Step 2", "Step 3", "Step 4"],
                currentStep: 3,
                indicatorContent: "DOT",
                completedStepContent: "DOT",
                activeColor: { r: 0.3, g: 0.4, b: 0.9 }, // Blue active
                completedColor: { r: 0.7, g: 0.7, b: 0.9 } // Light blue completed
            }));
        });

        // --- SECTION 4: Numeric Completion ---
        await this.addSection(root, "Numeric Completion", "Steps that retain their number even after being completed.", async (container) => {
            const ps = new progress_stepper();

            container.appendChild(await ps.create({
                width: 900,
                steps: ["Phase 1", "Phase 2", "Phase 3"],
                currentStep: 1,
                completedStepContent: "NUMBER",
                activeColor: { r: 0.5, g: 0.1, b: 0.9 } // Purple
            }));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
