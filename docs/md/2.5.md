# 事件通信

::: tip 阅读本文大概需要 15 分钟。

事件通信是做什么用的，如字面意思，是用来通信的。

那么是用来谁和谁通信的？

对联机游戏的概念有所了解之后，我们知道代码会在两个端执行，一个是客户端，一个是在服务端。所以通信方式可以归类为以下几种：

* `客户端` -> `客户端`
* **服务端** -> **服务端**
* `客户端` -> **服务端**
* **服务端** -> `客户端`

本章节将详细介绍上面这几种场景，使用事件方式来通信。

:::

本文会讲解部分网络通信的信息，更多网络相关查看产品文档：[网络同步原理和结构](https://docs.ark.online/Scripting/NetworkSynchronizationStructureandMechanics.html)

## 1. 本地事件

客户端发送事件到客户端，服务端发送事件到服务端，都属于本地事件。

在游戏逻辑中，脚本之间的通信方式其实有很多种，事件就是其中一种使用比较便捷的方式。

下面我们演示一下，同在客户端或者同为服务端的脚本情况下，如何让 A 脚本，调用 B 脚本的某个函数，使用事件通信的方式来实现。

### 发送本地事件-客户端

* 新创建一个脚本，命名为 'GameStart' 

![image-20230529111824370](https://arkimg.ark.online/image-20230529111824370.webp)

* 双击打开脚本，在 onStart 函数中，判断客户端环境后，添加一个延时代码，5 秒后发送一个事件：

```typescript
@Core.Class
export default class GameStart extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if(SystemUtil.isClient()){	//[!code focus]
            // 判断环境是客户端，延时 5 秒后发送一个事件	//[!code focus]
            setTimeout(() => {	//[!code focus]
                // 发送本地事件，事件名我们可以随便自定义，但是要保证发送方和接收方的事件名一致，否则接收不到事件	//[!code focus]
                // 这里我们定义事件名为"client_local_event_test"	//[!code focus]
                Events.dispatchLocal("client_local_event_test")	//[!code focus]
            }, 5000);	//[!code focus]
        }	//[!code focus]
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将 this.useUpdate 赋值为 true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}
```

* 代码改完，我们把 `GameStart` 脚本挂载到场景下，依然和之前操作一样，拖拽到对象管理器的"对象"下面即可

![image-20230529131702333](https://arkimg.ark.online/image-20230529131702333.webp)

* 现在我们在 `GameStart` 脚本中，发送了一个名为 `client_local_event_test` 的事件，下面我们在另外一个脚本中接收事件，并调用其他函数处理业务逻辑

### 接收本地事件-客户端

* 这里我们就不新建一个脚本了，打开之前我们操作的 `PlayerControl` 脚本（如果之前没有创建，就创建一个然后挂载到场景中），在 `onStart` 函数中添加判断客户端的代码，编写监听 `client_local_event_test` 事件的代码，在接收事件后打印日志，示例如下：

```typescript
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {	//[!code focus]
            // 在客户端，监听 client_local_event_test 事件	//[!code focus]
            Events.addLocalListener("client_local_event_test", () => {	//[!code focus]
                console.log("收到了来自 GameStart 的客户端本地事件");	//[!code focus]
            });	//[!code focus]
        }	//[!code focus]
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将 this.useUpdate 赋值为 true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}
```

> 代码中，`() =>{} `的形式是 ts 语法中的匿名函数，在大括号中写其他想要执行的代码即可。这个是无参数的情况。
>
> 有参数时，假设有一个 string 类型的参数，就会变成这样 `(param: string) => {}`，下面的小节里面还会单独介绍带参数的事件发送和接收。
>

* 改完代码后保存，回到编辑器。点击“运行”按钮
* 运行起来，等待 5 秒后，可以看到编辑器的客户端日志窗口中，已经打印了我们刚才编写的语句，如图：

  > 如果没有打印，可排查下 `PlayerControl` 脚本是不是也挂载到场景中的，如果没有则需要挂载

![image-20230529132126018](https://arkimg.ark.online/image-20230529132126018.webp)

我们演示了 A 脚本，如何使用事件通信让 B 脚本执行一段代码

上面例子里面都是客户端，那么如果是同为服务端呢，也就是服务端发消息给服务端该如何通信？

其实是完全一样的做法，通过函数名能判断得出来，其实就是本地接收事件和本地发送事件的方法。所以在服务端也是完全适用的，这里就不再单独演示。

### 带参数的演示

上面都是无参的情况，这里演示一下携带一个 string 类型的参数，如何发送和接收事件：

* 修改发送事件的脚本，打开 `GameStart` 脚本，更改发送事件那行代码，在最后加上一个参数：

* > 这里为了演示方便，把暂时没有用的 **onUpdate、onDestroy 两个函数删除**了

```typescript
  @Core.Class
  export default class GameStart extends Core.Script {
  
      /** 当脚本被实例后，会在第一帧更新前调用此函数 */
      protected onStart(): void {
          if(SystemUtil.isClient()){
              // 判断环境是客户端，延时 5 秒后发送一个事件
              setTimeout(() => {
                  // 发送本地事件，事件名我们可以随便自定义，但是要保证发送方和接收方的事件名一致，否则接收不到事件
                  // 这里我们定义事件名为"client_local_event_test"
                  Events.dispatchLocal("client_local_event_test", "参数 01")	//[!code focus]
              }, 5000);
          }
      }
  }
```

* 修改接收事件的脚本 `PlayerControl` ，多接收一个参数，并打印出来，代码如下：

```typescript
  @Core.Class
  export default class PlayerControl extends Core.Script {
  
      /** 当脚本被实例后，会在第一帧更新前调用此函数 */
      protected onStart(): void {
          if (SystemUtil.isClient()) {
              // 在客户端，监听 client_local_event_test 事件
              Events.addLocalListener("client_local_event_test", (param: string) => {	//[!code focus]
                  console.log("收到了来自 GameStart 的客户端本地事件", param);	//[!code focus]
              });
          }
      }
  }
```

* 点击运行，过 5 秒之后可以看到客户端日志窗口的打印日志，如下：

![image-20230529135600380](https://arkimg.ark.online/image-20230529135600380.webp)

### 总结

可以看到其实核心就两个部分：

1. 发送事件：`Events.dispatchLocal(eventName)`
2. 接收事件：`Events.addLocalListener(eventName, callback);`

如果对 TS 语法已经有一些基础的情况下，其实都非常简单。

对 TS 基础掌握不是很够的情况，难点也主要是“如何将匿名函数作为参数传给函数”，这个就需要再多看一下类似代码，就能很好的理解了。

## 2. 客户端发消息给服务端

由于我们编辑器的特性，客户端和服务端的代码都是在一起的，也就是每一份代码都会在客户端运行一次，还会在服务端运行一次。

所以演示双端通信时，我们不用单独新建服务端脚本，还是使用之前的两个演示脚本即可！

先改动一下发送事件方的 `GameStart` 脚本，在原有的发送本地事件代码下面，添加**客户端发送事件到服务端**的代码，事件名先定义为 `ClientToServer` ，顺便携带一个字符串参数'口袋方舟 666'，示例如下：

```typescript
@Core.Class
export default class GameStart extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if(SystemUtil.isClient()){
            // 判断环境是客户端，延时 5 秒后发送一个事件
            setTimeout(() => {
                // 发送本地事件，事件名我们可以随便自定义，但是要保证发送方和接收方的事件名一致，否则接收不到事件
                // 这里我们定义事件名为"client_local_event_test"
                Events.dispatchLocal("client_local_event_test", "参数 01");

                // 发送事件到服务端(因为上面我们已经判断了这里是客户端的环境，所以不用再判断是否是客户端了)//[!code focus]
                Events.dispatchToServer("ClientToServer", "口袋方舟 666");//[!code focus]
            }, 5000);
        }
    }
}
```

保存代码改动，然后再打开接收事件的脚本 `PlayerControl` ，添加在服务端接收 `ClientToServer` 事件的函数：

```typescript
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            // 在客户端，监听 client_local_event_test 事件
            Events.addLocalListener("client_local_event_test", (param: string) => {
                console.log("收到了来自 GameStart 的客户端本地事件", param);
            });
        }

        if (SystemUtil.isServer()) {//[!code focus]
            // 判断是服务端环境，监听 ClientToServer 事件//[!code focus]
            Events.addClientListener("ClientToServer", (player: Gameplay.Player, param1: string) => {//[!code focus]
                console.log("收到了来自 GameStart 客户端发送给服务端的事件", player.getUserId(), param1);//[!code focus]
            });//[!code focus]
        }//[!code focus]
    }
}
```

对于这段代码，有部分和之前本地通信有比较大的区别，能看懂的话可以直接去看下一小节，这里准备再详细介绍一下接收到的参数列表这部分；

* 重要的是 `addClientListener` 函数的第二个参数 `(player: Gameplay.Player, param1: string)=>{}`
* 上面章节里面我们知道，接收参数时，发送的是什么参数，接收方就是什么参数，但是这里为什么会多一个 `Gameplay.Player` 类型的参数出来呢？
  * 这里我们就需要了解客户端和服务端的一些关系：一个服务端会同时对接多个客户端。
  * 那客户端发送事件过来的时候，我怎么知道是哪个客户端发送的消息呢？所以在这个事件内部就封装好了，是谁发送过来的事件，就把对应的 Player 对象传递过来。
  * 所以，所有的**客户端发往服务端的事件**，默认**第一个参数都是 `Gameplay.Player` 对象**
* 运行起来之后，通过服务端的日志窗口可以看到，已经收到了客户端发来的消息，并且成功打印了用户的 id 和传递过来的参数，如图：

![image-20230530142340946](https://arkimg.ark.online/image-20230530142340946.webp)

### 总结

* `Events.dispatchToServer`  发送事件除了函数名不一样以外，其他使用方式和本地事件是一致的
* `Events.addClientListener` 需要注意的是 callback 里面第一个参数为 player 对象，其他没有什么变化

## 3. 服务端发消息给客户端

剩下最后一种场景的通信了：服务端给客户端发送消息。

上一小节提过一句，服务端同时会对接多个客户端，所以我们服务端发送事件给客户端就分为了两种情况：

1. 发送事件给指定客户端
2. 发送事件给所有客户端

### 发送事件给指定客户端

如果安装了 "mwdoc" 插件的情况下，我们可以按 `Ctrl + Alt + H` 快捷键呼出搜索框，输入“发送事件”搜索得到结果：

> 如果没有安装插件，可以参考帖子：[一键搜索 API 文档插件的安装使用](https://forum.ark.online/forum.php?mod=viewthread&tid=1657&page=1&extra=#pid5242)

![image-20230530145827963](https://arkimg.ark.online/image-20230530145827963.webp)

搜索结果如图所示，我们先看看“服务器发送事件给指定客户端”，点击该条目跳转到 API 文档的详细介绍页面，如图所示：

![image-20230530150101756](https://arkimg.ark.online/image-20230530150101756.webp)

打开 `dispatchToClient` 函数的 API 文档后，恰巧看到下方就是之前我们使用的 `dispatchToServer` 函数，我们对比一下两个函数的参数列表不难发现，`dispatchToClient` 函数的参数里面要多一个 player 参数。

根据我们的目的来推测，想要发送给指定客户端，至少得指定给谁发吧，所以这个 player 参数其实就是我们要给这个客户端发事件。后面两个参数就是一样的了，一个事件名，一个参数列表。

好的，下面我们来实操一下，上面的演示中我们都是分开的两个脚本操作，这次我们把发送事件和接收事件全部都写在一个脚本里面，来说明“**事件通信主要的是要确定哪个环境发给哪个环境，跟脚本是不是同一个没有关系**”。

* 打开 `PlayerControl` 脚本，在之前代码中，找到服务端环境的代码块，在里面添加一个延时 5 秒的逻辑，10 秒后再获取当前服务端存储的所有 player 列表，取第一个 player，然后给这个 player 发送一个事件。在客户端代码处添加服务端事件监听：

* > **为什么要延时 5 秒**：考虑实际场景，因为服务端启动时，客户端其实可能还没有被启动，那这个时候是没有客户端能收消息的，通过 getAllPlayer 函数也获取不到客户端，所以需要延时。5 秒只是一个例子，不是一定需要 5 秒
  >
  > **为什么要获取第一个 Player**：实际游戏项目中，一般情况是有客户端用户上线时， 给对应的客户端发送一个事件，或者有客户端发送事件给服务端后，服务端回复该用户一个事件。这两种场景都能获取到对应的 player 对象，在我们这次功能演示中，为了不引入过多的复杂逻辑导致理解问题，就只取第一 player 来发送事件即可。

```typescript
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            // 在客户端，监听 client_local_event_test 事件
            Events.addLocalListener("client_local_event_test", (param: string) => {
                console.log("收到了来自 GameStart 的客户端本地事件", param);
            });

            // 监听服务端发送到客户端的事件//[!code focus]
            Events.addServerListener("ServerToClient", (str1, num2, str3) => {//[!code focus]
                console.log("收到了服务端发送过来的消息", str1, num2, str3);//[!code focus]
            });//[!code focus]
        }

        if (SystemUtil.isServer()) {
            // 判断是服务端环境，监听 ClientToServer 事件
            Events.addClientListener("ClientToServer", (player: Gameplay.Player, param1: string) => {
                console.log("收到了来自 GameStart 客户端发送给服务端的事件", player.getUserId(), param1);
            });

            setTimeout(() => {//[!code focus]
                // 5 秒后，给第一个客户端发送一个事件//[!code focus]
                let player = Gameplay.getAllPlayers()[0];//[!code focus]
                Events.dispatchToClient(player, "ServerToClient", "我是服务端发送给客户端的消息", 666, "我是第三个参数");//[!code focus]
            }, 5000);//[!code focus]
        }
    }
}
```

* `Gameplay.getAllPlayers()` 这个函数就是只能在服务端调用，获取当前房间的所有 Player 对象，返回的是个 Player 列表

* `Gameplay.getAllPlayers()[0]` 就是获取数组里面第一个 Player 对象

* `Events.dispatchToClient` 发送事件时，携带了 3 个数据，所以接收方也需要接收三个数据，接收到之后就打印出来

点击运行后，等几秒，可以看到客户端的日志窗口中，输出了服务端发送过去的几个参数：

![image-20230530160716142](https://arkimg.ark.online/image-20230530160716142.webp)

* 如图所示，客户端的日志窗口中成功打印了服务端发送过来的数据

### 发送事件给所有客户端

上面演示了发送消息给指定客户端，这里的发送消息给所有客户端其实区别不大，就是不需要传 player 参数了，把刚才的 `PlayerControl` 脚本改造一下，①去掉刚才获取所有 player 对象的代码，②发送事件的函数换成 `dispatchToAllClient` 。事件名不用改动，那么接收事件的地方也不用改动。③传输的数据也稍微改一下证明我们代码生效了，代码如下：

```typescript
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            // 在客户端，监听 client_local_event_test 事件
            Events.addLocalListener("client_local_event_test", (param: string) => {
                console.log("收到了来自 GameStart 的客户端本地事件", param);
            });

            // 监听服务端发送到客户端的事件
            Events.addServerListener("ServerToClient", (str1, num2, str3) => {
                console.log("收到了服务端发送过来的消息", str1, num2, str3);
            });
        }

        if (SystemUtil.isServer()) {
            // 判断是服务端环境，监听 ClientToServer 事件
            Events.addClientListener("ClientToServer", (player: Gameplay.Player, param1: string) => {
                console.log("收到了来自 GameStart 客户端发送给服务端的事件", player.getUserId(), param1);
            });

            setTimeout(() => {
                // 5 秒后，给所有客户端发送事件
                Events.dispatchToAllClient("ServerToClient", "服务端通知所有客户端", 888, "我是第三个参数啊");//[!code focus]
            }, 5000);
        }
    }
}
```

代码保存后，回到编辑器点击运行，客户端的日志窗口输出结果如下：

![image-20230530161249860](https://arkimg.ark.online/image-20230530161249860.webp)

### 总结

* `Events.dispatchToClient(player, eventName, params...)`  服务端发送事件给指定客户端，除了第一个参数要传递 player 对象外，其他并无区别
* `Events.addServerListener` 添加服务端发送给客户端的事件监听，使用方式和本地事件一致，在客户端调用即可
* `Events.dispatchToAllClient(eventName, params)` 服务端发送事件给所有客户端，一般使用场景是在展示一些公共事件的时候使用，使用方式和普通事件也并无区别
* 添加事件监听和指定客户端的完全一致，无其他区别

## 4. 扩展-@Core.Function

上面已经讲完了事件通信的使用方式，这里再扩展一种在同一个脚本中，双端互相调用的方式。

我们新建一个脚本，命名为 `RPCFuncationDemo` ，拖拽挂载到场景上，然后在工程内容那里双击打开该脚本

### 客户端调用服务端

新创建一个函数，命名为 `callFuncDataToServer` ，接收一个 string 类型的参数用来传递数据，代码如下：

```typescript
@Core.Class
export default class RPCFunctionDemo extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    public callFuncDataToServer(str: string) {//[!code focus]
        console.log("我在服务端，是客户端调用的", str, SystemUtil.isServer());//[!code focus]
    }//[!code focus]
}
```

添加一个用来双端通信的装饰器：`@Core.Function()` ，这个方式能通信的最核心的点就是这个装饰器，其他函数命名、参数个数等都不影响。

该装饰器接收一个数组参数，决定这个函数体的内容运行在哪个环境，一共有 `Core.Server` 、 `Core.Client` 、 `Core.Multicast` 三种类型，这里我们是想要客户端调用，调用后的代码运行在服务端，所以使用 `Core.Server` 类型，代码如下：

```typescript
@Core.Class
export default class RPCFunctionDemo extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    @Core.Function(Core.Server)//[!code focus]
    public callFuncDataToServer(str: string) {
        console.log("我在服务端，是客户端调用的", str, SystemUtil.isServer());
    }
}
```

写好函数后，就该调用了，咱们这里依然还是在 onStart 函数里面判断客户端环境，然后调用该函数，代码如下：

```typescript
@Core.Class
export default class RPCFunctionDemo extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {//[!code focus]
            // 在客户端环境，调用服务端函数//[!code focus]
            this.callFuncDataToServer("参数 1");//[!code focus]
        }//[!code focus]
    }

    @Core.Function(Core.Server)
    public callFuncDataToServer(str: string) {
        console.log("我在服务端，是客户端调用的", str, SystemUtil.isServer());
    }
}
```

脚本写好了，刚才创建脚本的时候我们也挂载在场景上了，这里直接运行，看一下服务端的日志窗口，已经打印出对应的日志，如图：

![image-20230530174859205](https://arkimg.ark.online/image-20230530174859205.webp)

### 服务端调用客户端

和事件通信一样，服务端调用客户端函数有两种方式，一种是指定客户端，一种是广播给所有客户端。

同时也要注意，服务端启动的时候，客户端可能还没有启动，所以一样是需要在服务端延时 5 秒后再进行调用，指定客户端单播和广播给所有客户端的代码示例如下：

```typescript
@Core.Class
export default class RPCFunctionDemo extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) {
            // 在客户端环境，调用服务端函数
            this.callFuncDataToServer("参数 1");
        }

        if (SystemUtil.isServer()) {//[!code focus]
            // 在服务端环境//[!code focus]
            setTimeout(() => {//[!code focus]
                // 广播给所有客户端//[!code focus]
                this.callFuncDataToAllClient("广播数据");//[!code focus]
                // 调用指定客户端//[!code focus]
                this.callFuncDataToClient(Gameplay.getAllPlayers()[0], "单播数据");//[!code focus]
            }, 5000);//[!code focus]
        }//[!code focus]
    }

    @Core.Function(Core.Server)
    public callFuncDataToServer(str: string) {
        console.log("我在服务端，是客户端调用的", str, SystemUtil.isServer());
    }

    @Core.Function(Core.Client)//[!code focus]
    public callFuncDataToClient(player: Gameplay.Player, str: string) {//[!code focus]
        console.log("我在客户端，是服务端调用的", str, SystemUtil.isClient());//[!code focus]
    }//[!code focus]

    @Core.Function(Core.Client, Core.Multicast)//[!code focus]
    public callFuncDataToAllClient(str: string) {//[!code focus]
        console.log("我在客户端，是服务端广播给所有客户端的", str, SystemUtil.isClient());//[!code focus]
    }//[!code focus]
}
```

* 如代码所示，我们新增了两个函数，分别是用于服务端调用指定客户端的函数和广播所有客户端的函数
* 调用指定客户端要传递一个 player 对象，和事件通信章节是一致的
* 广播所有客户端时，参数不仅仅是只有一个 `Core.Multicast` ，而是 `Core.Client, Core.Multicast` 两个都包含的
* 也需要注意，我们测试的时候，服务端需要延时几秒后再调用客户端

最终代码保存后运行，在服务端打印的日志如下：

![image-20230530175608558](https://arkimg.ark.online/image-20230530175608558.webp)

在客户端打印的日志如下：

![image-20230530175635844](https://arkimg.ark.online/image-20230530175635844.webp)

### 总结

和事件通信不同之处在于：

1. 不需要写监听函数，可以直接通过调用函数的方式就执行远端代码
2. 受限于调用函数的方式，所以没有事件的方式灵活，事件通信可以跨脚本调用

所以选择哪种通信方式，主要取决于需要实现什么样的逻辑，只要能做到你想要的效果，用哪种方式都是可以的。