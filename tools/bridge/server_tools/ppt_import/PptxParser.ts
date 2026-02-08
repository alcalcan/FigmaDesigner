import JSZip from 'jszip';
import { XMLParser } from 'fast-xml-parser';
import * as path from 'path';
import {
    ParsedDeck,
    ParsedSlide,
    ParsedAsset,
    SlideElement,
    ShapeSlideElement,
    TextSlideElement,
    ImageSlideElement,
    emuToPx,
    hundredthPointToPx
} from './PptImportTypes';

type XmlNode = Record<string, unknown>;
type PreserveNode = Record<string, unknown>;

interface GroupTransform {
    tx: number;
    ty: number;
    sx: number;
    sy: number;
}

interface SlideParseContext {
    zip: JSZip;
    slidePath: string;
    slideRelationships: Map<string, string>;
}

const DEFAULT_SLIDE_WIDTH = 1280;
const DEFAULT_SLIDE_HEIGHT = 720;

export class PptxParser {
    private readonly parser: XMLParser;
    private readonly preserveOrderParser: XMLParser;
    private readonly warnings: string[] = [];
    private readonly warningSet: Set<string> = new Set();
    private readonly assetsBySourcePath: Map<string, ParsedAsset> = new Map();
    private nextAssetId = 1;

    constructor() {
        this.parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '@_',
            parseTagValue: false,
            trimValues: false
        });

        this.preserveOrderParser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '@_',
            parseTagValue: false,
            trimValues: false,
            preserveOrder: true
        });
    }

    static async parse(base64Data: string, fileName: string): Promise<ParsedDeck> {
        const parser = new PptxParser();
        return parser.parseDeck(base64Data, fileName);
    }

    private async parseDeck(base64Data: string, fileName: string): Promise<ParsedDeck> {
        const zipBuffer = Buffer.from(base64Data, 'base64');
        const zip = await JSZip.loadAsync(zipBuffer);

        const presentationXmlPath = 'ppt/presentation.xml';
        const presentationXml = await this.readRequiredFileText(zip, presentationXmlPath);
        const presentationDoc = this.parseXml(presentationXml);

        const presentationNode = asRecord(presentationDoc['p:presentation']);
        if (!presentationNode) {
            throw new Error('Invalid PPTX: missing p:presentation node');
        }

        const slideSizeNode = asRecord(presentationNode['p:sldSz']);
        const slideWidth = parseNumber(slideSizeNode?.['@_cx']) ?? pxToEmu(DEFAULT_SLIDE_WIDTH);
        const slideHeight = parseNumber(slideSizeNode?.['@_cy']) ?? pxToEmu(DEFAULT_SLIDE_HEIGHT);

        const presentationRelationships = await this.readRelationships(
            zip,
            'ppt/_rels/presentation.xml.rels',
            presentationXmlPath
        );

        const slideIds = asArray(asRecord(presentationNode['p:sldIdLst'])?.['p:sldId']);
        const slides: ParsedSlide[] = [];

        for (let i = 0; i < slideIds.length; i += 1) {
            const slideIdNode = asRecord(slideIds[i]);
            const relationshipId = parseString(slideIdNode?.['@_r:id']);
            if (!relationshipId) {
                this.addWarning(`Slide index ${i + 1} missing relationship ID (r:id).`);
                continue;
            }

            const slidePath = presentationRelationships.get(relationshipId);
            if (!slidePath) {
                this.addWarning(`No relationship target found for slide ID '${relationshipId}'.`);
                continue;
            }

            if (!zip.file(slidePath)) {
                this.addWarning(`Slide file not found in PPTX archive: ${slidePath}`);
                continue;
            }

            const parsedSlide = await this.parseSlide(zip, slidePath, i + 1, slideWidth, slideHeight);
            slides.push(parsedSlide);
        }

        const deckName = sanitizeDeckName(fileName);

        return {
            deckName,
            width: emuToPx(slideWidth),
            height: emuToPx(slideHeight),
            slides,
            assets: Array.from(this.assetsBySourcePath.values()),
            warnings: [...this.warnings]
        };
    }

    private async parseSlide(
        zip: JSZip,
        slidePath: string,
        slideIndex: number,
        fallbackWidthEmu: number,
        fallbackHeightEmu: number
    ): Promise<ParsedSlide> {
        const slideXml = await this.readRequiredFileText(zip, slidePath);
        const slideDoc = this.parseXml(slideXml);
        const preserveDoc = this.parsePreserveXml(slideXml);

        const slideNode = asRecord(slideDoc['p:sld']);
        if (!slideNode) {
            throw new Error(`Invalid slide XML: ${slidePath}`);
        }

        const cSldNode = asRecord(slideNode['p:cSld']);
        const spTreeNode = asRecord(cSldNode?.['p:spTree']);

        if (!spTreeNode) {
            this.addWarning(`Slide '${slidePath}' has no shape tree (p:spTree).`);
        }

        const slideRelationshipsPath = path.posix.join(
            path.posix.dirname(slidePath),
            '_rels',
            `${path.posix.basename(slidePath)}.rels`
        );

        const slideRelationships = await this.readRelationships(zip, slideRelationshipsPath, slidePath, true);

        const orderNodes = this.findPathInPreserveDoc(preserveDoc, ['p:sld', 'p:cSld', 'p:spTree']) ?? [];
        const parseContext: SlideParseContext = {
            zip,
            slidePath,
            slideRelationships
        };

        const elements = spTreeNode
            ? await this.parseContainerElements(spTreeNode, orderNodes, parseContext, {
                tx: 0,
                ty: 0,
                sx: 1,
                sy: 1
            })
            : [];

        const background = this.parseBackgroundColor(cSldNode);

        const slideName = parseString(cSldNode?.['@_name'])
            || `Slide_${slideIndex.toString().padStart(3, '0')}`;

        return {
            index: slideIndex,
            name: slideName,
            width: emuToPx(fallbackWidthEmu),
            height: emuToPx(fallbackHeightEmu),
            background,
            elements
        };
    }

    private async parseContainerElements(
        containerNode: XmlNode,
        orderedChildren: PreserveNode[],
        context: SlideParseContext,
        transform: GroupTransform
    ): Promise<SlideElement[]> {
        const textAndShapeNodes = asArray(containerNode['p:sp']);
        const imageNodes = asArray(containerNode['p:pic']);
        const groupNodes = asArray(containerNode['p:grpSp']);

        let textAndShapeCursor = 0;
        let imageCursor = 0;
        let groupCursor = 0;

        const output: SlideElement[] = [];

        const iterableOrder = orderedChildren.length > 0
            ? orderedChildren
            : this.buildFallbackOrder(textAndShapeNodes.length, imageNodes.length, groupNodes.length);

        for (const orderNode of iterableOrder) {
            const tagName = this.getTagName(orderNode);
            if (tagName === 'p:sp') {
                const shapeNode = asRecord(textAndShapeNodes[textAndShapeCursor]);
                textAndShapeCursor += 1;
                if (shapeNode) {
                    const shapeElements = this.parseShapeNode(shapeNode, transform);
                    output.push(...shapeElements);
                }
                continue;
            }

            if (tagName === 'p:pic') {
                const imageNode = asRecord(imageNodes[imageCursor]);
                imageCursor += 1;
                if (imageNode) {
                    const parsedImage = await this.parsePictureNode(imageNode, context, transform);
                    if (parsedImage) {
                        output.push(parsedImage);
                    }
                }
                continue;
            }

            if (tagName === 'p:grpSp') {
                const groupNode = asRecord(groupNodes[groupCursor]);
                groupCursor += 1;
                if (groupNode) {
                    const groupChildren = this.getTagChildren(orderNode, 'p:grpSp');
                    const groupTransform = this.computeChildGroupTransform(groupNode, transform);
                    const groupElements = await this.parseContainerElements(
                        groupNode,
                        groupChildren,
                        context,
                        groupTransform
                    );
                    output.push(...groupElements);
                }
            }
        }

        return output;
    }

    private parseShapeNode(shapeNode: XmlNode, transform: GroupTransform): SlideElement[] {
        const spPrNode = asRecord(shapeNode['p:spPr']);
        const bounds = this.extractBounds(spPrNode, transform);
        if (!bounds) {
            return [];
        }

        const elements: SlideElement[] = [];

        const textBodyNode = asRecord(shapeNode['p:txBody']);
        const textContent = this.extractTextContent(textBodyNode);
        if (textContent) {
            const textStyle = this.extractTextStyle(textBodyNode);
            const textElement: TextSlideElement = {
                kind: 'text',
                x: bounds.x,
                y: bounds.y,
                w: bounds.w,
                h: bounds.h,
                text: textContent,
                color: textStyle.color ?? '000000',
                fontFamily: textStyle.fontFamily,
                fontStyle: textStyle.fontStyle,
                fontSize: textStyle.fontSize,
                bold: textStyle.bold,
                italic: textStyle.italic,
                align: textStyle.align,
                valign: textStyle.valign
            };
            elements.push(textElement);
        }

        const shapeType = this.extractShapeType(spPrNode);
        const fill = this.extractSolidFill(spPrNode);
        const stroke = this.extractLineStyle(spPrNode);

        const hasVisibleShape = shapeType === 'line'
            || fill.color !== undefined
            || stroke.color !== undefined;

        if (hasVisibleShape) {
            const shapeElement: ShapeSlideElement = {
                kind: 'shape',
                shapeType,
                x: bounds.x,
                y: bounds.y,
                w: bounds.w,
                h: bounds.h,
                fillColor: fill.color,
                strokeColor: stroke.color,
                strokeWeight: stroke.weight,
                opacity: fill.opacity,
                cornerRadius: shapeType === 'rect' && this.isRoundedRect(spPrNode)
                    ? Math.round(Math.min(bounds.w, bounds.h) * 0.1)
                    : undefined
            };
            elements.push(shapeElement);
        }

        return elements;
    }

    private async parsePictureNode(
        pictureNode: XmlNode,
        context: SlideParseContext,
        transform: GroupTransform
    ): Promise<ImageSlideElement | null> {
        const spPrNode = asRecord(pictureNode['p:spPr']);
        const bounds = this.extractBounds(spPrNode, transform);
        if (!bounds) {
            return null;
        }

        const blipFillNode = asRecord(pictureNode['p:blipFill']);
        const blipNode = asRecord(blipFillNode?.['a:blip']);
        const relationshipId = parseString(blipNode?.['@_r:embed']);
        if (!relationshipId) {
            this.addWarning(`Image on slide '${context.slidePath}' missing r:embed relationship.`);
            return null;
        }

        const assetSourcePath = context.slideRelationships.get(relationshipId);
        if (!assetSourcePath) {
            this.addWarning(`Image relationship '${relationshipId}' not found for slide '${context.slidePath}'.`);
            return null;
        }

        const asset = await this.loadOrReuseAsset(context.zip, assetSourcePath);

        return {
            kind: 'image',
            x: bounds.x,
            y: bounds.y,
            w: bounds.w,
            h: bounds.h,
            assetFileName: asset.fileName
        };
    }

    private async loadOrReuseAsset(zip: JSZip, sourcePath: string): Promise<ParsedAsset> {
        const existing = this.assetsBySourcePath.get(sourcePath);
        if (existing) {
            return existing;
        }

        const zipEntry = zip.file(sourcePath);
        if (!zipEntry) {
            throw new Error(`Missing asset in PPTX archive: ${sourcePath}`);
        }

        const rawBytes = await zipEntry.async('nodebuffer');
        const extension = path.extname(sourcePath) || '.bin';
        const assetFileName = `img_${this.nextAssetId.toString().padStart(4, '0')}${extension.toLowerCase()}`;
        this.nextAssetId += 1;

        const asset: ParsedAsset = {
            fileName: assetFileName,
            bytes: rawBytes,
            sourcePath
        };

        this.assetsBySourcePath.set(sourcePath, asset);
        return asset;
    }

    private parseBackgroundColor(cSldNode: XmlNode | undefined): string | undefined {
        const backgroundNode = asRecord(cSldNode?.['p:bg']);
        const bgPropertiesNode = asRecord(backgroundNode?.['p:bgPr']);
        const fill = this.extractSolidFill(bgPropertiesNode);
        return fill.color;
    }

    private extractShapeType(spPrNode: XmlNode | undefined): 'rect' | 'ellipse' | 'line' {
        const geometryNode = asRecord(spPrNode?.['a:prstGeom']);
        const preset = (parseString(geometryNode?.['@_prst']) || '').toLowerCase();

        if (preset.includes('ellipse') || preset.includes('circle')) {
            return 'ellipse';
        }

        if (preset.includes('line')) {
            return 'line';
        }

        return 'rect';
    }

    private isRoundedRect(spPrNode: XmlNode | undefined): boolean {
        const geometryNode = asRecord(spPrNode?.['a:prstGeom']);
        const preset = (parseString(geometryNode?.['@_prst']) || '').toLowerCase();
        return preset.includes('round');
    }

    private extractTextContent(textBodyNode: XmlNode | undefined): string {
        if (!textBodyNode) {
            return '';
        }

        const paragraphs = asArray(textBodyNode['a:p']);
        const lines: string[] = [];

        for (const paragraphUnknown of paragraphs) {
            const paragraph = asRecord(paragraphUnknown);
            if (!paragraph) {
                continue;
            }

            const paragraphParts: string[] = [];

            const runNodes = asArray(paragraph['a:r']);
            for (const runUnknown of runNodes) {
                const run = asRecord(runUnknown);
                const runText = this.extractNodeText(run?.['a:t']);
                if (runText.length > 0) {
                    paragraphParts.push(runText);
                }
            }

            const fieldNodes = asArray(paragraph['a:fld']);
            for (const fieldUnknown of fieldNodes) {
                const field = asRecord(fieldUnknown);
                const fieldText = this.extractNodeText(field?.['a:t']);
                if (fieldText.length > 0) {
                    paragraphParts.push(fieldText);
                }
            }

            const plainText = this.extractNodeText(paragraph['a:t']);
            if (plainText.length > 0) {
                paragraphParts.push(plainText);
            }

            const line = paragraphParts.join('');
            if (line.length > 0) {
                lines.push(line);
            }
        }

        return lines.join('\n').trim();
    }

    private extractTextStyle(textBodyNode: XmlNode | undefined): {
        color?: string;
        fontFamily?: string;
        fontStyle?: string;
        fontSize?: number;
        bold?: boolean;
        italic?: boolean;
        align?: 'left' | 'center' | 'right' | 'justify';
        valign?: 'top' | 'middle' | 'bottom';
    } {
        if (!textBodyNode) {
            return {};
        }

        const paragraphs = asArray(textBodyNode['a:p']);
        const firstParagraph = asRecord(paragraphs[0]);
        const firstRun = asRecord(asArray(firstParagraph?.['a:r'])[0]);
        const runProperties = asRecord(firstRun?.['a:rPr']) || asRecord(firstParagraph?.['a:endParaRPr']);

        const fill = this.extractSolidFill(runProperties);
        const latinNode = asRecord(runProperties?.['a:latin']);

        const alignRaw = (parseString(asRecord(firstParagraph?.['a:pPr'])?.['@_algn']) || '').toLowerCase();
        const valignRaw = (parseString(asRecord(textBodyNode['a:bodyPr'])?.['@_anchor']) || '').toLowerCase();

        return {
            color: fill.color,
            fontFamily: parseString(latinNode?.['@_typeface']) || undefined,
            fontStyle: parseString(runProperties?.['@_typeface']) || 'Regular',
            fontSize: parseNumber(runProperties?.['@_sz']) !== undefined
                ? hundredthPointToPx(parseNumber(runProperties?.['@_sz']) as number)
                : undefined,
            bold: parseString(runProperties?.['@_b']) === '1',
            italic: parseString(runProperties?.['@_i']) === '1',
            align: this.toHorizontalAlign(alignRaw),
            valign: this.toVerticalAlign(valignRaw)
        };
    }

    private toHorizontalAlign(value: string): 'left' | 'center' | 'right' | 'justify' | undefined {
        if (value === 'ctr' || value === 'center') {
            return 'center';
        }
        if (value === 'r' || value === 'right') {
            return 'right';
        }
        if (value === 'just' || value === 'dist') {
            return 'justify';
        }
        if (value === 'l' || value === 'left') {
            return 'left';
        }
        return undefined;
    }

    private toVerticalAlign(value: string): 'top' | 'middle' | 'bottom' | undefined {
        if (value === 'ctr' || value === 'center') {
            return 'middle';
        }
        if (value === 'b' || value === 'bottom') {
            return 'bottom';
        }
        if (value === 't' || value === 'top') {
            return 'top';
        }
        return undefined;
    }

    private extractLineStyle(spPrNode: XmlNode | undefined): { color?: string; weight?: number } {
        const lineNode = asRecord(spPrNode?.['a:ln']);
        if (!lineNode) {
            return {};
        }

        const fill = this.extractSolidFill(lineNode);
        const widthEmu = parseNumber(lineNode['@_w']);

        return {
            color: fill.color,
            weight: widthEmu !== undefined ? emuToPx(widthEmu) : undefined
        };
    }

    private extractSolidFill(node: XmlNode | undefined): { color?: string; opacity?: number } {
        if (!node) {
            return {};
        }

        const noFillNode = asRecord(node['a:noFill']);
        if (noFillNode) {
            return {};
        }

        const solidFillNode = asRecord(node['a:solidFill']);
        if (!solidFillNode) {
            return {};
        }

        const srgbNode = asRecord(solidFillNode['a:srgbClr']);
        if (srgbNode) {
            const color = normalizeHex(parseString(srgbNode['@_val']));
            const alphaNode = asRecord(srgbNode['a:alpha']);
            const alphaValue = parseNumber(alphaNode?.['@_val']);
            const opacity = alphaValue !== undefined ? Math.max(0, Math.min(1, alphaValue / 100000)) : undefined;

            return {
                color,
                opacity
            };
        }

        const schemeNode = asRecord(solidFillNode['a:schemeClr']);
        if (schemeNode) {
            const schemeName = parseString(schemeNode['@_val']) || 'unknown';
            this.addWarning(`Unsupported theme color '${schemeName}' encountered. Falling back to defaults.`);
        }

        return {};
    }

    private computeChildGroupTransform(groupNode: XmlNode, parentTransform: GroupTransform): GroupTransform {
        const grpSpPrNode = asRecord(groupNode['p:grpSpPr']);
        const transformNode = asRecord(grpSpPrNode?.['a:xfrm']);
        if (!transformNode) {
            return parentTransform;
        }

        const offNode = asRecord(transformNode['a:off']);
        const extNode = asRecord(transformNode['a:ext']);
        const chOffNode = asRecord(transformNode['a:chOff']);
        const chExtNode = asRecord(transformNode['a:chExt']);

        const offX = parseNumber(offNode?.['@_x']) ?? 0;
        const offY = parseNumber(offNode?.['@_y']) ?? 0;
        const extCX = parseNumber(extNode?.['@_cx']) ?? 0;
        const extCY = parseNumber(extNode?.['@_cy']) ?? 0;
        const childOffX = parseNumber(chOffNode?.['@_x']) ?? 0;
        const childOffY = parseNumber(chOffNode?.['@_y']) ?? 0;
        const childExtCX = parseNumber(chExtNode?.['@_cx']) ?? extCX;
        const childExtCY = parseNumber(chExtNode?.['@_cy']) ?? extCY;

        const localScaleX = childExtCX > 0 ? extCX / childExtCX : 1;
        const localScaleY = childExtCY > 0 ? extCY / childExtCY : 1;
        const localTx = offX - (childOffX * localScaleX);
        const localTy = offY - (childOffY * localScaleY);

        return {
            sx: parentTransform.sx * localScaleX,
            sy: parentTransform.sy * localScaleY,
            tx: parentTransform.tx + (localTx * parentTransform.sx),
            ty: parentTransform.ty + (localTy * parentTransform.sy)
        };
    }

    private extractBounds(spPrNode: XmlNode | undefined, transform: GroupTransform): {
        x: number;
        y: number;
        w: number;
        h: number;
    } | null {
        if (!spPrNode) {
            return null;
        }

        const xfrmNode = asRecord(spPrNode['a:xfrm']);
        if (!xfrmNode) {
            return null;
        }

        const offNode = asRecord(xfrmNode['a:off']);
        const extNode = asRecord(xfrmNode['a:ext']);

        const offX = parseNumber(offNode?.['@_x']) ?? 0;
        const offY = parseNumber(offNode?.['@_y']) ?? 0;
        const extCX = parseNumber(extNode?.['@_cx']) ?? 0;
        const extCY = parseNumber(extNode?.['@_cy']) ?? 0;

        const absX = transform.tx + (offX * transform.sx);
        const absY = transform.ty + (offY * transform.sy);
        const absW = extCX * transform.sx;
        const absH = extCY * transform.sy;

        return {
            x: emuToPx(absX),
            y: emuToPx(absY),
            w: Math.max(1, emuToPx(absW || 1)),
            h: Math.max(1, emuToPx(absH || 1))
        };
    }

    private getTagName(orderNode: PreserveNode): string | undefined {
        for (const key of Object.keys(orderNode)) {
            if (key === ':@' || key === '#text') {
                continue;
            }
            return key;
        }
        return undefined;
    }

    private getTagChildren(orderNode: PreserveNode, tagName: string): PreserveNode[] {
        const value = orderNode[tagName];
        if (Array.isArray(value)) {
            return value as PreserveNode[];
        }
        return [];
    }

    private buildFallbackOrder(textAndShapeCount: number, imageCount: number, groupCount: number): PreserveNode[] {
        const order: PreserveNode[] = [];
        for (let i = 0; i < textAndShapeCount; i += 1) {
            order.push({ 'p:sp': [] });
        }
        for (let i = 0; i < imageCount; i += 1) {
            order.push({ 'p:pic': [] });
        }
        for (let i = 0; i < groupCount; i += 1) {
            order.push({ 'p:grpSp': [] });
        }
        return order;
    }

    private findPathInPreserveDoc(nodes: PreserveNode[], tagPath: string[]): PreserveNode[] | undefined {
        let current = nodes;
        for (const tag of tagPath) {
            const next = this.findFirstTagChildren(current, tag);
            if (!next) {
                return undefined;
            }
            current = next;
        }
        return current;
    }

    private findFirstTagChildren(nodes: PreserveNode[], tagName: string): PreserveNode[] | undefined {
        for (const node of nodes) {
            const value = node[tagName];
            if (Array.isArray(value)) {
                return value as PreserveNode[];
            }
        }
        return undefined;
    }

    private extractNodeText(value: unknown): string {
        if (typeof value === 'string') {
            return value;
        }

        const node = asRecord(value);
        if (!node) {
            return '';
        }

        const text = node['#text'];
        return typeof text === 'string' ? text : '';
    }

    private parseXml(xmlText: string): XmlNode {
        const parsed = this.parser.parse(xmlText);
        return asRecord(parsed) || {};
    }

    private parsePreserveXml(xmlText: string): PreserveNode[] {
        const parsed = this.preserveOrderParser.parse(xmlText);
        return Array.isArray(parsed) ? (parsed as PreserveNode[]) : [];
    }

    private async readRequiredFileText(zip: JSZip, zipPath: string): Promise<string> {
        const zipEntry = zip.file(zipPath);
        if (!zipEntry) {
            throw new Error(`Missing required file in PPTX archive: ${zipPath}`);
        }
        return zipEntry.async('text');
    }

    private async readRelationships(
        zip: JSZip,
        relsPath: string,
        sourcePath: string,
        optional: boolean = false
    ): Promise<Map<string, string>> {
        const relationshipMap = new Map<string, string>();
        const zipEntry = zip.file(relsPath);

        if (!zipEntry) {
            if (!optional) {
                throw new Error(`Missing relationships file: ${relsPath}`);
            }
            return relationshipMap;
        }

        const relsText = await zipEntry.async('text');
        const relsDoc = this.parseXml(relsText);
        const relationshipsNode = asRecord(relsDoc.Relationships);
        const relationshipNodes = asArray(relationshipsNode?.Relationship);

        for (const relationshipUnknown of relationshipNodes) {
            const relationship = asRecord(relationshipUnknown);
            if (!relationship) {
                continue;
            }

            const id = parseString(relationship['@_Id']);
            const target = parseString(relationship['@_Target']);
            const targetMode = parseString(relationship['@_TargetMode']);

            if (!id || !target) {
                continue;
            }

            if ((targetMode || '').toLowerCase() === 'external') {
                this.addWarning(`External relationship '${target}' was skipped.`);
                continue;
            }

            relationshipMap.set(id, resolveRelationshipTarget(sourcePath, target));
        }

        return relationshipMap;
    }

    private addWarning(message: string): void {
        if (this.warningSet.has(message)) {
            return;
        }

        this.warningSet.add(message);
        this.warnings.push(message);
    }
}

function asRecord(value: unknown): XmlNode | undefined {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return undefined;
    }
    return value as XmlNode;
}

function asArray(value: unknown): unknown[] {
    if (Array.isArray(value)) {
        return value;
    }
    if (value === undefined || value === null) {
        return [];
    }
    return [value];
}

function parseNumber(value: unknown): number | undefined {
    if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
    }
    if (typeof value === 'string') {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : undefined;
    }
    return undefined;
}

function parseString(value: unknown): string | undefined {
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
    }
    return undefined;
}

function normalizeHex(value: string | undefined): string | undefined {
    if (!value) {
        return undefined;
    }
    const sanitized = value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
    if (sanitized.length === 6) {
        return sanitized;
    }
    return undefined;
}

function sanitizeDeckName(fileName: string): string {
    const withoutExtension = fileName.replace(/\.pptx$/i, '');
    const collapsed = withoutExtension
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
    return collapsed.length > 0 ? collapsed : 'Imported_Presentation';
}

function resolveRelationshipTarget(sourcePath: string, target: string): string {
    const decodedTarget = safeDecode(target);
    if (decodedTarget.startsWith('/')) {
        return decodedTarget.replace(/^\/+/, '');
    }

    const sourceDir = path.posix.dirname(sourcePath);
    const resolved = path.posix.normalize(path.posix.join(sourceDir, decodedTarget));
    return resolved.replace(/^\/+/, '').replace(/^\.\//, '');
}

function safeDecode(value: string): string {
    try {
        return decodeURIComponent(value);
    } catch (_err) {
        return value;
    }
}

function pxToEmu(px: number): number {
    return Math.round(px * 9525);
}
