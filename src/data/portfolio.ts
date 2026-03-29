export type FileEntry = {
  id: string;
  name: string;
  kind: "text" | "link" | "list";
  content: string;
  href?: string;
  items?: string[];
};

export type FolderEntry = {
  id: string;
  name: string;
  files: FileEntry[];
};

export const profile = {
  displayName: "Aarogya Raj Katwal",
  tagline: "UI/UX · Front-end knowledge",
};

export const desktopFolders: FolderEntry[] = [
  {
    id: "about",
    name: "About Me",
    files: [
      {
        id: "about-readme",
        name: "readme.txt",
        kind: "text",
        content:
          "Aarogya Raj Katwal\n" +
          "UI/UX Designer with front-end knowledge · Kadaghari, Kathmandu\n\n" +
          "Creative and detail-oriented UI/UX designer with hands-on experience in Figma and " +
          "a strong grasp of front-end principles. Skilled in designing clean, user-centered, " +
          "and development-ready interfaces. Passionate about solving real problems through " +
          "modern design and continuous learning. I thrive in team environments and " +
          "cross-functional collaboration to build impactful digital experiences.",
      },
      {
        id: "about-location",
        name: "location & phone.txt",
        kind: "text",
        content:
          "Kadaghari, Kathmandu, Nepal\n" +
          "Phone: +977 9803573139",
      },
      {
        id: "about-contact",
        name: "email.url",
        kind: "link",
        content: "aarogyarajkatwal@gmail.com",
        href: "mailto:aarogyarajkatwal@gmail.com",
      },
      {
        id: "about-linkedin",
        name: "LinkedIn.url",
        kind: "link",
        content: "linkedin.com/in/aarogya-raj-katwal",
        href: "https://www.linkedin.com/in/aarogya-raj-katwal",
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    files: [
      {
        id: "proj-restaurant",
        name: "Restaurant landing page.txt",
        kind: "text",
        content:
          "Restaurant landing page (web & mobile)\n\n" +
          "Responsive UI/UX landing page for a restaurant, optimized for mobile and desktop. " +
          "Includes a friendly interface for trending menus and a gallery to improve the customer experience.",
      },
      {
        id: "proj-restaurant-figma",
        name: "Restaurant — Figma.url",
        kind: "link",
        content: "Open in Figma",
        href: "https://www.figma.com/design/47t1qMXniVOp7yT9aqH7on/Projects?node-id=288-1264&t=bsW90yAnwcJpM0DB-1",
      },
      {
        id: "proj-botanical",
        name: "Botanical Garden UI.txt",
        kind: "text",
        content:
          "Mobile UI design for a Botanical Garden platform — blending style and functionality for an easy, user-friendly experience.",
      },
      {
        id: "proj-botanical-drive",
        name: "Botanical Garden — Drive.url",
        kind: "link",
        content: "Google Drive folder",
        href: "https://drive.google.com/drive/folders/1yuojNiEGH0sCjLTMutcuOsMi8yC25Ovv?usp=sharing",
      },
      {
        id: "proj-management",
        name: "Management System landing.txt",
        kind: "text",
        content:
          "Landing page for a management system (web & mobile).\n\n" +
          "Focus on intuitive navigation so users can manage tasks, access resources, and monitor performance from any device.",
      },
      {
        id: "proj-management-figma",
        name: "Management System — Figma.url",
        kind: "link",
        content: "Open in Figma",
        href: "https://www.figma.com/design/47t1qMXniVOp7yT9aqH7on/Projects?node-id=288-1264&t=bsW90yAnwcJpM0DB-1",
      },
      {
        id: "proj-foodapp",
        name: "Food App.txt",
        kind: "text",
        content:
          "Food App — UI/UX work in Figma (see linked file for the design).",
      },
      {
        id: "proj-foodapp-figma",
        name: "Food App — Figma.url",
        kind: "link",
        content: "Open in Figma",
        href: "https://www.figma.com/design/47t1qMXniVOp7yT9aqH7on/Projects?node-id=534-5362&t=5x2KmaSa5hNVvNva-1",
      },
    ],
  },
  {
    id: "experience",
    name: "Experience",
    files: [
      {
        id: "exp-timeline",
        name: "work_history.txt",
        kind: "list",
        content: "",
        items: [
          "Feb 2025 — Mar 2025 · UX Engineer · Techgaun, Kathmandu",
          "Oct 2024 — Feb 2025 · UI/UX Designer · IMS Software, Kathmandu",
          "Jun 2024 — Oct 2024 · UI/UX Designer · Logispark Technologies Pvt. Ltd., Kathmandu",
          "Sep 2023 — Jun 2024 · UI/UX Designer (Freelance) · Kathmandu",
        ],
      },
      {
        id: "exp-techgaun",
        name: "Techgaun — notes.txt",
        kind: "text",
        content:
          "UX Engineer — crafted intuitive, user-centered web and mobile interfaces; worked with " +
          "cross-functional teams on usability, accessibility, and engagement; bridged aesthetics with functionality.",
      },
      {
        id: "exp-ims",
        name: "IMS Software — notes.txt",
        kind: "text",
        content:
          "Designed intuitive web and mobile interfaces for an IT solutions company; collaborated with " +
          "cross-functional teams; focused on usability, accessibility, and modern design principles.",
      },
      {
        id: "exp-logispark",
        name: "Logispark — notes.txt",
        kind: "text",
        content:
          "User-centric designs for web and mobile; real-world projects and prototypes with teams; " +
          "strengthened user research, wireframing, Figma, and Flutter Flow.",
      },
      {
        id: "exp-freelance",
        name: "Freelance — notes.txt",
        kind: "text",
        content:
          "User-centered designs for web and mobile; user research, wireframing, and prototyping in Figma; " +
          "clear handoff to development teams.",
      },
      {
        id: "exp-education",
        name: "education.txt",
        kind: "text",
        content:
          "BSc (Hons) Computing — Islington College, Kathmandu\n" +
          "Aug 2022 — Mar 2025\n\n" +
          "Three-year IT programme covering programming languages, information systems, software and hardware, " +
          "databases, and application development at the final level.",
      },
    ],
  },
  {
    id: "skills",
    name: "Skills",
    files: [
      {
        id: "skills-stack",
        name: "design & ux.txt",
        kind: "list",
        content: "",
        items: [
          "UI/UX design · User research",
          "Wireframing · Prototyping",
          "Figma · Flutter Flow",
          "Responsive web & mobile interfaces",
          "Design systems · Developer handoff",
          "Usability · Accessibility",
        ],
      },
      {
        id: "skills-frontend",
        name: "front-end.txt",
        kind: "text",
        content:
          "Strong grasp of front-end principles so designs are practical and development-ready.",
      },
      {
        id: "skills-aws",
        name: "training — AWS.txt",
        kind: "list",
        content: "",
        items: [
          "AWS Academy Graduate — Machine Learning for NLP (2023)",
          "AWS Academy Graduate — Cloud Foundations (2023)",
          "AWS Academy Graduate — Data Engineering (2023)",
          "AWS Academy Graduate — Machine Learning (2023)",
        ],
      },
      {
        id: "skills-lang",
        name: "languages.txt",
        kind: "text",
        content: "Nepali · English · Hindi",
      },
      {
        id: "skills-awards",
        name: "awards.txt",
        kind: "list",
        content: "",
        items: [
          "The Bronze Standard — Duke of Edinburgh's International Award — Aksharaa School (2020)",
          "3DI School New Zealand — Digital Media & Life Skills — 3DI School (2019)",
        ],
      },
    ],
  },
];
