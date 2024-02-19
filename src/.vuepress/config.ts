import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import hopeTheme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme: hopeTheme(
    {
      // 主题选项
      // ...
    },
    { custom: true },
  ),

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
