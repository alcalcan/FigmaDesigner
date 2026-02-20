import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { graph_chart, GraphChartProps, GraphLineSeries } from "../../components/Alex_CookBook/graph_chart/graph_chart";

export class GraphChartsDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = figma.createFrame();
        root.name = "Graph Charts Showcase - Full Width";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 64;
        root.paddingTop = 80;
        root.paddingLeft = 80;
        root.paddingRight = 80;
        root.paddingBottom = 80;
        root.counterAxisSizingMode = "FIXED";
        root.resize(1200, 800);
        root.primaryAxisSizingMode = "AUTO";
        root.clipsContent = false;
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }];

        const graphCreator = new graph_chart();

        // --- TITLE ---
        const titleContainer = figma.createFrame();
        titleContainer.name = "Page Header";
        titleContainer.layoutMode = "VERTICAL";
        titleContainer.itemSpacing = 8;
        titleContainer.fills = [];
        titleContainer.layoutAlign = "STRETCH";
        titleContainer.primaryAxisSizingMode = "AUTO";
        titleContainer.counterAxisSizingMode = "FIXED";

        const title = figma.createText();
        title.name = "Page Title";
        title.characters = "Graph Charts - Full Page Width Rendering";
        title.fontSize = 32;
        title.fontName = { family: "Inter", style: "Bold" };
        title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        titleContainer.appendChild(title);

        const subtitle = figma.createText();
        subtitle.name = "Page Subtitle";
        subtitle.characters = "Showcasing chart rendering logic adapted for full-width contexts.";
        subtitle.fontSize = 16;
        subtitle.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";
        titleContainer.appendChild(subtitle);

        root.appendChild(titleContainer);

        // --- SECTION 1: Standard Variation ---
        await this.addSection(root, graphCreator, "Standard Performance Tracking", "Fluid Spline Area Chart • Gradient Fill, Soft Shadow, 16px Roundness", {
            type: "spline",
            series: [{ dataPoints: [0.1, 0.3, 0.2, 0.5, 0.4, 0.8, 0.7, 0.9, 0.85, 1.0] }],
            height: 240,
            area: {
                startColor: { r: 0.1, g: 0.4, b: 0.9 },
                endColor: { r: 0.4, g: 0.8, b: 1 },
                shadow: true
            }
        });

        // --- SECTION 2: Compact Dense Data ---
        await this.addSection(root, graphCreator, "High-Density API Metrics (Shortened)", "Fluid Spline Area Chart • Solid Gradient, No Shadow, Compact Height (120px)", {
            type: "spline",
            series: [{ dataPoints: Array.from({ length: 40 }, () => Math.random() * 0.5 + 0.2) }],
            height: 120,
            area: {
                startColor: { r: 0.02, g: 0.08, b: 0.25 },
                endColor: { r: 0.15, g: 0.35, b: 0.8 },
                shadow: false
            }
        });

        // --- SECTION 3: Warning State ---
        await this.addSection(root, graphCreator, "Critical Load Peak", "Fluid Spline Area Chart • Warning Colors, Glow Shadow, Peak Data Visualization", {
            type: "spline",
            series: [{ dataPoints: [0.2, 0.25, 0.3, 0.4, 0.9, 0.85, 0.95, 0.8, 0.3, 0.2] }],
            height: 200,
            area: {
                startColor: { r: 0.8, g: 0.1, b: 0.1 },
                endColor: { r: 1, g: 0.4, b: 0.1 },
                fillType: "gradient",
                shadow: true
            }
        });

        // --- SECTION 4: Solid Style ---
        await this.addSection(root, graphCreator, "Disk Read Latency (Solid Style)", "Fluid Spline Area Chart • Transparent Solid Fill, No Shadow, Custom Opacity", {
            type: "spline",
            series: [{ dataPoints: [0.4, 0.45, 0.42, 0.5, 0.48, 0.55, 0.52, 0.6, 0.58] }],
            height: 180,
            area: {
                startColor: { r: 0.4, g: 0.1, b: 0.9 },
                fillType: "solid",
                opacity: 0.2,
                shadow: false
            }
        });

        // --- BAR CHART EXAMPLES (REFERENCE-STYLE) ---
        const rootContentWidth = Math.max(1, root.width - root.paddingLeft - root.paddingRight);
        this.addCustomSection(
            root,
            "Ticket Statistics (Reference Style)",
            "Card Bar Chart • Monthly columns with y-axis, month labels, highlighted month and tooltip",
            this.createTicketStatisticsCard(rootContentWidth)
        );
        this.addCustomSection(
            root,
            "Weekly Activity (Rounded Tracks)",
            "Pill Track Bars • Background tracks with colored day bars and weekday labels",
            this.createWeeklyActivityTracksCard(rootContentWidth)
        );
        this.addCustomSection(
            root,
            "Compact Mini Bars",
            "Micro Bar Chart • Dense slim bars with subtle grid for dashboard widgets",
            this.createCompactMiniBarsCard(rootContentWidth)
        );
        const defaultLineSeries = [
            {
                label: "Spend",
                tooltipLabel: "Spend",
                strokeColor: { r: 0.45, g: 0.36, b: 0.56 },
                strokeWidth: 5,
                dataPoints: [
                    25000, 23500, 21000, 18500, 17500, 18000, 19500, 22000, 28000, 37000,
                    42000, 43500, 42000, 39000, 35000, 31000, 27000, 23000, 20000, 17000,
                    14500, 12500, 12000, 12500, 14500, 19000, 22500, 23500, 21000, 18000
                ]
            },
            {
                label: "Cashback",
                tooltipLabel: "Cash back",
                strokeColor: { r: 0.69, g: 0.64, b: 0.94 },
                strokeWidth: 5,
                showArea: true,
                areaStartOpacity: 0.2,
                areaEndOpacity: 0.02,
                dataPoints: [
                    17000, 19500, 22000, 24500, 26000, 26500, 25000, 22500, 20500, 20000,
                    22000, 27000, 33000, 37000, 39500, 41500, 44000, 45000, 43500, 42000,
                    42500, 45500, 49000, 52000, 53500, 52000, 47000, 40000, 34500, 33000
                ]
            }
        ];
        await this.addSection(
            root,
            graphCreator,
            "Daily Trends (Multi-Line)",
            "Configurable Line Chart • Nested props API with backward-compatible demo controls",
            this.buildMultiLineChartProps(props, defaultLineSeries)
        );
        const intersectionDateLabels = ["01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "30"];
        const intersectionSelectedIndex = 7;
        const splineSpend = [18000, 20500, 23200, 24800, 22100, 17600, 20800, 36200, 43800, 45200, 40900, 32500, 23800, 17200, 11900, 9800];
        const splineCashback = [12600, 14900, 18600, 22100, 25200, 26200, 24600, 20500, 28400, 37200, 42800, 39500, 45200, 51800, 56300, 48700];
        await this.addSection(
            root,
            graphCreator,
            "Spline Intersections (Date Tooltip)",
            "Spline-style two-line intersection • One filled trend + two distinct strokes + date/value tooltip",
            {
                type: "spline",
                height: 320,
                curve: "smooth",
                series: [
                    {
                        label: "Spend",
                        tooltipLabel: "Spend",
                        strokeColor: { r: 0.42, g: 0.33, b: 0.56 },
                        strokeWidth: 5,
                        showArea: false,
                        dataPoints: splineSpend
                    },
                    {
                        label: "Cashback",
                        tooltipLabel: "Cash back",
                        strokeColor: { r: 0.67, g: 0.62, b: 0.95 },
                        strokeWidth: 5,
                        showArea: true,
                        areaFillType: "gradient",
                        areaStartColor: { r: 0.67, g: 0.62, b: 0.95 },
                        areaEndColor: { r: 0.84, g: 0.82, b: 0.98 },
                        areaStartOpacity: 0.2,
                        areaEndOpacity: 0.04,
                        dataPoints: splineCashback
                    }
                ],
                plot: {
                    paddingLeft: 52,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 28
                },
                domain: {
                    min: 0,
                    max: 56000,
                    headroomPct: 0.03
                },
                axes: {
                    showX: true,
                    showY: true,
                    xTickIndices: [0, 2, 4, 6, 8, 10, 12, 14, 15],
                    xTickLabels: intersectionDateLabels
                },
                interaction: {
                    selectedIndex: intersectionSelectedIndex,
                    focus: {
                        show: true,
                        seriesIndex: 0
                    },
                    cursor: {
                        show: true
                    },
                    markers: {
                        show: true,
                        scope: "all"
                    },
                    tooltip: {
                        show: true,
                        minTop: 4,
                        lines: [
                            `Date: ${intersectionDateLabels[intersectionSelectedIndex]}`,
                            `Spend: $${Math.round(splineSpend[intersectionSelectedIndex]).toLocaleString("en-US")}`,
                            `Cash back: $${Math.round(splineCashback[intersectionSelectedIndex]).toLocaleString("en-US")}`
                        ]
                    }
                },
                stroke: {
                    showUnderlays: false
                },
                area: {
                    fillType: "none",
                    shadow: false
                }
            } as GraphChartProps
        );


        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async addSection(root: FrameNode, creator: graph_chart, label: string, description: string, props: GraphChartProps) {
        const rootContentWidth = Math.max(1, root.width - root.paddingLeft - root.paddingRight);
        const section = figma.createFrame();
        section.name = label;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 12;
        section.fills = [];
        section.layoutAlign = "STRETCH";
        section.clipsContent = false;

        const labelText = figma.createText();
        labelText.name = `${label} Label`;
        labelText.characters = label.toUpperCase();
        labelText.fontSize = 14;
        labelText.letterSpacing = { unit: "PERCENT", value: 10 };
        labelText.fontName = { family: "Inter", style: "Bold" };
        labelText.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        section.appendChild(labelText);

        const chart = await creator.create({
            cornerRadius: 16,
            width: props.width ?? rootContentWidth,
            ...props
        });
        chart.name = `${label} Chart`;
        section.appendChild(chart);

        const descText = figma.createText();
        descText.name = `${label} Description`;
        descText.characters = description;
        descText.fontSize = 13;
        descText.fontName = { family: "Inter", style: "Medium" };
        descText.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];
        descText.layoutAlign = "STRETCH";
        descText.textAlignHorizontal = "CENTER";
        section.appendChild(descText);

        root.appendChild(section);
    }

    private buildMultiLineChartProps(pageProps: ComponentProps, defaultLineSeries: GraphLineSeries[]): GraphChartProps {
        const configuredSeries = Array.isArray(pageProps.multiLineSeries) ? pageProps.multiLineSeries : defaultLineSeries;
        const requestedCount = typeof pageProps.multiLineLineCount === "number"
            ? Math.max(1, Math.floor(pageProps.multiLineLineCount))
            : undefined;
        const clippedSeries = typeof requestedCount === "number" ? configuredSeries.slice(0, requestedCount) : configuredSeries;
        const palette: RGB[] = [
            { r: 0.45, g: 0.36, b: 0.56 },
            { r: 0.69, g: 0.64, b: 0.94 },
            { r: 0.25, g: 0.62, b: 0.88 },
            { r: 0.94, g: 0.55, b: 0.16 }
        ];
        const series = clippedSeries.map((line, index) => ({
            ...line,
            strokeColor: line.strokeColor ?? palette[index % palette.length]
        }));
        const focusEnabled = pageProps.multiLineFocusDotAndLabel !== false;
        const focusSeriesIndex = typeof pageProps.multiLineFocusSeriesIndex === "number"
            ? Math.max(0, Math.floor(pageProps.multiLineFocusSeriesIndex))
            : 0;
        const markerScope = pageProps.multiLineMarkerScope === "focus" ? "focus" : "all";
        const useCustomTooltipLines = pageProps.multiLineUseCustomTooltipLines === true;
        const tooltipLines = useCustomTooltipLines && Array.isArray(pageProps.multiLineTooltipLines)
            ? pageProps.multiLineTooltipLines
            : undefined;

        return {
            type: "line",
            height: 320,
            series,
            domain: {
                min: typeof pageProps.multiLineYAxisMin === "number" ? pageProps.multiLineYAxisMin : 0,
                max: typeof pageProps.multiLineYAxisMax === "number" ? pageProps.multiLineYAxisMax : 50000
            },
            plot: {
                paddingLeft: typeof pageProps.multiLinePaddingLeft === "number" ? pageProps.multiLinePaddingLeft : undefined,
                paddingRight: typeof pageProps.multiLinePaddingRight === "number" ? pageProps.multiLinePaddingRight : undefined,
                paddingTop: typeof pageProps.multiLinePaddingTop === "number" ? pageProps.multiLinePaddingTop : undefined,
                paddingBottom: typeof pageProps.multiLinePaddingBottom === "number" ? pageProps.multiLinePaddingBottom : undefined
            },
            axes: {
                yTicks: Array.isArray(pageProps.multiLineYAxisTicks) ? pageProps.multiLineYAxisTicks : undefined,
                yLabelOffsetX: typeof pageProps.multiLineYAxisLabelOffsetX === "number" ? pageProps.multiLineYAxisLabelOffsetX : undefined,
                yLabelOffsetY: typeof pageProps.multiLineYAxisLabelOffsetY === "number" ? pageProps.multiLineYAxisLabelOffsetY : undefined,
                xTickIndices: Array.isArray(pageProps.multiLineXAxisTickIndices) ? pageProps.multiLineXAxisTickIndices : undefined,
                xTickLabels: Array.isArray(pageProps.multiLineXAxisTickLabels) ? pageProps.multiLineXAxisTickLabels : undefined,
                xLabelOffsetY: typeof pageProps.multiLineXAxisLabelOffsetY === "number" ? pageProps.multiLineXAxisLabelOffsetY : undefined,
                xLabelCenterAdjust: typeof pageProps.multiLineXAxisLabelCenterAdjust === "number" ? pageProps.multiLineXAxisLabelCenterAdjust : undefined
            },
            interaction: {
                selectedIndex: typeof pageProps.multiLineSelectedDayIndex === "number" ? pageProps.multiLineSelectedDayIndex : 9,
                tooltip: {
                    show: pageProps.multiLineShowTooltip !== false,
                    lines: tooltipLines,
                    x: typeof pageProps.multiLineTooltipX === "number" ? pageProps.multiLineTooltipX : undefined,
                    y: typeof pageProps.multiLineTooltipY === "number" ? pageProps.multiLineTooltipY : undefined,
                    offsetX: typeof pageProps.multiLineTooltipOffsetX === "number" ? pageProps.multiLineTooltipOffsetX : undefined,
                    offsetY: typeof pageProps.multiLineTooltipOffsetY === "number" ? pageProps.multiLineTooltipOffsetY : undefined,
                    minTop: typeof pageProps.multiLineTooltipMinTop === "number" ? pageProps.multiLineTooltipMinTop : undefined
                },
                cursor: {
                    show: pageProps.multiLineShowCursor !== false,
                    offsetX: typeof pageProps.multiLineCursorOffsetX === "number" ? pageProps.multiLineCursorOffsetX : undefined,
                    heightExtra: typeof pageProps.multiLineCursorHeightExtra === "number" ? pageProps.multiLineCursorHeightExtra : undefined
                },
                markers: {
                    show: pageProps.multiLineShowMarkers !== false,
                    scope: markerScope,
                    radius: typeof pageProps.multiLineMarkerRadius === "number" ? pageProps.multiLineMarkerRadius : undefined,
                    offsetX: typeof pageProps.multiLineMarkerOffsetX === "number" ? pageProps.multiLineMarkerOffsetX : undefined,
                    offsetY: typeof pageProps.multiLineMarkerOffsetY === "number" ? pageProps.multiLineMarkerOffsetY : undefined
                },
                focus: {
                    show: focusEnabled,
                    seriesIndex: focusSeriesIndex
                }
            },
            stroke: {
                width: typeof pageProps.multiLineStrokeWidth === "number" ? pageProps.multiLineStrokeWidth : undefined,
                color: typeof pageProps.multiLineStrokeColor === "object" ? pageProps.multiLineStrokeColor : undefined,
                colors: Array.isArray(pageProps.multiLineStrokeColors) ? pageProps.multiLineStrokeColors : undefined
            },
            area: {
                shadow: false
            }
        };
    }

    private addCustomSection(root: FrameNode, label: string, description: string, content: FrameNode) {
        const section = figma.createFrame();
        section.name = label;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 12;
        section.fills = [];
        section.layoutAlign = "STRETCH";
        section.primaryAxisSizingMode = "AUTO";
        section.counterAxisSizingMode = "FIXED";
        section.clipsContent = false;

        const labelText = figma.createText();
        labelText.name = `${label} Label`;
        labelText.characters = label.toUpperCase();
        labelText.fontSize = 14;
        labelText.letterSpacing = { unit: "PERCENT", value: 10 };
        labelText.fontName = { family: "Inter", style: "Bold" };
        labelText.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        labelText.layoutAlign = "STRETCH";
        labelText.textAutoResize = "HEIGHT";
        section.appendChild(labelText);

        content.name = `${label} Content`;
        content.layoutAlign = "STRETCH";
        section.appendChild(content);

        const descText = figma.createText();
        descText.name = `${label} Description`;
        descText.characters = description;
        descText.fontSize = 13;
        descText.fontName = { family: "Inter", style: "Medium" };
        descText.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];
        descText.textAlignHorizontal = "CENTER";
        descText.layoutAlign = "STRETCH";
        descText.textAutoResize = "HEIGHT";
        section.appendChild(descText);

        root.appendChild(section);
    }

    private createTicketStatisticsCard(width: number): FrameNode {
        const card = figma.createFrame();
        card.name = "Ticket Statistics Card";
        card.layoutMode = "VERTICAL";
        card.itemSpacing = 16;
        card.paddingTop = 18;
        card.paddingRight = 18;
        card.paddingBottom = 18;
        card.paddingLeft = 18;
        card.primaryAxisSizingMode = "AUTO";
        card.counterAxisSizingMode = "FIXED";
        card.resize(width, 350);
        card.cornerRadius = 14;
        card.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        card.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.91, b: 0.94 } }];
        card.strokeWeight = 1;

        const header = figma.createFrame();
        header.name = "Card Header";
        header.layoutMode = "HORIZONTAL";
        header.primaryAxisAlignItems = "SPACE_BETWEEN";
        header.counterAxisAlignItems = "CENTER";
        header.primaryAxisSizingMode = "FIXED";
        header.counterAxisSizingMode = "AUTO";
        header.fills = [];
        header.layoutAlign = "STRETCH";

        const title = figma.createText();
        title.name = "Chart Title";
        title.characters = "Tickets Statistics";
        title.fontName = { family: "Inter", style: "Bold" };
        title.fontSize = 20;
        title.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.23, b: 0.3 } }];
        header.appendChild(title);

        const filter = figma.createFrame();
        filter.name = "Date Range Selector";
        filter.layoutMode = "HORIZONTAL";
        filter.primaryAxisAlignItems = "CENTER";
        filter.counterAxisAlignItems = "CENTER";
        filter.primaryAxisSizingMode = "AUTO";
        filter.counterAxisSizingMode = "AUTO";
        filter.itemSpacing = 6;
        filter.paddingTop = 8;
        filter.paddingBottom = 8;
        filter.paddingLeft = 12;
        filter.paddingRight = 12;
        filter.cornerRadius = 8;
        filter.fills = [{ type: "SOLID", color: { r: 0.97, g: 0.97, b: 0.98 } }];
        const filterText = figma.createText();
        filterText.name = "Selected Date Range Label";
        filterText.characters = "Last Year ▾";
        filterText.fontName = { family: "Inter", style: "Medium" };
        filterText.fontSize = 11;
        filterText.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.48, b: 0.56 } }];
        filter.appendChild(filterText);
        header.appendChild(filter);
        card.appendChild(header);

        const plot = figma.createFrame();
        plot.name = "Tickets Plot Area";
        plot.layoutMode = "NONE";
        plot.primaryAxisSizingMode = "FIXED";
        plot.counterAxisSizingMode = "FIXED";
        plot.layoutAlign = "STRETCH";
        plot.resize(width - 36, 270);
        plot.fills = [];
        plot.clipsContent = false;
        card.appendChild(plot);

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthlyTickets = [2600, 3900, 3400, 4350, 3600, 4990, 3550, 4550, 4450, 4050, 4750, 5600];
        const selectedIndex = 5;

        const axisMin = 1000;
        const axisMax = 6000;
        const leftGutter = 56;
        const rightGutter = 8;
        const topGutter = 10;
        const bottomGutter = 36;
        const chartWidth = plot.width - leftGutter - rightGutter;
        const chartHeight = plot.height - topGutter - bottomGutter;

        const yTicks = [1000, 2000, 3000, 4000, 5000, 6000];
        yTicks.forEach(tick => {
            const yNorm = (tick - axisMin) / (axisMax - axisMin);
            const y = topGutter + chartHeight - yNorm * chartHeight;

            const line = figma.createRectangle();
            line.name = `Y Grid Line ${Math.round(tick / 1000)}K`;
            line.resize(chartWidth, 1);
            line.x = leftGutter;
            line.y = y;
            line.fills = [{ type: "SOLID", color: { r: 0.93, g: 0.93, b: 0.95 } }];
            plot.appendChild(line);

            const tickLabel = figma.createText();
            tickLabel.name = `Y Axis Tick Label ${Math.round(tick / 1000)}K`;
            tickLabel.characters = `${Math.round(tick / 1000)}K`;
            tickLabel.fontName = { family: "Inter", style: "Medium" };
            tickLabel.fontSize = 10;
            tickLabel.fills = [{ type: "SOLID", color: { r: 0.62, g: 0.64, b: 0.7 } }];
            tickLabel.x = 0;
            tickLabel.y = y - tickLabel.height / 2;
            plot.appendChild(tickLabel);
        });

        const barGap = 12;
        const barWidth = (chartWidth - (monthlyTickets.length - 1) * barGap) / monthlyTickets.length;
        let selectedBarX = 0;
        let selectedBarY = 0;

        monthlyTickets.forEach((value, i) => {
            const normalized = Math.max(0, Math.min(1, (value - axisMin) / (axisMax - axisMin)));
            const barHeight = Math.max(10, normalized * chartHeight);
            const x = leftGutter + i * (barWidth + barGap);
            const y = topGutter + chartHeight - barHeight;

            if (i === selectedIndex) {
                const selectedBar = figma.createFrame();
                selectedBar.name = `Selected Month Bar - ${months[i]}`;
                selectedBar.layoutMode = "NONE";
                selectedBar.resize(barWidth, barHeight);
                selectedBar.x = x;
                selectedBar.y = y;
                selectedBar.cornerRadius = 8;
                selectedBar.clipsContent = true;
                selectedBar.fills = [{
                    type: "GRADIENT_LINEAR",
                    gradientStops: [
                        { position: 0, color: { r: 0.29, g: 0.15, b: 0.95, a: 1 } },
                        { position: 1, color: { r: 0.45, g: 0.2, b: 1.0, a: 1 } }
                    ],
                    gradientTransform: [[0, 1, 0], [-1, 0, 1]]
                }];
                plot.appendChild(selectedBar);

                for (let stripeX = -barHeight; stripeX < barWidth + barHeight; stripeX += 10) {
                    const stripe = figma.createRectangle();
                    stripe.name = `Selected Bar Stripe ${Math.floor((stripeX + barHeight) / 10) + 1}`;
                    stripe.resize(2, barHeight * 1.6);
                    stripe.x = stripeX;
                    stripe.y = -barHeight * 0.2;
                    stripe.rotation = 35;
                    stripe.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.18 }];
                    selectedBar.appendChild(stripe);
                }

                const marker = figma.createEllipse();
                marker.name = "Selected Data Point Marker";
                marker.resize(10, 10);
                marker.x = x + barWidth / 2 - 5;
                marker.y = y - 5;
                marker.fills = [{ type: "SOLID", color: { r: 0.49, g: 0.24, b: 0.99 } }];
                marker.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
                marker.strokeWeight = 2;
                plot.appendChild(marker);

                selectedBarX = x;
                selectedBarY = y;
            } else {
                const bar = figma.createRectangle();
                bar.name = `Month Bar - ${months[i]}`;
                bar.resize(barWidth, barHeight);
                bar.x = x;
                bar.y = y;
                bar.cornerRadius = 8;
                bar.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.86, b: 0.94 } }];
                plot.appendChild(bar);
            }

            const monthLabel = figma.createText();
            monthLabel.name = `Month Label - ${months[i]}`;
            monthLabel.characters = months[i];
            monthLabel.fontName = { family: "Inter", style: i === selectedIndex ? "Bold" : "Medium" };
            monthLabel.fontSize = 9;
            monthLabel.fills = [{
                type: "SOLID",
                color: i === selectedIndex ? { r: 0.34, g: 0.3, b: 0.5 } : { r: 0.62, g: 0.64, b: 0.7 }
            }];
            monthLabel.x = x + barWidth / 2 - monthLabel.width / 2;
            monthLabel.y = topGutter + chartHeight + 8;
            plot.appendChild(monthLabel);
        });

        const tooltip = figma.createFrame();
        tooltip.name = "Selected Data Tooltip";
        tooltip.layoutMode = "VERTICAL";
        tooltip.itemSpacing = 2;
        tooltip.paddingTop = 8;
        tooltip.paddingBottom = 8;
        tooltip.paddingLeft = 10;
        tooltip.paddingRight = 10;
        tooltip.primaryAxisSizingMode = "AUTO";
        tooltip.counterAxisSizingMode = "AUTO";
        tooltip.cornerRadius = 10;
        tooltip.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        tooltip.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.91, b: 0.95 } }];
        tooltip.effects = [{
            type: "DROP_SHADOW",
            visible: true,
            color: { r: 0.2, g: 0.24, b: 0.36, a: 0.12 },
            radius: 10,
            offset: { x: 0, y: 4 },
            spread: 0,
            blendMode: "NORMAL",
            showShadowBehindNode: false
        }];

        const tooltipValue = figma.createText();
        tooltipValue.name = "Tooltip Value";
        tooltipValue.characters = "4.990K";
        tooltipValue.fontName = { family: "Inter", style: "Bold" };
        tooltipValue.fontSize = 16;
        tooltipValue.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.23, b: 0.3 } }];
        tooltip.appendChild(tooltipValue);

        const tooltipDate = figma.createText();
        tooltipDate.name = "Tooltip Date";
        tooltipDate.characters = "Monday 18, September";
        tooltipDate.fontName = { family: "Inter", style: "Medium" };
        tooltipDate.fontSize = 10;
        tooltipDate.fills = [{ type: "SOLID", color: { r: 0.57, g: 0.6, b: 0.67 } }];
        tooltip.appendChild(tooltipDate);
        plot.appendChild(tooltip);

        tooltip.x = selectedBarX + barWidth / 2 - tooltip.width / 2;
        tooltip.y = selectedBarY - tooltip.height - 14;

        return card;
    }

    private createWeeklyActivityTracksCard(width: number): FrameNode {
        const card = figma.createFrame();
        card.name = "Weekly Activity Tracks Card";
        card.layoutMode = "VERTICAL";
        card.itemSpacing = 14;
        card.paddingTop = 20;
        card.paddingRight = 20;
        card.paddingBottom = 20;
        card.paddingLeft = 20;
        card.primaryAxisSizingMode = "AUTO";
        card.counterAxisSizingMode = "FIXED";
        card.resize(width, 290);
        card.cornerRadius = 16;
        card.fills = [{ type: "SOLID", color: { r: 0.97, g: 0.98, b: 0.94 } }];

        const title = figma.createText();
        title.name = "Chart Title";
        title.characters = "Weekly Session Intensity";
        title.fontName = { family: "Inter", style: "Bold" };
        title.fontSize = 18;
        title.fills = [{ type: "SOLID", color: { r: 0.23, g: 0.26, b: 0.22 } }];
        card.appendChild(title);

        const plot = figma.createFrame();
        plot.name = "Weekly Tracks Plot Area";
        plot.layoutMode = "NONE";
        plot.primaryAxisSizingMode = "FIXED";
        plot.counterAxisSizingMode = "FIXED";
        plot.layoutAlign = "STRETCH";
        plot.resize(width - 40, 210);
        plot.fills = [];
        plot.clipsContent = false;
        card.appendChild(plot);

        const days = ["M", "T", "W", "T", "F", "S", "S"];
        const values = [0.22, 0.45, 0.73, 0.52, 0.4, 0.27, 0.12];
        const trackHeight = 150;
        const trackTop = 6;
        const labelY = trackTop + trackHeight + 12;
        const trackWidth = 34;
        const totalTrackWidth = trackWidth * days.length;
        const gap = (plot.width - totalTrackWidth - 24) / (days.length - 1);
        const startX = 12;

        days.forEach((day, i) => {
            const x = startX + i * (trackWidth + gap);

            const track = figma.createRectangle();
            track.name = `Day Track - ${day}`;
            track.resize(trackWidth, trackHeight);
            track.x = x;
            track.y = trackTop;
            track.cornerRadius = trackWidth / 2;
            track.fills = [{ type: "SOLID", color: { r: 0.92, g: 0.93, b: 0.9 } }];
            plot.appendChild(track);

            const bar = figma.createRectangle();
            bar.name = `Day Activity Bar - ${day}`;
            const barHeight = Math.max(12, values[i] * trackHeight);
            bar.resize(trackWidth, barHeight);
            bar.x = x;
            bar.y = trackTop + trackHeight - barHeight;
            bar.cornerRadius = trackWidth / 2;

            const isWeekend = i >= 5;
            const isFriday = i === 4;
            const barColor = isFriday || isWeekend
                ? { r: 0.94, g: 0.55, b: 0.16 }
                : { r: 0.58, g: 0.68, b: 0.35 };
            bar.fills = [{ type: "SOLID", color: barColor }];
            plot.appendChild(bar);

            const dayLabel = figma.createText();
            dayLabel.name = `Day Label - ${day}`;
            dayLabel.characters = day;
            dayLabel.fontName = { family: "Inter", style: "Bold" };
            dayLabel.fontSize = 24;
            dayLabel.fills = [{ type: "SOLID", color: { r: 0.29, g: 0.31, b: 0.34 } }];
            dayLabel.x = x + trackWidth / 2 - dayLabel.width / 2;
            dayLabel.y = labelY;
            plot.appendChild(dayLabel);
        });

        return card;
    }

    private createCompactMiniBarsCard(width: number): FrameNode {
        const card = figma.createFrame();
        card.name = "Compact Mini Bars Card";
        card.layoutMode = "VERTICAL";
        card.itemSpacing = 12;
        card.paddingTop = 18;
        card.paddingRight = 18;
        card.paddingBottom = 18;
        card.paddingLeft = 18;
        card.primaryAxisSizingMode = "AUTO";
        card.counterAxisSizingMode = "FIXED";
        card.resize(width, 220);
        card.cornerRadius = 14;
        card.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        card.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.92, b: 0.95 } }];
        card.strokeWeight = 1;

        const title = figma.createText();
        title.name = "Chart Title";
        title.characters = "Mini Performance Snapshot";
        title.fontName = { family: "Inter", style: "Bold" };
        title.fontSize = 16;
        title.fills = [{ type: "SOLID", color: { r: 0.18, g: 0.2, b: 0.3 } }];
        card.appendChild(title);

        const plot = figma.createFrame();
        plot.name = "Mini Bars Plot Area";
        plot.layoutMode = "NONE";
        plot.primaryAxisSizingMode = "FIXED";
        plot.counterAxisSizingMode = "FIXED";
        plot.layoutAlign = "STRETCH";
        plot.resize(width - 36, 150);
        plot.fills = [];
        plot.clipsContent = false;
        card.appendChild(plot);

        const values = [18, 9, 26, 14, 11, 23, 31, 27, 16, 21, 35, 19, 28, 33, 24, 30, 38, 29];
        const max = Math.max(...values);
        const chartLeft = 8;
        const chartRight = 8;
        const chartBottom = 18;
        const chartTop = 8;
        const chartWidth = plot.width - chartLeft - chartRight;
        const chartHeight = plot.height - chartTop - chartBottom;

        [0.25, 0.5, 0.75].forEach(ratio => {
            const y = chartTop + chartHeight - chartHeight * ratio;
            const grid = figma.createRectangle();
            grid.name = `Grid Line ${Math.round(ratio * 100)}%`;
            grid.resize(chartWidth, 1);
            grid.x = chartLeft;
            grid.y = y;
            grid.fills = [{ type: "SOLID", color: { r: 0.93, g: 0.94, b: 0.97 } }];
            plot.appendChild(grid);
        });

        const barCount = values.length;
        const barWidth = 10;
        const gap = (chartWidth - barCount * barWidth) / (barCount - 1);

        values.forEach((value, i) => {
            const normalized = value / max;
            const h = Math.max(8, normalized * chartHeight);
            const bar = figma.createRectangle();
            bar.name = `Mini Bar ${i + 1} (${value})`;
            bar.resize(barWidth, h);
            bar.x = chartLeft + i * (barWidth + gap);
            bar.y = chartTop + chartHeight - h;
            bar.cornerRadius = 3;
            bar.fills = [{ type: "SOLID", color: { r: 0.11, g: 0.18, b: 0.75 } }];
            plot.appendChild(bar);
        });

        return card;
    }

}
