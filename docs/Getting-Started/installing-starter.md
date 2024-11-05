# 安装与启动

::: tip 阅读本文大概需要 6 分钟。

开始啦开始啦，搬好小板凳，开始我们学习编辑器的第一步啦！安抚下激动颤抖的心灵，让我们一起来安装编辑器！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?isOutside=true&aid=1051868547&bvid=BV17H4y1s7Bv&cid=26611878625&p=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

口袋方舟编辑器由两部分组成，分别是 Launcher 与 Editor。Launcher 主要负责管理 Editor 的版本、更新等内容，Editor 就是我们的游戏编辑器，我们的开发都是在 Editor 中进行。

::: tip 安装、运行常见问题 Q&A 

常见问题可以在第一个帖子中查找，遇到编辑器闪退可以按第二个帖子方式设置一下，如果还是不能解决可以在论坛联系我们！

常见安装问题汇总：[【安装和运行常见问题】](https://forum.ark.online/forum.php?mod=viewthread&tid=1207)

切换独立显卡运行编辑器方式：[使用独立显卡运行口袋方舟编辑器设置教程](https://forum.ark.online/forum.php?mod=viewthread&tid=2384&extra=)

:::

## 1. 下载与安装

### 1.1 下载编辑器启动器

访问[口袋方舟官网](https://creator.ark.online)，在页面中间点击 **“下载编辑器”** 按钮，来下载我们的启动器。

这一步大家可以使用任意下载工具来下载，推荐使用浏览器默认自带的比较方便。

![a30f6aef-355d-472d-9b6d-538b623f84a0](https://arkimg.ark.online/a30f6aef-355d-472d-9b6d-538b623f84a0.webp)

### 1.2 安装 编辑器启动器 （Launcher） 

下载完成之后可以在文件夹中看到如下图带有口袋方舟字样 LOGO 的安装包软件。

![007b3f1a-0cbf-4f21-aa27-fd0a4bb7257c](https://arkimg.ark.online/007b3f1a-0cbf-4f21-aa27-fd0a4bb7257c.webp)

双击打开后出现安装界面，如图：

![ed274003-83c6-4855-873b-0d62b04214cb](https://arkimg.ark.online/ed274003-83c6-4855-873b-0d62b04214cb.webp)

① 点击文件夹模样的按钮可以选择启动器安装的位置，这里我选择默认位置。（选择路径时候注意，切记路径中**不要包含中文、空格，也不能将 Editor 的路径放到 Launcher 路径下**）

② 在阅读协议后勾选这个单选框，表示您已经同意我们的创作协议。

③ 点击下一步，开始自动安装。

接下来会检测编辑器和派对是否有更新，如果有的话会弹出下图窗口（左图为派对右图为编辑器），等待他们安装完成。

![34eca4ac-4e87-4ea7-841d-cc4ae474b798](https://arkimg.ark.online/34eca4ac-4e87-4ea7-841d-cc4ae474b798.webp)

安装完成后，会默认在桌面创建一个快捷方式，之后如果要打开编辑器直接双击打开这个快捷方式即可。

![84adab99-6c0d-48b9-9e76-049545def5b7](https://arkimg.ark.online/84adab99-6c0d-48b9-9e76-049545def5b7.webp)

::: warning 注意

如果双击运行后提示缺少 Visual C++ Runtime，需要先下载并安装一下 [Visual C++ 可再发行程序包下载](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)

如果双击运行后提示需要安装 .Net Core，在弹出的页面或 [.NET Core](https://dotnet.microsoft.com/zh-cn/download/dotnet/3.1) 安装 **x64** 位版本即可

:::

**常见安装失败问题**

- 权限问题，可以尝试使用管理员运行，看看能否解决。
- 如果有一些杀毒软件扫描比较频繁，可以尝试先把编辑器卸载干净后，关闭杀毒软件 (有些杀毒软件还会存在后台进程，比较狡猾，需要注意一下) 再安装。
- 安装路径如果存在中文，也可能导致此问题。

**登录账号界面没反应**

- 检查网络环境，是否能正常访问网页。
- 关闭网络代理软件。
- 重启编辑器。

## 2. Editor 的注册与使用

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?isOutside=true&aid=1851974274&bvid=BV1hp421U7z2&cid=26611879804&p=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>


### 2.1 Editor 的注册与使用

双击打开桌面的 “口袋方舟编辑器” 图标，待更新完成后，会显示 Editor 的登陆界面，如图：

![72da0423-42eb-4ff7-b304-1849827064b9](https://arkimg.ark.online/72da0423-42eb-4ff7-b304-1849827064b9.webp)

这时候可以选择两种登录方式：

- 第一种我们可以使用手机扫码登录。
- 第二种我们可以输入手机号获取验证码登录（第一次登录会自动注册）。

如果是首次登陆，可能会提示需要填写问卷，创作者们根据自身情况选择合适的选项即可。

![50224a54-6349-4f07-b708-5cfdfc833aa4](https://arkimg.ark.online/50224a54-6349-4f07-b708-5cfdfc833aa4.webp)

填写完问卷后就可以正常登陆了，现在可以正式开启我们的游戏开发之路了！

![b0588440-f0fc-4a70-b18f-1ffb66a515ee](https://arkimg.ark.online/b0588440-f0fc-4a70-b18f-1ffb66a515ee.webp)

### 2.2 创作者中心与退出登录

点击右左上角**编辑器**按钮，即可进入到创作者中心，在这里你可以看到自己的创作者 ID、发布过的游戏、官方活动等信息，遇到问题可以点击右下角的蓝色小图标联系我们。 

![91f2c0cd-f8e8-4d36-8646-172b2e868c80](https://arkimg.ark.online/91f2c0cd-f8e8-4d36-8646-172b2e868c80.webp)

## 3. 创建新工程

::: tip 关于空工程

❗ 随着编辑器版本迭代，编辑器的空工程名字可能会修改。创作者们可以根据名字来找到最新的空工程。我们的空工程名通常为 "Blank" 或 "空白模板工程"。

:::

选中左上角**编辑器**按钮，接下来选中下方小条中的**模板**按钮切换到创建工程页面，在这里我们官方提供了许多模板，如果想完全从零开始新建一个工程，可以点击左上角的空模板。

![63e9285a-e6dc-41f7-8391-eefff2b1bfd2](https://arkimg.ark.online/63e9285a-e6dc-41f7-8391-eefff2b1bfd2.webp)

点击后，编辑器会自动弹出 **“新建工程”** 窗口。

① 可以根据需求选择合适的编辑器版本。

② 输入一个工程名，这里要注意工程名不能含有特殊符号，如无必要最好不要使用中文。

③ 可以根据需求选择合适的工程目录，推荐直接使用默认即可。

④ 全部输入完成后点击创建，编辑器会自动生成需要的文件。

![2786d92b-495e-4e09-941b-fc5b8ecf189e](https://arkimg.ark.online/2786d92b-495e-4e09-941b-fc5b8ecf189e.webp)

等待加载完成即可进入编辑器，伟大的作品从这里开始起航！

![1e360a59-9deb-49cd-958d-2fb14901e7d1](https://arkimg.ark.online/1e360a59-9deb-49cd-958d-2fb14901e7d1.webp)

## 4. 打开历史工程

俗话说“罗马不是一天建成的”，我们的工程也不可能一天完成。接下来我们一起学习下如何打开之前的工程。

首先打开编辑器，点击左上角**编辑器**按钮，然后点击下方页签中的**工程**按钮，这里显示的就是当前编辑器目录下所有的工程工程了。

![b0ed71dd-9323-430e-a0ae-fcc2fa0f6284](https://arkimg.ark.online/b0ed71dd-9323-430e-a0ae-fcc2fa0f6284.webp)

之后鼠标左键**双击**需要打开的工程，会弹出**打开工程**窗口，可以在左上角选择合适的编辑器版本来打开该工程。

::: danger 关于版本

请不要使用低版本编辑器打开高版本编辑器创建的工程，这样可能会导致工程出现异常！

:::

![1a8da997-729e-4dc6-bee5-2528b7cd296f](https://arkimg.ark.online/1a8da997-729e-4dc6-bee5-2528b7cd296f.webp)

选择好合适的编辑器版本，点击右下角**打开**按钮，等待编辑器加载完资源即可进入历史工程中。
