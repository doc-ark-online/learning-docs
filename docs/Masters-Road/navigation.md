# 寻路系统

::: tip 阅读本文大概需要 10 分钟。

使用寻路系统可以快速实现角色自动寻路功能，由此可以实现例如任务引导或是跟随的功能，接下来让我们一起了解一下如何使用引导系统吧。

:::

了解更多本节内容见产品文档：[寻路系统 | 产品手册 (ark.online)](https://docs.ark.online/GameplayObjects/NavigationArea.html)

## 1. 什么是寻路系统

在现实生活中，我们想去到某个地点时经常会使用工具导航，沿着导航推荐的最优线路走。而在游戏中，角色需要在游戏世界中移动，寻路系统就是帮助角色计算出最佳路径的工具。它会考虑地图上的可行走区域和障碍物，然后找到一条避开障碍物、最短的路径来到目的地。这样，角色就可以根据寻路给出的指引，到达我们设定的目的地。



## 2. 如何设置寻路系统

在资源库【游戏功能对象】中，找到【寻路区域】，拖拽到主视口中，此时将绘制出一片绿色的寻路区域，在此区域中可以使用 API 实现寻路功能。绿色寻路区域的显示/隐藏可以在右上角菜单中的【显示】设置。

![image-20231102144603913](https://arkimg.ark.online/image-20231102144603913.webp)

将寻路区域放到主视口后，通过修改其相对缩放属性调整寻路区域大小，使其覆盖我们需要寻路的区域。

<video controls src="https://arkimg.ark.online/027nagtive1.mp4"></video>



::: warning 注意

**建议每个场景中的寻路区域范围保持在2100 \* 2100 \* 100以内,防止因寻路区域过大会造成寻路区域失效的情况。**

**请勿修改寻路区域的相关旋转属性,以免出现寻路计算异常情况。**

:::



## 3. 使用寻路功能

#### 使用`navigateTo`寻路到指定地点

调整好寻路区域后，就可以使用 `navigateTo` API，让寻路区域中的角色自动向目标位置移动，同时可以加入寻路成功的逻辑，新建寻路脚本，代码如下：

```typescript
@Component
export default class Navigator extends Script {
    protected onStart(): void {
        InputUtil.onKeyDown(Keys.One, () => {
            //按下“1”，自身角色将寻路至（-900,1200,296）位置
            Navigation.navigateTo(Player.localPlayer.character,new Vector(-900,1200,296),0,()=>{
              //角色到达位置后将播放一段动画
              Player.localPlayer.character.loadAnimation("122750").play();
            })
        })
        InputUtil.onKeyDown(Keys.Two,()=>{
            //按下“2”，自身角色将停止寻路
            Navigation.stopNavigateTo(Player.localPlayer.character)
        })
    }
}
```

将脚本拖入场景，进入场景后按下键盘的"1"，角色就会自动走到目标位置并且到达后开始跳舞啦。

<video controls src="https://arkimg.ark.online/027nagtive2.mp4"></video>



#### 使用 `follow` 实现跟随逻辑

在寻路区域中，可以使用 `follow` 来实现角色之间的跟随功能，例如我们尝试制作一个宠物跟随功能：

1. 在场景中放置一个角色对象，将其改为你想要的宠物形象(在这里我将其改为了四组对象，用了熊猫的模型)

![image-20231208140756145](https://arkimg.ark.online/image-20231208140756145.webp)

2. 新建 Follow 脚本，代码如下：

```typescript
@Component
export default class Follow extends Script {
    private npc: Character
    protected onStart(): void {

        //此处填写NPC的gameObjectId
        this.npc = GameObject.findGameObjectById("176792C4") as Character
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                Event.dispatchToServer("Follow");
            })

            InputUtil.onKeyDown(Keys.Two, () => {
                Event.dispatchToServer("StopFollow")

            })
        }

        if (SystemUtil.isServer()) {
            Event.addClientListener("Follow", (player) => {
                Navigation.follow(this.npc, player.character, 0, () => {
                    //这里加入开始跟随的逻辑,播放宠物跑步的动画
                    let anim = this.npc.loadAnimation("181293");
                    anim.loop = 0;
                    anim.play()
                })
            })
            Event.addClientListener("StopFollow", () => {
                Navigation.stopFollow(this.npc)
                let anim = this.npc.loadAnimation("170889");
                anim.loop = 0;
                anim.play()
            })
        }
    }
}
```

3. 将脚本拖入场景，运行游戏，按"1"宠物就能跟随我们，按"2"宠物将停在原地。一个简单的宠物跟随功能就做好啦！

<video controls src="https://arkimg.ark.online/027nagtive3.mp4"></video>

:::tip TIPS

**navigateTo 的成功回调是在到达目的地的时候执行，而 follow 的成功回调是在开始跟随时执行。**

:::