# 特效区

## 物体结构

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnNeVBGdzrTTs3jlLwnkKush.png)

## 物体效果

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnRqi4JJHPDS5Grvi7yunV1c.gif)

## 代码示例

```ts
@Component
export default class TriggerControl extends Script {
    effect: Effect

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 服务端不做任何事
        if (SystemUtil.isServer()) {
            return
        }
        //以下为客户端逻辑
        //下载并加载 4399 特效资源
        AssetUtil.asyncDownloadAsset("4399")
        //获取当前客户端玩家
        let player = await Player.asyncGetLocalPlayer()
        //获取当前脚本所挂载的触发器
        let trigger = this.gameObject as Trigger
        //进入触发区域
        trigger.onEnter.add(async (other: GameObject) => {
            if (other == player.character) {
                //创建特效
                this.effect = await GameObject.asyncSpawn("4399") as Effect
                //特效附着在角色根节点上
                player.character.attachToSlot(this.effect, HumanoidSlotType.BackOrnamental)
                //相对角色的偏移位置为 0,0,0
                this.effect.localTransform.position = new Vector(0, 0, 0)
                //准备特效
                this.effect.asyncReady().then(() => {
                    //准备完成，播放特效
                    this.effect.play()
                })
            }
        })
        //离开触发区域
        trigger.onLeave.add((other: GameObject) => {
            if (other == player.character) {
                //解除附着
                player.character.detachFromSlot(this.effect)
                //销毁特效
                this.effect.destroy()
            }
        })
    }
}
```
