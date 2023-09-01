# 添加胜利区域

::: tip 阅读本文大概需要 7 分钟。

接着上一小节的失败逻辑，本小节我们实现当一个客户端玩家进入胜利区域后，执行胜利逻辑，其余玩家执行失败逻辑，完成整个小游戏。

:::

首先，我们再次拖拽一个触发器到场景中游戏胜利的位置，游戏中，哪个角色先进入该区域内，该玩家就获得胜利，其他还玩家会显示游戏失败，如图：

![](https://cdn.233xyx.com/1681134305571_631.PNG)

接下来按之前的方法创建一个新的脚本，命名为“FinishControl”，该脚本中编写代码处理人物走到胜利区域的事件，创建完成后，将该脚本挂载到刚创建的方形触发器中，并为触发器改名，方便我们查看，如图：

![](https://cdn.233xyx.com/1681134305471_987.PNG)

这里我们在“本地资源库”面板中，找一个角色动画，当玩家角色胜利的时候，我们就让角色播放这个动画，这里我们使用“14737”的舞蹈动画，接下来我们开始编写“FinishControl”脚本代码如下：

```ts
@Core.Class
export default class FinishControl extends Core.Script{
    onStart(){
        //服务端处理游戏逻辑
        if(Util.SystemUtil.isServer()){
            //获取挂载的游戏物体，并转为触发器类型
            let trigger = this.gameObject as Gameplay.Trigger
            //绑定一个有物体进入触发器范围会调用的事件，这里绑定的 OnEnter 事件
            trigger.onEnter.add(this.OnEnter.bind(this))
        }
    }

    //当有游戏物体进入触发区域，会调用该方法，并把自身当参数传进来
    OnEnter(other: Core.GameObject){
        //判断进入触发区域的游戏物体是不是一个游戏角色类型
        if(other instanceof Gameplay.Character){
            //这里判断为真，然后将该物体转成游戏角色类型
            let character = other as Gameplay.Character
            //给胜利者的玩家客户端发送 success 消息
            Events.dispatchToClient(character.player, "success")
            //遍历所有的游戏玩家
            Gameplay.getAllPlayers().forEach(player=>{
                //如果遍历的玩家不是胜利的玩家
                if(character.player != player){
                    //就给该玩家发送 fail 消息，告诉该玩家游戏失败
                    Events.dispatchToClient(player, "fail")
                }
            })
        }
    }
}
```

上面的代码中我们做了判断，系统会给第一个进入胜利区域的玩家发送 success 消息，然后给其余玩家发送 fail 消息，那么我们接下来在“PlayerControl”脚本中接收这两个消息，并实现对应功能，完整的“PlayerControl”脚本代码如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {
    //预加载，将需要加载的资源编号写到该字符串中，多个资源用逗号隔开
    //这里预加载一个 13937 资源，就是咱们刚才找到的音效资源
    @Core.Property()
    preloadAssets: string = "13937"
     //声明一个玩家对象
     player: Gameplay.Player

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {
        //音乐只需要客户端播放
        if(Util.SystemUtil.isClient()){
             //播放背景音乐
            //这里就是加载 13937 资源并转成音效类
            let voice = Core.GameObject.spawnGameObject("13937") as Gameplay.Sound
            //开启播放循环
            voice.loop = true
            //播放音乐
            voice.play()

            //下载并加载 4399 特效资源
            await AssetUtil.asyncDownloadAsset("4399")
            AssetUtil.loadAsset("4399")
            //获取当前客户端对应的玩家对象
            this.player = await Gameplay.asyncGetCurrentPlayer()
            //这里就是加载 4399 资源并转成特效类
            let eff = await Core.GameObject.asyncSpawnGameObject("4399") as Gameplay.Particle
            //开启循环播放
            eff.loop = true
            //将特效附着在当前的玩家角色身上，之后特效就会跟随玩家移动
            eff.attachToGameObject(this.player.character)
            //将特效相对位置清零，保证特效放在玩家角色中心
            eff.setRelativeLocation(Type.Vector.zero)
            //播放特效
            await eff.ready()
            eff.play()

            //下载并加载 14737 特效资源
            await AssetUtil.asyncDownloadAsset("14737")
            AssetUtil.loadAsset("14737")
            //接收胜利事件
            Events.addServerListener("success",this.success.bind(this))
            //接收失败事件
            Events.addServerListener("fail", this.fail.bind(this))
        }
    }
    
    //胜利事件方法
    success(){
        //修改玩家名称为成功
        this.player.character.characterName ="成功"
        //摆出胜利姿势
        this.player.character.playAnimation("14737")
        //禁止玩家移动
        this.player.character.moveEnable = false
        //禁止玩家跳跃
        this.player.character.jumpEnable = false
    }

    //失败事件方法
    fail(){
        //修改玩家名称为失败
        this.player.character.characterName ="失败"
        //失败开启布娃娃
        this.player.character.ragdollEnable = true
    }
}
```

在编辑器主界面，单击“运行设置”按钮设置玩家为 2 个或多个，开启多人测试模式，如图：

![](https://cdn.233xyx.com/1681134305730_918.PNG)

再次运行游戏，会弹出两个客户端测试，我们操作一个玩家先到终点，即可获得胜利，另外一个玩家就会显示失败，游戏就可以正常游玩了，一号操作的客户端效果如图：

![](https://cdn.233xyx.com/1681134305622_396.PNG)

二号未操作的客户端视角效果如图：

![](https://cdn.233xyx.com/1681134305679_542.gif)

游戏制作完成！如果你也成功运行起来，那么接下来为自己鼓个掌，进入下个章节的学习吧！