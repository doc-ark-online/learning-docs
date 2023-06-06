# 射线检测

::: tip 阅读本文大概需要 10 分钟。

游戏开发中，我们常常需要进行射线检测，也就是从一点发射一条射线，然后检测射线碰撞到的物体，除了射线检测外还有一些其他类型的检测，本小节就来一起看一下吧。

:::

## 1. 检测

**什么是检测**

检测是判断物体或者方向的一种方法，可以方便我们开发者获取需要位置的物体

**检测什么用（应用场景）**

玩家释放技能，检测前方多少角度的怪物受到伤害，判断玩家前方物体位置的距离，获取前方（区域，范围等内）的物体

**检测类型**

1. 射线检测
2. 抛物线检测（疑似 bug）
3. 盒形覆盖检测
4. 球形覆盖检测
5. 圆柱形覆盖检测
6. 角度判断

## 2. 射线检测

**是什么**

射线检测是从开始位置到结束位置发射一条射线，会将沿途的物体以 HitResult 数组的形式传出

**怎么用**

```ts
/** 根据玩家角色的朝向发出射线 */
     private async lineTraceByCharacter(player?: Gameplay.Player) {

        if (Util.SystemUtil.isClient()) {
            // 获取当前玩家 
            player = Gameplay.getCurrentPlayer();
        }
        // 获取玩家角色位置
        const loc = player.character.worldLocation;
        // 获取玩家当前朝向
        const front = player.character.getForwardVector();

        // 进行射线检测
        const res = Gameplay.lineTrace(loc, loc.clone().add(front.multiply(1000)), true, true);

        // 在第一个触碰的位置添加特效
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            if (element.gameObject instanceof Gameplay.Character) continue;
            console.log("碰撞点在这里")
            console.log(element.location)
            //这里尝试播放一个火焰特效方便观看
        }
    }
```

**示例**

![](https://cdn.233xyx.com/1681133561792_642.gif)

![](https://cdn.233xyx.com/1681133561673_001.gif)

## 3. 抛物线检测

可能有 bug

示例

![](https://cdn.233xyx.com/1681133561735_665.gif)

## 4. 盒形覆盖检测

**是什么**

生成一个矩形的覆盖检测器，从开始位置到结束位置确定矩形的长度，然后输入宽带和高度。会将覆盖到的 GameObject 用数组的形式传出。

**怎么用**

```ts
/** 盒型覆盖检测 */
     private async boxOverlap(player?: Gameplay.Player) {
        if (Util.SystemUtil.isClient()) {
            player = Gameplay.getCurrentPlayer();
        }
        // 获取玩家角色位置
        const loc = player.character.worldLocation;
        // 获取玩家角色当前朝向
        const front = player.character.getForwardVector();

        // 盒子宽度
        const width = 100;
        // 盒子高度
        const height = 100;

        const goArr = Gameplay.boxOverlapInLevel(loc.clone().add(front.multiply(50)), loc.clone().add(front.multiply(1000)), width, height, true);
        // 在第一个触碰的位置添加特效
        for (let index = 0; index < goArr.length; index++) {
            const element = goArr[index];
            if (element instanceof Gameplay.Character) continue;
            console.log(element.worldLocation)
            //这里尝试播放一个火焰特效方便观看

        }
    }
```

**示例**

![](https://cdn.233xyx.com/1681133561617_650.gif)

## 5. 球形覆盖检测

**是什么**

生成一个球形的覆盖检测器，传入一个位置和半径，以这个位置为圆心画球。会将覆盖到的 GameObject 用数组的形式传出。

**怎么用**

```ts
/** 球型覆盖 */
    private async sphereOverlap(player?: Gameplay.Player) {
        if (Util.SystemUtil.isClient()) {
            player = Gameplay.getCurrentPlayer();
        }
        // 获取玩家角色位置
        const loc = player.character.worldLocation;
        // 获取玩家角色当前朝向
        const front = player.character.getForwardVector();
        // 半径
        const radius = 50;

        const goArr = Gameplay.sphereOverlap(loc.clone().add(front.multiply(200)), radius, true);

        // 在第一个触碰的位置添加特效
        for (let index = 0; index < goArr.length; index++) {
            const element = goArr[index];
            if (element instanceof Gameplay.Character) continue;
            console.log(element.worldLocation)
            //这里尝试播放一个火焰特效方便观看
        }
    }
```

**示例**

![](https://cdn.233xyx.com/1681133561560_430.gif)

## 6. 圆柱形覆盖检测

**是什么**

生成一个球形的覆盖检测器，传入一个位置，半径和半径，以这个位置为中心点画一个圆柱。会将覆盖到的 GameObject 用数组的形式传出。

**怎么用**

```ts
/** 圆柱型覆盖 
     * 创造一个圆柱形的检测器，检测圆柱内的物体
    */
     private async cylinderOverlap(player?: Gameplay.Player) {
        if (Util.SystemUtil.isClient()) {
            player = Gameplay.getCurrentPlayer();
        }
        // 获取玩家角色位置
        const loc = player.character.worldLocation;
        // 获取玩家角色当前朝向
        const front = player.character.getForwardVector();
        // 半径
        const radius = 50;
        // 高度
        const height = 100;

        const goArr = Gameplay.cylinderOverlap(loc.clone().add(front.multiply(200)), radius, height, true);

        // 在第一个触碰的位置添加特效
        for (let index = 0; index < goArr.length; index++) {
            const element = goArr[index];
            if (element instanceof Gameplay.Character) continue;
            console.log(element.worldLocation)
            //这里尝试播放一个火焰特效方便观看
        }
    }
```

**示例**

![](https://cdn.233xyx.com/1681133561506_884.gif)

## 7. 角度检测

**是什么**

传入两个位置和方向，和检测的角度，根据开始坐标，开始方向，目标坐标，检测角度，判断目标是否在开始位置的这个角度之内

**怎么用**

```ts
/** 角度检测 
     *  angleCheck 根据开始坐标，开始方向，目标坐标，检测角度，判断目标是否在这个角度之内
     *  检测圆球的位置是否在主角 45 度以内 如果在，玩家角色位置播放特效
    */
     private async angleCheck(player?: Gameplay.Player) {
        if (Util.SystemUtil.isClient()) {
            player = Gameplay.getCurrentPlayer();
        }
        // 获取玩家角色位置
        const loc = player.character.worldLocation;
        // 获取玩家角色当前朝向
        const front = player.character.getForwardVector();

        // 异步获取圆球
        let go = await Core.GameObject.asyncFind("6E63F4714D9C6AB054162884D48B4063");

        // 寻找角度
        const angle = 45;

        if (Gameplay.angleCheck(loc, front, go.worldLocation, angle)) {
            //这里尝试播放一个火焰特效方便观看
        }
    }
```

**示例**

![](https://cdn.233xyx.com/1681133561456_977.gif)

::: warning 注意事项

Overlap 返回的是 GameObjectArray，angleCheck 返回 bool，Track 返回 HitResultArray
所有类型双端可用，注意其他物体是否在此端存在
单个静态对象检测到但不能操作
多个静态对象不能被检测到

:::