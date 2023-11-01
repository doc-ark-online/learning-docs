# 编辑器界面

::: tip 阅读本文大概需要 8 分钟。

使用编辑器前，我们先来认识一下编辑器的各个界面以及它们的基础功能。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317926673&p=3&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

参照产品手册：[主编辑器各窗口操作 | 产品手册 (ark.online)](https://docs.ark.online/Editor/EditorWindowsOperation.html)

![05571e78-c3de-4a74-a262-54be102a22e1](https://arkimg.ark.online/05571e78-c3de-4a74-a262-54be102a22e1.webp)

* 编辑器主界面可分为 7 个区域：菜单栏、工具栏、本地资源库、主视口、工程内容、对象管理器、属性面板
* 下面分别对几个区域的功能进行简单的介绍

## 1. 菜单栏

菜单栏包含 “工程”，“视图”，“帮助” 三个菜单项，如图。

![image-20230518174437987](https://arkimg.ark.online/image-20230518174437987.webp)

:::tip

在帮助中可以跳转到论坛，有任何使用上的问题都可以在论坛反馈给我们！

:::

在 “工程” 菜单中，包含了我们工程相关常使用的功能，如 “新建”、“打开”、“保存”、“备份”、“发布游戏”、“更新已发布游戏”、“删除 PIE 缓存”、“退出登录”、“退出” 等，具体菜单如图：

![image-20230518174639514](https://arkimg.ark.online/image-20230518174639514.webp)

在 “视图” 菜单中，包含了我们编辑器的所有视窗，单击窗口左侧勾选框，**可以切换是否在编辑器中显示该视窗**，有如下选项：主视口、本地资源库、工程内容、对象管理器、属性面板等，具体菜单如图：

![image-20230518174735613](https://arkimg.ark.online/image-20230518174735613.webp)

::: warning 注意

如果我们 **不小心关闭** 了诸如  **主视口** 之类的窗口，可以通过勾选 **视图** 里的对应勾选框恢复该窗口的显示

也可以直接在最下方选择 “恢复默认布局” 把所有布局重置

:::

## 2. 工具栏

在工具栏中，包含了开发过程中的一些常用功能，包括通用模式、移动、旋转、缩放、网格、碰撞、世界轴向、对齐工具、运行、手动编译、游戏本地化、设置等功能，如图。

![b6474563-9061-4661-8904-d6bbd715c5f9](https://arkimg.ark.online/b6474563-9061-4661-8904-d6bbd715c5f9.webp)

接下来我们分别介绍上面的每个按钮功能，最左侧的按钮包括了移动、旋转、缩放以及网格功能，我们会在下个小节中具体介绍该部分详细操作，本章节我们先来介绍其他功能：

- 运行：运行当前编写的游戏

  ![c5768c27-e04c-4ca3-a776-705ea17e9f4d](https://arkimg.ark.online/c5768c27-e04c-4ca3-a776-705ea17e9f4d.webp)

- 点击运行按钮右侧的小箭头也可以设置启动的客户端数量或单机模式等内容，更多信息可以参考：[产品手册 - 运行](https://docs.ark.online/Editor/EditorWindowsOperation.html#%E8%BF%90%E8%A1%8C)。

  ![928de60f-09a4-45f1-ab94-78ebc6419c70](https://arkimg.ark.online/928de60f-09a4-45f1-ab94-78ebc6419c70.webp)


- 显示：视窗中各类内容的显示 / 隐藏，如寻路区域、图标和线框、聊天框区域、PING 区域 / FPS 区域等，仅影响编辑器展示，不影响发布后效果。

  ![image-20230518184135003](https://arkimg.ark.online/image-20230518184135003.webp)

- 分辨率：设置当前编辑窗口的横竖屏与分辨率，更多查看：[产品手册 - 分辨率](https://docs.ark.online/Editor/EditorWindowsOperation.html#%E5%88%86%E8%BE%A8%E7%8E%87)。

  ![image-20230518185612149](https://arkimg.ark.online/image-20230518185612149.webp)

- 摄像机：主要对摄像机镜头的移动速度进行设置，更多查看：[产品手册 - 摄像机](https://docs.ark.online/Editor/EditorWindowsOperation.html#%E6%91%84%E5%83%8F%E6%9C%BA)。

  ![image-20230518185836882](https://arkimg.ark.online/image-20230518185836882.webp)


- 设置：包含世界设置、环境设置、房间设置、玩家设置、编辑器设置、自动备份、快捷键设置、语言设置、画质分级模拟等等。
- ![image-20230518185920957](https://arkimg.ark.online/image-20230518185920957.webp)
- ![image-20230518191046946](https://arkimg.ark.online/image-20230518191046946.webp)

## 3. 本地资源库

“本地资源库” 包含编辑器提供的各种美术资源、预制体、游戏功能对象，以及收藏、历史记录、上传资源等功能：

![8284568d-0dd6-4d2f-bc9d-23f296f419e0](https://arkimg.ark.online/8284568d-0dd6-4d2f-bc9d-23f296f419e0.webp)

* 最左侧是资源库的功能菜单，从上到下依次是：美术资源、预制体、游戏功能对象、我的收藏、历史记录、我的资源等
* 美术资源：包含各类型的游戏素材，包括模型、贴图、材质、动画、特效、音效等等
* 预制体：展示线上资源库里面所有的预制体资源
  * 什么是预制体：可以简单理解为拼装好的物体、场景，甚至是带脚本逻辑的功能模块，详细介绍：[产品手册 - 预制体功能说明](https://docs.ark.online/Editor/Prefabs.html)
* 游戏功能对象：包含两个部分，游戏功能对象、运动功能对象。都是封装好的一些成品功能对象，可轻易的实现一些复杂的逻辑。如游泳区域、载具、寻路区域、运动器等等
  
  ![8049c27e-7a5e-48bd-86fc-79f69c184bbe](https://arkimg.ark.online/8049c27e-7a5e-48bd-86fc-79f69c184bbe.webp)
* 我的收藏：在资源库遇到喜爱的资源时，可以①点击资源右上角的放大镜打开详情界面，②在详情界面的左上角，③点击收藏按钮。之后就可以在收藏功能里面看到所有收藏的资源了
  
  ![1d40156d-9dbf-425f-af95-697e0dce0cbe](https://arkimg.ark.online/1d40156d-9dbf-425f-af95-697e0dce0cbe.webp)
* 历史记录：之前使用过的资源，都会在这里有记录，避免在庞大的资源库里面迷失找不到了
* 我的资源：该页面展示所有本地上传的资源，本地上传资源入口在最下方 “资源上传” 按钮

  ![23e1d03c-2dd8-44c9-ac08-fe550c5d903b](https://arkimg.ark.online/23e1d03c-2dd8-44c9-ac08-fe550c5d903b.webp)

## 4. 主视口

“主视口” 就是我们最常用的场景编辑主窗口了，我们可以将上述 “本地资源库”、“游戏功能对象” 中的内容直接拖拽到 “主视口”，就可以轻松搭建拥有各种功能的优秀场景了

<video controls src="https://arkimg.ark.online/UE4_ntHqTyT7i4.mp4"></video>

## 5. 工程内容

“工程内容” 窗口包含了开发者拥有的全部工程资源，主要包括开发者创建的预制体、脚本、UI、角色等内容，如图：

![image-20230518201237610](https://arkimg.ark.online/image-20230518201237610.webp)

* 1：工程目录：展示目前项目里面的各类型文件

* 2：该目录下的文件列表：可以右键新建文件夹、刷新、粘贴内容等等

* 3：工程内容的功能区：搜索、新建脚本、新建 UI 脚本、导入脚本、切换视图等，会根据工程目录不同展示不同的功能，如选择 UI，则功能区域就会变成新建 UI 按钮，如图：

  ![image-20230518201525160](https://arkimg.ark.online/image-20230518201525160.webp)

::: warning 

在安装 VSCode 后，双击脚本会默认使用 VSCode 打开来编辑脚本

如果出现了双击脚本是记事本打开脚本的情况，可以尝试：

1. 将.ts 文件 **默认打开方式** 设置为 VSCode（请针对你使用的操作系统搜索 **如何设置默认打开方式**）
2. 启动编辑器时右键使用**以管理员身份运行**
3. 请仔细阅读"VSCode 安装"章节的内容

:::

## 6. 对象管理器

“对象管理器” 窗口包含了当前游戏场景包含的所有内容，可以在这里对每一项内容进行修改名称、复制、粘贴、删除等操作，还可以查看每项的运行环境，具体可见 [客户端与服务端](../Online-Gaming/client-and-server.md) ，如图：

![image-20230518202021824](https://arkimg.ark.online/image-20230518202021824.webp)

* 可通过右上角的筛选按钮筛选对象列表展示的内容

## 7. 属性面板

当我们在 “对象管理器” 中选中一项游戏物体，那么 “属性面板” 就会显示对应的属性，我们可以在该面板进行属性查看与设置，如图：

![image-20230518201952084](https://arkimg.ark.online/image-20230518201952084.webp)