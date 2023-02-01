module.exports = {
  title: '小张的生活馆',
  description: '生活博客 技术总结 小张的生活馆 前端开发 小张同学',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-J3tsEHzLsK' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
  ],
  base: '/blog/',
  theme: 'reco',
  permalink: '/:year/:month/:day/:slug',

  // 主题配置
  themeConfig: {
    // 全局设置
    author: 'xiaozhangtx',
    huawei: true,
    nextLinks: true,
    prevLinks: true,
    subSidebar: 'auto',
    modePicker: false,
    logo: 'https://avatars.githubusercontent.com/u/63902256?s=96&v=4',
    authorAvatar: 'https://avatars.githubusercontent.com/u/63902256?s=96&v=4',
    type: 'blog',
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false,
    smoothScroll: true,

    // 博客配置
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/xiaozhangtongx' },
        { icon: 'reco-mail', link: 'mailto:2446159171@qq.com' },
        { icon: 'reco-bilibili', link: 'https://space.bilibili.com/450589378' },
        { icon: 'reco-zhihu', link: 'https://www.zhihu.com/people/zhang-ju-fu-62' },
        { icon: 'reco-csdn', link: 'https://blog.csdn.net/m0_46249601' },
        { icon: 'reco-juejin', link: 'https://juejin.cn/user/2524908394122888' },
      ],
    },

    // 导航栏配置
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      {
        text: '旧版',
        link: 'https://www.xiaozhangtx.top/',
        icon: 'reco-blog',
      },
    ],

    // 评论配置
    valineConfig: {
      appId: 'lJu6fdjFj8hdGFmLDjUAO5Dg-gzGzoHsz',
      appKey: 'oeTMFqi5WXonR5lodIfz047s',
    },
  },

  // markdown文本配置
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    lineNumbers: true,
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' },
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-lists'))
    },
  },

  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    'vuepress-plugin-baidu-autopush',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString()
        },
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://www.xiaozhangtx.top/blog/',
      },
    ],
  ],
}
