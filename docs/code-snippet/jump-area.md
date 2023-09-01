#  跳跃区

## 物体结构

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn0D7r80LhE6f4j5M8OQ9tSQ.png)

## 物体效果

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnW4DjLVOte6Ua65eUWSbePc.gif)

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
                //角色跳跃
                player.character.jump()
            }
        })
    }
}
```
