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

![a30f6aef-355d-472d-9b6d-538b623f84a0](https://arkimg.ark.online/a30f6aef-355d-472d-9b6d-538b623f84a0.webp)

### 1.2 安装 编辑器启动器 （Launcher） 

![](https://arkimg.ark.online/learn_1_1_downloadOver.webp)

双击打开后，出现安装界面，目前的安装路径为不可更改的，勾选 “阅读协议” 按钮后，单击安装按钮即可安装，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKL912raNmbx79FpTwNnbeM.png)

单击 “安装” 按钮后，开始安装，等待安装完成，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhqpkDdbJKEKGRSNU3KTrad.png)

安装过程中，如果弹出需要自动安装的其他所需环境选项，点允许并安装即可，安装完成后，单击 “安装完成” 按钮，桌面上会生成 “口袋方舟编辑器” 图标，安装到此结束。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn4JK4iqDxikVLmst5PMGSnO.png)

### 1.2 安装 Editor

首先，双击桌面上已经安装完成的 “口袋方舟编辑器” 图标即可打开应用，之后我们就要通过该应用管理与运行我们的 Editor 编辑器了。

![logo](https://arkimg.ark.online/logo.jpg)

::: warning 注意

如果双击运行后提示缺少 Visual C++ Runtime，需要先下载并安装一下 [Visual C++ 可再发行程序包下载](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)

:::

::: warning 注意

如果双击运行后提示需要安装 .Net Core，在弹出的页面或 [.NET Core](https://dotnet.microsoft.com/zh-cn/download/dotnet/3.1) 安装 **x64** 位版本即可

:::

首次运行该应用，会提示指定 Editor 的存放目录，单击选择路径 **（推荐安装到固态硬盘,机械硬盘安装会较慢。）**，如图：

![](https://arkimg.ark.online/uCegAJqwNT81694507897.webp)

选择路径时候注意，切记路径中**不要包含中文、空格，也不能将 Editor 的路径放到 Launcher 路径下**，例如可以选择路径 “D:\Editor”，路径选择完成后，会开始自动加载进度下载 Editor 到路径中，如图：

![](https://arkimg.ark.online/vHmDzhGjOV61694507321.webp)

进度完成后，安装完成，Editor 会自动运行起来，后续使用直接通过双击桌面上的 “口袋方舟编辑器” 启动 Editor 即可。

**安装卡在资源更新界面**

- 检查安装步骤。
- 重启编辑器。
- 重新安装。

**安装失败**

- 权限问题，可以尝试使用管理员运行，看看能否解决。
- 如果有一些杀毒软件扫描比较频繁，可以尝试先把编辑器卸载干净后，关闭杀毒软件 (有些杀毒软件还会存在后台进程，比较狡猾，需要注意一下) 再安装。
- 安装路径如果存在中文，也可能导致此问题。

**登录账号界面没反应**

- 检查网络环境，是否能正常访问网页。
- 关闭网络代理软件。
- 重启编辑器。

## 2. Editor 的注册与使用

### 2.1 Editor 的注册与使用

双击打开桌面的 “口袋方舟编辑器” 图标，待更新完成后，会显示 Editor 的登陆界面，如图：

![1dbde00d-3d85-4891-8a26-5abf63214f1a](https://arkimg.ark.online/1dbde00d-3d85-4891-8a26-5abf63214f1a.webp)

这时候可以选择两种登录方式：

- 第一种我们可以使用手机扫码登录。
- 第二种我们可以输入手机号获取验证码登录（第一次登录会自动注册）。

如果是首次登陆，编辑器会使用浏览器自动弹出注册问卷页面，创作者们根据自身情况选择合适的选项即可。

![50224a54-6349-4f07-b708-5cfdfc833aa4](https://arkimg.ark.online/50224a54-6349-4f07-b708-5cfdfc833aa4.webp)

填写完问卷后就可以正常登陆了，登录成功后会进行资源加载，资源加载完成后，就可以正式开启我们的游戏开发之路了！

![c4f5fe92-6aab-4bcb-9c2e-16ea1e41062c](https://arkimg.ark.online/c4f5fe92-6aab-4bcb-9c2e-16ea1e41062c.webp)

### 2.2 创作者中心与退出登录

点击右上角头像，出来小菜单，包含“创作者名称、创作者 ID、创作者中心直达链接、问题反馈、退出”等

![image-20230921155653195](https://arkimg.ark.online/image-20230921155653195.png)

## 3. 创建新工程

::: tip 关于空项目

❗ 随着编辑器版本迭代，编辑器的空项目名字可能会修改。创作者们可以根据名字来找到最新的空项目。我们的空项目名通常为 "Blank" 或 "空白模板项目"。

:::

打开编辑器之后，我们在编辑左侧选中 **① 创建** ，就可以看到编辑器提供的所有工程模板了，要创建一个空白工程，我们可以在右侧模板列表找到 **② 空白模板 （Blank）** 双击它，等待下载完成。

如果不想从空白工程开始制作游戏，也可以使用编辑器中自带的其他模板工程。与创建空白工程相同在对应的模板上双击就好。

![67b4051d-1ce9-41e4-8066-e3ff61c96501](https://arkimg.ark.online/67b4051d-1ce9-41e4-8066-e3ff61c96501.webp)

下载完成后，编辑器会自动弹出 **“新游戏”** 窗口，输入游戏名字后点击创建。这样一个新工程就创建好了！

![8fad2861-560d-4eb4-93fa-ff5ed3e46360](https://arkimg.ark.online/8fad2861-560d-4eb4-93fa-ff5ed3e46360.webp)

等待加载完成即可进入编辑器，伟大的作品从这里开始起航！

![1e360a59-9deb-49cd-958d-2fb14901e7d1](https://arkimg.ark.online/1e360a59-9deb-49cd-958d-2fb14901e7d1.webp)
