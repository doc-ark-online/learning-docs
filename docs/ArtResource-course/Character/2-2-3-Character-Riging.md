# 模型绑定

## 骨骼分类

![img](https://arkimg.ark.online/1730277544937-1.png)

## 骨骼介绍

### 人形骨骼：

- 可共用该骨架下的资源库动画资源。
- 可通用换装资源，但效果会有偏差。
- 支持对骨骼进行旋转、缩放、位移，注意缩放后需要进行归1处理。

![img](https://arkimg.ark.online/1725794918510-35.png)

### 多足骨骼：

- 不同的动物对应不同的骨骼，可在下列表格中找到对应骨骼模板。
- 支持同类型动物骨骼匹配，可共用该骨架下的资源库动画资源。
- 支持对骨骼进行旋转、缩放、位移，注意缩放后需要进行归1处理。

| **四足，直立足：熊类/大象/犀牛等后腿结构与人类似的。** | ![img](https://arkimg.ark.online/1730277573843-8.png)  |
| ------------------------------------------------------ | :----------------------------------------------------: |
| **四足，后足反足：猫科/犬科/鹿等后腿结构的。**         | ![img](https://arkimg.ark.online/1730277584111-11.png) |

### 自定义骨骼：

- 支持基于模型造型搭建任意骨骼，自由度高
- 单个骨骼模型资源骨骼数量不能超过75根
- 不支持素材库中通用人形/多足下的动画

## 骨骼核对表：

| **骨骼名称** **(编号顺序)** | **角色/NPC/** | **四足，直立足** | **四足，后足反足** |
| :-------------------------: | :-----------: | :--------------: | :----------------: |
|            **0**            |     Root      |       Root       |        Root        |
|            **1**            |    Bip_01     |      Bip_01      |       Bip_01       |
|            **2**            |    Pelvis     |      Pelvis      |       Pelvis       |
|            **3**            |   Spine_01    |     Spine_01     |      Spine_01      |
|            **4**            |   Spine_02    |     Spine_02     |      Spine_02      |
|            **5**            |   Spine_03    |     Spine_03     |      Spine_03      |
|            **6**            |    Neck_01    |     Neck_01      |      Neck_01       |
|            **7**            |     Head      |       Head       |        Head        |
|            **8**            |    HeadNub    |    Ears_R_01     |     Ears_R_01      |
|            **9**            |     Eye_R     |    Ears_R_02     |     Ears_R_02      |
|           **10**            |     Eye_L     |    Ears_R_03     |     Ears_R_03      |
|           **11**            |     Mouth     |    Ears_L_01     |     Ears_L_01      |
|           **12**            |   Eyelid_R    |    Ears_L_02     |     Ears_L_02      |
|           **13**            |   Eyelid_L    |    Ears_L_03     |     Ears_L_03      |
|           **14**            |   Eyebrow_R   |      Eye_R       |       Eye_R        |
|           **15**            |   Eyebrow_L   |      Eye_L       |       Eye_L        |
|           **16**            |   Hair_Root   |      Mouth       |       Mouth        |
|           **17**            |  Chest_01_R   |    Clavicle_L    |     Clavicle_L     |
|           **18**            |  Chest_02_R   |    UpperArm_L    |     UpperArm_L     |
|           **19**            |  Clavicle_R   |    Forearm_L     |     Forearm_L      |
|           **20**            |  UpperArm_R   |      Hand_L      |       Hand_L       |
|           **21**            |  Lowerarm_R   |    Thumb_01_L    |     Thumb_01_L     |
|           **22**            |    Hand_R     |    Clavicle_R    |     Clavicle_R     |
|           **23**            |  Thumb_01_R   |    UpperArm_R    |     UpperArm_R     |
|           **24**            |  Thumb_02_R   |    Forearm_R     |     Forearm_R      |
|           **25**            |  Thumb_03_R   |      Hand_R      |       Hand_R       |
|           **26**            |  ThumbNub_R   |    Thumb_01_R    |     Thumb_01_R     |
|           **27**            |  Index_01_R   |     Thigh_R      |      Thigh_R       |
|           **28**            |  Index_02_R   |      Calf_R      |       Calf_R       |
|           **29**            |  Index_03_R   |      Foot_R      |    HorseLink_R     |
|           **30**            |  IndexNub_R   |      Toe_R       |       Foot_R       |
|           **31**            |  Middle_01_R  |     Thigh_L      |       Toe_R        |
|           **32**            |  Middle_02_R  |      Calf_L      |      Thigh_L       |
|           **33**            |  Middle_03_R  |      Foot_L      |       Calf_L       |
|           **34**            |  MiddleNub_R  |      Toe_L       |    HorseLink_L     |
|           **35**            |   Ring_01_R   |     Tail_01      |       Foot_L       |
|           **36**            |   Ring_02_R   |     Tail_02      |       Toe_L        |
|           **37**            |   Ring_03_R   |     Tail_03      |      Tail_01       |
|           **38**            |   RingNub_R   |     Tail_04      |      Tail_02       |
|           **39**            |  Pinky_01_R   |                  |      Tail_03       |
|           **40**            |  Pinky_02_R   |                  |      Tail_04       |
|           **41**            |  Pinky_03_R   |                  |                    |
|           **42**            |  PinkyNub_R   |                  |                    |
|           **43**            | Lower_R_Root  |                  |                    |
|           **44**            |  Clavicle_L   |                  |                    |
|           **45**            |  UpperArm_L   |                  |                    |
|           **46**            |  Lowerarm_L   |                  |                    |
|           **47**            |    Hand_L     |                  |                    |
|           **48**            |  Thumb_01_L   |                  |                    |
|           **49**            |  Thumb_02_L   |                  |                    |
|           **50**            |  Thumb_03_L   |                  |                    |
|           **51**            |  ThumbNub_L   |                  |                    |
|           **52**            |  Index_01_L   |                  |                    |
|           **53**            |  Index_02_L   |                  |                    |
|           **54**            |  Index_03_L   |                  |                    |
|           **55**            |  IndexNub_L   |                  |                    |
|           **56**            |  Middle_01_L  |                  |                    |
|           **57**            |  Middle_02_L  |                  |                    |
|           **58**            |  Middle_03_L  |                  |                    |
|           **59**            |  MiddleNub_L  |                  |                    |
|           **60**            |   Ring_01_L   |                  |                    |
|           **61**            |   Ring_02_L   |                  |                    |
|           **62**            |   Ring_03_L   |                  |                    |
|           **63**            |   RingNub_L   |                  |                    |
|           **64**            |  Pinky_01_L   |                  |                    |
|           **65**            |  Pinky_02_L   |                  |                    |
|           **66**            |  Pinky_03_L   |                  |                    |
|           **67**            |  PinkyNub_L   |                  |                    |
|           **68**            | Lower_L_Root  |                  |                    |
|           **69**            |  Chest_01_L   |                  |                    |
|           **70**            |  Chest_02_L   |                  |                    |
|           **71**            |  Cloak_Root   |                  |                    |
|           **72**            |  Skirt_Root   |                  |                    |
|           **73**            |    Thigh_L    |                  |                    |
|           **74**            |    Calf_L     |                  |                    |
|           **75**            |    Foot_L     |                  |                    |
|           **76**            |     Toe_L     |                  |                    |
|           **77**            |   ToeNub_L    |                  |                    |
|           **78**            |    Thigh_R    |                  |                    |
|           **79**            |    Calf_R     |                  |                    |
|           **80**            |    Foot_R     |                  |                    |
|           **81**            |     Toe_R     |                  |                    |
|           **82**            |   ToeNub_R    |                  |                    |
|           **83**            | Skirt_01_Root |                  |                    |

## 绑定规格：

- 使用标准骨骼文件进行模型适配。
- 不能修改骨骼的缩放属性值，不能新增或者删除骨骼，不能修改骨骼层级，不能修改骨骼命名
- 检查模型朝向，软件正视图，模型面部正方向一致即可。检查模型坐标是否归零（X/Y/Z=0/0/0），发现未归零及时调整。
- 检查单位设置，统一设置为厘米。

### 角色/NPC：

- 根据模型各个**关节点**的位置需要与**骨架位置匹配**。
  
  <img src="https://arkimg.ark.online/1725794918510-40.png" alt="img" style="zoom: 80%;" />
- 对角色添加蒙皮命令Skin，添加所需骨骼。
- 骨骼Bip_01，根节点Root不参与蒙皮绑定。
- 单个模型顶点最多受3节骨骼影响。（DCC软件中默认值均＞4，需要手动修改为3）

![img](https://arkimg.ark.online/1730277606010-14.png)

- 可通过调整骨骼关键帧（退出骨骼编辑模式）来查看绑定权重信息是否穿插/明显结构异常，进行针对性调整优化权重信息。

  <video controls src="https://arkimg.ark.online/20240728141654_rec_%20(1).mp4" />

### 多足：

- 对角色添加蒙皮命令Skin，添加所需骨骼。
- 骨骼Bip_01，根节点Root不参与蒙皮绑定。
- 单个模型顶点最多受3节骨骼影响。（DCC软件中默认值均＞4，需要手动修改为3）
- 可通过调整骨骼关键帧（退出骨骼编辑模式）来查看绑定权重信息是否穿插/明显结构异常，进行针对性调整优化权重信息。

![img](https://arkimg.ark.online/1725794918510-42.png)