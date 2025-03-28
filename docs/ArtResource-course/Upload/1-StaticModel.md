# 3D场景/道具/静态挂件/手持物导入上传

## 相关资源制作请看文档：

[3D场景/道具/静态挂件/手持物制作流程](../Scene/0-0-Scene-process)

## 视频教程：

<video controls src="https://arkimg.ark.online/%E4%B8%8A%E4%BC%A0.mp4" />

## 资源上传：

确认无误后可以右键上传，（发布游戏的时候，没有上传资源也会自动上传，但审核时间会更长）

![img](https://arkimg.ark.online/1730274198893-225.png)

图上这个小图标说明这个资源正在审核和传到服务器，一般半小时内完成。

![img](https://arkimg.ark.online/1730274198893-226.png)

## 资源状态：

传作者中心-资源-我的资源

![img](https://arkimg.ark.online/1730274198893-227.png)

可以自己去管理资源，配置主题分类，或者隐藏，或者公开给其它用户使用。

公开资源官方会对资源进行审核。

上传之后的资源都会在“我的资源”展示。

![img](https://arkimg.ark.online/1730274198893-228.png)

## 常见问题：

### 资源校正不通过常见解决办法：

| 资源类型           | 不通过提示                                       | 解决办法                                                     |
| ------------------ | ------------------------------------------------ | ------------------------------------------------------------ |
| 资源名规范         | 不能包含中文，非法字符，长度不能超过80字符       | 修改名字                                                     |
| 静态模型           | 网格顶点数≤65535                                 | 三维软件减面（3ds_Max，Maya，blender等）                     |
| 只支持一个mesh     | 三维软件把模型合并或拆成多个FBX (支持多维质材质) | 三维软件把模型合并或拆成多个FBX (支持多维质材质)             |
| 不支持骨骼模型导入 | 三维软件把模型骨骼蒙皮删除。                     | 三维软件把模型骨骼蒙皮删除。                                 |
| 贴图               | 2的N次幂，可以使用长型贴图，≤2048                | 图像处理软件把贴图像素大小改成：64*64 128*128 256*256等....也可以是128*256这种格式。 |
| UI                 | ≤2048                                            | 缩小贴图即可                                                 |
| 音效资源           | 小于等于3M                                       | 后续会支持更大音效导入                                       |

### 同步到工程后资源不支持更新？

如果需要上传正确的静态模型资源，请导入工程前把资源效果配置正确！场景贴图和静态模型一起导入，且编辑效果到最终效果。详情可以看置顶视频。

### 如何找到法线贴图和混合贴图卡槽？

因为是高级参数，需要点编辑器材质，点击高级模式进行赋予。

![img](https://arkimg.ark.online/1730274198893-229.png)

在基础属性位置贴上对应贴图即可。

![img](https://arkimg.ark.online/1730274198893-230.png)

### 导入之后发现贴图效果不对？

请检查贴图格式是否正确，确认一下颜色贴图或者混合贴图是否被识别成了法

漫反射颜色贴图：

![img](https://arkimg.ark.online/1730274198893-231.png)

法线贴图：

![img](https://arkimg.ark.online/1730274198893-232.png)

混合mrae贴图：

![img](https://arkimg.ark.online/1730274198894-233.png)