# 游泳区域

::: tip 阅读本文大概需要 10 分钟。

编辑器的游泳区域功能对象可以快速实现玩家角色游泳功能的开发需求。

:::

在本教程中，将教大家如何通过在口袋方舟设置游泳区域来制作一个可以让玩家角色遨游的泳池。

更多游泳区域使用见产品文档：[游泳区域|产品手册](https://docs.ark.online/GameplayObjects/SwimmingArea.html)

## 1. 什么是游泳区域

在游戏中，实现一个游泳区域的功能通常需要很多步骤。比如创建触发器区域，设置碰撞检测，实现水中行为。但在口袋方舟，就不需要自己去做这么多步骤，编辑器提供了一个“游泳区域”的游戏功能对象，可以快速创建一块可以让玩家角色游泳的区域。

## 2. 创建游泳区域

首先，我们可以在“资源库”面板中的“游戏功能对象”中找到“游泳区域”。

![image-20231201093112308](https://arkimg.ark.online/image-20231201093112308.webp)

将游泳区域对象拖拽到主视口场景中。

![image-20231208143903642](https://arkimg.ark.online/image-20231208143903642.webp)

可以移动、旋转、缩放这块游泳区域到符合游戏需求的形状。

<video controls src="https://arkimg.ark.online/sim.mp4"></video>

但是游泳区域就和触发器一样，在场景中是不可见的。所以我们运行后会出现以下场景：

<video controls src="https://arkimg.ark.online/20231207183246_rec_.mp4"></video>

所以我们需要在这个游泳区域上搭建模型来表示游泳区域的位置，同时还可以丰富游泳区域的外观。

## 3. 制作一个游泳池

接下来就通过在场景中制作一个游泳池来简单介绍一种设置和表现游泳区域的方式。

首先从静态模型中拖入一个正方体，并将正方体调整为和游泳区域相近的大小和位置。这里提供一个快捷调整的方法，通过对属性面板中变换的位置进行修改使两个物体的绝对缩放和绝对旋转相同。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231208151808067.webp" alt="Your image description">
</p>

但是因为某些模型的锚点位置和游泳区域的锚点位置并不相同，所以输入相同数值后还需要对模型进行进一步调整位移。

<video controls src="https://arkimg.ark.online/20231207185102_rec_-convert.mp4"></video>

因为模型是自带碰撞的，我们就没有办法进去到这个正方体里面去游泳了。所以我们要将正方体的碰撞关闭。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231201110048174.webp" alt="Your image description">
</p>

接下来我们就可以在这个刚刚搭建的正方体游泳区域里遨游了。
<video controls src="https://arkimg.ark.online/20231207185653_rec_.mp4"></video>

这时这个正方体看着很单调，没有水体的感觉。我们需要在这个正方体上添加一个水体材质。这里选用 AssetId：235876 的水基础材质做示例。将水基础材质直接拖入正方体的材质资源当中。

![image-20231207185938589](https://arkimg.ark.online/image-20231207185938589.webp)

这样就很有在水里游泳的感觉了。
<video controls src="https://arkimg.ark.online/20231207190032_rec_.mp4"></video>

但是因为水材质是一个半透明材质，所以水下需要有模型对象才能显示应有的美化效果。同时为了在水下潜泳的时候不显的突兀，我们不仅要在水下布置模型，也要在水体的四周搭设模型来塑造氛围感。

::: tip TIPS：

为了更好的管理游泳区域，可以将游泳区域设置为正方体的子节点，以方便同时管理游泳区域和模型。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231204102109145.webp" alt="Your image description">
</p>


 :::


同时将搭建的游泳池模型生成为 Group 方便管理：

![image-20231213172447842](https://arkimg.ark.online/image-20231213172447842.webp)


现在再进入这个游泳池就会有更好的沉浸感了。

<video controls src="https://arkimg.ark.online/20231207191309_rec_-convert.mp4"></video>

## 4. 制作游泳池游泳区域的开关

我们还可以通过脚本来动态创建游泳区域，这种使用场景通常是在需要转换为游泳状态。比如游戏中的环境可以根据时间（如季节变化）或玩家的行为（如改变地形）来动态生成或改变游泳区域。

下面将通过一个触发器和脚本来实现动态开启和关闭游泳区域的示例。

首先删除之前创建的游泳区域。

![image-20231213192326197](https://arkimg.ark.online/image-20231213192326197.webp)

新拖入一个正方体并且将这个正方体更名为“启用游泳区域”，创建一个触发器挂载在这个正方体下，再创建一个新的脚本 NewScript 挂载在触发器下。（同时可以在触发器上设置一个世界 UI 来可视化触发器的功能）。 [[UI 使用 | 教程]](https://learning.ark.online/Common-Functions/user-interface.html#_4-世界-ui-3d-ui)

<p align="center">
  <img src="https://arkimg.ark.online/image-20231204111324384.webp" alt="Description of first image">
  <img src="https://arkimg.ark.online/image-20231204110811337.webp" alt="Description of second image">
</p>
获取挂载了游泳区域的正方体的对象 ID。填入 NewScript 中的 findGameObjectById("")。

NewScript 脚本的内容如下：

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if (SystemUtil.isServer()) return;
        let pool = GameObject.findGameObjectById("011FB498"); //获取水体方块对象
        pool.setVisibility(false); //设置水体方块不可见
        let player = Player.localPlayer;
        let trigger = this.gameObject as Trigger; //获取被脚本挂载的触发器组件
        trigger.onEnter.add(() => { //当玩家进入触发器时
            if (pool.getVisibility() == true) return;//如果水体方块可见，说明游泳区域已经生成，不需要再生成
            pool.setVisibility(true); //设置水体方块不可见
            let swimArea = GameObject.spawn("SwimmingVolume", { //在游戏中生成一个游泳区域
                replicates: true,
                transform: new Transform(new Vector(-2906.31, 2782.75, 173.62), Rotation.zero, new Vector(5.46, 12.75, 4.15))  //设置游泳区域的位置和大小
            });
        });
    }
}
```

运行后，进入游泳池不会使角色拥有游泳能力。通过进入“启动游泳区域”触发器区域，动态生成游泳区域以及水体，玩家可再次进入游泳池遨游。效果如下：

<video controls src="https://arkimg.ark.online/20231214091500_rec_-convert.mp4"></video>

这只是动态生成游泳区域的一个简单的例子，可以基于此来做更加复杂和有趣的游戏功能开发。比如玩家可以通过触发特定的机关、解谜或完成任务来开启或关闭游泳区域。这种机制可以增加游戏的互动性和挑战性；在夏季或特定时间段内，游泳区域会被创建。而在冬季或其他时间段，游泳区域可以被关闭或销毁；当玩家进入一个新的水域区域时，游泳区域会被创建，使玩家能够在水中游泳。而当玩家离开该区域或完成特定任务后，游泳区域可以被销毁，以节省游戏性能开销。游泳区域的动态创建为游戏开发者提供了更多的灵活性和创意空间，可以根据游戏的需求和玩家的体验来设计和调整游泳区域的存在和使用方式。

## 5.  在游泳池中如何操作游泳

在游泳区域中，我们可以根据摄像机的方向通过摇杆操控玩家向前游动来控制上浮和下潜，这也与大家接触的大多数 3D 游戏是一样的逻辑。

<video controls src="https://arkimg.ark.online/20231207192602_rec_.mp4"></video>



