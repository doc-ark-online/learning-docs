# 特效

::: tip 阅读本文大概需要 5 分钟。

特效是游戏的重要表现力之一，在游戏中添加合适的特效，可以为游戏增添更多体验感和沉浸感。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=948268924&bvid=BV1Qs4y1x7vi&cid=978207244&page=1" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1.  粒子特效

在编辑器中，为我们提供了十分丰富的成品特效，如图：

![image-20230602173357227](https://arkimg.ark.online/image-20230602173357227.webp)

## 2. 使用特效

在“本地资源库”中选择一个喜欢的特效拖拽到场景中，这里我们拿`27421`来举例，效果如图：

![image-20230602175700624](https://arkimg.ark.online/image-20230602175700624.webp)

点击该特效，等待下载完成后，拖拽到场景中。这个时候会发现，只有拖出来那一下播放了，然后就看不见了？

这个是因为我们特效的属性，默认只播放一次的原因。在对象管理器选中刚拖到场景里面的特效，属性面板里面往下翻一翻

* 找到“自动启用”，勾选上。代表游戏运行时会自动开始播放该特效
* 找到“循环”，勾选上。代表会循环播放该特效

![image-20230602185524094](https://arkimg.ark.online/image-20230602185524094.webp)

再看一下效果：

<video controls src="https://arkimg.ark.online/UE4_KSzCeypZnB.mp4"></video>



## 3. 给特效换色

有的时候我们为了搭配场景，使得表现更加自然，需要把特效的颜色进行更换。

换色的功能是基于现有特效进行一个颜色叠加，也会跟特效制作时的方式有关，所以并不适用于所有特效。

比如上面我们拖拽的特效也能换色，但是由于该特效本身效果和颜色比较特殊，叠加之后表现效果并不明显，所以我们这里演示另外一个特效来进行换色。

这里我们选择“自然特效”里面的火焰特效：

![image-20230602190807789](https://arkimg.ark.online/image-20230602190807789.webp)

可以看到这个特效播放，就是普通的火焰颜色：

![image-20230602190928346](https://arkimg.ark.online/image-20230602190928346.webp)

假设我们的场景是幽灵场景，需要的火焰颜色是冷色系的，那么我们需要调整一下特效换色的属性，如图所示：

![image-20230602191154001](https://arkimg.ark.online/image-20230602191154001.webp)

* 点击红色圆圈部分的小图标，会弹出来一个取色器，选择对应颜色后点击确认即可

![image-20230602191725960](https://arkimg.ark.online/image-20230602191725960.webp)

这里我们看到，火焰的颜色已经偏浅蓝色了。

## 4. 动态播放特效

除了直接拖拽使用特效，很多时候我们需要通过脚本态播放特效，代码播放特效也很简单，首先找到一个希望播放的特效，并右键单击特效，选择“复制资源 ID”，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnT6WAVbLaHsmtpR1u1aTVMe.png)

新建一个脚本，这里命名为“FXControl”，并将其挂载到对象列表，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcndcn9iE3QFLqM4zfEBCq07c.png)

双击打开脚本，我们在代码中，使用 `EffectService` 来播放特效，这个服务在客户端和服务端都可以调用，客户端调用是只会在当前客户端播放，如果在服务端播放就是给所有玩家播放该特效。这里演示我们只在当前客户端播放即可，编写代码如下：

``` ts
@Core.Class
export default class FXControl extends Core.Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        // 在客户端播放特效
        if (SystemUtil.isClient()) {
            // 下载并加载 7786 资源
            AssetUtil.asyncDownloadAsset("7786").then((result) => {
                if (!result) {
                    // 如果资源加载失败，就不播放特效了
                    return
                }
                // 为了方便观看特效，这里使用 setTimeout 延迟 3 秒播放
                setTimeout(() => {
                    // 播放特效//[!code focus]
                    EffectService.getInstance().playEffectAtLocation("7786", new Vector(0, 0, 0))//[!code focus]
                }, 3000)
            });
        }
    }
}
```

保存代码，返回编辑器运行游戏，可以看到效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntS0GvUU3RmjzKIiwBXNNvg.gif)

## 5. 预览特效效果

在具体特效资源的右上角，有一个 + 号按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景看效果的时间

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn6viST9RdrwBMFUbBVuD9qc.gif)