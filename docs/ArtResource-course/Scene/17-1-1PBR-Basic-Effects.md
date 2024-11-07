# PBR基础效果

基础模式只提供黑白颜色去控制材质的PBR属性，如果你需要贴图控制PBR请看下章：pbr高级效果

金属度：

![img](https://arkimg.ark.online/1730180259956-15.gif)

粗糙度：

![img](https://arkimg.ark.online/1730180259954-1.gif)

## 关于PBR：

- 一种基于物理的渲染技术，通过模拟真实世界的光学和物理现象来提高渲染的真实感。
- 编辑器使用“金属度/粗糙度流程”

## 参数介绍：

重要参数：

![img](https://arkimg.ark.online/1730180259954-2.png)

- 漫反射颜色：
  - 可以理解为物体的基础色,即该物体本身颜色。
- 金属度强度：
  - 即材质金属度，值越大金属感越强，表示了反射时发生镜面反射和漫反射的光线的占比。
  - 金属度强度越大，一般金属物体的金属度比较大：0.7 ~ 1之间；
  - 金属度强度越小，一般非金属物质金属度比较小；0.02 ~ 0.05之间，宝石的大概0.08；（粗糙度不同会有不同表现）
  - 金属度强度越大，镜面反射的占比越大，漫反射diffuse占比越小。反之镜面反射的占比小，漫反射占比大。
  -  这个就为什么调整金属度会影响颜色的原因。
- 粗糙度强度：
  - 即材质粗糙度，值越大，越光滑。值越小，越粗糙。
  - 其与Smoothness（光滑度，也称为Glossiness光泽度）相反。其表示了物体表面的不规则程度。

## 质参数对照表：

物理模式参数材质推荐：

金属度从0到1

![img](https://arkimg.ark.online/1730180259954-3.png)

粗糙度从0到1

![img](https://arkimg.ark.online/1730180259954-4.png)

| 材质 | 截图                                                         | 颜色                | 金属度 | 粗糙度 |
| ---- | ------------------------------------------------------------ | ------------------- | :----- | ------ |
| 铁   | <img src="https://arkimg.ark.online/1730180259954-5.png" alt="img" style="zoom:25%;" /> | 0.5                 | 1      | 0.5    |
| 银   | <img src="https://arkimg.ark.online/3.jpg" alt="3" style="zoom:25%;" /> | 0.9                 | 1      | 0.4    |
| 铝   | <img src="https://arkimg.ark.online/1730180516620-46.jpeg" alt="img" style="zoom:25%;" /> | 0.9                 | 1      | 0.2    |
| 金   | <img src="https://arkimg.ark.online/2.jpg" alt="2" style="zoom:25%;" /> | (1.000,0.766,0.336) | 1      | 0.4    |
| 铜   | <img src="https://arkimg.ark.online/1730180259955-9.png" alt="img" style="zoom:25%;" /> | (0.955,0.637,0.538) | 1      | 0.45   |
| 铂   | <img src="https://arkimg.ark.online/1730180259955-10.png" alt="img" style="zoom:25%;" /> | (0.672,0.637,0.585) | 1      | 0.2    |

## 实际运用：

只有一张颜色贴图，但想要有pbr效果：

- 通常使用到大理石，单材质金属，等，表面无需很多变化的单一pbr材质
- 贴上自己的颜色图，调整金属度和粗糙度：

例一：

![img](https://arkimg.ark.online/1730180259955-11.png)

例二：

![img](https://arkimg.ark.online/1730180259955-12.png)

例三：

![img](https://arkimg.ark.online/1730180259955-13.png)

例四：

![img](https://arkimg.ark.online/1730180259955-14.png)

如果这个效果不够满意，请看下章PBR高级效果