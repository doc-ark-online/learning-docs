# 冲量与冲量对象

::: tip 阅读本文大概需要 20 分钟。

游戏开发中，我们常常需要给角色或者物体施加一个冲击力，让其产生位移，这个力就是冲量，接下来我们来看下冲量是如何使用的。

:::

了解更多本节内容见产品文档：[冲量对象](https://docs.ark.online/MotionControlObjects/ImpulseObject.html)

PS：同时还有一个类似功能的运动器对象，它可以让物体持续运动，功能更丰富好用，推荐查看：[运动器](https://docs.ark.online/MotionControlObjects/IntegratedMover.html)

## 1. 对角色使用冲量

### 什么是角色冲量？

角色冲量就是给角色一个指定方向的力量，使角色按这个方向进行物理上的移动。可以想象有人在我们角色身边狠狠推了它一下。

### 一些使用场景

角色冲量一般会被使用在角色被击退、击飞等情况下，用来进行角色位移的表现。

或者是一些交互类的控件，如蹦床、弹簧等。

给角色添加冲量可以使用 `addImpulse` ，此 API 可以给角色施加一个指定方向的冲量。

```ts
/**
 * 添加冲量
 * @param Vector 应用的冲量
 */
addImpulse(Vector: mw.Vector, ignoreMass?: boolean): void;
```

关于 ignoreMass 这个参数的意义

```ts
ignoreMass : 是否忽略角色的质量参与冲量运算
true：角色质量不参与冲量运算
false：角色质量参与冲量运算
```

* 冲量能在客户端施加于本地玩家角色，对其造成位移。
* 如需控制 NPC 或其他玩家，则需要在服务器操作，否则无效。

**测试代码**

```ts
@Component
export default class PlayerAddImpulse extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindTriggerHandle();
    }

    /** 绑定触发器处理 */
    private bindTriggerHandle() {

        // 不在服务器运行，直接结束
        if (!SystemUtil.isServer()) {
            return;
        }

        // 触发器 GameObjectID 每个项目都不一样，请在自己项目中复制指定的物体 GameObjectID
        const boxTriggerGuid = '3D1907A8405F99356C4CA699543258C8';

        // 异步查询碰撞区域
        GameObject.asyncFindGameObjectById(boxTriggerGuid).then((triggerGo: GameObject) => {
            // 将查询到的 GameObject 转为 trigger
            const triggerBox = triggerGo as Trigger;
            // 添加进入碰撞区域监听
            triggerBox.onEnter.add((joinGo: GameObject) => {

                // 判断进入碰撞区域的对象是否为角色
                if (!(joinGo instanceof Character)) {
                    // 不是角色，停止执行
                    return;
                }
                // 进入的对象转为角色类
                const char = joinGo as Character;
                // 给角色一个向上的冲量
                // addImpulse 该函数只能在服务端运行
                char.addImpulse(Vector.up.multiply(100000), false);

            })
        })
    }
}
```

**场景结构**

![image-20230723114344818](https://arkimg.ark.online/image-20230723114344818.webp)

① 场景上的触发器，用来检测玩家进入指定区域，测试代码中的触发器 GameObjectID 就是它的。

② 一个平面静态模型，用来在运行时方便定位触发器位置。

③ 测试代码的脚本文件。

**演示效果**

<video controls src="https://arkimg.ark.online/1690090260466.mp4"></video>

## 2. 对物体使用冲量

### 什么是物理冲量?

物理冲量和角色冲量其实实现的效果是一致的，只是此处的物理冲量是描述场景中，需要模拟物理的其它场景物件。

### 什么是推进器？

推进器是运动功能对象中一种冲量的实现方式，它以火箭发射时的原理来设计，持续给对应作用物体一个方向的作用力，使这个物体向该方向持续加速运动，可以理解为火箭的推进器。

**使用场景**

需要对一个物体给一个指定方向的持续力，且它又不是角色。比如台球类游戏即可使用该组件实现台球物体的移动，在用推进器实现物理冲量的同时，还使它能在模拟物理的场景中运作，对其它小球产生物理碰撞模拟以及位移。

**测试代码**

```TypeScript
@Component
export default class Thruster extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 查询推进器
        // 服务器以及客户端都会执行
        const thruster = await GameObject.asyncFindGameObjectById('7CF8724744B5D34A94BCC287C8C336B4') as PhysicsThruster;

        // 客户端执行
        if (SystemUtil.isClient()) {
            // 监听 键盘按键 1
            InputUtil.onKeyDown(Keys.One, () => {
                // 向服务器发送网络事件 fire
                Event.dispatchEventToServer("fire");
            })
        }

        // 服务器执行
        if (SystemUtil.isServer()) {
            // 监听 网络事件 fire
            Event.addClientListener("fire", (player: Player) => {
                // 激活推进器
                thruster.enable = true;
                // 设置推进器旋转角度，为当前玩家的反方向
                thruster.worldTransform.rotation = player.character.worldTransform.getForwardVector().multiply(-1).toRotation();
                // 设置推进器的推进力
                thruster.strength = 2800000;
                // 10 毫秒后 关闭推进器
                setTimeout(() => {
                    thruster.enable = false;
                }, 10);
            })
        }
    }
}

```

上述代码实现了，玩家可以在场景中按键盘的 1，则可以驱动小球向当前玩家朝向进行运动。

![image-20230723135212167](https://arkimg.ark.online/image-20230723135212167.webp)

① 需要勾选小球模拟物理。

② 需要勾选小球使用质量。

![image-20230723135644428](https://arkimg.ark.online/image-20230723135644428.webp)

① 将推进器对象挂载为小球的子物体。

② 将 `Thruster` 脚本挂在到场景上。

③ 选中推进器对象将“推进设置”中的“启用”关闭。 

**演示效果**

<video controls="" src="https://arkimg.ark.online/1690092067266.mp4"></video>

### 什么是冲量对象？

冲量对象是一种冲量力的集合，可以对角色或开启物理模拟的静态模型施加冲量力，使其发生物理运动。冲量对象有两个冲量类型，大家可以根据项目需求选择合适的类型。

| 冲量类型 | 说明                                                 |
| -------- | ---------------------------------------------------- |
| 绝对冲量 | 不受其他物理效果影响，以设置属性为标准执行冲量运动； |
| 相对冲量 | 受其他物理效果影响，通过计算后执行冲量运动；         |

除了冲量类型以外，我们还需要关注的一个属性是冲量力类型。

| 冲量力类型 | 说明                         |
| ---------- | ---------------------------- |
| ① 径向力   | 以圆心向外施加一定大小的力； |
| ② 矢量力   | 向某个方向施加一定大小的力； |

![image-20230724104020878](https://arkimg.ark.online/image-20230724104020878.webp)

**使用场景**

冲量对象效果与使用冲量接口的效果一致，但是它可以提前放置于场景上并且设置好参数。主要用于一些固定位置和参数的机关，比如在某个固定位置每隔一段时间爆炸一次的炸弹、撞到就会被弹开的弹簧机关等。

**测试代码**

```typescript
@Component
export default class ImpulseBomb extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 查询冲量对象
        // 服务器以及客户端都会执行
        const impulseGo = await GameObject.asyncFindGameObjectById("393E5AA9") as Impulse;

        // 默认关闭冲量对象
        impulseGo.enable = false;

        // 客户端执行
        if (SystemUtil.isClient()) {
            // 监听 键盘按键 1
            InputUtil.onKeyDown(Keys.One, () => {
                // 向服务器发送网络事件 open
                Event.dispatchEventToServer("open");
            });
        }

        // 服务器执行
        if (SystemUtil.isServer()) {
            // 监听 网络事件 fire
            Event.addClientListener("open", (player: Player) => {
                // 激活冲量对象
                impulseGo.enable = true;
                // 100 毫秒后 关闭冲量对象
                setTimeout(() => {
                    impulseGo.enable = false;
                }, 100);
            })
        }
    }
}
```

上述代码实现了玩家在场景中按下 1 ，动态激活服务端的冲量对象。

![image-20230724095930621](https://arkimg.ark.online/image-20230724095930621.webp)

① 将一个炮弹模型拖动到场景上，用于标记位置，因为冲量对象在游戏运行时是不可见的。

② 将冲量对象放在炸弹周围合适位置。

③ 将刚刚编写好的代码直接拖到场景上。

④ 将冲量对象的冲量类型设置为相对冲量，这里为了将玩家的质量等物理参数加入运算，更真实。

⑤ 设置好冲量方向，冲量对象会有一个箭头，可视化标识当前冲量方向。

**演示效果**

<video controls src="https://arkimg.ark.online/1690164690029.mp4"></video>