# 特效

::: tip 阅读本文大概需要 5 分钟。

特效是游戏的重要表现力之一，在游戏中添加合适的特效，可以为游戏增添更多体验感和沉浸感。

:::

了解更多关于本章节内容见产品手册：[特效 | 产品手册 (ark.online)](https://docs.ark.online/GameplayObjects/Effects.html)

## 1.  粒子特效

在编辑器中，为我们提供了十分丰富的成品特效，如图：

![](https://arkimg.ark.online/20230913-173851.webp)

## 2. 使用特效

在“本地资源库”中选择一个喜欢的特效拖拽到场景中，这里我们拿`27421`来举例，效果如图：

![image-20230602175700624](https://arkimg.ark.online/image-20230602175700624.webp)

点击该特效，等待下载完成后，拖拽到场景中。这个时候会发现，只有拖出来那一下播放了，然后就看不见了？

这个是因为我们特效的属性，默认只播放一次的原因。在对象管理器选中刚拖到场景里面的特效，属性面板里面往下翻一翻。

* 找到“启用”，勾选上。代表游戏运行时会自动开始播放该特效。
* 找到“循环”单选框，将它勾选上。代表会循环播放该特效。

![%rf140](https://arkimg.ark.online/%rf140.webp)

再看一下效果：

<video controls src="https://arkimg.ark.online/UE4_KSzCeypZnB.mp4"></video>



## 3. 给特效换色

有的时候我们为了搭配场景，使得表现更加自然，需要把特效的颜色进行更换。

换色的功能是基于现有特效进行一个颜色叠加，也会跟特效制作时的方式有关，所以并不适用于所有特效。

比如上面我们拖拽的特效也能换色，但是由于该特效本身效果和颜色比较特殊，叠加之后表现效果并不明显，所以我们这里演示另外一个特效来进行换色。

这里我们选择“自然特效”里面的火焰特效：

![HfBmp6PXzL41694600354](https://arkimg.ark.online/HfBmp6PXzL41694600354.webp)

可以看到这个特效播放，就是普通的火焰颜色：

![g8DPe2GmhEf1694599354](https://arkimg.ark.online/g8DPe2GmhEf1694599354.webp)

假设我们的场景是幽灵场景，需要的火焰颜色是冷色系的，那么我们需要调整一下特效换色的属性，如图所示：

![image-20230602191154001](https://arkimg.ark.online/image-20230602191154001.webp)

* 点击红色圆圈部分的小图标，会弹出来一个取色器，选择对应颜色后点击确认即可。

![gn1uv9mY5e41694599443](https://arkimg.ark.online/gn1uv9mY5e41694599443.webp)

这里我们可以看到，火焰的颜色已经改为浅蓝色了。

## 4. 动态播放特效

除了直接拖拽使用特效，很多时候我们需要通过脚本来播放特效，代码播放特效也很简单，首先找到一个希望播放的特效，并右键单击特效，选择“复制资源 ID”，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnT6WAVbLaHsmtpR1u1aTVMe.png)

新建一个脚本，命名为 `FXControl`，之后将其挂载到对象列表中，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcndcn9iE3QFLqM4zfEBCq07c.png)

双击打开脚本，我们在代码中，使用 `EffectService` 来播放特效，这个服务在客户端和服务端都可以调用，客户端调用是只会在当前客户端播放，如果在服务端播放就是给所有玩家播放该特效。这里演示我们只在当前客户端播放即可，编写代码如下：

``` typescript
@Component
export default class FXControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        // 在客户端播放特效
        if (SystemUtil.isClient()) {
            // 下载并加载 7786 资源
            AssetUtil.asyncDownloadAsset("7786").then((result) => {
                if (!result) {
                    // 如果资源加载失败，就不播放特效了
                    return;
                }
                // 为了方便观看特效，这里使用 setTimeout 延迟 3 秒播放
                setTimeout(() => {
                    // 播放特效
                    EffectService.playAtPosition("7786", new Vector(0, 0, 0));
                }, 3000);
            });
        }
    }
}
```

保存代码，返回编辑器运行游戏，可以看到效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntS0GvUU3RmjzKIiwBXNNvg.gif)

想要在代码中更改特效的颜色怎么操作呢？

我们发现 `EffectService` 中并没有能更改特效颜色的函数，因为 `EffectService` 只是为了方便特效播放封装的简易服务。想要进行更细节的特效控制，就还需要获取到特效对象来进行操作，代码如下：

```typescript
@Component
export default class FXControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        // 在客户端播放特效
        if (SystemUtil.isClient()) {
            // 异步创建特效资源
            GameObject.asyncSpawn("169403").then((go) => {
                // 获取到特效，转换成特效对象
                const effect = go as Effect;
                // 设置特效位置
                effect.worldTransform.position = new Vector(0, 0, 0);
                // 设置特效的颜色，第一个参数是参数名称，第二个参数是颜色值
                effect.setColor("Color", LinearColor.colorHexToLinearColor("#68FF6A"));
                // 播放特效
                effect.play();
            });
        }
    }
}
```

这个参数名是怎么来的呢？我们回到编辑器，把对应特效拖拽到场景中，然后选中该特效后看看属性面板：

![image-20230606143901320](https://arkimg.ark.online/image-20230606143901320.png)

在特效参数控制这里，可以看到支持哪些参数，字符串填写对应值即可。

::: tip

如果特效属性面板没有对应的“特效参数控制”，那么就需要使用 `effect.color = LinearColor.colorHexToLinearColor("#68FF6A")`的方式来进行特效换色了，其他代码都没有任何区别。

:::

## 5. 预览特效效果

资源库中，每个特效资源的右上角都有一个 + 号按钮，点击后会弹出一个预览窗口，这时在编辑器中就可以预览特效了。该功能为我们省去了将特效拖入场景看效果的时间。

<video controls src="https://arkimg.ark.online/7615132843496.mp4"> </video>

更多信息参考：[产品手册-特效](https://docs.ark.online/GameplayObjects/Effects.html)