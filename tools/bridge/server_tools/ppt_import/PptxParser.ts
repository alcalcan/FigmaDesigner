import * as JSZip from 'jszip';
import { XMLParser } from 'fast-xml-parser';
import * as path from 'path';
import {
    ParsedDeck,
    ParsedSlide,
    ParsedAsset,
    SlideElement,
    ShapeSlideElement,
    TextSlideElement,
    TextRun,
    ImageSlideElement,
    SlideBackground,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zip: any;
    slidePath: string;
    slideRelationships: Map<string, string>;
    colorMap?: Record<string, string>;
    masterName?: string;
    layoutName?: string;
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

    // Inheritance infrastructure
    private readonly slideLayouts: Map<string, XmlNode> = new Map();
    private readonly slideMasters: Map<string, XmlNode> = new Map();
    private readonly relationshipMaps: Map<string, Map<string, string>> = new Map();
    private readonly themeParams: Map<string, string> = new Map();
    private readonly masterColorMaps: Map<string, Record<string, string>> = new Map();
    private readonly masterPlaceholderStyles: Map<string, Map<string, XmlNode>> = new Map();
    private readonly layoutPlaceholderStyles: Map<string, Map<string, XmlNode>> = new Map();


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

        // Pre-load layouts and masters
        await this.loadLayoutsAndMasters(zip);

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private async loadLayoutsAndMasters(zip: any) {
        // Load Slide Layouts
        const layoutFiles = Object.keys(zip.files).filter(f => f.startsWith('ppt/slideLayouts/slideLayout') && f.endsWith('.xml'));
        for (const file of layoutFiles) {
            const xml = await this.readRequiredFileText(zip, file);
            const node = this.parseXml(xml);
            const name = path.basename(file, '.xml');
            this.slideLayouts.set(name, node);

            // Load relationships
            const relsPath = file.replace('ppt/slideLayouts/', 'ppt/slideLayouts/_rels/') + '.rels';
            const relMap = await this.readRelationships(zip, relsPath, file);
            this.relationshipMaps.set(name, relMap);

            // Index placeholder styles from this Layout
            const layoutRoot = asRecord(node['p:sldLayout']);
            const layoutSld = asRecord(layoutRoot?.['p:cSld']);
            const layoutSpTree = asRecord(layoutSld?.['p:spTree']);
            if (layoutSpTree) {
                const phMap = new Map<string, XmlNode>();
                const shapes = asArray(layoutSpTree['p:sp']);
                for (const shapeNode of shapes) {
                    const shape = asRecord(shapeNode);
                    if (!shape) continue;
                    const nvSpPr = asRecord(shape['p:nvSpPr']);
                    const nvPr = asRecord(nvSpPr?.['p:nvPr']);
                    const ph = asRecord(nvPr?.['p:ph']);
                    if (ph) {
                        const phType = parseString(ph['@_type']) || 'body';
                        phMap.set(phType, shape);
                    }
                }
                this.layoutPlaceholderStyles.set(name, phMap);
            }
        }

        // Load Slide Masters
        const masterFiles = Object.keys(zip.files).filter(f => f.startsWith('ppt/slideMasters/slideMaster') && f.endsWith('.xml'));
        for (const file of masterFiles) {
            const xml = await this.readRequiredFileText(zip, file);
            const node = this.parseXml(xml);
            const name = path.basename(file, '.xml');
            this.slideMasters.set(name, node);

            // Store Color Map for this Master
            const masterRoot = asRecord(node['p:sldMaster']);
            if (masterRoot) {
                const map = this.getColorMapFromMaster(masterRoot);
                this.masterColorMaps.set(name, map);

                // Index placeholder styles from this Master
                const masterSld = asRecord(masterRoot['p:cSld']);
                const masterSpTree = asRecord(masterSld?.['p:spTree']);
                if (masterSpTree) {
                    const phMap = new Map<string, XmlNode>();
                    const shapes = asArray(masterSpTree['p:sp']);
                    for (const shapeNode of shapes) {
                        const shape = asRecord(shapeNode);
                        if (!shape) continue;

                        const nvSpPr = asRecord(shape['p:nvSpPr']);
                        const nvPr = asRecord(nvSpPr?.['p:nvPr']);
                        const ph = asRecord(nvPr?.['p:ph']);
                        if (ph) {
                            const phType = parseString(ph['@_type']) || 'body';
                            phMap.set(phType, shape);
                        }
                    }
                    this.masterPlaceholderStyles.set(name, phMap);
                }
            }

            // Load relationships
            const relsPath = file.replace('ppt/slideMasters/', 'ppt/slideMasters/_rels/') + '.rels';
            const relMap = await this.readRelationships(zip, relsPath, file);
            this.relationshipMaps.set(name, relMap);
        }

        // Load Theme (just the first one for now)
        const themeFiles = Object.keys(zip.files).filter(f => f.startsWith('ppt/theme/theme'));
        if (themeFiles.length > 0) {
            const xml = await this.readRequiredFileText(zip, themeFiles[0]);
            const node = this.parseXml(xml);
            const themeNode = asRecord(node['a:theme']);
            if (themeNode) {
                this.parseTheme(themeNode as XmlNode);
            }
        }
    }


    private async parseSlide(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        zip: any,
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

        // Inheritance Chain Handling - Move up to populate colorMap BEFORE parsing elements
        const layoutRelId = this.findLayoutRelationshipId(slideRelationships);
        let layoutName: string | undefined;
        let masterName: string | undefined;

        if (layoutRelId) {
            const layoutPath = slideRelationships.get(layoutRelId);
            if (layoutPath) {
                layoutName = path.basename(layoutPath, '.xml');
                const layoutRels = this.relationshipMaps.get(layoutName);
                if (layoutRels) {
                    for (const [rId, target] of layoutRels.entries()) {
                        if (target.includes('slideMaster')) {
                            masterName = path.basename(target, '.xml');
                            break;
                        }
                    }
                }
            }
        }

        const colorMap = masterName ? this.masterColorMaps.get(masterName) : undefined;
        const parseContext: SlideParseContext = {
            zip,
            slidePath,
            slideRelationships,
            colorMap,
            masterName,
            layoutName
        };

        const orderNodes = this.findPathInPreserveDoc(preserveDoc, ['p:sld', 'p:cSld', 'p:spTree']) ?? [];
        const elements = spTreeNode
            ? await this.parseContainerElements(spTreeNode, orderNodes, parseContext, {
                tx: 0,
                ty: 0,
                sx: 1,
                sy: 1
            })
            : [];


        // 3. Resolve Elements from Layout/Master (Shared content)
        const showMasterSpOnSlide = parseString(slideNode['@_showMasterSp']) !== '0';
        let inheritedElements: SlideElement[] = [];

        if (showMasterSpOnSlide && layoutName) {
            const layoutNode = this.slideLayouts.get(layoutName);
            const layoutRoot = asRecord(layoutNode?.['p:sldLayout']);
            const layoutSpTree = asRecord(asRecord(layoutRoot?.['p:cSld'])?.['p:spTree']);

            if (layoutSpTree) {
                const layoutContext: SlideParseContext = {
                    zip,
                    slidePath: `ppt/slideLayouts/${layoutName}.xml`,
                    slideRelationships: this.relationshipMaps.get(layoutName) || new Map(),
                    colorMap
                };
                const layoutElements = await this.parseContainerElements(layoutSpTree, [], layoutContext, { tx: 0, ty: 0, sx: 1, sy: 1 });
                inheritedElements = [...layoutElements, ...inheritedElements];
            }

            const showMasterSpOnLayout = parseString(layoutRoot?.['@_showMasterSp']) !== '0';
            if (showMasterSpOnLayout && masterName) {
                const masterNode = this.slideMasters.get(masterName);
                const masterRoot = asRecord(masterNode?.['p:sldMaster']);
                const masterSpTree = asRecord(asRecord(masterRoot?.['p:cSld'])?.['p:spTree']);

                if (masterSpTree) {
                    const masterContext: SlideParseContext = {
                        zip,
                        slidePath: `ppt/slideMasters/${masterName}.xml`,
                        slideRelationships: this.relationshipMaps.get(masterName) || new Map(),
                        colorMap
                    };
                    const masterElements = await this.parseContainerElements(masterSpTree, [], masterContext, { tx: 0, ty: 0, sx: 1, sy: 1 });
                    inheritedElements = [...masterElements, ...inheritedElements];
                }
            }
        }

        const finalElements = [...inheritedElements, ...elements];

        // 4. Resolve Background with Inheritance
        let background = await this.parseBackground(slideNode, parseContext, colorMap);

        if (!background && layoutName) {
            const layoutNode = this.slideLayouts.get(layoutName);
            if (layoutNode) {
                const layoutRoot = asRecord(layoutNode['p:sldLayout']);
                background = await this.parseBackground(layoutRoot, parseContext, colorMap);
            }
        }

        if (!background && masterName) {
            const masterNode = this.slideMasters.get(masterName);
            if (masterNode) {
                const masterRoot = asRecord(masterNode['p:sldMaster']);
                background = await this.parseBackground(masterRoot, parseContext, colorMap);
            }
        }

        if (!background) {
            background = { kind: 'solid', color: 'FFFFFF' };
        }

        const slideName = parseString(cSldNode?.['@_name'])
            || `Slide_${slideIndex.toString().padStart(3, '0')}`;


        return {
            index: slideIndex,
            name: slideName,
            width: emuToPx(fallbackWidthEmu),
            height: emuToPx(fallbackHeightEmu),
            background,
            elements: finalElements
        };

    }

    private parseTheme(themeNode: XmlNode) {
        const themeElements = asRecord(themeNode['a:themeElements']);
        const clrScheme = asRecord(themeElements?.['a:clrScheme']);
        if (clrScheme) {
            const keys = ['dk1', 'lt1', 'dk2', 'lt2', 'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'hlink', 'folHlink'];
            for (const key of keys) {
                const colorNode = asRecord(clrScheme['a:' + key]);
                if (colorNode) {
                    const srgb = asRecord(colorNode['a:srgbClr']);
                    if (srgb) {
                        const val = parseString(srgb['@_val']);
                        if (val) this.themeParams.set(key, val);
                    } else {
                        const sys = asRecord(colorNode['a:sysClr']);
                        if (sys) {
                            const val = parseString(sys['@_lastClr']);
                            if (val) this.themeParams.set(key, val);
                        }
                    }
                }
            }
        }
    }

    private getColorMapFromMaster(masterNode: XmlNode): Record<string, string> {
        const clrMap = asRecord(masterNode['p:clrMap']);
        const map: Record<string, string> = {};
        if (clrMap) {
            const keys = ['bg1', 'tx1', 'bg2', 'tx2', 'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'hlink', 'folHlink'];
            for (const key of keys) {
                const val = parseString(clrMap['@_' + key]);
                if (val) map[key] = val;
            }
        }
        return map;
    }


    private findLayoutRelationshipId(rels: Map<string, string>): string | undefined {
        // We actually need the Rel Type, not just target.
        // But `readRelationships` only returns ID -> Target map.
        // We should ideally have stored the type too.
        // HACK: for now, let's assume valid PPTX structure where the layout is usually the first relationship pointing to ../slideLayouts/slideLayoutX.xml
        // Better: Update readRelationships to optionally return more info, OR just scan keys.
        // Actually, we can just iterate the map values and look for 'slideLayouts'.
        for (const [id, target] of rels.entries()) {
            if (target.includes('slideLayouts')) {
                return id;
            }
        }
        return undefined;
    }

    private async parseSlideLayout(zip: any, layoutPath: string): Promise<SlideBackground | undefined> {
        const layoutXml = await this.readRequiredFileText(zip, layoutPath);
        const layoutDoc = this.parseXml(layoutXml);
        const sldLayoutNode = asRecord(layoutDoc['p:sldLayout']);
        const cSldNode = asRecord(sldLayoutNode?.['p:cSld']);

        // Relationships for the layout (needed for images in layout or to find master)
        const layoutRelsPath = path.posix.join(
            path.posix.dirname(layoutPath),
            '_rels',
            `${path.posix.basename(layoutPath)}.rels`
        );
        const layoutRels = await this.readRelationships(zip, layoutRelsPath, layoutPath, true);

        const context: SlideParseContext = {
            zip,
            slidePath: layoutPath,
            slideRelationships: layoutRels
        };

        let background = await this.parseBackground(sldLayoutNode, context);

        if (!background) {
            // Fallback: Check Slide Master
            const masterRelId = this.findMasterRelationshipId(layoutRels);
            if (masterRelId) {
                const masterPath = layoutRels.get(masterRelId);
                if (masterPath) {
                    background = await this.parseSlideMaster(zip, masterPath);
                }
            }
        }

        return background;
    }

    private findMasterRelationshipId(rels: Map<string, string>): string | undefined {
        for (const [id, target] of rels.entries()) {
            if (target.includes('slideMasters')) {
                return id;
            }
        }
        return undefined;
    }

    private async parseSlideMaster(zip: any, masterPath: string): Promise<SlideBackground | undefined> {
        const masterXml = await this.readRequiredFileText(zip, masterPath);
        const masterDoc = this.parseXml(masterXml);
        const sldMasterNode = asRecord(masterDoc['p:sldMaster']);
        const cSldNode = asRecord(sldMasterNode?.['p:cSld']);

        const masterRelsPath = path.posix.join(
            path.posix.dirname(masterPath),
            '_rels',
            `${path.posix.basename(masterPath)}.rels`
        );
        const masterRels = await this.readRelationships(zip, masterRelsPath, masterPath, true);

        const context: SlideParseContext = {
            zip,
            slidePath: masterPath,
            slideRelationships: masterRels
        };

        return this.parseBackground(sldMasterNode, context);
    }



    private async parseContainerElements(
        containerNode: XmlNode,
        orderedChildren: PreserveNode[],
        context: SlideParseContext,
        transform: GroupTransform
    ): Promise<SlideElement[]> {
        const textAndShapeNodes = asArray(containerNode['p:sp']);
        const connectorNodes = asArray(containerNode['p:cxnSp']);
        const graphicFrameNodes = asArray(containerNode['p:graphicFrame']);
        const imageNodes = asArray(containerNode['p:pic']);
        const groupNodes = asArray(containerNode['p:grpSp']);

        let textAndShapeCursor = 0;
        let connectorCursor = 0;
        let graphicFrameCursor = 0;
        let imageCursor = 0;
        let groupCursor = 0;

        const output: SlideElement[] = [];

        const iterableOrder = orderedChildren.length > 0
            ? orderedChildren
            : this.buildFallbackOrder(
                textAndShapeNodes.length,
                imageNodes.length,
                groupNodes.length,
                connectorNodes.length,
                graphicFrameNodes.length
            );

        for (const orderNode of iterableOrder) {
            const tagName = this.getTagName(orderNode);

            if (tagName === 'p:sp') {
                const shapeNode = asRecord(textAndShapeNodes[textAndShapeCursor]);
                textAndShapeCursor += 1;
                if (shapeNode) {
                    const shapeElements = this.parseShapeNode(shapeNode, orderNode, context, transform);
                    output.push(...shapeElements);
                }
                continue;
            }

            if (tagName === 'p:cxnSp') {
                const connectorNode = asRecord(connectorNodes[connectorCursor]);
                connectorCursor += 1;
                if (connectorNode) {
                    const connectorElements = this.parseConnectorShape(connectorNode, context, transform);
                    output.push(...connectorElements);
                }
                continue;
            }

            if (tagName === 'p:graphicFrame') {
                const frameNode = asRecord(graphicFrameNodes[graphicFrameCursor]);
                graphicFrameCursor += 1;
                if (frameNode) {
                    const frameElements = this.parseGraphicFrame(frameNode, transform);
                    output.push(...frameElements);
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
                continue;
            }

            console.warn(`[PptxParser] Valid slide element ignored: ${tagName} (in ${context.slidePath})`);
        }



        // Fallback: If strict order parsing missed any elements, process the remaining ones now.
        // This ensures we never drop content, even if Z-order might be slightly off.

        while (textAndShapeCursor < textAndShapeNodes.length) {
            const shapeNode = asRecord(textAndShapeNodes[textAndShapeCursor]);
            textAndShapeCursor += 1;
            if (shapeNode) {
                const shapeElements = this.parseShapeNode(shapeNode, undefined, context, transform);
                output.push(...shapeElements);
            }
        }

        while (connectorCursor < connectorNodes.length) {
            const connectorNode = asRecord(connectorNodes[connectorCursor]);
            connectorCursor += 1;
            if (connectorNode) {
                const connectorElements = this.parseConnectorShape(connectorNode, context, transform);
                output.push(...connectorElements);
            }
        }

        while (graphicFrameCursor < graphicFrameNodes.length) {
            const frameNode = asRecord(graphicFrameNodes[graphicFrameCursor]);
            graphicFrameCursor += 1;
            if (frameNode) {
                const frameElements = this.parseGraphicFrame(frameNode, transform);
                output.push(...frameElements);
            }
        }

        while (imageCursor < imageNodes.length) {
            const imageNode = asRecord(imageNodes[imageCursor]);
            imageCursor += 1;
            if (imageNode) {
                const parsedImage = await this.parsePictureNode(imageNode, context, transform);
                if (parsedImage) {
                    output.push(parsedImage);
                }
            }
        }

        while (groupCursor < groupNodes.length) {
            const groupNode = asRecord(groupNodes[groupCursor]);
            groupCursor += 1;
            if (groupNode) {
                // For fallback groups, we don't have an orderNode to get children order.
                // We pass empty array for orderedChildren so it uses its own fallback logic recursivley.
                const groupTransform = this.computeChildGroupTransform(groupNode, transform);
                const groupElements = await this.parseContainerElements(
                    groupNode,
                    [],
                    context,
                    groupTransform
                );
                output.push(...groupElements);
            }
        }

        return output;

    }

    private parseShapeNode(shapeNode: XmlNode, orderNode: PreserveNode | undefined, context: SlideParseContext, transform: GroupTransform): SlideElement[] {
        const spPrNode = asRecord(shapeNode['p:spPr']);
        const bounds = this.extractBounds(spPrNode, transform);
        if (!bounds) {
            return [];
        }

        const elements: SlideElement[] = [];

        // Placeholder Handling: Slide -> Layout -> Master
        const nvSpPr = asRecord(shapeNode['p:nvSpPr']);
        const nvPr = asRecord(nvSpPr?.['p:nvPr']);
        const ph = asRecord(nvPr?.['p:ph']);
        let templatePhShape: XmlNode | undefined;
        if (ph) {
            const phType = parseString(ph['@_type']) || 'body';

            // 1. Try Layout
            if (context.layoutName) {
                const layoutPhMap = this.layoutPlaceholderStyles.get(context.layoutName);
                templatePhShape = layoutPhMap?.get(phType);
            }

            // 2. Try Master
            if (!templatePhShape && context.masterName) {
                const masterPhMap = this.masterPlaceholderStyles.get(context.masterName);
                templatePhShape = masterPhMap?.get(phType);
            }
        }

        const textBodyNode = asRecord(shapeNode['p:txBody']);
        // Use orderNode to get the ordered version of txBody if available
        // orderNode is the { "p:sp": [...] } node, so we need to find p:txBody within its children.
        const orderTxBody = orderNode ? this.findPathInPreserveDoc([orderNode], ['p:sp', 'p:txBody']) : undefined;

        const textContent = this.extractTextContent(textBodyNode, orderTxBody ? { 'p:txBody': orderTxBody } : undefined, context, templatePhShape);
        if (textContent || templatePhShape) {
            const textStyle = this.extractTextStyle(textBodyNode, context, templatePhShape);
            const runs = this.extractTextRuns(textBodyNode, orderTxBody ? { 'p:txBody': orderTxBody } : undefined, context, templatePhShape);
            const textElement: TextSlideElement = {
                kind: 'text',
                x: bounds.x,
                y: bounds.y,
                w: bounds.w,
                h: bounds.h,
                text: textContent,
                runs,
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
        const stroke = this.extractLineStyle(spPrNode);

        let fill: SlideBackground | undefined;

        // 1. Try Gradient Fill
        const gradFillNode = asRecord(spPrNode?.['a:gradFill']);
        if (gradFillNode) {
            fill = this.extractGradientFill(gradFillNode);
        }

        // 2. Try Picture Fill (blipFill)
        if (!fill) {
            const blipFillNode = asRecord(spPrNode?.['a:blipFill']);
            if (blipFillNode) {
                // We need to await this, but parseShapeNode is currently synchronous in signature?
                // Wait, parseShapeNode is called from parseContainerElements which IS async?
                // No, line 323: const shapeElements = this.parseShapeNode(shapeNode, transform);
                // We need to make parseShapeNode async to support image fills which require looking up assets.
                // But wait, parseContainerElements calls it.
                // parsing blipFill needs context.
                // I will skip image fill for shapes for this iteration if it requires async refactoring,
                // OR I can refactor parseShapeNode to be async.
                // Let's refactor to async.
            }
        }

        // 3. Try Solid Fill
        if (!fill) {
            const solidFill = this.extractSolidFill(spPrNode);
            if (solidFill.color) {
                fill = {
                    kind: 'solid',
                    color: solidFill.color,
                    opacity: solidFill.opacity
                };
            }
        }

        // Check availability
        const hasVisibleShape = shapeType === 'line'
            || fill !== undefined
            || stroke.color !== undefined;

        if (hasVisibleShape) {
            const shapeElement: ShapeSlideElement = {
                kind: 'shape',
                shapeType,
                x: bounds.x,
                y: bounds.y,
                w: bounds.w,
                h: bounds.h,
                fill,
                strokeColor: stroke.color,
                strokeWeight: stroke.weight,
                opacity: fill?.opacity, // Use fill opacity as base opacity if present? Or spPr opacity?
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
        let relationshipId = parseString(blipNode?.['@_r:embed']);

        // SVG Support
        const extLst = asRecord(blipNode?.['a:extLst']);
        const extensions = asArray(extLst?.['a:ext']);
        for (const extUnknown of extensions) {
            const ext = asRecord(extUnknown);
            const svgBlip = asRecord(ext?.['asvg:svgBlip']);
            const svgRId = parseString(svgBlip?.['@_r:embed']);
            if (svgRId) {
                relationshipId = svgRId;
                break;
            }
        }

        // Opacity & Effects
        let opacity: number | undefined;
        const alphaModFix = asRecord(blipNode?.['a:alphaModFix']);
        if (alphaModFix) {
            const amt = parseNumber(alphaModFix['@_amt']);
            if (amt !== undefined) {
                // 100000 = 100%
                opacity = amt / 100000;
            }
        }

        const lum = asRecord(blipNode?.['a:lum']);
        if (lum) {
            // Brightness -100% and Contrast 100% usually indicates extreme monochromatic effect
            // We can't fully replicate complex filters in this simple JSON, 
            // but we can at least detect it for logs or future support.
            // For now, let's just make sure we extract relationshipId first.
        }

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
            assetFileName: asset.fileName,
            opacity
        };

    }




    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private async loadOrReuseAsset(zip: any, sourcePath: string): Promise<ParsedAsset> {
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

    private async parseBackground(
        rootNode: XmlNode | undefined,
        context: SlideParseContext,
        colorMap?: Record<string, string>
    ): Promise<SlideBackground | undefined> {
        if (!rootNode) return undefined;
        // Can be p:sld, p:sldLayout, or p:sldMaster. 
        // Background is usually in p:bg or possibly cSld->bg

        let bgNode = asRecord(rootNode['p:bg']);
        if (!bgNode) {
            const cSld = asRecord(rootNode['p:cSld']);
            bgNode = asRecord(cSld?.['p:bg']);
        }

        if (!bgNode) {
            return undefined;
        }

        const bgPropertiesNode = asRecord(bgNode['p:bgPr']);
        if (!bgPropertiesNode) {
            // Check for bgRef
            const bgRefNode = asRecord(bgNode['p:bgRef']);
            if (bgRefNode) {
                const schemeColor = this.extractColorFromContainer(bgRefNode, colorMap);
                if (schemeColor) {
                    return {
                        kind: 'solid',
                        color: schemeColor
                    };
                }
            }
            return undefined;
        }

        // 1. Solid Fill
        const solidFill = this.extractSolidFill(bgPropertiesNode, colorMap);
        if (solidFill.color) {
            return {
                kind: 'solid',
                color: solidFill.color,
                opacity: solidFill.opacity
            };
        }

        // 2. Gradient Fill
        const gradFillNode = asRecord(bgPropertiesNode['a:gradFill']);
        if (gradFillNode) {
            return this.extractGradientFill(gradFillNode, colorMap);
        }

        // 3. Picture/Texture Fill
        const blipFillNode = asRecord(bgPropertiesNode['a:blipFill']);
        if (blipFillNode) {
            return await this.extractPictureFill(blipFillNode, context);
        }

        return undefined;
    }


    private extractGradientFill(gradFillNode: XmlNode, colorMap?: Record<string, string>): SlideBackground | undefined {
        const gsLst = asRecord(gradFillNode['a:gsLst']);
        if (!gsLst) return undefined;

        const stopsNodes = asArray(gsLst['a:gs']);
        const stops: { color: string; position: number }[] = [];

        for (const stopUnknown of stopsNodes) {
            const stopNode = asRecord(stopUnknown);
            if (!stopNode) continue;

            const posVal = parseNumber(stopNode['@_pos']); // 0 to 100000
            const position = posVal !== undefined ? posVal / 100000 : 0;

            const color = this.extractColorFromContainer(stopNode, colorMap);
            if (color) {
                stops.push({ color, position });
            }
        }

        if (stops.length === 0) return undefined;

        const linNode = asRecord(gradFillNode['a:lin']);
        let angle = 0;
        let type: 'linear' | 'radial' = 'linear';

        if (linNode) {
            const ang = parseNumber(linNode['@_ang']);
            if (ang !== undefined) {
                angle = ang / 60000;
            }
        } else {
            const pathNode = asRecord(gradFillNode['a:path']);
            if (pathNode) {
                type = 'radial';
            }
        }

        return {
            kind: 'gradient',
            type,
            stops,
            angle
        };
    }

    private async extractPictureFill(blipFillNode: XmlNode, context: SlideParseContext): Promise<SlideBackground | undefined> {
        const blip = asRecord(blipFillNode['a:blip']);
        let rId = parseString(blip?.['@_r:embed']);

        // SVG Support
        const extLst = asRecord(blip?.['a:extLst']);
        const extensions = asArray(extLst?.['a:ext']);
        for (const extUnknown of extensions) {
            const ext = asRecord(extUnknown);
            const svgBlip = asRecord(ext?.['asvg:svgBlip']);
            const svgRId = parseString(svgBlip?.['@_r:embed']);
            if (svgRId) {
                rId = svgRId;
                break;
            }
        }

        if (!rId) return undefined;

        const imagePath = context.slideRelationships.get(rId);
        if (!imagePath) return undefined;

        const asset = await this.loadOrReuseAsset(context.zip, imagePath);
        return { kind: 'image', assetFileName: asset.fileName };
    }




    private extractColorFromContainer(node: XmlNode, colorMap?: Record<string, string>): string | undefined {
        const srgbNode = asRecord(node['a:srgbClr']);
        if (srgbNode) {
            return normalizeHex(parseString(srgbNode['@_val']));
        }

        const schemeNode = asRecord(node['a:schemeClr']);
        if (schemeNode) {
            const schemeName = parseString(schemeNode['@_val']) || 'unknown';
            const themeKey = (colorMap && colorMap[schemeName]) ? colorMap[schemeName] : schemeName;
            const color = this.themeParams.get(themeKey);
            if (color) return normalizeHex(color);
            this.addWarning(`Unsupported theme color in container '${schemeName}' (mapped to '${themeKey}').`);
        }

        const sysNode = asRecord(node['a:sysClr']);
        if (sysNode) {
            return normalizeHex(parseString(sysNode['@_lastClr']));
        }
        return undefined;
    }


    // Helper to parse Connectors (Lines)
    private parseConnectorShape(connectorNode: XmlNode, context: SlideParseContext, transform: GroupTransform): SlideElement[] {
        return this.parseShapeNode(connectorNode, undefined, context, transform);
    }

    // Helper to parse Graphic Frames (SmartArt, Charts, Tables)
    private parseGraphicFrame(frameNode: XmlNode, transform: GroupTransform): SlideElement[] {
        // Graphic frames have p:xfrm, and a:graphic
        const xfrmNode = asRecord(frameNode['p:xfrm']);

        const offNode = asRecord(xfrmNode?.['a:off']);
        const extNode = asRecord(xfrmNode?.['a:ext']);

        const offX = parseNumber(offNode?.['@_x']) ?? 0;
        const offY = parseNumber(offNode?.['@_y']) ?? 0;
        const extCX = parseNumber(extNode?.['@_cx']) ?? 0;
        const extCY = parseNumber(extNode?.['@_cy']) ?? 0;

        const absX = transform.tx + (offX * transform.sx);
        const absY = transform.ty + (offY * transform.sy);
        const absW = extCX * transform.sx;
        const absH = extCY * transform.sy;

        const bounds = {
            x: emuToPx(absX),
            y: emuToPx(absY),
            w: Math.max(1, emuToPx(absW || 1)),
            h: Math.max(1, emuToPx(absH || 1))
        };

        // Extract text if possible. (e.g. from SmartArt data which leads to external file)
        // OR sometimes it's embedded?
        // Often complex. For now, let's just emit a placeholder Rectangle so the user knows something is there.
        // Or even better: A text saying [Complex Element]

        const graphic = asRecord(frameNode['a:graphic']);
        const graphicData = asRecord(graphic?.['a:graphicData']);
        const uri = parseString(graphicData?.['@_uri']);

        let label = 'Graphic Frame';
        if (uri?.includes('table')) {
            label = 'Table';
            // Tables have a:tbl inside graphicData.
            // parsing tables is big work.
        } else if (uri?.includes('diagram')) {
            label = 'SmartArt';
        } else if (uri?.includes('chart')) {
            label = 'Chart';
        }

        // Create a placeholder shape
        const placeholder: ShapeSlideElement = {
            kind: 'shape',
            shapeType: 'rect',
            x: bounds.x,
            y: bounds.y,
            w: bounds.w,
            h: bounds.h,
            fill: { kind: 'solid', color: 'EEEEEE', opacity: 0.5 },
            strokeColor: 'FF0000',
            strokeWeight: 1,
            opacity: 0.5
        };

        const textLabel: TextSlideElement = {
            kind: 'text',
            x: bounds.x,
            y: bounds.y,
            w: bounds.w,
            h: bounds.h,
            text: `[${label}]`,
            color: 'FF0000',
            fontSize: 14,
            align: 'center',
            valign: 'middle'
        };

        return [placeholder, textLabel];
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

    private extractTextContent(textBodyNode: XmlNode | undefined, orderTxBody: PreserveNode | undefined, context: SlideParseContext, masterPhShape?: XmlNode): string {
        const runs = this.extractTextRuns(textBodyNode, orderTxBody, context, masterPhShape);
        return runs.map(r => r.text).join('');
    }

    private extractTextRuns(textBodyNode: XmlNode | undefined, orderTxBody: PreserveNode | undefined, context: SlideParseContext, masterPhShape?: XmlNode): TextRun[] {
        if (!textBodyNode && !masterPhShape) return [];

        const activeTextBody = textBodyNode || asRecord(masterPhShape?.['p:txBody']);
        if (!activeTextBody) return [];

        const paragraphs = asArray(activeTextBody['a:p']);
        // If we used master fallback, we won't have the slide's orderNode for it.
        // But master placeholders are usually parsed once as full shapes.
        const orderParagraphs = orderTxBody ? this.filterNodesByName(this.getTagChildren(orderTxBody, 'p:txBody'), 'a:p') : undefined;

        const allRuns: TextRun[] = [];

        // Catch Master/Layout Fallback defRPr
        const masterTxBody = asRecord(masterPhShape?.['p:txBody']);
        const masterFirstPara = asRecord(asArray(masterTxBody?.['a:p'])[0]);
        const masterPPr = asRecord(masterFirstPara?.['a:pPr']);

        // Check lstStyle in master/layout too
        const masterLstStyle = asRecord(masterTxBody?.['a:lstStyle']);
        const masterLvl1pPr = asRecord(masterLstStyle?.['a:lvl1pPr']);
        const masterLstDefRPr = asRecord(masterLvl1pPr?.['a:defRPr']);

        const masterDefRPr = asRecord(masterPPr?.['a:defRPr']) || masterLstDefRPr;

        for (let i = 0; i < paragraphs.length; i++) {
            const paragraphUnknown = paragraphs[i];
            const paragraph = asRecord(paragraphUnknown);
            if (!paragraph) continue;

            const pPr = asRecord(paragraph['a:pPr']);
            const defRPr = asRecord(pPr?.['a:defRPr']) || masterDefRPr;

            // Ordered children of the paragraph
            const orderPara = orderParagraphs?.[i];
            const children = orderPara ? this.getTagChildren(orderPara, 'a:p') : [];

            // XML parser groupings
            const runNodes = asArray(paragraph['a:r']);
            const fieldNodes = asArray(paragraph['a:fld']);
            const brNodes = asArray(paragraph['a:br']);

            let runCursor = 0;
            let fieldCursor = 0;
            let brCursor = 0;

            if (children.length > 0) {
                for (const childNode of children) {
                    const tagName = this.getTagName(childNode);
                    if (tagName === 'a:r') {
                        const run = asRecord(runNodes[runCursor]);
                        runCursor += 1;
                        const text = this.extractNodeText(run?.['a:t']);
                        if (text) {
                            const rPr = asRecord(run?.['a:rPr']);
                            allRuns.push(this.parseRun(text, rPr, defRPr, context));
                        }
                    } else if (tagName === 'a:fld') {
                        const field = asRecord(fieldNodes[fieldCursor]);
                        fieldCursor += 1;
                        const text = this.extractNodeText(field?.['a:t']);
                        if (text) {
                            const rPr = asRecord(field?.['a:rPr']);
                            allRuns.push(this.parseRun(text, rPr, defRPr, context));
                        }
                    } else if (tagName === 'a:br') {
                        brCursor += 1;
                        allRuns.push({ text: '\n' });
                    }
                }
            } else {
                // Fallback for when order information is missing
                for (const runUnknown of runNodes) {
                    const run = asRecord(runUnknown);
                    const text = this.extractNodeText(run?.['a:t']);
                    if (text) {
                        const rPr = asRecord(run?.['a:rPr']);
                        allRuns.push(this.parseRun(text, rPr, defRPr, context));
                    }
                }
                for (const fieldUnknown of fieldNodes) {
                    const field = asRecord(fieldUnknown);
                    const text = this.extractNodeText(field?.['a:t']);
                    if (text) {
                        const rPr = asRecord(field?.['a:rPr']);
                        allRuns.push(this.parseRun(text, rPr, defRPr, context));
                    }
                }
                for (let j = 0; j < brNodes.length; j++) {
                    allRuns.push({ text: '\n' });
                }
            }

            // At the end of a paragraph, add a newline unless it's the last one
            if (i < paragraphs.length - 1) {
                if (allRuns.length > 0) {
                    allRuns[allRuns.length - 1].text += '\n';
                } else {
                    // Empty paragraph
                    allRuns.push({ text: '\n' });
                }
            }
        }

        return allRuns;
    }

    private parseRun(text: string, rPr: XmlNode | undefined, defRPr: XmlNode | undefined, context: SlideParseContext): TextRun {
        // Resolve fill: Try run specific first, then paragraph default
        let fill = this.extractSolidFill(rPr, context.colorMap);
        if (!fill.color) {
            fill = this.extractSolidFill(defRPr, context.colorMap);
        }

        const latinNode = asRecord(rPr?.['a:latin']) || asRecord(defRPr?.['a:latin']);
        const sizeRaw = parseNumber(rPr?.['@_sz']) ?? parseNumber(defRPr?.['@_sz']);

        return {
            text,
            color: fill.color,
            fontFamily: parseString(latinNode?.['@_typeface']),
            fontSize: sizeRaw ? sizeRaw / 100 : undefined,
            bold: (parseString(rPr?.['@_b']) ?? parseString(defRPr?.['@_b'])) === '1',
            italic: (parseString(rPr?.['@_i']) ?? parseString(defRPr?.['@_i'])) === '1'
        };
    }

    private extractTextStyle(textBodyNode: XmlNode | undefined, context: SlideParseContext, masterPhShape?: XmlNode): {
        color?: string;
        fontFamily?: string;
        fontStyle?: string;
        fontSize?: number;
        bold?: boolean;
        italic?: boolean;
        align?: 'left' | 'center' | 'right' | 'justify';
        valign?: 'top' | 'middle' | 'bottom';
        lineHeight?: { value: number, unit: 'PIXELS' | 'PERCENT' };
        paragraphSpacing?: number;
    } {
        const activeTextBody = textBodyNode || asRecord(masterPhShape?.['p:txBody']);
        if (!activeTextBody) {
            return {
                fontSize: 18,
                align: 'left',
                valign: 'top'
            };
        }

        const paragraphs = asArray(activeTextBody['a:p']);
        const firstParagraph = asRecord(paragraphs[0]);
        const firstRun = asRecord(asArray(firstParagraph?.['a:r'])[0]);

        // Fallback hierarchy for properties: Run -> Paragraph Default -> Master/Layout Placeholder Default
        const masterTxBody = asRecord(masterPhShape?.['p:txBody']);
        const masterParagraphs = asArray(masterTxBody?.['a:p']);
        const masterFirstPara = asRecord(masterParagraphs[0]);
        const masterPPr = asRecord(masterFirstPara?.['a:pPr']);

        const masterLstStyle = asRecord(masterTxBody?.['a:lstStyle']);
        const masterLvl1pPr = asRecord(masterLstStyle?.['a:lvl1pPr']);
        const masterLstDefRPr = asRecord(masterLvl1pPr?.['a:defRPr']);

        const masterDefRPr = asRecord(masterPPr?.['a:defRPr']) || masterLstDefRPr;

        const runProperties = asRecord(firstRun?.['a:rPr']) || asRecord(firstParagraph?.['a:endParaRPr']) || masterDefRPr;
        const paragraphProperties = asRecord(firstParagraph?.['a:pPr']);

        let fill = this.extractSolidFill(runProperties, context.colorMap);
        if (!fill.color && masterDefRPr) {
            fill = this.extractSolidFill(masterDefRPr, context.colorMap);
        }

        const latinNode = asRecord(runProperties?.['a:latin']) || asRecord(masterDefRPr?.['a:latin']);

        const alignRaw = (parseString(paragraphProperties?.['@_algn']) || '').toLowerCase();
        const valignRaw = (parseString(asRecord(activeTextBody['a:bodyPr'])?.['@_anchor']) || '').toLowerCase();

        // Extract Line Height (lnSpc)
        // Can be a:spcPct (percent, 100000 = 100%) or a:spcPts (points, 100 = 1pt?)
        // Actually spcPts is hundredths of a point usually.
        let lineHeight: { value: number, unit: 'PIXELS' | 'PERCENT' } | undefined = undefined;
        const lnSpc = asRecord(paragraphProperties?.['a:lnSpc']);
        if (lnSpc) {
            const spcPct = parseNumber(asRecord(lnSpc['a:spcPct'])?.['@_val']);
            const spcPts = parseNumber(asRecord(lnSpc['a:spcPts'])?.['@_val']);

            if (spcPct !== undefined) {
                // 100000 = 100%
                lineHeight = { value: spcPct / 1000, unit: 'PERCENT' };
            } else if (spcPts !== undefined) {
                // points to pixels.
                lineHeight = { value: hundredthPointToPx(spcPts), unit: 'PIXELS' };
            }
        }

        // Extract Paragraph Spacing (spcBef / spcAft)
        // We will map 'spcAft' to paragraphSpacing.
        // Ignore spcBef for now as Figma has limited support for both simultaneously on one text node consistently.
        let paragraphSpacing: number | undefined = undefined;
        const spcAft = asRecord(paragraphProperties?.['a:spcAft']);
        if (spcAft) {
            const spcPts = parseNumber(asRecord(spcAft['a:spcPts'])?.['@_val']);
            const spcPct = parseNumber(asRecord(spcAft['a:spcPct'])?.['@_val']);

            if (spcPts !== undefined) {
                paragraphSpacing = hundredthPointToPx(spcPts);
            } else if (spcPct !== undefined) {
                // Percent of what? Font size.
                // We need font size to calc pixels.
                const fontSize = parseNumber(runProperties?.['@_sz']) !== undefined
                    ? hundredthPointToPx(parseNumber(runProperties?.['@_sz']) as number)
                    : 12; // default fallback
                paragraphSpacing = (spcPct / 100000) * fontSize;
            }
        }

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
            valign: this.toVerticalAlign(valignRaw),
            lineHeight,
            paragraphSpacing
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

    private extractSolidFill(node: XmlNode | undefined, colorMap?: Record<string, string>): { color?: string; opacity?: number } {
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
            // Resolve Theme Color
            // 1. Map schemeName via Master Color Map (e.g. tx1 -> dk1)
            const themeKey = (colorMap && colorMap[schemeName]) ? colorMap[schemeName] : schemeName;

            // 2. Look up themeKey in Theme Params (e.g. dk1 -> 00004B)
            const color = this.themeParams.get(themeKey);

            if (color) {
                // Handling alpha/tint/shade modifiers is complex but essential for full fidelity
                // basic implementation:
                return { color: normalizeHex(color) };
            }

            this.addWarning(`Unsupported theme color '${schemeName}' (mapped to '${themeKey}') encountered.`);
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

    private buildFallbackOrder(
        textAndShapeCount: number,
        imageCount: number,
        groupCount: number,
        connectorCount: number, // Added
        graphicFrameCount: number // Added
    ): PreserveNode[] {
        const order: PreserveNode[] = [];
        for (let i = 0; i < textAndShapeCount; i += 1) {
            order.push({ 'p:sp': [] });
        }
        for (let i = 0; i < connectorCount; i += 1) { // Added
            order.push({ 'p:cxnSp': [] });
        }
        for (let i = 0; i < graphicFrameCount; i += 1) { // Added
            order.push({ 'p:graphicFrame': [] });
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

    private filterNodesByName(nodes: PreserveNode[], tagName: string): PreserveNode[] {
        return nodes.filter(n => n[tagName] !== undefined);
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private async readRequiredFileText(zip: any, filePath: string): Promise<string> {
        const zipEntry = zip.file(filePath);
        if (!zipEntry) {
            throw new Error(`Missing required file in PPTX archive: ${filePath}`);
        }
        return zipEntry.async('text');
    }

    private async readRelationships(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        zip: any,
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
