import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/get-started/",
  {
    text: "Docs",
    icon: "book",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "book",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "book",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  }
]);
