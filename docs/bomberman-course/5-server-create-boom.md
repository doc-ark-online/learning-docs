# 服务端创建炸弹

::: tip 阅读本文大概需要 10 分钟

本节将会实现点击攻击按钮，释放一颗炸弹的功能。

:::

在上个小节，我们制作了游戏UI，本小节我们就开始实现UI脚本的功能了，我们要实现的功能如下：

1. 查找按钮，并为按钮添加点击事件
2. 按钮事件中添加创建炸弹预制体的功能
3. 保证每次创建炸弹之间有1秒的CD时间，防止高频释放炸弹
4. 如果可以释放炸弹，就像服务器发送创建炸弹的事件

双击打开我们上个小节创建的`GameUI`脚本，编写代码如下：

```typescript
export default class GameUI extends UIScript {
	//释放炸弹 cd，主要用来计时并控制 1 秒内允许释放一个炸弹
	timer: number = 0;

	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		//通过路径找到攻击按钮
		const attackBtn = this.uiWidgetBase.findChildByPath("RootCanvas/mAttackButton") as Button;
		//为攻击按钮添加事件
		attackBtn.onPressed.add(() => {
			this.onClickAttackBtn();
		});
	}

	//使用炸弹 
	private onClickAttackBtn() { 
		if (this.timer == 0) { 
			//重置倒计时为 1000  设置1秒的释放炸弹CD 
			this.timer = 1000; 
			//通知服务器玩家释放了炸弹 
			Event.dispatchToServer("Event_Bomb");
			//开始倒计时 
			setTimeout(() => { 
				//倒计时到期后设置时间 
				this.timer = 0; 
			}, this.timer); 
		} 
	} 
}
```

上面这个脚本我们向服务器发送了一条消息 `Event_Bomb` ，服务端接收到之后在玩家位置实例化一个炸弹预制体。

:::tip 预制体实例化

将预制体在场景中生成出来的过程叫做预制体的实例化。

:::

创建一个新的脚本，命名为`GameStart`，如图：

![image-20240307155621352](https://arkimg.ark.online/image-20240307155621352.webp)

将该脚本拖拽到`Ground`物体上，如图：

![image-20240307160045255](https://arkimg.ark.online/image-20240307160045255.png)

找到我们的预制体，右键单击，选择`复制资源ID`选项，这样我们就复制了这个预制体的唯一ID。

双击打开 `GameStart` 脚本，添加实例化炸弹预制体的方法：

```typescript
@Component
export default class GameStart extends Script {

    protected onStart(): void {
        if (SystemUtil.isServer()) { 
            // player 参数为发送这个事件来的客户端玩家 
            Event.addClientListener("Event_Bomb", (player: Player) => {
                // 这里要将炸弹预制体实例化，参数部分要ctrl+v粘贴为自己在上一步复制的ID
                GameObject.asyncSpawn("38CE6E924B1414216F8BD4A3318CC283").then((obj: GameObject) => {
                    // 将炸弹位置设置为玩家中心位置，并向下偏移80 
                    obj.worldTransform.position = player.character.worldTransform.position.add(Vector.down.multiply(80));
                });
            });
        }
    }
}
```

运行游戏，就可以看到游戏效果了，如图：

![动画](https://arkimg.ark.online/%E5%8A%A8%E7%94%BB.gif)

