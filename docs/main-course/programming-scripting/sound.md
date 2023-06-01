# 音效

::: tip 阅读本文大概需要 7 分钟。

音效是一种很重要的内容表现手法，在音乐、影视与游戏中，音效可谓是无处不在。在一部优秀的游戏中，恰当适合的音效可以让游戏的场景与剧情更加生动，请一定要在游戏开发中，认真搭配游戏对应的音效。

:::

了解更多本节内容见产品文档：[音效](https://docs.ark.online/GameplayObjects/SoundEffect.html)

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=778363922&bvid=BV17y4y197Ee&cid=978207053&page=1" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 什么是音效

这里的音效包含：音乐和音效。音乐通常指时间比较长的声音，例如游戏在每个场景中都会循环播放的背景音乐；音效通常指瞬间的声音效果，例如脚步声、射击声、碰撞声等。口袋方舟 Editor 将音效分为 2D 音效（全局音效，类似现实中带着耳机跑步，听到的声音在哪里都一样）和 3D 音效（空间化，类似现实生活中跑步路过了广场舞团体，会有音乐声音大小变化）。

下列举几个音效场景便于理解：

- 界面音效

  - 用于界面操作的音效，界面音效贯穿整个游戏过程，比如菜单弹出收回、鼠标选定，物品拖动等等，可使用 2D 音效。
- npc 音效

  - 所有角色相关音效，比如脚步声、跑步声、死亡声、被攻击的叫声等等，可使用 3D 音效。
- 环境音效

  - 自然环境声，比如风声、湖水涟漪的轻声、瀑布声、鸟鸣等等，可使用 3D 音效。
- 技能音效

  - 主要指各种攻击声音、刀的舞动、矛的冲刺、踢、打、爆炸等音效，可使用 2D/3D 音效。
- 背景音效

  - 主要指游戏中不同场景，不同地图的音乐，比如不同地图搭配不同风格的音乐，回合制游戏中战斗场景中的战斗配乐等，可使用 2D 音效。

## 2. 音效属性

在“本地资源库”中找一个音效文件，拖拽到场景中，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn3qbXeO0Z0CpygabAfPASAS.png)

可以看到声音拖拽到场景中后，会生成两个球体边框，也就是默认音效为 3D 音效，其中小球体内部音量不会衰减，而小球体外到大球体之间的空间会产生衰减，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnqBbEAcJKtjMQWRBBg7k9rb.png)

接下来选中我们的声音对象，看一下包含了哪些可设置的属性，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnlomVQBowW1qfoxWY5JYuJn.png)

常用声音属性如下（上图中单击三角按钮可以预览音效播放）：

自动启用：是否默认播放

循环播放：该音效是否开启循环播放。

音效空间化：是否设置为 3D 音效。

音量内部半径：上图中小球体的半径，该半径内音量不会衰减，仅 3D 音效可用。

衰减距离：上图中小球体边缘到大球体的距离，该距离会产生音量衰减，仅 3D 音效可用。

音量比例：音量声音大小。

## 3. 播放音效

新建一个脚本，这里命名为“SoundControl”，并将其挂载到场景声音上，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnP5e5biYqLsGOXM03pULD9g.png)

右键导入的音效对象，并复制该对象的 guid，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnnPgmMyWRKgA0UIS1RMmx8f.png)

双击打开脚本编写代码如下：

```ts
@Core.Class
export default class SoundControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //音频只需要在客户端播放即可
        if(Util.SystemUtil.isClient()){
            //通过 guid 找到刚导入的音效对象，这里的 guid 换成自己导入音效的 guid
            let sound = Core.GameObject.find("B0982DA0473D2199CC966EB412429E17") as Gameplay.Sound
            //播放
            sound.play()
        }
    }
}
```

运行游戏，就可以听到声音按照上面的属性设置播放了起来！

## 4. 动态播放音效

有时候我们不想将声音拖到场景中再通过脚本播放，而是希望完全通过脚本播放声音，这时候我们可以通过脚本来先加载音效再进行播放，首先这里为了区分上面的播放方式，使用了新的游戏项目作为示例，首先找到想播放的音效，右键单击，在菜单中复制音效的 guid，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntyRF0TVsKoI9wFrjOfmyOb.png)

新建一个脚本，这里命名为“SoundControl”，并将其挂载到对象列表上，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnECrxU0NJCZc644WaZG6lag.png)

双击打开脚本编写代码如下：

```ts
@Core.Class
export default class SoundControl extends Core.Script {
    @Core.Property()
    preloadAssets: string = "118362"

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //音频只需要在客户端播放即可
        if(Util.SystemUtil.isClient()){
            //通过 guid 加载想播放的音效对象
            Core.GameObject.asyncSpawnGameObject("120840").then(object=>{
                //把加载好的物体转成音效类型
                let sound = object as Gameplay.Sound
                //开启循环
                sound.loop = true
                //播放
                sound.play()
            })
        }
    }
}
```

保存脚本，运行游戏，就可以听到声音按照上面的属性设置播放了起来！

## 5. 预览音效效果

在具体音效资源的右上角，有一个 + 号按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景听音效的时间

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnXKXIXwzoxi0O2lgruRGRDe.gif)