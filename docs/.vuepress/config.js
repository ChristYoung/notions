// 线上访问的地址: https://christyoung.github.io/yjclh/notes/angular/angular1.html

// 在线资料
// https://www.cnblogs.com/glassysky/p/13387739.html.
// https://zhuanlan.zhihu.com/p/444863193.

module.exports = {
  title: "前端笔记",
  description: "杨杰前端笔记",
  // theme: 'reco', // 不能使用特定的theme,否则会导致docSearch不生效
  base: "/notions/",
  // plugins: [['vuepress-plugin-code-copy', true]], // 代码复制插件
  themeConfig: {
    algolia: {
      apiKey: "5f669c59288fc7f04ce565bae59e961d",
      indexName: "notions",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "WNMYY748BP",
    },
    nav: [
      // nav用来配置头部导航栏.
      { text: "首页", link: "/" },
      {
        text: "社区文章摘录",
        link: "/posts/post-list",
      },
    ],
    sidebar: [
      {
        title: "Mac操作及相关",
        path: "",
        collapsable: false,
        children: [
          { title: "Mac常用快捷键", path: "/notes/mac/shortcut" },
          { title: "Mac文件的相关操作", path: "/notes/mac/macFile" },
        ],
      },
      {
        title: "Angular",
        path: "/notes/angular/angular1",
        collapsable: false,
        children: [
          { title: "angular tips", path: "/notes/angular/angular1" },
          { title: "angular lib", path: "/notes/angular/angular-lib" },
          { title: "rxjs的基本概念", path: "/notes/angular/rxjs" },
          { title: "rxjs操作符", path: "/notes/angular/rxjs-operator" },
        ],
      },
      {
        title: "React",
        path: "/notes/react/react1",
        collapsable: false,
        children: [
          { title: 'React文章摘录', path: '/notes/react/react0' },
          { title: "React中Key的作用", path: "/notes/react/react1" },
        ]
      },
      {
        title: "Vue3",
        path: "/notes/vue3/vue-a",
        collapsable: false,
        children: [{ title: "Vue3基础技巧", path: "/notes/vue3/vue-a" }],
      },
      {
        title: "Typescript",
        path: "/notes/typescript/ts-challenge",
        collapsable: false,
        children: [
          {
            title: "Typescript类型体操",
            path: "/notes/typescript/ts-challenge",
          },
        ],
      },
      {
        title: "Javascript",
        path: "/notes/javascript/input-event",
        collapsable: false,
        children: [
          { title: "input事件处理", path: "/notes/javascript/input-event" },
          {
            title: "stop input autocomplete",
            path: "/notes/javascript/input-auto-complete",
          },
          { title: "常用js代码收集", path: "/notes/javascript/js-usually" },
          { title: "最全正则表达式大全", path: "/notes/javascript/js-regx" },
          { title: "常见Promise问题", path: "/notes/javascript/promise" },
          {
            title: "decodeURIComponent 和 decodeURI 以及unescape的定义和区别",
            path: "/notes/javascript/decodeURIComponent",
          },
        ],
      },
      {
        title: "CSS",
        path: "/notes/css/css-feature",
        collapsable: false,
        children: [
          // {
          //   title: "flex布局", path: '', children: [
          //     {
          //       title: "手动拖动展示图片的列表页面",
          //       path: "/notes/css/css-flex-shrink",
          //     },
          //   ]
          // },
          { title: "css特性收集", path: "/notes/css/css-feature" },
          { title: "css打印样式", path: "/notes/css/css-print-style" },
          {
            title: "css getComputedStyle",
            path: "/notes/css/css-getComputedStyle",
          },
          { title: "footer-sticker", path: "/notes/css/css-footerstick" },
          { title: "absolute固定定位", path: "/notes/css/css-absoulte-fixed" },
          {
            title: "getBoundingClientRect和offsetWidth的区别",
            path: "/notes/css/getBoundingClientRect",
          },
          { title: "微信小程序样式问题", path: "/notes/css/miniprogram" },
        ],
      },
      {
        title: "GitHub",
        path: "/notes/github/github1",
        collapsable: false,
        children: [{ title: "Git相关", path: "/notes/github/github1" }],
      },
      {
        title: "VsCode",
        path: "/notes/vscode/myVscodeShortCut",
        collapsable: false,
        children: [
          { title: 'vscode user snippets', path: '/notes/vscode/snippets' },
          { title: "玩转vscode", path: "/notes/vscode/myVscodeShortCut" },
          { title: "我的vscode配置", path: "/notes/vscode/mySetting" },
        ],
      },
      {
        title: "learn vuepress",
        path: "/notes/learn-vuepress/vuepress1",
        collapsable: false,
        children: [
          { title: "学习vuepress", path: "/notes/learn-vuepress/vuepress1" },
        ],
      },
      //   {
      //     title: "Figma的使用",
      //     path: "/notes/figma/figma",
      //   },
    ],
  },
};
