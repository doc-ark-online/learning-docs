# 世界 UI 使用大全

::: tip 阅读本文大概需要 10 分钟。

通过本节课程，您将学习到如何创建世界 UI，以及如何处理用户输入和交互。我们将提供详细的代码示例和实践项目，帮助您逐步掌握世界 UI 的开发技巧。

:::

## 1.使用前介绍

相关文档：[世界 UI | 产品手册 (ark.online)](https://docs.ark.online/GameplayObjects/WorldUI.html)

> 世界UI的各种功能的详细内容上述文档里都有讲述，下面只做简要介绍
>

### 1.1.世界 UI 的作用

在游戏开发中，世界 UI 是一项常用的功能，它为玩家提供了与游戏世界进行交互和获取信息的界面元素。通过巧妙地将用户界面嵌入到游戏世界中，世界 UI 可以增强玩家的沉浸感，使他们更深入地体验游戏的乐趣。

### 1.2.世界 UI 的三种类型

**World（世界空间）**

> （ World 类型可以用来制作一些告示牌，提示 UI 等）

世界类型世界 UI 是将 UI 组件以网格体的形式在世界场景中进行渲染，并且可被遮挡，使得 UI 不再脱离在场景层之外，而是成为场景层的一部分给玩家带来更强的代入感。

<img src = "https://cdn.233xyx.com/1684476052356_275.gif" alt>





**Screen（屏幕空间）**

> （ Screen 类型可以用来做一些小地图提示、游戏里的标点等）

屏幕空间类型世界 UI 在完全处于世界场景之外的屏幕上渲染控件，控件永远不会被遮挡，且永远面朝摄像机的功能。

<img src = "https://cdn.233xyx.com/1684476052967_502.gif" alt>



**OverheadUI（头顶）**

> （ Overhead 类型可以用来做血条、title 等）

与屏幕类型相似，UI 界面都会永远面朝摄像机，确保是会使用射线检测方法检测玩家和头顶 UI 之间是否有物体阻挡，从而控制头顶 UI 的显示/隐藏，同时计算两者之间的距离去缩放头顶 UI 实现近大远小的效果

<img src = "https://cdn.233xyx.com/1684476052180_110.gif" alt>



### 1.3.使用世界 UI 的两个前提

> 这两个条件缺一不可。
>

**前提一：需要有一个世界 UI 对象**

本地资源库->游戏功能对象->世界 UI

![image-20240104141815733](https://arkimg.ark.online/image-20240104141815733.png)

**前提二：需要有一个 2DUI** 

2DUI 的使用可以参考下列内容：

[UI 使用 | 教程 (ark.online)](https://learning.ark.online/Common-Functions/user-interface.html)

[【2DUI使用大全】 - 资源/心得分享 创作者论坛 (ark.online)](https://forum.ark.online/forum.php?mod=viewthread&tid=1184)



## 2.世界 UI 的使用方式

按照使用前提，我么们需要先创建一个 2DUI 。打开 UI 编辑面板，拼一个漂亮的 UI 吧！

![image-20231208142410164](https://arkimg.ark.online/image-20231208142410164.png)

### 用法一：将世界 UI 拖入场景，手动给世界 UI 绑定 2DUI

- 步骤1：拖一个世界 UI 至场景中

![image-20240104142001828](https://arkimg.ark.online/image-20240104142001828.png)

- 步骤2：给世界 UI 绑定 2DUI

![image-20231208142702839](https://arkimg.ark.online/image-20231208142702839.png)

- 修改显示类型

要修改场景中世界 UI 的显示类型，只需要修改属性面板上的 UI 类型选项即可。

![image-20231208142802615](https://arkimg.ark.online/image-20231208142802615.png)

### 用法二：【代码】将世界 UI 拖入场景，并给世界 UI 绑定动态创建的 2DUI

- 步骤1：拖一个世界 UI 至场景中

![image-20240104142001828](https://arkimg.ark.online/image-20240104142001828.png)

- 步骤2：【代码】复制世界 UI 在场景中的 GameObjectID，通过 GameObjectID 获取到这个世界 UI

![img](https://ali-forum.ark.online/forum/202303/23/164013mtcfrfjii9199111.png)

```ts
// 047B1F70 就是上图中复制的GameObjectID
let worldUI = GameObject.findGameObjectById("047B1F70") as UIWidget
```

- 步骤3：【代码】动态创建 2DUI

```ts
// 创建2DUI
let myUI = mw.createUIByName("NewUI")
```

- 步骤4：【代码】给世界 UI 绑定 2DUI

```ts
// 绑定2DUI
worldUI.setTargetUIWidget(myUI)
```

**完整代码**

```ts
@Component
export default class GameStart extends Script {

  /** 当脚本被实例后，会在第一帧更新前调用此函数 */
  protected onStart(): void {
     if (SystemUtil.isClient()) {
        // 047B1F70 就是上图中复制 GameObjectID
        let worldUI = GameObject.findGameObjectById("047B1F70") as UIWidget
        // 创建2DUI
        let myUI = mw.createUIByName("NewUI")
        // 绑定2DUI
        worldUI.setTargetUIWidget(myUI)
     }
  }
}


```

### 用法三：【代码】动态创建世界 UI ，并绑定动态创建的 2DUI

- 步骤1：【代码】动态创建世界 UI

```ts
let worldUI = GameObject.spawn("UIWidget") as UIWidget
```

- 后续步骤：【代码】给世界UI绑定动态创建的 2DUI

```ts
@Component
export default class GameStart extends Script {

  protected onStart(): void {
     if (SystemUtil.isClient()) {
        // 动态创建世界UI
        let worldUI = GameObject.spawn("UIWidget") as UIWidget
        // 设置世界UI的位置
        worldUI.worldTransform.position = new Vector(0, 0, 200)
        // 创建2DUI
        let myUI = mw.createUIByName("NewUI")
        // 绑定2DUI
        worldUI.setTargetUIWidget(myUI)

     }
  }
}
```





## 3.补充：

### 3.1.用代码设置世界 UI 的类型

```ts
// 这里worldUI是一个已经被创建出来的世界UI对象
// 世界
worldUI.widgetSpace = WidgetSpaceMode.World
// 场景
worldUI.widgetSpace = WidgetSpaceMode.Screen
// 头顶UI
worldUI.widgetSpace = WidgetSpaceMode.OverheadUI
```

### 3.2.获取世界 UI 绑定的 2DUI

```ts
// 这里假设已经获取到了世界UI对象
let worldUI: UIWidget
// 获取世界UI绑定的2DUI对象
let ui = worldUI.getTargetUIWidget()
// 从2DUI对象上获取对应的控件
let button = ui.findChildByPath("想要获取的UI控件的完整路径") as Button
```

**拓展：**

[【世界 UI 排行榜】教你如何做一个在场景中显示的排行榜！ - 资源/心得分享 创作者论坛 (ark.online)](https://forum.ark.online/forum.php?mod=viewthread&tid=1319&extra=)