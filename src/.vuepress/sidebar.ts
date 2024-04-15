import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Get Started",
      icon: "lightbulb",
      prefix: "get-started/",
      link: "get-started/",
      children: ["installation.md", "quick-start.md", "what-is-nodejs.md"],
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
  ],
});
