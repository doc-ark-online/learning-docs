# 调试与输出

::: tip 阅读本文大概需要 4 分钟。

开发中，我们常常会使用 log 进行一些内容输出与调试，本文主要帮助大家，学习编辑器的日志输出，这样当我们遇到 bug 的情况下就可以尝试使用 log 来进行找错了！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?bvid=BV1QM411q7HR&vd_source=c94089b4804c1edb7b67c4629d433f6b&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1.查看输出日志

首先，在脚本中，怎么输出一个日志呢？其实非常简单，使用 `console.log()` 函数即可，输出示例如下：

``` ts
@Component
export default class PlayerControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        console.log("这条消息客户端和服务端都会输出");	//[!code focus]
        if(SystemUtil.isServer()){
            console.log("这条消息服务端会输出");	//[!code focus]
        }
        if(SystemUtil.isClient()){
            console.log("这条消息客户端会输出");	//[!code focus]
        }
    }
}
```

那么脚本编写完成，并运行游戏后，输出的日志在哪里查看呢？在编辑器窗口下方就可以看到日志窗口，在日志窗口中就可以看到客户端和服务端的输出内容，如图：

![image-20230528145139561](https://arkimg.ark.online/image-20230528145139561.webp)

通过上述方法，我们就能解决大多情况的问题了。

如果我们要找详细的日志文件，就需要到日志目录了，首先在我们的工程中右键任意脚本，选择“打开文件所在位置”选项，如图：

![image-20230528145650954](https://arkimg.ark.online/image-20230528145650954.webp)

打开位置后，我们会看到弹出一个文件夹窗口，如图：

![image-20230528145903996](https://arkimg.ark.online/image-20230528145903996.webp)

该文件夹就是我们该项目的脚本所在目录，除此之外，可以看到文件夹的路径包含了很多级的目录(...\MetaWorldSaved\Saved\MetaWorld\Projects\SwimingDemo\JavaScripts)，日志目录在再往上 4 层的 Logs 里面：

![image-20230528150305801](https://arkimg.ark.online/image-20230528150305801.webp)

* ①位置，就是刚才我们打开的项目路径（`...\MetaWorldSaved\Saved\MetaWorld\Projects\SwimingDemo\JavaScripts`）
  * `JavaScripts` 是我们当前项目的脚本所在目录
  * `SwimingDemo` 是我们当前项目的名字（示例中，我创建的项目名字为 SwimingDemo）
  * `Projects` 该目录下，是编辑器的项目列表
* ②位置，是我们编辑器的日志目录所在路径（`...\MetaWorldSaved\Saved\Logs`）
  * 可以看到除了 MW.log 文件，还包含了 MW_Client 与 MW_Server 文件，其中 MW.log 为编辑器本身的日志，MW_Client 为客户端的日志文件，MW_Server 为服务端的日志文件。

## 2.项目目录结构

在上面小节的目录中，SwimingDemo 对应了我们该项目的项目文件夹，那么这个文件夹里除了脚本文件夹外，还有可能包含些什么呢？我们这节一起来看一下：

![image-20230528163037263](https://arkimg.ark.online/image-20230528163037263.webp)

- `.mw`：存储删除的本地文件（脚本、prefab 等），用以删除文件的恢复，在每次打开工程时会清空此文件夹
- `.vscode`: vscode 的配置文件夹，根据用户个人配置需求生成的目录
- `Character`: 在项目中，使用了角色编辑器，就会产生该文件夹，里面存储了用户自己编辑的角色数据
- `Config`：该项目的配置项文件夹，比如资源路径、窗口大小、项目设置信息、按键绑定信息等等
- `DBCache`：本地缓存，项目调用了数据存储接口时，在 PC 端运行后会在该目录下生成对应的数据文件。删除该目录等于清空游戏的数据存储
- `dist` ：编译缓存目录，每次编译都会生成 game.js 文件在该目录下
- `JavaScripts`：<Badge type="tip" text="可关注" /> 脚本文件目录，用户创建的所有脚本都在该目录下
- `Levels`：场景文件夹，包含游戏中的场景文件
- `Materials`: 材质文件夹，用户新建材质后，会在该目录下生成对应的数据文件，该目录保存了所有用户自定义的材质
- `Pictures`：游戏场景截图（自动的），会展示在项目列表
- `Prefabs`：<Badge type="tip" text="可关注" /> 预制体文件目录，项目中所有的预制体会存储在该目录下（不管是自己创建的还是资源库下载使用的都在这里）
- `UI`：<Badge type="tip" text="可关注" /> 存储所有 UI 文件的目录（如果引用了代码文件，依然会在 `JavaScripts` 目录下）
- `All_Json`：整个项目的数据合并文件
- `Asset_Data_List`：场景里面使用到的资源信息列表，包含每个用到的资源的信息
- `build.ts`: 系统自动生成的临时文件，无需关注
- `Local_Asset_List`: 所有该项目使用的本地资源的索引数据
- `xxxxxx.project`：游戏项目文件，存储项目的基本信息
- `tsconfig.json`：TypeScript 使用 tsconfig.json 文件作为其配置文件，新打开项目编辑器会自动创建

> 可以看到一个项目中包含了各种各样的文件和目录，但是除了我们创建的脚本、UI 和 Prefab 以外，其他的信息基本上都是由编辑器自己维护的，一般在开发中是无需关注的。