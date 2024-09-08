import comp from "/home/origami/Projects/iscxdu-sys-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"首页\",\"heroImage\":\"/inspur_logo.png\",\"actions\":[{\"text\":\"学习路线\",\"link\":\"./guide/\",\"type\":\"primary\"},{\"text\":\"SYS组简介\",\"link\":\"./intro/\",\"type\":\"secondary\"}],\"copyright\":false,\"footer\":\"MIT Licensed | Copyright © 2024-present ISCXDU SYS Group\"},\"headers\":[],\"readingTime\":{\"minutes\":0.13,\"words\":39},\"filePathRelative\":\"README.md\"}")
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
