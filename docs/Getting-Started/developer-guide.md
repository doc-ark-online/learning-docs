# 星火开发者快速入门指南

::: tip 阅读本文大概需要 15 分钟。

本文将从星火编辑器使用者的视角下来从多个角度进行对比，帮助创作者快速了解口袋方舟编辑器。

:::

随着游戏功能日渐增多、逻辑越来越复杂，创作者们更习惯于使用代码进行游戏开发。口袋方舟编辑器正好满足这一需求，我们不仅提供了官方的代码支持，还配备了众多插件、预制体和功能对象，以帮助开发者更快捷地实现游戏逻辑。

在联机方面官方也提供了免费的服务器供大家使用，真正实现一套代码发布到不同平台（PC、Android、IOS）。

游戏发布后我们还提供了完整的运营工具，帮助创作者分析游戏数据、排查线上错误等。

## 1. 安装与环境配置

### 1.1 安装编辑器

> 详细教程请阅读这篇：[安装与启动 | 教程](https://learning.ark.online/Getting-Started/installing-starter.html)

访问[口袋方舟官网](https://creator.ark.online/)，在页面中间点击 **“下载编辑器”** 按钮，来下载我们的启动器，根据教程安装好之后我们来对比进行学习。

### 1.2 项目管理

> 详细介绍可以查阅这篇教程：[安装与启动| Editor使用 | 教程](https://learning.ark.online/Getting-Started/installing-starter.html#_2-editor-的注册与使用)

在口袋方舟中，创建项目同样可以使用编辑器自带模板或空工程模板。在口袋方舟中提供了两类模板，首页图中间有文字的是带有完整游戏逻辑的项目，除了这些带有逻辑的项目外是美术提供的主要用于展示美术效果的模板。

❗ 在口袋方舟中游戏开发中生产的资源、代码合并称之为**游戏工程**，与星火中的项目概念是等价的。

| 口袋方舟中的创建新工程                                       | 星火中创建新项目                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![f25a892f-767a-4af3-9ccd-c4b5b9f32bd9](https://arkimg.ark.online/f25a892f-767a-4af3-9ccd-c4b5b9f32bd9.webp) | ![5f521677-02c6-4281-b501-0a13bb5deb6c](https://arkimg.ark.online/5f521677-02c6-4281-b501-0a13bb5deb6c.webp) |

历史工程管理同样也在编辑器页签中，不同的是我们需要选中下方**工程按钮**

| 口袋方舟中的历史工程                                         | 星火中的历史项目                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![9267508a-8e87-4b68-843d-7a8e8cdd1137](https://arkimg.ark.online/9267508a-8e87-4b68-843d-7a8e8cdd1137.webp) | ![87d369eb-8435-46a0-a95e-c5154a012eed](https://arkimg.ark.online/87d369eb-8435-46a0-a95e-c5154a012eed.webp) |

### 1.2 代码编辑器安装 

> Visual Studio Code 安装详细教程可以看这篇： [VSCode 安装 | 教程](https://learning.ark.online/Getting-Started/installing-code-editor.html)

在口袋方舟中我们同样使用的是 Visual Studio Code 进行代码开发，下文为了方便我简写为 VSCode。

- 编辑器无需特定 VSCode 版本，大家直接去官网下载最新版本即可。
- 无需安装任何插件，使用 VSCode 自带的功能即可实现断点调试功能。

### 1.3 配置断点调试

依托于 VSCode 自身功能，我们只需要配置一下 launch.json 文件即可实现断点调试功能。

![ceacccbe-0333-46a4-b547-0dd02506bddd](https://arkimg.ark.online/ceacccbe-0333-46a4-b547-0dd02506bddd.webp)

① 点击运行与调试按钮

② 点击创建 launch.js 文件 (如果之前有过配置可以新增一个)

③ 选择 Node.js

这样就可以创建一个调试配置文件，接下来需要替换为我们官方提供的配置文件，即可进行调试。

配置文件下载：https://arkimg.ark.online/launch.json

## 2. 编辑器基础操作

下面仅列出最常见功能，详细教程可以看这篇：[编辑器界面 | 教程](https://learning.ark.online/Getting-Started/editor-main-ui.html)

### 2.1 场景物体管理

在口袋方舟中，场景内的所有物体会显示在对象管理器中，类似于星火中的场景列表。

| 口袋方舟中的场景管理器                                       | 星火中场景物体管理器                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![616f7a6c-3a74-41dd-89a7-969a65da98d9](https://arkimg.ark.online/616f7a6c-3a74-41dd-89a7-969a65da98d9.webp) | ![7143d2b3-0595-48fa-9076-6c82d7e146b3](https://arkimg.ark.online/7143d2b3-0595-48fa-9076-6c82d7e146b3.webp) |

### 2.2 场景物体属性面板

在口袋方舟中选中场景上的物体，同样会将该对象身上的属性列出到属性面板中

| 口袋方舟中的属性面板                                         | 星火中的属性面板                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![accf137a-f784-4ae7-978e-128eccad0675](https://arkimg.ark.online/accf137a-f784-4ae7-978e-128eccad0675.webp) | ![cba42bc7-a0cf-4f11-826a-9da1c92396eb](https://arkimg.ark.online/cba42bc7-a0cf-4f11-826a-9da1c92396eb.webp) |

### 2.3 编辑器资源库

在口袋方舟中，官方提供了海量不同风格的免费资源帮助创作者进行游戏开发，在左侧资源库中可以根据不同分类选择合适的资源，拖入场景中。

在口袋方舟中资源大体分为两类：

- 美术资源：比如模型、材质、服装、音频等，这些用来构筑游戏的效果。
- 功能对象：内置了功能逻辑，仅需使用胶水代码将他们粘合起来即可实现多种游戏逻辑

| 美术资源                                                     | 功能对象                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![91b83f8c-9120-43a3-aa4c-bf25c8d91a0c](https://arkimg.ark.online/91b83f8c-9120-43a3-aa4c-bf25c8d91a0c.webp) | ![1f19998f-a509-4b8c-ae19-322b305f4309](https://arkimg.ark.online/1f19998f-a509-4b8c-ae19-322b305f4309.webp) |

### 2.4 运行游戏

在口袋方舟中运行游戏十分简单，可以点击最上方页签中的运行按钮，因为我们原生支持联机所以需要设置下当前要启动几个客户端进行游戏。

| 0.41 之后版本的运行按钮                                      | 0.40 版本的调运行按钮                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![42f258dd-83df-46de-9933-5d5a9b96a489](https://arkimg.ark.online/42f258dd-83df-46de-9933-5d5a9b96a489.webp) | ![eed961d0-17ba-41ff-a6d2-6465fcaedcb4](https://arkimg.ark.online/eed961d0-17ba-41ff-a6d2-6465fcaedcb4.webp) |

### 2.5 外部资源导入

在口袋方舟中，工程内用到的资源全部放置在工程内容页签下。如果需要导入任何外部资源都可以点击**资源导入按钮**进行导入。

> 详细导入教程可以看这篇：[资源导入上传工具 | 产品手册](https://docs.ark.online/Resource/AssetUpload.html)

![383db27f-b0cd-47a9-ba40-31f2cfd53973](https://arkimg.ark.online/383db27f-b0cd-47a9-ba40-31f2cfd53973.webp)

### 2.2  界面编辑器

> UI 相关详细教程：[创建游戏界面 (UI) | 产品手册](https://docs.ark.online/UI/CreatingUserInterface(UI).html)

在口袋方舟中我们称界面为 UI，制作 UI 需要打开 UI 编辑器进行创作，接下来我们来使用 UI 编辑器打开默认的操作 UI：

![1ac3db31-9fad-41e6-96b2-e7a40260f793](https://arkimg.ark.online/1ac3db31-9fad-41e6-96b2-e7a40260f793.webp)

在工程内容中双击 `DefaultUI` ，它是我们每个项目自带的控制 UI，包含了摇杆和跳跃按钮等控件。双击打开之后就会进入到我们的 UI 编辑器：

![be1cc251-a7bc-433b-b810-a28a8b46af28](https://arkimg.ark.online/be1cc251-a7bc-433b-b810-a28a8b46af28.webp)

在口袋房中每个 UI 文件代表着一整个界面，可以在 UI 编辑器的对象管理器中查看当前 UI 文件中已有的控件

| 口袋方舟中 UI 文件中已有控件列表                             | 星火中界面上已有控件列表                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![83aafbc1-dde8-4154-a7ca-73672f5398c7](https://arkimg.ark.online/83aafbc1-dde8-4154-a7ca-73672f5398c7.webp) | ![5217e26c-fb08-48bc-a5ec-7d4a275922ca](https://arkimg.ark.online/5217e26c-fb08-48bc-a5ec-7d4a275922ca.webp) |

在口袋方舟中提供了相当多的控件供创作者们快速制作各类界面：

| 口袋方舟中的 UI 控件                                         | 星火中的 UI 控件                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![6010d658-a191-4e18-897f-efafc1405bb8](https://arkimg.ark.online/6010d658-a191-4e18-897f-efafc1405bb8.webp) | ![a0b27bfa-8de2-4c0c-8df1-10b6b4af938c](https://arkimg.ark.online/a0b27bfa-8de2-4c0c-8df1-10b6b4af938c.webp) |

## 3.代码开发概述

### 3.1 创建脚本

> 详细教程可以查看：[脚本 | 教程](https://learning.ark.online/Basic-Learning/script-lifecycle.html)

在口袋方舟中脚本主要分为两种：

- 普通脚本：普通脚本可以运行在服务端、客户端，可以将它们添加到场景上的物体上。这类脚本主要用于实现游戏中各类逻辑。
- UI 脚本：UI 脚本只能添加到 UI 文件上，并且只能运行在客户端（因为服务端没有 UI ），这类脚本用于实现 UI 效果、响应按钮等控件的点击事件等。

在工程内容里可以根据需求创建对应的脚本。

![5ac50d77-fdf8-461e-bb60-b5a1fe247ae6](https://arkimg.ark.online/5ac50d77-fdf8-461e-bb60-b5a1fe247ae6.webp)

### 3.2 脚本编写差异

> 详细教程可以查阅：[脚本 生命周期| 教程](https://learning.ark.online/Basic-Learning/script-lifecycle.html#_3-脚本常用生命周期)

在星火中所有的代码都是由触发器接收到某个事件之后开始执行，而在口袋方舟中更符合传统游戏引擎的实现，是每个脚本可以附加在一个游戏对象上，在游戏运行后开始执行各自的生命周期。

![709f1e4f-4edf-4815-ad4b-4406bdfba29b](https://arkimg.ark.online/709f1e4f-4edf-4815-ad4b-4406bdfba29b.webp)

口袋方舟中脚本的常见生命周期：

- onStart ：运行时执行一次。
- onUpdate：setUpdate 设置为 true 后，每帧被执行，设置为false，不会执行。
- onDestroy ：被销毁时调用。

一个空白的脚本是这样的：

```typescript
@Component
export default class GameStart extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {
    }
}
```

### 3.3 服务端与客户端

在星火中，触发器分为服务端触发器、客户端触发器，在口袋方舟中同样有类似的概念，只不过我们还多了一个：双端。

- 服务端：只运行在服务端。
- 客户端：只运行在客户端中，比如 UI 脚本。
- 双端：由服务器创建，自动同步到客户端的脚本。

在编辑器中，双端脚本可以使用 `SystemUtil.isClient()`  和 `SystemUtil.isServer()` 函数来区分该段代码的运行环境，在口袋方舟中，脚本可以附加在游戏对象上，所以脚本的运行环境与取决于游戏对象的运行环境。可以在对象面板上修改它：

![104d146b-fd6b-402b-a842-a496b22c7795](https://arkimg.ark.online/104d146b-fd6b-402b-a842-a496b22c7795.webp)

如上图：S 代表这是一个纯服务端对象，C 代表这是一个纯 C 端对象，S&C 就代表着它是一个双端对象了~

###  3.4 查找游戏对象

> 详细教程可以查看 ：
>
> [游戏对象 | 教程](https://learning.ark.online/Core-Learning/gameobject.html)
>
> [修改游戏对象 | 教程](https://learning.ark.online/Core-Learning/controlling-objects.html)

在口袋方舟中，场景上所有的物体都称之为游戏功能对象（GameObject），在脚本中它们也都继承自统一的基类`GameObject`

要在获取场景上的一个物体，可以使用 `GameObject.asyncFindGameObjectById("")` 方法进行异步查找游戏对象，找到之后可以使用 `as` 关键字转换为对应类型。

eg：查找场景上一个触发器，并添加进入事件：

```typescript
protected onStart(): void {
    if (SystemUtil.isClient()) {
        GameObject.asyncFindGameObjectById("357C1504").then(go=>{
            const trigger = go as Trigger;
            trigger.onEnterTrigger.add((this.TriggerEnter.bind(this));
        });
    }
}
```

另外场景上还有一些**世界**对象，这些游戏对象在每个游戏场景中都是唯一的，所以口袋方舟封装了一些单例来操作它们：

- 摄像机：Camera
- 后处理：PostProcess
- 雾效果：Fog
- 环境光：Lighting

更多 API 可以查阅我们的 API 手册：[口袋方舟 | API](https://api-docs.ark.online/)

### 3.5 创建游戏对象

上一小节讲到了搜索场景中已存在的游戏对象，接下来我们来学习下如何使用代码创建指定的游戏对象。在口袋方舟中所有的游戏对象都是通过`Spawn`接口进行创建的，由于资源加载需要一定的时间建议创作者们全部使用异步方法进行生成也就是`GameObject.asyncSpawn` 

eg: 生成一个模型

```typescript
@Component
export default class GameStart extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        if (SystemUtil.isClient()) {
            GameObject.asyncSpawn("360264").then(go => {
                go.worldTransform.position = Vector.zero;
            });
        }
    }
}
```



### 3.6 本地玩家与其他玩家

在口袋方舟中，当前客户端控制的玩家称之为本地玩家，与星火中同名的概念类似，在客户端中直接使用 `Player.localPlayer;` 即可获取。

eg：在游戏开始后在客户端获取本地玩家：

```typescript
@Component
export default class GameStart extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            const localPlayer = Player.localPlayer;
        }
    }
}
```

如果要获取其他玩家，可以使用`Player.getAllPlayers()`方法获取房间内所有玩家数组，要获取某个指定玩家可以通过该玩家的`userId`使用`Player.getPlayer("xxxxxx")`方法来获取。

## 4. 其它学习资料

### 4.1 常用网址

API 查询，这里罗列了当前所有可用 API ：[口袋方舟 | API](https://api-docs.ark.online/)

产品手册，这里罗列了每个功能的详细介绍：[口袋方舟 | 产品手册](https://docs.ark.online/)

教程文档，包含常用逻辑的实现方法与功能快速上手：[口袋方舟 | 教程](https://learning.ark.online/)

创作者论坛，遇到使用问题或者交流创作心得都可以在这里发帖：[口袋方舟论坛｜创作者社区](https://forum.ark.online/)

开箱可用，这里有大量官方和第三方分享的功能预制体：[开箱可用 - 口袋方舟论坛](https://forum.ark.online/plugin.php?id=one_market)

### 4.2 TS 教程

文档教程：[TypeScript 学习 | 教程](https://learning.ark.online/Basic-Learning/learning-typescript.html)

视频教程：[零基础系列课程一：TypeScript](https://www.bilibili.com/video/BV1Rz421b7FE/)







