import { BaseComponent, ComponentProps } from "../BaseComponent";
import { Colors, Fonts } from "../../slides/theme";

type Point = {
    x: number;
    y: number;
};

export interface SlideObjectComponent {
    create(props: ComponentProps): Promise<FrameNode>;
}

export type SlideObjectComponentConstructor = new () => SlideObjectComponent;

export interface SlideObjectDefinition {
    key: string;
    description: string;
    component: SlideObjectComponentConstructor;
}

const DEFAULT_OBJECT_WIDTH = 248;
const DEFAULT_OBJECT_HEIGHT = 132;
const CARD_PADDING = 10;
const HEADER_HEIGHT = 24;

const CHART_PALETTE: RGB[] = [
    Colors.ACCENT,
    Colors.TEXT_MAIN,
    Colors.BLUE_LIGHT,
    { r: 0x7a / 255, g: 0xc4 / 255, b: 0xff / 255 },
    { r: 0xc5 / 255, g: 0xd6 / 255, b: 0xff / 255 }
];

let fontsLoaded = false;

const solid = (color: RGB, opacity = 1): SolidPaint => ({ type: "SOLID", color, opacity });

const toDimension = (value: unknown, fallback: number): number => {
    if (typeof value === "number" && Number.isFinite(value) && value > 0) {
        return value;
    }
    return fallback;
};

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

const ensureFontsLoaded = async (): Promise<void> => {
    if (fontsLoaded) {
        return;
    }
    await Promise.all([
        figma.loadFontAsync(Fonts.PRIMARY),
        figma.loadFontAsync(Fonts.BOLD),
        figma.loadFontAsync(Fonts.EXTRA_BOLD)
    ]);
    fontsLoaded = true;
};

const hex = (value: number): string => {
    const clamped = Math.max(0, Math.min(255, Math.round(value * 255)));
    return clamped.toString(16).padStart(2, "0");
};

const colorToHex = (color: RGB): string => `#${hex(color.r)}${hex(color.g)}${hex(color.b)}`;

const createCardShell = async (title: string, props: ComponentProps): Promise<FrameNode> => {
    await ensureFontsLoaded();

    const width = toDimension(props.width, DEFAULT_OBJECT_WIDTH);
    const height = toDimension(props.height, DEFAULT_OBJECT_HEIGHT);

    const card = figma.createFrame();
    card.name = `Object_${title}`;
    card.layoutMode = "NONE";
    card.resize(width, height);
    card.cornerRadius = 12;
    card.clipsContent = true;
    card.fills = [solid(Colors.WHITE)];
    card.strokes = [solid(Colors.TEXT_SECONDARY, 0.35)];
    card.strokeWeight = 1;

    const titleNode = figma.createText();
    titleNode.name = "Object_Title";
    titleNode.fontName = Fonts.BOLD;
    titleNode.fontSize = 11;
    titleNode.fills = [solid(Colors.TEXT_MAIN)];
    titleNode.characters = title;
    titleNode.textAutoResize = "WIDTH_AND_HEIGHT";
    titleNode.x = CARD_PADDING;
    titleNode.y = 7;
    card.appendChild(titleNode);

    const divider = figma.createRectangle();
    divider.name = "Object_Header_Divider";
    divider.resize(width - (CARD_PADDING * 2), 1);
    divider.x = CARD_PADDING;
    divider.y = HEADER_HEIGHT;
    divider.fills = [solid(Colors.BACKGROUND)];
    divider.strokes = [];
    card.appendChild(divider);

    return card;
};

const createText = (
    parent: FrameNode,
    options: {
        name: string;
        text: string;
        x: number;
        y: number;
        width?: number;
        font: FontName;
        fontSize: number;
        color: RGB;
        align?: "LEFT" | "CENTER" | "RIGHT";
    }
): TextNode => {
    const node = figma.createText();
    node.name = options.name;
    node.fontName = options.font;
    node.fontSize = options.fontSize;
    node.fills = [solid(options.color)];
    node.characters = options.text;
    node.textAlignHorizontal = options.align ?? "LEFT";
    node.textAlignVertical = "TOP";

    if (typeof options.width === "number") {
        node.resize(Math.max(1, options.width), Math.max(16, options.fontSize * 1.25));
        node.textAutoResize = "HEIGHT";
    } else {
        node.textAutoResize = "WIDTH_AND_HEIGHT";
    }

    node.x = options.x;
    node.y = options.y;
    parent.appendChild(node);
    return node;
};

const getCanvasBounds = (card: FrameNode, footer = 0) => {
    const left = CARD_PADDING;
    const top = HEADER_HEIGHT + 6;
    const width = card.width - (CARD_PADDING * 2);
    const height = card.height - top - CARD_PADDING - footer;

    return {
        left,
        top,
        width,
        height,
        right: left + width,
        bottom: top + height,
        cx: left + (width / 2),
        cy: top + (height / 2)
    };
};

const addCircle = (
    parent: FrameNode,
    name: string,
    center: Point,
    diameter: number,
    fillColor: RGB,
    strokeColor?: RGB,
    strokeWeight = 0
): EllipseNode => {
    const node = figma.createEllipse();
    node.name = name;
    node.resize(diameter, diameter);
    node.x = center.x - (diameter / 2);
    node.y = center.y - (diameter / 2);
    node.fills = [solid(fillColor)];

    if (strokeColor && strokeWeight > 0) {
        node.strokes = [solid(strokeColor)];
        node.strokeWeight = strokeWeight;
    } else {
        node.strokes = [];
    }

    parent.appendChild(node);
    return node;
};

const toPolarPoint = (center: Point, radius: number, angleDeg: number): Point => {
    const radians = (angleDeg * Math.PI) / 180;
    return {
        x: center.x + (radius * Math.cos(radians)),
        y: center.y + (radius * Math.sin(radians))
    };
};

const createPathFromPoints = (points: Point[]): string => {
    if (points.length === 0) {
        return "";
    }

    const commands = [`M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`];
    for (let index = 1; index < points.length; index += 1) {
        commands.push(`L ${points[index].x.toFixed(2)} ${points[index].y.toFixed(2)}`);
    }
    return commands.join(" ");
};

const createSvgNode = (parent: FrameNode, name: string, svg: string): SceneNode => {
    const node = figma.createNodeFromSvg(svg);
    node.name = name;
    node.x = 0;
    node.y = 0;
    parent.appendChild(node);
    return node;
};

export class BarChartObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("bar_chart", props);
        const bounds = getCanvasBounds(card, 16);

        const values = [38, 74, 52, 86, 62];
        const labels = ["Q1", "Q2", "Q3", "Q4", "Q5"];
        const maxValue = Math.max(...values);

        const axisY = bounds.bottom - 10;
        const axis = figma.createRectangle();
        axis.name = "Axis";
        axis.resize(bounds.width, 1.5);
        axis.x = bounds.left;
        axis.y = axisY;
        axis.fills = [solid(Colors.TEXT_SECONDARY, 0.45)];
        axis.strokes = [];
        card.appendChild(axis);

        const slotWidth = bounds.width / values.length;
        const barWidth = Math.max(8, slotWidth - 8);

        values.forEach((value, index) => {
            const normalized = value / maxValue;
            const barHeight = Math.max(6, normalized * (bounds.height - 20));
            const bar = figma.createRectangle();
            bar.name = `Bar_${index}`;
            bar.resize(barWidth, barHeight);
            bar.x = bounds.left + (slotWidth * index) + ((slotWidth - barWidth) / 2);
            bar.y = axisY - barHeight;
            bar.cornerRadius = 2;
            bar.fills = [solid(CHART_PALETTE[index % CHART_PALETTE.length])];
            bar.strokes = [];
            card.appendChild(bar);

            createText(card, {
                name: `Label_${index}`,
                text: labels[index],
                x: bar.x - 4,
                y: axisY + 2,
                width: barWidth + 8,
                font: Fonts.PRIMARY,
                fontSize: 8,
                color: Colors.TEXT_SECONDARY,
                align: "CENTER"
            });
        });

        return card;
    }
}

export class LineChartObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("line_chart", props);
        const bounds = getCanvasBounds(card, 16);

        const values = [22, 48, 36, 68, 54, 74];
        const labels = ["M1", "M2", "M3", "M4", "M5", "M6"];
        const maxValue = Math.max(...values);

        const plotTop = bounds.top + 4;
        const plotBottom = bounds.bottom - 10;
        const plotHeight = plotBottom - plotTop;
        const stepX = bounds.width / (values.length - 1);

        const baseline = figma.createRectangle();
        baseline.name = "Baseline";
        baseline.resize(bounds.width, 1.5);
        baseline.x = bounds.left;
        baseline.y = plotBottom;
        baseline.fills = [solid(Colors.TEXT_SECONDARY, 0.4)];
        baseline.strokes = [];
        card.appendChild(baseline);

        const points = values.map((value, index) => ({
            x: bounds.left + (stepX * index),
            y: plotBottom - ((value / maxValue) * plotHeight)
        }));

        const svgWidth = Math.ceil(card.width);
        const svgHeight = Math.ceil(card.height);
        const accentHex = colorToHex(Colors.ACCENT);
        const linePath = createPathFromPoints(points);

        const lineSvg = `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${linePath}" stroke="${accentHex}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

        createSvgNode(card, "Line_Path", lineSvg);

        points.forEach((point, index) => {
            addCircle(card, `Point_${index}`, point, 6, Colors.WHITE, Colors.ACCENT, 2);
            createText(card, {
                name: `XAxis_${index}`,
                text: labels[index],
                x: point.x - 12,
                y: plotBottom + 2,
                width: 24,
                font: Fonts.PRIMARY,
                fontSize: 8,
                color: Colors.TEXT_SECONDARY,
                align: "CENTER"
            });
        });

        return card;
    }
}

export class AreaChartObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("area_chart", props);
        const bounds = getCanvasBounds(card, 14);

        const values = [28, 42, 34, 58, 50, 64];
        const maxValue = Math.max(...values);
        const plotTop = bounds.top + 6;
        const plotBottom = bounds.bottom - 8;
        const plotHeight = plotBottom - plotTop;
        const stepX = bounds.width / (values.length - 1);

        const points = values.map((value, index) => ({
            x: bounds.left + (stepX * index),
            y: plotBottom - ((value / maxValue) * plotHeight)
        }));

        const areaPathPoints: Point[] = [
            { x: points[0].x, y: plotBottom },
            ...points,
            { x: points[points.length - 1].x, y: plotBottom }
        ];

        const areaPath = `${createPathFromPoints(areaPathPoints)} Z`;
        const linePath = createPathFromPoints(points);

        const svgWidth = Math.ceil(card.width);
        const svgHeight = Math.ceil(card.height);
        const accentHex = colorToHex(Colors.ACCENT);

        const areaSvg = `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${areaPath}" fill="${accentHex}" fill-opacity="0.18"/>
  <path d="${linePath}" stroke="${accentHex}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

        const plot = figma.createNodeFromSvg(areaSvg);
        plot.name = "Area_Plot";
        plot.x = 0;
        plot.y = 0;
        card.appendChild(plot);

        points.forEach((point, index) => {
            addCircle(card, `Area_Point_${index}`, point, 5, Colors.ACCENT);
        });

        return card;
    }
}

export class PieChartObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("pie_chart", props);
        const bounds = getCanvasBounds(card);

        const values = [44, 24, 18, 14];
        const total = values.reduce((sum, value) => sum + value, 0);
        const size = Math.min(bounds.width, bounds.height - 4);
        const origin = {
            x: bounds.cx - (size / 2),
            y: bounds.cy - (size / 2)
        };

        let start = -Math.PI / 2;

        values.forEach((value, index) => {
            const sweep = (value / total) * Math.PI * 2;
            const slice = figma.createEllipse();
            slice.name = `Slice_${index}`;
            slice.resize(size, size);
            slice.x = origin.x;
            slice.y = origin.y;
            slice.arcData = {
                startingAngle: start,
                endingAngle: start + sweep,
                innerRadius: 0
            };
            slice.fills = [solid(CHART_PALETTE[index % CHART_PALETTE.length])];
            slice.strokes = [solid(Colors.WHITE)];
            slice.strokeWeight = 1;
            card.appendChild(slice);
            start += sweep;
        });

        return card;
    }
}

export class DonutChartObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("donut_chart", props);
        const bounds = getCanvasBounds(card);

        const values = [55, 25, 12, 8];
        const total = values.reduce((sum, value) => sum + value, 0);
        const size = Math.min(bounds.width, bounds.height - 6);
        const origin = {
            x: bounds.cx - (size / 2),
            y: bounds.cy - (size / 2)
        };

        let start = -Math.PI / 2;

        values.forEach((value, index) => {
            const sweep = (value / total) * Math.PI * 2;
            const slice = figma.createEllipse();
            slice.name = `Ring_${index}`;
            slice.resize(size, size);
            slice.x = origin.x;
            slice.y = origin.y;
            slice.arcData = {
                startingAngle: start,
                endingAngle: start + sweep,
                innerRadius: 0.64
            };
            slice.fills = [solid(CHART_PALETTE[index % CHART_PALETTE.length])];
            slice.strokes = [solid(Colors.WHITE)];
            slice.strokeWeight = 1;
            card.appendChild(slice);
            start += sweep;
        });

        createText(card, {
            name: "Center_Value",
            text: "55%",
            x: bounds.cx - 24,
            y: bounds.cy - 10,
            width: 48,
            font: Fonts.EXTRA_BOLD,
            fontSize: 14,
            color: Colors.TEXT_MAIN,
            align: "CENTER"
        });

        return card;
    }
}

export class RadarChartObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("radar_chart", props);
        const bounds = getCanvasBounds(card);

        const axisLabels = ["SPD", "TEC", "PWR", "END", "CTL"];
        const values = [78, 62, 85, 58, 72];
        const axisCount = axisLabels.length;
        const center = { x: bounds.cx, y: bounds.cy + 2 };
        const radius = Math.min(bounds.width, bounds.height) / 2 - 14;
        const gridHex = colorToHex(Colors.TEXT_SECONDARY);
        const accentHex = colorToHex(Colors.ACCENT);
        const svgWidth = Math.ceil(card.width);
        const svgHeight = Math.ceil(card.height);
        const ringPaths: string[] = [];

        [0.34, 0.67, 1].forEach((factor, ringIndex) => {
            const ringPoints: Point[] = [];
            for (let axisIndex = 0; axisIndex < axisCount; axisIndex += 1) {
                const angle = -90 + ((360 / axisCount) * axisIndex);
                ringPoints.push(toPolarPoint(center, radius * factor, angle));
            }
            ringPaths[ringIndex] = `${createPathFromPoints(ringPoints)} Z`;
        });

        const axisLines: string[] = [];
        for (let axisIndex = 0; axisIndex < axisCount; axisIndex += 1) {
            const angle = -90 + ((360 / axisCount) * axisIndex);
            const axisPoint = toPolarPoint(center, radius, angle);
            axisLines.push(
                `<line x1="${center.x.toFixed(2)}" y1="${center.y.toFixed(2)}" x2="${axisPoint.x.toFixed(2)}" y2="${axisPoint.y.toFixed(2)}" stroke="${gridHex}" stroke-opacity="0.38" stroke-width="1"/>`
            );

            const labelPoint = toPolarPoint(center, radius + 10, angle);
            const labelWidth = 28;
            createText(card, {
                name: `Axis_Label_${axisIndex}`,
                text: axisLabels[axisIndex],
                x: clamp(labelPoint.x - (labelWidth / 2), bounds.left, bounds.right - labelWidth),
                y: clamp(labelPoint.y - 5, bounds.top - 2, bounds.bottom - 10),
                width: labelWidth,
                font: Fonts.PRIMARY,
                fontSize: 7,
                color: Colors.TEXT_MAIN,
                align: "CENTER"
            });
        }

        const valuePoints: Point[] = values.map((value, index) => {
            const angle = -90 + ((360 / axisCount) * index);
            return toPolarPoint(center, radius * (value / 100), angle);
        });
        const polygonPath = `${createPathFromPoints(valuePoints)} Z`;
        const markerCircles = valuePoints.map((point) =>
            `<circle cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="2.8" fill="${accentHex}"/>`
        ).join("");

        const radarSvg = `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${ringPaths[0]}" stroke="${gridHex}" stroke-opacity="0.28" stroke-width="1"/>
  <path d="${ringPaths[1]}" stroke="${gridHex}" stroke-opacity="0.34" stroke-width="1"/>
  <path d="${ringPaths[2]}" stroke="${gridHex}" stroke-opacity="0.44" stroke-width="1"/>
  ${axisLines.join("")}
  <path d="${polygonPath}" fill="${accentHex}" fill-opacity="0.18" stroke="${accentHex}" stroke-width="2" stroke-linejoin="round"/>
  ${markerCircles}
</svg>`;

        createSvgNode(card, "Radar_Plot", radarSvg);

        return card;
    }
}

export class StatCardObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("stat_card", props);
        const bounds = getCanvasBounds(card);

        const stat = figma.createFrame();
        stat.name = "Stat_Card";
        stat.layoutMode = "NONE";
        stat.resize(bounds.width, bounds.height);
        stat.x = bounds.left;
        stat.y = bounds.top;
        stat.cornerRadius = 10;
        stat.fills = [solid(Colors.WHITE)];
        stat.strokes = [solid(Colors.ACCENT, 0.7)];
        stat.strokeWeight = 1.5;
        card.appendChild(stat);

        createText(stat, {
            name: "Value",
            text: "0.59",
            x: 0,
            y: 16,
            width: stat.width,
            font: Fonts.EXTRA_BOLD,
            fontSize: 28,
            color: Colors.ACCENT,
            align: "CENTER"
        });

        createText(stat, {
            name: "Label",
            text: "Sessions / User",
            x: 0,
            y: 52,
            width: stat.width,
            font: Fonts.PRIMARY,
            fontSize: 10,
            color: Colors.TEXT_MAIN,
            align: "CENTER"
        });

        createText(stat, {
            name: "Trend",
            text: "+12% vs last month",
            x: 0,
            y: 72,
            width: stat.width,
            font: Fonts.PRIMARY,
            fontSize: 9,
            color: Colors.SUCCESS,
            align: "CENTER"
        });

        return card;
    }
}

export class TimelineObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("timeline", props);
        const bounds = getCanvasBounds(card);

        const steps = ["Kickoff", "Build", "Review", "Launch"];
        const markerSize = 10;
        const markerRadius = markerSize / 2;
        const lineY = bounds.top + 24;
        const lineStartX = bounds.left + markerRadius;
        const lineEndX = bounds.right - markerRadius;
        const stepX = (lineEndX - lineStartX) / (steps.length - 1);

        const line = figma.createRectangle();
        line.name = "Timeline_Line";
        line.resize(lineEndX - lineStartX, 2);
        line.x = lineStartX;
        line.y = lineY;
        line.cornerRadius = 1;
        line.fills = [solid(Colors.ACCENT, 0.7)];
        line.strokes = [];
        card.appendChild(line);

        steps.forEach((step, index) => {
            const x = lineStartX + (stepX * index);
            const isActive = index === 0;

            addCircle(
                card,
                `Step_${index}`,
                { x, y: lineY + 1 },
                markerSize,
                isActive ? Colors.ACCENT : Colors.WHITE,
                Colors.ACCENT,
                2
            );

            const labelWidth = 46;
            createText(card, {
                name: `Step_Label_${index}`,
                text: step,
                x: clamp(x - (labelWidth / 2), bounds.left, bounds.right - labelWidth),
                y: lineY + 11,
                width: labelWidth,
                font: Fonts.PRIMARY,
                fontSize: 7,
                color: Colors.TEXT_MAIN,
                align: "CENTER"
            });
        });

        return card;
    }
}

export class StackedTimelineObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("stacked_timeline", props);
        const bounds = getCanvasBounds(card);

        const tracks = [
            { label: "Research", start: 0, span: 3, color: Colors.BLUE_LIGHT },
            { label: "Design", start: 2, span: 3, color: Colors.ACCENT },
            { label: "Launch", start: 5, span: 2, color: Colors.TEXT_MAIN }
        ];

        const totalUnits = 8;
        const unitWidth = bounds.width / totalUnits;
        const rowHeight = 16;
        const rowGap = 8;

        tracks.forEach((track, index) => {
            const bar = figma.createRectangle();
            bar.name = `Track_${index}`;
            bar.resize(track.span * unitWidth, rowHeight);
            bar.x = bounds.left + (track.start * unitWidth);
            bar.y = bounds.top + (index * (rowHeight + rowGap));
            bar.cornerRadius = rowHeight / 2;
            bar.fills = [solid(track.color)];
            bar.strokes = [];
            bar.effects = [
                {
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.12 },
                    offset: { x: 0, y: 1 },
                    radius: 2,
                    visible: true,
                    blendMode: "NORMAL"
                }
            ];
            card.appendChild(bar);

            createText(card, {
                name: `Track_Label_${index}`,
                text: track.label,
                x: bar.x,
                y: bar.y + 2,
                width: bar.width,
                font: Fonts.PRIMARY,
                fontSize: 8,
                color: Colors.WHITE,
                align: "CENTER"
            });
        });

        return card;
    }
}

export class ImageObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("image", props);
        const bounds = getCanvasBounds(card);

        const slot = figma.createRectangle();
        slot.name = "Image_Slot";
        slot.resize(bounds.width, bounds.height);
        slot.x = bounds.left;
        slot.y = bounds.top;
        slot.cornerRadius = 8;
        slot.fills = [solid(Colors.BACKGROUND)];
        slot.strokes = [solid(Colors.ACCENT, 0.6)];
        slot.strokeWeight = 1.5;
        slot.dashPattern = [8, 6];
        card.appendChild(slot);

        const iconWidth = 58;
        const iconHeight = 34;
        const iconX = bounds.cx - (iconWidth / 2);
        const iconY = bounds.top + 12;
        const svgWidth = Math.ceil(card.width);
        const svgHeight = Math.ceil(card.height);
        const accentHex = colorToHex(Colors.ACCENT);
        const accentSoftHex = colorToHex({ r: Colors.ACCENT.r, g: Colors.ACCENT.g, b: Colors.ACCENT.b });
        const sunHex = colorToHex(Colors.BLUE_LIGHT);

        const iconSvg = `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="${iconX.toFixed(2)}" y="${iconY.toFixed(2)}" width="${iconWidth}" height="${iconHeight}" rx="4" stroke="${accentSoftHex}" stroke-opacity="0.55" stroke-width="1.2"/>
  <circle cx="${(iconX + iconWidth - 10).toFixed(2)}" cy="${(iconY + 9).toFixed(2)}" r="3.5" fill="${sunHex}" fill-opacity="0.9"/>
  <path d="M ${(iconX + 6).toFixed(2)} ${(iconY + iconHeight - 5).toFixed(2)} L ${(iconX + 20).toFixed(2)} ${(iconY + 17).toFixed(2)} L ${(iconX + 28).toFixed(2)} ${(iconY + 23).toFixed(2)} L ${(iconX + 40).toFixed(2)} ${(iconY + 11).toFixed(2)} L ${(iconX + iconWidth - 6).toFixed(2)} ${(iconY + iconHeight - 5).toFixed(2)}" stroke="${accentHex}" stroke-opacity="0.86" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

        createSvgNode(card, "Image_Icon", iconSvg);

        createText(card, {
            name: "Image_Label",
            text: "media placeholder",
            x: bounds.left,
            y: bounds.top + iconHeight + 20,
            width: bounds.width,
            font: Fonts.PRIMARY,
            fontSize: 9,
            color: Colors.TEXT_SECONDARY,
            align: "CENTER"
        });

        return card;
    }
}

export class TextObject extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const card = await createCardShell("text", props);
        const bounds = getCanvasBounds(card);

        createText(card, {
            name: "Headline",
            text: "Narrative block for commentary and caveats.",
            x: bounds.left,
            y: bounds.top,
            width: bounds.width,
            font: Fonts.BOLD,
            fontSize: 10,
            color: Colors.TEXT_MAIN,
            align: "LEFT"
        });

        createText(card, {
            name: "Body",
            text: "Use this area to explain metric context, assumptions, and insights that complement charts.",
            x: bounds.left,
            y: bounds.top + 18,
            width: bounds.width,
            font: Fonts.PRIMARY,
            fontSize: 9,
            color: Colors.TEXT_SECONDARY,
            align: "LEFT"
        });

        const bulletY = bounds.top + 54;
        ["Key point one", "Data source note", "Action recommendation"].forEach((item, index) => {
            const y = bulletY + (index * 12);
            addCircle(card, `Bullet_${index}`, { x: bounds.left + 4, y: y + 4 }, 4, Colors.ACCENT);
            createText(card, {
                name: `Bullet_Text_${index}`,
                text: item,
                x: bounds.left + 10,
                y,
                width: bounds.width - 12,
                font: Fonts.PRIMARY,
                fontSize: 8,
                color: Colors.TEXT_MAIN,
                align: "LEFT"
            });
        });

        return card;
    }
}

export const SLIDE_OBJECT_DEFINITIONS: SlideObjectDefinition[] = [
    {
        key: "bar_chart",
        description: "Compare category performance over time windows or groups.",
        component: BarChartObject
    },
    {
        key: "line_chart",
        description: "Track trend direction and momentum across matchdays.",
        component: LineChartObject
    },
    {
        key: "area_chart",
        description: "Show cumulative growth and relative contribution patterns.",
        component: AreaChartObject
    },
    {
        key: "pie_chart",
        description: "Communicate proportional split of a fixed total quickly.",
        component: PieChartObject
    },
    {
        key: "donut_chart",
        description: "Highlight share breakdown with optional center KPI value.",
        component: DonutChartObject
    },
    {
        key: "radar_chart",
        description: "Compare multi-metric profiles in a compact visual.",
        component: RadarChartObject
    },
    {
        key: "stat_card",
        description: "Feature one key KPI with a short interpretation line.",
        component: StatCardObject
    },
    {
        key: "timeline",
        description: "Sequence milestones, events, and delivery checkpoints.",
        component: TimelineObject
    },
    {
        key: "stacked_timeline",
        description: "Layer parallel tracks such as teams, markets, or phases.",
        component: StackedTimelineObject
    },
    {
        key: "image",
        description: "Reserve media slot for photography, artwork, or screenshots.",
        component: ImageObject
    },
    {
        key: "text",
        description: "Use narrative copy block for context, caveats, and insights.",
        component: TextObject
    }
];

export const SLIDE_OBJECT_CARD_SIZE = {
    width: DEFAULT_OBJECT_WIDTH,
    height: DEFAULT_OBJECT_HEIGHT
};
