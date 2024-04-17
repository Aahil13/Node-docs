import comp from "/Users/mac/Desktop/My docs/web dev/node-docs/src/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Guide\",\"icon\":\"lightbulb\",\"description\":\"Highlight Features Bar ... Foo ...\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Highlight Features\",\"slug\":\"highlight-features\",\"link\":\"#highlight-features\",\"children\":[{\"level\":3,\"title\":\"Bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]},{\"level\":3,\"title\":\"Foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"guide/README.md\",\"autoDesc\":true}")
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
