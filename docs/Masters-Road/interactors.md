# 交互物

::: tip 阅读本文大概需要 8 分钟。

配合触发器，交互物可以让开发者快速的制作带有交互行为功能的物体，例如坐到椅子上、开门、开机关等，接下来我们就来一起制作一个交互物吧。

:::

了解更多本节内容见产品文档：[交互物](https://docs.ark.online/GameplayObjects/Interactors.html)

## 1. 什么是交互物？

交互物可以让开发者快速的制作带有交互行为的功能。

**一些使用场景**

例如：坐椅子、开门等，或者是场景上一些固定道具（一些枪战游戏场景中固定的加特林机关枪等）。

## 2. 如何使用交互物

![](https://arkimg.ark.online/1681133087136_709.webp)

在编辑器左上角【游戏功能对象】选项中，找到【逻辑对象】，点击其中的【交互物】，拖拽到主视口。

![UE4_KsBh2XzXkG](https://arkimg.ark.online/UE4_KsBh2XzXkG.webp)

在【对象管理器】中点击交互物，【属性面板】中就可以出现交互物的属性面板，可以修改交互物的交互姿态，这里将 4175 这个资源拖入到交互动画中，这个资源是一个坐下姿态。

![UE4_LgRfGYWtvu](https://arkimg.ark.online/UE4_LgRfGYWtvu.webp)

由于交互对象自身不带触发逻辑，所以添加触发器到场景，然后写如下代码：

```typescript
@Component
export default class Launch extends Script {
    // 填写触发器的 GameObjectId
    triggerGameObjectId = "2AD8EB50";
    // 填写交互物的 GameObjectId
    interactiveGameObjectId = "18206BE4";

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {
        // 因为是坐下是个动作，我们只需要在客户端表现，这里就在客户端运行
        if (SystemUtil.isClient()) {
            // 下载并加载 4175 资源
            await AssetUtil.asyncDownloadAsset("4175");
            // 获取交互物
            const interactive = (await GameObject.asyncFindGameObjectById(this.interactiveGameObjectId)) as Interactor;
            // 获取触发器
            const trigger = (await GameObject.asyncFindGameObjectById(this.triggerGameObjectId)) as Trigger;
            // 触发器事件绑定
            trigger.onEnter.add(go => {
                // 判断进入碰撞区域的对象是否为角色
                if (!(go instanceof Character)) {
                    // 不是角色，停止执行
                    return;
                }
                // 让该角色进入交互
                interactive.enter(go);
                // 3000 毫秒后离开交互，并移动到(0,0,200)
                setTimeout(() => {
                    interactive.leave(new Vector(0, 0, 200));
                }, 3000);
            })
        }
    }
}
```

## 3. 演示效果

<video controls src="https://arkimg.ark.online/1690524870156.mp4"></video>

::: warning 注意事项

1. 交互对象的缩放没有实际意义，请使用位置、旋转对其进行编辑，交互对象的旋转通常会改变角色姿态动画的旋转
2. 交互对象自身不带触发逻辑，所以通常情况下你还需要一个触发条件，这个条件可以是其他的触发条件，如按下某键
3. 交互物是一个双端对象，生成的时候需要在双端生成，激活交互和离开交互都在客户端进行。
4. 交互物的 assetId 为 Interactor
5. 代码中获取交互物类型为 Interactor
6. 需要为你在交互物中填写的姿态 assetId 添加到编辑器优先加载中。

:::