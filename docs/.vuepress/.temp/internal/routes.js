export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/index.html.js"), meta: {"t":"Docs","i":"book"} }],
  ["/get-started/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/get-started/index.html.js"), meta: {"t":"Get started","i":"lightbulb"} }],
  ["/get-started/installation.html", { loader: () => import(/* webpackChunkName: "installation.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/get-started/installation.html.js"), meta: {"t":"Installation guide","i":"screwdriver-wrench"} }],
  ["/get-started/quick-start.html", { loader: () => import(/* webpackChunkName: "quick-start.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/get-started/quick-start.html.js"), meta: {"t":"Quick start","i":"code"} }],
  ["/get-started/what-is-nodejs.html", { loader: () => import(/* webpackChunkName: "what-is-nodejs.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/get-started/what-is-nodejs.html.js"), meta: {"t":"What is Node.js?","i":"book-open"} }],
  ["/docs/Basics/Email.html", { loader: () => import(/* webpackChunkName: "Email.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/Email.html.js"), meta: {"t":"Email","i":"envelope"} }],
  ["/docs/Basics/Events.html", { loader: () => import(/* webpackChunkName: "Events.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/Events.html.js"), meta: {"t":"Events","i":"bell"} }],
  ["/docs/Basics/File%20System.html", { loader: () => import(/* webpackChunkName: "File System.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/File System.html.js"), meta: {"t":"File System","i":"file"} }],
  ["/docs/Basics/HTTP%20Modules.html", { loader: () => import(/* webpackChunkName: "HTTP Modules.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/HTTP Modules.html.js"), meta: {"t":"HTTP Modules","i":"folder"} }],
  ["/docs/Basics/Modules.html", { loader: () => import(/* webpackChunkName: "Modules.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/Modules.html.js"), meta: {"t":"Modules","i":"server"} }],
  ["/docs/Basics/NPM.html", { loader: () => import(/* webpackChunkName: "NPM.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/NPM.html.js"), meta: {"t":"NPM","i":"/assets/icon/npm.svg"} }],
  ["/docs/Basics/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/index.html.js"), meta: {"t":"Basics","i":"circle-info"} }],
  ["/docs/Basics/URL%20Module.html", { loader: () => import(/* webpackChunkName: "URL Module.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/URL Module.html.js"), meta: {"t":"URL Module","i":"file-code"} }],
  ["/docs/Basics/Upload%20Files.html", { loader: () => import(/* webpackChunkName: "Upload Files.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/Basics/Upload Files.html.js"), meta: {"t":"Upload Files","i":"file-export"} }],
  ["/docs/MongoDB/Collection.html", { loader: () => import(/* webpackChunkName: "Collection.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Collection.html.js"), meta: {"t":"Collection","i":"table"} }],
  ["/docs/MongoDB/Create%20Database.html", { loader: () => import(/* webpackChunkName: "Create Database.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Create Database.html.js"), meta: {"t":"Create Database","i":"layer-group"} }],
  ["/docs/MongoDB/Delete.html", { loader: () => import(/* webpackChunkName: "Delete.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Delete.html.js"), meta: {"t":"Delete","i":"trash"} }],
  ["/docs/MongoDB/Drop%20Collection.html", { loader: () => import(/* webpackChunkName: "Drop Collection.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Drop Collection.html.js"), meta: {"t":"Drop Collection","i":"square-caret-down"} }],
  ["/docs/MongoDB/Find.html", { loader: () => import(/* webpackChunkName: "Find.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Find.html.js"), meta: {"t":"Find","i":"magnifying-glass"} }],
  ["/docs/MongoDB/Insert.html", { loader: () => import(/* webpackChunkName: "Insert.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Insert.html.js"), meta: {"t":"Insert","i":"file-arrow-down"} }],
  ["/docs/MongoDB/Join.html", { loader: () => import(/* webpackChunkName: "Join.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Join.html.js"), meta: {"t":"Join","i":"object-ungroup"} }],
  ["/docs/MongoDB/Limit.html", { loader: () => import(/* webpackChunkName: "Limit.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Limit.html.js"), meta: {"t":"Limit","i":"hourglass-half"} }],
  ["/docs/MongoDB/Query.html", { loader: () => import(/* webpackChunkName: "Query.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Query.html.js"), meta: {"t":"Query","i":"location-crosshairs"} }],
  ["/docs/MongoDB/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/index.html.js"), meta: {"t":"MongoDB","i":"hard-drive"} }],
  ["/docs/MongoDB/Sort.html", { loader: () => import(/* webpackChunkName: "Sort.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Sort.html.js"), meta: {"t":"Sort","i":"sort"} }],
  ["/docs/MongoDB/Update.html", { loader: () => import(/* webpackChunkName: "Update.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/Update.html.js"), meta: {"t":"Update","i":"upload"} }],
  ["/docs/MongoDB/install_MongoDB.html", { loader: () => import(/* webpackChunkName: "install_MongoDB.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MongoDB/install_MongoDB.html.js"), meta: {"t":"Install MongoDB","i":"download","O":2} }],
  ["/docs/MySQL/Create_Database.html", { loader: () => import(/* webpackChunkName: "Create_Database.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Create_Database.html.js"), meta: {"t":"Create Database","i":"layer-group"} }],
  ["/docs/MySQL/Create_Table.html", { loader: () => import(/* webpackChunkName: "Create_Table.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Create_Table.html.js"), meta: {"t":"Create Table","i":"table"} }],
  ["/docs/MySQL/Delete.html", { loader: () => import(/* webpackChunkName: "Delete.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Delete.html.js"), meta: {"t":"Delete","i":"trash"} }],
  ["/docs/MySQL/Drop%20Table.html", { loader: () => import(/* webpackChunkName: "Drop Table.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Drop Table.html.js"), meta: {"t":"Drop Table","i":"square-caret-down"} }],
  ["/docs/MySQL/Insert%20Into.html", { loader: () => import(/* webpackChunkName: "Insert Into.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Insert Into.html.js"), meta: {"t":"Insert Into","i":"file-arrow-down"} }],
  ["/docs/MySQL/Join.html", { loader: () => import(/* webpackChunkName: "Join.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Join.html.js"), meta: {"t":"Join","i":"object-ungroup"} }],
  ["/docs/MySQL/Limit.html", { loader: () => import(/* webpackChunkName: "Limit.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Limit.html.js"), meta: {"t":"Limit","i":"hourglass-half"} }],
  ["/docs/MySQL/Order%20By.html", { loader: () => import(/* webpackChunkName: "Order By.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Order By.html.js"), meta: {"t":"Order By","i":"arrow-up-z-a"} }],
  ["/docs/MySQL/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/index.html.js"), meta: {"t":"MySQL","i":"database"} }],
  ["/docs/MySQL/Select%20From.html", { loader: () => import(/* webpackChunkName: "Select From.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Select From.html.js"), meta: {"t":"Select From","i":"check-double"} }],
  ["/docs/MySQL/Update.html", { loader: () => import(/* webpackChunkName: "Update.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Update.html.js"), meta: {"t":"Update","i":"upload"} }],
  ["/docs/MySQL/Where.html", { loader: () => import(/* webpackChunkName: "Where.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/Where.html.js"), meta: {"t":"Where","i":"location-crosshairs"} }],
  ["/docs/MySQL/install_MySQL.html", { loader: () => import(/* webpackChunkName: "install_MySQL.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/docs/MySQL/install_MySQL.html.js"), meta: {"t":"Install MySQL","i":"download","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mac/Desktop/My docs/web dev/node-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
