import type { DefaultTheme } from '../../viteTheme/shared'
import { dealConfigSidebar, dealItem } from '../../utils'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Index',
    items: [{ text: '介绍', link: '/index.md' }]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: '文档',
  appearance: false,
  description: '口袋方舟编辑器的产品文档',
  outDir: '../dist',
  head: [['link', { rel: 'icon', href: '/favicon_kd.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        text: '编辑器',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '编辑器设置', link: '/Editor/EditorSettings.md' },
          { text: '编辑器窗口操作', link: '/Editor/EditorWindowsOperation.md' },
          {
            text: '画质级别模拟与设置',
            link: '/Editor/GraphicsQualitySettings.md'
          },
          { text: '预制体功能说明', link: '/Editor/Prefabs.md' },
          { text: '游戏断线重连', link: '/Editor/GameReconnection.md' },
          { text: '绘制模式', link: '/Editor/DrawMode.md' },
          {
            text: '横竖屏&分辨率模拟功能说明',
            link: '/Editor/ScreenOrientation&ResolutionSimulation.md'
          },
          { text: '游戏发布流程', link: '/Editor/GameReleaseProcess.md' },
          { text: '角色编辑工具', link: '/Editor/CharacterEditor.md' }
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
