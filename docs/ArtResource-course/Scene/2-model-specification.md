# 模型规范

## 静态模型资源规范视频

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9A%E9%9D%99%E6%80%81%E6%A8%A1%E5%9E%8B%E8%B5%84%E6%BA%90%E8%A7%84%E8%8C%83.mp4" />

## 模型基本规范

- 模型需要封口。

![img](https://arkimg.ark.online/1687938141703-6.png)

- 单面模型需要制作双面。

![img](https://arkimg.ark.online/1687938141703-1.png)

- 正确使用光滑组，

![img](https://arkimg.ark.online/1687938141703-2.png)

- 正确调整模型法线朝向

![img](https://arkimg.ark.online/1687938141703-3.png)

- 无多边面（≥4）

![img](https://arkimg.ark.online/1687938141703-4.png)

- 无废点

  ![img](https://arkimg.ark.online/1688102827789-5.jpeg)

- 无重叠面

  ![img](https://arkimg.ark.online/1688103146121-10.png)

检查多边面方式：

![img](https://arkimg.ark.online/1687938141703-5.png)

- STL  check检查模型是否有错误

![img](https://arkimg.ark.online/1687252234945-6.png)

- 重置模型。

  ![img](https://arkimg.ark.online/1687252234945-7.png)

## 模型正面：

在max和blender和里面，物体正面朝向为-Y，（3ds max里面正视图）如图所示。

![img](https://arkimg.ark.online/1687252234945-8.jpeg)

**（如果朝向设置错误会导致编辑器里面截图显示的效果不对，可能辨认不清物体）**

**（maya坐标需要调整成3ds max坐标）**

![img](https://arkimg.ark.online/1687252234945-9.png)

## 模型坐标位置和模型朝向（推荐软件 3ds max）

- 所有模型坐标轴位置都必须在（0，0，0）

- 合理设置坐标轴位置和朝向（详情请看下表）

|            | 坐标位置                           | 模型左右朝向                       | 示例截图                                               |                                                        |
| ---------- | ---------------------------------- | ---------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| 普通模型   | 居中最底                           | 不限制                             | ![img](https://arkimg.ark.online/1687252234946-10.png) |                                                        |
| 挂架物体   | 支点上                             | 不限制                             | ![img](https://arkimg.ark.online/1687252234946-11.png) |                                                        |
| 门         | 开门的支点上                       | 不限制                             | ![img](https://arkimg.ark.online/1687252234946-12.png) | ![img](https://arkimg.ark.online/1687252234946-13.png) |
| 手持物     | 手握位置，                         | 刀刃，枪头向右。                   | ![img](https://arkimg.ark.online/1687252234946-14.png) | ![img](https://arkimg.ark.online/1687252234946-15.png) |
| 子弹导弹等 | 坐标放在物体头部中心位置           | 子弹、导弹、等发射物等发射方向朝右 | ![img](https://arkimg.ark.online/1687252234946-16.png) |                                                        |
| 载具类     | 居中最底，船类等可以放在水平线位置 | 行驶方向朝右                       | ![img](https://arkimg.ark.online/1687252234946-17.png) | ![img](https://arkimg.ark.online/1687252234946-18.png) |
| 轮子       | 居中                               | 不限制                             | ![img](https://arkimg.ark.online/1687252234946-19.png) |                                                        |

- 正确的设置坐标位置和朝向，能快速的在编辑器显示合理的使用效果。


![img](https://arkimg.ark.online/1687252234946-20.png)

## 道具手握尺寸规范：

|                      | 半径   | 图示                                                   | FBX                                                          |
| -------------------- | ------ | ------------------------------------------------------ | ------------------------------------------------------------ |
| 二次元/写实/欧美卡通 | ≤2cm   | ![img](https://arkimg.ark.online/1687252234946-21.png) | [普通风格手模型(点此下载)](https://arkimg.ark.online/SM_100000001_CartoonHand_AA001.fbx) |
| lowpoly              | ≤3.5cm | ![img](https://arkimg.ark.online/1687252234946-22.png) | [Lowpoly手模型(点此下载)](https://arkimg.ark.online/SM_100000001_LowpolyHand_AA001.fbx) |

