export const siteData = JSON.parse("{\"base\":\"/sys-doc/\",\"lang\":\"zh-CN\",\"title\":\"ISCXDU SYS DOC\",\"description\":\"西电浪潮俱乐部SYS组学习路线文档\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
