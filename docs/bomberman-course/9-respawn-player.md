# 玩家复活功能

::: tip 阅读本文大概需要 15 分钟

本节将会实现玩家死亡与复活的功能。

:::

本节的脚本，我们要实现如下功能：

1. 接收服务端传回来的被击中事件，并且给 UI 脚本抛出一个本地事件，让血条减少。
2. 判断当前玩家剩余的血量，如果血量小于等于零，就让玩家变成布娃娃，在三秒之后返回出生点。

首先创建`PlayerControls`脚本，这个脚本用来处理与玩家角色相关的逻辑：

![UE4-Win64-Debug_fDXeO9ptx2](https://arkimg.ark.online/UE4-Win64-Debug_fDXeO9ptx2.webp)

双击打开`PlayerControls`脚本，填入下列代码：

```typescript
@Component
export default class PlayerControls extends Script {

    // 默认玩家有 100 点血
    private _currentHP: number = 100;
    // 出生点位置
    private _spawn:Vector = new Vector(1812, 1000, 240);

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

修改 `HPbarUI` 脚本，接收事件并设置血条（进度条）长度，为了让血条可以与我们血量数值对应上，我们需要先将它的最大值设置为与玩家最大血量相同。

```typescript
import HpUI_Generate from "./ui-generate/HpUI_generate";

export default class HPbarUI extends HpUI_Generate {
	protected onStart() {
		// 设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		// 初始化血条 设置最大值为 100 与血量相同 //[!code focus] //[!code ++]
		this.mHPbar.sliderMaxValue = 100; //[!code focus] //[!code ++]
		// 设置当前数值为 100 表示满血 //[!code focus] //[!code ++]
		this.mHPbar.currentValue = 100; //[!code focus] //[!code ++]
         // 监听血量改变事件 //[!code focus] //[!code ++] 
		Event.addLocalListener("Event_CurrentHp", (hpNum: number) => { //[!code focus] //[!code ++]
			this.mHPbar.currentValue = hpNum; //[!code focus] //[!code ++]
		}); //[!code focus] //[!code ++]
	}
}
```
