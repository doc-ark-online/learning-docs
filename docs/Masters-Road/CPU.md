# 性能优化 - CPU

::: 

阅读本文大概需要15分钟

对 CPU 的掌控在游戏研发中起着至关重要的作用，它直接影响逻辑计算、物理模拟、碰撞检测、渲染效率以及用户操作体验。因此，对 CPU 的深入理解和有效控制是提升游戏性能表现和细节品质的必经之路。

客户端 CPU 超限：帧数下降，游戏卡顿，手机发烫，严重的可能引起代码逻辑执行不符合预期，甚至是游戏闪退。

服务器 CPU 超限：严重的可能引起全体玩家位置同步异常，服务器处理逻辑缓慢，导致发给客户端的消息的速度缓慢，让用户以为网络延迟严重。

本文将介绍口袋方舟中，CPU 使用上的细节及注意事项。

:::

## 1. 如何确定CPU超限

服务器上在**开发者后台**[口袋方舟 | 创作者 (ark.online)](https://portal.ark.online/#/login)选中自己发布的游戏，左侧选择**游戏服务**->**房间列表**后点击右侧查看**服务器性能**。

![image-20231224191110235](https://arkimg.ark.online/image-20231224191110235.png)

在弹出的窗口里可以看到**服务器 CPU**，如果**绿色**的**使用**线段超过了**蓝色**的**限制**线段，则可以判断服务器的 **CPU 超限**。

![image-20231224191158227](https://arkimg.ark.online/image-20231224191158227.png)

客户端可以通过**开发者后台**选中**客户端性能**，如果 **Draw Call** 和 **渲染线程耗时**都很低，而游戏帧率不高，则可以判断为**客户端 CPU 超限**。

![image-20231224191302990](https://arkimg.ark.online/image-20231224191302990.png)

客户端查看性能指标的第二种方式，在编辑器启动的游戏中通过 ~ 键呼出控制台后输入 Stat Unit 调出性能面板，根据 **FPS** 、  **Draw Call** 和 **渲染线程耗时** 来判断 CPU 是否超限。

> Frame：当前帧计算消耗耗时 (30帧标准值为 33.33ms 60 帧标准值为 16.67ms 依此类推)
>
> Game：当前帧 Game 线程计算消耗耗时 (越低越好，一般来说如果 PC 上 Game 线程消耗高于 5 ms。则可能在移动端发生性能风险。此处为 PC 的 CPU型号是 I7-11700K，移动端机型为 A57 测试数据。具体数据取决于不同设备性能)
>
> Draw：当前帧渲染耗时（参考值:越低越好）
>
> GPU：当前帧 GPU 计算耗时（参考值:越低越好）
>
> Draws：当前帧的 DrawCall 数量 （参考值:小于 300）
>
> Prims：当前帧的图元(顶点集合)提交数量（参考值:小于 600 k）

<video controls src="https://arkimg.ark.online/20231205-194450.mp4"></video>

## 2. 增加 CPU 消耗的操作

1. 调用接口，只要使用了接口，都会产生 CPU 的消耗，需要特别注意消耗较高的常用接口的使用，这里列举部分特别常用的接口

- 创建对象：GameObject.Spawn 或 GameObject.asyncSpawn
- 设置获取对象位置：go.worldTransform.position
- 打印日志：console.log

2. 引起 GC（Garbage Collector 垃圾回收）的操作

在**性能优化 - 内存**篇我们介绍过，加载资源，创建对象，然后又取消对象的引用 / 使用关系，此类操作会使得相关内存被系统列为回收的目标，回收过程是会花费 CPU 时间去处理的。

3. 渲染

要想把加载到内存里的内容，最终渲染到画面上，需要 CPU 进行一系列的操作，这个过程是很花费CPU时间的，因此需要控制渲染的三角面（高面数模型）、复杂效果（如半透明，特效）。

## 3. 如何优化 CPU 消耗

如何连接 Devtools 参见**性能优化 - 内存篇**

### JavaScript Profiler（看  CPU）

**一、使用 JavaScript Profiler 的目的**

定位分析逻辑代码或者 JS 语法导致的帧率过低、卡顿等 CPU 瓶颈问题。

**二、使用方法**

1. 在 devtool -> 右边三点->更多工具（More Tools）->JavaScript 性能分析器（JavaScript Profiler） 打开 JS Profiler。

![image-20231202113005438](https://arkimg.ark.online/image-20231202113005438.png)

2. 采样

在发生性能问题的游戏过程开始前录制。

点击开始（start）按钮或者左上角的圆圈录制按钮。

![image-20231229144949645](https://arkimg.ark.online/image-20231229144949645.png)

**三、采样信息的三种视图**

![image-20231229151357998](https://arkimg.ark.online/image-20231229151357998.png)

<center>三种视图</center>

**图表（Chart）视图**

**图表视图**又称火焰图，我们可以利用火焰图观察整个游戏过程中cpu的消耗情况，快速定位造成卡顿的游戏逻辑或者代码位置。

一般来说，最佳的火焰图走势应该如下图1所示，由密集且细长的锯齿组成。其中，锯齿高度代表函数堆栈调用深度。宽度代表该次函数堆栈的总调用耗时。所以，我们在火焰图中应该着重关注呈“梯形”的函数堆栈(如下图2所示)。

![img](https://arkimg.ark.online/111932ypvp1tt9mpy7vavp.jpeg)

<center>（图 1）</center>

![img](https://arkimg.ark.online/112006yoo4xyl9xpppzxzu.jpeg)

<center>（图 2）</center>

如下图3所示。在火焰图中将鼠标悬浮在对应的函数堆栈上，可以看到函数调用的具体信息。

> 自身耗时（Self Time）：该函数的自我耗时 (不包括调用栈中的其他函数耗时)
> 总时间（Total Time）: 自该层函数起的整个调用栈耗时
> 汇总的自身时间（Aggregated Self Time）:采样过程中的总共 Self Time 耗时
> 累计总时间（Aggregated Total Time）:采样过程中的总共 Total Time 耗时
> 应该重点关注自身耗时较高的函数（鼠标单机函数块，可以跳转至函数对应代码位置 如下图4所示）

![image-20231202114503194](https://arkimg.ark.online/image-20231202114503194.png)

<center>(图 3)</center>

![img](https://arkimg.ark.online/112036k6ryrsh6grhzdy6w.jpeg)

<center>(图 4)</center>

**大量（Heavy）视图**

**大量**视图更类似数据统计，它根据调用堆栈的最后一个函数的**自身耗时**依次排列(也叫自下而上图)。我们可以用**大量**图统计整个游戏过程中耗时占比最大的几个函数，并对其进行优化。(如下图 5 所示)。

> 值得注意的是，JS 调用 C++ 导致的调用栈耗时虽然会统计进调用栈耗时中，但是具体的 C++ 函数将会是乱码。如下图5中的 CastToPlayerController 和 多个匿名函数。我们可以点击函数名旁边的三角去查看上一级的调用栈。再根据业务逻辑来优化或者减少调用频次。
>
> 所以在实际开发过程中，应该尽量减少或者不使用匿名函数。匿名函数无法直观地表示在数据图中，会增加我们优化和调试的难度。

![image-20231202115340256](https://arkimg.ark.online/image-20231202115340256.png)

<center>(图5)</center>

**大量**视图可以快速的定位和概览某一具体函数的消耗，方便我们针对性的优化具体函数耗时和逻辑。

**树（Tree）视图**

**树视图**本质和**大量视图**一样，只不过**大量视图**选取的是调用栈尾函数耗时，而**树视图**则是调用栈头以及整个调用栈耗时。具体细节同样可以参考上述的**大量视图**内容。

![image-20231202115943190](https://arkimg.ark.online/image-20231202115943190.png)

<center>(图6)</center>



**实战测试**

这里做了一个小实验，在一个 for 循环中做了创建、设置位置、打印日志3个操作，循环进行了 500 次。

``` typescript
for(let index = 0; index < 500; index++) {
    // 调用asyncSpawn接口异步创建基础方块
	GameObject.asyncSpawn("197386").then( go => {
         // 创建完成后设置方块的位置
		go.worldTransform.position = new Vector(Math.floor(index / 10) * 200, -500 + 100 * (index % 10), 100)
         // 打印日志
		console.log("55555 ", index);
	})
}
```

Devtools 监控了整个调用过程，利用树视图，打开了耗时较多的几个匿名开头的函数，逐个打开直到确认到我们能辨识的函数为止。

![image-20231201192840511](https://arkimg.ark.online/image-20231201192840511.png)

可以确认的情况是 console.log 总共花费了 120 毫秒，worldTransform 从 descriptor 调用 get 开始总共花费了23毫秒，asyncSpawn 总共花费了 766 毫秒，其他接口函数花费时间也可以用同样方式判断。

结论，循环里大量使用耗时较多的接口，会造成较多的 game 线程耗时，因此，以创建对象为例，避免大量创建，避免同时创建，都是一些解决思路 。

### 避免频繁 GC

前文我们提到了 GC 会消耗 CPU 时间，频繁 GC 会导致手机发热，游戏掉帧卡顿，减少 GC 次数可以使用如下手段：

1. **对象池技术**，对象池如何使用参见**性能优化 - 内存**篇。
2. 不想要被系统回收的美术资源，提前将美术资源拖拽放到**对象管理器**的**优先加载**处。



### 分帧处理

<video controls src="https://arkimg.ark.online/20231205-110636.mp4"></video>

在上边这个视频中开始的时候无法旋转摄像机朝向，整个游戏都卡死了一般，原因在于我把创建的对象增加到了 1000 个。

``` typescript
for(let index = 0; index < 1000; index++) {
	GameObject.asyncSpawn("197386").then( go => {
		go.worldTransform.position = new Vector(500, 100 * (indexAll % 100), Math.floor(indexAll / 100) * 200)
		console.log("55555 ", indexAll++);
	})
}
```

下边再看一个视频，可以看到创建的过程摄像机是可以转动的。

<video controls src="https://arkimg.ark.online/20231205-110955.mp4"></video>

请看下边的代码段，通过 setInterval 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

setInterval 第二个参数填的 34，因为 30 帧标准值为 33.33 ms，60 帧标准值为 16.67 ms，1000 毫秒除以帧数，依此类推。

``` typescript
// 创建了setInterval，时间设定在34毫秒，希望的是当处于30FPS的理想状态时，我们1000毫秒能每帧创建10个对象
let createINR = setInterval(()=>{
    // 每帧创建10个对象
	for(let index = 0; index < 10; index++){
		GameObject.asyncSpawn("197386").then(go=>{
			go.worldTransform.position = new Vector(500, 100 * (indexAll % 100), Math.floor(indexAll / 100) * 200)
			console.log("55555 ", indexAll++);
             // 当创建到1000个对象后
			if(indexAll > 1000) {
                  // 停止setInterval方法的执行，传入的是创建setInterval时获取的number值
				clearInterval(createINR)
			}
		})
	}		
}, 34)
```

当把上述代码中 for 循环里的 10 修改为2之后，效果如下视频表现，没有一点卡顿（除了改变循环的数量，也可以修改 setInterval 第二个参数的值，比如将其修改为 66，也能达到不卡的效果）

<video controls src="https://arkimg.ark.online/20231205-144630.mp4"></video>

因此，当有大量对象需要创建，而又不影响其它游戏表现的时候，可以尝试提前一定时间通过分帧创建来达到同样目的。



### 减少人型对象使用

人型对象本身的动画切换、物理效果等等，随时都在消耗CPU计算，在场景中的对象也可以使用角色简单移动策略来达成优化的目的。

角色简单移动策略027相关介绍请看 [V0.27.0.0 Release Note | 产品手册 (ark.online)](https://docs.ark.online/ReleaseNote/v0.27.0.0.html#新增-角色简单移动策略)

