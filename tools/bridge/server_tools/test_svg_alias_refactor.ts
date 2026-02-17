import { ComponentRefactorer } from './ComponentRefactorer';

const proceduralCode = `
import { BaseComponent } from "../../BaseComponent";
import SVG_wave from "./assets/wave.svg";

export class AliasSvgTest extends BaseComponent {
    async create(props: any): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "Root";

        const root_child_0_svgContainer = figma.createNodeFromSvg(SVG_wave);
        root_child_0_svgContainer.fills = [];
        const root_child_0 = root_child_0_svgContainer;
        root_child_0.name = "Area Fill";

        root.appendChild(root_child_0);
        return root;
    }
}
`;

const proceduralCodeWithHint = `
import { BaseComponent } from "../../BaseComponent";
import SVG_wave from "./assets/wave.svg";

export class AliasSvgHintTest extends BaseComponent {
    async create(props: any): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "Root";

        // __SVG_NODE_TYPE:GROUP:root_child_0_svgContainer
        const root_child_0_svgContainer = figma.createNodeFromSvg(SVG_wave);
        root_child_0_svgContainer.fills = [];
        const root_child_0 = root_child_0_svgContainer;
        root_child_0.name = "Area Fill";

        root.appendChild(root_child_0);
        return root;
    }
}
`;

const refactorer = new ComponentRefactorer();
const refactored = refactorer.refactorCode(proceduralCode, 'AliasSvgTest', { fidelityStrict: true });
const refactoredWithHint = refactorer.refactorCode(proceduralCodeWithHint, 'AliasSvgHintTest', { fidelityStrict: true });

const hasAreaFill = /"name":\s*"Area Fill"/.test(refactored);
const hasFrameType = /"type":\s*"FRAME"/.test(refactored);
const hasSvgBinding = /"svgContent":\s*SVG_wave/.test(refactored);
const hasHintedGroupType = /"type":\s*"GROUP"/.test(refactoredWithHint);

if (!hasAreaFill || !hasFrameType || !hasSvgBinding || !hasHintedGroupType) {
    console.error('FAIL: SVG alias handling regressed.');
    process.exit(1);
}

console.log('PASS: SVG alias nodes keep FRAME fallback and honor explicit GROUP hint.');
