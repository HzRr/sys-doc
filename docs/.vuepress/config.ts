import { defineUserConfig } from "vuepress";

import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default defineUserConfig({
  base: "/sys-doc/",

  lang: "zh-CN",

  title: "ISCXDU SYS DOC",
  description: "西电浪潮俱乐部SYS组学习路线文档",

  theme: hopeTheme({
    pure: true,
    darkmode: "enable",

    navbar,
  })

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
