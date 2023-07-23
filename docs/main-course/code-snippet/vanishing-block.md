# 消失地板

## 物体结构

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn4ZLJ2Ct6asVaHwaNrJPfPf.png)

## 物体效果

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnZtUj6kbqmT1k4Xks3Sl9Eb.gif)

## 代码示例

```ts
@Component
export default class TriggerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 服务端不做任何事
        if (SystemUtil.isServer()) {
            return
        }
        //以下为客户端逻辑
        //获取当前客户端玩家
        let player = await Player.asyncGetLocalPlayer()
        //获取当前脚本所挂载的触发器
        let trigger = this.gameObject as Trigger
        //进入触发区域
        trigger.onEnter.add((other: GameObject) => {
            if (other == player.character) {
                //2 秒后隐藏显示
                setTimeout(() => {
                    //隐藏方块
                    this.gameObject.parent.setVisibility(PropertyStatus.Off);
                    //关闭碰撞
                    (this.gameObject.parent as Model).setCollision(CollisionStatus.Off)
                    //3 秒后恢复显示
                    setTimeout(() => {
                        //显示方块
                        this.gameObject.parent.setVisibility(PropertyStatus.On);
                        //开启碰撞
                        (this.gameObject.parent as Model).setCollision(CollisionStatus.On)
                    }, 3000);
                }, 2000);
            }
        })

    }
}
```
