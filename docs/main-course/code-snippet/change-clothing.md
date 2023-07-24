# 换装区

## 物体结构

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn5qAiTixiQzQEcpk6OVt4xH.png)

## 物体效果

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnX0BECihuJ7knZ0UoVC9vEc.gif)

## 代码示例

```ts
@Component
export default class TriggerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {
        //服务端不做任何事
        if (SystemUtil.isServer()) {
            return;
        }

        //以下为客户端逻辑

        //获取当前脚本所挂载的触发器
        const trigger = this.gameObject as Trigger;
        //进入触发区域
        trigger.onEnter.add(() => {
            //角色加载捏人数据，捏人数据请看：https://learning.ark.online/main-course/programming-scripting/character-editor.html
            Player.localPlayer.character.setDescription("A96C75BB40732293D69B42AEA93F6011");
        });
    }
}
```
