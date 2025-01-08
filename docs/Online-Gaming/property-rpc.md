# RPC 与 属性同步

::: tip 阅读本文大概需要 10 分钟。

在网络游戏中服务端与客户端之间需要频繁通讯，之前我们已经介绍了事件通信，本章节我将会再介绍两种客户端与服务端的通讯方式：RPC 与 属性同步。

:::
关于本章节更多详细内容可以查阅产品手册：[网络同步原理和结构 | 产品手册 (ark.online)](https://docs.ark.online/Scripting/NetworkSynchronizationStructureandMechanics.html)

## 1. RPC 介绍与使用

### 1.1 什么是 RPC

RPC （Remote Procedure Call 远程过程调用）是在本地调用但在其他机器（不同于执行调用的机器）上远程执行的函数。

RPC 函数非常有用，可允许客户端或服务器通过网络连接相互发送消息。

在双端脚本中，如果我们想要让某些函数在服务端运行，并且需要在同脚本内使用客户端函数去调用，就可以使用 RPC 函数。

### 1.2 使用 RPC 函数

要将一个函数声明为 RPC 函数，我们需要将 `Server`、`Client` 或 `Multicast` 等关键字添加函数的  `@RemoteFunction` 装饰器参数中，它们代表函数在哪一个端执行。

RPC 方式能通信的最核心的点就是这个装饰器，函数命名、参数个数等都不影响。

| <div style="width:100px">参数</div> | 意义                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| Server                              | 代表该函数在服务端执行。                                     |
| Client                              | 代表该函数在指定的玩家的客户端中执行。                       |
| Multicast                           | 代表该函数在所有玩家的客户端中执行。                         |
| Result                              | 代表该函数支持返回值。**需注意仅异步函数支持**。             |
| Unreliable                          | 代表该函数为不可靠通信。可以用于不要求可靠性的通信，来减少延迟和网络流量和压力，避免由于 RPC 溢出导致断线重连。 |

接下来我将会举一个例子，通过打印日志来演示 RPC 函数的执行方式。

创建一个名为 `RPCTest` 的脚本，并拖到场景中：

![65b9c19d-d59b-4bf6-b27d-b0e32676598e](https://arkimg.ark.online/image-20240918110130816.webp)

打开脚本，填入下列代码：

```typescript
@Component
export default class RPCTest extends Script {

    protected onStart(): void {

        // 在客户端中执行逻辑
        if (SystemUtil.isClient()) {
            // 调用服务端函数
            this.TestServer();
        }

        // 在服务端中执行逻辑
        if (SystemUtil.isServer()) {
            // 三秒后执行,服务器刚启动的时候玩家还没有开始连接
            setTimeout(() => {
                // 获取所有已连接玩家，并随机一个玩家执行客户端函数
                const players = Player.getAllPlayers();
                const luckPlayer = players[MathUtil.randomInt(0, players.length)];
                this.TestClient(luckPlayer);

                // 调用多播函数，让所有客户端执行
                this.TestMulticast();
            }, 3000);
        }

    }

    @RemoteFunction(Server)
    public TestServer(): void {
        console.log("这是服务端函数,只有服务端执行!");
    }

    @RemoteFunction(Client)
    public TestClient(player: Player): void {
        console.log("这是客户端函数,只有参数中指定的玩家会执行,当前玩家 ID:" + player.userId);
    }

    @RemoteFunction(Client, Multicast)
    public TestMulticast(): void {
        console.log("这是多播,所有玩家都会执行!");
    }

}
```

接下来我们运行两个客户端，然后观察输出结果。我将会通过输出结果来讲解每个函数的作用。

**服务端执行结果：**

![6d63695f-e7d1-4447-b86f-64393280861b](https://arkimg.ark.online/6d63695f-e7d1-4447-b86f-64393280861b-1696674042923-12.webp)

服务端函数被执行了两次，这是因为我们运行了两个客户端，每一个客户端启动后都会调用一次服务端的`TestServer`函数。

**客户端 1 执行结果：**

![e12272fa-7786-4fb3-a230-b171ef3c9462](https://arkimg.ark.online/e12272fa-7786-4fb3-a230-b171ef3c9462.webp)

客户端多播函数`TestMulticast`执行了一次，因为多播函数被调用时每个客户端都会执行。

单客户端函数`TestClient`执行了一次，因为服务端随机玩家刚好随机到了拥有客户端 1 的玩家。

**客户端 2 执行结果：**

![2ecc8dda-2600-4d30-a1e2-7de3e824c26a](https://arkimg.ark.online/2ecc8dda-2600-4d30-a1e2-7de3e824c26a.webp)

客户端多播函数`TestMulticast`执行了一次，多播函数被调用时每个客户端都会执行。

服务器随机玩家没有选中客户端 2 的玩家，所以客户端 2 的客户端函数不会执行。

### 总结

和事件通信不同之处在于：

1. 不需要写监听函数，可以直接通过调用函数的方式就执行远端代码
2. 受限于调用函数的方式，所以没有事件的方式灵活，事件通信可以跨脚本调用

所以选择哪种通信方式，主要取决于需要实现什么样的逻辑，只要能做到你想要的效果，用哪种方式都是可以的。

## 2. 属性同步介绍与使用

### 2.1  什么是属性同步

在游戏中，我们常常会遇到某个数值需要定期刷新的场景，比如玩家排行榜的排名。如果我们使用 RPC 来同步的话会让代码结构变得比较复杂，这时我们就可以使用属性同步了。

每当对象的属性值发生变化时，服务器会向所有客户端发送更新。客户端会将其应用到对象的本地版本上。这些更新只会来自服务器，客户端永远不会也不能向服务器或其他客户端发送属性更新。

属性同步是可靠的，这意味着客户端的值最终都将会与服务端上的值相同，需要注意的是属性同步的频率是固定的，如果在服务端高频修改可能不会将每次修改后的值同步到客户端，例如一个整数的值快速从1 变成 10，然后又变成了 20，客户端最终将会接收到 20，而且客户端不一定会知道这个值曾经是 10。

::: danger 注意

请不要在客户端上修改被标记了属性同步的对象，这样会导致该对象的值与服务端不同，直到下一次同步为止。

:::

### 2.2 使用属性同步

使用前提：

- Replicated 只在网络环境为双端且继承 `Script` 的脚本里生效。
- Replicated 只接受在双端的脚本中使用，因为修改 Replicated 的值必须在服务端进行，而 Replicated 值修改的回调函数必须在客户端调用，故单端脚本作为Replicated 的生命周期不完整，不能使用。

::: tip 关于支持同步的类型

单个属性支持类型：String、 Boolean、 Number、 null、 undefined、 Vector、 Vector2、 Vector3、 Vector4、 LinearColor、 Rotation、 Transform、 以及这些类型的一维数组，确定不会支持的类型有多维数组、Set 、Map类型

:::

接下来我将会举一个例子，通过打印日志来演示 属性同步的执行方式。

创建一个名为 `ReplicatedTest` 的脚本并将它拖到场景中：

![556ed469-35a0-4d46-84c6-25dfee1c1ed0](https://arkimg.ark.online/image-20240918105932944.webp)

复制下列代码到脚本中。

```typescript
@Component
export default class ReplicatedTest extends Script {

    // 对 time 对象开启属性同步
    @Property({ replicated: true, onChanged: "onTimeValueChange" })
    private time: number = 0;

    protected onStart(): void {

        // 属性同步的对象的值只有在服务端修改才会自动同步
        if (SystemUtil.isServer()) {
            // 每秒给 time 加1
            TimeUtil.setInterval(() => {
                this.time = this.time + 1;
            }, 1);
        }
    }

    // 属性同步对象的值被改变回调,这个函数将会在客户端执行
    private onTimeValueChange(): void {
        console.log("接收到的值:" + this.time);
    }
}
```

代码中我们声明了一个 number 类型的变量 time ，并给它加上装饰器 `@Property` 接着将 `replicated` 设置为 true 表示该变量将会使用属性同步功能。

`onChanged` 参数需要传递一个字符串进去，该字符串表示的是，属性同步对象的值被改变时，触发的**回调函数的函数名**。这里要注意函数名的大小写字母，不能传递错误。

代码编写完毕后切回还编辑器，运行单个客户端，观察日志输出中的结果：

![4fca2f66-e5bd-4322-ab3c-70d2282079fa](https://arkimg.ark.online/4fca2f66-e5bd-4322-ab3c-70d2282079fa.webp)

因为回调函数只会在客户端执行，所以我们打开客户端日志输出窗口观察程序执行结果，在客户端 1 的日志输出窗口中，我们可以看到每秒钟都会接受到一次值被改变的输出。

### 2.3 自定义类使用同步

实际开发中常常会用一个类来描述某个物体的所有数据，属性同步也 RPC 也支持同步一个指定的可序列化的类。

- 要同步的类需要用 `@Serializable` 装饰器进行装饰。
- 要同步的类的成员变量需要是**基础类型**并且使用`@Property({ replicated: true })`装饰器标记。

```typescript
@Serializable
class TestPlayerData {
    @Property({ replicated: true })
    public name: string;
    @Property({ replicated: true })
    public age: number;
}
```

### 2.4 指定客户端进行属性同步

在上述示例中，针对继承自 `Script` 的脚本中的 `replicated` 属性，当其在服务端进行修改时，将会自动同步至所有客户端，并触发相应的回调函数。然而，对于那些仅与单个玩家相关的属性，例如玩家的个人闯关倒计时，这种全局同步就显得不必要。针对这种情况，我们可以采用另一种方法，仅将该属性单独同步给对应的玩家，以优化数据传输和处理效率。

对于指定客户端的属性同步与广播至所有客户端的 `replicated` 属性同步，两者之间仅存在细微的差异。具体来说，要实现指定客户端的属性同步，需要在继承自 `PlayerState` 的脚本中进行操作。

下面，我将提供一个示例，通过日志打印的方式来展示如何执行指定客户端属性的同步过程。

创建一个名为 `PlayerStateTest` 的脚本并复制下列代码到脚本中。

``` typescript
// 这个脚本继承的是PlayerState而非Script
@Component
export default class PlayerStateTest extends PlayerState {

    // 对limitTime对象开启属性同步
    @Property({ replicated: true, onChanged: "onLimitTimeChanged" })
    private limitTime: number = 0;

    // 记录定时器ID，用于停止定时器
    private intervalId: number;

    protected onStart(): void {
        if (SystemUtil.isServer()) {
            // 属性同步的对象的值只有在服务端修改才会自动同步
            this.startCount();
        }
    }

    startCount() {
        this.limitTime = 10;
        this.intervalId = TimeUtil.setInterval(() => {
            this.limitTime -= 1;
            if (this.limitTime <= 0) {
                TimeUtil.clearInterval(this.intervalId);
            }
        }, 1)
    }

    // 属性同步对象的值被改变回调,这个函数将会在客户端执行
    onLimitTimeChanged() {
        console.log("接收到的值:" + this.limitTime);
    }
}
```

代码中我们声明了一个 number 类型的变量 `limitTime`，并给它加上装饰器 `@Property` 接着将 `replicated` 设置为 true 表示该变量将会使用属性同步功能。

`onChanged` 参数需要传递一个字符串进去，该字符串表示的是，属性同步对象的值被改变时，触发的**回调函数的函数名**。这里要注意函数名的大小写字母，不能传递错误。

在创建好代码之后，每个玩家连接到服务端后会自动给每个玩家创建 `PlayerStateTest` 实例。先后运行两个客户端，观察日志中的输出结果。

![image-20240918105400125](https://arkimg.ark.online/image-20240918105400125.webp)

由于每个客户端的进入时间不同，所以每个 `PlayerStateTest` 开始执行的时间不同。每个客户端收到对应的同步属性的值的时间也不同。

此外，还可以通过通过 `Player.getPlayerState()` 拿到指定玩家的数据同步类的实例：

``` typescript
// 服务端获取
// 通过player，获取到TestPlayerState对应PlayerState实例对象
let instance = player.getPlayerState(PlayerStateTest);
// 调用实例中的方法，方法中的属性改变仅同步给player对应的客户端
instance.startCount();

// 客户端获取
let instance = Player.localPlayer.getPlayerState(PlayerStateTest);
```

::: danger 注意

在每个客户端，只会为这个客户端的 player 创建一份 `PlayerState` 实例，所以在客户端无法获取其他玩家的 `PlayerState` 实例。

:::
