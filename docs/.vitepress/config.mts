import type { DefaultTheme } from 'doc-theme-323'
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
    ],
    [
      'script',
      {},
      `
    window.PandoraConfig = {
      base: {
        index_type: 'cDEwMTE2/wl',
        selfpackagename: 'com.metaverse.creator.api',
      },
      other: {
        appkey: 'cDEwMTE2',
        zone: 'zh',
        baseUrl: 'https://push.233leyuan.com'
      }
    }
    `
    ],
    [
      'script',
      {
        src: 'https://wstatic-01-ali.233leyuan.com/common/pandora/5.2.4/pandora_sdk.min.js'
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
            text: 'VSCode安装',
            link: '/Getting-Started/installing-code-editor.md'
          },
          {
            text: '编辑器界面',
            link: '/Getting-Started/editor-main-ui.md'
          },
          {
            text: '编辑器基础操作',
            link: '/Getting-Started/editor-starter.md'
          },
          {
            text: '导入项目或资源',
            link: '/Getting-Started/import-project.md'
          }, {
            text: '发布游戏',
            link: '/Getting-Started/publish-game.md'
          }, {
            text: '常用预制体下载',
            link: '/Getting-Started/easyprefab-list.md'
          }, {
            text: '口袋方舟创作者等级体系',
            link: '/Getting-Started/developerLevel.md'
          }, {
            text: '橙光开发者快速入门指南',
            link: '/Getting-Started/developer66RPG-guide.md'
          }, {
            text: '文游创作者美术稿件获取渠道',
            link: '/Getting-Started/ArtAssetRegulations.md'
          }, {
            text: '星火开发者快速入门指南',
            link: '/Getting-Started/developer-guide.md'
          }, {
            text: '星火编辑器与口袋方舟编辑器常用API对比',
            link: '/Getting-Started/developer-api-compare.md'
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
            text: '日志输出与查看',
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
            text: '修改游戏对象',
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
            text: '客户端与服务端',
            link: '/Online-Gaming/client-and-server.md'
          },
          {
            text: '事件通信',
            link: '/Online-Gaming/events.md'
          },
          {
            text: 'RPC与属性同步',
            link: '/Online-Gaming/property-rpc.md'
          },
          {
            text: '数据存储与同步',
            link: '/Online-Gaming/data-storage.md'
          },
          {
            text: '房间匹配规则',
            link: '/Online-Gaming/room-matching.md'
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
            text: '自定义脚本属性',
            link: '/Masters-Road/custom-property.md'
          },
          {
            text: '冲量与冲量对象',
            link: '/Masters-Road/impulse.md'
          },
          {
            text: 'Tween动画',
            link: '/Masters-Road/tween.md'
          },
          {
            text: '模块管理',
            link: '/Masters-Road/module.md'
          },
          {
            text: '世界UI使用大全',
            link: "/Masters-Road/worldUI.md"
          },
          {
            text: "使用禁行区制作动态门",
            link: "/Masters-Road/blockArea.md"
          },
          {
            text: "使用游泳区域制作泳池",
            link: "/Masters-Road/swimArea.md"
          },
          {
            text: "寻路功能",
            link: "/Masters-Road/navigation.md"
          }
        ]
      },
      {
        text: '性能优化',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "性能优化-CPU",
            link: "/Optimisation/CPU.md"
          },
          {
            text: "性能优化-内存",
            link: "/Optimisation/Memory.md"
          },
          {
            text: "性能优化-渲染",
            link: "/Optimisation/Rendering.md"
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
            text: '创建工程并导入场景',
            link: '/bomberman-course/1-create-project.md'
          },
          {
            text: '添加空气墙',
            link: '/bomberman-course/2-add-Point.md'
          },
          {
            text: '创建炸弹预制体',
            link: '/bomberman-course/3-create-prefab.md'
          },
          {
            text: '创建控制 UI',
            link: '/bomberman-course/4-create-ui.md'
          },
          {
            text: '服务端创建炸弹',
            link: '/bomberman-course/5-server-create-boom.md'
          },
          {
            text: '玩家伤害与复活',
            link: '/bomberman-course/6-respawn-player.md'
          },
          {
            text: '运行测试游戏',
            link: '/bomberman-course/7-test-game.md'
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
        text: '制作美术资源',
        link: '/ArtResource-course/000-PGC.md',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'DCC环境配置',
            link: '/ArtResource-course/001-Environment-configuration.md'
          },
          {
            text: '3D角色制作流程',
            link: '/ArtResource-course/Character/0-0-0-3D-character-production-process.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '角色分类',
                link: '/ArtResource-course/Character/1-1-0-Role-Classification.md'
              },
              {
                text: '命名规范',
                link: '/ArtResource-course/Character/2-1-0-Namepolicy.md',
              },
              {
                text: '角色/NPC/多足',
                link: '/ArtResource-course/Character/2-2-0-CharacterProduction.md',
                items: [
                  {
                    text: '模型规范',
                    link: '/ArtResource-course/Character/2-2-1-Character-modelling.md'
                  },
                  {
                    text: '贴图规范',
                    link: '/ArtResource-course/Character/2-2-2-Character-Texture.md'
                  },
                  {
                    text: '模型绑定',
                    link: '/ArtResource-course/Character/2-2-3-Character-Riging.md'
                  },
                  {
                    text: '角色导出',
                    link: '/ArtResource-course/Character/2-2-4-Character-Export.md'
                  }
                ]
              },
              {
                text: '服装发型',
                link: '/ArtResource-course/Character/2-3-0-Clothing-Hair-production.md',
                items: [
                  {
                    text: '局外与局内',
                    link: '/ArtResource-course/Character/2-3-1-Clothing-Hair-Rule.md'
                  },
                  {
                    text: '模型规范',
                    link: '/ArtResource-course/Character/2-3-2-Clothing-Hair-Modelling.md'
                  },
                  {
                    text: '贴图规范',
                    link: '/ArtResource-course/Character/2-3-3-Clothing-Hair-Texture.md'
                  },
                  {
                    text: '绑定基础介绍',
                    link: '/ArtResource-course/Character/2-3-4-Clothing-Hair-RigingRule.md'
                  },
                  {
                    text: '模型绑定',
                    link: '/ArtResource-course/Character/2-3-5-Clothing-Hair-Riging.md'
                  },
                  {
                    text: '资源导出',
                    link: '/ArtResource-course/Character/2-3-6-Clothing-Hair-Export.md'
                  }
                ]
              },
              {
                text: '妆容制作',
                link: '/ArtResource-course/Character/2-4-0-MakeupProdction.md'
              },
              {
                text: '编辑器捏模/套装制作及上传',
                link: '/ArtResource-course/Character/2-5-0-EditorSuitNCharacter-Upload.md'
              }
            ]
          },
          {
            text: '3D动画制作流程',
            link: '/ArtResource-course/Animation/0-0-0-3D-Animation.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '动画分类',
                link: '/ArtResource-course/Animation/1-0-0-Animation-Classification.md'
              },
              {
                text: '命名规范',
                link: '/ArtResource-course/Animation/2-0-0-Namepolicy.md'
              },
              {
                text: '角色/NPC/多足动画',
                link: '/ArtResource-course/Animation/3-1-0-Character-Animation.md',
                items: [
                  {
                    text: '动画制作',
                    link: '/ArtResource-course/Animation/3-1-1-Character-MakingAnimation.md'
                  },
                  {
                    text: '动画导出',
                    link: '/ArtResource-course/Animation/3-1-2-Character-AnimationExport.md'
                  }
                ]
              },
              {
                text: '角色装扮资源动画',
                link: '/ArtResource-course/Animation/4-1-0-Cloting-Animation.md',
                items: [
                  {
                    text: '动画制作',
                    link: '/ArtResource-course/Animation/4-2-1-Cloting-MakingAnimation.md'
                  },
                  {
                    text: '动画导出',
                    link: '/ArtResource-course/Animation/4-2-2-Cloting-AnimationExport.md'
                  }
                ]
              }
            ]
          },
          {
            text: '3D场景/道具/挂件/手持物制作流程',
            link: '/ArtResource-course/Scene/0-0-Scene-process.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '资源规范',
                link: '/ArtResource-course/Scene/0-resource-specification.md',
                items: [
                  {
                    text: '模型规范',
                    link: '/ArtResource-course/Scene/2-model-specification.md'
                  },
                  {
                    text: '面数推荐',
                    link: '/ArtResource-course/Scene/3-face-recommended.md'
                  },
                  {
                    text: 'UV规范',
                    link: '/ArtResource-course/Scene/4-UV-specification.md'
                  },
                  {
                    text: '贴图规范',
                    link: '/ArtResource-course/Scene/5-texture-specification.md'
                  },
                  {
                    text: 'LOD规范',
                    link: '/ArtResource-course/Scene/5-U-LOD.md'
                  },
                  {
                    text: 'FBX导出设置',
                    link: '/ArtResource-course/Scene/6-FBX-export-settings.md'
                  }
                ]
              },
              {
                text: '编辑器材质实战',
                link: '/ArtResource-course/Scene/17-0-Material-Practice.md',
                items: [
                  {
                    text: 'PBR基础效果',
                    link: '/ArtResource-course/Scene/17-1-1PBR-Basic-Effects.md'
                  },
                  {
                    text: 'PBR高级效果',
                    link: '/ArtResource-course/Scene/17-1-2PPBR-Advanced-Effects.md'
                  },
                  {
                    text: '透明/半透明效果',
                    link: '/ArtResource-course/Scene/17-1-3Transparent.md'
                  },
                  {
                    text: '纹理坐标与世界坐标',
                    link: '/ArtResource-course/Scene/17-1-4World-Coordinates.md'
                  },
                  {
                    text: '贴图位移应用',
                    link: '/ArtResource-course/Scene/17-1-5Map-displacement.md'
                  },
                  {
                    text: '贴花应用',
                    link: '/ArtResource-course/Scene/17-1-6Decals.md'
                  },
                  {
                    text: '呼吸灯/自发光',
                    link: '/ArtResource-course/Scene/17-1-7Breathing-Lamp.md'
                  },
                  {
                    text: '植物制作',
                    link: '/ArtResource-course/Scene/17-1-8plant.md'
                  },
                  {
                    text: '次表面',
                    link: '/ArtResource-course/Scene/17-1-9Subsurface.md'
                  },
                  {
                    text: '果冻',
                    link: '/ArtResource-course/Scene/18-1-1jelly.md'
                  },
                  {
                    text: '水晶城堡',
                    link: '/ArtResource-course/Scene/18-1-2Crystal-Castles.md'
                  },
                  {
                    text: 'LED闪烁屏',
                    link: '/ArtResource-course/Scene/19-1-1shanshuo.md'
                  },
                  {
                    text: '马赛克闪烁图案',
                    link: '/ArtResource-course/Scene/19-1-2mashaikeshansuo.md'
                  },
                  {
                    text: 'LED马赛克屏',
                    link: '/ArtResource-course/Scene/19-1-3mashaike.md'
                  },
                  {
                    text: '翻页',
                    link: '/ArtResource-course/Scene/19-1-4fanye.md'
                  },
                  {
                    text: '动画GIF效果',
                    link: '/ArtResource-course/Scene/19-1-5GIF.md'
                  },
                  {
                    text: '故障效果',
                    link: '/ArtResource-course/Scene/19-1-6guzhang.md'
                  }
                ]
              }
            ]
          },
          {
            text: '背景商品制作流程',
            link: '/ArtResource-course/Background/000-background.md'
          },
          {
            text: '特效制作流程',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '3D特效制作实例',
                link: '/ArtResource-course/Effect/000-Effect.md'
              }
            ]
          },
          {
            text: 'UI制作流程',
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
              },
              {
                text: '商品icon制作教程',
                items: [
                  {
                    text: '服装、发型',
                    link: '/ArtResource-course/UI/UITex-clothNhairicon.md'
                  },
                  {
                    text: '妆容',
                    link: '/ArtResource-course/UI/UITex-makeupicon.md'
                  },
                ]
              }
            ]
          },
          {
            text: '口袋方舟资源导入上传',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '服装部件/角色NPC/多足/自定义骨骼模型动画导入上传',
                link: '/ArtResource-course/Upload/0-0-Role.md',
                items: [
                  {
                    text: '角色NPC/多足/自定义骨骼',
                    link: '/ArtResource-course/Upload/0-1-Role-NPC-.md'
                  },
                  {
                    text: '服装资源',
                    link: '/ArtResource-course/Upload/0-2-clothing.md'
                  },
                  {
                    text: '动画资源',
                    link: '/ArtResource-course/Upload/0-3-Animation.md'
                  },
                  {
                    text: '上传工具设置预览功能',
                    link: '/ArtResource-course/Upload/0-4-Upload.md'
                  },
                  {
                    text: '骨骼模型/动画上传注意事项',
                    link: '/ArtResource-course/Upload/0-5-Notice.md'
                  }
                ]
              },
              {
                text: '3D场景/道具/挂件/手持物导入上传',
                link: '/ArtResource-course/Upload/1-StaticModel.md'
              },
              {
                text: 'UI导入上传',
                link: '/ArtResource-course/Upload/2-UI.md'
              }
            ]
          }
        ]
      },
      {
        text: '商品制作教程',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '商品分类简介',
            link: '/ProductMaking-Guide/1_0_0_Introduction-to-Product-Classification.md'
          },
          {
            text: '开始制作商品',
            link: '/ProductMaking-Guide/2_0_0_Start-making-products.md'
          },
          {
            text: '软件环境配置',
            link: '/ProductMaking-Guide/3_0_0_Software-environment-configuration.md'
          },
          {
            text: '头发',
            link: '/ProductMaking-Guide/4_0_0_Hair.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '头发模型制作',
                link: '/ProductMaking-Guide/4_1_0_Hair-model.md'
              },
              {
                text: '头发绑定',
                link: '/ProductMaking-Guide/4_2_0_Hair-binding.md',
              },
              {
                text: '头发材质',
                link: '/ProductMaking-Guide/4_3_0_Hair-Material.md',
              },
              {
                text: '头发商品上传',
                link: '/ProductMaking-Guide/4_4_0_Hair-upload.md',
              }
            ]
          },
          {
            text: '服装',
            link: '/ProductMaking-Guide/5_0_0_Clothing.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '服装模型制作',
                link: '/ProductMaking-Guide/5_1_0_Clothing-model.md'
              },
              {
                text: '服装绑定',
                link: '/ProductMaking-Guide/5_2_0_Clothing-binding.md'
              },
              {
                text: '服装材质',
                link: '/ProductMaking-Guide/5_3_0_Clothing-material.md'
              },
              {
                text: '服装商品上传',
                link: '/ProductMaking-Guide/5_4_0_Clothing-upload.md'
              }
            ]
          },
          {
            text: '套装',
            link: '/ProductMaking-Guide/6_0_0_Suit.md'
          },
          {
            text: '饰品',
            link: '/ProductMaking-Guide/7_0_0_Accessories.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '静态饰品模型',
                link: '/ProductMaking-Guide/7_1_0_Static-accessories-model.md'
              },
              {
                text: '静态饰品上传',
                link: '/ProductMaking-Guide/7_2_0_Static-accessories-upload.md'
              },
              {
                text: '静态饰品商品分类配置',
                link: '/ProductMaking-Guide/7_3_0_Static-accessories-mounting-configuration.md'
              },
              {
                text: '静态饰品&背景材质配置',
                link: '/ProductMaking-Guide/7_4_0_Material-Practice.md',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    text: 'PBR基础效果',
                    link: '/ProductMaking-Guide/7_4_1_PBR-Basic-Effects.md'
                  },
                  {
                    text: 'PBR高级效果',
                    link: '/ProductMaking-Guide/7_4_2_PBR-Advanced-Effects.md'
                  },
                  {
                    text: '透明/半透明效果',
                    link: '/ProductMaking-Guide/7_4_3_Transparent.md'
                  },
                  {
                    text: '呼吸灯/自发光',
                    link: '/ProductMaking-Guide/7_4_4_Breathing-Lamp.md'
                  }
                ]
              },
              {
                text: '动态饰品模型',
                link: '/ProductMaking-Guide/7_5_0_Dynamic-accessories-model.md'
              },
              {
                text: '动态饰品绑定',
                link: '/ProductMaking-Guide/7_6_0_Dynamic-accessories-binding.md'
              },
              {
                text: '动态饰品上传',
                link: '/ProductMaking-Guide/7_7_0_Dynamic-accessories-upload.md'
              },
              {
                text: '动态饰品商品分类配置',
                link: '/ProductMaking-Guide/7_8_0_Dynamic-accessories-mounting-configuration.md'
              }
            ]
          },
          {
            text: '背景',
            link: '/ProductMaking-Guide/8_0_0_Background-products.md'
          },
          {
            text: '眼睛/眉毛/妆容制作',
            link: '/ProductMaking-Guide/9_0_0_Makeup.md'
          },
          {
            text: '全妆',
            link: '/ProductMaking-Guide/10_0_0_Complete-makeup.md'
          },
          {
            text: '特殊形象',
            link: '/ProductMaking-Guide/12_0_0_PiTao.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '模型',
                link: '/ProductMaking-Guide/12_1_0_PiTao-model.md'
              },
              {
                text: '绑定',
                link: '/ProductMaking-Guide/12_2_0_PiTao-Skin.md'
              },
              {
                text: '材质',
                link: '/ProductMaking-Guide/12_3_0_PiTao-Material.md'
              },
              {
                text: '上传',
                link: '/ProductMaking-Guide/12_4_0_PiTao-upload.md'
              }
            ]
          },
          {
            text: '商品Icon',
            link: '/ProductMaking-Guide/11_0_0_Product-icon-production.md',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: '服装&发型',
                link: '/ProductMaking-Guide/11_1_0_Clothing-hair-icon.md'
              },
              {
                text: '妆容',
                link: '/ProductMaking-Guide/11_2_0_Makeup-icon.md'
              },
              {
                text: 'UI导入上传',
                link: '/ProductMaking-Guide/11_5_0_UI-Import-Upload.md'
              }
            ]
          },
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
