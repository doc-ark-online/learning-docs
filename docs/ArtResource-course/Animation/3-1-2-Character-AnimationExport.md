# 动画导出

## 通用规范：

- 需要导出为FBX格式文件。
- 骨骼名称不能修改，骨骼层级不能修改，骨骼数量不能修改
- 动画导出时，不选择模型
- 动画导出时，需要根据所使用骨骼，核对骨骼数量表。
- 人形骨骼数：
  - 人形角色/NPC/ = 84节（含Root/挂点/末端骨骼）
- 多足骨骼数：
  - 四足，直立足= 39节骨骼（含Root）
  - 四足，后足反足 = 41节骨骼（含Root）

### 导出流程：

- 选择所有骨骼+根节点Root，输出FBX（案例截图基于**3D** **max**）。
  
  ![img](https://arkimg.ark.online/1730189617640-7.png)![img](https://arkimg.ark.online/1730189617639-1.png)
- 选择导出命令。

![img](https://arkimg.ark.online/1730189617639-2.png)![img](https://arkimg.ark.online/1730189617639-3.png)

- 按规范给动画资源命名。

![img](https://arkimg.ark.online/1730189617640-4.png)![img](https://arkimg.ark.online/1730189617640-5.png)

### 导出设置：

- 勾选Animation、
- 勾选Bake Animation、
- 勾选Skins、
- 勾选Morphs、
- Up Axis：Z-up
- Type:Binary

![img](https://arkimg.ark.online/1730342037639-1.png)

- 导出后即可进入口袋方舟进行资源上传
  - [服装部件/角色NPC/四足/自定义骨骼动画导入上传](../Upload/0-0-Role)


## 骨骼核对表：

| **骨骼名称** **(编号顺序)** | **角色/NPC/** | **四足，直立足** | **四足，后足反足** |
| --------------------------- | ------------- | ---------------- | ------------------ |
| **0**                       | Root          | Root             | Root               |
| **1**                       | Bip_01        | Bip_01           | Bip_01             |
| **2**                       | Pelvis        | Pelvis           | Pelvis             |
| **3**                       | Spine_01      | Spine_01         | Spine_01           |
| **4**                       | Spine_02      | Spine_02         | Spine_02           |
| **5**                       | Spine_03      | Spine_03         | Spine_03           |
| **6**                       | Neck_01       | Neck_01          | Neck_01            |
| **7**                       | Head          | Head             | Head               |
| **8**                       | HeadNub       | Ears_R_01        | Ears_R_01          |
| **9**                       | Eye_R         | Ears_R_02        | Ears_R_02          |
| **10**                      | Eye_L         | Ears_R_03        | Ears_R_03          |
| **11**                      | Mouth         | Ears_L_01        | Ears_L_01          |
| **12**                      | Eyelid_R      | Ears_L_02        | Ears_L_02          |
| **13**                      | Eyelid_L      | Ears_L_03        | Ears_L_03          |
| **14**                      | Eyebrow_R     | Eye_R            | Eye_R              |
| **15**                      | Eyebrow_L     | Eye_L            | Eye_L              |
| **16**                      | Hair_Root     | Mouth            | Mouth              |
| **17**                      | Chest_01_R    | Clavicle_L       | Clavicle_L         |
| **18**                      | Chest_02_R    | UpperArm_L       | UpperArm_L         |
| **19**                      | Clavicle_R    | Forearm_L        | Forearm_L          |
| **20**                      | UpperArm_R    | Hand_L           | Hand_L             |
| **21**                      | Lowerarm_R    | Thumb_01_L       | Thumb_01_L         |
| **22**                      | Hand_R        | Clavicle_R       | Clavicle_R         |
| **23**                      | Thumb_01_R    | UpperArm_R       | UpperArm_R         |
| **24**                      | Thumb_02_R    | Forearm_R        | Forearm_R          |
| **25**                      | Thumb_03_R    | Hand_R           | Hand_R             |
| **26**                      | ThumbNub_R    | Thumb_01_R       | Thumb_01_R         |
| **27**                      | Index_01_R    | Thigh_R          | Thigh_R            |
| **28**                      | Index_02_R    | Calf_R           | Calf_R             |
| **29**                      | Index_03_R    | Foot_R           | HorseLink_R        |
| **30**                      | IndexNub_R    | Toe_R            | Foot_R             |
| **31**                      | Middle_01_R   | Thigh_L          | Toe_R              |
| **32**                      | Middle_02_R   | Calf_L           | Thigh_L            |
| **33**                      | Middle_03_R   | Foot_L           | Calf_L             |
| **34**                      | MiddleNub_R   | Toe_L            | HorseLink_L        |
| **35**                      | Ring_01_R     | Tail_01          | Foot_L             |
| **36**                      | Ring_02_R     | Tail_02          | Toe_L              |
| **37**                      | Ring_03_R     | Tail_03          | Tail_01            |
| **38**                      | RingNub_R     | Tail_04          | Tail_02            |
| **39**                      | Pinky_01_R    |                  | Tail_03            |
| **40**                      | Pinky_02_R    |                  | Tail_04            |
| **41**                      | Pinky_03_R    |                  |                    |
| **42**                      | PinkyNub_R    |                  |                    |
| **43**                      | Lower_R_Root  |                  |                    |
| **44**                      | Clavicle_L    |                  |                    |
| **45**                      | UpperArm_L    |                  |                    |
| **46**                      | Lowerarm_L    |                  |                    |
| **47**                      | Hand_L        |                  |                    |
| **48**                      | Thumb_01_L    |                  |                    |
| **49**                      | Thumb_02_L    |                  |                    |
| **50**                      | Thumb_03_L    |                  |                    |
| **51**                      | ThumbNub_L    |                  |                    |
| **52**                      | Index_01_L    |                  |                    |
| **53**                      | Index_02_L    |                  |                    |
| **54**                      | Index_03_L    |                  |                    |
| **55**                      | IndexNub_L    |                  |                    |
| **56**                      | Middle_01_L   |                  |                    |
| **57**                      | Middle_02_L   |                  |                    |
| **58**                      | Middle_03_L   |                  |                    |
| **59**                      | MiddleNub_L   |                  |                    |
| **60**                      | Ring_01_L     |                  |                    |
| **61**                      | Ring_02_L     |                  |                    |
| **62**                      | Ring_03_L     |                  |                    |
| **63**                      | RingNub_L     |                  |                    |
| **64**                      | Pinky_01_L    |                  |                    |
| **65**                      | Pinky_02_L    |                  |                    |
| **66**                      | Pinky_03_L    |                  |                    |
| **67**                      | PinkyNub_L    |                  |                    |
| **68**                      | Lower_L_Root  |                  |                    |
| **69**                      | Chest_01_L    |                  |                    |
| **70**                      | Chest_02_L    |                  |                    |
| **71**                      | Cloak_Root    |                  |                    |
| **72**                      | Skirt_Root    |                  |                    |
| **73**                      | Thigh_L       |                  |                    |
| **74**                      | Calf_L        |                  |                    |
| **75**                      | Foot_L        |                  |                    |
| **76**                      | Toe_L         |                  |                    |
| **77**                      | ToeNub_L      |                  |                    |
| **78**                      | Thigh_R       |                  |                    |
| **79**                      | Calf_R        |                  |                    |
| **80**                      | Foot_R        |                  |                    |
| **81**                      | Toe_R         |                  |                    |
| **82**                      | ToeNub_R      |                  |                    |
| **83**                      | Skirt_01_Root |                  |                    |