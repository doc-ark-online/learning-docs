# 播放游戏音乐

::: tip 阅读本文大概需要 5 分钟。

作为全局背景音乐，功能比较独立，使用起来也非常简单，我们就先来为我们的游戏添加上优美动听的背景音乐！

:::

## 1.新建游戏脚本

在编辑器主界面的下方区域，单击列表中的“脚本”选项，然后单击“新建脚本”按钮，创建出新的脚本，并命名为“PlayerControl”，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnpGlSkVV5wcFzyxPaqBj7ag.png)

双击“PlayerControl”文件，会使用 VSCode 打开该脚本，就可以开始进行脚本编写了，每个新工程第一次打开脚本时，可能会有如下图提示，点“是，我信任此作者”按钮即可，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn32N3VY4o4R25d0ZgndGAjd.png)

编写“PlayerControl”脚本代码如下，该部分代码为游戏脚本默认代码，注意，“//”开头的行数为注释，编写时可以忽略注释行。

```ts
//TS 装饰器
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {

    }

}
```

将“PlayerControl”脚本拖拽到游戏对象窗口中，只有添加到游戏对象窗口中的脚本才会生效并执行脚本中的 OnStart 方法，如图。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnSlinogvEzZU2I4F57bBVCe.png)

## 2.预加载游戏音乐

在“本地资源库”面板中，找到一个自己喜欢的音乐文件，并单击选中该文件，这里我们示例中使用 GUID 编号为 13937 的音乐（每个资源都有自己的独有的 GUID 编号，相当于资源的身份证号），在搜索栏输入“13937”，即可找到该文件，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnFmVg3E8MUgI0SKMV09GWGd.png)

选中希望导入的音频文件后，在弹出面板中看到该文件的 GUID 等信息，还可以进行试听等操作，这里如果试听满意，那么我们就记录下来这个资源的 GUID 编号，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnV2CatlHcxRuUz5F4vMZxbh.png)

在“PlayerControl”脚本中编写预加载代码，资源必须预加载后才能使用，预加载代码如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {
    //预加载，将需要加载的资源编号写到该字符串中，多个资源用逗号隔开
    //这里预加载一个 13937 资源，就是咱们刚才找到的音效资源
    @Core.Property()
    preloadAssets: string = "13937"

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {

    }

}
```

写完上述代码后按下“Ctrl+S”保存当前脚本代码，然后我们回到编辑器界面，单击编译按钮，然后单击我们挂载到游戏对象中的“PlayerControl”脚本，可以看到在详情界面中也出现了一个预加载输入框，以后如果想修改预加载的内容直接在这里修改即可，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnqHQ9OS2GaozRa2Gi0HcNyf.png)

除了这种预加载方式外，也可以把需要预加载的资源拖拽到“优先加载”中，这种方式可以让音乐在游戏开始前优先加载，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnManTLKQOjDdkOomx23ffud.png)

## 3.播放背景音乐

修改“PlayerControl”脚本的代码，添加播放背景音乐功能，如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {
    //预加载，将需要加载的资源编号写到该字符串中，多个资源用逗号隔开
    //这里预加载一个 13937 资源，就是咱们刚才找到的音效资源
    @Core.Property()
    preloadAssets: string = "13937"

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {
        //音乐只需要客户端播放
        if(Util.SystemUtil.isClient()){
             //播放背景音乐
            //这里就是加载 13937 资源并转成音效类
            let voice = await Core.GameObject.asyncSpawn({ "guid": "13937" }) as Gameplay.Sound
            //开启播放循环
            voice.loop = true
            //播放音乐
            voice.play()
        }
    }
}
```

代码编写完成，按下“Ctrl+S”保存脚本后，回到编辑器界面，单击“运行”按钮，等待进入游戏画面，即可听到背景音乐响了起来，按下“esc”按键即可退出游戏，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnEPwaCWzWosX5D1zkq0J3Mc.png)