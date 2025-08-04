# 触发器与触发检测

::: tip 阅读本文大概需要 15 分钟。

游戏开发中，触发器可谓是无处不在，甚至很多游戏编辑器的主要开发手段就是触发器 + 事件，走到物品上拾取物品、走到某个区域触发某个剧情、走到陷阱上减少血量等等，接下来我们就来看看如何实现触发检测吧。

:::


关于触发器使用见产品文档：[触发器](https://docs.ark.online/GameplayObjects/Trigger.html)

## 1. 使用触发器实现触发检测

> 触发器可以用来划定一个区域，当有游戏物体进入该区域或离开该区域时，触发器就会触发相应的事件，开发者在接收到事件后编写对应的游戏逻辑，即可完成各种各样的触发功能。例如设置一个道具触发器，玩家就可以进入该区域获取道具；设置一个沼泽区域，玩家进入后会降低移动速度；设置一个陷阱区域，玩家进入后就会持续掉血等。

::: warning 注意

触发器不会与另外一个触发器产生检测事件。

:::

### 1.1 创建触发器

接下来我们创建一个触发器，在`游戏功能对象`中，将`触发器`拖拽到场景中，即可使用触发器，如图：

![](https://arkimg.ark.online/image-20230721160009138.webp)

如果拖拽到场景上之后，没有看到半透明的方块，可以检查 ①显示 --> ② 图标与线框 是否为开启状态。只有开启才可以在编辑器主视口中看到触发器。

![打开线框](https://arkimg.ark.online/VemuASV5mcf1694663408.webp)

### 1.2 在运行时显示触发器

因为触发器只是划定了一个区域，在，当我们运行游戏后，就找不到我们触发器所在位置了。这时我们可以使用调试命令将它显示出来：

- 我们可以在运行后按下 `~` 键呼出控制台。
- 输入 `show Collision ` 按下回车，即可看到触发器的线框。

<video controls="" src="https://arkimg.ark.online/2023-09-14_15-59-37.mp4"></video>

### 1.3 在脚本中添加事件监听

这里我们创建一个脚本，命名为 **TriggerTest**，将脚本添加到对象列表中，如图：

![image-20240829150338911](https://arkimg.ark.online/image-20240829150338911.webp)

打开脚本编写代码，为触发器添加监听事件，代码如下：

```typescript
@Component
export default class TriggerTest extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //这里在服务端进行示例
        if (SystemUtil.isServer()) {
            //通过 this.gameObject 获取触发器对象
            const trigger = this.gameObject as Trigger;
            //为触发器绑定 有物体进入时 会触发的监听事件
            trigger.onEnter.add(this.onTriggerEnter);
            //为触发器绑定 有物体离开时 会触发的监听事件
            trigger.onLeave.add(this.onTriggerLeave);
        }
    }

    //有物体进入了触发区域,other 为进入触发区域的物体对象
    private onTriggerEnter(other: GameObject) {
        //这里判断一下进入区域的物体是不是一名角色
        if (other instanceof Character) {
            //是的话，转成角色类型
            const character = other as Character;
            //修改角色名称
            character.displayName = "进入区域";
        }
    }

    //有物体离开了触发区域
    private onTriggerLeave(other: GameObject) {
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

运行程序后，可以看到当我们的角色进入触发区就会改名为“进入区域”，离开触发区就会改名为“离开区域”：

<video controls="" src="https://arkimg.ark.online/2023-09-14_16-43-40_x264.mp4"></video>

触发器除了可以检测物体进入的瞬间与离开的瞬间外，还提供给开发者一个很好用的功能，就是判断某个物体是否在触发区域内，使用方法也非常简单，代码如下：

```typescript
@Component
export default class TriggerTest extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //这里在服务端进行示例
        if (SystemUtil.isServer()) {
            //通过 this.gameObject 获取触发器对象
        	const trigger = this.gameObject as Trigger;
            //通过触发器的方法，传入任意一个物体，就会返回 bool 值，代表该物体是否在触发区域内
            const isIn = trigger.checkInArea(this.gameObject)
        }
    }
}
```

### 1.4 触发器形状

单击 “对象管理器” 面板，选中触发器对象，在触发器的属性面板中可以看到碰撞类型，默认为盒体，也就是立方体，这里也可以修改成球体，效果如图：

![](https://arkimg.ark.online/99a0dc6f-c5f4-4568-bdbd-c2cae5a63503.webp)

::: warning 注意

触发器修改为球体时，其缩放属性的各个分量必须为相同值，球体触发器暂不支持不规则形状。

:::

## 2. 使用静态模型自身触发检测

有时候我们需要让物体自身就可以进行触发检测，比如制作拾取物品时。这时就可以使用**静态模型**本身的触发事件`onTouch` 与 `onTouchEnd` 来进行检测：

### 2.1 添加进入与离开事件

::: warning 注意

模型如果为球体时，其缩放属性的各个分量必须为相同值，球体暂不支持不规则形状。

:::

新建一个脚本文件命名为 ModelTouch 将下文代码复制进去。这段代码实现了玩家碰到挂载脚本的物体后就将这个物体隐藏，玩家离开这个物体之后物体重新显示。

```typescript
@Component
export default class ModelTouch extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        // 将要当前 GameObject 转换为 Model 类型
        const model = this.gameObject as Model;

        // 添加进入模型事件
        model.onTouch.add((other) => {
            if (other instanceof Character) {
                //是的话关闭金币模型显示
                model.setVisibility(false);
            }
        });

        // 添加离开模型事件
        model.onTouchEnd.add((other) => {
            //这里判断一下离开区域的物体是不是一名角色
            if (other instanceof Character) {
                //是的话显示金币模型
                model.setVisibility(true);
            }
        });
    }
}
```

### 2.2 添加模型

接下来，我们拖出一个金币模型当作拾取物，在对象管理器中选中它，并将它的碰撞类型改为 **仅开启检测** ：

![](https://arkimg.ark.online/04f7e4c2-219f-410f-8a00-cb4127f1236a.webp)

然后将刚刚编写好的 **ModelTouch** 脚本拖拽到金币模型下，当作金币模型的挂载脚本：

![image-20240829155027204](https://arkimg.ark.online/image-20240829155027204.webp)

运行起来，我们控制玩家角色去触碰金币。就可以看到在碰到的瞬间，金币消失不见了，等玩家离开金币它就又显示出来了。

<video controls="" src="https://arkimg.ark.online/2023-09-14_17-28-15_x264.mp4"/>
