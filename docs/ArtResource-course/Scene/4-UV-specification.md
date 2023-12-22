# UV 规范

## 通用 UV 规范视频

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9A%E9%80%9A%E7%94%A8UV%E8%A7%84%E8%8C%83.mp4" />


## UV 规范（1U）：

- 请严格遵循 uv 空间不浪费。
- uv 不拉伸、不扭曲。
- uv 之间的间隔：256贴图需要大于2个像素,512贴图需要大于4个像素，1024贴图需要大于6个像素。
- uv 必须在0-1uv 象限内（即 uv 框范围内），四方/二方连续贴图的 uv 可以重叠、可以超出边框。
- 物件 uv 能打直的都打直，摆满，尽最大程度提高 uv 利用率（合理利用对称，公用等）

#### 低多边形1套 UV 规范（特殊情况）

编辑器lowpoly三种模式：
![image-20231222144955039](https://arkimg.ark.online/image-20231222144955039.png)

- **颜色模式**：1u 不需要展开，只需要放 UV 框第一象限里面不同的四个位置。例下图
  <img src="https://arkimg.ark.online/image-20231222112802477.png" alt="image-20231222112802477" style="zoom: 67%;" /><img src="https://arkimg.ark.online/1-1703222393584-5.jpg" alt="1" style="zoom:67%;" />

[贴图区域样例(点此下载)](https://arkimg.ark.online/texture.tga) 

- **渐变颜色模式：**可以接受出现渐变情况（四区域内上下渐变）。例下图
  ![image-20231222143735126](https://arkimg.ark.online/image-20231222143735126.png)<img src="https://arkimg.ark.online/%E6%9C%AA%E6%A0%87%E9%A2%98-3.jpg" alt="未标题-3" style="zoom:67%;" />

[贴图区域样例(点此下载)](https://arkimg.ark.online/texture2.tga) 

此两种模式提供贴图样例仅用于dcc观察，摆放UV。实际lowpoly并不需要贴图（更省性能），在编辑器效果入下图。<img src="https://arkimg.ark.online/image-20231222144451503.png" alt="image-20231222144451503" style="zoom: 33%;" /><img src="https://arkimg.ark.online/%E6%9C%AA%E6%A0%87%E9%A2%98-5.jpg" alt="未标题-5" style="zoom:33%;" />

**贴图模式：**你可以贴一张你需要的颜色贴图，将你的模型UV放在对应的位置。
<img src="https://arkimg.ark.online/image-20231222145324975.png" alt="image-20231222145324975" style="zoom:50%;" />

## UV 规范（2u）：

**二套 UV 用在编辑器里面烘培灯光贴图，合并功能等**。

- 全展，uv 摆满。
- uv 展成整体。
  
  ![img](https://arkimg.ark.online/1687767449151-2.jpeg)
- uv 无重叠，检查方式如下图

![img](https://arkimg.ark.online/1687767449151-3.png)

- uv 无翻转，检查方式如下图

![img](https://arkimg.ark.online/1687767449151-4.png)

- 看不见的面（跟地面衔接的底面）需要手动缩小至少四分之一
- 类似点的面（很小的面）需要手动放大至少一倍

### max 检查并删除多余 uv 通道：

![img](https://arkimg.ark.online/1687767449152-5.png)

![img](https://arkimg.ark.online/1687767449152-6.png)

![img](https://arkimg.ark.online/1687767449152-7.png)

![img](https://arkimg.ark.online/1687767449152-8.png)

**静态模型只能有2套 uv，不能有多余的 uv 通道浪费。**