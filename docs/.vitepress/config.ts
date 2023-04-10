import type { DefaultTheme } from '../../viteTheme/shared'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Index',
    items: [{ text: '介绍', link: '/index.md' }]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: '教程',
  appearance: false,
  description: '口袋方舟编辑器的产品文档',
  outDir: '../dist',
  head: [['link', { rel: 'icon', href: '/favicon_kd.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        text: '1',
        link: '/md/1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '1.1', link: '/md/1.1.md' },
          { text: '1.2', link: '/md/1.2.md' },
          { text: '1.3', link: '/md/1.3.md' },
          { text: '1.4', link: '/md/1.4.md' },
          { text: '1.5', link: '/md/1.5.md' }
        ]
      },
      {
        text: '2.1',
        link: '/md/2.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '2.1', link: '/md/2.1.md' },
          { text: '2.2', link: '/md/2.2.md' },
          { text: '2.3', link: '/md/2.3.md' },
          { text: '2.4', link: '/md/2.4.md' },
          { text: '2.5', link: '/md/2.5.md' },
          { text: '2.6', link: '/md/2.6.md' }
        ]
      },
      {
        text: '3.1',
        link: '/md/3.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '3.0.1', link: '/md/3.0.1.md' },
          { text: '3.0.2', link: '/md/3.0.2.md' },
          { text: '3.1', link: '/md/3.1.md' },
          { text: '3.2', link: '/md/3.2.md' },
          { text: '3.3', link: '/md/3.3.md' },
          { text: '3.4', link: '/md/3.4.md' },
          { text: '3.5', link: '/md/3.5.md' },
          { text: '3.6', link: '/md/3.6.md' },
          { text: '3.8', link: '/md/3.8.md' },
          { text: '3.9', link: '/md/3.9.md' }
        ]
      },
      {
        text: '4',
        link: '/md/4.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '4.1', link: '/md/4.1.md' },
          { text: '4.2', link: '/md/4.2.md' },
          { text: '4.3', link: '/md/4.3.md' },
          { text: '4.4', link: '/md/4.4.md' }
        ]
      },
      {
        text: '5',
        link: '/md/5.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '5.0.1', link: '/md/5.0.1.md' },
          { text: '5.0.2', link: '/md/5.0.2.md' },
          { text: '5.0.3', link: '/md/5.0.3.md' },
          { text: '5.0.4', link: '/md/5.0.4.md' },
          { text: '5.0.5', link: '/md/5.0.5.md' },
          { text: '5.0.6', link: '/md/5.0.6.md' },
          { text: '5.0.7', link: '/md/5.0.7.md' },
          { text: '5.1', link: '/md/5.1.md' },
          { text: '5.2', link: '/md/5.2.md' }
        ]
      },
      {
        text: '6.1',
        link: '/md/6.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '6.1.2.1', link: '/md/6.1.2.1.md' },
          { text: '6.1.2.2', link: '/md/6.1.2.2.md' },
          { text: '6.1.2.3', link: '/md/6.1.2.3.md' },
          { text: '6.1.2.4', link: '/md/6.1.2.4.md' },

          { text: '6.1.4', link: '/md/6.1.4.md' },

          { text: '6.1.6.1', link: '/md/6.1.2.1.md' },
          { text: '6.1.6.2', link: '/md/6.1.2.2.md' },
          { text: '6.1.6.3', link: '/md/6.1.2.3.md' },
          { text: '6.1.6.4', link: '/md/6.1.2.4.md' },
          { text: '6.1.6.5', link: '/md/6.1.2.5.md' },
          { text: '6.1.6.7', link: '/md/6.1.2.7.md' },
          { text: '6.1.6.8', link: '/md/6.1.2.8.md' },
          { text: '6.1.6.9', link: '/md/6.1.2.9.md' },
          { text: '6.1.6.11', link: '/md/6.1.2.11.md' },
          { text: '6.1.6.12', link: '/md/6.1.2.12.md' },

          { text: '6.2.1', link: '/md/6.2.1.md' },
          { text: '6.2.2', link: '/md/6.2.2.md' },
          { text: '6.2.3', link: '/md/6.2.3.md' },
          { text: '6.2.4', link: '/md/6.2.4.md' },
          { text: '6.2.5', link: '/md/6.2.5.md' },
          { text: '6.2.6', link: '/md/6.2.6.md' },
          { text: '6.2.7', link: '/md/6.2.7.md' }
        ]
      },
      {
        text: '7',
        link: '/md/7.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '7.1', link: '/md/7.1.md' },
          { text: '7.2', link: '/md/7.2.md' },
          { text: '7.3', link: '/md/7.3.md' },
          { text: '7.6', link: '/md/7.6.md' }
        ]
      }
    ],
    // algolia: {
    //   appId: '89BNK6UU0A',
    //   apiKey: 'f691939e4fa8b414f92c84c288d2097a',
    //   indexName: 'all-docs',
    //   searchParameters: {
    //     facetFilters: ['tags:product-docs']
    //   }
    // },
    siteTitle: '文档',
    nav: [
      {
        text: '官网',
        link: 'https://creator.ark.online/'
      },
      {
        text: '教程',
        link: 'https://meta.feishu.cn/wiki/wikcnmY0MQweLdbnlywkJJiDucd'
      },
      {
        text: 'API',
        link: 'https://api-docs.ark.online/'
      },
      {
        text: '论坛',
        link: 'https://forum.ark.online/'
      }
    ],
    outline: [2, 4],
    editLink: {
      pattern:
        'https://github.com/prodigytech-doc/learning-docs/tree/main/docs/:path',
      text: '编辑'
    },
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
})
