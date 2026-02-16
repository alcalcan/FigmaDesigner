import { BaseComponent, ComponentProps } from "../BaseComponent";

export interface ButtonProps extends ComponentProps {
    label: string;
    primary?: boolean;
}

export class Button extends BaseComponent {
    create(props: ButtonProps): FrameNode {
        const frame = figma.createFrame();
        frame.name = "Button";
        frame.layoutMode = "HORIZONTAL";
        frame.primaryAxisSizingMode = "AUTO";
        frame.counterAxisSizingMode = "AUTO";
        frame.paddingLeft = 16;
        frame.paddingRight = 16;
        frame.paddingTop = 8;
        frame.paddingBottom = 8;
        frame.itemSpacing = 8;
        frame.cornerRadius = 6;
        frame.x = props.x ?? 0;
        frame.y = props.y ?? 0;

        // Background color
        if (props.primary) {
            frame.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.5, b: 0.9 } }];
        } else {
            frame.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
        }

        // We need to load the font before setting characters
        // This will be handled by the caller or we need to await it. 
        // Since create is synchronous here, we might need to handle async font loading differently.
        // For now, let's assume the caller handles loading or we make create async.
        // Making create async is safer for fonts.

        return frame;
    }

    async createAsync(props: ButtonProps): Promise<FrameNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const frame = this.create(props);
        const text = figma.createText();
        text.characters = props.label;
        text.fontSize = 14;

        if (props.primary) {
            text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        } else {
            text.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        }

        frame.appendChild(text);
        return frame;
    }
}
