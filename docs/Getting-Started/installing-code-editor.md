# VSCode 安装

::: tip 阅读本文大概需要 3 分钟。

想实现自己需要的游戏功能？那必然少不了使用脚本去编写功能了，口袋方舟编辑器使用 VSCode 作为默认开发 IDE，接下来让我们一起下载并进行安装。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?isOutside=true&aid=322817180&bvid=BV1qw411q7ba&cid=1327553561&p=3&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

口袋方舟的编辑器采用 TypeScript 作为编写游戏脚本的语言，在众多支持TypeScript的编辑器中，Visual Studio Code（简称VSCode）因其轻量级特性和广泛的用户基础而备受青睐。本教程将使用VSCode作为示范编辑器进行操作讲解。

## 1.VSCode 下载与安装

打开 VSCode 的[官网](https://code.visualstudio.com/Download) ，选择你使用的电脑的对应版本进行安装，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn11kr0iTC0GYNnJEj81fb1g.png)

下载完成安装包后，双击打开安装包，选择合适的安装路径进行安装，建议不要安装在系统盘也就是 C 盘中，避免之后出现权限相关问题！

![安装](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn3pPMESuQxeGvuSWrmjYAUf.png)

<strong> 重点注意 </strong>：最下方的那个 “<strong> 添加到 PATH</strong>” 一定要勾选，否则可能出现编辑器打开脚本不是 VSCode 的情况

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnHk7zpo15y1ighL7nXpBrYd.png)

## 2.VSCode 配置

### 2.1 切换中文

首次运行 VSCode，可能会有提示安装中文语言包，如果需要可以安装中文语言包，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnArgZhO8V9U5YM1ERNXLBBf.png)

如果没有提示，可以使用以下步骤安装中文语言包：

1. 打开 VSCode，在主界面按下组合键 “Ctrl+Shift+P” (或直接点击最上方输入框选 Show and Run Commands)，在弹出窗口中输入 “Configure Display Language” 并选择该项，如图：

![169ed6aa-f35d-4ba7-8de3-fe9bf31bfb13](https://arkimg.ark.online/169ed6aa-f35d-4ba7-8de3-fe9bf31bfb13.webp)

2. 选择后会出现新的语言选择列表，选择 “zh-cn” 即可，如图：

![c140e77c-73f7-430d-b8db-290e84acf1a4](https://arkimg.ark.online/c140e77c-73f7-430d-b8db-290e84acf1a4.webp)

3. 重启 VSCode 即可完成设置

### 2.2 安装插件（可选）

在正式编写代码之前，我们可以安装一些插件来辅助开发，在 VSCode 中安装插件十分简单：

1. 单击左侧工具栏 “扩展” 图标

2. 在搜索栏搜索需要的插件名称

3. 选择需要的插件，单击安装即可

具体步骤如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnxp7hmqlN2GILAICT2xLqAd.png)

推荐使用插件：口袋方舟 API 文档搜索插件，在扩展界面搜索 “mwdoc”：

![image-20230530102611582](https://arkimg.ark.online/image-20230530102611582.webp)

> 安装完成后，按下快捷键 `Ctrl + Alt + H` ，即可呼出搜索窗口使用
>
> 更多使用信息可以参考帖子：[一键搜索 API 文档插件安装使用](https://forum.ark.online/forum.php?mod=viewthread&tid=1657&page=1&extra=#pid5242)

安装下列必要插件，扩展 VSCode 对于 TypeScript 语言的支持，插件安装完成后别忘了重启 VSCode.

![13d7409d-6a86-40a6-ba16-a6deb6053a7e](https://arkimg.ark.online/13d7409d-6a86-40a6-ba16-a6deb6053a7e.webp)

## 3.  配置&使用断点调试文件

在游戏开发过程中，调试代码是提高开发效率、排查问题的关键环节。VSCode 一款强大的代码编辑器，其内置的断点调试功能为创作者提供了便捷的调试手段，要使用它也很简单，只需要配置一下 launch.json 文件即可：

① 点击运行与调试按钮

② 点击创建 launch.js 文件 (如果之前有过配置可以新增一个)

③ 选择 Node.js

这样就可以创建一个调试配置文件，接下来需要替换为我们官方提供的配置文件，即可进行调试。

配置文件下载：https://arkimg.ark.online/launch.json

![配置断点调试](https://arkimg.ark.online/ceacccbe-0333-46a4-b547-0dd02506bddd.webp)

替换完成后会在界面的左上角新增了七个选项，这些选项对应着不同的调试端口。

在口袋方舟中每个场景都会有一个服务端（Server），在调试时可以链接四个客户端（Client）创作者们可以根据自己项目的情况来选择合适的端口。

![ce5b3bbf-1d3f-4f08-967b-0e7c14f21e51](https://arkimg.ark.online/ce5b3bbf-1d3f-4f08-967b-0e7c14f21e51.webp)

选定合适的端口后，请首先在游戏编辑器中点击“运行”按钮，启动游戏。待游戏运行起来后，再返回VSCode，点击调试工具栏中的绿色“运行调试”按钮，随后即可开始进行断点调试。

VSCode 中的运行调试按钮：

![9268efd9-0f37-4937-b433-bdf9462d6d73](https://arkimg.ark.online/9268efd9-0f37-4937-b433-bdf9462d6d73.webp)

口袋方舟中的运行按钮：

| 0.41 之后编辑器                                              | 0.41 之前编辑器                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![运行](https://arkimg.ark.online/60538072-0eb8-4ed2-aed0-8b6a412cdce1.webp) | ![09739dac-3ef0-4c86-9016-60c1a1e6bb7f](https://arkimg.ark.online/09739dac-3ef0-4c86-9016-60c1a1e6bb7f.webp) |



