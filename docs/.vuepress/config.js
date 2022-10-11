module.exports = {
  title: '小张的生活馆',
  description: '生活博客 技术总结 小张的生活馆 前端开发 小张同学',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-J3tsEHzLsK' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  base: '/blog/',
  theme: 'reco',
  permalink: "/:year/:month/:day/:slug",

  // 主题配置
  themeConfig: {
    // 全局设置
    author: 'xiaozhangtx',
    huawei: true,
    subSidebar: 'auto',
    logo: 'https://avatars.githubusercontent.com/u/63902256?s=96&v=4',
    authorAvatar: 'https://avatars.githubusercontent.com/u/63902256?s=96&v=4',
    type: 'blog',
    lastUpdated: '上次更新', // string | boolean

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
    },

    // 导航栏配置
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Github',
        link: 'https://github.com/xiaozhangtongx',
        icon: 'reco-github',
      },
    ],

    // 评论配置
    valineConfig: {
      appId: 'lJu6fdjFj8hdGFmLDjUAO5Dg-gzGzoHsz',
      appKey: 'oeTMFqi5WXonR5lodIfz047s',
    },

    // markdown文本配置
    markdown: {
      externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' },
    },
  },

  plugins: [
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
    'vuepress-plugin-baidu-autopush',
  ],
}
