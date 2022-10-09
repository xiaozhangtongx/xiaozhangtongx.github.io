module.exports = {
  title: '小张的生活馆',
  description: '生活博客，技术总结,小张的生活馆',
  head: [['meta', { name: 'baidu-site-verification', content: 'code-J3tsEHzLsK' }]],
  base: '/blog/',
  theme: 'reco',

  // 主题配置
  themeConfig: {
    // 全局设置
    author: 'xiaozhangtx',
    huawei: true,
    subSidebar: 'auto',
    modePicker: false,
    logo: 'https://avatars.githubusercontent.com/u/63902256?s=96&v=4',
    authorAvatar: 'https://avatars.githubusercontent.com/u/63902256?s=96&v=4',
    type: 'blog',

    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: './public/favicon.ico' }],
    ],

    // 导航栏配置
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '标签', link: '/tag/', icon: 'reco-tag' },
      {
        text: 'Github',
        link: 'https://github.com/xiaozhangtongx',
        icon: 'reco-github',
      },
    ],

    // 博客配置
    themeConfig: {
      lastUpdated: '上次更新', // string | boolean
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: 'Category', // 默认文案 “分类”
        },
        tag: {
          location: 3, // 在导航栏菜单中所占的位置，默认3
          text: 'Tag', // 默认文案 “标签”
        },
      },
    },

    // 评论配置
    valineConfig: {
      appId: 'lJu6fdjFj8hdGFmLDjUAO5Dg-gzGzoHsz',
      appKey: 'oeTMFqi5WXonR5lodIfz047s',
    },
  },

  plugins: [
    'vuepress-plugin-baidu-autopush',
    {
      sitemap: {
        hostname: 'http://www.xiaozhangtx.top/blog/',
      },
    },
  ],
}
