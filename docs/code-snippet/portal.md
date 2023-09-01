# 传送区

## 物体结构

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn5vGfmNBrdUYnbaSHbzklAb.png)

## 物体效果

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnLuy42wE1XMCmmUvuMinEEh.gif)

## 代码示例

```ts
@Component
export default class TriggerControl extends Script {
    //传送位置
    public position = new Vector(0, 0, 150)

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
                //2 秒后
                setTimeout(() => {
                    //将该角色传送到目标位置
                    player.character.worldTransform.position = this.position
                }, 2000);
            }
        })
    }
}
```
