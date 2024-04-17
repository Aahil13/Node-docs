import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "/Users/mac/Desktop/My docs/web dev/node-docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/mac/Desktop/My docs/web dev/node-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
