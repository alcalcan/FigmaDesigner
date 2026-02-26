import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { AffinityMap, AffinityMapModel } from "../../components/Alex_CookBook/miscellaneous/AffinityMap";
import { FlowDiagram, FlowDiagramModel } from "../../components/Alex_CookBook/miscellaneous/FlowDiagram";
import { DecisionMap, DecisionMapModel } from "../../components/Alex_CookBook/miscellaneous/DecisionMap";
import { SiteArchitecture, SiteArchitectureModel } from "../../components/Alex_CookBook/miscellaneous/SiteArchitecture";

export class UserExperienceDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("UX Components & Flow Demo", 1920);

        await this.addHeader(
            root,
            "User Experience Architecture",
            "A collection of components that help define and visualize user journeys, site structure, and complex decision flows."
        );

        await this.addSection(
            root,
            "Affinity Map",
            "Use this component to visualize groupings of user feedback, research insights, or brainstorming notes.",
            async (container) => {
                const affinityMap = new AffinityMap();
                const affinityModel: AffinityMapModel = {
                    clusters: [
                        AffinityMap.cluster("pain", "User Pain Points", [
                            AffinityMap.note("pain-1", "Checkout Friction", "Multi-step checkout feels too long."),
                            AffinityMap.note("pain-2", "Form Errors", "Validation appears too late."),
                            AffinityMap.note("pain-3", "Guest Drop-off", "Users abandon at account creation.")
                        ], { noteColor: { r: 1.0, g: 0.95, b: 0.6 } }),
                        AffinityMap.cluster("feature", "Feature Requests", [
                            AffinityMap.note("feature-1", "Save Cart", "Keep cart across sessions."),
                            AffinityMap.note("feature-2", "One-click Pay", "Reduce checkout friction."),
                            AffinityMap.note("feature-3", "Address Book", "Store multiple shipping profiles.")
                        ], { noteColor: { r: 0.7, g: 0.9, b: 0.95 } }),
                        AffinityMap.cluster("quality", "Quality Issues", [
                            AffinityMap.note("quality-1", "Broken Coupon", "Code validation fails for valid users."),
                            AffinityMap.note("quality-2", "Timeout Retry", "Payment timeout lacks guided retry.")
                        ], { noteColor: { r: 0.95, g: 0.75, b: 0.75 } })
                    ],
                    relations: [
                        AffinityMap.relation("pain-1", "feature-1"),
                        AffinityMap.relation("quality-1", "feature-3")
                    ]
                };

                const node = await affinityMap.create({ model: affinityModel, notesGridWidth: 300 });
                const wrapped = await this.wrapWithCaption(node, "1. Affinity / Concept Grouping", "AffinityMapWrapper", true);
                container.appendChild(wrapped);
            },
            { padding: 48 }
        );

        await this.addSection(
            root,
            "User Flow Diagram",
            "This component demonstrates a sequential journey a user takes through the application.",
            async (container) => {
                const flowDiagram = new FlowDiagram();
                const flowModel: FlowDiagramModel = {
                    nodes: [
                        FlowDiagram.node("home", "Homepage", { desc: "Entry point", row: 0, column: 0, color: { r: 0.2, g: 0.6, b: 0.9 } }),
                        FlowDiagram.node("product", "Product", { desc: "Item details", row: 0, column: 1, color: { r: 0.6, g: 0.4, b: 0.8 } }),
                        FlowDiagram.node("cart", "Cart", { desc: "Review basket", row: 0, column: 2, color: { r: 0.9, g: 0.5, b: 0.2 } }),
                        FlowDiagram.node("checkout", "Checkout", { desc: "Complete order", row: 0, column: 4, color: { r: 0.2, g: 0.7, b: 0.4 } }),
                        FlowDiagram.node("saved", "Save For Later", { desc: "Cart stored", row: 1, column: 2, color: { r: 0.95, g: 0.65, b: 0.25 } }),
                        FlowDiagram.node("assist", "Assisted Checkout", { desc: "Agent support", row: 1, column: 4, color: { r: 0.85, g: 0.45, b: 0.45 } })
                    ],
                    connectors: [
                        FlowDiagram.connector("home", "product"),
                        FlowDiagram.connector("product", "cart"),
                        FlowDiagram.connector("cart", "checkout"),
                        FlowDiagram.connector("cart", "saved", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        FlowDiagram.connector("saved", "checkout", { fromAnchor: "right", toAnchor: "left", lane: "right", toOffset: 20 }),
                        FlowDiagram.connector("checkout", "assist", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" })
                    ]
                };

                const node = await flowDiagram.create({ model: flowModel, rowGap: 72, columnGap: 24 });
                const wrapped = await this.wrapWithCaption(node, "2. User Flow with Downward Branches", "FlowDiagramWrapper", true);
                container.appendChild(wrapped);

                const flowModel2: FlowDiagramModel = {
                    nodes: [
                        FlowDiagram.node("landing", "Landing Page", { desc: "Initial view", row: 0, column: 0, color: { r: 0.1, g: 0.5, b: 0.8 } }),
                        FlowDiagram.node("signup", "Sign Up", { desc: "New user registration", row: 0, column: 1, color: { r: 0.5, g: 0.3, b: 0.7 } }),
                        FlowDiagram.node("onboarding", "Onboarding", { desc: "Feature discovery", row: 0, column: 2, color: { r: 0.8, g: 0.4, b: 0.2 } }),
                        FlowDiagram.node("dashboard", "Dashboard", { desc: "Main landing", row: 0, column: 3, color: { r: 0.1, g: 0.6, b: 0.3 } }),
                        FlowDiagram.node("login", "Login", { desc: "Returning user", row: 1, column: 0, color: { r: 0.4, g: 0.4, b: 0.4 } })
                    ],
                    connectors: [
                        FlowDiagram.connector("landing", "signup"),
                        FlowDiagram.connector("signup", "onboarding"),
                        FlowDiagram.connector("onboarding", "dashboard"),
                        FlowDiagram.connector("landing", "login", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        FlowDiagram.connector("login", "dashboard", { fromAnchor: "right", toAnchor: "bottom", lane: "right" })
                    ]
                };

                const node2 = await flowDiagram.create({ model: flowModel2, rowGap: 80, columnGap: 32 });
                const wrapped2 = await this.wrapWithCaption(node2, "2b. User Onboarding & Authentication Flow", "FlowDiagramWrapper2", true);
                container.appendChild(wrapped2);
            },
            { padding: 48 }
        );

        await this.addSection(
            root,
            "Decision Map",
            "A branching logic structure useful for mapping out logic and routing within the application.",
            async (container) => {
                const row = this.createRow(container, 48);

                const decisionMap = new DecisionMap();
                const baseModel: DecisionMapModel = {
                    root: { id: "root", question: "Logged in?" },
                    branches: [
                        DecisionMap.branch(
                            "yes",
                            "Yes",
                            [
                                DecisionMap.step("go-dashboard", "Go to Dashboard"),
                                DecisionMap.step("view-profile", "View Profile")
                            ],
                            { labelColor: { r: 0.2, g: 0.7, b: 0.4 } }
                        ),
                        DecisionMap.branch(
                            "no",
                            "No",
                            [
                                DecisionMap.step("redirect-login", "Redirect to Login"),
                                DecisionMap.step("reset-password", "Reset Password Flow"),
                                DecisionMap.step("verify-token", "Verify Login Token")
                            ],
                            { labelColor: { r: 0.9, g: 0.3, b: 0.3 } }
                        )
                    ]
                };

                const defaultNode = await decisionMap.create({
                    model: {
                        ...baseModel,
                        connectors: [
                            DecisionMap.connector("verify-token", "root", {
                                fromAnchor: "right",
                                toAnchor: "right",
                                lane: "right",
                                arrowAt: "end"
                            })
                        ]
                    }
                });
                const defaultWrapped = await this.wrapWithCaption(defaultNode, "3. Binary Logic Branching", "DecisionMapWrapper");

                const turnUpNode = await decisionMap.create({
                    model: {
                        ...baseModel,
                        connectors: [
                            DecisionMap.connector("verify-token", "redirect-login", {
                                fromAnchor: "right",
                                toAnchor: "right",
                                lane: "right",
                                arrowAt: "end"
                            })
                        ]
                    }
                });
                const turnUpWrapped = await this.wrapWithCaption(
                    turnUpNode,
                    "3b. Turn-Up Connector (Returns to Earlier Step)",
                    "DecisionMapTurnUpWrapper"
                );

                row.appendChild(defaultWrapped);
                row.appendChild(turnUpWrapped);
            },
            { padding: 48 }
        );

        await this.addSection(
            root,
            "Site Architecture",
            "A structural view of the application's page hierarchy.",
            async (container) => {
                const row = this.createRow(container, 48);
                const siteArchitecture = new SiteArchitecture();
                const siteModel: SiteArchitectureModel = {
                    nodes: [
                        SiteArchitecture.node("home", "Home (Index)", { style: "root", level: 0, column: 2, width: 170 }),
                        SiteArchitecture.node("about", "About Us", { level: 1, column: 0, width: 140 }),
                        SiteArchitecture.node("services", "Services", { level: 1, column: 2, width: 140 }),
                        SiteArchitecture.node("contact", "Contact", { level: 1, column: 4, width: 140 }),
                        SiteArchitecture.node("pricing", "Pricing", { level: 2, column: 0, width: 140 }),
                        SiteArchitecture.node("consulting", "Consulting", { level: 2, column: 2, width: 140 }),
                        SiteArchitecture.node("integration", "Integration", { level: 2, column: 3, width: 140 }),
                        SiteArchitecture.node("support", "Support", { level: 2, column: 4, width: 140 })
                    ],
                    connectors: [
                        SiteArchitecture.connector("home", "about", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        SiteArchitecture.connector("home", "services", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        SiteArchitecture.connector("home", "contact", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        SiteArchitecture.connector("about", "pricing", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        SiteArchitecture.connector("services", "consulting", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        SiteArchitecture.connector("services", "integration", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" }),
                        SiteArchitecture.connector("contact", "support", { fromAnchor: "bottom", toAnchor: "top", lane: "bottom" })
                    ]
                };

                const node = await siteArchitecture.create({ model: siteModel, levelGap: 72 });
                const wrapped = await this.wrapWithCaption(node, "4. Multi-Level Site Graph", "SiteArchitectureWrapper");
                row.appendChild(wrapped);
            }
        );

        return root;
    }
}
