# Tween - 补间动画

::: tip 阅读本文大概需要 15 分钟。

在游戏制作过程中，我们经常需要实现一些常见的动画效果，例如将一个物体平滑地移到另一个位置、让一个物体以匀速放大、或者让一个数字逐渐过渡等。这些需求可以通过使用 Tween 动画来实现，它提供了简单且强大的工具来创建各种平滑的过渡效果。

:::



## 1.Tween是什么？

补间(动画)（来自[in-between维基百科](https://en.wikipedia.org/wiki/Inbetweening)）是一个概念，允许你以平滑的方式更改对象的属性。你只需告诉它哪些属性要更改，当补间结束运行时它们应该具有哪些最终值，以及这需要多长时间，补间引擎将负责计算从起始点到结束点的值。

**说通俗一点，Tween就是一个封装好的函数库，能够实现一些插值运算，方便定义和操作一些补间组。能够使代码的结构看起来更加清晰！**

## 2.使用步骤

### 2.1.将全局补间组添加到update

Tween本身不会运行，需要通过update对Tween进行驱动，推荐在主循环中添加对应代码，如下：

```ts
@Component
export default class GameStart extends Script {
    protected async onStart(): Promise<void> {
        // 注意开启该脚本的update，不然tween的update就也不会执行
        this.useUpdate = true
    }

    protected onUpdate(dt: number): void {
        // 这个大写的TWEEN，是指全局补间组。所有实例化的Tween，都会添加到这个组里，然后统一进行update。所以如果不将全局补间组添加到update，所有补间动画就都不会执行
        TweenUtil.TWEEN.update();
    }
}
```

### 2.2.创建一个Tween并开始播放

这里只演示一个最基础的用法

```ts
// 基本格式：
let tween = new Tween({ 对象 }).to({ 对象 }, 补间时间).onUpdate((value) => {
    // 可以在这里使用补间对象来进行补间操作
    console.log(value)
})
// 开始播放Tween动画
tween.start();
```

## 3.Tween的相关接口

### 3.1.控制Tween动画

- **start和stop**

用来控制一个Tween的开始和停止

```ts
tweenA.start(); // 开始播放
tweenA.stop(); // 停止播放
```

- **chain**

制作多个彼此衔接的动画，例如一个动画在另一个动画结束后开始，可以通过 chain 来实现

```typescript
tweenA.chain(tweenB);  //tweenB 在 tweenA 之后开始动画，故可以制作一个无限循环的动画
tweenB.chain(tweenA);
```

- **repeat**

制作循环动画，接收一个用于描述循环次数的参数

```typescript
tweenA.repeat(10);
```

- **delay**

用于控制动画之间的延迟

```typescript
tweenA.delay(1000);
tweenA.start()
```

### 3.2.回调函数

- **onStart**==>tween动画开始前的回调函数
- **onStop**==>tween动画结束后的回调函数
- **onUpdate**==>在tween动画每次更新后执行
- **onComplete**==>在tween动画全部结束后执行

```typescript
let tweenA = new TweenUtil.Tween({}).to({}, 1000).
    onStart(() => {
		// 添加逻辑
    }).
    onUpdate(() => {
		// 添加逻辑
    }).
    onStop(() => {
		// 添加逻辑
    }).
    onComplete(() => {
		// 添加逻辑
    })
```

### 3.3.缓动函数和缓动方式

- **缓动函数**

> Linear ==> 线性匀速运动效果
>
> Quadratic ==> 二次方的缓动（t^2）
>
> Cubic ==> 三次方的缓动（）
>
> Quartic ==> 四次方的缓动（）
>
> Quintic ==> 五次方的缓动
>
> Sinusoidal ==> 正弦曲线的缓动（）
>
> Exponential ==> 指数曲线的缓动（）
>
> Circular ==> 圆形曲线的缓动（）
>
> Elastic ==> 指数衰减的正弦曲线缓动（）
>
> Back ==> 超过范围的三次方的缓动
>
> Bounce ==> 指数衰减的反弹缓动



- **缓动方式**

> easeIn（In） ==> 加速，先慢后快
>
> easeOut（Out） ==> 减速，先快后慢
>
> easeInOut（InOut） ==> 前半段加速，后半段减速

使用例子：

```typescript
new Tween({}).to({}, 1000).onUpdate().easing(TweenUtil.Easing.Cubic.Out)
```

### 3.4.插值函数

使用插值函数可以控制Tween的运动曲线，实际应用案例可以参考这篇帖子：[感受下无限导弹的魅力吧！ - 资源/心得分享 创作者论坛 (ark.online)](https://forum.ark.online/forum.php?mod=viewthread&tid=1483)

```typescript
testTween() {
    const startLoc = this.gameObject.worldTransform.position;
    // 设置tween的起始位置
    let loc = { x: startLoc.x, y: startLoc.y, z: startLoc.z };
    // 创建新的Tween对象
    const newTween = new Tween(loc);
    console.log("tween created.")

    // 使用插值，to方法里传入的是数组，这里请注意传入的数组是分别针对x，y，z的
    newTween.to({ x: [100, 200, 100, loc.x], y: [100, 200, 100, loc.y], z: [100, 200, 100, loc.z] })
        // 使用interpolation方法传入贝塞尔插值
        .interpolation(TweenUtil.Interpolation.Bezier)
        .onUpdate((val, time) => {
            // 在update中更新代码附加对象的位置
            this.gameObject.worldTransform.position = new Vector(val.x, val.y, val.z);
        })
        .start()
        // 无限重复
        .repeat(Infinity);
}
```

## 4.效果演示

### 4.1.数字补间动画

```ts
/**
 * 开启一个数字的补间动画
 * @param oldNum 旧值
 * @param targetNum 目标值
 * @param time 时间（毫秒）
 */
private NumTweenStart(oldNum: number, targetNum: number, time: number) {
    let tween = new Tween({ value: oldNum }).to({ value: targetNum }, time).onUpdate((obj) => {
        // 每一次更新，让控件mNum_txt显示的内容为补间值
        this.mNum_txt.text = obj.value.toFixed(2);
    })
    tween.start();
}
```

- <video controls src="https://forum.ark.online/forum.php?mod=attachment&aid=MzQzfDQxMjlhZTY5fDE2OTY5OTAwNjJ8MTEzfDExMjY%3D&noupdate=yes"></video>

### 4.2.UI补间动画

```ts
/**
 * 开启一个移动UI的补间动画
 * @param targetX 目标位置x
 * @param targetY 目标位置y
 */
private UITweenStart(targetX: number, targetY: number) {
    let targetPosition = new Vector2(targetX, targetY)
    let tween = new Tween(this.mUITween_img.position).to(targetPosition, 1000).onUpdate((obj) => {
        // 每一次更新，改变图片mUITween_img的位置
        this.mUITween_img.position = obj;
    })
    tween.start()
}
```

- <video controls src="https://forum.ark.online/forum.php?mod=attachment&aid=MzQxfDRiNjQ3MmMyfDE2OTY5OTAwNjJ8MTEzfDExMjY%3D&noupdate=yes"></video>

### 4.3.物体补间动画

```ts
private async ObjTweenStart(targetX: number, targetY: number, targetZ: number) {
    // 查找物体
    let targetObj = await GameObject.asyncFindGameObjectById("FE9CD8A8")
    // 根据传入值创建目标点坐标
    let targetPosition = new Vector(targetX, targetY, targetZ)
    let tween = new Tween(targetObj.worldTransform.position).to(targetPosition, 1000).onUpdate((obj) => {
        // 每一次更新，改变物体targetObj的位置
        targetObj.worldTransform.position = obj;
    })
    tween.start()
}
```

- <video controls src="https://forum.ark.online/forum.php?mod=attachment&aid=MzQyfDhiNDAzYWVmfDE2OTY5OTAwNjJ8MTEzfDExMjY%3D&noupdate=yes"></video>

## 











