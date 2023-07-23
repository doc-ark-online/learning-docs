# 变速区

## 物体结构

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn7aC6S8nr1ZgpCKFBqwmdTf.png)

## 物体效果

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn3hTcwS7akCI23BIFUIaUTg.gif)

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
                //角色变速
                player.character.maxWalkSpeed = 2000
            }
        })
        //离开触发区域
        trigger.onLeave.add((other: GameObject) => {
            if (other == player.character) {
                //角色速度恢复
                player.character.maxWalkSpeed = 450
            }
        })
    }
}
```
