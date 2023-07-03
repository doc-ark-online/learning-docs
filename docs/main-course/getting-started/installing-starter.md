# 安装与启动

::: tip 阅读本文大概需要 6 分钟。

开始啦开始啦，搬好小板凳，开始我们学习编辑器的第一步啦！安抚下激动颤抖的心灵，让我们一起来安装编辑器！

:::

口袋方舟编辑器由两部分组成，分别是 Launcher 与 Editor。Launcher 主要负责管理 Editor 的版本、更新等内容，Editor 就是我们的游戏编辑器，我们的开发都是在 Editor 中进行。

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?bvid=BV18P4y1z7gu&vd_source=c94089b4804c1edb7b67c4629d433f6b&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 下载与安装

### 1.1 注册账号
访问[口袋方舟](https://creator.ark.online/)点击开始创作，完成注册信息填写，下载launcher

![](https://cdn.233xyx.com/athena/online/7c8dfdb553ee48659c72e6a750038419_13136921.webp)

### 1.2 安装 Launcher

![](https://arkimg.ark.online/MetaApp20230510-103211.jpg)

双击打开后，出现安装界面，目前的安装路径为不可更改的，勾选 “阅读协议” 按钮后，单击安装按钮即可安装，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKL912raNmbx79FpTwNnbeM.png)

单击 “安装” 按钮后，开始安装，等待安装完成，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhqpkDdbJKEKGRSNU3KTrad.png)

安装过程中，如果弹出需要自动安装的其他所需环境选项，点允许并安装即可，安装完成后，单击 “安装完成” 按钮，桌面上会生成 “口袋方舟编辑器” 图标，安装到此结束。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn4JK4iqDxikVLmst5PMGSnO.png)

### 1.2 安装 Editor

首先，双击桌面上已经安装完成的 “口袋方舟编辑器” 图标即可打开应用，之后我们就要通过该应用管理与运行我们的 Editor 编辑器了。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnzKtl8MvwTRJdcM5qSq0P2e.png)

::: warning 注意

如果双击运行后提示缺少 Visual C++ Runtime，需要先下载并安装一下 [VC++ 运行库](http://www.winwin7.com/soft/15951.html)

:::

::: warning 注意

如果双击运行后提示需要安装.Net Core，在弹出的页面或 [.NET Core](https://dotnet.microsoft.com/zh-cn/download/dotnet/3.1) 安装 x64 位版本即可

:::

首次运行该应用，会提示指定 Editor 的存放目录，单击选择路径（<strong> 推荐安装到固态硬盘 </strong><strong>，机械硬盘安装会较慢，并且目前解压没有进度条展示安装进度 </strong>），如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnByNqfJCCpSQ6y1WsREZk2d.png)

选择路径时候注意，切记路径中不要包含中文、空格，也不能将 Editor 的路径放到 Launcher 路径下，例如可以选择路径 “D:\Editor”，路径选择完成后，会开始自动加载进度下载 Editor 到路径中，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnOal7UqsyI3Rk1bvOMaYlqd.png)

进度完成后，安装完成，Editor 会自动运行起来，后续使用直接通过双击桌面上的 “口袋方舟编辑器” 启动 Editor 即可。

**安装卡在资源更新界面**

- 检查安装步骤
- 重启编辑器
- 重新安装

**安装失败**

- 权限问题，可以尝试使用管理员运行，看看能否解决
- 如果有一些杀毒软件扫描比较频繁，可以尝试先把编辑器卸载干净后，关闭杀毒软件 (有些杀毒软件还会存在后台进程，比较狡猾，需要注意一下) 再安装
- 安装路径如果存在中文，也可能导致此问题

**登录账号界面没反应**

- 检查网络
- 关闭代理
- 重启编辑器

**运行没反应**

- 关闭编辑器重新运行

## 2. Editor 的注册与使用

### 2.1 Editor 的注册与使用

双击打开桌面的 “口袋方舟编辑器” 图标，待更新完成后，会显示 Editor 的登陆界面，如图：

![image-20230528150908661](https://arkimg.ark.online/image-20230528150908661.webp)

这时候可以选择两种登录方式，第一种我们可以使用手机上的 [233 乐园](https://www.233leyuan.com/) 进行扫码登录，第二种我们可以输入手机号获取验证码登录（第一次登录会自动注册）。

登录成功后会进行资源加载，资源加载完成后，就可以开启游戏开发之路了！

![image-20230528151840243](https://arkimg.ark.online/image-20230528151840243.webp)

### 2.2 创作者中心与退出登录

点击右上角头像，出来小菜单，包含“创作者名称、创作者 ID、创作者中心直达链接、问题反馈、退出”等

![image-20230528154519577](https://arkimg.ark.online/image-20230528154519577.webp)

其他方式获取创作者 ID：

1. 使用同一手机号(或者 233 乐园扫码登录)验证登陆创作者中心：https://portal.ark.online
2. 鼠标悬浮到右上角昵称处，按下图指示复制创作者 ID

![image-20230528154847351](https://arkimg.ark.online/image-20230528154847351.webp)

## 3. 系统要求

### 3.1 系统要求

#### 3.2.1 最低系统要求

CPU：英特尔酷睿 i5-7400 或 AMD 等效

内存： 8 GB

GPU：NVIDIA GeForce GTX 960 或 AMD 等效

操作系统： **Windows10 64 位**

#### 3.2.2 推荐系统要求

CPU：英特尔酷睿 i5-9400F 或 AMD 等效

内存： 16 GB

GPU：NVIDIA GeForce GTX 1660 Ti  或 AMD 等效

操作系统： Windows10 64 位
