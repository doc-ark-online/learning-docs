# 安装与启动

::: tip 阅读本文大概需要 6 分钟。

开始啦开始啦，搬好小板凳，开始我们学习编辑器的第一步啦！安抚下激动颤抖的心灵，让我们一起来安装编辑器！

:::

口袋方舟编辑器由两部分组成，分别是 Launcher 与 Editor。Launcher 主要负责管理 Editor 的版本、更新等内容，Editor 就是我们的游戏编辑器，我们的开发都是在 Editor 中进行。

## 1. 下载与安装

### 1.1 注册账号
① 访问[口袋方舟](https://creator.ark.online/)点击 **"登录/注册"** 按钮。根据提示，完成注册信息填写。

② 完成注册后点击 **“下载编辑器”** 按钮，来下载我们的启动器。

![d7ee6565-8187-4f4a-a682-9494b338a9b2](https://arkimg.ark.online/d7ee6565-8187-4f4a-a682-9494b338a9b2.jpg)

### 1.2 安装 Launcher

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

如果双击运行后提示缺少 Visual C++ Runtime，需要先下载并安装一下 [VC++ 运行库](http://www.winwin7.com/soft/15951.html)

:::

::: warning 注意

如果双击运行后提示需要安装 .Net Core，在弹出的页面或 [.NET Core](https://dotnet.microsoft.com/zh-cn/download/dotnet/3.1) 安装 x64 位版本即可

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

![image-20230528150908661](https://arkimg.ark.online/image-20230528150908661.webp)

这时候可以选择两种登录方式，第一种我们可以使用手机上的 [233 乐园](https://www.233leyuan.com/) 进行扫码登录，第二种我们可以输入手机号获取验证码登录（第一次登录会自动注册）。

登录成功后会进行资源加载，资源加载完成后，就可以开启游戏开发之路了！

![aecfcf75-2922-4fe0-a18f-19a61bc43f87](https://arkimg.ark.online/aecfcf75-2922-4fe0-a18f-19a61bc43f87.webp)

### 2.2 创作者中心与退出登录

点击右上角头像，出来小菜单，包含“创作者名称、创作者 ID、创作者中心直达链接、问题反馈、退出”等

![image-20230921155653195](https://arkimg.ark.online/image-20230921155653195.png)

## 3. 创建新工程

打开编辑器之后，我们在编辑左侧选中 **① 创建** ，就可以看到编辑器提供的所有工程模板了，要创建一个空白工程，我们可以在右侧模板列表找到 **② 空白模板 （Blank）** 双击它，等待下载完成。

如果不想从空白工程开始制作游戏，也可以使用编辑器中自带的其他模板工程。与创建空白工程相同在对应的模板上双击就好。

![dc86bb30-1db7-487d-b0fe-29345dd3ef53](https://arkimg.ark.online/dc86bb30-1db7-487d-b0fe-29345dd3ef53.webp)

下载完成后，编辑器会自动弹出 **“新游戏”** 窗口，输入游戏名字后点击创建。这样一个新工程就创建好了！

![8fad2861-560d-4eb4-93fa-ff5ed3e46360](https://arkimg.ark.online/8fad2861-560d-4eb4-93fa-ff5ed3e46360.webp)

等待加载完成即可进入编辑器，伟大的作品从这里开始起航！

![1e360a59-9deb-49cd-958d-2fb14901e7d1](https://arkimg.ark.online/1e360a59-9deb-49cd-958d-2fb14901e7d1.webp)
