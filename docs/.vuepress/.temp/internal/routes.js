export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"学习路线","i":"lightbulb"} }],
  ["/guide/arch.html", { loader: () => import(/* webpackChunkName: "guide_arch.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/guide/arch.html.js"), meta: {"t":"体系结构"} }],
  ["/guide/c.html", { loader: () => import(/* webpackChunkName: "guide_c.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/guide/c.html.js"), meta: {"t":"C语言"} }],
  ["/guide/linux.html", { loader: () => import(/* webpackChunkName: "guide_linux.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/guide/linux.html.js"), meta: {"t":"Linux环境配置"} }],
  ["/guide/os.html", { loader: () => import(/* webpackChunkName: "guide_os.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/guide/os.html.js"), meta: {"t":"操作系统"} }],
  ["/guide/python.html", { loader: () => import(/* webpackChunkName: "guide_python.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/guide/python.html.js"), meta: {"t":"Python"} }],
  ["/intro/", { loader: () => import(/* webpackChunkName: "intro_index.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/intro/index.html.js"), meta: {"t":"SYS组简介","i":"fas fa-info-circle"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
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
