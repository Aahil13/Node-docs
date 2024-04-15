import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Get Started",
      icon: "lightbulb",
      prefix: "demo/",
      link: "get-started/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "docs/",
      link: "docs/",
    },
  ],
});
