# VSCode 安装

::: tip 阅读本文大概需要 3 分钟。

想实现自己需要的游戏功能？那必然少不了使用脚本去编写功能了，口袋方舟编辑器使用 VSCode 作为默认开发 IDE，接下来让我们一起下载并进行安装。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317926451&p=3&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

口袋方舟编辑器使用的语言是 TypeScript 来编写游戏脚本。

支持 TypeScript 语言的编辑器有 Visual Studio Code（以下简称 VSCode）是比较轻量级的，也是使用人数较多的一款编辑器，教程中均以该编辑器进行演示。

## 1.VSCode 下载与安装

打开 VSCode 的 [官网](https://code.visualstudio.com/Download) ，选择对应系统版本，下载并安装，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn11kr0iTC0GYNnJEj81fb1g.png)

下载完成后，双击打开安装包，选择安装路径，其余均选下一步，完成安装，如图：

<strong> 重点注意 </strong>：最下方的那个 “<strong> 添加到 PATH</strong>” 一定要勾选，否则可能出现编辑器打开脚本不是 VSCode 的情况

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnHk7zpo15y1ighL7nXpBrYd.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn3pPMESuQxeGvuSWrmjYAUf.png)

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

### 2.2 安装插件

首先来讲解一下 VSCode 安装插件方法：

1. 单击左侧工具栏 “扩展” 图标

2. 在搜索栏搜索需要的插件名称

3. 选择需要的插件，单击安装即可

具体步骤如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnxp7hmqlN2GILAICT2xLqAd.png)

必备插件：口袋方舟 API 文档搜索插件，在扩展界面搜索 “mwdoc”：

![image-20230530102611582](https://arkimg.ark.online/image-20230530102611582.webp)

> 安装完成后，按下快捷键 `Ctrl + Alt + H` ，即可呼出搜索窗口使用
>
> 更多使用信息可以参考帖子：[一键搜索 API 文档插件安装使用](https://forum.ark.online/forum.php?mod=viewthread&tid=1657&page=1&extra=#pid5242)

安装下列必要插件，扩展 VSCode 对于 TypeScript 语言的支持，插件安装完成后别忘了重启 VSCode.

![adec3eb5-fffb-46fd-be91-b9df09a77360](https://arkimg.ark.online/adec3eb5-fffb-46fd-be91-b9df09a77360.webp)

![13d7409d-6a86-40a6-ba16-a6deb6053a7e](https://arkimg.ark.online/13d7409d-6a86-40a6-ba16-a6deb6053a7e.webp)
