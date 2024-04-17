import { defineUserConfig } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Node.js Docs",
  description: "A docs demo for vuepress-theme-hope",

  theme,

  plugins: [
    searchPlugin({
      // options
    }),
    mdEnhancePlugin({
      // your options
      hint: true,
      alert: true,
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
