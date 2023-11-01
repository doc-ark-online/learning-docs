# UI 使用

::: tip 阅读本文大概需要 15 分钟。

一个好的游戏UI，对游戏的整体体验、可玩性以及吸引力等方面都有着极大的影响。本章节我们一起来学习 UI 的创建、使用，以及常用的控件。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317934305&p=14&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 创建 UI 文件

在工程内容中选中 UI ，点击 **新建 UI** 按钮就可以创建出一个新的 UI 文件，这里我将它命名为 `TestUI` 。

![1341c291-2685-4137-8e33-2a8b1de99ced](https://arkimg.ark.online/1341c291-2685-4137-8e33-2a8b1de99ced.webp)

双击新创建好的 UI 就可以使用 UI 编辑器打开了：

![0f929ada-1b2f-4c8c-b2e0-3e03fe6bb95e](https://arkimg.ark.online/0f929ada-1b2f-4c8c-b2e0-3e03fe6bb95e.webp)

## 2. UI 控件

在 UI 编辑器中提供了许多控件，我们可以在左侧 控件窗口中，将需要用到的控件拖拽到设计器中。

![86d09635-12a1-445d-b6b7-7b8fb3fa7598](https://arkimg.ark.online/86d09635-12a1-445d-b6b7-7b8fb3fa7598.webp)

这里我拖入一个文本控件和一个按钮控件，然后在正中间的设计器窗口中就可以看到他们了，在设计器中可以可视化调节它们的位置。同样在 UI 编辑器中也有对象管理器，用来查看、修改 UI 控件的属性。

![52d30200-408d-4b77-8755-89f24119b6a2](https://arkimg.ark.online/52d30200-408d-4b77-8755-89f24119b6a2.webp)

右键控件选择重命名，将它们的名字修改为 **小写字母开头** ，这是为了在下一小节能够将按钮控件、文本控件导出。

![3f6bf2a2-e496-4bfb-9b54-4ba28b76e4fb](https://arkimg.ark.online/3f6bf2a2-e496-4bfb-9b54-4ba28b76e4fb.webp)

更多关于UI组件的介绍与使用请查阅：[UI 控件的基础属性 | 产品手册](https://docs.ark.online/UI/UIWidget-BaseProperties.html)

## 3. 使用代码控制 UI

在介绍空工程时，我介绍过直接将 UI 拖拽到场景上的使用方式，对于 UI 较少的简单项目来说这种方式比较方便。在实际开发中我们项目中的 UI 会越来越多，表现效果也会越来越复杂，这时我们就需要用一种更灵活的方式来管理了，接下来我将介绍如何使用代码控制 UI 。

### 3.1 导出 UI 脚本

在 UI 编辑器中制作好 UI 后，点击右上角 **导出所有脚本** 按钮即可将所有 UI 的对应 UI 脚本导出到项目中。

![e236b482-1f93-4e04-b4af-faec57687449](https://arkimg.ark.online/e236b482-1f93-4e04-b4af-faec57687449.webp)

导出成功后，在编辑器工程内容 --> 脚本 中就可以看到一个名为 `ui-generate` 的文件夹，这个文件夹中存放导出的所有 UI 脚本文件。

要注意的是，只有 **小写字母开头** 的控件才会被导出到脚本中。如果是一些不需要使用代码动态操作的组件比如 UI 的底图、用来布局的容器等控件，我们可以使用大写字母命名这样导出的代码更加简洁。

::: danger 导出 UI 脚本注意事项

因为每次导出都会将文件夹下所有脚本覆盖，所以请不要在这个文件夹下修改任何脚本，避免丢失逻辑。

:::

![60e20a9d-48c4-4ef0-86f1-71b8d552d67b](https://arkimg.ark.online/60e20a9d-48c4-4ef0-86f1-71b8d552d67b.webp)

### 3.2 使用代码显示  UI

在脚本中新建 `GameStart` 脚本，并将它挂载到场景上，这个脚本当作我们的游戏入口脚本用来初始化模块数据等，我们稍后就会用到它。

![305e649e-5e95-44f0-a672-5b961df0ad96](https://arkimg.ark.online/305e649e-5e95-44f0-a672-5b961df0ad96.webp)

接下来创建 `TestUI`  UI 脚本，这个 UI 脚本建议最好与要控制的 UI 改为相同名字，这样方便协同开发时做对应。

::: warning 脚本之间区别

点击 **新建脚本**  按钮，创建出的脚本文件继承自 Script 基类，通常将游戏主逻辑、控制场景上物体等函数写在这里。

点击 **新建 UI 脚本** 按钮，创建出的 UI 脚本文件继承自 UIScript 基类，通常将对 UI 控件进行操作的逻辑写在这里。

:::

![abe130ce-559f-47bd-a038-584a82cabac6](https://arkimg.ark.online/abe130ce-559f-47bd-a038-584a82cabac6.webp)

打开 `TestUI` 脚本，继承 UI 编辑器导出的基类 `TestUI_Generate` ，之后我们就可以在这个脚本中操作对应的 UI 控件了。

```typescript
import TestUI_Generate from "./ui-generate/TestUI_generate"; //[!code focus]
export default class TestUI extends TestUI_Generate { //[!code focus]
	// 构造UI文件成功后，在合适的时机最先初始化一次 
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
	}

     下列代码略... //[!code focus]
}
```

在脚本中获取指定控件可以用 `this.xxx (控件名) ` 来获取。要注意的是每次新增控件都需要重新导出所有脚本，如果发现控件没有被导出请检查控件名是否为小写字母开头。

接下来打开我们刚刚创建的 `GameStart` 脚本，先判断脚本当前是否在客户端运行因为 UI 目前只 **存在于客户端** 中，如果脚本在客户端运行就使用 `UIService.show` 函数就能显示出我们的 UI 了，这里要注意的是 `UIService.show` 函数传入的参数不是编辑器导出的类，而是我们自己创建的哪个脚本的类名。

```typescript
import TestUI from "./TestUI"; //[!code focus]
@Component
export default class GameStart extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //判断是否在客户端运行//[!code focus]
        if (SystemUtil.isClient()) {//[!code focus]
            //显示 TestUI //[!code focus]
            UIService.show(TestUI);//[!code focus]
        }
    }
}
```

运行起来，可以看到我们的 UI 已经被显示出来了：

![5d99c87b-273c-40de-afde-ac5628e6e07b](https://arkimg.ark.online/5d99c87b-273c-40de-afde-ac5628e6e07b.webp)

### 3.3 按钮控件使用

按钮控件，是我们在游戏中使用频率最高的控件之一。按钮组件可以在用户点击、按下、释放等时机抛出不同事件方便我们实现各类逻辑，下列代码演示了如何监听按钮的点击事件：

```typescript
import TestUI_Generate from "./ui-generate/TestUI_generate";
export default class TestUI extends TestUI_Generate {
    //构造UI文件成功后，在合适的时机最先初始化一次 
    protected onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        //点击按钮输出日志//[!code focus]
        this.myButton.onClicked.add(()=>{//[!code focus]
            console.log("按钮被点击"); //[!code focus]
        });	//[!code focus]
    }
}
```

<video controls="" src="https://arkimg.ark.online/ebL1hnapTO5QKs05.mp4"></video>

关于按钮控件更多使用方式请查阅:[UI 控件-按钮和文本按钮 | 产品手册](https://docs.ark.online/UI/UIComponent-Button.html)

### 3.4  文本控件使用

除按钮外，在游戏开发中使用频率最高的就是文本控件了，各类游戏中都会通过文字给玩家传达特定消息如：剧情、游戏倒记计时、对某些道具的说明等。这里我将实现一个计时器，用来演示文本控件显示文字的功能：

```typescript
import TestUI_Generate from "./ui-generate/TestUI_generate";
export default class TestUI extends TestUI_Generate {
    //构造UI文件成功后，在合适的时机最先初始化一次 
    protected onStart() {
        //设置能否每帧触发onUpdate 
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        // 当前已经过去多少秒 //[!code focus]
        let curTime = 0; //[!code focus]
        //每间隔 1000 毫秒触发一次函数 //[!code focus]
        setInterval(() => { //[!code focus]
            //将数字类型转换成文本类型并显示在文本组件上 //[!code focus]
            this.myTextBlock.text = curTime.toString(); //[!code focus]
            curTime++; //[!code focus]
        }, 1000); //[!code focus]
    }
}
```

<video controls="" src="https://arkimg.ark.online/uQpHnirIWMu2Tjak.mp4"></video>

关于文本控件更多使用方式请查阅:[UI 控件-文本 | 产品手册](https://docs.ark.online/UI/UIComponent-Text.html)

## 4. 世界 UI (3D UI)

上文我们只讲解了如何在屏幕上显示 UI，那我们我们想在场景中摆放一段文字该怎么办呢？，接下来我将会讲解世界 UI 对象，使用它我们就可以将 UI 摆放在场景中了。

在工程内容中，创建一个 UI 命名为 `WorldUI`，使用 UI 编辑器打开它。

接下来拖入一些你需要的控件。这里我拖入文本控件，并将它放在左上角。

![5b90664d-83a4-4334-ae9f-b70a6b29107f](https://arkimg.ark.online/5b90664d-83a4-4334-ae9f-b70a6b29107f.webp)

保存 UI 文件，返回编辑器中。

在资源库的游戏功能对象中拖动一个 **世界 UI** 对象到场景上，并修改它到合适位置。

![3f36dd9f-28e3-476e-a955-08368da83ccb](https://arkimg.ark.online/3f36dd9f-28e3-476e-a955-08368da83ccb.webp)

在对象管理器中选中它，在属性面板中找到 **绑定 UI 对象** 属性，将刚刚制作好的 `WorldUI` 从工程内容中拖拽上去。

![f863025e-4a4d-4715-aa0e-eb2a9e72464e](https://arkimg.ark.online/f863025e-4a4d-4715-aa0e-eb2a9e72464e.webp)

如视频，运行起来我们就可以看到 UI 显示在场景中了。当然这只是世界 UI 最简单的一种用法，想要了解更多用法请查阅：[世界 UI | 产品手册](https://docs.ark.online/GameplayObjects/WorldUI.html)

<video controls="" src="https://arkimg.ark.online/QHu0I1stb701BlbO.mp4"></video>
