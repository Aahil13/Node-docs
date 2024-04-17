import comp from "/Users/mac/Desktop/My docs/web dev/node-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"Home\",\"image\":\"/assets/image/layout.svg\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/4-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/4-dark.svg\",\"heroFullScreen\":true,\"heroImage\":\"/assets/icon/node.png\",\"heroText\":\"Node.Js\",\"tagline\":\"A comprehensive companion for understanding JavaScript's runtime environment ⚡️\",\"actions\":[{\"text\":\"Get started\",\"icon\":\"lightbulb\",\"link\":\"./get-started/\",\"type\":\"primary\"},{\"text\":\"Docs\",\"link\":\"./docs/\",\"icon\":\"book\"}],\"footer\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Node.js Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Aahil\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Home\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.18,\"words\":55},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
