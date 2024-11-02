import { navbar } from "vuepress-theme-hope";

// 导航栏的配置
// 当前已经移除了zh.ts的，所以目前所有的导航栏的配置都在这里。
export const enNavbar = navbar([
  "/",
  {
    text: "Java基础",
    icon: "lightbulb",
    prefix: "/java/",
    children: [
      {
        text: "Java并发编程",
        icon: "lightbulb",
        prefix: "java并发/",
        children: ["", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  // {
  //   text: "Guide",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //   ],
  // },
]);
