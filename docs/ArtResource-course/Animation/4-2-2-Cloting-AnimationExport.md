# 动画导出

## 通用规范：

- 需要导出为FBX格式文件。
- 骨骼名称不能修改，骨骼层级不能修改，骨骼数量不能修改
- 动画导出时，不选择模型
- 动画导出时，需要根据所使用骨骼，核对骨骼数量表。
- 人（局内动画） = 84节（含Root/挂点/末端骨骼）
- 局外人形骨骼（局外动画）  = 139节（含Root/挂点/末端骨骼）
- 局内与局外动画导出方式相同，使用正确的基础骨骼，确保导出骨骼数量正确即可

### 导出流程：

- 选择所有骨骼+根节点Root，输出FBX（案例截图基于**3D** **max**）。
  
  ![img](https://arkimg.ark.online/1725875565028-4.png)
- 选择导出命令。

![img](https://arkimg.ark.online/1725875565028-1.png)

- 按规范给动画资源命名。

![img](https://arkimg.ark.online/1725875565028-2.png)

### 导出设置：

- 勾选Animation、勾选Bake Animation、勾选Skins、勾选Morphs、Up Axis：Z-up

![img](https://arkimg.ark.online/1730342263504-1.png)

- 导出后即可进入口袋方舟进行资源上传
  - [服装部件/角色NPC/四足/自定义骨骼动画导入上传](../Upload/0-0-Role)


## 骨骼核对表：

| **骨骼名称** **(编号顺序)** |   **局内**    |    **局外**     |
| :-------------------------: | :-----------: | :-------------: |
|              0              |     Root      |      Root       |
|              1              |    Bip_01     |     Bip_01      |
|              2              |    Pelvis     |     Pelvis      |
|              3              |   Spine_01    |    Spine_01     |
|              4              |   Spine_02    |    Spine_02     |
|              5              |   Spine_03    |    Spine_03     |
|              6              |    Neck_01    |     Neck_01     |
|              7              |     Head      |      Head       |
|              8              |    HeadNub    |    Hair_Root    |
|              9              |     Eye_R     |     BN_face     |
|             10              |     Eye_L     | BN_upeyelip_R02 |
|             11              |     Mouth     | BN_eyeBrow03_R  |
|             12              |   Eyelid_R    | BN_eyeBrow02_R  |
|             13              |   Eyelid_L    | BN_eyeBrow01_R  |
|             14              |   Eyebrow_R   |   BN_forehead   |
|             15              |   Eyebrow_L   | BN_eyeBrow01_L  |
|             16              |   Hair_Root   | BN_eyeBrow02_L  |
|             17              |  Chest_01_R   | BN_eyeBrow03_L  |
|             18              |  Chest_02_R   |  BN_upLip02_R   |
|             19              |  Clavicle_R   |   BN_upLip_M    |
|             20              |  UpperArm_R   |  BN_upLip02_L   |
|             21              |  Lowerarm_R   |  BN_comouth_R   |
|             22              |    Hand_R     |  BN_loLip02_R   |
|             23              |  Thumb_01_R   |   BN_loLip_M    |
|             24              |  Thumb_02_R   |  BN_loLip02_L   |
|             25              |  Thumb_03_R   |  BN_comouth_L   |
|             26              |  ThumbNub_R   |   BN_R_face08   |
|             27              |  Index_01_R   |  BN_eyeball_L   |
|             28              |  Index_02_R   |  BN_eyeball_R   |
|             29              |  Index_03_R   | BN_upeyelip_L02 |
|             30              |  IndexNub_R   | BN_upeyelip_L01 |
|             31              |  Middle_01_R  | BN_coeyelip_L01 |
|             32              |  Middle_02_R  | BN_upeyelip_L03 |
|             33              |  Middle_03_R  | BN_coeyelip_L02 |
|             34              |  MiddleNub_R  | BN_loeyelip_L02 |
|             35              |   Ring_01_R   | BN_loeyelip_01  |
|             36              |   Ring_02_R   | BN_loeyelip_03  |
|             37              |   Ring_03_R   | BN_coeyelip_R01 |
|             38              |   RingNub_R   | BN_upeyelip_R01 |
|             39              |  Pinky_01_R   |   BN_setou02    |
|             40              |  Pinky_02_R   | BN_upeyelip_R03 |
|             41              |  Pinky_03_R   | BN_coeyelip_R02 |
|             42              |  PinkyNub_R   | BN_loeyelip_R01 |
|             43              | Lower_R_Root  | BN_loeyelip_R02 |
|             44              |  Clavicle_L   | BN_loeyelip_R02 |
|             45              |  UpperArm_L   |   BN_L_face06   |
|             46              |  Lowerarm_L   |   BN_L_face07   |
|             47              |    Hand_L     |   BN_L_face08   |
|             48              |  Thumb_01_L   |   BN_L_face05   |
|             49              |  Thumb_02_L   |   BN_setou01    |
|             50              |  Thumb_03_L   |   BN_M_face00   |
|             51              |  ThumbNub_L   |     BN_nose     |
|             52              |  Index_01_L   |   BN_R_face05   |
|             53              |  Index_02_L   |   BN_R_face06   |
|             54              |  Index_03_L   |   BN_R_face07   |
|             55              |  IndexNub_L   |   BN_L_face00   |
|             56              |  Middle_01_L  |   BN_L_face01   |
|             57              |  Middle_02_L  |   BN_L_face02   |
|             58              |  Middle_03_L  |   BN_L_face03   |
|             59              |  MiddleNub_L  |   BN_L_face04   |
|             60              |   Ring_01_L   |   BN_R_face04   |
|             61              |   Ring_02_L   |   BN_R_face03   |
|             62              |   Ring_03_L   |   BN_R_face02   |
|             63              |   RingNub_L   |   BN_R_face01   |
|             64              |  Pinky_01_L   |   BN_R_face00   |
|             65              |  Pinky_02_L   |   BN_setou03    |
|             66              |  Pinky_03_L   |    BN_jaw_M     |
|             67              |  PinkyNub_L   |   BN_M_face01   |
|             68              | Lower_L_Root  |   BN_setou00    |
|             69              |  Chest_01_L   |   BN_uptooth    |
|             70              |  Chest_02_L   |   BN_lotooth    |
|             71              |  Cloak_Root   |     HeadNub     |
|             72              |  Skirt_Root   |   Clavicle_R    |
|             73              |    Thigh_L    |   UpperArm_R    |
|             74              |    Calf_L     |   Lowerarm_R    |
|             75              |    Foot_L     |     Hand_R      |
|             76              |     Toe_L     |   Thumb_01_R    |
|             77              |   ToeNub_L    |   Thumb_02_R    |
|             78              |    Thigh_R    |   Thumb_03_R    |
|             79              |    Calf_R     |   ThumbNub_R    |
|             80              |    Foot_R     |   Index_01_R    |
|             81              |     Toe_R     |   Index_02_R    |
|             82              |   ToeNub_R    |   Index_03_R    |
|             83              | Skirt_01_Root |   IndexNub_R    |
|             84              |               |   Middle_01_R   |
|             85              |               |   Middle_02_R   |
|             86              |               |   Middle_03_R   |
|             87              |               |   MiddleNub_R   |
|             88              |               |    Ring_01_R    |
|             89              |               |    Ring_02_R    |
|             90              |               |    Ring_03_R    |
|             91              |               |    RingNub_R    |
|             92              |               |   Pinky_01_R    |
|             93              |               |   Pinky_02_R    |
|             94              |               |   Pinky_03_R    |
|             95              |               |   PinkyNub_R    |
|             96              |               |  Lower_R_Root   |
|             97              |               |   Clavicle_L    |
|             98              |               |   UpperArm_L    |
|             99              |               |   Lowerarm_L    |
|             100             |               |     Hand_L      |
|             101             |               |   Thumb_01_L    |
|             102             |               |   Thumb_02_L    |
|             103             |               |   Thumb_03_L    |
|             104             |               |   ThumbNub_L    |
|             105             |               |   Index_01_L    |
|             106             |               |   Index_02_L    |
|             107             |               |   Index_03_L    |
|             108             |               |   IndexNub_L    |
|             109             |               |   Middle_01_L   |
|             110             |               |   Middle_02_L   |
|             111             |               |   Middle_03_L   |
|             112             |               |   MiddleNub_L   |
|             113             |               |    Ring_01_L    |
|             114             |               |    Ring_02_L    |
|             115             |               |    Ring_03_L    |
|             116             |               |    RingNub_L    |
|             117             |               |   Pinky_01_L    |
|             118             |               |   Pinky_02_L    |
|             119             |               |   Pinky_03_L    |
|             120             |               |   PinkyNub_L    |
|             121             |               |  Lower_L_Root   |
|             122             |               |   Cloak_Root    |
|             123             |               |   Chest_01_R    |
|             124             |               |   Chest_02_R    |
|             125             |               |   Chest_01_L    |
|             126             |               |   Chest_02_L    |
|             127             |               |   Skirt_Root    |
|             128             |               |     Thigh_L     |
|             129             |               |     Calf_L      |
|             130             |               |     Foot_L      |
|             131             |               |      Toe_L      |
|             132             |               |    ToeNub_L     |
|             133             |               |     Thigh_R     |
|             134             |               |     Calf_R      |
|             135             |               |     Foot_R      |
|             136             |               |      Toe_R      |
|             137             |               |    ToeNub_R     |
|             138             |               |  Skirt_01_Root  |