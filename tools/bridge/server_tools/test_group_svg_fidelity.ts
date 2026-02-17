import { ComponentGenerator } from './ComponentGenerator';
import type { SerializedNode } from '../../../components/JsonReconstructor';

const svg = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><circle cx="10" cy="10" r="8" fill="#fff"/></g></svg>`;
const svgB64 = Buffer.from(svg, 'utf8').toString('base64');

const fixture: SerializedNode = {
    id: "1:1",
    name: "root",
    type: "FRAME",
    width: 100,
    height: 40,
    children: [
        {
            id: "1:2",
            name: "Logo Group",
            type: "GROUP",
            x: 10,
            y: 10,
            width: 20,
            height: 20,
            svgPath: "assets/icon_logo_group.svg",
            children: [
                {
                    id: "1:3",
                    name: "Inner Vector",
                    type: "VECTOR",
                    x: 10,
                    y: 0,
                    width: 20,
                    height: 20
                }
            ]
        }
    ]
};

const generator = new ComponentGenerator();
const output = generator.generateFromMemory(
    fixture,
    [{ name: "assets/icon_logo_group.svg", data: svgB64 }],
    "test_cap"
);

const hasGroupSvgContainer = output.includes('const root_child_0 = root_child_0_svgContainer;');
const hasUnexpectedGroupChildReplay = output.includes('root_child_0.appendChild(root_child_0_child_0);');
const hasInflatedGroupWidth = output.includes('"width":30');

if (!hasGroupSvgContainer || hasUnexpectedGroupChildReplay || hasInflatedGroupWidth) {
    console.error('FAIL: GROUP svg fidelity behavior regressed.');
    process.exit(1);
}

console.log('PASS: GROUP svg nodes keep svg container and skip captured child replay.');
