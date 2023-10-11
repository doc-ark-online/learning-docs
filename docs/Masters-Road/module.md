# 模块管理

模块管理是编辑器提供的一套代码框架，旨在帮助开发者改善代码结构以及提高开发效率。

模块管理的主要作用是将客户端与服务端进行了关联，降低了**RPC**代码的编写频率。另外模块管理还与数据中心进行了关联，不论是客户端还是服务端都能够方便的获取到**对应玩家**的模块数据。

下面就以具体使用步骤来为大家介绍模块管理的相关内容：

## 1.创建模块脚本

模块管理的核心是客户端代码与服务端代码的关联，所以一个模块至少包含两个脚本。

**客户端模块脚本：**

客户端模块需要继承 ModuleC

```ts
export class MyModuleC extends ModuleC<MyModuleS, null>{

}
```

**服务端模块脚本：**

服务端模块需要继承 ModuleS

```ts
export class MyModuleS extends ModuleS<MyModuleC, null>{

}
```

## 2.创建模块数据脚本（可选）

::: tip “**可选**”

我们使用模块管理的时候，如果一个模块不需要使用到数据，我们就可以不用添加。

:::

模块数据脚本需要继承 SubData

```ts
export class MyModuleData extends Subdata {
    // 添加了一个myName字段代表名字
    @Decorator.persistence()
    myName: string

    // 添加了一个myAge字段代表年龄
    @Decorator.persistence()
    myAge: number
}
```

将模块数据与模块进行关联

```ts
export class MyModuleC extends ModuleC<MyModuleS, MyModuleData>{

}

export class MyModuleS extends ModuleS<MyModuleC, MyModuleData>{

}

```

## 3.模块的生命周期函数

### 3.1.客户端模块的生命周期函数

客户端模块包含的生命周期函数如下图所示：

> ![image-20231011111910023](C:\Users\10674\AppData\Roaming\Typora\typora-user-images\image-20231011111910023.png)
>
> - onAwake：模块被创建（注册）时执行
> - onStart：模块启动时执行
> - onEnterScene：进入场景时调用
> - onUpdate：刷新模块时调用
> - onDestroy：销毁模块时调用

### 3.2.服务端模块的生命周期函数

服务端模块包含的生命周期函数如下图所示

> ![image-20231011112745691](C:\Users\10674\AppData\Roaming\Typora\typora-user-images\image-20231011112745691.png)
>
> - onAwake：模块被创建（注册）时执行
> - onStart：模块启动时执行
> - onPlayerJoined：玩家进入房间时执行（前后端以及数据还未准备就绪）
> - onPlayerEnterGame：玩家进入游戏时执行（前后端以及数据准备完毕）
> - onPlayerLeft：玩家离开房间
> - onUpdate：刷新模块时调用
> - onDestroy：销毁模块时调用

## 4.注册模块

编写好的模块脚本，需要在双端脚本中进行注册。**否则模块的生命周期函数将不会执行。**

在开发时，通常都是创建一个 GameStart 脚本来作为游戏的启动入口，我们就在 GameStart 脚本中编写注册模块的代码：

```ts
@Component
export default class GameStart extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 依次填入服务端模块的模块名、客户端模块的模块名、数据模块的模块名
        ModuleService.registerModule(MyModuleS, MyModuleC, MyModuleData)
    }
}
```

## 5.网络方法

网络方法是模块管理最常用的一个功能，它可以让我们便捷的进行RPC调用。

在模块中，以 "**net_**" 开头进行命名的函数，将会在模块启动时注册为网络方法。

**客户端模块**

```ts
export class MyModuleC extends ModuleC<MyModuleS, MyModuleData>{

    test() {
        // 通过this.server来调用服务端模块的方法
        this.server.net_ServerDoSomething()
    }

    // 网络方法，可由服务端进行调用
    net_ClientDoSomething() {

    }
}
```

**服务端模块**

```ts
export class MyModuleS extends ModuleS<MyModuleC, MyModuleData>{

    // 让指定客户端调用方法
    tsetA(player: Player) {
        this.getClient(player).net_ClientDoSomething()
    }

    // 让所有客户端调用方法
    testB() {
        this.getAllClient().net_ClientDoSomething()
    }

    // 网络方法，可由客户端进行调用
    net_ServerDoSomething() {
        console.log("调用者是：" + this.currentPlayer)
    }
}
```

::: tip **注意事项**

1.网络方法的命名，必须加上"**net_**"，否则不会生效

2.服务端网络方法在被客户端调用时，可以通过 **this.currentPlayer** 获取到调用者，并且除了这种情况，**this.currentPlayer** 在服务端模块的其它地方调用是不会生效的。

:::

## 6.ModuleService

在一个项目中，我们可以编写多个模块，这些模块之间的交互，以及我们对不同模块的获取，都需要有一个统一的“中心”来进行控制。这个“中心”就是 **ModuleService** 。

ModuleService 提供了两个常用功能，下面分别为大家介绍：

- **registerModule**（注册模块）

  这个功能用来对模块进行注册，也就是启动模块，语法如下：

  ```ts
  ModuleService.registerModule(服务端模块, 客户端模块, 模块数据)
  ```

- **getModule**（获取模块）

  这个功能用来获取模块，通过获取模块我们就能够实现模块之间的互相调用，语法如下：

  ```ts
  // 注意！ 服务端只能获取服务端模块，客户端只能获取客户端模块
  ModuleService.getModule(模块名)
  ```

## 7.模块数据的获取

**在客户端模块获取数据**

```ts
export class MyModuleC extends ModuleC<MyModuleS, MyModuleData>{
    
    test() {
        // 在客户端模块，可以直接通过 this.data 来获取到绑定的模块数据
        this.data.myName
    }
}
```

**在服务端获取模块数据**

```ts
export class MyModuleS extends ModuleS<MyModuleC, MyModuleData>{

    // 普通方法，在服务端需要传入player来获取到对应玩家的数据
    test(player: Player) {
        this.getPlayerData(player).myName
    }

    // 网络方法，可由客户端进行调用
    net_ServerDoSomething() {
        console.log("调用者是：" + this.currentPlayer)

        // 当前调用者的数据
        this.currentData.myName
    }
}
```

## 8.补充资料

模块管理与数据中心：

> [1.为什么要使用模块管理](https://forum.ark.online/forum.php?mod=viewthread&tid=1264&extra=)
>
> [2.模块管理的使用步骤](https://forum.ark.online/forum.php?mod=viewthread&tid=1265&extra=)
>
> [3.模块管理的各功能介绍](https://forum.ark.online/forum.php?mod=viewthread&tid=1269)
>
> [4.为什么要使用数据中心](https://forum.ark.online/forum.php?mod=viewthread&tid=1276)
>
> [5.数据中心的使用步骤](https://forum.ark.online/forum.php?mod=viewthread&tid=1277)
>
> [6.数据中心的各功能介绍](https://forum.ark.online/forum.php?mod=viewthread&tid=1278)