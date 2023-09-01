# 运动器

::: tip 阅读本文大概需要 10 分钟

使用运动器可以快速实现各类运动机关，配合预制体和冲量对象一起使用可以极快的搭建闯关类游戏。接下来我们就一起来学习如何使用运动器吧！

:::

了解更多本节内容见产品手册：[运动器](https://docs.ark.online/MotionControlObjects/IntegratedMover.html)

## 1. 什么是运动器？

运动器可以成为模型或者相机的子物体，通过属性面板设置一些参数即可为父物体提供平移、旋转、单摆等运动能力。

## 2. 运动器使用场景

运动器常用在闯关类游戏场景中固定地点的机关，比如场景中左右摆动的大摆锤、上下移动的地板等。

## 3. 运动器使用示例

### 直接拖到场景中使用

![UE4_4FBqAlxIGP](https://arkimg.ark.online/UE4_4FBqAlxIGP.webp)

① 拖动一个墙体模型( assetId: 147509 )到场景上，将运动器拖拽为方块的子节点。

② 在运动器约束设置中勾选启用，这样游戏运行后运动器就会自动在场景中运行。

③ 在平移设置中将 X 方向填入 500 ，单程运动时间填为 5 秒，代表 30 秒内每秒移动 50 单位距离。勾选重复执行后物体会在到达终点后，沿着过来的路径再回去。

④ 在场景中选中预制体可以看到一条线，这条线就是运动器实际的运动轨迹。

**效果如下：**

<video controls src="https://arkimg.ark.online/1690532146543.mp4"></video>

除此之外还可以实现单摆、旋转等效果，下面列举几个常见效果：

**大摆锤 （单摆）：**

<video controls src='https://arkimg.ark.online/1690534026527.mp4'></video>

**旋转栏杆（旋转）：**

<video controls src='https://arkimg.ark.online/784631513496.mp4'></video>

### 配合代码让运动器父物体可以推动玩家

在实际开发中我们可能需要让运动的模型将玩家推开，比如在闯关游戏中一个飞来的方块将玩家推到陷阱中。接下来我们使用代码设置一下，实现推动玩家的功能。

```typescript
@Component
export default class TestPush extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            // 启用强制更新移动
            Player.localPlayer.character.forceUpdateMovement = true; // [!code focus]
        }
    }
}
```

创建 `TestPush` 脚本，将上述代码复制进去实现效果如下：

<video controls src="https://arkimg.ark.online/1690532962927.mp4"></video>



