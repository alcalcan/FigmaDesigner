import { ComponentProps, NodeDefinition, T2x3 } from "../../components/BaseComponent";
import { top_menu, TopMenuProps } from "../../components/Alex_CookBook/top_menu/top_menu";
import { BaseDemoPage } from "./BaseDemoPage";

// Assets
import SVG_Desktop_Logo from "../../components/Alex_CookBook/top_menu/assets/euro_28_desktop_logo.svg";
import SVG_Desktop_Icon from "../../components/Alex_CookBook/top_menu/assets/euro_28_desktop_icon.svg";
import SVG_Mobile_Logo from "../../components/Alex_CookBook/top_menu/assets/euro_28_mobile_logo.svg";
import SVG_Mobile_Menu_Icon from "../../components/Alex_CookBook/top_menu/assets/euro_28_mobile_menu.svg";
import SVG_MainNav_Logo from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_logo.svg";
import SVG_MainNav_Dropdown from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_dropdown.svg";
import SVG_MainNav_Login from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_login.svg";
import SVG_MainNav_Search from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_search.svg";

export class TopMenuDemo extends BaseDemoPage {

    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const root = await this.initPage("Alex CookBook - TopMenu Demo");

        await this.addHeader(
            root,
            "Top Menu (Parametric)",
            "Global navigation patterns built parametrically using properties (not nested structures)."
        );

        const tm = new top_menu();

        // --- Simple Top Bars ---
        await this.addSection(root, "Simple Headers", "Basic logo and profile setup.", async (container) => {
            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                showProfile: true,
                showNotifications: true
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                showMenuOnLeft: true,
                showProfile: true
            }));
        });

        // --- Navigation Top Bars ---
        await this.addSection(root, "Navigation Headers", "Includes main global links.", async (container) => {
            const defaultNavItems = ["Dashboard", "Projects", "Team", "Settings"];
            const customNavItems = ["Home", "Products", "Solutions", "Pricing", "Contact"];

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                navItems: defaultNavItems,
                showSearchAction: true,
                showNotifications: true,
                showProfile: true,
                rootLayoutProps: { primaryAxisAlignItems: "CENTER" }
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                navItems: customNavItems,
                showSearchAction: true,
                showNotifications: true,
                showProfile: true,
                rootLayoutProps: { primaryAxisAlignItems: "CENTER" }
            }));
        });

        // --- Search Top Bars ---
        await this.addSection(root, "Search & Utility Headers", "Includes search bars for deep exploration.", async (container) => {
            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                showSearchInCenter: true,
                searchCornerRadius: 100,
                showNotifications: true,
                showProfile: true,
                rootLayoutProps: { primaryAxisAlignItems: "CENTER" }
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                showMenuOnLeft: true,
                navItems: ["Dashboard", "Projects", "Team", "Settings"],
                showSearchInCenter: true,
                searchCornerRadius: 8,
                searchFullMode: true,
                showNotifications: true,
                showProfile: true,
                rootLayoutProps: { primaryAxisAlignItems: "CENTER" }
            }));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        // --- Floating Island Top Bars ---
        await this.addSection(root, "Floating Islands", "Super rounded navigation patterns separating logo, search, and profile.", async (container) => {
            container.itemSpacing = 24;

            container.appendChild(await tm.create({
                layoutType: "fill",
                isFloating: true,
                hasLogo: true,
                logoText: "CookBook",
                navItems: ["Dashboard", "Projects", "Team", "Settings"],
                showNotifications: true,
                showProfile: true,
            }));

            // Floating island no nav
            container.appendChild(await tm.create({
                layoutType: "fill",
                isFloating: true,
                hasLogo: true,
                logoText: "CookBook",
                showMenuOnLeft: true,
                showProfile: true,
            }));
        });

        // --- Unified Island Top Bar ---
        await this.addSection(root, "Unified Island", "A single cohesive floating pill for the entire header.", async (container) => {
            container.itemSpacing = 24;

            container.appendChild(await tm.create({
                layoutType: "fill",
                isIsland: true,
                hasLogo: true,
                logoText: "CookBook",
                navItems: ["Dashboard", "Projects", "Team"],
                showSearchAction: true,
                showNotifications: true,
                showProfile: true
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                isIsland: true,
                hasLogo: true,
                logoText: "CookBook",
                showHamburgerMenu: true
            }));
        });

        // ==========================================
        // UEFA BARS PARAMETRIC CREATION
        // ==========================================

        await this.addSection(root, "UEFA Euro 28 Navigation", "A specialized navigation bar recreated for UEFA Euro 28. Using the `top_menu` parametric constructor with targeted nested properties.", async (container) => {
            const wrapperDesktop = figma.createFrame();
            wrapperDesktop.name = "Desktop Wrapper";
            wrapperDesktop.layoutMode = "VERTICAL";
            wrapperDesktop.primaryAxisSizingMode = "AUTO";
            wrapperDesktop.counterAxisSizingMode = "AUTO";
            wrapperDesktop.fills = [];
            wrapperDesktop.appendChild(await tm.create(this.getUEFA28Props("desktop", 1440)));
            container.appendChild(wrapperDesktop);

            const wrapperMobile = figma.createFrame();
            wrapperMobile.name = "Mobile Wrapper";
            wrapperMobile.layoutMode = "VERTICAL";
            wrapperMobile.primaryAxisSizingMode = "AUTO";
            wrapperMobile.counterAxisSizingMode = "AUTO";
            wrapperMobile.fills = [];
            wrapperMobile.appendChild(await tm.create(this.getUEFA28Props("mobile", 375)));
            container.appendChild(wrapperMobile);
        });

        await this.addSection(root, "UEFA Main Navigation", "Standard UEFA wide top navigation bar. Using the `top_menu` parametric constructor with right-side custom injection properties.", async (container) => {
            const wrapperDesktop = figma.createFrame();
            wrapperDesktop.name = "Desktop Wrapper";
            wrapperDesktop.layoutMode = "VERTICAL";
            wrapperDesktop.primaryAxisSizingMode = "AUTO";
            wrapperDesktop.counterAxisSizingMode = "AUTO";
            wrapperDesktop.fills = [];
            wrapperDesktop.appendChild(await tm.create(this.getUEFAMainNavProps("desktop", 1440)));
            container.appendChild(wrapperDesktop);

            const wrapperMobile = figma.createFrame();
            wrapperMobile.name = "Mobile Wrapper";
            wrapperMobile.layoutMode = "VERTICAL";
            wrapperMobile.primaryAxisSizingMode = "AUTO";
            wrapperMobile.counterAxisSizingMode = "AUTO";
            wrapperMobile.fills = [];
            wrapperMobile.appendChild(await tm.create(this.getUEFAMainNavProps("mobile", 375)));
            container.appendChild(wrapperMobile);
        });

        return root;
    }

    protected async addSection(root: FrameNode, title: string, description: string, generator: (container: FrameNode) => Promise<void>) {
        const section = figma.createFrame();
        section.name = `Section - ${title}`;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 24;
        section.paddingLeft = 40;
        section.paddingRight = 40;
        section.paddingTop = 40;
        section.paddingBottom = 40;
        section.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.98 } }];
        section.layoutAlign = "STRETCH";

        const header = figma.createFrame();
        header.name = "Header";
        header.layoutMode = "VERTICAL";
        header.itemSpacing = 8;
        header.primaryAxisSizingMode = "AUTO";
        header.counterAxisSizingMode = "AUTO";
        header.fills = [];

        const titleNode = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        titleNode.fontName = { family: "Inter", style: "Bold" };
        titleNode.characters = title;
        titleNode.fontSize = 24;
        titleNode.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        header.appendChild(titleNode);

        const descNode = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        descNode.fontName = { family: "Inter", style: "Regular" };
        descNode.characters = description;
        descNode.fontSize = 14;
        descNode.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
        descNode.layoutAlign = "STRETCH";
        header.appendChild(descNode);

        section.appendChild(header);

        const componentsContainer = figma.createFrame();
        componentsContainer.name = "Components";
        componentsContainer.layoutMode = "VERTICAL";
        componentsContainer.itemSpacing = 48;
        componentsContainer.fills = [];
        componentsContainer.primaryAxisSizingMode = "AUTO";
        componentsContainer.counterAxisSizingMode = "AUTO";
        componentsContainer.layoutAlign = "STRETCH";

        await generator(componentsContainer);

        section.appendChild(componentsContainer);
        root.appendChild(section);
    }

    private getUEFA28Props(platform: "desktop" | "mobile", fixedWidth: number): TopMenuProps {
        const isMobile = platform === "mobile";
        const width = fixedWidth;
        const height = isMobile ? 56 : 80;
        const paddingLeft = isMobile ? 12 : 24;
        const paddingRight = isMobile ? 12 : 24;
        const paddingTop = isMobile ? 4 : 13;
        const paddingBottom = isMobile ? 4 : 13;
        const logoWidth = isMobile ? 44 : 204;
        const logoHeight = isMobile ? 40 : 24;
        const fontSize = isMobile ? 14 : 16;
        const thirdItemName = isMobile ? "More" : "History";

        const logoContent: NodeDefinition = isMobile ? {
            "type": "FRAME" as const,
            "name": "Link - UEFA EURO 2028",
            "props": { "layoutMode": "VERTICAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER" },
            "layoutProps": { "width": 44, "height": 40, "parentIsAutoLayout": true },
            "children": [
                {
                    "type": "VECTOR" as const,
                    "shouldFlatten": true,
                    "name": "Vector",
                    "props": {},
                    "layoutProps": { "width": 23.70, "height": 40, "parentIsAutoLayout": true },
                    "svgContent": SVG_Mobile_Logo
                }
            ]
        } : {
            "type": "VECTOR" as const,
            "name": "Vector",
            "layoutProps": { "width": 156, "height": 23.99, "parentIsAutoLayout": true },
            "svgContent": SVG_Desktop_Logo
        };

        const navItems = [
            { name: "Video", isSelected: false },
            { name: "News", isSelected: false }
        ];

        const secondNavItems = [
            { name: "About", isSelected: false },
            { name: "Store", isSelected: false }
        ];

        const allNavItems: NodeDefinition[] = [
            ...navItems.map(item => ({
                "type": "FRAME" as const,
                "name": `Menuitem - ${item.name}`,
                "props": {
                    "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "counterAxisSizingMode": "AUTO"
                },
                "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                "children": [{
                    "type": "TEXT" as const,
                    "props": { "characters": item.name, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "Inter", "style": "Regular" } },
                    "layoutProps": { "parentIsAutoLayout": true }
                }]
            } as NodeDefinition)),
            {
                "type": "FRAME" as const,
                "name": "More-History Container",
                "props": {
                    "layoutMode": "HORIZONTAL",
                    "itemSpacing": 8,
                    "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "counterAxisSizingMode": "AUTO"
                },
                "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                "children": [
                    {
                        "type": "TEXT" as const,
                        "props": { "characters": thirdItemName, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "Inter", "style": "Regular" } },
                        "layoutProps": { "parentIsAutoLayout": true }
                    },
                    {
                        "type": "FRAME" as const,
                        "name": "Icon Container",
                        "props": { "layoutMode": "HORIZONTAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER" },
                        "layoutProps": { "width": isMobile ? 24 : 16, "height": isMobile ? 24 : 16, "parentIsAutoLayout": true },
                        "children": [{
                            "type": "VECTOR" as const,
                            "props": {},
                            "layoutProps": {
                                "width": isMobile ? 18.75 : 8.39,
                                "height": isMobile ? 12.5 : 6.21,
                                "parentIsAutoLayout": false,
                                "relativeTransform": isMobile ? [[1, 0, 2.6], [0, 1, 5.75]] : [[1, 0, 4], [0, 1, 5]] as T2x3
                            },
                            "svgContent": isMobile ? SVG_Mobile_Menu_Icon : SVG_Desktop_Icon
                        }]
                    }
                ]
            },
            ...(!isMobile ? secondNavItems.map(item => ({
                "type": "FRAME" as const,
                "name": `Menuitem - ${item.name}`,
                "props": {
                    "layoutMode": "HORIZONTAL" as const, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "cornerRadius": 9999, "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "counterAxisSizingMode": "AUTO"
                },
                "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                "children": [{
                    "type": "TEXT" as const,
                    "props": { "characters": item.name, "fontSize": fontSize, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "Inter", "style": "Regular" } },
                    "layoutProps": { "parentIsAutoLayout": true }
                }]
            } as NodeDefinition)) : [])
        ];

        return {
            layoutType: "fixed",
            width: width,
            hasLogo: true,
            logoAsset: logoContent,
            navItems: allNavItems,
            centerSectionGrow: true,
            centerAlignMode: "SPACE_BETWEEN",
            navItemSpacing: isMobile ? 4 : 24, // spacing between menu items container if they don't grow enough
            sectionSpacing: isMobile ? 12 : 48, // Control gap between left/center sections directly natively
            rootLayoutProps: {
                height: height,
                paddingTop: paddingTop,
                paddingRight: paddingRight,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                fills: [{ "type": "SOLID", "color": { "r": 0, "g": 0.16, "b": 0.77 } }],
                strokes: [], // Remove default stroke
                strokeWeight: 0,
                effects: []
            }
        };
    }

    private getUEFAMainNavProps(platform: "desktop" | "mobile", fixedWidth: number): TopMenuProps {
        const isMobile = platform === "mobile";
        const width = fixedWidth;
        const paddingHorizontal = isMobile ? 16 : 135;

        const builtLogoAsset: NodeDefinition = {
            "type": "FRAME",
            "name": "Logo + Dropdown icon",
            "props": {
                "layoutMode": "HORIZONTAL", "itemSpacing": 4,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "fills": []
            },
            "layoutProps": { "parentIsAutoLayout": true },
            "children": [
                {
                    "type": "VECTOR",
                    "shouldFlatten": true,
                    "name": "UEFA.com",
                    "props": {},
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "width": 74.09954071044922, "height": 12,
                    },
                    "svgContent": SVG_MainNav_Logo
                },
                {
                    "type": "FRAME",
                    "name": "Navigation / dropdown-indicator",
                    "props": {
                        "layoutMode": "NONE",
                        "fills": []
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "width": 20, "height": 20,
                    },
                    "children": [
                        {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Vector",
                            "props": {
                                "x": 6.6448974609375, "y": 8.101704597473145,
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": false,
                                "width": 6.71, "height": 4.96,
                            },
                            "svgContent": SVG_MainNav_Dropdown
                        }
                    ]
                }
            ]
        };

        const rightAreaCustomElements: NodeDefinition[] = [
            {
                "type": "FRAME",
                "name": "pk-button",
                "props": {
                    "layoutMode": "HORIZONTAL", "itemSpacing": isMobile ? 4 : 8,
                    "paddingTop": isMobile ? 8 : 12, "paddingBottom": isMobile ? 8 : 12,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "fills": [],
                    "cornerRadius": 8
                },
                "layoutProps": {
                    "parentIsAutoLayout": true,
                    "height": 40,
                },
                "children": [
                    {
                        "type": "FRAME",
                        "name": "Leading icon",
                        "props": {
                            "layoutMode": "NONE",
                            "fills": []
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": true,
                            "width": 24, "height": 24,
                        },
                        "children": [
                            {
                                "type": "VECTOR",
                                "shouldFlatten": true,
                                "name": "Vector",
                                "props": {
                                    "x": 1, "y": 1,
                                },
                                "layoutProps": {
                                    "parentIsAutoLayout": false,
                                    "width": 22, "height": 22,
                                },
                                "svgContent": SVG_MainNav_Login
                            }
                        ]
                    },
                    ...(!isMobile ? [{
                        "type": "TEXT" as const,
                        "name": "Label",
                        "props": {
                            "characters": "Login", "fontSize": 16,
                            "fills": [
                                {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                }
                            ],
                            "font": { "family": "Inter", "style": "Semi Bold" }
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": true,
                        }
                    }] : [])
                ]
            },
            {
                "type": "LINE",
                "name": "pk-divider",
                "props": {
                    "strokeWeight": 1, "strokeAlign": "CENTER",
                    "strokes": [
                        {
                            "visible": true, "opacity": 0.25, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 1, "g": 1, "b": 1 },
                            "boundVariables": {}
                        }
                    ],
                },
                "layoutProps": {
                    "parentIsAutoLayout": true,
                    "width": 1, "height": 24, // vertical divider actually
                }
            },
            {
                "type": "FRAME",
                "name": "pk-button-search",
                "props": {
                    "layoutMode": "NONE",
                    "fills": [],
                    "cornerRadius": 58
                },
                "layoutProps": {
                    "parentIsAutoLayout": true,
                    "width": 24, "height": 24,
                },
                "children": [
                    {
                        "type": "FRAME",
                        "name": "Icon",
                        "props": {
                            "x": 3, "y": 3,
                            "layoutMode": "NONE",
                            "fills": []
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": false,
                            "width": 18, "height": 18,
                        },
                        "children": [
                            {
                                "type": "VECTOR",
                                "shouldFlatten": true,
                                "name": "Vector",
                                "props": {
                                    "x": 2.25, "y": 2.25,
                                },
                                "layoutProps": {
                                    "parentIsAutoLayout": false,
                                    "width": 12.8, "height": 12.8,
                                },
                                "svgContent": SVG_MainNav_Search
                            }
                        ]
                    }
                ]
            }
        ];

        return {
            layoutType: "fixed",
            width: width,
            hasLogo: true,
            logoAsset: builtLogoAsset,
            customRightElements: rightAreaCustomElements, // Inject before actions
            sectionSpacing: "auto", // Automatically space between the left and right sections since center is missing
            rootLayoutProps: {
                height: 40,
                paddingTop: 0,
                paddingRight: paddingHorizontal,
                paddingBottom: 0,
                paddingLeft: paddingHorizontal,
                fills: [
                    {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.0117647061124444, "g": 0.0117647061124444, "b": 0.10980392247438431 },
                        "boundVariables": {}
                    }
                ],
                strokes: [], // Remove default stroke
                strokeWeight: 0,
                effects: []
            }
        };
    }
}


