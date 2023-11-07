# 查询检测

::: tip 阅读本文大概需要 10 分钟。

游戏开发中，我们常常需要进行检测。比如在射击游戏中判断子弹是否击中了敌人、炸药爆炸时一定范围内是否有物体等，本章节我们就一起来学习一下射线检测与范围检测。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317942664&p=19&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

关于本章介绍的 API 我们可以在 API 文档中查询详细示例：[QueryUtil | API (ark.online)](https://api-docs.ark.online/classes/mw.QueryUtil.html)

## 1. 射线检测

### 2.1 什么是射线检测

射线检测（Raycasting）是一种常见的**碰撞检测技术**，用于判断投射出的射线是否与场景中的物体相交，并获取相交点的信息。射线检测通常用于识别物体之间的碰撞、计算物体之间的交点或确定可视性等任务。例如玩家与环境的交互、射击游戏中的子弹轨迹计算、物体拾取等。

在编辑器中提供了多种射线检测的类型，根据类型的不同我们发射出的射线形状不同，开发者需要自行选择合适的射线类型以更好的适配游戏。

因为射线检测依赖于碰撞信息，所以关闭碰撞的对象使用射线检测是无法检测到的，如果要让某些物体不被射线检测到，可以尝试将它们的碰撞设为关闭。

### 2.2 检测类型

1. 线段检测 (QueryUtil.lineTrace)
2. 球体范围检测 (QueryUtil.sphereTrace)
3. 盒体范围检测 (QueryUtil.boxTrace)
4. 胶囊体范围检测 (QueryUtil.capsuleTrace)

### 2.3 在代码中使用射线检测

射线检测会从开始位置到结束位置发射一条或多条射线，会将沿途的物体以 HitResult 数组的形式传出。

这里我使用最常见的射线检测，也就是 lineTrace 线段检测，作为示例：

```typescript
@Component
export default class Test extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.F1, () => {
                this.lineTraceByCharacter();
            })
        }
    }

    /** 向角色前方进行射线检测 */
    private async lineTraceByCharacter() {

        // 获取当前玩家 
        const player = Player.localPlayer;
        // 获取玩家角色位置
        const playerPos = player.character.worldTransform.position;
        // 获取玩家当前朝向
        const front = player.character.localTransform.getForwardVector();

        // 进行射线检测
        const results = QueryUtil.lineTrace(playerPos, playerPos.clone().add(front.multiply(1000)), true, true);
        // 遍历检测到的物体
        for (let res of results) {
            // 排除检测到玩家
            if (res.gameObject instanceof Character) continue;
            console.log("碰撞点在这里", res.position);
            //这里尝试播放一个火焰特效方便观看
            EffectService.playAtPosition("4330", res.position);
        }
    }

}
```

<video controls="" src="https://arkimg.ark.online/536phdsqczVBmihW.mp4"></video>

## 2. 范围检测

### 2.1 什么是范围检测

与射线检测类似，范围检测（Overlap Testing）也是一种常见的碰撞检测技术，用于判断物体之间的重叠关系。范围检测通常使用物体的碰撞体积来检测物体之间的重叠，它主要关注碰撞体积的位置和尺寸，而**不考虑其旋转**。可以用于检测玩家与物体的接触、触发区域的进入与离开等场景。

在编辑器中我们同样提供了多种检测类型，因为线段与物体只有相交关系而不会重叠，所以在范围检测中是没有线段类型的。

:::tip 关于性能

因为范围检测仅仅计算物体间是否重叠，返回值较少。性能相对于射线检测要好一点，对于仅需要考虑物体间是否重叠的场景，我们应该优先考虑使用范围检测。

:::

### 2.2 检测类型

1. 盒体范围检测 (QueryUtil.boxOverlap)
2. 球体范围检测 (QueryUtil.sphereOverlap)
3. 胶囊体范围检测 (QueryUtil.capsuleOverlap)

### 2.3 在代码中使用范围检测

范围检测会在指定的范围生成检测区域，将检测到的游戏对象以数值形式返回。

这里我使用常见的球体范围检测作为演示：

```typescript
@Component
export default class Test extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.F1, () => {
                this.overlapByCharacter();
            })
        }
    }

    /** 向角色周围 150 距离进行检测 */
    private async overlapByCharacter() {

        // 获取当前玩家 
        const player = Player.localPlayer;
        // 获取玩家角色位置
        const playerPos = player.character.worldTransform.position;
        // 进行射线检测
        const goArray = QueryUtil.sphereOverlap(playerPos, 150, true);
        // 遍历检测到的对象并输出对象名
        for (let go of goArray) {
            // 如果是玩家就不输出
            if (go instanceof Character) continue;
            console.log("范围中物体名字:", go.name);
        }
    }

}
```

<video controls="" src="https://arkimg.ark.online/6s2gsqcdihW.mp4"></video>

最终输出结果为：

![52fc3b28-d943-446d-bd53-caddafc51259](https://arkimg.ark.online/52fc3b28-d943-446d-bd53-caddafc51259.webp)

可以看到，这里除了角色我们手动跳过了，其它所有范围内的物体都被检测到了包括角色脚下的地板。
