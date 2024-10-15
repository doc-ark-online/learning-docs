# 寻路系统

::: tip 阅读本文大概需要 10 分钟。

使用寻路系统可以快速实现角色自动寻路功能，由此可以实现例如任务引导或是跟随的功能，接下来让我们一起了解一下如何使用寻路系统吧。

:::

了解更多本节内容见产品文档：[寻路系统 | 产品手册 (ark.online)](https://docs.ark.online/GameplayObjects/NavigationArea.html)

## 1. 什么是寻路系统

在现实生活中，我们想去到某个地点时经常会使用工具导航，沿着导航推荐的最优线路走。而在游戏中，角色需要在游戏世界中移动，寻路系统就是帮助角色计算出最佳路径的工具。它会考虑地图上的可行走区域和障碍物，然后找到一条避开障碍物、最短的路径来到目的地。这样，角色就可以根据寻路给出的指引，到达我们设定的目的地。



## 2. 如何设置寻路系统

在资源库【游戏功能对象】中，找到【寻路区域】，拖拽到主视口中，此时将绘制出一片绿色的寻路区域，在此区域中我们可以使用 API 实现 NPC 寻路的功能。绿色寻路区域的显示/隐藏可以在右上角菜单中的【显示】设置。

![image-20231210160028079](https://arkimg.ark.online/image-20231210160028079.webp)

将寻路区域放到主视口后，我们可以通过修改其属性面板中的缩放和位置属性来调整寻路区域的覆盖范围，使绘制出来的绿色区域覆盖我们需要使用寻路功能的区域。

<video controls src="https://arkimg.ark.online/027nagtive1.mp4"></video>



::: warning 注意

**建议每个场景中的寻路区域范围保持在2100 \* 2100 \* 100以内,防止因寻路区域过大造成寻路区域失效的情况。**

**请勿修改寻路区域属性面板中的旋转属性,以免出现寻路计算异常情况。**

**寻路区域的高度如果过低可能会导致人物跳跃时跳出寻路区的情况**

:::



## 3. 使用寻路功能

#### 使用`navigateTo`寻路到指定地点

调整好寻路区域后，就可以使用 `navigateTo` API，让寻路区域中的角色自动向目标位置移动，同时可以加入寻路成功的逻辑，新建寻路脚本，将脚本拖入场景挂载到Ground下，并且设置为双端脚本，编写脚本如下：

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

运行游戏，进入场景后按下键盘的"1"，角色就会自动走到目标位置并且到达后开始跳舞啦。

<video controls src="https://arkimg.ark.online/027nagtive2.mp4"></video>

:::tip TIPS

**navigateTo 的成功回调函数会在到达目的地的时候执行**

:::



#### 使用 `follow` 实现跟随逻辑

在寻路区域中，可以使用 `follow` 来实现角色之间的跟随功能，例如我们尝试制作一个宠物跟随功能：

1. 在场景中放置一个角色对象，follow 跟随的目标和跟随者都需要是角色对象

![image-20231210182306344](https://arkimg.ark.online/image-20231210182306344.webp)

1. 将其改为你想要的宠物形象(在这里我将其改为了四足对象，用了熊猫的模型)

![image-20231208140756145](https://arkimg.ark.online/image-20231208140756145.webp)

3. 新建 Follow 脚本，代码如下：

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

4. 将脚本拖入场景，运行游戏，按"1"宠物就能跟随我们，按"2"宠物将停在原地。一个简单的宠物跟随功能就做好啦！

<video controls src="https://arkimg.ark.online/027nagtive3.mp4"></video>

:::tip TIPS

**follow 的成功回调函数会在开始跟随时执行(即能够找到一条路线进行寻路跟随时执行)。**

:::



## 4. 寻路区域参数设置

寻路区域的详细设置在工具栏的设置里面

![image-20241009184407428](https://arkimg.ark.online/image-20241009184407428.png)

![image-20241009184559030](https://arkimg.ark.online/image-20241009184559030.png)

将鼠标悬浮在每个条目上就可以看见它的解释含义

![image-20241009185356507](https://arkimg.ark.online/image-20241009185356507.png)

:::tip TIPS

**如果角色无法上楼梯或者通过某个门口，请检查对应胶囊体半径高度和不可跨越高度哦！**

:::



## 5. 寻路链接逻辑对象

使用寻路链接可将两块分离的寻路区域链接起来，这样就可以跨寻路区域进行寻路导航了。

1. 调整好寻路区域，使用 `navigateTo`  API ，实现一个让人物跳下高台，从一个寻路区域自动向另一个导航寻路区域移动，同时可以加入寻路成功的逻辑，新建寻路脚本 GameStart ，将脚本拖入场景挂载到 Ground 下，并且设置为双端脚本，编写脚本如下：

```typescript
@Component
export default class Navigator extends Script {
    protected onStart(): void {
        InputUtil.onKeyDown(Keys.One, () => {
            //按下“1”，自身角色将寻路至（0,1200,296）位置
            Navigation.navigateTo(Player.localPlayer.character,new Vector(0,1200,0),0,()=>{
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

 运行进入游戏，按下“1”键，可以看到我们人物到这个导航区域的边缘就停下来开始跳舞了。  

![image-20241009190718672](https://arkimg.ark.online/image-20241009190718672.png)

<video controls src="https://arkimg.ark.online/%E5%AF%BC%E8%88%AA11.mp4"></video>

2. 我们点击游戏功能对象，拖拽一个寻路链接到2个寻路区域中间，设置好直到寻路连接出现线段显示连接好后我们再运行游戏，可以看到我们成功的跳下了平台并且跨过了2个导航区域。

![image-20241009190953827](https://arkimg.ark.online/image-20241009190953827.png)

<video controls src="https://arkimg.ark.online/%E5%AF%BC%E8%88%AA12.mp4"></video>



::: warning 注意

1. 寻路链接只能在同 tile 或者相邻的两个 tile 中生效，可以在【设置】-【寻路】中显示/关闭 tile 信息
2. 寻路链接目前只支持 Navigation.navigateTo() ，暂不支持 Navigation.follow() 
3. 如果要实现寻路链接跨上平台需要在合适的地方放上触发器让玩家跳起来就可以了

:::



教程小Demo：https://arkimg.ark.online/naviga.rar

寻路链接小Demo：https://arkimg.ark.online/navigaLink.rar