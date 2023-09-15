# 射线检测

::: tip 阅读本文大概需要 10 分钟。

游戏开发中，我们常常需要进行射线检测，也就是从一点发射一条射线，然后检测射线碰撞到的物体，除了射线检测外还有一些其他类型的检测，本小节就来一起看一下吧。

:::

## 1. 检测

**什么是检测**

检测是判断物体或者方向的一种方法，可以方便我们开发者获取需要位置的物体。

**检测什么用（应用场景）**

玩家释放技能；检测前方的怪物受到伤害；判断玩家前方物体位置的距离；获取前方（区域，范围等内）的物体。

**检测类型**

1. 射线检测
2. 胶囊体范围检测
3. 球形范围检测
4. 矩形范围检测

## 2. 射线检测

**是什么**

射线检测是从开始位置到结束位置发射一条射线，会将沿途的物体以 HitResult 数组的形式传出

**怎么用**

```ts
/** 向角色前方进行射线检测 */
private async lineTraceByCharacter() {
    if (SystemUtil.isClient()) {
        // 获取当前玩家 
        let player = Player.localPlayer
        // 获取玩家角色位置
        const playerPos = player.character.worldTransform.position;
        // 获取玩家当前朝向
        const front = player.character.localTransform.getForwardVector();

        // 进行射线检测
        const results = QueryUtil.lineTrace(playerPos, playerPos.clone().add(front.multiply(1000)), true, true);

        for (let res of results) {
            if (res.gameObject instanceof Character) continue;
            console.log("碰撞点在这里")
            console.log(res.location)
            //这里尝试播放一个火焰特效方便观看
            EffectService.playAtPosition("4330", res.location)
        }
    }
}
```

**示例**

![射线检测预览](https://arkimg.ark.online/%E5%B0%84%E7%BA%BF%E6%A3%80%E6%B5%8B%E9%A2%84%E8%A7%88.gif)



## 3. 胶囊体范围检测

**是什么**

生成一个胶囊体形状的覆盖检测器，给定一个中心点，然后输入半径和高度。会将覆盖到的 GameObject 用数组的形式传出。

**怎么用**

```ts
/** 向角色前方进行胶囊体范围检测 */
private async capsuleOverlapByCharacter() {
    if (SystemUtil.isClient()) {
        // 获取当前玩家 
        let player = Player.localPlayer
        // 获取玩家角色位置
        const playerPos = player.character.worldTransform.position;
        // 获取玩家当前朝向
        const front = player.character.localTransform.getForwardVector();
        // 胶囊体的中心点位置
        const center = playerPos.clone().add(front.multiply(500))
        // 半径
        const radius = 50;
        // 高度
        const height = 80;

        // 进行胶囊体范围检测
        const objs = QueryUtil.capsuleOverlap(center, radius, height, true);

        for (let obj of objs) {
            if (obj instanceof Character) continue;
            console.log("碰撞点在这里")
            console.log(obj.worldTransform.position)
            //这里尝试播放一个火焰特效方便观看
            EffectService.playAtPosition("4330", obj.worldTransform.position)
        }
    }
}
```

**示例**

![胶囊体检测预览](https://arkimg.ark.online/%E8%83%B6%E5%9B%8A%E4%BD%93%E6%A3%80%E6%B5%8B%E9%A2%84%E8%A7%88.gif)

## 4. 球形范围检测

**是什么**

生成一个球形的覆盖检测器，给定一个中心点，然后输入半径。会将覆盖到的 GameObject 用数组的形式传出。

**怎么用**

```ts
/** 向角色前方进行球形范围检测 */
private async sphereOverlapByCharacter() {
    if (SystemUtil.isClient()) {
        // 获取当前玩家 
        let player = Player.localPlayer
        // 获取玩家角色位置
        const playerPos = player.character.worldTransform.position;
        // 获取玩家当前朝向
        const front = player.character.localTransform.getForwardVector();
        // 球形的中心点位置
        const center = playerPos.clone().add(front.multiply(500))
        // 半径
        const radius = 50;

        // 进行球形范围检测
        const objs = QueryUtil.sphereOverlap(center, radius, true);

        for (let obj of objs) {
            if (obj instanceof Character) continue;
            console.log("碰撞点在这里")
            console.log(obj.worldTransform.position)
            //这里尝试播放一个火焰特效方便观看
            EffectService.playAtPosition("4330", obj.worldTransform.position)
        }
    }
}
```

**示例**

![球形检测预览](https://arkimg.ark.online/%E7%90%83%E5%BD%A2%E6%A3%80%E6%B5%8B%E9%A2%84%E8%A7%88.gif)

## 5.矩形范围检测

**是什么**

生成一个矩形的覆盖检测器，给定一个中心点，然后传入矩形的长宽高。会将覆盖到的 GameObject 用数组的形式传出。

**怎么用**

```ts
/** 向角色前方进行矩形范围检测 */
private async boxOverlapByCharacter() {
    if (SystemUtil.isClient()) {
        // 获取当前玩家 
        let player = Player.localPlayer
        // 获取玩家角色位置
        const playerPos = player.character.localTransform.position;
        // 获取玩家当前朝向
        const front = player.character.localTransform.getForwardVector();
        // 矩形的中心点位置
        const boxCenter = playerPos.clone().add(front.multiply(500))
        // 矩形的长宽高
        const boxSize = new Vector(50, 50, 50)

        // 进行矩形范围检测
        const objs = QueryUtil.boxOverlap(boxCenter, boxSize, true);

        for (let obj of objs) {
            if (obj instanceof Character) continue;
            console.log("碰撞点在这里")
            console.log(obj.worldTransform.position)
            //这里尝试播放一个火焰特效方便观看
            EffectService.playAtPosition("4330", obj.worldTransform.position)
        }
    }
}
```

**示例**

![矩形检测预览](https://arkimg.ark.online/%E7%9F%A9%E5%BD%A2%E6%A3%80%E6%B5%8B%E9%A2%84%E8%A7%88.gif)
