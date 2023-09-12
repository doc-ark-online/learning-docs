# 创建炸弹脚本

::: tip 阅读本文大概需要 10 分钟

本节将会创建用来控制炸弹预制体的脚本。

:::

在工程内容中创建炸弹脚本，命名为`BombControl`:

![UE4_IzxwmTsr4j](https://arkimg.ark.online/UE4_IzxwmTsr4j.webp)

编写代码前，我们先理清楚炸弹脚本需要什么：

1. 该脚本会获取炸弹特效 、爆炸特效、爆炸音效
2. 在炸弹生成三秒后，隐藏炸弹特效播放炸弹爆炸特效、音效。
3. 在炸弹生成三秒后，检测炸弹附件200单位范围内所有玩家，检测到后就向该玩家发送需要扣血的事件。
4. 在炸弹生成五秒后，删除掉整个炸弹预制体。

代码中使用 `sphereOverlap` 函数来实现范围检测，编辑器中内置的检测方法还有很多，可以阅读这篇教程学习：[射线检测 | 教程](https://learning.ark.online/main-course/programming-scripting/line-trace.html)

```typescript
@Component
export default class BombControl extends Script {
    protected onStart(): void {

        // 服务端运行
        if (SystemUtil.isServer()) {
            // 服务端五秒钟后销毁炸弹预制体
            setTimeout(() => {
                this.gameObject.destroy();
            }, 5000);
            // 三秒后检测炸弹200单位范围内有无玩家
            setTimeout(() => {
                // 范围检测
                const gameObjects = QueryUtil.sphereOverlap(this.gameObject.worldTransform.position, 200, true);
                //对物体进行遍历
                gameObjects.forEach(object => {
                    //判断当前遍历的物体是不是玩家角色
                    if (object instanceof Character) {
                        //我们给玩家发受伤消息
                        Event.dispatchToClient(object.player, "Event_HpChange");
                    }
                })
            }, 3000);

        }

        // 客户端运行
        if (SystemUtil.isClient()) {
            // 三秒后隐藏炸弹特效，播放爆炸特效，播放音效
            setTimeout(() => {
                // 隐藏炸弹特效
                const bombEffect = this.gameObject.getChildByName("炸弹") as Effect;
                bombEffect.setVisibility(false);
                // 显示爆炸特效
                const explodeEffect = this.gameObject.getChildByName("炸弹爆炸") as Effect;
                // 关闭炸弹特效的循环播放
                explodeEffect.loop = false;
                explodeEffect.play();
                // 播放音效
                const explodeSound = this.gameObject.getChildByName("火炮爆炸") as Sound;
                explodeSound.play();
            }, 3000);
        }
    }
}
```

将要上述代码复制到新建好的脚本中，保存脚本。并将脚本拖拽到炸弹预制体中。

![UE4_flOr6tmyjK](https://arkimg.ark.online/UE4_flOr6tmyjK.webp)

这样我们的炸弹预制体就制作完毕了。

