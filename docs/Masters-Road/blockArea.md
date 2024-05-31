# 禁行区

::: tip 阅读本文大概需要 10 分钟。

在开发游戏时，合理地控制玩家的游戏进程至关重要。首先，我们需要确保玩家沿着预定的故事线或游戏流程前进。这种策略有助于引导玩家体验故事的自然展开。另外，设计某些区域在故事进程的特定阶段不可进入，在玩家达到特定的任务或成就后解锁，同时也可以用于区分不同阶段或等级的玩家，增加游戏的挑战性和探索性。这样的设计不仅激发玩家的好奇心，还能增强他们对游戏世界的代入感。

:::

在本教程中，将教大家如何通过在口袋方舟设置禁行区来制作一个光门去控制玩家角色出入某个场景的权限。

更多禁行区使用见产品文档：[禁行区|产品手册](https://docs.ark.online/GameplayObjects/BlockingArea.html)

## 1. 什么是禁行区

编辑器提供了一个“禁行区”的游戏功能对象，在游戏场景中用来控制一片区域对其他角色的通行权限。

## 2. 创建一个可以阻止玩家出入的光门

创建可以阻止玩家出入某个场景的门的最快方法就是使用禁行区。

首先，我们可以在“资源库”面板中的“游戏功能对象”中找到“禁行区”。

![image-20231204144759667](https://arkimg.ark.online/image-20231204144759667.png)

将禁行区对象拖拽到主视口场景中。

![image-20231206191455812](https://arkimg.ark.online/image-20231206191455812.webp)

可以移动、旋转、缩放这块禁行区到符合游戏需求的形状，就像处理一个静态对象一样。

<video controls src="https://arkimg.ark.online/20231208093236_rec_.mp4"></video>

一般来说禁行区都是附在模型对象上的，来传达这片区域是不可通行的。但是整个游戏场景的边界可能不需要模型来表现禁行区，可以根据游戏项目的属性来自行决定。这里举例将静态模型“出入口”（AssetID：33514）拖入场景中。

![image-20231208104931716](https://arkimg.ark.online/image-20231208104931716.webp)

设置好禁行区后，玩家就会在试图通行时被挡在这个区域之外。



## 3. 制作一个通过触发器开关的光门

首先在上面项目的基础上新创建一个正方体，命名为“禁行区开关”。再创建一个触发器和脚本并挂载在这个正方体下。（同时可以在触发器上设置一个世界 UI [[UI 使用 | 教程]](https://learning.ark.online/Common-Functions/user-interface.html#_4-世界-ui-3d-ui)）来表现触发器的功能属性。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231205163351644.webp" alt="Description of first image">
  <img src="https://arkimg.ark.online/image-20231205162125084.webp" alt="Description of second image">
</p>


同时我们使用一个粒子特效粒子特效 [[特效 | 教程](https://learning.ark.online/Common-Functions/particle.html#_4-动态播放特效)] 来表现光门的开启，这里举例选用“光屏” （AssetID: 146771）。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231205164536493.webp" alt="Your image description">
</p>

将光屏粒子特效拖入挂载在禁行区下。点击光屏粒子特效，在光屏的属性面板中将循环勾选，并设置循环次数为 0。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231214182952069.webp" alt="Your image description">
</p>
右键获取场景中禁行区和光屏特效的对象 ID。

<p align="center">
  <img src="https://arkimg.ark.online/image-20231229185830076.webp" alt="Your image description">
</p>

<p align="center">
  <img src="https://arkimg.ark.online/image-20231214162618932.webp" alt="Your image description">
</p>

<p align="center">
  <img src="https://arkimg.ark.online/image-20231214162650902.webp" alt="Your image description">
</p>


将下方代码覆盖放入到挂载在触发器的脚本中。其中因为禁行区是通过脚本代码来控制同步生成和消失的，所以的动态播放和关闭也同样需要通过脚本来实现。将上一步获取到的对象 ID 分别填入 NewScript 中对应的 findGameObjectById("")。

```ts
@Component
export default class NewScript extends Script {
    private door: BlockingVolume; //声明一个禁行区变量
    private effect: Effect; //声明一个特效变量
    private blockFlag = false; //设置禁行区标志位为false
    private myself: Character; //声明一个本地玩家角色变量
    protected onStart(): void {
        if (SystemUtil.isClient()) { //客户端逻辑
            let trigger = this.gameObject as Trigger; //获取被脚本挂载的触发器组件
            this.myself = Player.localPlayer.character; //获取本地玩家角色
            this.door = GameObject.findGameObjectById("050904AA") as BlockingVolume; //获取场景中的禁行区
            this.effect = GameObject.findGameObjectById("0A2E4636") as Effect; //获取场景中的特效
            this.door.unblockAll(); //开放禁行区
            this.effect.stop(); //停止特效
            trigger.onEnter.add(() => { //当进入触发器时
                if (this.blockFlag) { //如果禁行区标志位为true
                    this.myself.displayName = "可通行" //修改本地玩家角色的名字为可通行
                    console.log("进入禁行区"); //打印进入禁行区
                    this.door.unblockAll(); //开放禁行区
                    this.effect.stop(); //停止特效
                    this.blockFlag = false; //设置禁行区标志位为false
                }
                else if (!this.blockFlag) { //如果禁行区标志位为false
                    console.log("离开禁行区"); //打印离开禁行区
                    this.myself.displayName = "禁止通行" //修改本地玩家角色的名字为禁止通行
                    this.door.clear(); //重置禁行区，恢复禁行区的禁行状态
                    this.effect.play(); //播放特效
                    this.blockFlag = true; //设置禁行区标志位为true
                }
            });
        }
    }
}
```

这个脚本实现了禁行区的通行和阻拦功能。当玩家角色进入禁行区开关的触发器后。如果禁行区标志位为 true，表示所有对象都有这个禁行区的通过权限，重置禁行区，恢复禁行区的禁行状态。并且停止播放门的特效。如果禁行区标志位为 false，表示所有对象都被移除了该禁行区的通过权限，开放禁行区，使所有对象都可以通行。为了方便区别角色进出禁行区的权限，代码中通过修改本地玩家角色名字的方式，来表现该角色的权限。以下是运行效果：

<video controls src="https://arkimg.ark.online/20231215150112_rec_.mp4"></video>

同时需要注意的是，【禁行区】是一个空间的概念，不仅可以阻止外部的角色进入，同时也可以阻止内部的角色出去。

<video controls src="https://arkimg.ark.online/20231215150249_rec_.mp4"></video>

## 3. 为特定玩家角色设置光门的通行权限

在多人游戏中，通行权限通常是根据玩家的阶段、等级或任务的完成情况等因素来区别分配的。为了满足这种开发需求，可以通过对禁行区设置特定对象的通行权限，来实现对某个或某些玩家角色是否通行的控制。

这里以两个人为例。

在刚才的代码基础上加入键盘按键逻辑去控制对象权限。其中对整个禁行区设置通行权限的功能需要通过 RPC 函数 [[RPC 与 属性同步 | 教程]](https://learning.ark.online/Online-Gaming/property-rpc.html) 来广播所有客户端来开启和关闭非本地玩家角色的特效，以保持光门禁行区域功能表现的一致性。（禁行区的双端处理编辑器已经封装在 unblockAll() 和 clear() API 中，所以不需要我们去特别处理禁行区权限的同步问题）

```ts
@Component
export default class NewScript extends Script {
    private door: BlockingVolume; //声明一个禁行区变量
    private effect: Effect; //声明一个特效变量
    private blockFlag = false; //设置禁行区标志位为false
    private myself: Character; //声明一个本地玩家角色变量
    protected onStart(): void {
        if (SystemUtil.isClient()) { //客户端逻辑
            let trigger = this.gameObject as Trigger; //获取被脚本挂载的触发器组件
            this.myself = Player.localPlayer.character; //获取本地玩家角色
            this.door = GameObject.findGameObjectById("050904AA") as BlockingVolume; //获取场景中的禁行区
            this.effect = GameObject.findGameObjectById("0A2E4636") as Effect; //获取场景中的特效
            this.door.unblockAll(); //开放禁行区
            this.effect.stop(); //停止特效
            trigger.onEnter.add(() => { //当进入触发器时
                if (this.blockFlag) { //如果禁行区标志位为true
                    this.myself.displayName = "可通行" //修改本地玩家角色的名字为可通行
                    this.door.unblockAll(); //开放禁行区
                    this.effect.stop(); //停止特效
                    this.blockFlag = false; //设置禁行区标志位为false
                }
                else if (!this.blockFlag) { //如果禁行区标志位为false
                    this.myself.displayName = "禁止通行" //修改本地玩家角色的名字为禁止通行
                    this.door.clear(); //重置禁行区，恢复禁行区的禁行状态
                    this.effect.play(); //播放特效
                    this.blockFlag = true; //设置禁行区标志位为true
                }
            });
            InputUtil.onKeyDown(Keys.One, () => { //按下1键 // [!code focus]
                if (this.blockFlag) { //如果禁行区标志位为true // [!code focus]
                    this.door.addPassableTarget(this.myself); //为对象添加通过该区域的权限 // [!code focus]
                    this.myself.displayName = "可通行" //修改本地玩家角色的名字为可通行 // [!code focus]
                    this.effect.stop() //停止特效 // [!code focus]
                } // [!code focus]
            }); // [!code focus]
            InputUtil.onKeyDown(Keys.Two, () => { //按下2键 // [!code focus]
                if (this.blockFlag) { //如果禁行区标志位为true   // [!code focus]
                    this.door.removePassableTarget(this.myself); //移除对象通过该区域的权限 // [!code focus]
                    this.myself.displayName = "禁止通行" //修改本地玩家角色的名字为禁止通行 // [!code focus]
                    this.effect.play() //播放特效 // [!code focus]  
                } // [!code focus]
            }); // [!code focus]
            InputUtil.onKeyDown(Keys.Three, () => { //按下3键 // [!code focus]
                if (this.blockFlag) { //如果禁行区标志位为true // [!code focus]
                    this.door.unblockAll(); //开放该禁行区 // [!code focus]
                    this.decideDoorEffect(false) //向服务端发送RPC，通过服务端关通知所有客户端关闭特效 // [!code focus]
                } // [!code focus]
            }); // [!code focus]
            InputUtil.onKeyDown(Keys.Four, () => { //按下4键   // [!code focus]
                if (this.blockFlag) { //如果禁行区标志位为true // [!code focus]
                    this.door.clear(); //重置该禁行区发布的所有通行许可 // [!code focus]
                    this.decideDoorEffect(true) //向服务端发送RPC，通过服务端关通知所有客户端开启特效 // [!code focus]
                } // [!code focus]
            });   // [!code focus]

        }
    }
    @RemoteFunction(Server) //使用RPC服务端函数 // [!code focus]
    public decideDoorEffect(toOpen: boolean) { //声明一个判断特效是否关闭开启的方法 // [!code focus]
        if (toOpen) { //如果open为true // [!code focus]
            this.playDoorEffect() //RPC同步全部客户端播放特效 // [!code focus]
        } else { //如果open为false // [!code focus]
            this.stopDoorEffect() //RPC同步全部客户端停止特效 // [!code focus]
        } // [!code focus]
    } // [!code focus]
    @RemoteFunction(Client, Multicast) //声明RPC客户端多播函数 // [!code focus]
    public stopDoorEffect(): void { //声明一个关闭特效方法 // [!code focus]
        this.effect.stop() //停止特效 // [!code focus]
        this.myself.displayName = "可通行" //修改本地玩家角色的名字 // [!code focus]
    } // [!code focus]
    @RemoteFunction(Client, Multicast) //声明RPC客户端多播函数 // [!code focus]
    public playDoorEffect(): void { //声明一个开启特效方法 // [!code focus]
        this.effect.play() //播放特效 // [!code focus]
        this.myself.displayName = "禁止通行" //修改本地玩家角色的名字 // [!code focus]
    } // [!code focus]
}
```

运行后效果：

<video video controls src="https://arkimg.ark.online/20231215145504_rec_-convert.mp4"></video>
