# 制作一个减速区域

::: tip 阅读本文大概需要 5 分钟。

接下来，我们通过制作一个减速区域来熟悉预设体与触发器的使用，学完本小节后，可以尝试创建更多不同的预设体与触发器，来创建出更多更有趣的功能性预设体吧！

:::

## 1. 创建预设体

首先打开编辑器页面，创建一个预设体，命名为“DebuffArea”，如图：

![](https://cdn.233xyx.com/1681133536160_378.png)

双击“DebuffArea”打开预设体编辑界面，在资源库中找一个地板物体添加上来，如图：

![](https://cdn.233xyx.com/1681133536505_195.png)

从编辑器的“游戏功能对象”面板中，拖拽一个方形触发器并放置在地板上，并且重命名为“Trigger”，如图：

![](https://cdn.233xyx.com/1681133536505_286.png)

## 2. 创建脚本

接下来，我们需要控制角色进入触发区域和离开触发区域的事件，创建一个脚本，命名为“DebuffArea”，如图：

![](https://cdn.233xyx.com/1681133536505_554.png)

双击打开该脚本，编写代码如下：

```TypeScript
@Core.Class
export default class DebuffArea extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //服务端
        if (SystemUtil.isServer()) {
            //找到触发器对象
            let trigger = this.gameObject.getChildByName("Trigger") as Gameplay.Trigger
            //设定进入触发器事件
            trigger.onEnter.add((other: Core.GameObject) => {
                //如果进入的是角色类型
                if (other instanceof Gameplay.Character) {
                    //就将离开的物体转为角色类型
                    //修改角色速度为慢
                    other.maxWalkSpeed = 100
                }
            })
            //设定离开触发器事件
            trigger.onLeave.add((other: Core.GameObject) => {
                //如果离开的是角色类型
                if (other instanceof Gameplay.Character) {
                    //就将离开的物体转为角色类型
                    //修改角色速度为正常速
                    other.maxWalkSpeed = 600
                }
            })
        }
    }
}
```

然后将该脚本挂载到预设体中，如图：

![](https://cdn.233xyx.com/1681133536214_833.png)

切换回场景视图，将预设体摆放到场景中，如图：

![](https://cdn.233xyx.com/1681133536300_545.png)

运行游戏，即可看到效果如图：

![](https://cdn.233xyx.com/1681133536069_807.gif)

接下来，可以将该预设体摆在游戏场景需要的位置上。除此之外，你还可以尝试扩展更多功能预设体，例如加速区域、跳跃区域、无敌区域、陷阱区域等等，让你的游戏场景更加的丰富有趣！