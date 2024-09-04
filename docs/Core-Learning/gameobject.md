# 游戏对象

::: tip 阅读本文大概需要 10 分钟。

在编辑器资源库中，提供了美术对象用来搭建游戏场景、游戏功能对象用来实现常见游戏逻辑。它们都是游戏对象的一种，本章节我们就来学习游戏对象，以及常见用法。

::: 

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317932184&p=11&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 三维坐标系

在学习游戏对象之前，我们先来了解一下口袋方舟中的坐标系。在中学的几何学中，大家应该已经了解 2D 坐标系，也就是大家熟知的二维笛卡尔坐标系，该坐标系从原点（0,0）开始，向右伸出一条横轴，为 x 轴的正方向；向上伸出一条纵轴，为 y 轴的正方向，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn1JPA6HN7SwDi1kyEPxSTFb.png)

在游戏开发中，编辑 3D 场景时，只有两个坐标就无法定位到某个物体的具体位置了，所以引入 3D 坐标系来完成场景中每个物体的定位。

那么 3D 坐标系是如何定位一个物体，除了原来的 x、y 轴以外，还会新增一个轴向为 z 轴（可以理解为，把上面的 2D 坐标系倒下来放桌子上，然后在(0, 0)点位置再加一个垂直的轴-Z 轴。

在我们编辑器中，3D 坐标系如下图所示：

![image-20230602153538281](https://arkimg.ark.online/image-20230602153538281.webp)

左右方向是 X 轴（红色），前后方向是 Y 轴（绿色 ），上下方向是 Z 轴（蓝色）

* 基于坐标(0, 0, 0)点，如图所示，X 轴向右是正方向是变大，Y 轴向后是正方向是变大，Z 轴向上是正方向是变大。
* 所以，我们想让一个物体向正前方移动应该是**减少**Y 的值；向右移动是**增加**X 的值；向下移动是**减少**Z 的值。

在编辑器中，视角是会随时变化的，视角变化后当前世界的坐标轴是什么方向就不确定了，这个时候可以通过主视口的左下角这里，查看当前的坐标系信息，这里是会随着你视角转动而实时变化的，如图所示：

![image-20230602161738454](https://arkimg.ark.online/image-20230602161738454.webp)

除了主视口-左下角的信息以外，选中物体时，展示的拖拽箭头，其实也是一样的能体现坐标信息：

![image-20230602161920015](https://arkimg.ark.online/image-20230602161920015.webp)

这两个位置都符合默认设置：红色是 X 轴，绿色是 Y 轴，蓝色是 Z 轴，箭头方向为正方向！

## 2. 游戏对象及常用属性

游戏对象包含了游戏功能对象和美术对象两大块：

- 美术对象：提供了搭建场景所必须的物体，如静态模型、特效、音效等，使用它们可以快速搭建游戏场景。
- 游戏功能对象：封装了常见游戏功能逻辑，比如触发器、运动器等，用来快速实现常见游戏功能。

![b9efb6b9-879c-4d08-94c9-2cbeb74e9373](https://arkimg.ark.online/b9efb6b9-879c-4d08-94c9-2cbeb74e9373.webp)

接下来我们从从编辑器的**资源库**中，拖拽一个静态模型到场景中，这里拖拽了一个正方体到场景中，如图：

![0160e409-c53b-4ec5-830a-61ba9115a1e2](https://arkimg.ark.online/0160e409-c53b-4ec5-830a-61ba9115a1e2.webp)

然后我们可以看到，属性面板中会显示出该游戏物体的相关属性，并且可以很方便的进行修改设置，这里我们把常用的属性列出来，如图：

**基础属性：**

Name：示例为 **“正方体”** ，我们可以在这里修改物体的名称，修改名称后，回车确定修改。

GameObjectId：在场景中的每个物体，都有一个唯一的 Id，我们可以通过 GameObjectId 来查找对应的物体。

网络状态：网络运行环境，具体运行环境的区别可以查看 [网络同步原理和结构 | 产品手册](https://docs.ark.online/Scripting/NetworkSynchronizationStructureandMechanics.html)

Tag：标签，默认为空，这里可以填写字符串生成标签，一般标签用来标识或区分游戏物体。

![image-20230723172826548](https://arkimg.ark.online/image-20230723172826548.png)

**变换：**

变换：在这里可以修改物体三个轴向的位置、旋转和缩放，但是这里可以看到显示的都是相对坐标，什么是相对坐标呢？具体可以查看下一章节。

![image-20230723172904353](https://arkimg.ark.online/image-20230723172904353.png)

**场景设置：**

可见性：是否显示。包含三个选项，从父对象获取、开启、关闭

碰撞：是否碰撞。包含四个选项，开启碰撞、关闭碰撞、仅开启检测、仅开查询碰撞

![image-20230723172942802](https://arkimg.ark.online/image-20230723172942802.png)

- 属性面板的每个节点位置我们都能通过右键点击弹出菜单，进行复制粘贴操作

![image-20230723173533264](https://arkimg.ark.online/image-20230723173533264.png)

## 3. 什么是父子级关系

首先，我们在游戏编辑器的“资源库”中选两个游戏物体并拖拽到游戏场景中，这里将一个正方体和圆锥拖拽到场景中，如图：

![17b68004-c741-400e-9065-6755c08ab2a3](https://arkimg.ark.online/17b68004-c741-400e-9065-6755c08ab2a3.webp)

在编辑器“对象管理器”窗口中，鼠标单击选中圆锥，然后将圆锥拖拽到正方体上，如视频：

<video controls ="" src="https://arkimg.ark.online/c01tiJPpKpTjIoc1.mp4"></video>

这时候，正方体与圆锥便形成了一个父子关系，之后锥体便会跟随正方体进行移动等操作，如视频：

<video controls="" src="https://arkimg.ark.online/qHfBV4rU3sMPODLM.mp4"></video>

::: warning 注意 

编辑器中，我们常用[空锚点](https://docs.ark.online/GameplayObjects/Anchor.html)作为顶层父节点

**文件夹**、**Group (打组)** 只能用来管理，不能用它来进行父子结点获取。

:::

### 3.1. 相对位置

选中圆锥，我们在“属性面板”中可以看到，目前显示的位置为“相对位置”，那么这里的相对指的是什么呢？我们在这里点击小三角，发现除了“相对位置”，我们还可以设置“绝对位置”，并且切换显示方式后， X、Y、Z 三个轴的坐标也发生了变化，如图：

![](https://cdn.233xyx.com/1681130643237_135.gif)

那么这里的“相对位置”就是指当前物体相对于父物体的偏移位置，类似于现实世界中，你这样描述你的位置：我在你东边 10 米远，然后南边 5 米远，这就是我对于你的相对位置。

而“绝对位置”指的就是当前物体在游戏场景中的所在位置，类似于现实世界中的经纬度，无论你怎样跟其他人描述你的相对位置，但你的绝对位置经纬度是不会变的。

除了位置以外，旋转和缩放同样也有相对与绝对两种显示方式。

## 4. 使用脚本获取游戏对象

刚刚我们已经学会了如何拖动一个游戏物体到场景上，现在我们来学习如何使用脚本来获取这个物体，要使用脚本获取物体需要分两种情况：

1. 获取脚本自身挂载到的物体。
2. 获取场景上其它物体。

### 4.1 获取脚本挂载的物体

对于脚本自身挂载到的物体，在代码中可以直接使用 `this.gameObject` 获取，并且可以使用 `getChildren` 方法来获取该物体下的子物体。

```typescript
@Component
export default class Test extends Script {
    protected onStart(): void {
        // 使用 this.gameObject 获取自身挂载的物体 //[!code focus]
        console.log(this.gameObject.name); //[!code focus]
  
        // 获取子物体列表 //[!code focus]
        const children = this.gameObject.getChildren(); //[!code focus]
        console.log("拥有子物体个数:", children.length); //[!code focus]
    }
}
```

### 4.2 获取场景上其它物体

![7ca8148a-ba4d-4a6f-b34d-16b8f95ba631](https://arkimg.ark.online/7ca8148a-ba4d-4a6f-b34d-16b8f95ba631.webp)

获取场景上的其它物体，我们可以使用 `findGameObjectById` 函数，通过物体的 `GameObjectId` 来动态查找。在现实世界中，我们要找到一个置顶的人可以通过它的身份证号来查找，类似的我们在游戏中查找一个游戏对象也可以通过游戏对象的  `GameObjectId` 来找到它。

 `GameObjectId` 与现实世界中身份证 ID 一样，我们的游戏对象在同个游戏中拥有唯一的 ID，这个 ID 在游戏对象创建时会自动生成，无论怎么修改游戏对象的属性（如修改大小、修改名字）它都不会变。 

::: warning GameObjectId 相关

每个项目中，物体的 GameObjectId 都不一样，查找时需要注意将下列代码中的 Id 修改为自己本项目物体的的 ID

:::

```typescript
@Component
export default class Test extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        if (SystemUtil.isServer()) {
            // 通过立方体的 GameObjectId 找到立方体 //[!code focus]
            const object = GameObject.findGameObjectById("1EB0BD86D97D7EAD"); //[!code focus]		
            // 获取立方体有几个子物体（当前只有一个圆锥体）
            console.log("子物体个数:" + object.getChildren().length);
        }
    }
}
```

