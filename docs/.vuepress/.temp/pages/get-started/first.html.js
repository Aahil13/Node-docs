import comp from "/Users/mac/Desktop/My docs/web dev/node-docs/src/.vuepress/.temp/pages/get-started/first.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/first.html\",\"title\":\"Quick start\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Quick start\",\"index\":true,\"icon\":\"lightbulb\",\"category\":[\"Getting started\"],\"footer\":null,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/get-started/first.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Node.js Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Quick start\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Aahil\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Quick start\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Aahil\\\",\\\"url\\\":\\\"https://linktr.ee/thecr3ator\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"get-started/first.md\"}")
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
