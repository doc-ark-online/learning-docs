# UV规范

## 通用UV规范视频

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9A%E9%80%9A%E7%94%A8UV%E8%A7%84%E8%8C%83.mp4" />


## UV规范（1U）：

- 请严格遵循uv空间不浪费。
- uv不拉伸、不扭曲。
- uv之间的间隔：256贴图需要大于2个像素,512贴图需要大于4个像素，1024贴图需要大于6个像素。
- uv必须在0-1uv象限内（即uv框范围内），四方/二方连续贴图的uv可以重叠、可以超出边框。
- 物件uv能打直的都打直，摆满，尽最大程度提高uv利用率（合理利用对称，公用等）

#### 低多边形1套UV规范（特殊情况）

- 1u不需要展开，只需要放UV框第一象限里面不同的四个位置。例下图一
- 使用纯色情况下一个材质只能有4个颜色（允许有多维质材质）
- 可以接受出现渐变情况（四区域内上下渐变）。例下图二

![img](https://arkimg.ark.online/1688016835296-2.png)

![img](https://arkimg.ark.online/1688016835296-1.png)

## UV规范（2u）：

**二套UV用在编辑器里面烘培灯光贴图，合并功能等**。

- 全展，uv摆满。
- uv展成整体。
  
  ![img](https://arkimg.ark.online/1687767449151-2.jpeg)
- uv无重叠，检查方式如下图

![img](https://arkimg.ark.online/1687767449151-3.png)

- uv无翻转，检查方式如下图

![img](https://arkimg.ark.online/1687767449151-4.png)

- 看不见的面（跟地面衔接的底面）需要手动缩小至少四分之一
- 类似点的面（很小的面）需要手动放大至少一倍

### max检查并删除多余uv通道：

![img](https://arkimg.ark.online/1687767449152-5.png)

![img](https://arkimg.ark.online/1687767449152-6.png)

![img](https://arkimg.ark.online/1687767449152-7.png)

![img](https://arkimg.ark.online/1687767449152-8.png)

**静态模型只能有2套uv，不能有多余的uv通道浪费。**