import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { checkbox } from "../../Alex_CookBook/checkbox/checkbox";
import { input_field } from "../../Alex_CookBook/input_field/input_field";
import { LibraryPageTitle } from "../Page_title/LibraryPageTitle";
import { LibraryNotificationSection } from "../Notification_section/LibraryNotificationSection";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";

const SUBJECT_OPTIONS = [
  { label: "Anti-Doping, Medical and Health", checked: false },
  { label: "Communities", checked: false },
  { label: "Financial Sustainability", checked: false },
  { label: "Football Leadership and Management", checked: false },
  { label: "Innovation, Data and AI", checked: false },
  { label: "Institutional Affairs", checked: false },
  { label: "Legal and Compliance", checked: false },
  { label: "Marketing and Sponsorship", checked: false },
  { label: "PI", checked: false },
  { label: "Technical and Performance", checked: false }
];

export class LibraryNotificationBody extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = figma.createFrame();
    root.name = "LibraryNotificationBody";
    root.layoutMode = "VERTICAL";
    root.primaryAxisSizingMode = "AUTO";
    root.counterAxisSizingMode = "FIXED";
    root.counterAxisAlignItems = "CENTER";
    root.itemSpacing = 0;
    root.fills = [];
    root.resize(1680, 100);

    const content = figma.createFrame();
    content.name = "NotificationBodyContent";
    content.layoutMode = "VERTICAL";
    content.primaryAxisSizingMode = "AUTO";
    content.counterAxisSizingMode = "FIXED";
    content.counterAxisAlignItems = "MIN";
    content.itemSpacing = 24;
    content.paddingTop = 0;
    content.paddingRight = 0;
    content.paddingBottom = 56;
    content.paddingLeft = 0;
    content.fills = [];
    content.resize(1440, 100);

    const titleBar = await new LibraryPageTitle().create({
      variant: "notification",
      title: "Notification preferences",
      subtitle: "Choose what you want to receive updates about",
      width: 1440,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0
    });
    titleBar.name = "NotificationTitleBar";

    const divider = figma.createRectangle();
    divider.name = "NotificationDivider";
    divider.resize(1440, 1);
    divider.fills = [{
      type: "SOLID",
      color: { r: 0.8901960849761963, g: 0.9098039269447327, b: 0.9176470637321472 }
    }];
    divider.strokes = [];

    const subjectSection = await new LibraryNotificationSection().create({
      title: "Subject",
      expanded: true,
      selectedLabel: "Subjects",
      selectedCount: 0,
      showChevronButton: true,
      options: SUBJECT_OPTIONS
    });
    subjectSection.name = "SubjectNotificationSection";

    const organisationsSection = await new LibraryNotificationSection().create({
      title: "Organisations",
      expanded: false,
      selectedLabel: "Organisations",
      selectedCount: 0,
      showChevronButton: true
    });
    organisationsSection.name = "OrganisationsNotificationSection";

    const uploadedBySection = await new LibraryNotificationSection().create({
      title: "Uploaded by",
      expanded: false,
      selectedLabel: "Uploaders",
      selectedCount: 0,
      showChevronButton: true
    });
    uploadedBySection.name = "UploadedByNotificationSection";

    const programsSection = await new LibraryNotificationSection().create({
      title: "My programs",
      expanded: false,
      selectedLabel: "Programs",
      selectedCount: 0,
      showChevronButton: true
    });
    programsSection.name = "ProgramsNotificationSection";

    const footerDivider = figma.createRectangle();
    footerDivider.name = "NotificationFooterDivider";
    footerDivider.resize(1440, 1);
    footerDivider.fills = [{
      type: "SOLID",
      color: { r: 0.8901960849761963, g: 0.9098039269447327, b: 0.9176470637321472 }
    }];
    footerDivider.strokes = [];

    const bottomBar = figma.createFrame();
    bottomBar.name = "NotificationBottomBar";
    bottomBar.layoutMode = "VERTICAL";
    bottomBar.primaryAxisSizingMode = "AUTO";
    bottomBar.counterAxisSizingMode = "AUTO";
    bottomBar.counterAxisAlignItems = "MIN";
    bottomBar.itemSpacing = 12;
    bottomBar.paddingTop = 8;
    bottomBar.fills = [];

    const emailInput = await new input_field().create({
      type: "simple",
      width: 320,
      placeholder: "Your email address",
      cornerRadius: 2,
      state: "default"
    });
    emailInput.name = "NotificationEmailInput";

    const emailToggle = await new checkbox().create({
      characterOverride: "Notify me on email",
      checked: true,
      hugContents: true,
      paddingLeft: 0,
      strokeTopWeight: 0,
      strokeRightWeight: 0,
      strokeBottomWeight: 0,
      strokeLeftWeight: 0
    });
    emailToggle.name = "NotificationEmailToggle";

    bottomBar.appendChild(emailInput);
    bottomBar.appendChild(emailToggle);

    content.appendChild(titleBar);
    content.appendChild(divider);
    content.appendChild(subjectSection);
    content.appendChild(organisationsSection);
    content.appendChild(uploadedBySection);
    content.appendChild(programsSection);
    content.appendChild(footerDivider);
    content.appendChild(bottomBar);

    root.appendChild(content);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}
