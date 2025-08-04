# 导入项目或资源

::: tip 阅读本文大概需要 7 分钟。

有时候我们会拿到一些第三方提供的项目模板，那么这时候怎么导入到自己的编辑器中进行使用呢？

:::

## 1. 导入项目

[闯关小游戏教程点击下载](../obby-course/game-description.md) 

这里以闯关小游戏为例，请点击上方链接下载项目文件，并使用解压缩工具将其解压至适当的目录。解压完成后，您通常会看到一个名为 **“闯关小游戏”** 的文件夹，打开后其结构如下所示：

![39129929-a6f9-4613-b814-d5d3f158b4aa](https://arkimg.ark.online/39129929-a6f9-4613-b814-d5d3f158b4aa.webp)

接下来打开口袋方舟依次点击 ① 编辑器 -> ② 工程 -> ③ 工程导入 

![492c35de-530c-45f9-be7b-6a20ef035227](https://arkimg.ark.online/492c35de-530c-45f9-be7b-6a20ef035227.webp)

在之后弹出的文件选择窗口中选中刚刚解压好的项目文件夹，点击“选择文件夹”按钮

![ef4d788f-871f-4f95-a62a-6bbe2a29958b](https://arkimg.ark.online/ef4d788f-871f-4f95-a62a-6bbe2a29958b.webp)

点击后，您将在本地工程页面中看到新添加的项目，这意味着我们已经成功导入了第三方项目。您可以在论坛中搜索感兴趣的项目，并尝试自行导入体验。    

![0e1fee12-3af7-45dc-be83-76fbb948aee9](https://arkimg.ark.online/0e1fee12-3af7-45dc-be83-76fbb948aee9.webp)                                                                                                                                                                                                                        

## 2. 导入资源

### 2.1 全类型资源导入

在游戏开发过程中，上传资源是一项常见的操作，在口袋方舟中，您只需点击“资源导入”按钮即可轻松导入所需各类资源。![a5c5e305-2894-4572-a9ce-46fef2adfdb9](https://arkimg.ark.online/a5c5e305-2894-4572-a9ce-46fef2adfdb9.webp)

点击后出现导入资源的选项卡，可以看到支持导入的各类资源类型：

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

::: tip 美术资源制作教程

若项目需导入自定义素材，请参考美术资源教程，以了解口袋方舟的资源导入限制及相关教程：[美术资源制作教程](https://learning.ark.online/ArtResource-course/000-PGC.html)

:::

### 2.2 以导入预制体为例

点击资源导入，然后找到预制体的目录文件，点击选择，然后再点击打开：

![264af641-2c72-4125-a37d-be37fb33504e](https://arkimg.ark.online/264af641-2c72-4125-a37d-be37fb33504e.webp)

确认导入即可：

![image-20240919113347925](https://arkimg.ark.online/image-20240919113347925.webp)

可以看到右上角提示预制体导入成功，然后在预制体分类下可以找到，拖拽它到场景中即可使用。

![image-20240919113418359](https://arkimg.ark.online/image-20240919113418359.webp)

![image-20240919113614869](https://arkimg.ark.online/image-20240919113614869.webp)

### 2.3 以导入模型为例

::: danger 模型导入注意事项

模型请严格按照美术资源制作教程来制作&导入，贴图请在同步到工程内容之前贴好！[3D场景/道具/静态挂件/手持物导入上传](https://learning.ark.online/ArtResource-course/Upload/1-StaticModel.html)

:::

点击 ①资源导入按钮 -> ②将模型与贴图一同选中 -> ③点击打开

![b505ddb6-9c63-4c84-b220-9feb7f0a22bd](https://arkimg.ark.online/b505ddb6-9c63-4c84-b220-9feb7f0a22bd.webp)

接下来编辑器会弹选择框，这里我们导入的是模型的贴图所以选择右边的按钮。

![742c2514-0957-44c5-be0c-c32895ed492b](https://arkimg.ark.online/742c2514-0957-44c5-be0c-c32895ed492b.webp)

点击后，编辑器将自动对资源进行检测。若检测通过，点击“确定”即可进入下一步。若检测结果显示导入失败，但您的资源确实符合制作规范，不妨尝试重新导入一次。

![29503bf9-c778-4d48-9d4c-3c7866a3546d](https://arkimg.ark.online/29503bf9-c778-4d48-9d4c-3c7866a3546d.webp)

接下来我们将导入的贴图贴到模型指定的材质上，预览一下最终效果是否符合预期：

![ef7ERsjE07](https://arkimg.ark.online/ef7ERsjE07.gif)

如果最终效果符合预期，就可以点击右上角的同步到工程内容/资源上传按钮进行导入了。

- 同步到工程内容：点击这个按钮后会马上在工程内容中看到该模型，并且会在最终发布游戏时将模型上传到后台。
- 资源上传：点击这个按钮后会直接提交到后台中，不会出现在工程内容里。需要等待审核完成之后在资源库中查看、使用。

两种方式最终都会将资源上传到后台并等待审核，只是时间先后的问题。所有资源都必须要通过审核才可以在实机上看到。

![ca9c89f9-0af9-456a-967d-fbecc129aa14](https://arkimg.ark.online/ca9c89f9-0af9-456a-967d-fbecc129aa14.webp)

eg：同步到工程内容后显示在静态模型分类下的金币：

![44f9f852-4036-45e8-ae0e-cbf6542c21a3](https://arkimg.ark.online/44f9f852-4036-45e8-ae0e-cbf6542c21a3.webp)

### 2.4 其他导入类型举例

导入UI和前面的操作步骤一样，UI导入会多一个选择是哪种贴图的选择：

![image-20240919151833124](https://arkimg.ark.online/image-20240919151833124.webp)

然后也会多一个预览配置，调整完成后点击同步到工程内容即可。

![image-20240919152054992](https://arkimg.ark.online/image-20240919152054992.webp)

导入角色基本操作和导入普通资源一样，选择导入的资源打开

![image-20240919152748093](https://arkimg.ark.online/image-20240919152748093.webp)

然后就可以在角色栏找到导入的资源模型，拖动到场景中即可使用

![image-20240919152810935](https://arkimg.ark.online/image-20240919152810935.webp)