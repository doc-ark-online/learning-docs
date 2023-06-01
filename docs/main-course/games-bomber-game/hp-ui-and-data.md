# 血量 UI 与数据

::: tip 阅读本文大概需要 10 分钟。

紧接着上一小节，接下来，我们通过代码来实现一个数据中心！

:::

## 1. 创建血量数据类

在多人游戏开发中，每名玩家客户端常常需要保存属于自己的数据，例如不同的玩家，拥有不同的金钱、血量、角色、移速、攻击、防御等等，那么为了方便管理这些数据，我们需要创建一个数据中心。首先，创建一个脚本，命名为“PlayerModuleData”，如图：

![](https://cdn.233xyx.com/1681133222060_328.png)

双击打开该脚本，编写代码如下：

```TypeScript
//对外使用数据操作类来获得玩家个人数据，一般几个玩家就有几个实例
export class PlayerModuleData {
    private hp: number = 100;
    //构造方法
    public constructor() {
    }

    //数据初始化
    protected initDefaultData(): void {
        //初始化血量
        this.hp = 100
    }

    //设置血量，这是我们封装的自定义方法
    public setHp(hp: number) {
        this.hp = hp
    }
    //获得血量，这是我们封装的自定义方法
    public getHp() {
        return this.hp
    }
    //减少血量，这是我们封装的自定义方法
    public subHp(hp: number) {
        this.hp -= hp
    }
}
```

## 2. 创建血条并刷新血量

双击“UIRoot”打开 UI 编辑器，我们这里创建一个进度条来用作我们的血量，如图：

![](https://cdn.233xyx.com/1681133222265_504.png)

为了脚本中更方便的使用进度条，这里修改进度条名称为“hpBar”，如图：

![](https://cdn.233xyx.com/1681133222110_278.png)

设置进度条的最小值为 0，最大值为 100，当前值为 100。代表我们的游戏中，玩家血量为 100，目前初始血量为满血，如图：

![](https://cdn.233xyx.com/1681133222367_535.png)

这时候可以看到，进度条上有一个方形的白块，就是我们的滑块，如图：

![](https://cdn.233xyx.com/1681133222011_556.png)

该项目中，进度条是用来用作血条的，并不需要滑块，这里我们可以将滑块设置不显示，在进度条属性中，将“滑动按钮图片”中的“绘制类型”设置为“无”即可，如图：

![](https://cdn.233xyx.com/1681133222208_225.png)

![](https://cdn.233xyx.com/1681133221963_922.png)

接下来保存 UI，导出所有脚本，如图：

![](https://cdn.233xyx.com/1681133222159_836.png)

修改脚本"RootUI"

```TypeScript
import { PlayerModuleData } from "../PlayerModule...";
import UIRoot_Generate from "../ui-generate/UIRoot_generate";
export class RootUI extends UIRoot_Generate {
    //释放炸弹 cd，主要用来计时并控制 1 秒内允许释放一个炸弹
    timer: number = 0
    //玩家数据
    private playerData: PlayerModuleData;
    /**
     * UI 创建时调用
     */
    public onStart() {
        this.playerData = new PlayerModuleData();
        this.hpBar.currentValue = this.playerData.getHp();

        this.jumpButton.onClicked.add(() => {
            Gameplay.getCurrentPlayer().character.jump();
        });

        this.bombButton.onClicked.add(() => {
            this.bomb();
        });
        //监听玩家受伤事件，该事件从预设体中的 BombControl 脚本中发出
        Events.addServerListener("Event_HpChange", () => {
            //获取 PlayerModuleData 玩家数据中心对象
            //修改数据中心的血量，每次受伤，这里我们减去 40 血量
            this.playerData.subHp(40)
            //获取当前血量
            let hp = this.playerData.getHp()
            //刷新血条显示
            this.hpBar.currentValue = hp
            //如果血量小于等于 0，死亡
            if (hp <= 0) {
                //死亡这里设置为布娃娃状态
                Gameplay.getCurrentPlayer().character.ragdollEnable = true;
            }
        })
    }

    /**
     * 释放炸弹
     */
    private bomb() {
        if (this.timer == 0) {
            //重置倒计时为 1000
            this.timer = 1000
            //通知玩家角色可以释放炸弹
            Events.dispatchToServer("Event_Bomb")
            //开始倒计时
            setTimeout(() => {
                //倒计时到期后设置时间
                this.timer = 0
            }, this.timer);
        }
    }
}
```

## 3.运行效果

编写完成后，保存脚本，运行游戏，可以看到，角色已经会受到爆炸伤害了，如图：

![](https://cdn.233xyx.com/1681133222315_445.gif)