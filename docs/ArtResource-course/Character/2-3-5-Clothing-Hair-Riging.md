# 模型绑定

## 发型绑定教程

- 创建头发挂点Hair_Root。对齐人体骨骼Hair_Root挂点，自建挂点无旋转和位移坐标

- 注意，两个挂点名字一样，一个是标准骨骼中自带的（不可修改）。一个是根据头发模型自行创建的。

![img](https://arkimg.ark.online/1730186321876-16.png)

- 根据发型走势，创建骨骼。根据前后发模型，分别创建HairA骨骼链和HairB骨骼链。如果不分前后发则只需要HairB的骨骼链

![img](https://arkimg.ark.online/1730186321874-1.png)

- 分别对前发，后发添加蒙皮命令Skin，添加所对应骨骼链HairA和骨骼链HairB
  
  ![img](https://arkimg.ark.online/1730186321874-2.png)
- 单个模型顶点最多受4节骨骼影响。（DCC软件中默认值均＞4，需要手动修改为4）
- 可通过调整骨骼关键帧来查看绑定权重信息是否穿插/明显结构异常，进行针对性调整优化权重信息。

### 发型绑定全流程

<video controls src="https://arkimg.ark.online/%E5%AE%8C%E6%95%B4%E4%B8%8D%E5%B8%A6%E5%8A%A8%E6%80%81%E9%AA%A8%E9%AA%BC%E5%A4%B4%E5%8F%91%E7%BB%91%E5%AE%9A%E5%AF%BC%E5%87%BA%E5%85%A8%E6%B5%81%E7%A8%8B.mp4" />

## 服装绑定教程

- 选择对应的局内或局外骨骼进行绑定制作.
- 检查模型朝向，软件正视图，模型面部正方向一致即可。检查模型坐标是否归零（X/Y/Z=0/0/0），发现未归零及时调整。
  
  ![img](https://arkimg.ark.online/1730186321874-3.png)
- 检查单位设置，统一设置为厘米
  
  ![img](https://arkimg.ark.online/1730186321874-4.png)
- 模型骨骼匹配蒙皮：根据模型各个**关节点**的位置需要与**骨架位置匹配**。**禁止调整骨骼，层级，命名，大小等。**
  
  ![img](https://arkimg.ark.online/1730186321874-5.png)
- 对角色添加蒙皮命令Skin，添加所需骨骼。
- 骨骼Bip_01，根节点Root不参与蒙皮绑定。
- 单个模型顶点最多受3节骨骼影响。（DCC软件中默认值均＞4，需要手动修改为3）

![img](https://arkimg.ark.online/1730186321874-6.png)

- 可通过调整骨骼关键帧来查看绑定权重信息是否穿插/明显结构异常，进行针对性调整优化权重信息。
- 导入权重检查动画：查看模型与骨骼匹配是否有明显拉伸/穿插/破面等情况。
- [点击下载：模型蒙皮权重检查动画](https://arkimg.ark.online/%E6%A8%A1%E5%9E%8B%E8%92%99%E7%9A%AE%E6%9D%83%E9%87%8D%E6%A3%80%E6%9F%A5%E5%8A%A8%E7%94%BB.zip)
  
  ![img](https://arkimg.ark.online/1730186321874-7.png)

<video controls src="https://arkimg.ark.online/20240723154816_rec_%20(2).mp4" />

### 裸模衔接处权重规范：

- 裸模衔接处务必以此为准，不然动画播放时会破面或穿插

- 服装部件的接缝处。权重需要保持一致。

  - 例如：腰部接缝上装部分模型切口处权重 Spine_01:1 下装部分模型切口处权重Spine_01:1

  | 接缝位置         | **女性权重参考图**                                    | **蒙皮数值规范**                       | **男性权重参考图**                                    | **蒙皮数值规范**                   |
  | ---------------- | ----------------------------------------------------- | -------------------------------------- | ----------------------------------------------------- | ---------------------------------- |
  | 上装脖子处       | ![img](https://arkimg.ark.online/1730278327153-8.png) | **Head:0.5**<br />**Neck_01:0.5**      | ![img](https://arkimg.ark.online/1730278327151-1.png) | **Head:0.5**<br />**Neck_01:0.5**  |
  | 手套与上装衔接处 | ![img](https://arkimg.ark.online/1730278327151-2.png) | **Hand_L:0.4**<br />**Lowerarm_L:0.6** | ![img](https://arkimg.ark.online/1730278327152-3.png) | **Hand_L:0**<br />**Lowerarm_L:1** |
  | 上装与下装衔接处 | ![img](https://arkimg.ark.online/1730278327152-4.png) | **Spine_01:1**                         | ![img](https://arkimg.ark.online/1730278327152-5.png) | **Spine_01:1**                     |
  | 下装与鞋子衔接处 | ![img](https://arkimg.ark.online/1730278327152-6.png) | **Calf_L:1**                           | ![img](https://arkimg.ark.online/1730278327152-7.png) | **Calf_L:1**                       |

### 服装绑定全流程（此处以上装为例）：

<video controls src="https://arkimg.ark.online/%E8%BF%9E%E8%A1%A3%E8%A3%99%E7%BB%91%E5%AE%9A%E5%AF%BC%E5%87%BA%E5%85%A8%E6%B5%81%E7%A8%8B.mp4" />