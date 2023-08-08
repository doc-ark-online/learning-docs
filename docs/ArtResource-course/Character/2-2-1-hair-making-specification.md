# 头发制作规范

## 制作流程：

![img](https://arkimg.ark.online/1688436553113-30.jpeg)

- 请确保各部分环节符合规范。

## 基础规范

### 模型：

- 头发模型的制作方式与服装类似。
- 通过**低模**+**UV规格化**+**引擎材质调整**即可呈现完整效果。
- 无需制作高模和贴图。

#### 模型制作

- 建议使用3ds Max制作模型。
- 头发模型分为**前发**HairA，**后发**HairB两个部分，两部分独立制作。
  
  ![img](https://arkimg.ark.online/1688436553111-1.png)
- **发型无法拆分或者头饰覆盖大部分头发区域的情况**，**统一归为后发**。
- **发饰跟随头部走，靠近后发区域的和后发合并，靠近前发区域的和前发合并**。

#### 前发，后发范围

- 符合**换装规范**，以便不同发型之间可以互相搭配。

#### 推荐面数：

前发：600三角面左右

后发：1700三角面左右

#### 模型命名：

前发：SK_Cartoon_ 性别_HairA _ [资源编号](./2-3-2-resource-number) 

后发：SK_Cartoon_ 性别_HairB _ [资源编号](./2-3-2-resource-number) 

### UV：

- UV拆分：头发部分需要多UV来实现，根据功能需求需要制作4个UV。

#### UV1：

##### 正常情况

- 配合UE中的材质实现头发颜色和渐变效果。
- UV需要按照上下顺序展开，头发UV的方向需要保持一致，UV精度需要保持一致。
  
  ![img](https://arkimg.ark.online/1688436553111-2.png)
- 使用T_HairChecker贴图文件来检查。
  - [点此下载](https://arkimg.ark.online/T_HairChecker.tga)

##### 特殊情况

- 对于发型有多个颜色或者无法通过模型实现细节时，可以在UV1上面绘制颜色贴图。
- 贴图只需绘制颜色和细节效果，贴图尺寸推荐256*256。
- 阴影效果，大勾边，高光是通过UV2,UV3,UV4实现。
- UV按照传统方式制作即可。

![img](https://arkimg.ark.online/1688984575509-1.png)



#### UV2：

- 实现内勾边和渐变效果，类似服装的UV1。
- 使用共用贴图T_Cartoon_ComResouce_Hair_Line_001，确认勾边和渐变的效果。
  
  [点此下载](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_Line_001.tga)
  
  ![img](https://arkimg.ark.online/1688436553111-5.png)
- 调节UV的位置和大小来实现黑边的粗细和形状。
- 方法和服装UV1一致。 
  
  ![img](https://arkimg.ark.online/1688436553111-6.png)

#### UV3：

- 制作头发阴影。
- 使用共用贴图T_Cartoon_ComResouce_Hair_Shadow_001，来实现一些细节的阴影。
  
  [点此下载](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_Shadow_001.tga)
  
  ![img](https://arkimg.ark.online/1688436553111-7.png)
- 通过调整UV的位置和形状来实现细节阴影的效果。
- 可以参考服装的UV3制作方式。
  
  ![img](https://arkimg.ark.online/1688436553112-8.png)

#### UV4：

- 制作高光。

- 使用共用贴图T_Cartoon_ComResouce_Hair_SP_XXX，来实现高光的效果。必须使用以下贴图
  - [高光贴图1（点此下载）](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_SP_001.tga)

  - [高光贴图2（点此下载）](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_SP_002.tga)

  - [高光贴图3（点此下载）](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_SP_003.tga)

  - [高光贴图4（点此下载）](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_SP_004.tga)

  - [高光贴图5（点此下载）](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_SP_005.tga)

  - [高光贴图6（点此下载）](https://arkimg.ark.online/T_Cartoon_ComResouce_Hair_SP_006.tga)

    ![img](https://arkimg.ark.online/1688436553112-9.png)
  
- 通过调整UV的位置来匹配高光的位置和形状。
  
  ![img](https://arkimg.ark.online/1688436553112-10.png)
  
- 现有6种不同造型的高光可以选择。

- 在匹配UV时尽量确保其余几种高光在模型上面也能正常显示。

![img](https://arkimg.ark.online/1688984716160-4.png)

### 贴图：

- 贴图使用Tga格式。

#### 贴图命名

- 前发：T_Cartoon_ 性别 _ HairA_[资源编号](./2-3-2-resource-number) 
- 后发：T_Cartoon_ 性别 _ HairB_[资源编号](./2-3-2-resource-number) 

贴图命名需和模型命名保持一致。

#### 贴图制作

- 使用T_Cartoon_HairBase.psd作为基础贴图模板。
  
  [贴图模板（点此下载）](https://arkimg.ark.online/T_Cartoon_HairBase.psd)
- 使用渐变层设置，选择第一个渐变样式
  
  - 编辑器暂只支持两种颜色渐变
  
  - 通过调整下方滑块的颜色设置头发颜色。
  
  - 通过调整滑块中间黑点控制渐变范围。
  
  ![img](https://arkimg.ark.online/1691138827128-2.png)
- 通过MAX的平面颜色模式观察效果。
  
  - 贴图通道选择UV1
  
  ![img](https://arkimg.ark.online/1691138827128-1.png)

### 材质球：

- 材质命名需符合材质插槽规范。
- 参考[通用规范](./2-2-2-general-specification) 第4部分。

### 顶点色：

#### 头发阴影顶点色制作

- 请使用球形法线插件制作，获得更好的效果。

![img](https://arkimg.ark.online/1688436553112-17.png)

##### 插件设置

- 使用所提供的插件。
  - [点此下载](https://arkimg.ark.online/hair_vertexcolor.zip)
- 制作一个简易的完全包裹头发的代理模型。
- 代理模型需要过渡光滑，必须是一体模型。

![img](https://arkimg.ark.online/1688984761183-7.png)

- 确认头发模型，在默认情况下顶点色为白色。
- 将插件拖入max中，操作此步凑时，**max版本必须2019**。

![img](https://arkimg.ark.online/1688984819671-12.png)

- 先选择头发模型，再选择代理模型，点击**初次计算**即可烘焙出代理模型的法线。

![img](https://arkimg.ark.online/1688436553112-22.png)

#### 拓展内容

- 若感觉默认计算方式不够好，可自行控制参数微调。
- 可节省的法线点积阙值：
  -  拉到最左边（-1）表示：原始法线不管在任何情况下都会被烘焙的代理模型法线替换。

  -  拉到中间（0）表示：原始法线和当前被烘焙的代理模型法线夹角超过90度的时候，使用原始法线，小于90度的时候，使用被烘焙的代理模型法线。

  -  拉到右边（1）表示：不管在任何情况下，都使用原始的法线。
- 全局目标法线融合比例：
  -  拉到最左边（0）表示：完全不融合，只使用原始法线。

  -  拉到中间（50%）表示：原始法线和当前被烘焙的代理模型法线按照50%和50%的比例融合。

  -  拉到右边（100%）表示：完全融合，使用被烘焙的代理模型法线。
- 通过调整**可节省的法线点积阙值**和**全局目标法线融合比例，**可以调整代理模型和原本头发模型法线方向的融合百分比。点击快速计算之后，会自动替换老的顶点颜色。  

### 模型法线与光滑组

- 完成模型顶点颜色制作之后，重置模型法线，重置光滑组。
- 为了保证材质勾边的效果正确，头发模型只能有一个光滑组。

## 换装规范

- 模型需满足换装范围，以便可以和其他头发资源搭配使用。
- **换装规则中的模型仅供范围参考，不作为布线规范或者造型参考使用。**
- 头发部件分为前发，后发。

### 换装范围模型下载：

**女性：**

[二次元女性换装范围（点此下载）](https://arkimg.ark.online/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A5%B3%E6%80%A7%E6%8D%A2%E8%A3%85%E8%8C%83%E5%9B%B4.max)

**男性：**

[二次元男性换装范围（点此下载）](https://arkimg.ark.online/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%94%B7%E6%80%A7%E6%8D%A2%E8%A3%85%E8%8C%83%E5%9B%B4.max)

- **换装规则中的模型仅供范围参考，不作为布线规范或者造型参考使用。**



### 前发

- 前发需要控制在前发范围内。

![img](https://arkimg.ark.online/1688436553112-24.png)

- 在前发范围内可根据发型做相应拓展。需要处理好与后发的层叠关系。

![img](https://arkimg.ark.online/1688436553112-25.png)

### 后发

- 下图为基础发盖模型。
- 请以此为基础制作后发。
- 通过合并基础发盖模型，后发向前延伸，可以更好的与其他的前发模型衔接

![img](https://arkimg.ark.online/1688984895091-15.png)

- 制作后发时需注意和前发相连接的部分。
- 一般情况下，相接部分前发覆盖后发。

![img](https://arkimg.ark.online/1688436553113-29.png)