# 导入第三方项目和资源

::: tip 阅读本文大概需要 7 分钟。

有时候我们会拿到一些第三方提供的项目模板，那么这时候怎么导入到自己的编辑器中进行使用呢？

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317926957&p=6&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 导入项目

[闯关小游戏教程点击下载](../obby-course/game-description.md) 

这里以闯关小游戏为例，我们下载好项目压缩包之后解压。将解压出来的文件夹，放入自己编辑器目录下的项目文件夹，那么怎么找自己的项目文件夹呢？

非常简单，在编辑器的 “本地游戏” 页面，随便选择一个已经存在的项目（没有的话可以先创建一个项目），单击右键，在菜单中选择 “打开文件路径” 即可，如图：

![image-20240827103001883](https://arkimg.ark.online/image-20240827103001883.webp)

打开后，会看到编辑器可识别的项目目录 `...\Editor_Win64\MetaWorldSaved\Saved\MetaWorld\Project\Edit` ，在该目录下，解压下载的压缩包（或者将解压之后的文件夹放入该目录），如图所示：

![image-20240827103058733](https://arkimg.ark.online/image-20240827103058733.webp)

点进去 `闯关小游戏` 之后如图所示：

![image-20240827152743252](https://arkimg.ark.online/image-20240827152743252.webp)

再点击 `闯关小游戏` 之后如图所示：

![image-20240827152942802](https://arkimg.ark.online/image-20240827152942802.webp)

重新打开口袋方舟编辑器，左侧列表中单击选择 “本地游戏”，在右侧界面即可看到导入后的项目，如图：

![image-20240827102748305](https://arkimg.ark.online/image-20240827102748305.webp)

这样我们就成功导入了一个第三方项目，大家可以在论坛查找想要的项目，自己导入试试看。                                                                                                                                                                                                                                 

## 2. 导入资源

### 2.1 全类型资源导入

在工程内容的资源栏目下面可以找到资源导入按钮

![image-20240919110811111](https://arkimg.ark.online/image-20240919110811111.webp)

点击后出现导入资源的选项卡，可以看到需要导入的资源应该是什么样的类型:

![image-20240919111514575](https://arkimg.ark.online/image-20240919111514575.webp)

默认为可导入任意类型的文件，其中前面是文件类型，后面对应的是对应文件的格式，详细对照表如下所示：

|  资源类型  | 类型对应英文 | 资源对应格式 |
| :--------: | :----------: | :----------: |
|  静态网格  |  StaticMesh  |    *.fbx     |
|    人物    |  Character   |   *.asset    |
|   预制体   |    Prefab    |    *.zip     |
|    音效    |    Sound     |    *.wav     |
|    材质    |   Material   |    *.mat     |
| 界面UI文件 |      UI      |     *.ui     |
|   TS脚本   |    Script    |     *.ts     |
|  模型文件  |    Model     |  *.modelzip  |
|  纹理文件  |   Texture    |    *.jpg     |
|  纹理文件  |   Texture    |    *.png     |
|  纹理文件  |   Texture    |    *.tga     |
|  数据文件  |   DataFile   |    *.data    |

### 2.2 导入预制体举例：

点击资源导入，然后找到预制体的目录文件，点击选择，然后再点击打开：![image-20241008174139319](https://arkimg.ark.online/image-20241008174139319.png)

确认导入即可：

![image-20240919113347925](https://arkimg.ark.online/image-20240919113347925.webp)

可以看到右上角提示预制体导入成功，然后在预制体分类下可以找到，拖拽它到场景中即可使用。

![image-20240919113418359](https://arkimg.ark.online/image-20240919113418359.webp)

![image-20240919113614869](https://arkimg.ark.online/image-20240919113614869.webp)



### 2.3 导入模型举例![image-20241008190222585](https://arkimg.ark.online/image-20241008190222585.png)

![image-20241008190258295](https://arkimg.ark.online/image-20241008190258295.png)

 导入模型会多一个模型的配置界面，编辑好之后，选择同步到工程内容即可：

![image-20241008190335881](https://arkimg.ark.online/image-20241008190335881.png)

在静态模型处就可以看到刚刚导入的资源了：

**![image-20241008190501436](https://arkimg.ark.online/image-20241008190501436.png)**



### 2.4 其他导入类型举例

导入UI和前面的操作步骤一样，UI导入会多一个选择是哪种贴图的选择：

![image-20240919151833124](https://arkimg.ark.online/image-20240919151833124.webp)

然后也会多一个预览配置，调整完成后点击同步到工程内容即可。

![image-20240919152054992](https://arkimg.ark.online/image-20240919152054992.webp)

导入角色基本操作和导入普通资源一样，选择导入的资源打开

![image-20240919152748093](https://arkimg.ark.online/image-20240919152748093.webp)

然后就可以在角色栏找到导入的资源模型，拖动到场景中即可使用

![image-20240919152810935](https://arkimg.ark.online/image-20240919152810935.webp)