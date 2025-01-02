import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://notebook.knowojas.com", // replace this with your deployed domain
  author: "ojas",
  profile: "https://knowojas.com/",
  desc: "Welcome to mon cahier digital on the Internet. Find random thoughts of mine.",
  title: "Mon-Cahier",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/0jas0jas/mon-cahier/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/0jas0jas/mon-cahier",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ojas1807@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
