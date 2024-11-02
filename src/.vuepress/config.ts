import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/document/",
  locales: {
    "/": {
      lang: "en-US",
      title: "ling's doc",
      description: "记录笔记",
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
