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
  head: [
    [
      'meta',
      {
        name: 'docsearch:tags',
        content: 'learning-docs'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://wstatic-01-ali.233leyuan.com/xyc/metaverse-docs/tab-logo.png'
      }
    ]
  ],
  themeConfig: {
    logo: 'https://wstatic-01-ali.233leyuan.com/xyc/metaverse-docs/kd-logo-black.svg',
    sidebar: [
      {
        text: 'index',
        link: '/index.md',
        collapsible: false,
        collapsed: false,
        items: [
          {
            text: '教程介绍',
            link: '/index.md'
          },
          {
            text: '开始使用',
            link: '/main-course/getting-started/installing-starter.md'
          }
        ]
      },
      {
        text: '安装使用',
        link: '/main-course/getting-started/introduction.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '了解口袋方舟编辑器',
            link: '/main-course/getting-started/introduction.md'
          },
          {
            text: '安装与启动',
            link: '/main-course/getting-started/installing-starter.md'
          },
          {
            text: 'VSCode安装',
            link: '/main-course/getting-started/installing-code-editor.md'
          },
          {
            text: '编辑器界面',
            link: '/main-course/getting-started/editor-main-ui.md'
          },
          {
            text: '编辑器基本操作',
            link: '/main-course/getting-started/editor-starter.md'
          },
          {
            text: '导入第三方项目',
            link: '/main-course/getting-started/import-project.md'
          },
          {
            text: '游戏发布&更新&测试',
            link: '/main-course/getting-started/releasing.md'
          }
        ]
      },
      {
        text: '基础概念',
        link: '/main-course/foundational-knowledge/learning-typescript.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'TypeScript学习',
            link: '/main-course/foundational-knowledge/learning-typescript.md'
          },
          {
            text: '客户端与服务端',
            link: '/main-course/foundational-knowledge/client-and-server.md'
          },
          {
            text: '脚本执行逻辑',
            link: '/main-course/foundational-knowledge/script-lifecycle.md'
          },
          {
            text: '调试与输出',
            link: '/main-course/foundational-knowledge/debug-and-print.md'
          },
          {
            text: '事件通信',
            link: '/main-course/foundational-knowledge/events.md'
          },
          {
            text: '服务端实时日志',
            link: '/main-course/foundational-knowledge/server-log.md'
          }
        ]
      },
      {
        text: '基础入门',
        link: '/main-course/programming-scripting/3d-coordinate-system.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '3D坐标系',
            link: '/main-course/programming-scripting/3d-coordinate-system.md'
          },
          {
            text: '特效',
            link: '/main-course/programming-scripting/particle.md'
          },
          { text: '音效', link: '/main-course/programming-scripting/sound.md' },
          {
            text: '初生点',
            link: '/main-course/programming-scripting/player-start.md'
          },
          {
            text: '角色动画',
            link: '/main-course/programming-scripting/animating-characters.md'
          },
          {
            text: '游戏物体的使用',
            link: '/main-course/programming-scripting/gameobject.md'
          },
          {
            text: '游戏物体父子级',
            link: '/main-course/programming-scripting/layers.md'
          },
          {
            text: '玩家与角色',
            link: '/main-course/programming-scripting/player-and-character.md'
          },
          {
            text: '角色编辑器',
            link: '/main-course/programming-scripting/character-editor.md'
          },
          {
            text: '触发器',
            link: '/main-course/programming-scripting/trigger.md'
          },
          {
            text: '预制体',
            link: '/main-course/programming-scripting/prefab.md'
          },
          {
            text: '摄像机',
            link: '/main-course/programming-scripting/camera.md'
          },
          {
            text: '数据持久化',
            link: '/main-course/programming-scripting/data-storage.md'
          },
          {
            text: '冲量',
            link: '/main-course/programming-scripting/impulse.md'
          },
          {
            text: '交互物',
            link: '/main-course/programming-scripting/interactors.md'
          },
          {
            text: '射线检测',
            link: '/main-course/programming-scripting/line-trace.md'
          },
          {
            text: '投掷物',
            link: '/main-course/programming-scripting/projectile.md'
          }
        ]
      },
      {
        text: '跳一跳小游戏',
        link: '/main-course/games-jump-jump-game/create-project.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '创建工程',
            link: '/main-course/games-jump-jump-game/create-project.md'
          },
          {
            text: '播放游戏音乐',
            link: '/main-course/games-jump-jump-game/play-game-music.md'
          },
          {
            text: '添加角色特效',
            link: '/main-course/games-jump-jump-game/add-character-effect.md'
          },
          {
            text: '搭建跳跃场景',
            link: '/main-course/games-jump-jump-game/build-jump-scene.md'
          },
          {
            text: '添加失败区域',
            link: '/main-course/games-jump-jump-game/add-loser-area.md'
          },
          {
            text: '添加胜利区域',
            link: '/main-course/games-jump-jump-game/add-win-area.md'
          }
        ]
      },
      {
        text: '游戏界面',
        link: '/main-course/game-ui/create-ui.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建UI', link: '/main-course/game-ui/create-ui.md' },
          { text: '图片', link: '/main-course/game-ui/image.md' },
          { text: '文本', link: '/main-course/game-ui/text.md' },
          { text: '按钮', link: '/main-course/game-ui/button.md' },
          { text: '容器', link: '/main-course/game-ui/container.md' },
          { text: '快速布局', link: '/main-course/game-ui/quick-layout.md' },
          { text: 'UI自适应对齐', link: '/main-course/game-ui/auto-layout.md' },
          { text: 'UI显示/隐藏', link: '/main-course/game-ui/visibility.md' },
          { text: '输入框', link: '/main-course/game-ui/text-input.md' },
          { text: '进度条', link: '/main-course/game-ui/progress-bar.md' },
          { text: '滚动框', link: '/main-course/game-ui/scroll-view.md' },
          { text: '加载图', link: '/main-course/game-ui/loading-img.md' },
          { text: '摇杆', link: '/main-course/game-ui/joystick.md' }
        ]
      },
      {
        text: '常用代码片段',
        link: '/main-course/code-snippet/jump-area.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '跳跃区', link: '/main-course/code-snippet/jump-area.md' },
          {
            text: '变速区',
            link: '/main-course/code-snippet/change-speed-area.md'
          },
          {
            text: '特效区',
            link: '/main-course/code-snippet/particle-area.md'
          },
          {
            text: '布娃娃区',
            link: '/main-course/code-snippet/ragdoll-area.md'
          },
          {
            text: '换装区',
            link: '/main-course/code-snippet/change-clothing.md'
          },
          {
            text: '消失地板',
            link: '/main-course/code-snippet/vanishing-block.md'
          },
          { text: '传送区', link: '/main-course/code-snippet/portal.md' }
        ]
      },
      {
        text: '炸弹人小游戏',
        link: '/main-course/games-bomber-game/create-project.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '创建工程',
            link: '/main-course/games-bomber-game/create-project.md'
          },
          {
            text: '入口类与控制界面',
            link: '/main-course/games-bomber-game/launcher-and-main-ui.md'
          },
          {
            text: '炸弹预制体',
            link: '/main-course/games-bomber-game/bomber-prefab.md'
          },
          {
            text: '主角释放炸弹',
            link: '/main-course/games-bomber-game/release-bomber.md'
          },
          {
            text: '血量UI与数据',
            link: '/main-course/games-bomber-game/hp-ui-and-data.md'
          },
          {
            text: '添加游戏场景',
            link: '/main-course/games-bomber-game/add-scene.md'
          },
          {
            text: '制作一个减速区域',
            link: '/main-course/games-bomber-game/build-decelerate-area.md'
          }
        ]
      },
      {
        text: '闯关小游戏',
        link: '/obby-course/game-description.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '第一节：快速实现闯关游戏',
            items: [
              {
                text: '下载安装',
                link: '/obby-course/Lesson1/1.1installing.md'
              },
              {
                text: '角色控制',
                link: '/obby-course/Lesson1/1.2player-control.md'
              },
              {
                text: '场景搭建',
                link: '/obby-course/Lesson1/1.3build-scene.md'
              }
            ]
          },
          {
            text: '第二节：完善胜负逻辑',
            link: '/obby-course/Lesson2/2.1dead-rebirth.md',
            items: [
              {
                text: '死亡复活',
                link: '/obby-course/Lesson2/2.1dead-rebirth.md'
              },
              {
                text: '检查点',
                link: '/obby-course/Lesson2/2.2check-point.md'
              },
              { text: '终点胜利', link: '/obby-course/Lesson2/2.3win-point.md' }
            ]
          },
          {
            text: '第三节：角色编辑器',
            link: '/obby-course/Lesson3/3.1character-editor.md',
            items: [
              {
                text: '角色编辑器',
                link: '/obby-course/Lesson3/3.1character-editor.md'
              }
            ]
          },
          {
            text: '第四节：发布游戏',
            link: '/obby-course/Lesson3/3.2release-and-test.md',
            items: [
              {
                text: '发布游戏&测试',
                link: '/obby-course/Lesson3/3.2release-and-test.md'
              }
            ]
          },
          {
            text: '第五节：增强用户反馈',
            link: '/obby-course/Lesson4/4.1feedback-win.md',
            items: [
              {
                text: '胜利反馈',
                link: '/obby-course/Lesson4/4.1feedback-win.md'
              },
              {
                text: '增加胜利提示UI',
                link: '/obby-course/Lesson4/4.2win-ui.md'
              },
              {
                text: '增加倒计时UI',
                link: '/obby-course/Lesson4/4.3rebirth-ui.md'
              },
              {
                text: '增加回到初生点按钮',
                link: '/obby-course/Lesson4/4.4back-starter-button.md'
              }
            ]
          },
          {
            text: '第六节：增加新的关卡',
            link: '/obby-course/Lesson5/5.1design-levels.md',
            items: [
              {
                text: '关卡设计思想',
                link: '/obby-course/Lesson5/5.1design-levels.md'
              },
              {
                text: '跳关卡',
                link: '/obby-course/Lesson5/5.2jump-levels.md'
              },
              {
                text: '扩展机关',
                link: '/obby-course/Lesson5/5.3extension-level.md'
              },
              {
                text: '展示关卡数字',
                link: '/obby-course/Lesson5/5.4show-level-number.md'
              }
            ]
          },
          {
            text: '第七节：实现多人联机',
            link: '/obby-course/Lesson6/6.1conline-game.md',
            items: [
              {
                text: '联机游戏的基本概念',
                link: '/obby-course/Lesson6/6.1conline-game.md'
              },
              {
                text: '场景物体的单双端设计',
                link: '/obby-course/Lesson6/6.2client-server-tips.md'
              },
              {
                text: '存储通关记录',
                link: '/obby-course/Lesson6/6.3data-storage-level-number.md'
              },
              {
                text: '单双端注意改动',
                link: '/obby-course/Lesson6/6.4client-server-wraning.md'
              },
              {
                text: '发布游戏',
                link: '/obby-course/Lesson6/6.5release-game.md'
              }
            ]
          }
        ]
      },
      {
        text: '大亨小游戏',
        link: '/tycoon-course/Lesson1/1.1game-description.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '第一节：搭建场景',
            items: [
              { text: '创建项目', link: '/tycoon-course/Lesson2/2.1create-project.md' },
              { text: '搭建场景', link: '/tycoon-course/Lesson3/3.1make-scene.md' }
            ]
          },
          {
            text: '第二节：实现游戏逻辑',
            items: [
              { text: '制作购买按钮', link: '/tycoon-course/Lesson4/4.1buy-button.md' },
              { text: '显示可购买物品功能', link: '/tycoon-course/Lesson4/4.2buy-item.md' },
              { text: '优化显示效果', link: '/tycoon-course/Lesson4/4.3optimization.md' },
              { text: '实现购买按钮上金币显示', link: '/tycoon-course/Lesson4/4.4show-gold.md' },
              { text: '实现购买建筑功能', link: '/tycoon-course/Lesson4/4.5buy-build.md' },
              { text: '实现邮箱产出金币功能', link: '/tycoon-course/Lesson4/4.6email-item.md' },
              { text: '存储玩家数据功能', link: '/tycoon-course/Lesson4/4.7player-data.md' }
            ]
          },
          {
            text: '第三节：实现联机家园系统',
            items: [
              { text: '实现家园系统', link: '/tycoon-course/Lesson5/5.1home-system.md' },
              { text: '运行测试游戏', link: '/tycoon-course/Lesson5/5.2test-project.md' }
            ]
          },
        ]
      },
      {
        text: '打怪小游戏',
        link: '/monster-course/1.game-presentation.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '1.游戏展示', link: '/monster-course/1.game-presentation.md' },
          { text: '2.场景搭建', link: '/monster-course/2.scene-construction.md' },
          { text: '3.战斗开始&战斗结束', link: '/monster-course/3.battle-begins&battle-ends.md' },
          { text: '4.创建怪物', link: '/monster-course/4.create-monster.md' },
          { text: '5.制作怪物配置表', link: '/monster-course/5.create-monster-configuration-sheet.md' },
          { text: '6.怪物移动&怪物攻击', link: '/monster-course/6.monster-move&monster-attack.md' },
          { text: '7.攻击怪物&刷怪点', link: '/monster-course/7.attack-monster&spawn-point.md' },
          { text: '8.战斗闭环&表现优化', link: '/monster-course/8.combat-closed-loop&performance-optimization.md' },
          { text: '9.武器系统之近战武器', link: '/monster-course/9.closein-weapons-for-weapon-systems.md' },
          { text: '10.武器系统之远程武器', link: '/monster-course/10.remote-weapons-for-weapon-systems.md' },
          { text: '11.完善逻辑&游戏优化思路', link: '/monster-course/11.perfect-logic&game-optimization-ideas.md' },
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
          },
          {
            name: '论坛',
            url: 'https://forum.ark.online/search.php?searchsubmit=yes&mod=forum&srchtxt='
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
    feedback: 'https://github.com/prodigytech-doc/learning-docs/',
    outline: [2, 3],
    editLink: {
      pattern:
        'https://github.com/prodigytech-doc/learning-docs/tree/main/docs/:path',
      text: '编辑'
    },
    socialLinks: [
      // { link: 'https://github.com/prodigytech-doc/api-docs', icon: 'github' },
      {
        link: 'https://github.com/prodigytech-doc/learning-docs/issues',
        icon: {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
          </svg>
          `
        }
      }
    ],
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
