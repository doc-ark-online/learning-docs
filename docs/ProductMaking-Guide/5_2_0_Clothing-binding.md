# 服装绑定

### 绑定基础设置

#### 设置模型顶点受骨骼影响限制，参考下图设置，模型顶点受骨骼影响数需≤4。![BDGF](https://arkimg.ark.online/BDGF-1740537613695-4.png)

### 服装动态骨骼

带物理晃动效果的服装需要自行搭建动态骨骼，如不需要可直接绑定到对应身体部位即可。

<video controls src="https://arkimg.ark.online/服装动态骨骼介绍.mp4" />

### 动态骨骼命名规范

请按照下列规范设置骨骼，当不符合下列标准时，会导致动态骨骼无效或效果异常。
- 骨骼需要进行归1处理，不得带有缩放值。
- 单个部位FBX模型动态骨骼上限为100根。
- 骨骼命名不要用软件自动生成的命名，建议添加一些独特的命名或者部件做前缀
- 带晃动效果骨骼第一根骨骼节点命名必须包含后缀“_Dynphy”。
- 末端骨骼命名必须包含后缀“_Nub ”。
裙子、桶袖子等 建议根据模型制作8条动态骨骼（长度一致）保证效果（4条/6条不过膝短裙可用）。
- 建议长裙、短裙、蓬蓬裙等骨骼按照顺时针顺序排布搭建，保证骨骼长短一致坐标轴朝向一致，且只能有一个父级，否则无法识别为一圈骨骼。（其它非桶形部件可按规范搭建）。
- 建议命名中通过添加_F（前）、_FR（前右）、_R（右）、_BR（后右）、_B（后）、_BL（后左）、_L（左）、_FL（前左）等命名字段辅助定位骨骼方向。![fw](https://arkimg.ark.online/fw-1740476574164-8.png)


####  裸模衔接处权重。

- 裸模衔接处务必以此为准，不然动画播放时会**破面**或**穿插**。

- 服装部件的**接缝处**。权重需要**保持一致**。

- 例如：腰部接缝上装部分模型切口处权重 Spine_01：1， 下装部分模型切口处权重Spine_01：1。

  |     接缝位置     |                        女性权重参考图                        |              蒙皮数值               |                        男性权重参考图                        |               蒙皮数值               |
  | :--------------: | :----------------------------------------------------------: | :---------------------------------: | :----------------------------------------------------------: | :----------------------------------: |
  |    上装脖子处    | <img src="https://arkimg.ark.online/1740381224265-3.png" alt="img" style="zoom:25%;" /> | Head:<br />(0.5) <br/>Neck_01:(0.5) | <img src="https://arkimg.ark.online/1740381224265-4.png" alt="img" style="zoom:25%;" /> | Head: <br />(0.5) <br/>Neck_01:(0.5) |
  | 手套与上装衔接处 | <img src="https://arkimg.ark.online/1740381224266-5.png" alt="img" style="zoom:25%;" /> | Hand_L: (0.4)<br/> Lowerarm_L:(0.6) | <img src="https://arkimg.ark.online/1740381224266-6.png" alt="img" style="zoom:25%;" /> | Hand_L: (0)   <br/>Lowerarm_L:   (1) |
  | 上装与下装衔接处 | <img src="https://arkimg.ark.online/1740381224266-7.png" alt="img" style="zoom:25%;" /> |           Spine_01:  (1)            | <img src="https://arkimg.ark.online/1740381224266-8.png" alt="img" style="zoom:25%;" /> |            Spine_01:  (1)            |
  | 下装与鞋子衔接处 | <img src="https://arkimg.ark.online/1740381224266-9.png" alt="img" style="zoom:25%;" /> |            Calf_L:  (1)             | <img src="https://arkimg.ark.online/1740381224266-10.png" alt="img" style="zoom:25%;" /> |             Calf_L:  (1)             |

# 教程：服装样例（连衣裙）

### 3dsMax：

- 导入官方提供的基础骨骼，基于基础模型搭建服装骨骼。

   ![img](https://arkimg.ark.online/1740381224266-11.png)
- 按连衣裙模型走势搭建动态骨骼，按规范命名，并将动态骨骼连接到脊柱Spine_01下。

   ![img](https://arkimg.ark.online/1740381224266-12.png)
- 选择模型添加绑定蒙皮命令“Skin”并添加对应的动态骨骼，选择模型顶点进行绑定蒙皮。

   ![img](https://arkimg.ark.online/1740381224266-13.png)
- 权重分配后可旋转骨骼检查模型蒙皮是否合理。

   ![img](https://arkimg.ark.online/1740381224266-14.png)
- 完成权重调整后，导出为FBX资源以备用。


### Maya:

- 导入官方提供的基础骨骼，基于基础模型搭建服装骨骼。

   ![img](https://arkimg.ark.online/1740381224267-16.png)
- 选择装备面板创建骨骼或点击左侧顶部骨架面板按模型走势创建骨骼，并将动态骨骼链接到Spine_01下。

   ![img](https://arkimg.ark.online/1740381224267-17.png)
- 骨骼搭建完成后调整骨骼层级，按规范给骨骼命名，并确认裙子动态骨骼朝向一致（如图骨骼对象坐标Y轴向外，其它骨骼也须保持一致）。

   ![img](https://arkimg.ark.online/1740381224267-18.png)
- 选中模型点击顶部蒙皮面板选择“绑定蒙皮”，单个模型顶点最大受4根骨骼影响。

   ![img](https://arkimg.ark.online/1740381224267-19.png)
- 选择模型与相关联的骨骼，调整好蒙皮选项，点击绑定蒙皮。

   ![img](https://arkimg.ark.online/1740381224267-20.png)
- 旋转裙子骨骼检查权重，针对不合理的权重进行手动调整。

   ![img](https://arkimg.ark.online/1740381224267-21.png)

- 完成权重调整后，按导出设置导出该部位FBX。

###### MAYA服装骨骼搭建绑定全流程：

- 动态骨骼服装搭建绑定导出全流程

<video controls src="https://arkimg.ark.online/MAYA%E8%A3%99%E5%AD%90%E7%BB%91%E5%AE%9A%E5%85%A8%E6%B5%81%E7%A8%8B.mp4" />

# 资源导出

- 需要导出为FBX格式文件。
- 资源从DCC软件中导出，包含模型+骨骼（含动态骨骼）。
- 导出后即可进入口袋方舟进行资源上传（配置选择对应动态骨骼模板）。

### 导出设置：服装导出FBX通用

- 选择对应模型部位与骨骼（目标模型，骨骼，动态骨骼及末端）。
- 轴向:Up Axis:Z-up,类型：Type:Binary
- 动画面板不勾选:Animation
  ######  3dsMAX:![img](https://arkimg.ark.online/1740381224267-22.png)

  ######  Maya：![img](https://arkimg.ark.online/1740381224267-23.png)

  ######  Blender:![img](https://arkimg.ark.online/1740381224267-24.png)
