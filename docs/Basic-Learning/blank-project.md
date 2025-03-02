# 空工程结构介绍

::: tip 阅读本文大概需要 15 分钟。

使用编辑器接触的第一个项目就是空工程，空工程也是我们伟大项目的起点。本章节我们将会一起学习空工程中的各个对象。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?isOutside=true&aid=322817180&bvid=BV1qw411q7ba&cid=1327554143&p=7&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1.初生点

空工程创建好之后，使用编辑器打开。我们可以在主视口中看到一个  **①胶囊体形状的线框**，这个就是初生点，在对象管理器中我们可以看到它的图标像是一个小旗帜一样。

![22d179d8-c5a0-4ad3-b26f-c98fde9e3cb9](https://arkimg.ark.online/22d179d8-c5a0-4ad3-b26f-c98fde9e3cb9.webp)

初生点的位置与旋转，决定了玩家角色进入游戏后默认的位置与朝向。如果游戏中有多个初生点，玩家进入游戏后会随机选取一个作为默认位置。关于初生点详细功能请查阅：[初生点 | 产品手册 (ark.online)](https://docs.ark.online/GameplayObjects/SpawnPoint.html)

## 2.默认地板模型

在对象管理器中，默认有一个名为 `Ground` 的模型，这个模型就是主视口中格子图案的地板。因为玩家角色生成之后会受到重力影响向下掉，所以每个场景必须有一个地板让玩家可以在上面游玩。

①：属性面板中地板对象。

②：在游戏中，地板模型。

![e5fd860c-2efa-4d2d-9245-e986dff9c25a](https://arkimg.ark.online/e5fd860c-2efa-4d2d-9245-e986dff9c25a.webp)

也许大家已经注意到了，在对象管理器中只有地板对象在最右边有一个小锁子的图标，它代表着在主视口中不可以选中这个模型。

![10854757-fdd9-4e12-aed9-72a63d8da7e4](https://arkimg.ark.online/10854757-fdd9-4e12-aed9-72a63d8da7e4.webp)

将鼠标放在锁子图标边上，可以看到一个 **眼睛样式的图标** ，单击该图标可以切换为闭眼状态。它代表着在编辑器主视口中是否显示该对象，方便搭建复杂关卡。

![e2563cf7-2cfd-48ec-bc1f-39b76964d23d](https://arkimg.ark.online/e2563cf7-2cfd-48ec-bc1f-39b76964d23d.webp)

::: tip 注意

这两个功能仅影响编辑器中的效果，对游戏运行后不会有任何影响。

:::

## 3.DefaultUI

空工程中，会自动创建一个默认 UI 摆放在场景上。这个 UI 自带了摇杆、摄像机滑动区域、跳跃按钮、攻击按钮，并且默认绑定将摇杆的四个方向绑定为 W、A、S、D 按键，得益于默认 UI 我们在空工程直接运行游戏也可以控制玩家行走、跳跃、播放指定动作。

①：拖动到对象管理器中的默认 UI。

②： 默认 UI 拥有的控件，在游戏运行起来提供操控玩家的功能。

③： 默认 UI 的 UI 文件，如果需要修改默认 UI ，可以打开这个文件进行修改。

![bd72de80-28d7-463d-8a79-a2e62cc4e76a](https://arkimg.ark.online/bd72de80-28d7-463d-8a79-a2e62cc4e76a.webp)

在编辑器中， UI 文件并不包含代码逻辑，所以空工程中默认还有一个与 UI 匹配的代码文件，在工程内容 --> 脚本中我们就可以找到它：

![013841f6-ec07-4698-a5d0-4867d77875a5](https://arkimg.ark.online/013841f6-ec07-4698-a5d0-4867d77875a5.webp)

要注意想要将代码文件与 UI 文件相关联，我们需要打开指定 UI 文件 （这里以 Default UI 为例），在 UI 编辑器 --> 对象管理器中选中 Root 节点，在属性面板最下方我们就可以看到与 UI 相关联的代码文件了。

![b299cf89-cdde-4e52-861f-eccc12ba4804](https://arkimg.ark.online/b299cf89-cdde-4e52-861f-eccc12ba4804.webp)

关于 UI 文件、UI 控件等详细介绍与使用请查阅产品手册：[创建游戏界面 (UI) | 产品手册 ](https://docs.ark.online/UI/CreatingUserInterface(UI).html#如何创建游戏界面)

## 5.工程文件夹介绍

在启动器的工程页签中右键某个工程图标，点击“打开本地路径选项”，就会自动打开该项目文件夹。

![4a95a042-7199-449a-b55a-1a1ac399540b](https://arkimg.ark.online/4a95a042-7199-449a-b55a-1a1ac399540b.webp)

项目文件结构如下图：

![c3aa5917-0c31-47e3-9eb9-780104af4669](https://arkimg.ark.online/c3aa5917-0c31-47e3-9eb9-780104af4669.webp)

- `.mw`：存储删除的本地文件（脚本、prefab 等），用以删除文件的恢复，在每次打开工程时会清空此文件夹
- `common`：存储多场景共用资源的位置，创作者上传的资源会保存在该目录下。
- `场景文件夹`: 这里的 Demo 和 Demo1 分别代表了游戏中的多个场景。
- `EditorPluginTyping`：用于插件开发的代码提示文件，也就是 TypeScript 的`.d.ts`文件存放的地方。
- `Typing`：游戏开发中使用的代码提示文件，与上一个文件夹类似不同的是这里存放着的是游戏项目使用的。
- `.projectassembly`：存放多场景文件配置信息以及项目信息的配置文件。

项目中包含了各式各样的文件和目录，除了创作者手动创建的脚本、UI 和 Prefab 之外，其余信息通常由编辑器自动管理。在开发过程中，这些自动维护的信息通常不需要我们特别关注
