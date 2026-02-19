import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { graph_chart, GraphChartProps } from "../../components/Alex_CookBook/graph_chart/graph_chart";

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

        const title = figma.createText();
        title.name = "Page Title";
        title.characters = "Graph Charts - Full Page Width Rendering";
        title.fontSize = 32;
        title.fontName = { family: "Inter", style: "Bold" };
        title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        titleContainer.appendChild(title);

        const subtitle = figma.createText();
        subtitle.name = "Page Subtitle";
        subtitle.characters = "Showcasing chart rendering logic adapted for full-width contexts.";
        subtitle.fontSize = 16;
        subtitle.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];
        titleContainer.appendChild(subtitle);

        root.appendChild(titleContainer);

        // --- SECTION 1: Standard Variation ---
        await this.addSection(root, graphCreator, "Standard Performance Tracking", "Fluid Spline Area Chart • Gradient Fill, Soft Shadow, 16px Roundness", {
            dataPoints: [0.1, 0.3, 0.2, 0.5, 0.4, 0.8, 0.7, 0.9, 0.85, 1.0],
            height: 240,
            gradientStart: { r: 0.1, g: 0.4, b: 0.9 },
            gradientEnd: { r: 0.4, g: 0.8, b: 1 },
            showChartShadow: true
        });

        // --- SECTION 2: Compact Dense Data ---
        await this.addSection(root, graphCreator, "High-Density API Metrics (Shortened)", "Fluid Spline Area Chart • Solid Gradient, No Shadow, Compact Height (120px)", {
            dataPoints: Array.from({ length: 40 }, () => Math.random() * 0.5 + 0.2),
            height: 120,
            gradientStart: { r: 0.02, g: 0.08, b: 0.25 },
            gradientEnd: { r: 0.15, g: 0.35, b: 0.8 },
            showChartShadow: false
        });

        // --- SECTION 3: Warning State ---
        await this.addSection(root, graphCreator, "Critical Load Peak", "Fluid Spline Area Chart • Warning Colors, Glow Shadow, Peak Data Visualization", {
            dataPoints: [0.2, 0.25, 0.3, 0.4, 0.9, 0.85, 0.95, 0.8, 0.3, 0.2],
            height: 200,
            gradientStart: { r: 0.8, g: 0.1, b: 0.1 },
            gradientEnd: { r: 1, g: 0.4, b: 0.1 },
            chartFillType: "gradient",
            showChartShadow: true
        });

        // --- SECTION 4: Solid Style ---
        await this.addSection(root, graphCreator, "Disk Read Latency (Solid Style)", "Fluid Spline Area Chart • Transparent Solid Fill, No Shadow, Custom Opacity", {
            dataPoints: [0.4, 0.45, 0.42, 0.5, 0.48, 0.55, 0.52, 0.6, 0.58],
            height: 180,
            gradientStart: { r: 0.4, g: 0.1, b: 0.9 },
            chartFillType: "solid",
            chartOpacity: 0.2,
            showChartShadow: false
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
            "Configurable Line Chart • Pass lineSeries and lineSeriesCount via props to control how many lines render",
            {
                type: "line",
                height: 320,
                lineSeries: Array.isArray(props.multiLineSeries) ? props.multiLineSeries : defaultLineSeries,
                lineSeriesCount: typeof props.multiLineLineCount === "number" ? props.multiLineLineCount : undefined,
                lineYAxisMin: typeof props.multiLineYAxisMin === "number" ? props.multiLineYAxisMin : 0,
                lineYAxisMax: typeof props.multiLineYAxisMax === "number" ? props.multiLineYAxisMax : 50000,
                lineYAxisTicks: Array.isArray(props.multiLineYAxisTicks) ? props.multiLineYAxisTicks : undefined,
                linePaddingLeft: typeof props.multiLinePaddingLeft === "number" ? props.multiLinePaddingLeft : undefined,
                linePaddingRight: typeof props.multiLinePaddingRight === "number" ? props.multiLinePaddingRight : undefined,
                linePaddingTop: typeof props.multiLinePaddingTop === "number" ? props.multiLinePaddingTop : undefined,
                linePaddingBottom: typeof props.multiLinePaddingBottom === "number" ? props.multiLinePaddingBottom : undefined,
                lineYAxisLabelOffsetX: typeof props.multiLineYAxisLabelOffsetX === "number" ? props.multiLineYAxisLabelOffsetX : undefined,
                lineYAxisLabelOffsetY: typeof props.multiLineYAxisLabelOffsetY === "number" ? props.multiLineYAxisLabelOffsetY : undefined,
                lineSelectedIndex: typeof props.multiLineSelectedDayIndex === "number" ? props.multiLineSelectedDayIndex : 9,
                lineXAxisTickIndices: Array.isArray(props.multiLineXAxisTickIndices) ? props.multiLineXAxisTickIndices : undefined,
                lineXAxisTickLabels: Array.isArray(props.multiLineXAxisTickLabels) ? props.multiLineXAxisTickLabels : undefined,
                lineXAxisLabelOffsetY: typeof props.multiLineXAxisLabelOffsetY === "number" ? props.multiLineXAxisLabelOffsetY : undefined,
                lineXAxisLabelCenterAdjust: typeof props.multiLineXAxisLabelCenterAdjust === "number" ? props.multiLineXAxisLabelCenterAdjust : undefined,
                lineShowTooltip: props.multiLineShowTooltip !== false,
                lineTooltipLines: Array.isArray(props.multiLineTooltipLines) ? props.multiLineTooltipLines : undefined,
                lineTooltipX: typeof props.multiLineTooltipX === "number" ? props.multiLineTooltipX : undefined,
                lineTooltipY: typeof props.multiLineTooltipY === "number" ? props.multiLineTooltipY : undefined,
                lineTooltipOffsetX: typeof props.multiLineTooltipOffsetX === "number" ? props.multiLineTooltipOffsetX : undefined,
                lineTooltipOffsetY: typeof props.multiLineTooltipOffsetY === "number" ? props.multiLineTooltipOffsetY : undefined,
                lineShowCursor: props.multiLineShowCursor !== false,
                lineCursorOffsetX: typeof props.multiLineCursorOffsetX === "number" ? props.multiLineCursorOffsetX : undefined,
                lineCursorHeightExtra: typeof props.multiLineCursorHeightExtra === "number" ? props.multiLineCursorHeightExtra : undefined,
                lineShowMarkers: props.multiLineShowMarkers !== false,
                lineMarkerRadius: typeof props.multiLineMarkerRadius === "number" ? props.multiLineMarkerRadius : undefined,
                lineMarkerOffsetX: typeof props.multiLineMarkerOffsetX === "number" ? props.multiLineMarkerOffsetX : undefined,
                lineMarkerOffsetY: typeof props.multiLineMarkerOffsetY === "number" ? props.multiLineMarkerOffsetY : undefined,
                lineStrokeWidth: typeof props.multiLineStrokeWidth === "number" ? props.multiLineStrokeWidth : undefined,
                lineStrokeColor: typeof props.multiLineStrokeColor === "object" ? props.multiLineStrokeColor : undefined,
                lineStrokeColors: Array.isArray(props.multiLineStrokeColors) ? props.multiLineStrokeColors : undefined,
                showChartShadow: false
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

    private addCustomSection(root: FrameNode, label: string, description: string, content: FrameNode) {
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

        content.name = `${label} Content`;
        content.layoutAlign = "STRETCH";
        section.appendChild(content);

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

    private createTicketStatisticsCard(width: number): FrameNode {
        const card = figma.createFrame();
        card.name = "Ticket Statistics Card";
        card.layoutMode = "VERTICAL";
        card.itemSpacing = 16;
        card.paddingTop = 18;
        card.paddingRight = 18;
        card.paddingBottom = 18;
        card.paddingLeft = 18;
        card.primaryAxisSizingMode = "FIXED";
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
        card.primaryAxisSizingMode = "FIXED";
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
        card.primaryAxisSizingMode = "FIXED";
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
