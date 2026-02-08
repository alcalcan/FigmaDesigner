import { SlideClassInfo } from './PptImportTypes';

export class PresentationEmitter {
    static emit(
        className: string,
        presentationName: string,
        importKey: string,
        slides: SlideClassInfo[]
    ): string {
        const importLines: string[] = [
            'import { BaseComponent, ComponentProps } from "../../components/BaseComponent";'
        ];

        for (const slide of slides) {
            importLines.push(
                `import { ${slide.className} } from "../../slides/${importKey}/${slide.className}";`
            );
        }

        const slideCtorEntries = slides.map((slide) => `new ${slide.className}()`).join(',\n            ');

        return `${importLines.join('\n')}

export class ${className} extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const presentation = figma.createFrame();
        presentation.name = ${JSON.stringify(presentationName)};
        presentation.x = props.x ?? 0;
        presentation.y = props.y ?? 0;
        presentation.fills = [];
        presentation.layoutMode = "HORIZONTAL";
        presentation.primaryAxisSizingMode = "AUTO";
        presentation.counterAxisSizingMode = "AUTO";
        presentation.paddingLeft = 120;
        presentation.paddingRight = 120;
        presentation.paddingTop = 120;
        presentation.paddingBottom = 120;
        presentation.itemSpacing = 80;
        presentation.counterAxisAlignItems = "CENTER";

        const slides = [
            ${slideCtorEntries}
        ];

        for (const slide of slides) {
            const slideNode = await slide.create({ x: 0, y: 0 });
            presentation.appendChild(slideNode);
        }

        return presentation;
    }
}
`;
    }
}
