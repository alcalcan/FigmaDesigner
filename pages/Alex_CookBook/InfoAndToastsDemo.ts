import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps } from "../../components/BaseComponent";

// Components
import { Info_generated } from "../../components/Alex_CookBook/Info_generated/Info_generated";
import { Toast } from "../../components/Alex_CookBook/toast/toast";

export class InfoAndToastsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("Info & Toasts");
        await this.addHeader(root, "Info & Toasts", "Showcasing informational blocks and notification toasts.");

        // --- EMBEDDED INFO BLOCKS ---
        await this.addSection(root, "Embedded Info Blocks", "Standard blocks rendering inline with content.", async (container) => {
            const row1 = figma.createFrame();
            row1.name = "Row Simple";
            row1.layoutMode = "HORIZONTAL";
            row1.itemSpacing = 24;
            row1.layoutAlign = "STRETCH";
            row1.primaryAxisSizingMode = "FIXED";
            row1.counterAxisSizingMode = "AUTO";
            row1.fills = [];

            const row2 = figma.createFrame();
            row2.name = "Row Complex";
            row2.layoutMode = "HORIZONTAL";
            row2.itemSpacing = 24;
            row2.layoutAlign = "STRETCH";
            row2.primaryAxisSizingMode = "FIXED";
            row2.counterAxisSizingMode = "AUTO";
            row2.fills = [];

            const info = new Info_generated();

            // Row 1: Simple Info Variants
            const simpleBlue = await info.create({ width: "fill", variant: "simple", colorTheme: "blue", description: "This is a simple blue info tip." });
            const simpleRed = await info.create({ width: "fill", variant: "simple", colorTheme: "red", description: "There might be a critical issue." });
            const simpleYellow = await info.create({ width: "fill", variant: "simple", colorTheme: "yellow", description: "Action required soon." });

            [simpleBlue, simpleRed, simpleYellow].forEach(n => {
                (n as FrameNode).layoutGrow = 1;
                (n as FrameNode).layoutAlign = "INHERIT";
                row1.appendChild(n);
            });

            // Row 2: Complex Info Variants
            const complexBlue = await info.create({
                width: "fill", variant: "complex", colorTheme: "blue",
                title: "Information", description: "This is a highly detailed contextual message that might span multiple lines."
            });
            const complexRed = await info.create({
                width: "fill", variant: "complex", colorTheme: "red",
                title: "Alert", description: "Critical network failure detected in the us-east-1 region. Traffic rerouted."
            });
            const complexYellow = await info.create({
                width: "fill", variant: "complex", colorTheme: "yellow",
                title: "Warning", description: "Your subscription is about to expire in 3 days. Please renew to maintain access."
            });

            [complexBlue, complexRed, complexYellow].forEach(n => {
                (n as FrameNode).layoutGrow = 1;
                (n as FrameNode).layoutAlign = "INHERIT";
                row2.appendChild(n);
            });

            container.appendChild(row1);
            container.appendChild(row2);
        });

        // --- TOAST NOTIFICATIONS (RIGHT ALIGNED) ---
        await this.addSection(root, "Right-Aligned Toasts & Notifications", "Absolute positioning on the right side.", async (container) => {
            const toastWrapper = figma.createFrame();
            toastWrapper.name = "Right-Aligned Environment";
            toastWrapper.layoutMode = "VERTICAL";
            toastWrapper.itemSpacing = 16;
            toastWrapper.layoutAlign = "STRETCH";
            toastWrapper.primaryAxisSizingMode = "AUTO";
            toastWrapper.counterAxisSizingMode = "AUTO";
            toastWrapper.primaryAxisAlignItems = "MAX"; // Align to the right
            toastWrapper.paddingTop = 32;
            toastWrapper.paddingBottom = 32;
            toastWrapper.paddingLeft = 32;
            toastWrapper.paddingRight = 32;
            toastWrapper.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.99 } }];
            toastWrapper.cornerRadius = 12;

            const toastBlock = new Toast();

            toastWrapper.appendChild(await toastBlock.create({
                width: 400, variant: "success", title: "Changes Saved", description: "Your profile has been updated successfully."
            }));

            toastWrapper.appendChild(await toastBlock.create({
                width: 400, variant: "error", title: "Upload Failed", description: "The image size exceeds the 5MB limit.", actionText: "Retry"
            }));

            container.appendChild(toastWrapper);
        });

        // --- TOAST NOTIFICATIONS (LEFT ALIGNED) ---
        await this.addSection(root, "Left-Aligned Toasts & Notifications", "Variations for left-positioned UI elements.", async (container) => {
            const toastWrapper = figma.createFrame();
            toastWrapper.name = "Left-Aligned Environment";
            toastWrapper.layoutMode = "VERTICAL";
            toastWrapper.itemSpacing = 16;
            toastWrapper.layoutAlign = "STRETCH";
            toastWrapper.primaryAxisSizingMode = "AUTO";
            toastWrapper.counterAxisSizingMode = "AUTO";
            toastWrapper.primaryAxisAlignItems = "MIN"; // Align to the left
            toastWrapper.paddingTop = 32;
            toastWrapper.paddingBottom = 32;
            toastWrapper.paddingLeft = 32;
            toastWrapper.paddingRight = 32;
            toastWrapper.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.99 } }];
            toastWrapper.cornerRadius = 12;

            const toastBlock = new Toast();

            toastWrapper.appendChild(await toastBlock.create({
                width: 360, variant: "info", title: "New Feature", description: "Check out our new dark mode settings in the preferences menu.", actionText: "View"
            }));

            toastWrapper.appendChild(await toastBlock.create({
                width: 360, variant: "warning", title: "Storage Almost Full", description: "You have used 90% of your available storage.", actionText: "Upgrade"
            }));

            container.appendChild(toastWrapper);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
