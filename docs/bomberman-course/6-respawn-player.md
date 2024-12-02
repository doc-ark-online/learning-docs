# 玩家伤害与复活

::: tip 阅读本文大概需要 15 分钟

本节将会实现玩家受伤与复活的功能。

:::

本节的脚本，我们要实现如下功能：

1. 接收服务端传回来的被击中事件，并且给 UI 脚本抛出一个本地事件，让血条减少。
2. 判断当前玩家剩余的血量，如果血量小于等于零，就让玩家变成布娃娃，在三秒之后返回出生点。

首先在“工程内容”面板中，单击“脚本>新建脚本”来创建一个新的脚本并命名为`PlayerControl`，如图：

![image-20240307165334911](https://arkimg.ark.online/image-20240307165334911.webp)

同样将其拖拽到`Ground`物体上，如图：

![image-20240307165641015](https://arkimg.ark.online/image-20240307165641015.webp)

双击打开`PlayerControls`脚本，编写代码如下：

```typescript
@Component
export default class PlayerControl extends Script {

    // 默认玩家有 100 点血
    private _currentHP: number = 100;
    // 出生点位置
    private _spawn:Vector = new Vector(330, 780, 220);

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 监听服务器传递回来的被击中事件
        if (SystemUtil.isClient()) {
            Event.addServerListener("Event_HpChange", () => {
                this.onHurt();
            });
        }
    }

    /**
     * 被炸弹打中
     */
    private onHurt(): void {
        // 如果已经死了就不再执行下面逻辑
        if (this._currentHP <= 0) return;
        // 每次被打中就减 25 点血
        this._currentHP -= 25;
        // 如果血量小于等于 0 就触发死亡
        if (this._currentHP <= 0) {
            this.onDead();
        }
        // 通知 UI 当前血量
        Event.dispatchToLocal("Event_CurrentHp", this._currentHP);
    }

    /**
     * 玩家死亡
     */
    private onDead(): void {
        // 设置为布娃娃
        Player.localPlayer.character.ragdollEnabled = true;
        // 三秒后复活
        setTimeout(() => {
            this.onRespawn();
        }, 3000);
    }

    /**
     * 玩家复活
     */
    private onRespawn(): void {
        // 关闭布娃娃
        Player.localPlayer.character.ragdollEnabled = false;
        // 设置位置为出生点位置
        Player.localPlayer.character.worldTransform.position = this._spawn;
        // 重置血量
        this._currentHP = 100;
        // 通知 UI 当前血量
        Event.dispatchToLocal("Event_CurrentHp", this._currentHP);
    }
}
```

我们在受伤和复活功能的函数中，使用`Event.dispatchToLocal` 抛出了一个本地事件，用来通知 UI 脚本当前玩家的血量。接下来我们在血量 UI 脚本中处理这个事件：

双击打开 `GameUI` 脚本，接收事件并设置血条（进度条）长度，修改代码如下：

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
		//找到血条
		const hpBar = this.uiWidgetBase.findChildByPath("RootCanvas/mHPBar") as ProgressBar;
		//监听血量改变事件 
		Event.addLocalListener("Event_CurrentHp", (hpNum: number) => { 
			hpBar.currentValue = hpNum; 
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

运行游戏，可以看到，玩家已经可以受到伤害，并拥有自动复活的功能了，如图：

![动画2](https://arkimg.ark.online/%E5%8A%A8%E7%94%BB2.gif)
