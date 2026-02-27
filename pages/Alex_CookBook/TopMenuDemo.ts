import { ComponentProps } from "../../components/BaseComponent";
import { top_menu } from "../../components/Alex_CookBook/top_menu/top_menu";
import { BaseDemoPage } from "./BaseDemoPage";

// Assets
import SVG_Desktop_Logo from "../../components/Alex_CookBook/top_menu/assets/euro_28_desktop_logo.svg";
import SVG_Mobile_Logo from "../../components/Alex_CookBook/top_menu/assets/euro_28_mobile_logo.svg";
import SVG_Mobile_Menu_Icon from "../../components/Alex_CookBook/top_menu/assets/euro_28_mobile_menu.svg";
import SVG_MainNav_Logo from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_logo.svg";
import SVG_MainNav_Login from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_login.svg";
import SVG_MainNav_Search from "../../components/Alex_CookBook/top_menu/assets/uefa_main_nav_search.svg";

const MAIN_NAV_DIVIDER_SVG = `<svg width="1" height="24" viewBox="0 0 1 24" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0" x2="0.5" y2="24" stroke="white" stroke-opacity="0.25"/></svg>`;

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
                sectionSpacing: "auto",
                showProfile: true,
                showNotifications: true
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                sectionSpacing: "auto",
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
                sectionSpacing: "auto",
                centerSectionGrow: false,
                showSearchAction: true,
                showNotifications: true,
                showProfile: true
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                navItems: customNavItems,
                sectionSpacing: "auto",
                centerSectionGrow: false,
                showSearchAction: true,
                showNotifications: true,
                showProfile: true
            }));
        });

        // --- Search Top Bars ---
        await this.addSection(root, "Search & Utility Headers", "Includes search bars for deep exploration.", async (container) => {
            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                showSearchInCenter: true,
                sectionSpacing: "auto",
                centerSectionGrow: false,
                searchCornerRadius: 100,
                showNotifications: true,
                showProfile: true
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                hasLogo: true,
                logoText: "CookBook",
                navItems: ["Dashboard", "Projects", "Team", "Settings"],
                showSearchInCenter: true,
                searchCornerRadius: 8,
                searchFullMode: true,
                sectionSpacing: 48,
                centerSectionGrow: true,
                showNotifications: true,
                showProfile: true
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
                sectionSpacing: 24,
                centerSectionGrow: true,
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
                sectionSpacing: "auto",
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
                sectionSpacing: 24,
                centerSectionGrow: true,
                showSearchAction: true,
                showNotifications: true,
                showProfile: true
            }));

            container.appendChild(await tm.create({
                layoutType: "fill",
                isIsland: true,
                hasLogo: true,
                logoText: "CookBook",
                sectionSpacing: "auto",
                showHamburgerMenu: true
            }));
        });

        // ==========================================
        // UEFA BARS PARAMETRIC CREATION
        // ==========================================

        await this.addSection(root, "UEFA Euro 28 Navigation", "A specialized navigation bar recreated for UEFA Euro 28. Using the `top_menu` parametric constructor with targeted nested properties.", async (container) => {
            container.appendChild(await this.wrapWithCaption(
                await tm.create({
                    layoutType: "fixed",
                    width: 1440,
                    hasLogo: true,
                    logoAsset: SVG_Desktop_Logo,
                    navItems: ["Video", "News", "History", "About", "Store"].map((name) => ({ name, isSelected: true })),
                    navFont: "UEFA Euro Pro",
                    navFontSize: 16,
                    navFontWeight: "Book",
                    textColor: { r: 1, g: 1, b: 1 },
                    iconColor: { r: 1, g: 1, b: 1 },
                    centerSectionGrow: true,
                    centerAlignMode: "SPACE_BETWEEN",
                    navItemSpacing: 24,
                    sectionSpacing: 48,
                    main_body: {
                        height: 80,
                        paddingTop: 13,
                        paddingRight: 135,
                        paddingBottom: 13,
                        paddingLeft: 135,
                        fills: [{ "type": "SOLID", "color": { "r": 0, "g": 0.16, "b": 0.77 } }],
                        strokes: [],
                        strokeWeight: 0,
                        effects: []
                    }
                }),
                "Desktop"
            ));
            container.appendChild(await this.wrapWithCaption(
                await tm.create({
                    layoutType: "fixed",
                    width: 375,
                    hasLogo: true,
                    logoAsset: SVG_Mobile_Logo,
                    logoWidth: 23.7,
                    logoHeight: 40,
                    logoContainerWidth: 44,
                    logoContainerHeight: 40,
                    logoContainerLayout: "VERTICAL",
                    navItems: [
                        { text: "Video", paddingLeft: 8, paddingRight: 8, grow: true },
                        { text: "News", paddingLeft: 8, paddingRight: 8, grow: true },
                        {
                            text: "More",
                            image: SVG_Mobile_Menu_Icon,
                            imageWidth: 18.75,
                            imageHeight: 12.5,
                            iconPosition: "right",
                            paddingLeft: 8,
                            paddingRight: 8,
                            gap: 8,
                            grow: true
                        }
                    ],
                    navFont: "UEFA Euro Pro",
                    navFontSize: 14,
                    navFontWeight: "Book",
                    textColor: { r: 1, g: 1, b: 1 },
                    iconColor: { r: 1, g: 1, b: 1 },
                    centerSectionGrow: true,
                    centerAlignMode: "SPACE_BETWEEN",
                    navItemSpacing: 0,
                    sectionSpacing: 12,
                    main_body: {
                        height: 56,
                        paddingTop: 4,
                        paddingRight: 12,
                        paddingBottom: 4,
                        paddingLeft: 12,
                        fills: [{ "type": "SOLID", "color": { "r": 0, "g": 0.16, "b": 0.77 } }],
                        strokes: [],
                        strokeWeight: 0,
                        effects: []
                    }
                }),
                "Mobile"
            ));
        });

        await this.addSection(root, "UEFA Main Navigation", "Standard UEFA wide top navigation bar. Using the `top_menu` parametric constructor with right-side custom injection properties.", async (container) => {
            container.appendChild(await this.wrapWithCaption(
                await tm.create({
                    layoutType: "fixed",
                    width: 1440,
                    hasLogo: true,
                    logoAsset: SVG_MainNav_Logo,
                    customRightItems: [
                        { space: 12, name: "Leading pad" },
                        { image: SVG_MainNav_Login, width: 22, height: 22, name: "Login Icon" },
                        { text: "Login", fontFamily: "Manrope", fontStyle: "SemiBold", fontSize: 16, textColor: { r: 1, g: 1, b: 1 }, name: "Login" },
                        { image: MAIN_NAV_DIVIDER_SVG, width: 1, height: 24, name: "Divider" },
                        { image: SVG_MainNav_Search, width: 12.8, height: 12.8, name: "Search Icon" }
                    ],
                    sectionSpacing: "auto",
                    textColor: { r: 1, g: 1, b: 1 },
                    iconColor: { r: 1, g: 1, b: 1 },
                    main_body: {
                        height: 40,
                        paddingTop: 12,
                        paddingRight: 135,
                        paddingBottom: 12,
                        paddingLeft: 135,
                        fills: [{ "type": "SOLID", "color": { "r": 0.0117647061124444, "g": 0.0117647061124444, "b": 0.10980392247438431 } }],
                        strokes: [],
                        strokeWeight: 0,
                        effects: []
                    }
                }),
                "Desktop"
            ));
            container.appendChild(await this.wrapWithCaption(
                await tm.create({
                    layoutType: "fixed",
                    width: 375,
                    hasLogo: true,
                    logoAsset: SVG_MainNav_Logo,
                    customRightItems: [
                        { space: 12, name: "Leading pad" },
                        { image: SVG_MainNav_Login, width: 22, height: 22, name: "Login Icon" },
                        { image: MAIN_NAV_DIVIDER_SVG, width: 1, height: 24, name: "Divider" },
                        { image: SVG_MainNav_Search, width: 12.8, height: 12.8, name: "Search Icon" }
                    ],
                    sectionSpacing: "auto",
                    textColor: { r: 1, g: 1, b: 1 },
                    iconColor: { r: 1, g: 1, b: 1 },
                    main_body: {
                        height: 40,
                        paddingTop: 12,
                        paddingRight: 16,
                        paddingBottom: 12,
                        paddingLeft: 16,
                        fills: [{ "type": "SOLID", "color": { "r": 0.0117647061124444, "g": 0.0117647061124444, "b": 0.10980392247438431 } }],
                        strokes: [],
                        strokeWeight: 0,
                        effects: []
                    }
                }),
                "Mobile"
            ));
        });

        return root;
    }
}
