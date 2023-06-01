# 添加角色特效

::: tip 阅读本文大概需要 5 分钟。

制作游戏过程中，无论是技能、烟花、火焰、刀光、拖尾等特效，编辑器都提供了成品可用的特效资源，接下来我们就来为我们的角色添加一个跟随特效！同时推荐大家一定要使用 [角色编辑器](https://learning.ark.online/md/3.9.html) 来打造一个属于自己的角色哦！

:::

## 1.添加喜欢的特效

首先，在编辑器的本地资源库界面，找寻自己喜欢的特效，示例中使用 4399 资源，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn7sjbh2X2cHUnokdqbqpDJf.png)

打开“PlayerControl”脚本，脚本中我们首先创建一个特效，然后为将特效附着到玩家角色身上，具体编写代码如下：

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
            let voice = await Core.GameObject.asyncSpawnGameObject("13937") as Gameplay.Sound
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
        }
    }
}
```
::: warning 注意 

AssetUtil.asyncDownloadAsset 方法下载资源与预加载资源效果是一样的，但是有一些小区别：下载一开始资源没有在内存里，而预加载一开始资源就被加载到了游戏内存中

:::

代码编写完成后，“Ctrl+S”保存当前脚本，运行游戏，鼠标在游戏屏幕左侧点击拖拽可以模拟移动设备使用虚拟摇杆移动，或者使用键盘 WASD 移动与空格跳跃，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhbtoYMfIOjLtLL7tjjTXvf.gif)