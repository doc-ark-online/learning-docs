# 创建 UI 并添加入口类

::: tip 阅读本文大概需要 10 分钟

本节将会导出所有 UI 脚本，并且创建游戏入口类来展示这些 UI

:::

前两个小节我们讲解了如何创建 UI 文件，接下来我们来讲讲如何使用代码控制这些 UI。

先随便打开一个 UI 文件，进入 UI 编辑器中，点击右上角"导出所有 UI"按钮。

![Carnac_ojIKwxjGn8](https://arkimg.ark.online/Carnac_ojIKwxjGn8.webp)

接下来切换回编辑器中，**在工程内容 --> 脚本 --> ui-generate** 中就可以看到所有 UI 导出的脚本了，之后对 UI 控件进行**删减、改名字、改父子级关系**后需要重新导出一次所有脚本。

![UE4_VMnN0QVbDH](https://arkimg.ark.online/UE4_VMnN0QVbDH.webp)

::: tip 关于导出脚本

每次导出脚本时都会将之前导出的文件覆盖，所以请不要在导出的脚本中编写任何逻辑。

:::

UI 脚本导出完毕之后，我们给每个 UI 文件分别创建一个对应的 UI 脚本，来对它们进行操作。

打开工程内容 --> 脚本，点击“**新建UI脚本**”，创建两个脚本分别命名为 `CtrlUI` 和 `HPbarUI` ，代表控制 UI 与 血条 UI。

![UE4_keKnWYpce1](https://arkimg.ark.online/UE4_keKnWYpce1.webp)

现在 UI 脚本已经创建好了，我们来创建一个游戏入口类在游戏启动时显示这些 UI。

先打开 `CtrlUI` 将它继承自刚刚导出的 `CtrlUI_generate` 类：

```typescript
import CtrlUI_Generate from "./ui-generate/CtrlUI_generate"; //[!code focus]

export default class CtrlUI extends CtrlUI_Generate { //[!code focus]
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
	}
}
```

刚刚我们在控制 UI 中添加了跳跃按钮和攻击按钮，接下来我们编写代码给它们加上点击事件：

```typescript
import CtrlUI_Generate from "./ui-generate/CtrlUI_generate";

export default class CtrlUI extends CtrlUI_Generate {
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;

		this.mAttackBtn.onClicked.add(() => {//[!code focus]
			//TODO 发送攻击事件//[!code focus]
			console.log("点击攻击按钮"); //[!code focus]
		});//[!code focus]

		this.mJumpBtn.onClicked.add(() => { //[!code focus]
			Player.asyncGetLocalPlayer().then((player) => { //[!code focus]
                  // 让玩家进行跳跃 //[!code focus]
				player.character.jump(); //[!code focus]
			}); //[!code focus]
		}); //[!code focus]
	}
}
```

攻击事件我们会在后序章节介绍，这里先输出一个日志，方便我们测试按钮是否正常运行。

在 UI 脚本中，我们需要使用 `Player.asyncGetLocalPlayer()` 函数来异步获取本机控制的玩家，在跳跃按钮按下的回调中让本机玩家跳跃。

接下来我们编写血条界面的脚本，打开 `HPbarUI` 让它继承 `HpUI_Generate` 类：

```typescript
import HpUI_Generate from "./ui-generate/HpUI_generate"; //[!code focus]

export default class HPbarUI extends HpUI_Generate { //[!code focus]

	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
	}
}
```



打开工程内容 --> 脚本，点击“**新建脚本**”，创建一个脚本命名为 `GameStart` ，这个脚本我们要直接将它挂载到对象管理器中，确保它在游戏启动后就自动运行。游戏中所有初始化我们都会在这个脚本中进行。

![UE4_ym8W6wTOYb](https://arkimg.ark.online/UE4_ym8W6wTOYb.webp)

双击打开  `GameStart` 脚本，替换为以下代码：

```typescript
import CtrlUI from "./CtrlUI";
import HPbarUI from "./HPbarUI";

@Component
export default class GameStart extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (SystemUtil.isClient()) { //[!code focus]
            UIService.show(CtrlUI); //[!code focus]
            UIService.show(HPbarUI); //[!code focus]
        } //[!code focus]
    }
}
```

`SystemUtil.isClient`  方法用来判断是否是在客户端执行，因为UI只存在于客户端，所以要加上这个判断。

`UIService.show` 方法用来打开一个指定的 UI 界面，这里我们传入刚刚创建好的两个 UI 脚本类，这样在游戏运行起来之后就会自动打开这两个 UI 了。

![UE4_oef7YWEIiN](https://arkimg.ark.online/UE4_oef7YWEIiN.jpg)