# 触发器

::: tip 阅读本文大概需要 10 分钟。

游戏开发中，触发器可谓是无处不在，甚至很多游戏编辑器的主要开发手段就是触发器 + 事件，走到物品上拾取物品、走到某个区域触发某个剧情、走到陷阱上减少血量等等，太多功能可以使用触发器了，接下来我们就来一起看一下怎样使用触发器吧！

:::

更多触发器使用见产品文档：[触发器](https://docs.ark.online/GameplayObjects/Trigger.html)

## 1. 创建触发器

触发器用来设定一个区域，同时会对该区域进行检测，当有对象进入区域或离开该区域时，触发器就会发送对应的事件，开发者在接收到事件后制作对应的游戏逻辑即可完成各种各样的触发功能，例如设置一个道具触发器，玩家就可以进入该区域获取道具；设置一个沼泽区域，玩家进入后会降低移动速度；设置一个陷阱区域，玩家进入后就会持续掉血等。

接下来我们创建一个触发器，在“游戏功能对象”窗口中，选中“逻辑对象”分类，将“方形触发器”拖拽到场景中，即可使用触发器，如图：

![image-20230721160009138](D:\Github\learning-docs（fork）\docs\main-course\programming-scripting\assets\image-20230721160009138.png)

因为触发器只是一个区域，这里当我们运行游戏后，就找不到我们触发器所在位置了，所以为了方便，这里再拖拽任何一个物体到刚创建的触发器上，这样该物体和触发器就会处于同一位置，方便我们定位，示例中使用一个路标，如图：

![](https://cdn.233xyx.com/1681131297116_013.png)

## 2. 添加事件监听

这里我们创建一个脚本，命名为“TriggerTest”，将脚本添加到对象列表中，如图：

![](https://cdn.233xyx.com/1681131296946_273.png)

右键触发器，在菜单中单击“复制对象 ID”，将触发器的 guid 保存下来，如图；

![](https://cdn.233xyx.com/1681131296725_796.png)

打开脚本编写代码，为触发器添加监听事件，代码如下：

```typescript
@Component
export default class TriggerTest extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //这里在服务端进行示例
        if (SystemUtil.isServer()) {
            //通过上面复制的 guid 获取触发器对象
            const trigger = GameObject.findGameObjectById("2AD04B5E") as Trigger
            //为触发器绑定 有物体进入时 会触发的监听事件
            trigger.onEnter.add(this.OnTriggerEnter.bind(this))
            //为触发器绑定 有物体离开时 会触发的监听事件
            trigger.onLeave.add(this.OnTriggerLeave)
        }
    }

    //有物体进入了触发区域,other 为进入触发区域的物体对象
    private OnTriggerEnter(other: GameObject) {
        //这里判断一下进入区域的物体是不是一名角色
        if (other instanceof Character) {
            //是的话，转成角色类型
            const character = other as Character;
            //修改角色名称
            character.displayName = "进入区域";
        }
    }

    //有物体离开了触发区域
    private OnTriggerLeave(other: GameObject) {
        //这里判断一下离开区域的物体是不是一名角色
        if (other instanceof Character) {
            //是的话，转成角色类型
            const character = other as Character;
            //修改角色名称
            character.displayName = "离开区域";
        }
    }
}
```

::: warning 注意

上边这段代码里，我们注册 onEnter 和 onLeave 写法略有不同

* onEnter 通过 bind 进行的
* onLeave 则直接跟了函数名

推荐写法是第二种，直接跟函数名，原因是使用 bind 时，如果不小心出现了两次注册，会导致即使反注册也会有问题

:::

运行程序后，可以看到当我们的角 · 色走到路灯旁，也就是进入触发区就会改名为“进入区域”，离开触发区就会改名为“离开区域”，如图：

![](https://cdn.233xyx.com/1681131297007_953.gif)

触发器除了可以检测物体进入的瞬间与离开的瞬间外，还提供给开发者一个很好用的功能，就是判断某个物体是否在触发区域内，使用方法也非常简单，代码如下：

```typescript
@Component
export default class TriggerTest extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //这里在服务端进行示例
        if (SystemUtil.isServer()) {
            //通过上面复制的 guid 获取触发器对象
            let trigger = GameObject.findGameObjectById("A790A341") as Trigger
            //通过触发器的方法，传入任意一个物体，就会返回 bool 值，代表该物体是否在触发区域内
            let isIn = trigger.checkInArea(this.gameObject)
        }
    }
}
```

## 3. 碰撞类型

单击“对象管理器”面板，选中创建的触发器对象，在触发器的属性面板中可以看到触发器可以设置碰撞类型，默认为盒体，也就是立方体，这里也可以修改成球体，修改示例与效果如图：

![](https://cdn.233xyx.com/1681131296891_989.png)

如上图所示，可以看到触发区域变成球体了！

## 4. 碰撞检测

在游戏开发中，除了触发器外，我们常常需要用到碰撞检测，比如一堵墙，碰到墙面玩家掉血；或者是一个路灯，碰到路灯玩家扣分等。这时候我们只需要在需要发生碰撞的物体外添加上我们的触发器即可达到要求，例如上面的例子，将触发器大小修改为路灯灯柱相同，即可做到碰撞检测，如图：

![](https://cdn.233xyx.com/1681131297062_986.png)

按上图设置后，即可达到游戏物体加触发器完成碰撞检测的功能了。

::: warning 注意

需要注意**触发器与触发器**之间碰撞检测不会生效

:::