# 特效

::: tip 阅读本文大概需要 5 分钟。

除了音效外，特效也是游戏的重要表现力之一，在游戏中添加合适的特效，可以为游戏增添更多体验感和沉浸感。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=948268924&bvid=BV1Qs4y1x7vi&cid=978207244&page=1" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1.  粒子特效

在编辑器中，为我们提供了十分丰富的成品特效，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnnfuvWuQI1bckb88DsVpwFf.png)

## 2. 使用特效

在“本地资源库”中选择一个喜欢的特效拖拽到场景中，效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnt7ArfhLQIPOjYV7QNWcmeb.gif)

选中该特效，在属性窗口中我们来看一下特效包含了哪些可设置属性，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnJB1QuTyF5iCtgQuViTpVIh.png)

常用特效属性如下：

循环：是否开启特效循环播放。

循环次数：开启循环时，循环的次数，0 为无限循环。

自动启用：勾选此选项，游戏运行后会自动播放该特效，默认不播放。

特效换色：给特效叠加一层颜色进行显示，这里展示一下换色效果：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGtkjDmTD0i4PYQAY3Vqcxf.gif)

## 3. 动态播放特效

除了直接拖拽使用特效，很多时候我们需要通过脚本态生成特效，动态生成特效也很简单，首先找到一个希望播放的特效，并右键单击特效，选择“复制资源 ID”，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnT6WAVbLaHsmtpR1u1aTVMe.png)

新建一个脚本，这里命名为“FXControl”，并将其挂载到对象列表，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcndcn9iE3QFLqM4zfEBCq07c.png)

双击脚本编写代码如下：

``` ts
@Core.Class
export default class FXControl extends Core.Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    async onStart() {
        //特效只有在客户端才能播放
        if(Util.SystemUtil.isClient()){
            //下载并加载 7786 资源
            await AssetUtil.asyncDownloadAsset("7786")
            AssetUtil.loadAsset("7786")
            //为了方便观看特效，这里使用 setTimeout 延迟 3 秒播放
            setTimeout(()=>{
                //创建 7786 资源并转成特效
                let effect = Core.GameObject.spawnGameObject("7786") as Gameplay.Particle
                //设置特效位置
                effect.setWorldLocation(new Type.Vector(0,0,0))
                //加载特效
                effect.ready().then(()=>{
                    //特效加载完成    
                    //播放特效
                    effect.play()
                })
            }, 3000)
        }
    }
}
```

运行游戏，可以看到效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntS0GvUU3RmjzKIiwBXNNvg.gif)

## 4. 预览特效效果

在具体特效资源的右上角，有一个 + 号按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景看效果的时间

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn6viST9RdrwBMFUbBVuD9qc.gif)