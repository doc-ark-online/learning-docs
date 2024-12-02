# 模型绑定基础介绍

# 骨骼介绍

## 局外人形骨骼：

- 仅支持局外换装模型，需要区分男女。

- 可共用该骨架下的资源库动画资源。

![img](https://arkimg.ark.online/1730185860146-25.png)

## 局内人形骨骼：

- 支持局内换装模型骨骼匹配，需要区分男女。
- 可共用该骨架下的资源库动画资源。

![img](https://arkimg.ark.online/1730185860146-26.png)

## 头发骨骼：

- 头发骨骼自己搭建，骨骼可自行命名。
- 完整发型都需要归在头发挂点（虚拟体）Hair_Root下（自建虚拟体与对应挂点命名一致）

| **发型** | ![![img](https://arkimg.ark.online/1730185255935-4.png)](https://arkimg.ark.online/1730185255935-4.png) |
| -------- | ------------------------------------------------------------ |

## 动态骨骼部分模型（裙摆，袖摆，披风等）：

- 动态骨骼部分模型属于基础服装部件的一部分，可以通过拆分绑定制作，实现动态效果
- 动态骨骼部分模型，根据实际模型，选择对应位置的挂点，自行搭建骨骼，并且创建挂点（虚拟体）
- 所有挂点（虚拟体）命名必须正确。其余骨骼可自行设置
- 挂点名称：
  - 裙摆挂点：Skirt_Root（切分腰部以上裙子）、Skirt_01_Root（切分腰部以下裙子）
  - 袖摆挂点：Lower_R_Root（右手袖摆）、 Lower_L_Root（左手袖摆）
  - 背部挂点：Cloak_Root（上半身挂点，例如披风，领带）

| **裙摆**<br />**Skirt_Root（腰部以上裙子）**<br />**Skirt_01_Root（腰部以下裙子）** | ![img](https://arkimg.ark.online/1730185255935-5.png) |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| **袖摆**<br />**Lower_R_Root**<br />**Lower_L_Root**         | ![img](https://arkimg.ark.online/1730185255935-6.png) |
| **披风**<br />**Cloak_Root**                                 | ![img](https://arkimg.ark.online/1730185255935-7.png) |

# 骨骼核对表：

| **骨骼名称** **(编号顺序)** | **局内**      | **局外**        |
| --------------------------- | ------------- | --------------- |
| 0                           | Root          | Root            |
| 1                           | Bip_01        | Bip_01          |
| 2                           | Pelvis        | Pelvis          |
| 3                           | Spine_01      | Spine_01        |
| 4                           | Spine_02      | Spine_02        |
| 5                           | Spine_03      | Spine_03        |
| 6                           | Neck_01       | Neck_01         |
| 7                           | Head          | Head            |
| 8                           | HeadNub       | Hair_Root       |
| 9                           | Eye_R         | BN_face         |
| 10                          | Eye_L         | BN_upeyelip_R02 |
| 11                          | Mouth         | BN_eyeBrow03_R  |
| 12                          | Eyelid_R      | BN_eyeBrow02_R  |
| 13                          | Eyelid_L      | BN_eyeBrow01_R  |
| 14                          | Eyebrow_R     | BN_forehead     |
| 15                          | Eyebrow_L     | BN_eyeBrow01_L  |
| 16                          | Hair_Root     | BN_eyeBrow02_L  |
| 17                          | Chest_01_R    | BN_eyeBrow03_L  |
| 18                          | Chest_02_R    | BN_upLip02_R    |
| 19                          | Clavicle_R    | BN_upLip_M      |
| 20                          | UpperArm_R    | BN_upLip02_L    |
| 21                          | Lowerarm_R    | BN_comouth_R    |
| 22                          | Hand_R        | BN_loLip02_R    |
| 23                          | Thumb_01_R    | BN_loLip_M      |
| 24                          | Thumb_02_R    | BN_loLip02_L    |
| 25                          | Thumb_03_R    | BN_comouth_L    |
| 26                          | ThumbNub_R    | BN_R_face08     |
| 27                          | Index_01_R    | BN_eyeball_L    |
| 28                          | Index_02_R    | BN_eyeball_R    |
| 29                          | Index_03_R    | BN_upeyelip_L02 |
| 30                          | IndexNub_R    | BN_upeyelip_L01 |
| 31                          | Middle_01_R   | BN_coeyelip_L01 |
| 32                          | Middle_02_R   | BN_upeyelip_L03 |
| 33                          | Middle_03_R   | BN_coeyelip_L02 |
| 34                          | MiddleNub_R   | BN_loeyelip_L02 |
| 35                          | Ring_01_R     | BN_loeyelip_01  |
| 36                          | Ring_02_R     | BN_loeyelip_03  |
| 37                          | Ring_03_R     | BN_coeyelip_R01 |
| 38                          | RingNub_R     | BN_upeyelip_R01 |
| 39                          | Pinky_01_R    | BN_setou02      |
| 40                          | Pinky_02_R    | BN_upeyelip_R03 |
| 41                          | Pinky_03_R    | BN_coeyelip_R02 |
| 42                          | PinkyNub_R    | BN_loeyelip_R01 |
| 43                          | Lower_R_Root  | BN_loeyelip_R02 |
| 44                          | Clavicle_L    | BN_loeyelip_R02 |
| 45                          | UpperArm_L    | BN_L_face06     |
| 46                          | Lowerarm_L    | BN_L_face07     |
| 47                          | Hand_L        | BN_L_face08     |
| 48                          | Thumb_01_L    | BN_L_face05     |
| 49                          | Thumb_02_L    | BN_setou01      |
| 50                          | Thumb_03_L    | BN_M_face00     |
| 51                          | ThumbNub_L    | BN_nose         |
| 52                          | Index_01_L    | BN_R_face05     |
| 53                          | Index_02_L    | BN_R_face06     |
| 54                          | Index_03_L    | BN_R_face07     |
| 55                          | IndexNub_L    | BN_L_face00     |
| 56                          | Middle_01_L   | BN_L_face01     |
| 57                          | Middle_02_L   | BN_L_face02     |
| 58                          | Middle_03_L   | BN_L_face03     |
| 59                          | MiddleNub_L   | BN_L_face04     |
| 60                          | Ring_01_L     | BN_R_face04     |
| 61                          | Ring_02_L     | BN_R_face03     |
| 62                          | Ring_03_L     | BN_R_face02     |
| 63                          | RingNub_L     | BN_R_face01     |
| 64                          | Pinky_01_L    | BN_R_face00     |
| 65                          | Pinky_02_L    | BN_setou03      |
| 66                          | Pinky_03_L    | BN_jaw_M        |
| 67                          | PinkyNub_L    | BN_M_face01     |
| 68                          | Lower_L_Root  | BN_setou00      |
| 69                          | Chest_01_L    | BN_uptooth      |
| 70                          | Chest_02_L    | BN_lotooth      |
| 71                          | Cloak_Root    | HeadNub         |
| 72                          | Skirt_Root    | Clavicle_R      |
| 73                          | Thigh_L       | UpperArm_R      |
| 74                          | Calf_L        | Lowerarm_R      |
| 75                          | Foot_L        | Hand_R          |
| 76                          | Toe_L         | Thumb_01_R      |
| 77                          | ToeNub_L      | Thumb_02_R      |
| 78                          | Thigh_R       | Thumb_03_R      |
| 79                          | Calf_R        | ThumbNub_R      |
| 80                          | Foot_R        | Index_01_R      |
| 81                          | Toe_R         | Index_02_R      |
| 82                          | ToeNub_R      | Index_03_R      |
| 83                          | Skirt_01_Root | IndexNub_R      |
| 84                          |               | Middle_01_R     |
| 85                          |               | Middle_02_R     |
| 86                          |               | Middle_03_R     |
| 87                          |               | MiddleNub_R     |
| 88                          |               | Ring_01_R       |
| 89                          |               | Ring_02_R       |
| 90                          |               | Ring_03_R       |
| 91                          |               | RingNub_R       |
| 92                          |               | Pinky_01_R      |
| 93                          |               | Pinky_02_R      |
| 94                          |               | Pinky_03_R      |
| 95                          |               | PinkyNub_R      |
| 96                          |               | Lower_R_Root    |
| 97                          |               | Clavicle_L      |
| 98                          |               | UpperArm_L      |
| 99                          |               | Lowerarm_L      |
| 100                         |               | Hand_L          |
| 101                         |               | Thumb_01_L      |
| 102                         |               | Thumb_02_L      |
| 103                         |               | Thumb_03_L      |
| 104                         |               | ThumbNub_L      |
| 105                         |               | Index_01_L      |
| 106                         |               | Index_02_L      |
| 107                         |               | Index_03_L      |
| 108                         |               | IndexNub_L      |
| 109                         |               | Middle_01_L     |
| 110                         |               | Middle_02_L     |
| 111                         |               | Middle_03_L     |
| 112                         |               | MiddleNub_L     |
| 113                         |               | Ring_01_L       |
| 114                         |               | Ring_02_L       |
| 115                         |               | Ring_03_L       |
| 116                         |               | RingNub_L       |
| 117                         |               | Pinky_01_L      |
| 118                         |               | Pinky_02_L      |
| 119                         |               | Pinky_03_L      |
| 120                         |               | PinkyNub_L      |
| 121                         |               | Lower_L_Root    |
| 122                         |               | Cloak_Root      |
| 123                         |               | Chest_01_R      |
| 124                         |               | Chest_02_R      |
| 125                         |               | Chest_01_L      |
| 126                         |               | Chest_02_L      |
| 127                         |               | Skirt_Root      |
| 128                         |               | Thigh_L         |
| 129                         |               | Calf_L          |
| 130                         |               | Foot_L          |
| 131                         |               | Toe_L           |
| 132                         |               | ToeNub_L        |
| 133                         |               | Thigh_R         |
| 134                         |               | Calf_R          |
| 135                         |               | Foot_R          |
| 136                         |               | Toe_R           |
| 137                         |               | ToeNub_R        |
| 138                         |               | Skirt_01_Root   |