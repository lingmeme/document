import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",// home
    {
      text: "Java",
      icon: "coffee",
      prefix: "java/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "云原生",
      icon: "cloud",
      prefix: "cn/",//Cloudnative
      children: "structure",
      collapsible: true,
    },
    {
      text: "阅读笔记",
      icon: "book",
      prefix: "cn/",//一些阅读笔记
      children: "structure",
      collapsible: true,
    },
    {
      text: "数据库",
      //icon: "",
      prefix: "data/",//数据库相关
      children: "structure",
      collapsible: true,
    },
    {
      text: "生活随笔",
      //icon: "",
      prefix: "life/",//一些生活随笔
      children: "structure",
      collapsible: true,
    },

    // 下面的暂时注释掉。有个需要注意的，所有的文档需要是md格式的，否则无法被选中的。
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ],
});
