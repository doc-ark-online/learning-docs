# 游戏物体父子级

::: tip 阅读本文大概需要 8 分钟。

游戏开发中，父子级的嵌套是十分常见的，当两个物体生成父子级关系后，子物体会随着父物体进行移动旋转等操作，用起来十分方便，接下来我们就来看下游戏物体的父子级如何使用（注意：父子级关系只在服务端维护）。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=308264179&bvid=BV16A411d7S1&cid=978207166&page=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 什么是父子级关系

首先，我们在游戏编辑器的“本地资源库”中选两个游戏物体并拖拽到游戏场景中，这里将一个立方体和椎体拖拽到场景中，如图：

![](https://cdn.233xyx.com/1681130643125_749.PNG)

在编辑器“对象管理器”窗口中，鼠标单击选中椎体，然后将椎体拖拽到立方体上，如图：

![](https://cdn.233xyx.com/1681130643019_770.gif)

这时候，立方体与椎体便形成了一个父子关系，之后，椎体便会跟随立方体进行移动等操作，如图：

![](https://cdn.233xyx.com/1681130643179_059.gif)

::: warning 注意 

编辑器中，我们常用[空锚点](https://docs.ark.online/GameplayObjects/Anchor.html)作为顶层父节点

**文件夹**只能用来管理，不能用它来进行父子结点获取

:::

## 2. 相对位置

选中锥形，我们在“属性面板”中可以看到，目前显示的位置为“相对位置”，那么这里的相对指的是什么呢？我们在这里点击小三角，发现除了“相对位置”，我们还可以设置“绝对位置”，并且切换显示方式后， XYZ 三个轴的坐标也发生了变化，如图：

![](https://cdn.233xyx.com/1681130643237_135.gif)

那么这里的“相对位置”就是指当前物体相对于父物体的偏移位置，类似于现实世界中，你这样描述你的位置：我在你东边 10 米远，然后南边 5 米远，这就是我对于你的相对位置。

而“绝对位置”指的就是当前物体在游戏场景中的所在位置，类似于现实世界中的经纬度，无论你怎样跟其他人描述你的相对位置，但你的绝对位置经纬度是不会变的。

除了位置以外，旋转和缩放同样也有相对与绝对两种显示方式。

## 3. 脚本查看父子关系

我们可以通过 GameObject 的 GetChildren 方法来获取该物体下的子物体，但是这里要注意，编辑器中服务端或客户端物体均会维护父子关系，但是如果是双端物体，需要从服务端上来获取父子关系，代码如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {   
        if(Util.SystemUtil.isServer()){
            //通过立方体的 guid 找到立方体
            let object = Core.GameObject.find("1EB0BD86D97D7EAD")
            //获取立方体有几个子物体（当前只有一个圆锥体）
            console.log("子物体个数:" + object.getChildren().length)
        }
    }
}
```

我们无法查找到**勾选**了**静态状态**的对象

## 4. 物体附着

除了我们在编辑器界面进行物体的父子级操作，以便让子物体随着父物体进行移动旋转外，有时我们在脚本中也希望动态使用该功能。这时候我们就可以使用物体附着功能了，通过代码将一个物体附着到另一个物体上，那么该物体也会随着另一个物体进行移动旋转了，示例代码如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {   
        if(Util.SystemUtil.isServer()){
            //通过立方体的 guid 找到立方体
            let cube = Core.GameObject.find("039156004120900C1EB0BD86D97D7EAD")
            //通过圆锥体的 guid 找到立方体
            let object = Core.GameObject.find("488625BB445CA70D372B15B02D9F899E")
            //将圆锥体附着到立方体上
            object.attachToGameObject(cube)
            //5 秒后解除附着
            setTimeout(() => {
                object.detachFromGameObject()
            }, 5000);
        }
    }
}
```