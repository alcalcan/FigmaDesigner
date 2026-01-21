var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseComponent } from "./BaseComponent";
export class Button extends BaseComponent {
    create(props) {
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
        frame.x = props.x;
        frame.y = props.y;
        // Background color
        if (props.primary) {
            frame.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.5, b: 0.9 } }];
        }
        else {
            frame.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
        }
        const text = figma.createText();
        // We need to load the font before setting characters
        // This will be handled by the caller or we need to await it. 
        // Since create is synchronous here, we might need to handle async font loading differently.
        // For now, let's assume the caller handles loading or we make create async.
        // Making create async is safer for fonts.
        return frame;
    }
    createAsync(props) {
        return __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            const frame = this.create(props);
            const text = figma.createText();
            text.characters = props.label;
            text.fontSize = 14;
            if (props.primary) {
                text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            }
            else {
                text.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
            }
            frame.appendChild(text);
            return frame;
        });
    }
}
