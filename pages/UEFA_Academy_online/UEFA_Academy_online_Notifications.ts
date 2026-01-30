import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Top_bar } from "../../components/UEFA_Academy_online/Top_bar/Top_bar";
import { Header } from "../../components/UEFA_Academy_online/Header/Header";
import { Info } from "../../components/UEFA_Academy_online/Info/Info";
import { Content_container } from "../../components/UEFA_Academy_online/Content_container/Content_container";
import { TitleBar_withCTA } from "../../components/UEFA_Academy_online/TitleBar_withCTA/TitleBar_withCTA";
import { expanded_card } from "../../components/Alex_CookBook/expanded_card/expanded_card";
import { SubSection_collapsed } from "../../components/UEFA_Academy_online/SubSection/SubSection_collapsed";

export class UEFA_Academy_online_Notifications extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "UEFA Academy online - Notifications";

        // Setup Auto Layout for the page
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED";
        root.counterAxisAlignItems = "CENTER";
        root.itemSpacing = 0;
        if ("clipsContent" in root) root.clipsContent = false;
        root.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }]);

        // default page width 1680
        root.resize(1680, 100);

        // 1. Create Components
        const topBarComp = new Top_bar();
        const headerComp = new Header();
        const infoComp = new Info();
        const contentContainerComp = new Content_container();
        const titleBarCTAComp = new TitleBar_withCTA();
        const subSectionComp = new expanded_card();
        const subSectionCollapsedComp = new SubSection_collapsed();

        // 2. Generate Nodes
        const topBarNode = await topBarComp.create({ x: 0, y: 0 });
        const headerNode = await headerComp.create({
            x: 0,
            y: 0,
            title: "Notifications",
            subtitle: "Second line for text description"
        });
        const infoNode = await infoComp.create({
            x: 0,
            y: 0,
            title: "Don't miss out!",
            text: "Setup your notification so you can step on top of the competition"
        });
        const contentContainerNode = await contentContainerComp.create({ x: 0, y: 0 });

        // Content items
        const titleBarNode = await titleBarCTAComp.create({
            x: 0,
            y: 0,
            text: "Notification preferences",
            subtext: "Choose what you want to receive updates about"
        });

        const subjectNode = await subSectionComp.create({
            x: 0,
            y: 0,
            headerTitle: "Subject",
            badgeLabel: "Subjects",
            items: [
                { name: "Anti-Doping, Medical and Health", isSelected: false },
                { name: "Communication, PR and Media", isSelected: false },
                { name: "Event and Volunteer Management", isSelected: false },
                { name: "Football and Social Responsibility", isSelected: false },
                { name: "Football Development", isSelected: false },
                { name: "Governance, Organisation of Football and Sport", isSelected: false },
                { name: "Innovation", isSelected: false },
                { name: "Leadership", isSelected: false },
                { name: "Marketing Sponsorship", isSelected: false },
                { name: "Legal and Integrity", isSelected: false }
            ]
        });

        const organisationsNode = await subSectionCollapsedComp.create({
            x: 0,
            y: 0,
            name: "Organisations",
            badgeLabel: "Organisations"
        });

        const uploadedByNode = await subSectionCollapsedComp.create({
            x: 0,
            y: 0,
            name: "Uploaded by",
            badgeLabel: "Uploaders"
        });

        const myProgramsNode = await subSectionCollapsedComp.create({
            x: 0,
            y: 0,
            name: "My programs",
            badgeLabel: "Programs"
        });

        const emailSection = await this.createEmailSection();

        // 3. Assemble Content Container
        const container = contentContainerNode as FrameNode;
        container.itemSpacing = 40;
        container.appendChild(titleBarNode);
        container.appendChild(subjectNode);
        container.appendChild(organisationsNode);
        container.appendChild(uploadedByNode);
        container.appendChild(myProgramsNode);
        container.appendChild(emailSection);

        // 4. Footer (Mockup since component is missing)
        const footerNode = await this.createFooter();

        // 5. Append to Root
        root.appendChild(topBarNode);
        root.appendChild(headerNode);
        root.appendChild(infoNode);
        root.appendChild(container);
        root.appendChild(footerNode);

        // 6. Layout Alignment & Constraints
        [topBarNode, headerNode, infoNode, container, footerNode].forEach(node => {
            if ("layoutAlign" in node) {
                (node as LayoutMixin).layoutAlign = "STRETCH";
            }
        });

        // Ensure container width
        if ("resize" in container) {
            container.resize(1680, container.height);
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async createEmailSection(): Promise<FrameNode> {
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });

        const root = figma.createFrame();
        root.name = "Email Section";
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "AUTO";
        root.itemSpacing = 16;
        root.fills = [];

        // Input
        const input = figma.createFrame();
        input.name = "Email Input";
        input.resize(300, 40);
        input.cornerRadius = 4;
        input.strokes = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.82, "g": 0.85, "b": 0.87 } }]);
        input.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);
        input.paddingLeft = 12;
        input.layoutMode = "HORIZONTAL";
        input.counterAxisAlignItems = "CENTER";

        const placeholder = figma.createText();
        placeholder.characters = "Your email address";
        placeholder.fontSize = 14;
        placeholder.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.6, "g": 0.6, "b": 0.6 } }]);
        input.appendChild(placeholder);

        // Checkbox row
        const row = figma.createFrame();
        row.name = "Notify Checkbox";
        row.layoutMode = "HORIZONTAL";
        row.counterAxisAlignItems = "CENTER";
        row.itemSpacing = 8;
        row.fills = [];

        const box = figma.createFrame();
        box.resize(18, 18);
        box.cornerRadius = 2;
        box.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);

        const check = figma.createText();
        check.characters = "✓";
        check.fontSize = 12;
        check.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);
        box.appendChild(check);
        check.x = 4;
        check.y = 2;

        const label = figma.createText();
        label.characters = "Notify me on email";
        label.fontSize = 16;
        label.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.23 } }]);

        row.appendChild(box);
        row.appendChild(label);

        root.appendChild(input);
        root.appendChild(row);

        return root;
    }

    private async createFooter(): Promise<FrameNode> {
        const root = figma.createFrame();
        root.name = "Footer";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 40;
        root.paddingTop = 64;
        root.paddingBottom = 64;
        root.paddingLeft = 120;
        root.paddingRight = 120;
        root.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.96, "g": 0.97, "b": 0.98 } }]);

        // Top info with 4 columns
        const top = figma.createFrame();
        top.layoutMode = "HORIZONTAL";
        top.primaryAxisSizingMode = "AUTO";
        top.counterAxisSizingMode = "AUTO";
        top.itemSpacing = 120;
        top.fills = [];

        // Logo Column (Placeholder)
        const logo = figma.createFrame();
        logo.resize(200, 40);
        logo.fills = await figma.loadFontAsync({ family: "Open Sans", style: "Bold" }).then(() => {
            const t = figma.createText();
            t.characters = "ACADEMY";
            t.fontSize = 24;
            logo.appendChild(t);
            return [];
        });

        top.appendChild(logo);

        // Links columns (Mocks)
        for (let i = 0; i < 2; i++) {
            const col = figma.createFrame();
            col.layoutMode = "VERTICAL";
            col.itemSpacing = 12;
            col.fills = [];
            const labels = i === 0 ? ["Terms and Conditions", "Contact us", "Cookies policy", "UEFA.com"] : ["UEFA Academy catalogue", "UEFA Academy Alumni Association", "About the UEFA Academy", "UEFA Academy"];
            for (const text of labels) {
                const link = figma.createText();
                link.characters = text;
                link.fontSize = 14;
                col.appendChild(link);
            }
            top.appendChild(col);
        }

        // Certification
        const cert = figma.createFrame();
        cert.resize(200, 80);
        cert.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);
        cert.cornerRadius = 8;
        cert.strokes = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.82, "g": 0.85, "b": 0.87 } }]);
        top.appendChild(cert);

        // Bottom copyright
        const bottom = figma.createFrame();
        bottom.layoutMode = "VERTICAL";
        bottom.counterAxisAlignItems = "CENTER";
        bottom.paddingTop = 24;
        bottom.paddingBottom = 24;
        bottom.itemSpacing = 8;
        bottom.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0, "g": 0.63, "b": 0.58 } }]);
        bottom.layoutAlign = "STRETCH";

        const text1 = figma.createText();
        text1.characters = "© 1998-2022 UEFA. All rights reserved.";
        text1.fontSize = 12;
        text1.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);

        const text2 = figma.createText();
        text2.characters = "The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or copyright of UEFA.";
        text2.fontSize = 10;
        text2.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]);
        text2.textAlignHorizontal = "CENTER";

        bottom.appendChild(text1);
        bottom.appendChild(text2);

        root.appendChild(top);
        root.appendChild(bottom);

        return root;
    }
}
