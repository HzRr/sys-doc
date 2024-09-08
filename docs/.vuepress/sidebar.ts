import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/intro/",
    {
      text: "学习路线",
      children: [
        "/guide/c.md",
        "/guide/linux.md",
        "/guide/python.md",
        "/guide/arch.md",
        "/guide/os.md",
      ],
    },
  ],
});
