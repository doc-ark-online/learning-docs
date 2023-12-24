# 世界 UI使用大全

## 1.使用前介绍

相关文档：[世界UI-官方文档](https://meta.feishu.cn/wiki/wikcntFkTlPUZULPFy2h21l2Blf)

世界UI的各种功能的详细内容上述文档里都有讲述，下面只做简要介绍

### 1.1.世界UI的作用

世界UI能够帮助我们将2D的UI渲染在3D的场景当中。可以把世界UI当作一个屏幕，这个屏幕可以像一个物体一样，在场景中进行位移、缩放、旋转等等的操作

### 1.2.世界UI的三种类型

**World（世界空间）**

> 世界类型世界UI是将UI组件以网格体的形式在世界场景中进行渲染，并且可被遮挡，使得UI不再脱离在场景层之外，而是成为场景层的一部分给玩家带来更强的代入感
>
> **（ World 类型可以用来制作一些告示牌，提示UI等）**
>
> <video controls src="https://forum.ark.online/forum.php?mod=attachment&aid=MTIyNnxjNzRjMDcwYnwxNzAxNDEwMzk1fDExM3wxMzMw&noupdate=yes"></video>

**Screen（屏幕空间）**

> 屏幕空间类型世界UI在完全处于世界场景之外的屏幕上渲染控件，控件永远不会被遮挡，且永远面朝摄像机的功能。
> **（ Screen 类型可以用来做一些小地图提示、游戏里的标点等）**
>
> <video controls src="https://forum.ark.online/forum.php?mod=attachment&aid=MTIyNXw0YzllZDliM3wxNzAxNDEwMzk1fDExM3wxMzMw&noupdate=yes"></video>

**OverheadUI（头顶）**

> 与屏幕类型相似，UI界面都会永远面朝摄像机，确保是会使用射线检测方法检测玩家和头顶UI之间是否有物体阻挡，从而控制头顶UI的显示/隐藏，同时计算两者之间的距离去缩放头顶UI实现近大远小的效果
> **（ Overhead 类型可以用来做血条、title 等）**
>
> <video controls src="https://forum.ark.online/forum.php?mod=attachment&aid=MTIyN3wwMjQ5OWRkZnwxNzAxNDEwMzk1fDExM3wxMzMw&noupdate=yes"></video>

### 1.3.使用世界UI的两个前提

这两个条件缺一不可。

**前提一：需要有一个世界UI对象**

本地资源库->游戏功能对象->世界UI

![image-20231201140716927](https://ali-forum.ark.online/forum/202303/23/164008vcfninf4yf8cn81u.png)

**前提二：需要有一个2DUI**

2DUI的使用可以参考下列内容：

[UI 使用 | 教程 (ark.online)](https://learning.ark.online/Common-Functions/user-interface.html)

[【2DUI使用大全】 - 资源/心得分享 创作者论坛 (ark.online)](https://forum.ark.online/forum.php?mod=viewthread&tid=1184)



## 2.世界UI的使用方式

按照使用前提，我么们需要先创建一个2DUI。打开UI编辑面板，拼一个漂亮的UI吧！

![image-20231208142410164](https://arkimg.ark.online/image-20231208142410164.png)

### 用法一：将世界UI拖入场景，手动给世界UI绑定2DUI

**步骤1：拖一个世界UI至场景中**

![image-20231208142522823](https://arkimg.ark.online/image-20231208142522823.png)

**步骤2：给世界UI绑定2DUI**

![image-20231208142702839](https://arkimg.ark.online/image-20231208142702839.png)

**修改显示类型**

要修改场景中世界UI的显示类型，只需要修改属性面板上的UI类型选项即可。

![image-20231208142802615](https://arkimg.ark.online/image-20231208142802615.png)

### 用法二：【代码】将世界UI拖入场景，并给世界UI绑定动态创建的2DUI

**步骤1：拖一个世界UI至场景中**

![img](https://ali-forum.ark.online/forum/202303/23/164012bizsygpqqbpyjjy6.png)

**步骤2：【代码】复制世界UI在场景中的GUID，通过GUID获取到这个世界UI**

![img](https://ali-forum.ark.online/forum/202303/23/164013mtcfrfjii9199111.png)

```ts
// 047B1F70 就是上图中复制的guid
let worldUI = GameObject.findGameObjectById("047B1F70") as UIWidget
```

**步骤3：【代码】动态创建2DUI**

```ts
// 创建2DUI
let myUI = mw.createUIByName("NewUI")
```

**步骤4：【代码】给世界UI绑定2DUI**

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
        // 047B1F70 就是上图中复制的guid
        let worldUI = GameObject.findGameObjectById("047B1F70") as UIWidget
        // 创建2DUI
        let myUI = mw.createUIByName("NewUI")
        // 绑定2DUI
        worldUI.setTargetUIWidget(myUI)
     }
  }
}


```

### 用法三：【代码】动态创建世界UI，并绑定动态创建的2DUI

**步骤1：【代码】动态创建世界UI**

```ts
let worldUI = GameObject.spawn("UIWidget") as UIWidget
```

**后续步骤：【代码】给世界UI绑定动态创建的2DUI**

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

### 3.1.用代码设置世界UI的类型

```ts
// 这里worldUI是一个已经被创建出来的世界UI对象
// 世界
worldUI.widgetSpace = WidgetSpaceMode.World
// 场景
worldUI.widgetSpace = WidgetSpaceMode.Screen
// 头顶UI
worldUI.widgetSpace = WidgetSpaceMode.OverheadUI
```

### 3.2.获取世界UI绑定的2DUI

```ts
// 这里假设已经获取到了世界UI对象
let worldUI: UIWidget
// 获取世界UI绑定的2DUI对象
let ui = worldUI.getTargetUIWidget()
// 从2DUI对象上获取对应的控件
let button = ui.findChildByPath("想要获取的UI控件的完整路径") as Button
```

**拓展：**

[【世界UI排行榜】教你如何做一个在场景中显示的排行榜！ - 资源/心得分享 创作者论坛 (ark.online)](https://forum.ark.online/forum.php?mod=viewthread&tid=1319&extra=)