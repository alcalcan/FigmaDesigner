import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets
const SVG_assets_vector_UEFA_com_I1248_23979_1248_22943_svg = `<svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.4734 4.03641H83.7738V5.98786H83.8417C84.5821 4.59697 85.7931 3.69986 87.6314 3.69986C89.1564 3.69986 90.5252 4.44028 90.9517 5.96579C91.6469 4.44028 93.1046 3.69986 94.6295 3.69986C97.1641 3.69986 98.4645 5.02345 98.4645 7.75945V15.6094H97.0521V7.82731C97.0521 5.92055 96.3343 4.88828 94.315 4.88828C91.8709 4.88828 91.1757 6.90759 91.1757 9.06041V15.6094H89.7622V7.75945C89.7848 6.18979 89.1349 4.88828 87.3407 4.88828C84.896 4.88828 83.9084 6.72717 83.8858 9.15034V15.6094H82.4734V4.03641ZM55.3484 15.5509V13.5801H56.9109V15.5509H55.3484ZM66.9357 7.67007C66.5539 5.94317 65.5001 4.88828 63.6607 4.88828C60.9473 4.88828 59.6017 7.35559 59.6017 9.82234C59.6017 12.2902 60.9473 14.757 63.6607 14.757C65.4108 14.757 66.8463 13.3892 67.0251 11.4604H68.4375C68.0574 14.2417 66.2406 15.9454 63.6607 15.9454C60.1175 15.9454 58.1887 13.1426 58.1887 9.82234C58.1887 6.50372 60.1175 3.69986 63.6607 3.69986C66.1286 3.69986 68.0348 5.02345 68.3481 7.67007H66.9357ZM71.2414 9.82234C71.2414 12.2902 72.5876 14.757 75.3021 14.757C78.0154 14.757 79.3611 12.2902 79.3611 9.82234C79.3611 7.35559 78.0154 4.88828 75.3021 4.88828C72.5876 4.88828 71.2414 7.35559 71.2414 9.82234ZM80.7741 9.82234C80.7741 13.1426 78.8452 15.9454 75.3021 15.9454C71.7578 15.9454 69.829 13.1426 69.829 9.82234C69.829 6.50372 71.7578 3.69986 75.3021 3.69986C78.8452 3.69986 80.7741 6.50372 80.7741 9.82234ZM4.04414 11.6276C4.67034 12.2742 5.65959 12.6284 6.71228 12.6273C7.76441 12.6295 8.75421 12.2742 9.37986 11.6276C10.1468 10.8463 10.3923 10.0651 10.389 8.41545L10.3906 0H13.4234V9.20276C13.4207 11.1266 12.8557 12.6146 11.6943 13.7495C10.3846 15.0328 8.77793 15.6331 6.71228 15.6381C4.64552 15.6331 3.04 15.0328 1.73021 13.7495C0.568828 12.6146 0.00331034 11.1266 0 9.20386V0H3.03338L3.03559 8.41545C3.03228 10.0651 3.27779 10.8463 4.04414 11.6276ZM26.7349 2.86179H19.0516V6.36524H26.0828V9.18455H19.0516V10.6621C19.0516 12.2891 19.6188 12.6891 21.0786 12.6891H26.7349V15.5509H20.9081C18.2074 15.5509 16.0182 14.3399 16.0182 10.9876V1.13986C16.0182 0.417103 16.4966 0 17.1592 0H26.7349V2.86179ZM31.8698 9.18455L31.8748 15.5509H29.9774C29.3142 15.5509 28.837 15.1338 28.837 14.4099V4.56386C28.837 1.21159 31.0257 0 33.7258 0H39.5525V2.86179H33.8968C32.4364 2.86179 31.8698 3.26179 31.8698 4.88938L31.8692 6.36524H38.9015V9.18455H31.8698ZM45.9454 0.00441379C46.8386 0.00441379 47.1349 0.472828 47.3269 1.01517L53.0251 15.5531L49.7694 15.5542L48.6477 12.6941H44.9379L45.952 9.83117H47.5261L45.5305 4.74152L41.7015 15.5542L38.6654 15.5531L43.8146 1.01517C44.0061 0.473379 44.3018 0.00441379 45.1961 0.00441379H45.9454Z" fill="black"/>
</svg>
`;


export class Frame_1682 extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "Frame 1682";
root.visible = true;
root.opacity = 1;
root.locked = false;
root.resize(1680, 40);
if ("layoutMode" in root) {
    root.layoutMode = "HORIZONTAL";
    root.primaryAxisSizingMode = "FIXED";
    root.counterAxisSizingMode = "AUTO";
    root.primaryAxisAlignItems = "SPACE_BETWEEN";
    root.counterAxisAlignItems = "CENTER";
    root.itemSpacing = 77;
    root.paddingTop = 8;
    root.paddingRight = 40;
    root.paddingBottom = 8;
    root.paddingLeft = 40;
}
root.layoutAlign = "INHERIT";
root.layoutGrow = 0;
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9490196108818054,"g":0.9529411792755127,"b":0.95686274766922},"boundVariables":{}}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "INSIDE";
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Frame 1607
const root_child_0 = figma.createFrame();
root_child_0.name = "Frame 1607";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
root_child_0.resize(160, 21);
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "HORIZONTAL";
    root_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0.counterAxisSizingMode = "AUTO";
    root_child_0.primaryAxisAlignItems = "MIN";
    root_child_0.counterAxisAlignItems = "CENTER";
    root_child_0.itemSpacing = 23;
    root_child_0.paddingTop = 0;
    root_child_0.paddingRight = 0;
    root_child_0.paddingBottom = 0;
    root_child_0.paddingLeft = 0;
}
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
root_child_0.fills = await this.hydratePaints([]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1;
root_child_0.strokeAlign = "INSIDE";
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;

// Start Child: Frame 1837
const root_child_0_child_0 = figma.createFrame();
root_child_0_child_0.name = "Frame 1837";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
root_child_0_child_0.resize(160, 21);
if ("layoutMode" in root_child_0_child_0) {
    root_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_0_child_0.itemSpacing = 12;
    root_child_0_child_0.paddingTop = 0;
    root_child_0_child_0.paddingRight = 0;
    root_child_0_child_0.paddingBottom = 0;
    root_child_0_child_0.paddingLeft = 0;
}
root_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_0.layoutGrow = 0;
root_child_0_child_0.fills = await this.hydratePaints([]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 1;
root_child_0_child_0.strokeAlign = "INSIDE";
root_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0) root_child_0_child_0.cornerRadius = 0;

// Start Child: Group 19
const root_child_0_child_0_child_0 = figma.createFrame(); // Group handled as Frame
root_child_0_child_0_child_0.name = "Group 19";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
root_child_0_child_0_child_0.resize(54, 16);
root_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_0.layoutGrow = 0;
root_child_0_child_0_child_0.effects = [];

// Start Child: Logos / Wordmark / UEFA.com Black
const root_child_0_child_0_child_0_child_0 = figma.createFrame();
root_child_0_child_0_child_0_child_0.name = "Logos / Wordmark / UEFA.com Black";
root_child_0_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0_child_0.locked = false;
root_child_0_child_0_child_0_child_0.resize(54, 16);
if ("layoutMode" in root_child_0_child_0_child_0_child_0) {
    root_child_0_child_0_child_0_child_0.layoutMode = "NONE";
    root_child_0_child_0_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_0_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_0_child_0_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_0_child_0_child_0.counterAxisAlignItems = "MIN";
    root_child_0_child_0_child_0_child_0.itemSpacing = 0;
    root_child_0_child_0_child_0_child_0.paddingTop = 0;
    root_child_0_child_0_child_0_child_0.paddingRight = 0;
    root_child_0_child_0_child_0_child_0.paddingBottom = 0;
    root_child_0_child_0_child_0_child_0.paddingLeft = 0;
}
root_child_0_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_0_child_0.layoutGrow = 0;
root_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":0.25775936245918274,"g":0.25775936245918274,"b":0.25775936245918274},"boundVariables":{}}]);
root_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0_child_0.strokeWeight = 0.5517241358757019;
root_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: UEFA.com
const root_child_0_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_vector_UEFA_com_I1248_23979_1248_22943_svg);
const root_child_0_child_0_child_0_child_0_child_0 = figma.flatten([root_child_0_child_0_child_0_child_0_child_0_svgContainer]);
root_child_0_child_0_child_0_child_0_child_0.name = "UEFA.com";
root_child_0_child_0_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0_child_0_child_0.locked = false;
root_child_0_child_0_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_0_child_0_child_0.layoutGrow = 0;
root_child_0_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_0_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
root_child_0_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_0_child_0_child_0_child_0.appendChild(root_child_0_child_0_child_0_child_0_child_0);
root_child_0_child_0_child_0_child_0_child_0.relativeTransform = [[1,0,0],[0,1,0.0546875]];
root_child_0_child_0_child_0.appendChild(root_child_0_child_0_child_0_child_0);
root_child_0_child_0_child_0_child_0.relativeTransform = [[1,0,0],[0,1,2.5]];
root_child_0_child_0.appendChild(root_child_0_child_0_child_0);
root_child_0_child_0_child_0.relativeTransform = [[1,0,0],[0,1,2.5]];

// Start Child: Line 39
const root_child_0_child_0_child_1 = figma.createFrame(); // Fallback for LINE
root_child_0_child_0_child_1.name = "Line 39";
root_child_0_child_0_child_1.visible = true;
root_child_0_child_0_child_1.opacity = 1;
root_child_0_child_0_child_1.locked = false;
root_child_0_child_0_child_1.resize(21, 0);
root_child_0_child_0_child_1.layoutAlign = "STRETCH";
root_child_0_child_0_child_1.layoutGrow = 0;
root_child_0_child_0_child_1.fills = await this.hydratePaints([]);
root_child_0_child_0_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_0_child_1.strokeWeight = 1;
root_child_0_child_0_child_1.strokeAlign = "CENTER";
root_child_0_child_0_child_1.effects = [];
root_child_0_child_0.appendChild(root_child_0_child_0_child_1);
root_child_0_child_0_child_1.relativeTransform = [[-4.3711395392165286e-8,-1,66],[1,-4.3711395392165286e-8,0]];

// Start Child: Frame 1614
const root_child_0_child_0_child_2 = figma.createFrame();
root_child_0_child_0_child_2.name = "Frame 1614";
root_child_0_child_0_child_2.visible = true;
root_child_0_child_0_child_2.opacity = 1;
root_child_0_child_0_child_2.locked = false;
root_child_0_child_0_child_2.resize(82, 21);
if ("layoutMode" in root_child_0_child_0_child_2) {
    root_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_0_child_0_child_2.itemSpacing = 4;
    root_child_0_child_0_child_2.paddingTop = 0;
    root_child_0_child_0_child_2.paddingRight = 0;
    root_child_0_child_0_child_2.paddingBottom = 0;
    root_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_0_child_0_child_2.layoutGrow = 0;
root_child_0_child_0_child_2.fills = await this.hydratePaints([]);
root_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_2.strokeWeight = 1;
root_child_0_child_0_child_2.strokeAlign = "INSIDE";
root_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Resources
const root_child_0_child_0_child_2_child_0 = figma.createText();
root_child_0_child_0_child_2_child_0.name = "Resources";
root_child_0_child_0_child_2_child_0.visible = true;
root_child_0_child_0_child_2_child_0.opacity = 1;
root_child_0_child_0_child_2_child_0.locked = false;
root_child_0_child_0_child_2_child_0.resize(82, 21);
root_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_2_child_0.layoutGrow = 0;
root_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_2_child_0.strokeWeight = 1;
root_child_0_child_0_child_2_child_0.strokeAlign = "OUTSIDE";
root_child_0_child_0_child_2_child_0.effects = [];
// Text Properties
root_child_0_child_0_child_2_child_0.characters = "Resources";
root_child_0_child_0_child_2_child_0.fontSize = 16;
await figma.loadFontAsync({"family":"Open Sans","style":"Bold"});
root_child_0_child_0_child_2_child_0.fontName = {"family":"Open Sans","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Open Sans","style":"Bold"});
root_child_0_child_0_child_2_child_0.setRangeFontName(0, 9, {"family":"Open Sans","style":"Bold"});
root_child_0_child_0_child_2_child_0.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0_child_2_child_0.setRangeFontSize(0, 9, 16);
root_child_0_child_0_child_2.appendChild(root_child_0_child_0_child_2_child_0);
root_child_0_child_0_child_2_child_0.relativeTransform = [[1,0,0],[0,1,0]];
root_child_0_child_0.appendChild(root_child_0_child_0_child_2);
root_child_0_child_0_child_2.relativeTransform = [[1,0,78],[0,1,0]];
root_child_0.appendChild(root_child_0_child_0);
root_child_0_child_0.relativeTransform = [[1,0,0],[0,1,0]];
root.appendChild(root_child_0);
root_child_0.relativeTransform = [[1,0,40],[0,1,9.5]];

// Start Child: Frame 1838
const root_child_1 = figma.createFrame();
root_child_1.name = "Frame 1838";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
root_child_1.resize(950.62060546875, 24);
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "HORIZONTAL";
    root_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1.counterAxisSizingMode = "FIXED";
    root_child_1.primaryAxisAlignItems = "MAX";
    root_child_1.counterAxisAlignItems = "CENTER";
    root_child_1.itemSpacing = 24;
    root_child_1.paddingTop = 0;
    root_child_1.paddingRight = 0;
    root_child_1.paddingBottom = 0;
    root_child_1.paddingLeft = 0;
}
root_child_1.layoutAlign = "STRETCH";
root_child_1.layoutGrow = 0;
root_child_1.fills = await this.hydratePaints([]);
root_child_1.strokes = await this.hydratePaints([]);
root_child_1.strokeWeight = 1;
root_child_1.strokeAlign = "INSIDE";
root_child_1.effects = [];
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 0;

// Start Child: Frame 1612
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Frame 1612";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
root_child_1_child_0.resize(104, 24);
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0.itemSpacing = 16;
    root_child_1_child_0.paddingTop = 0;
    root_child_1_child_0.paddingRight = 0;
    root_child_1_child_0.paddingBottom = 0;
    root_child_1_child_0.paddingLeft = 0;
}
root_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_0.layoutGrow = 0;
root_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0.strokeWeight = 1;
root_child_1_child_0.strokeAlign = "INSIDE";
root_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0) root_child_1_child_0.cornerRadius = 0;

// Start Child: Frame 1612
const root_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0.name = "Frame 1612";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
root_child_1_child_0_child_0.resize(104, 24);
if ("layoutMode" in root_child_1_child_0_child_0) {
    root_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_0.itemSpacing = 16;
    root_child_1_child_0_child_0.paddingTop = 0;
    root_child_1_child_0_child_0.paddingRight = 0;
    root_child_1_child_0_child_0.paddingBottom = 0;
    root_child_1_child_0_child_0.paddingLeft = 0;
}
root_child_1_child_0_child_0.layoutAlign = "STRETCH";
root_child_1_child_0_child_0.layoutGrow = 0;
root_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Frame 1618
const root_child_1_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0_child_0.name = "Frame 1618";
root_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0.locked = false;
root_child_1_child_0_child_0_child_0.resize(88, 24);
if ("layoutMode" in root_child_1_child_0_child_0_child_0) {
    root_child_1_child_0_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_0_child_0.itemSpacing = 4;
    root_child_1_child_0_child_0_child_0.paddingTop = 0;
    root_child_1_child_0_child_0_child_0.paddingRight = 0;
    root_child_1_child_0_child_0_child_0.paddingBottom = 0;
    root_child_1_child_0_child_0_child_0.paddingLeft = 0;
}
root_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0.layoutGrow = 0;
root_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: pk-avatar
const root_child_1_child_0_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0_child_0_child_0.name = "pk-avatar";
root_child_1_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0_child_0.locked = false;
root_child_1_child_0_child_0_child_0_child_0.resize(24, 24);
if ("layoutMode" in root_child_1_child_0_child_0_child_0_child_0) {
    root_child_1_child_0_child_0_child_0_child_0.layoutMode = "NONE";
    root_child_1_child_0_child_0_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_0_child_0_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_0_child_0_child_0.counterAxisAlignItems = "MIN";
    root_child_1_child_0_child_0_child_0_child_0.itemSpacing = 0;
    root_child_1_child_0_child_0_child_0_child_0.paddingTop = 0;
    root_child_1_child_0_child_0_child_0_child_0.paddingRight = 0;
    root_child_1_child_0_child_0_child_0_child_0.paddingBottom = 0;
    root_child_1_child_0_child_0_child_0_child_0.paddingLeft = 0;
}
root_child_1_child_0_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0_child_0.layoutGrow = 0;
root_child_1_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Ellipse 22
const root_child_1_child_0_child_0_child_0_child_0_child_0 = figma.createEllipse();
root_child_1_child_0_child_0_child_0_child_0_child_0.name = "Ellipse 22";
root_child_1_child_0_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0_child_0_child_0.locked = false;
root_child_1_child_0_child_0_child_0_child_0_child_0.resize(24, 24);
root_child_1_child_0_child_0_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0_child_0_child_0.layoutGrow = 0;
root_child_1_child_0_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
root_child_1_child_0_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_0_child_0_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0_child_0_child_0);
root_child_1_child_0_child_0_child_0_child_0_child_0.relativeTransform = [[1,0,0],[0,1,0]];

// Start Child: FW
const root_child_1_child_0_child_0_child_0_child_0_child_1 = figma.createText();
root_child_1_child_0_child_0_child_0_child_0_child_1.name = "FW";
root_child_1_child_0_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_0_child_0_child_0_child_1.locked = false;
root_child_1_child_0_child_0_child_0_child_0_child_1.resize(17, 21);
root_child_1_child_0_child_0_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0_child_0_child_1.layoutGrow = 0;
root_child_1_child_0_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.2705882489681244,"g":0.3607843220233917,"b":0.40392157435417175},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_0_child_1.strokeWeight = 2.473090410232544;
root_child_1_child_0_child_0_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_0_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_0_child_0_child_0_child_0_child_1.characters = "JD";
root_child_1_child_0_child_0_child_0_child_0_child_1.fontSize = 14;
await figma.loadFontAsync({"family":"Manrope","style":"Bold"});
root_child_1_child_0_child_0_child_0_child_0_child_1.fontName = {"family":"Manrope","style":"Bold"};
// Styled Segments
await figma.loadFontAsync({"family":"Manrope","style":"Bold"});
root_child_1_child_0_child_0_child_0_child_0_child_1.setRangeFontName(0, 2, {"family":"Manrope","style":"Bold"});
root_child_1_child_0_child_0_child_0_child_0_child_1.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.2705882489681244,"g":0.3607843220233917,"b":0.40392157435417175},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0_child_1.setRangeFontSize(0, 2, 14);
root_child_1_child_0_child_0_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0_child_0_child_1);
root_child_1_child_0_child_0_child_0_child_0_child_1.relativeTransform = [[1,0,3.5],[0,1,2]];
root_child_1_child_0_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0_child_0);
root_child_1_child_0_child_0_child_0_child_0.relativeTransform = [[1,0,0],[0,1,0]];

// Start Child: John Doe
const root_child_1_child_0_child_0_child_0_child_1 = figma.createText();
root_child_1_child_0_child_0_child_0_child_1.name = "John Doe";
root_child_1_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_0_child_0_child_1.locked = false;
root_child_1_child_0_child_0_child_0_child_1.resize(60, 21);
root_child_1_child_0_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0_child_1.layoutGrow = 0;
root_child_1_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_1.strokeWeight = 1;
root_child_1_child_0_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
root_child_1_child_0_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_0_child_0_child_0_child_1.characters = "John Doe";
root_child_1_child_0_child_0_child_0_child_1.fontSize = 14;
await figma.loadFontAsync({"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_0_child_0_child_1.fontName = {"family":"Open Sans","style":"Regular"};
// Styled Segments
await figma.loadFontAsync({"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_0_child_0_child_1.setRangeFontName(0, 8, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_0_child_0_child_1.setRangeFills(0, 8, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_1.setRangeFontSize(0, 8, 14);
root_child_1_child_0_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0_child_1);
root_child_1_child_0_child_0_child_0_child_1.relativeTransform = [[1,0,28],[0,1,1.5]];
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0);
root_child_1_child_0_child_0_child_0.relativeTransform = [[1,0,0],[0,1,0]];

// Start Child: Line 43
const root_child_1_child_0_child_0_child_1 = figma.createFrame(); // Fallback for LINE
root_child_1_child_0_child_0_child_1.name = "Line 43";
root_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_0_child_1.locked = false;
root_child_1_child_0_child_0_child_1.resize(24, 0);
root_child_1_child_0_child_0_child_1.layoutAlign = "STRETCH";
root_child_1_child_0_child_0_child_1.layoutGrow = 0;
root_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_1.strokeWeight = 1;
root_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
root_child_1_child_0_child_0_child_1.effects = [];
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_1);
root_child_1_child_0_child_0_child_1.relativeTransform = [[-4.3711395392165286e-8,-1,104],[1,-4.3711395392165286e-8,0]];
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
root_child_1_child_0_child_0.relativeTransform = [[1,0,0],[0,1,0]];
root_child_1.appendChild(root_child_1_child_0);
root_child_1_child_0.relativeTransform = [[1,0,798.62060546875],[0,1,0]];

// Start Child: Navigation / Hamburger
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Navigation / Hamburger";
root_child_1_child_1.visible = true;
root_child_1_child_1.opacity = 1;
root_child_1_child_1.locked = false;
root_child_1_child_1.resize(24, 24);
if ("layoutMode" in root_child_1_child_1) {
    root_child_1_child_1.layoutMode = "NONE";
    root_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_1_child_1.itemSpacing = 0;
    root_child_1_child_1.paddingTop = 0;
    root_child_1_child_1.paddingRight = 0;
    root_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1.paddingLeft = 0;
}
root_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1.layoutGrow = 0;
root_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1.strokeWeight = 1;
root_child_1_child_1.strokeAlign = "INSIDE";
root_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1) root_child_1_child_1.cornerRadius = 0;

// Start Child: Union
const root_child_1_child_1_child_0 = figma.createFrame(); // Fallback for BOOLEAN_OPERATION
root_child_1_child_1_child_0.name = "Union";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
root_child_1_child_1_child_0.resize(20, 14);
root_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0.layoutGrow = 0;
root_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokeWeight = 2;
root_child_1_child_1_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Vector (Stroke)
const root_child_1_child_1_child_0_child_0 = figma.createVector();
root_child_1_child_1_child_0_child_0.name = "Vector (Stroke)";
root_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0.locked = false;
root_child_1_child_1_child_0_child_0.resize(20, 2);
root_child_1_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0.layoutGrow = 0;
root_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0.strokeWeight = 2;
root_child_1_child_1_child_0_child_0.strokeAlign = "CENTER";
root_child_1_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
root_child_1_child_1_child_0_child_0.relativeTransform = [[1,0,2],[0,1,11]];

// Start Child: Vector (Stroke)
const root_child_1_child_1_child_0_child_1 = figma.createVector();
root_child_1_child_1_child_0_child_1.name = "Vector (Stroke)";
root_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_1.locked = false;
root_child_1_child_1_child_0_child_1.resize(20, 2);
root_child_1_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_1.layoutGrow = 0;
root_child_1_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_1.strokeWeight = 2;
root_child_1_child_1_child_0_child_1.strokeAlign = "CENTER";
root_child_1_child_1_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.cornerRadius = 0;
root_child_1_child_1_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
root_child_1_child_1_child_0_child_1.relativeTransform = [[1,0,2],[0,1,5]];

// Start Child: Vector (Stroke)
const root_child_1_child_1_child_0_child_2 = figma.createVector();
root_child_1_child_1_child_0_child_2.name = "Vector (Stroke)";
root_child_1_child_1_child_0_child_2.visible = true;
root_child_1_child_1_child_0_child_2.opacity = 1;
root_child_1_child_1_child_0_child_2.locked = false;
root_child_1_child_1_child_0_child_2.resize(20, 2);
root_child_1_child_1_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_2.layoutGrow = 0;
root_child_1_child_1_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_2.strokeWeight = 2;
root_child_1_child_1_child_0_child_2.strokeAlign = "CENTER";
root_child_1_child_1_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_2) root_child_1_child_1_child_0_child_2.cornerRadius = 0;
root_child_1_child_1_child_0_child_2.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_2);
root_child_1_child_1_child_0_child_2.relativeTransform = [[1,0,2],[0,1,17]];
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
root_child_1_child_1_child_0.relativeTransform = [[1,0,2],[0,1,5]];
root_child_1.appendChild(root_child_1_child_1);
root_child_1_child_1.relativeTransform = [[1,0,926.62060546875],[0,1,0]];
root.appendChild(root_child_1);
root_child_1.relativeTransform = [[1,0,689.37939453125],[0,1,8]];


        root.x = props.x;
        root.y = props.y;

        return root;
    }
}
