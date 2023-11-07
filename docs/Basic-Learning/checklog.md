# 调试输出与日志查看

:::tip **阅读本文大概需要 3 分钟**

在游戏开发中，查看运行日志非常重要。运行日志记录了游戏运行时发生的事件和错误信息，例如程序崩溃、异常行为、性能问题等。通过查看运行日志，开发者可以快速了解游戏的运行情况，并发现潜在的问题。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317930916&p=10&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 使用代码输出日志

首先，在脚本中，怎么输出一个日志呢？其实非常简单，使用 `console.log()` 函数即可，输出示例如下：

```typescript
@Component
export default class PlayerControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        console.log("这条消息客户端和服务端都会输出");	
        if(SystemUtil.isServer()){
            console.log("这条消息服务端会输出");	
        }
        if(SystemUtil.isClient()){
            console.log("这条消息客户端会输出");	
        }
    }
}
```

那么脚本编写完成，并运行游戏后，输出的日志在哪里查看呢？在编辑器窗口下方就可以看到日志窗口，在日志窗口中就可以看到客户端和服务端的输出内容，如图：

![image-20230528145139561](https://arkimg.ark.online/image-20230528145139561.webp)

## 2. 项目输出的日志文件

在编辑器调试游戏时，日志会动态输出到主视口下方的显示框中，同时也会保存一份到硬盘中。我们可以在对应的日志输出窗口中右键选中 "打开日志目录" ，来找到硬盘中的日志文件。

![dHzaTQcIQK](https://arkimg.ark.online/dHzaTQcIQK.webp)

在打开的目录中，默认会有三个 `log` 格式的文本文件，我们可以使用任意文本编辑器打开它，这里我推荐使用 VSCode。默认文件的意义分别为：

① 客户端 1 日志，客户端可以有多个这里使用 Client + 编号来区分。

② 客户端 2 日志。

③ 服务端日志，服务端只有一个所以没有编号。

![explorer_Jcep7NrSA0](https://arkimg.ark.online/explorer_Jcep7NrSA0.webp)

## 3. 线上服务端日志

游戏发布到线上后，我们可以在创作者后台查看实时日志，来定位服务端问题。

① 选中游戏服务，在下拉列表中选中房间管理。

② 在所有线上房间中选中某个房间，点击查看按钮。

![msedge_bQcHpQAOef](https://arkimg.ark.online/msedge_bQcHpQAOef.webp)

③ 选择想要查看的房间状态、时间区间等。

④ 点击实时日志

![msedge_rrmLu5Bx9k](https://arkimg.ark.online/msedge_rrmLu5Bx9k.webp)

在弹出的窗口中就可以看到该房间服务端实时日志了。

![msedge_zLdjHktiUj](https://arkimg.ark.online/msedge_zLdjHktiUj.webp)

::: tip

1. 只有运行中的房间可以查看实时日志 日志在打开窗口后 从服务端推送过来 没有历史日志
2. 当超过**1 分钟**没有实时日志传递到窗口（服务端没有产生 TS 游戏日志） 日志传输连接会被断开 需要退出实时日志查看窗口 重新打开

:::

## 4. 线上客户端日志

客户端日志与服务端日志查询方式略有不同，因为一个游戏可能会有相当多的用户，他们会在一天中任意时间段上线，所以客户端日志我们会先保存起来以供查阅。

::: tip

目前客户端日志会保存 7 天，且相同报错只会存储 100 条。要注意定期检查所有日志哦！

:::

① 在游戏数据下拉框中选中“性能数据”。

② 选择要查阅的时间区间。

③ 对于某个指定游戏，可以点击“详细数据”打开详情页。

![msedge_bCAJcE5Qqk](https://arkimg.ark.online/msedge_bCAJcE5Qqk.webp)

打开详情后，可以在下方游戏数据中找到崩溃得堆栈详情，这里可以查到错误具体是哪一行代码抛出的。

![msedge_umfSpKRdUp](https://arkimg.ark.online/msedge_umfSpKRdUp.webp)

这里看到报错都是一个 `game.js` 文件抛出的，这个文件其实就是我们代码编译之后生成的，我们可以在项目的根目录下的`dist` 文件夹中找到它。

![explorer_6Sirbens8f](https://arkimg.ark.online/explorer_6Sirbens8f.webp)

在  `game.js` 文件中找到对应的代码，然后使用文本编辑器在项目中全局搜索，即可定位到真实项目中报错的地方。

## 5. 编辑器日志

有时候我们可能需要看一下编辑器的运行日志，用来排查一些特殊问题。取编辑器运行日志，可以按照前面取项目输出的日志的方法，先打开项目输出的日志目录。

![dHzaTQcIQK](https://arkimg.ark.online/dHzaTQcIQK.webp)

切换到 Saved 文件夹：

![en0ok89Sbj91694593931](https://arkimg.ark.online/en0ok89Sbj91694593931.webp)

在 Saved 文件夹中，找到 log 文件夹：

![tdLG9rip8371694593985](https://arkimg.ark.online/tdLG9rip8371694593985.webp)

打开 log 文件夹之后，里面的 log 文件就是编辑器运行日志。其中包含了项目输出的日志信息、编辑器本身输出的服务器日志 等：

![Grp5Xp6Dcgb1694594061](https://arkimg.ark.online/Grp5Xp6Dcgb1694594061.webp)