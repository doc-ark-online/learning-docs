# 脚本执行逻辑

::: tip 阅读本文大概需要 5 分钟。

当创建了一个游戏脚本后，首先要了解游戏脚本的生命周期方法执行顺序，之后才会在编写功能代码的时候正确写在对应的生命周期方法中。

:::

更多脚本生命周期见产品文档：[脚本的生命周期](https://docs.ark.online/Scripting/ScriptLifeCycle.html)

## 1. 创建并挂载脚本

在编辑器主界面的下方区域，单击列表中的 “脚本” 选项，然后单击 “新建脚本” 按钮，就可以创建出新的脚本，如图：

![image-20230528091113880](https://arkimg.ark.online/image-20230528091113880.webp)

* 点击 “新建脚本” 后，会新增一个脚本文件，同时处于可改名状态，此时输入文件名如 "PlayerControl" ，按下回车即可确定命名

![image-20230528091322735](https://arkimg.ark.online/image-20230528091322735.webp)

::: warning 注意

如果没有通过 “新建脚本” 按钮来创建脚本，是手动在文件夹或者 VSCode 里面创建的脚本，需要将 class 设置默认导出才会执行 onStart，也就是在 class 关键词前加 `export default` 

:::


如果需要重命名等操作，可以右键单击该脚本 (或者选中脚本后按 F2 键) 进行操作，如图：

![image-20230528090723000](https://arkimg.ark.online/image-20230528090723000.webp)

脚本创建完成后，怎么使用呢？那就需要挂载到游戏对象列表中了，比如这里示例中将脚本拖拽并挂载到了对象列表中，只有挂载到游戏对象窗口中的脚本才会生效并执行脚本中的 onStart 等生命周期方法。

![image-20230528092544231](https://arkimg.ark.online/image-20230528092544231.webp)

* 如图所示，将 "PlayerControl" 脚本拖拽到对象管理器的 "对象" 下面放开，就完成了脚本的 “挂载” 操作，此时可以在对象管理器中看到该脚本的引用，如③所示。

## 2. 脚本基础结构
双击打开脚本，若刚才文件名是 "PlayerContorl" ，那么现在脚本内容应该如下所示：

> 默认会使用 VSCode 打开该脚本，如果不是使用 VSCode 打开的，可以参考论坛的常见问题：[安装和运行常见问题](https://forum.ark.online/forum.php?mod=viewthread&tid=1207)

```typescript
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```
---

基础结构如下：

```typescript
@Component
export default class PlayerControl extends Script {

}
```

* `@Component` ，@expression 这种形式在 TypeScript 为 “装饰器”，`@Component` 这个装饰器是用来告诉我们游戏引擎该脚本的一些基本信息，方便游戏引擎获取到该类信息之后做一些处理，比如自动调用类里面的生命周期函数等
* `export default` 是 ts 语法，可以让该类在其他地方被调用（手动创建的类，需要自己手动添加该语句）
* `class PlayerControl` 定义了类名为 `PlayerControl` ，这个类名需要与文件名保持一致
* `extends Script` ，使 `PlayerControl` 这个类继承自 `Script` ， `Script` 是编辑器定义的基础类，需要挂载到场景中使用的脚本，都需要继承自该类才可正常使用。

在上小节，我们把脚本挂载到了游戏对象窗口中，但是该脚本并不一定会成功执行，成功执行该游戏脚本必须有以下几个要求：

1. 首先该脚本中一定包含一个类，并且类名与文件名相同，示例中为 “PlayerControl”。
2. 该类前要加 export default，设置为默认导出类。
3. 该类要添加一个 `@Component` 装饰器
4. 该类继承自 Script。

## 3. 脚本常用生命周期

生命周期代表着一个脚本从激活（Activate）到销毁（Destroy）的全过程，也代表着代码中脚本函数的执行过程与执行顺序，脚本常用的三个生命周期方法分别为 onStart、onUpdate、onDestroy ，如下所示：

```typescript
@Component
export default class PlayerControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */ //[!code focus]
    protected onStart(): void { } //[!code focus]

    /** //[!code focus]
     * 周期函数 每帧执行 //[!code focus]
     * 此函数执行需要将 this.useUpdate 赋值为 true //[!code focus]
     * @param dt 当前帧与上一帧的延迟 / 秒 //[!code focus]
     */   //[!code focus]
    protected onUpdate(dt: number): void { }//[!code focus]

    /** 脚本被销毁时最后一帧执行完调用此函数 */   //[!code focus]
    protected onDestroy(): void { } //[!code focus]
}
```
* 如代码中注释所说，三个生命周期函数会在不同的阶段调用
* `onStart` 函数是脚本第一个执行的函数，一般在里面处理一些初始化的逻辑，如事件监听、设置 useUpdate 为 true、获取数据等等
* `onUpdate` 函数在游戏运行过程中会不断的执行，每一帧执行一次。不过默认该函数是不会执行的，需要将 useUpdate 属性设置为 true 才会执行，比如在 onStart 函数中添加代码：`this.useUpdate = true;` 
* `onDestroy` 函数是脚本快销毁的时候执行，一般在函数中处理一些资源回收的逻辑。

::: danger 注意

因为 onUpdate 执行频率非常高，一旦出现有耗时逻辑或者容易报错的逻辑，将会导致很严重的游戏性能问题，所以需要注意以下几点：

1）尽量减少在 onUpdate 函数中写循环逻辑，避免死循环或循环内出现空引用阻塞程序执行

2）在 onUpdate 函数执行的逻辑中，引用的对象尽量都做判空处理，提高定位逻辑问题效率，同时避免空引用阻塞程序执行

3）若不是必须使用 onUpdate 的场景，尽量使用其他函数代替（例：计时器可用 setInterval，延时可用 setTimeout）

:::
