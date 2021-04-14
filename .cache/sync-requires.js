
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/user/CICD-Udemy2/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/user/CICD-Udemy2/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/user/CICD-Udemy2/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/user/CICD-Udemy2/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/user/CICD-Udemy2/src/pages/using-typescript.tsx"))
}

