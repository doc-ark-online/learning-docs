# 通用规范

## 服装换色

<video controls src="https://arkimg.ark.online/03%E8%A7%92%E8%89%B2%E7%AF%87%EF%BC%9A%E8%A7%92%E8%89%B2%E6%9C%8D%E8%A3%85%E6%8D%A2%E8%89%B2%E7%AE%80%E4%BB%8B.mp4" />

- 服装和发饰支持在编辑区内更换颜色和纹理。

### 各风格支持的类型与数量参照下表：

![image-20230704132359913](https://arkimg.ark.online/image-20230704132359913.png)

### 各风格换色的具体细节：

- 各风格控制换色区域的方式略有不同。
  - 二次元——通过服装 UV1的摆放
  - Lowpoly——通过服装 UV1的摆放
  - 写实——通过 MASK 贴图的通道控制
  - 欧美卡通——通过 MASK 贴图的通道控制
- 花纹可以自行创作。
  - 二次元——通过服装 UV2的摆放
  - Lowpoly——通过服装 UV2的摆放
  - 写实——通过 MASK 贴图的通道控制
  - 欧美卡通——通过 MASK 贴图的通道控制
- 贴花可以自行创作。
  - 二次元——通过服装 UV4的摆放
  - Lowpoly——通过服装 UV4的摆放
  - 写实——通过 MASK 贴图的通道控制
  - 欧美卡通——通过 MASK 贴图的通道控制
- 细节法线——仅 PBR 流程可用

## 妆容制作

<video controls src="https://arkimg.ark.online/03%E8%A7%92%E8%89%B2%E7%AF%87%EF%BC%9A%E7%AE%80%E5%8D%95%E7%9A%84%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A6%86%E5%AE%B9%E7%A4%BA%E4%BE%8B.mp4" />

- 针对高级人行形象的角色换妆。

### 可创作内容：

- 眉毛，睫毛，瞳孔，唇妆，面妆，眼妆。

### 妆容模板：

[二次元女性妆容制作（点此下载）](https://arkimg.ark.online/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A5%B3%E6%80%A7%E5%A6%86%E5%AE%B9%E5%88%B6%E4%BD%9C.spp)

[二次元男性妆容制作（点此下载）](https://arkimg.ark.online/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%94%B7%E6%80%A7%E5%A6%86%E5%AE%B9%E5%88%B6%E4%BD%9C.spp)

#### 尺寸和格式：

- 花纹贴图尺寸为256*256。
- TGA 格式24位。

#### 命名

- 各风格资源命名参考下表。
- 如果使用提供的 Substance Paniter 妆容模板制作，只需导出后自行设置[资源编号](./2-3-2-resource-number) 即可。

![img](https://arkimg.ark.online/1688986721131-5.png)

#### 制作方式

- 不同风格制作办法略有不同。（仅限高级人行形象）
- 我们提供了各个风格绘制妆容的 SubstancePainter 文件模板。
  - 打开 Substance Paniter 模板，选择妆容对应的纹理集。
  - 选择对应图层蒙版可以用笔刷进行绘制。
  - 输出时，确保图层的开启和关闭状态正确。（输出时，仅开启绿色图层，红色和黄色需要关闭）
    - ![img](https://arkimg.ark.online/1688447565275-2.png)
- 使用模板输出。
  - 输出目录自行选择，使用 Mw_Cartoon 妆容输出模板。文件类型 Tga。文件大小256。
    - ![img](https://arkimg.ark.online/1688447565270-1.png)
- 输出后自行设[资源编号](./2-3-2-resource-number)即可。

## 花纹和贴花

### 花纹和贴花制作介绍视频

##### 高级人形形象的花纹和贴花制作（上）

<video controls src="https://arkimg.ark.online/03%E8%A7%92%E8%89%B2%E7%AF%87%EF%BC%9A%E9%AB%98%E7%BA%A7%E4%BA%BA%E5%BD%A2%E5%BD%A2%E8%B1%A1%EF%BC%88V2%EF%BC%89%E7%9A%84%E8%8A%B1%E7%BA%B9%E5%92%8C%E8%B4%B4%E8%8A%B1%E5%88%B6%E4%BD%9C%EF%BC%88%E4%B8%8A%EF%BC%89.mp4" />

##### 高级人形形象的花纹和贴花制作（下）

<video controls src="https://arkimg.ark.online/03%E8%A7%92%E8%89%B2%E7%AF%87%EF%BC%9A%E9%AB%98%E7%BA%A7%E4%BA%BA%E5%BD%A2%E5%BD%A2%E8%B1%A1%EF%BC%88V2%EF%BC%89%E7%9A%84%E8%8A%B1%E7%BA%B9%E5%92%8C%E8%B4%B4%E8%8A%B1%E5%88%B6%E4%BD%9C%EF%BC%88%E4%B8%8B%EF%BC%89.mp4" />

### 花纹贴图：

- 花纹只支持四方连续贴图。
- 可以在编辑器内调整大小和旋转方向。

#### 尺寸和格式：

- 花纹贴图尺寸为128*128。
- TGA 格式24位。

#### 命名

- 命名：T_Cartoon_ComResouce_Decals_[资源编号](./2-3-2-resource-number) 

#### 呈现方式：

- 二次元——通过服装 UV2的摆放。
- Lowpoly——通过服装 U2的摆放。
- 写实——通过 MASK 贴图的 RGBA 四个通道。
- 欧美卡通——通过 MASK 贴图的 RGBA 四个通道。

### 贴花贴图：

- 贴花可以用来制作一些小图案或者 logo。

#### 尺寸和格式：

- 贴花大小为128*128
- TGA 格式32位
  - RGB 为贴花的颜色
  - A 为贴花的 Mask

#### 命名

- 命名：T_Cartoon_ComResouce_Decals_[资源编号](./2-3-2-resource-number)

#### 呈现方式：

- 二次元——通过服装 UV4的摆放。
- Lowpoly——通过服装 U4的摆放。
- 写实——通过 MASK 贴图的 RG 两个通道。
- 欧美卡通——通过 MASK 贴图的 RG 两个通道+编辑器参数调节

## 材质球插槽命名：

- 高级人型形象角色资源通用：

  - 需要在3Dmax 中赋予材质，并且命名正确。

  - 材质球命名参考下表中的分类。

  |     上装     |   ClothUpper    |
  | :----------: | :-------------: |
  |   上衣透贴   | ClothUpper_Mask |
  |     下装     |   ClothLower    |
  |   下装透贴   | ClothLower_Mask |
  |     手套     |      Glave      |
  |   手套透贴   |   Glave_Mask    |
  |     鞋子     |   ClothShoes    |
  |   鞋子透贴   | ClothShoes_Mask |
  | 身体部分裸模 |      Body       |
  |     头发     |      Hair       |
  |     发饰     |     HairAcc     |
  |   发饰透贴   |  HairAcc_Mask   |