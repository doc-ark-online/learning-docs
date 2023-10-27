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
        text: '首页',
        collapsible: false,
        collapsed: false,
        items: [
          {
            text: '教程介绍',
            link: '/index.md'
          },
          {
            text: '了解口袋方舟编辑器',
            link: '/OverView/introduction.md'
          }
        ]
      },
      {
        text: '安装使用',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '安装与启动',
            link: '/Getting-Started/installing-starter.md'
          },
          {
            text: 'VSCode 安装',
            link: '/Getting-Started/installing-code-editor.md'
          },
          {
            text: '编辑器界面',
            link: '/Getting-Started/editor-main-ui.md'
          },
          {
            text: '编辑器基本操作',
            link: '/Getting-Started/editor-starter.md'
          },
          {
            text: '导入第三方项目',
            link: '/Getting-Started/import-project.md'
          }
        ]
      },
      {
        text: '基础概念',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'TypeScript学习',
            link: '/Basic-Learning/learning-typescript.md'
          },
          {
            text: '空工程结构介绍',
            link: '/Basic-Learning/blank-project.md'
          },
          {
            text: '玩家角色与摄像机',
            link: '/Basic-Learning/player-and-character.md'
          },
          {
            text: '脚本',
            link: '/Basic-Learning/script-lifecycle.md'
          },
          {
            text: '日志查看',
            link: '/Basic-Learning/checklog.md'
          }
        ]
      },
      {
        text: '必学逻辑',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '游戏对象',
            link: '/Core-Learning/gameobject.md'
          },
          {
            text: '控制游戏对象',
            link: '/Core-Learning/controlling-objects.md'
          },
          {
            text: '触发检测',
            link: '/Core-Learning/trigger.md'
          },
          {
            text: '角色动画',
            link: '/Core-Learning/animating-characters.md'
          }
        ]
      },
      {
        text: '常用功能',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'UI 使用',
            link: '/Common-Functions/user-interface.md'
          },
          {
            text: '预制体',
            link: '/Common-Functions/prefab.md'
          },
          {
            text: '特效',
            link: '/Common-Functions/particle.md'
          },
          {
            text: '音效',
            link: '/Common-Functions/sound.md'
          },
          {
            text: '查询检测',
            link: '/Common-Functions/query.md'
          },
          {
            text: '角色编辑器与换装',
            link: '/Common-Functions/character-editor.md'
          }
        ]
      },
      {
        text: '网络功能',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '服务端与客户端',
            link: '/Online-Gaming/client-and-server.md'
          },
          {
            text: '事件通信',
            link: '/Online-Gaming/events.md'
          },
          {
            text: 'RPC 与 属性同步',
            link: '/Online-Gaming/property-rpc.md'
          },
          {
            text: '使用数据中心存储数据',
            link: '/Online-Gaming/data-storage.md'
          }
        ]
      },
      {
        text: '进阶功能',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '使用运动器移动对象',
            link: '/Masters-Road/physicsSports.md'
          },
          {
            text: '交互物',
            link: '/Masters-Road/interactors.md'
          },
          {
            text: '摄像机',
            link: '/Masters-Road/camera.md'
          },
          {
            text: '自定义属性',
            link: '/Masters-Road/custom-property.md'
          },
          {
            text: '冲量与冲量对象',
            link: '/Masters-Road/impulse.md'
          },
          {
            text: 'Tween 动画',
            link: '/Masters-Road/tween.md'
          },
          {
            text: '模块管理',
            link: '/Masters-Road/module.md'
          },
          {
            text: 'IAA',
            link: '/Masters-Road/advertising.md'
          }
        ]
      },
      {
        text: '常用代码片段',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '跳跃区',
            link: '/code-snippet/jump-area.md'
          },
          {
            text: '变速区',
            link: '/code-snippet/change-speed-area.md'
          },
          {
            text: '特效区',
            link: '/code-snippet/particle-area.md'
          },
          {
            text: '布娃娃区',
            link: '/code-snippet/ragdoll-area.md'
          },
          {
            text: '换装区',
            link: '/code-snippet/change-clothing.md'
          },
          {
            text: '消失地板',
            link: '/code-snippet/vanishing-block.md'
          },
          {
            text: '传送区',
            link: '/code-snippet/portal.md'
          }
        ]
      },
      {
        text: '炸弹人小游戏',
        link: '/bomberman-course/0-description.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '搭建场景',
            items: [
              {
                text: '创建工程并导入场景',
                link: '/bomberman-course/1-create-project.md'
              },
              {
                text: '添加空气墙',
                link: '/bomberman-course/2-add-Point.md'
              }
            ]
          },
          {
            text: '搭建UI',
            items: [
              {
                text: '创建控制UI',
                link: '/bomberman-course/3-create-ctrl-ui.md'
              },
              {
                text: '创建血条UI',
                link: '/bomberman-course/4-create-hp-ui.md'
              },
              {
                text: '导出UI并使用代码显示UI',
                link: '/bomberman-course/5-export-ui.md'
              }
            ]
          },
          {
            text: '创建炸弹预制体',
            items: [
              {
                text: '放置模型和特效',
                link: '/bomberman-course/6-create-prefab.md'
              },
              {
                text: '编写脚本',
                link: '/bomberman-course/7-create-boom-scripts.md'
              }
            ]
          },
          {
            text: '控制释放炸弹',
            items: [
              {
                text: '使用服务端创建炸弹',
                link: '/bomberman-course/8-server-create-boom.md'
              },
              {
                text: '玩家死亡与复活功能',
                link: '/bomberman-course/9-respawn-player.md'
              }
            ]
          },
          {
            text: '运行测试游戏',
            items: [
              {
                text: '使用编辑器模拟人多游戏',
                link: '/bomberman-course/10-test-game.md'
              }
            ]
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
            text: '1.初始设置',
            link: '/obby-course/1.initial-setting.md'
          },
          {
            text: '2.场景搭建',
            link: '/obby-course/2.scene-construction.md'
          },
          {
            text: '3.死亡复活',
            link: '/obby-course/3.death-and-resurrection.md'
          },
          {
            text: '4.检查点',
            link: '/obby-course/4.check-point.md'
          },
          {
            text: '5.终点胜利',
            link: '/obby-course/5.destination.md'
          },
          {
            text: '6.游戏UI',
            link: '/obby-course/6.game-ui.md'
          },
          {
            text: '7.辅助功能',
            link: '/obby-course/7.helper.md'
          },
          {
            text: '8.关卡拓展',
            link: '/obby-course/8.expansion-level.md'
          },
          {
            text: '9.游戏存档',
            link: '/obby-course/9.saved-game.md'
          },
          {
            text: '10.排行榜',
            link: '/obby-course/10.rangking-list.md'
          },
          {
            text: '11.发布游戏',
            link: '/obby-course/11.release-game.md'
          }
        ]
      },
      {
        text: '大亨小游戏',
        link: '/tycoon-course/1.1game-description.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '第一节：搭建场景',
            items: [
              { text: '搭建场景', link: '/tycoon-course/2.1make-scene.md' }
            ]
          },
          {
            text: '第二节：实现游戏逻辑',
            items: [
              { text: '制作购买按钮', link: '/tycoon-course/3.1buy-button.md' },
              {
                text: '显示可购买物品功能',
                link: '/tycoon-course/3.2buy-item.md'
              },
              {
                text: '优化显示效果',
                link: '/tycoon-course/3.3optimization.md'
              },
              {
                text: '实现购买按钮上金币显示',
                link: '/tycoon-course/3.4show-gold.md'
              },
              {
                text: '实现购买建筑功能',
                link: '/tycoon-course/3.5buy-build.md'
              },
              {
                text: '实现邮箱产出金币功能',
                link: '/tycoon-course/3.6email-item.md'
              },
              {
                text: '存储玩家数据功能',
                link: '/tycoon-course/3.7player-data.md'
              }
            ]
          },
          {
            text: '第三节：实现联机家园系统',
            items: [
              {
                text: '实现家园系统(1)',
                link: '/tycoon-course/4.1home-system.md'
              },
              {
                text: '实现家园系统(2)',
                link: '/tycoon-course/4.2home-system2.md'
              },
              {
                text: '运行测试游戏',
                link: '/tycoon-course/4.2test-project.md'
              }
            ]
          }
        ]
      },
      {
        text: '打怪小游戏',
        link: '/monster-course/game-description.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '1.场景搭建',
            link: '/monster-course/1.scene-construction.md'
          },
          { text: '2.制作怪物', link: '/monster-course/2.monster-making.md' },
          {
            text: '3.更新怪物血量',
            link: '/monster-course/3.update-monster-hp.md'
          },
          { text: '4.攻击怪物', link: '/monster-course/4.attack-monster.md' },
          { text: '5.攻击反馈', link: '/monster-course/5.attack-feedback.md' },
          {
            text: '6.成长系统UI',
            link: '/monster-course/6.growth-system-UI.md'
          },
          {
            text: '7.攻击力升级',
            link: '/monster-course/7.attack-power-upgrade.md'
          },
          { text: '8.存储数据', link: '/monster-course/8.save-data.md' }
        ]
      },
      {
        text: '美术资源制作教程',
        link: '/ArtResource-course/000-PGC.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '第一节：环境配置',
            link: '/ArtResource-course/001-Environment-configuration.md'
          },
          {
            text: '第二节：3D角色制作流程',
            link: '/ArtResource-course/Character/0-0-0-3D-character-production-process.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '角色分类',
                link: '/ArtResource-course/Character/1-1-0-Role-Classification.md'
              },
              {
                text: '模型规范',
                link: '/ArtResource-course/Character/2-0-0-Model-Specification.md',
                items: [
                  {
                    text: '1. 基础人形形象',
                    link: '/ArtResource-course/Character/2-1-0-basic-human-figure.md',
                    items: [
                      {
                        text: '1.1 基础PBR贴图',
                        link: '/ArtResource-course/Character/2-1-1-Basic-PBR-textures.md'
                      }
                    ]
                  },
                  {
                    text: '2. 高级人形形象',
                    link: '/ArtResource-course/Character/2-2-0-Advanced-human-image.md',
                    items: [
                      {
                        text: '2.1 二次元风格',
                        link: '/ArtResource-course/Character/2-2-1-Cartoon-style.md',
                        items: [
                          {
                            text: '服装制作规范',
                            link: '/ArtResource-course/Character/2-2-1-Garment-Production-Specifications.md'
                          },
                          {
                            text: '头发制作规范',
                            link: '/ArtResource-course/Character/2-2-1-hair-making-specification.md'
                          }
                        ]
                      },
                      {
                        text: '2.2 通用制作规范',
                        link: '/ArtResource-course/Character/2-2-2-general-specification.md'
                      }
                    ]
                  },
                  {
                    text: '3. 资源基础规格',
                    link: '/ArtResource-course/Character/2-3-0-Resource-Base-Specification.md',
                    items: [
                      {
                        text: '3.1 通用命名',
                        link: '/ArtResource-course/Character/2-3-1-common-nomenclature.md'
                      },
                      {
                        text: '3.2 资源编号',
                        link: '/ArtResource-course/Character/2-3-2-resource-number.md'
                      }
                    ]
                  }
                ]
              },
              {
                text: '角色绑定',
                link: '/ArtResource-course/Character/3-0-0-Riginng.md',
                items: [
                  {
                    text: '1. 基础人形形象',
                    link: '/ArtResource-course/Character/3-1-0-Basic-Human.md'
                  },
                  {
                    text: '2. 高级人形形象',
                    link: '/ArtResource-course/Character/3-2-0-Advanced-Human.md',
                    items: [
                      {
                        text: '2.1 基础动态服装部件',
                        link: '/ArtResource-course/Character/3-2-1-Basic-Dynamic-Component.md',
                        items: [
                          {
                            text: ' 服装接缝处权重规范',
                            link: '/ArtResource-course/Character/3-2-2-Clothing-Weight-Specification.md'
                          }
                        ]
                      },
                      {
                        text: '2.2 高级动态服装部件',
                        link: '/ArtResource-course/Character/3-2-3-Advanced-Dynamic-Component.md'
                      }
                    ]
                  }
                ]
              },
              {
                text: '角色导出',
                link: '/ArtResource-course/Character/4-0-0-Riginng-Export.md'
              },
              {
                text: '资源提交',
                link: '/ArtResource-course/Character/100-Resource-Submission.md'
              }
            ]
          },
          {
            text: '第三节：3D动画制作流程',
            link: '/ArtResource-course/Animation/0-Amimation-Process.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '动画制作',
                link: '/ArtResource-course/Animation/1-Amimation-production.md',
                items: [
                  {
                    text: '1. 人形动画',
                    link: '/ArtResource-course/Animation/2-Human-Amimation.md'
                  }
                ]
              },
              {
                text: '动画导出',
                link: '/ArtResource-course/Animation/4-Amimation-Export.md'
              },
              {
                text: '资源提交',
                link: '/ArtResource-course/Animation/5-Resource-Submission.md'
              }
            ]
          },
          {
            text: '第四节：3D场景/道具资源制作流程',
            link: '/ArtResource-course/Scene/0-0-Scene-process.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '资源规范',
                link: '/ArtResource-course/Scene/0-resource-specification.md',
                items: [
                  {
                    text: '1. 命名规范',
                    link: '/ArtResource-course/Scene/1-Naming-Conventions.md'
                  },
                  {
                    text: '2. 模型规范',
                    link: '/ArtResource-course/Scene/2-model-specification.md'
                  },
                  {
                    text: '3. 面数推荐',
                    link: '/ArtResource-course/Scene/3-face-recommended.md'
                  },
                  {
                    text: '4. UV规范',
                    link: '/ArtResource-course/Scene/4-UV-specification.md'
                  },
                  {
                    text: '5. 贴图规范',
                    link: '/ArtResource-course/Scene/5-texture-specification.md'
                  },
                  {
                    text: '6. LOD规范',
                    link: '/ArtResource-course/Scene/5-U-LOD.md'
                  },
                  {
                    text: '7. FBX导出设置',
                    link: '/ArtResource-course/Scene/6-FBX-export-settings.md'
                  }
                ]
              },
              {
                text: '资源提交',
                link: '/ArtResource-course/Scene/16-export-engine.md'
              },
              {
                text: '相关资产链接',
                items: [
                  {
                    text: '1. 开发者ID',
                    link: '/ArtResource-course/Scene/DeveloperID.md'
                  },
                  {
                    text: '2. 分类',
                    link: '/ArtResource-course/Scene/Classification.md'
                  },
                  {
                    text: '3. 风格',
                    link: '/ArtResource-course/Scene/artistic-style.md'
                  }
                ]
              }
            ]
          },
          {
            text: '第五节：UI制作流程',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '基础规范',
                link: '/ArtResource-course/UI/UITex-BaseRule.md'
              },
              {
                text: '去重标准',
                link: '/ArtResource-course/UI/UITex-BaseRule02.md'
              },
              {
                text: '质量规范',
                link: '/ArtResource-course/UI/UITex-BaseRule03.md'
              },
              {
                text: '编辑器配置',
                link: '/ArtResource-course/UI/UITex-BaseRule04.md'
              }
            ]
          }
        ]
      }
    ],
    // algolia: {
    //   appId: 'I2PHYUBLCN',
    //   apiKey: '62ee775311415d26549e0e30fef5aa38',
    //   indexName: 'api-docs_prodigytech',
    //   project: {
    //     active: 'learning-docs',
    //     arr: [
    //       {
    //         key: 'learning-docs',
    //         facetFilters: ['tags:learning-docs'],
    //         name: '教程'
    //       },
    //       {
    //         key: 'product-docs',
    //         facetFilters: ['tags:product-docs'],
    //         name: '产品手册'
    //       },
    //       {
    //         key: 'api-docs',
    //         facetFilters: ['tags:api-docs'],
    //         name: 'API'
    //       },
    //       {
    //         name: '论坛',
    //         url: 'https://forum.ark.online/search.php?searchsubmit=yes&mod=forum&srchtxt='
    //       }
    //     ]
    //   },
    //   searchPage: 'https://search.ark.online/#/search'
    // },
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
        'https://github.com/prodigytech-doc/learning-docs/tree/release-025/docs/:path',
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
