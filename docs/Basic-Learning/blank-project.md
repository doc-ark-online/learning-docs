# 空工程结构介绍

::: tip 阅读本文大概需要 15 分钟。

使用编辑器接触的第一个项目就是空工程，空工程也是我们伟大项目的起点。本章节我们将会一起学习空工程中的各个对象。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317927656&p=7&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 初生点

空工程创建好之后，使用编辑器打开。我们可以在主视口中看到一个  **①胶囊体形状的线框**，这个就是初生点，在对象管理器中我们可以看到它的图标像是一个小旗帜一样。

![45ef10bf-3341-48ba-93ad-bbcab771113a](https://arkimg.ark.online/45ef10bf-3341-48ba-93ad-bbcab771113a.webp)

初生点的位置与旋转，决定了玩家角色进入游戏后默认的位置与朝向。如果游戏中有多个初生点，玩家进入游戏后会随机选取一个作为默认位置。关于初生点详细功能请查阅：[初生点 | 产品手册 (ark.online)](https://docs.ark.online/GameplayObjects/SpawnPoint.html)

## 2.默认地板模型

在对象管理器中，默认有一个名为 `Ground` 的模型，这个模型就是我们的地板。因为玩家角色生成之后会受到重力影响向下掉，所以我们需要一个地板让玩家可以在上面游玩。

①：属性面板中地板对象。

②：在游戏中，地板模型。

![ff52ef32-22ca-49d6-bd7f-87104f5e6c79](https://arkimg.ark.online/ff52ef32-22ca-49d6-bd7f-87104f5e6c79.webp)

也许大家已经注意到了，在对象管理器中只有地板对象在最右边有一个小锁子的图标，它代表着在主视口中不可以选中这个模型。

![image-20230922143551228](https://arkimg.ark.online/image-20230922143551228.png)

将鼠标放在锁子图标边上，可以看到一个 **眼睛样式的图标** ，单击该图标可以切换为闭眼状态。它代表着在编辑器主视口中是否显示该对象，方便搭建复杂关卡。

![f7b3d3f9-c028-4603-83f9-e9cc59216481](https://arkimg.ark.online/f7b3d3f9-c028-4603-83f9-e9cc59216481.webp)

::: tip 注意

这两个功能仅影响编辑器中的效果，对游戏运行后不会有任何影响。

:::

## 3. Default UI ( 默认UI )

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

![2efc4e86-0766-494e-9f68-268cfd91bc5b](https://arkimg.ark.online/2efc4e86-0766-494e-9f68-268cfd91bc5b.webp)

- `.mw`：存储删除的本地文件（脚本、prefab 等），用以删除文件的恢复，在每次打开工程时会清空此文件夹
- `AutoBackup`：编辑器项目自动备份得文件夹。
- `.vscode`: VSCode 的配置文件夹，根据用户个人配置需求生成的目录
- `Character`: 在项目中，使用了角色编辑器，就会产生该文件夹，里面存储了用户自己编辑的角色数据
- `Config`：该项目的配置项文件夹，比如资源路径、窗口大小、项目设置信息、按键绑定信息等等
- `DBCache`：本地缓存，项目调用了数据存储接口时，在 PC 端运行后会在该目录下生成对应的数据文件。删除该目录等于清空游戏的数据存储
- `dist` ：编译缓存目录，每次编译都会生成 game.js 文件在该目录下
- `JavaScripts`：<Badge type="danger" text="重要" /> 脚本文件目录，用户创建的所有脚本都在该目录下
- `Levels`：场景文件夹，包含游戏中的场景文件
- `Materials`: 材质文件夹，用户新建材质后，会在该目录下生成对应的数据文件，该目录保存了所有用户自定义的材质
- `Pictures`：游戏场景截图（自动的），会展示在项目列表
- `Prefabs`：<Badge type="danger" text="重要" /> 预制体文件目录，项目中所有的预制体会存储在该目录下（不管是自己创建的还是资源库下载使用的都在这里）
- `UI`：<Badge type="danger" text="重要" /> 存储所有 UI 文件的目录（如果引用了代码文件，依然会在 `JavaScripts` 目录下）
- `All_Json`：整个项目的数据合并文件
- `Asset_Data_List`：场景里面使用到的资源信息列表，包含每个用到的资源的信息
- `build.ts`: 系统自动生成的临时文件，无需关注
- `Local_Asset_List`: 所有该项目使用的本地资源的索引数据
- `xxxxxx.project`：游戏项目文件，存储项目的基本信息
- `tsconfig.json`：TypeScript 使用 tsconfig.json 文件作为其配置文件，新打开项目编辑器会自动创建

可以看到一个项目中包含了各种各样的文件和目录，但是除了我们创建的脚本、UI 和 Prefab 以外，其他的信息基本上都是由编辑器自己维护的，一般在开发中是无需关注的。
