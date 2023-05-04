import type { DefaultTheme } from 'metaapp-prodigytech-doc-theme'
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
  description: '口袋方舟编辑器的教程文档',
  outDir: '../dist',
  head: [['link', { rel: 'icon', href: '/favicon_kd.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        text: 'index',
        link: '/index.md',
        collapsible: false,
        collapsed: false,
        items: [
          {
            text: '教程介绍',
            link: '/index.md',
            items: [
              {
                text: '二级链接',
                link: '/md/1.md',
                items: [{ text: '三级链接', link: '/md/1.html' }]
              }
            ]
          },
          { text: '开始使用', link: '/md/1.2.html' }
        ]
      },
      {
        text: '安装使用',
        link: '/md/1.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '了解口袋方舟编辑器', link: '/md/1.1.md' },
          { text: '安装与启动', link: '/md/1.2.md' },
          { text: 'VSCode安装', link: '/md/1.3.md' },
          { text: '编辑器界面', link: '/md/1.5.md' },
          { text: '编辑器基本操作', link: '/md/1.6.md' },
          { text: '导入第三方项目', link: '/md/1.7.md' },
          { text: '游戏发布&更新&测试', link: '/md/1.4.md' }
        ]
      },
      {
        text: '脚本通信',
        link: '/md/2.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'TypeScript学习', link: '/md/2.1.md' },
          { text: '客户端与服务端', link: '/md/2.2.md' },
          { text: '脚本执行逻辑', link: '/md/2.3.md' },
          { text: '调试与输出', link: '/md/2.4.md' },
          { text: '事件通信', link: '/md/2.5.md' },
          { text: '服务端实时日志', link: '/md/2.6.md' }
        ]
      },
      {
        text: '基础入门',
        link: '/md/3.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '3D坐标系', link: '/md/3.1.md' },
          { text: '特效', link: '/md/3.2.md' },
          { text: '音效', link: '/md/3.3.md' },
          { text: '初生点', link: '/md/3.4.md' },
          { text: '角色动画', link: '/md/3.5.md' },
          { text: '游戏物体的使用', link: '/md/3.6.md' },
          { text: '游戏物体父子级', link: '/md/3.7.md' },
          { text: '玩家与角色', link: '/md/3.8.md' },
          { text: '角色编辑器', link: '/md/3.9.md' },
          { text: '触发器', link: '/md/3.10.md' },
          { text: '预制体', link: '/md/3.11.md' },
          { text: '摄像机', link: '/md/3.0.1.md' },
          { text: '数据持久化', link: '/md/3.0.2.md' },
          { text: '冲量', link: '/md/3.0.3.md' },
          { text: '交互物', link: '/md/3.0.4.md' },
          { text: '射线检测', link: '/md/3.0.5.md' },
          { text: '投掷物', link: '/md/3.0.6.md' }
        ]
      },
      {
        text: '跳一跳小游戏',
        link: '/md/4.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建工程', link: '/md/4.1.md' },
          { text: '播放游戏音乐', link: '/md/4.2.md' },
          { text: '添加角色特效', link: '/md/4.3.md' },
          { text: '搭建跳跃场景', link: '/md/4.4.md' },
          { text: '添加失败区域', link: '/md/4.5.md' },
          { text: '添加胜利区域', link: '/md/4.6.md' }
        ]
      },
      {
        text: '游戏界面',
        link: '/md/5.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建UI', link: '/md/5.1.md' },
          { text: '图片', link: '/md/5.2.md' },
          { text: '文本', link: '/md/5.3.md' },
          { text: '按钮', link: '/md/5.4.md' },
          { text: '容器', link: '/md/5.5.md' },
          { text: '快速布局', link: '/md/5.0.1.md' },
          { text: 'UI自适应对齐', link: '/md/5.0.2.md' },
          { text: 'UI显示/隐藏', link: '/md/5.0.3.md' },
          { text: '输入框', link: '/md/5.0.4.md' },
          { text: '进度条', link: '/md/5.0.5.md' },
          { text: '滚动框', link: '/md/5.0.6.md' },
          { text: '加载图', link: '/md/5.0.7.md' },
          { text: '摇杆', link: '/md/5.0.8.md' }
        ]
      },
      {
        text: '常用代码片段',
        link: '/md/6.2.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '跳跃区', link: '/md/6.2.1.md' },
          { text: '变速区', link: '/md/6.2.2.md' },
          { text: '特效区', link: '/md/6.2.3.md' },
          { text: '布娃娃区', link: '/md/6.2.4.md' },
          { text: '换装区', link: '/md/6.2.5.md' },
          { text: '消失地板', link: '/md/6.2.6.md' },
          { text: '传送区', link: '/md/6.2.7.md' }
        ]
      },
      {
        text: '炸弹人小游戏',
        link: '/md/7.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建工程', link: '/md/7.1.md' },
          { text: '入口类与控制界面', link: '/md/7.2.md' },
          { text: '炸弹预制体', link: '/md/7.3.md' },
          { text: '主角释放炸弹', link: '/md/7.4.md' },
          { text: '血量UI与数据', link: '/md/7.5.md' },
          { text: '添加游戏场景', link: '/md/7.6.md' },
          { text: '制作一个减速区域', link: '/md/7.7.md' }
        ]
      }
    ],
    algolia: {
      appId: 'I2PHYUBLCN',
      apiKey: '62ee775311415d26549e0e30fef5aa38',
      indexName: 'api-docs_prodigytech',
      project: {
        active: 'learning-docs',
        arr: [
          {
            key: 'learning-docs',
            facetFilters: ['tags:learning-docs'],
            name: '教程'
          },
          {
            key: 'product-docs',
            facetFilters: ['tags:product-docs'],
            name: '产品手册'
          },
          {
            key: 'api-docs',
            facetFilters: ['tags:api-docs'],
            name: 'API'
          }
        ]
      },
      searchPage: 'https://search.ark.online/#/search'
    },
    pandora: {
      type: 'learning'
    },
    siteTitle: '教程',
    nav: [
      {
        text: '创作者',
        link: 'https://creator.ark.online/'
      },
      {
        text: '产品手册',
        link: 'https://docs.ark.online/'
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
    outline: [2, 3],
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
