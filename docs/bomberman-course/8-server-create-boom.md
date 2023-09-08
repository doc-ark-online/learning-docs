# 在服务端创建炸弹

::: tip 阅读本文大概需要 10 分钟

本节将会实现点击攻击按钮，释放一颗炸弹的功能。

:::

在前几章我们制作了控制 UI，并使用导出脚本功能，将所有 UI 导出了对应的脚本文件。之后我们使用脚本添加了跳跃按钮与攻击按钮的点事件响应，本章节我们要给攻击按钮事件加上对应的逻辑。

打开 `CtrlUI 脚本` ，我们来添加一个释放炸弹的函数，要实现如下功能：

1. 每秒只能释放一次炸弹，释放过后必须等待一秒才能再次释放，期间点击按钮不执行任何功能。
2. 点击按钮后，如果判断可以释放炸弹，就像服务端发送一条消息，通知服务器在玩家位置释放一个炸弹。

```typescript
import CtrlUI_Generate from "./ui-generate/CtrlUI_generate";

export default class CtrlUI extends CtrlUI_Generate {

	//释放炸弹 cd，主要用来计时并控制 1 秒内允许释放一个炸弹
	timer: number = 0;

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;

		this.mAttackBtn.onClicked.add(() => {
			this.onClickAttackBtn(); //[!code focus] //[!code ++]
		});

		this.mJumpBtn.onClicked.add(() => {
			Player.asyncGetLocalPlayer().then((player) => {
				// 让玩家进行跳跃
				player.character.jump();
			});
		});

	}

	/** //[!code focus] //[!code ++]
	 * 使用炸弹 //[!code focus] //[!code ++]
	 */ //[!code focus] //[!code ++]
	private onClickAttackBtn() { //[!code focus] //[!code ++]
		if (this.timer == 0) { //[!code focus] //[!code ++]
			//重置倒计时为 1000 //[!code focus] //[!code ++]
			this.timer = 1000; //[!code focus] //[!code ++]
			//通知服务器玩家释放了炸弹 //[!code focus] //[!code ++]
			Event.dispatchToServer("Event_Bomb"); //[!code focus] //[!code ++]
			//开始倒计时 //[!code focus] //[!code ++]
			setTimeout(() => { //[!code focus] //[!code ++]
				//倒计时到期后设置时间 //[!code focus] //[!code ++]
				this.timer = 0; //[!code focus] //[!code ++]
			}, this.timer); //[!code focus] //[!code ++]
		} //[!code focus] //[!code ++]
	} //[!code focus] //[!code ++]

}
```

上面这个脚本我们向服务器发送了一条消息 `Event_Bomb` ，服务端接收到之后在玩家位置实例化一个炸弹预制体。

:::tip 预制体实例化

将预制体在场景中生成出来的过程叫做预制体的实例化。

:::

打开之前编写的 `GameStart` 脚本，添加实例化炸弹预制体的方法：

```typescript
import CtrlUI from "./CtrlUI";
import HPbarUI from "./HPbarUI";

@Component
export default class GameStart extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        if (SystemUtil.isClient()) {
            UIService.show(CtrlUI);
            UIService.show(HPbarUI);
        }

        if (SystemUtil.isServer()) { //[!code focus] //[!code ++]
            // player 参数为发送这个事件来的客户端玩家 //[!code focus] //[!code ++]
            Event.addClientListener("Event_Bomb", (player: Player) => {//[!code focus] //[!code ++]
                // 下一行函数需要填入预制体 assetId ，请在工程内容中右键预制体 获取 工程内容ID//[!code focus] //[!code ++]
                const bombObj = GameObject.spawn("填入预制体 AssetId");//[!code focus] //[!code ++]
                // 将炸弹位置设置为玩家位置 //[!code focus] //[!code ++]
                bombObj.worldTransform.position = player.character.worldTransform.position;//[!code focus] //[!code ++]
            });//[!code focus] //[!code ++]
        }//[!code focus] //[!code ++]
    }
}
```

上述代码实现了服务端收到`Event_Bomb` 消息后在发送该消息的玩家的角色位置实例化一个炸弹预制体。

在使用 `GameObject.spawn` 函数时，我们需要传入预制体的 ID，可以通过在工程内容中右键预制体 --> 复制工程内容 ID 来获取。

![hIZR1eItOG](https://arkimg.ark.online/hIZR1eItOG.webp)

复制到 ID 后将它填写到上述代码第十九行，函数中。然后保存代码运行即可查看效果了。

<video controls src='https://arkimg.ark.online/2023-08-08_14-14-44.mp4'></video>
