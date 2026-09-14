# 樱花校园 3D 角色制作指南：引擎配置

> 本系列：[1. 环境准备](/ProductMaking-Guide/Sakura-Campus-3D-Character-1-Environment) · [2. 模型制作](/ProductMaking-Guide/Sakura-Campus-3D-Character-2-Modeling) · [3. 骨骼绑定](/ProductMaking-Guide/Sakura-Campus-3D-Character-3-Rigging) · **4. 引擎配置** · [5. 商品上传](/ProductMaking-Guide/Sakura-Campus-3D-Character-5-Product-Upload)

## 引擎调试

- 模型、UV 和贴图准备完成后，即可进入引擎调试。

- 打开 Unity Hub，加载本文开头提供的项目工程。

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-045.mp4"></video>

工程打开后，在 `Project` 目录下创建个人文件夹。不同资源类型的目标路径如下：

| 角色 | 资源类型 | 目标路径 |
| --- | --- | --- |
| 女性 | 服装 | `Assets/MetaApp/Mod/CustomClothes/Girl` |
| 女性 | 发型 | `Assets/MetaApp/Mod/CustomHair/Girl` |
| 男性 | 服装 | `Assets/MetaApp/Mod/CustomClothes/Boy` |
| 男性 | 发型 | `Assets/MetaApp/Mod/CustomHair/Boy` |

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-046.mp4"></video>

![4.1 引擎调试示意图 38](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-047.webp)

- 文件夹名称与资源模型名称保持一致。

![4.1 引擎调试示意图 39](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-048.webp)

- 将模型 FBX 文件和贴图文件拖入引擎中的目标文件夹。

- 右键单击 FBX 模型，选择“樱校中文功能入口”→“Setup 模型”，自动配置模型、材质和贴图。

![4.1 引擎调试示意图 40](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-049.webp)

- 材质和贴图配置完成后，系统会在主目录中自动生成同名 Prefab。例如，女性服装 Prefab 会生成在 `Assets/MetaApp/Mod/CustomClothes/Girl`。

![4.1 引擎调试示意图 41](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-050.webp)

- 将 Prefab 拖入 `Scene`，可以继续编辑。

### 模型材质配置视频参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-051.mp4"></video>

## 布料配置

### 设置示例

选择需要制作布料效果的部件，并添加布料插件。

|  |
| :---: |
| ![4.2.1 设置示例示意图 42](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-052.webp) |
| ![4.2.1 设置示例示意图 43](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-053.webp) |

- 单击 `Create`。

|  |  |
| :---: | :---: |
| ![4.2.1 设置示例示意图 44](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-054.webp) | ![4.2.1 设置示例示意图 45](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-055.webp) |

|  |
| :---: |
| ![4.2.1 设置示例示意图 46](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-056.webp) |

- 单击加号添加状态栏，再单击 `⊙` 添加需要制作布料效果的模型。
- `Merge Vertex Distance`：设置合并顶点的距离；范围内的顶点将被合并，同时忽略网格连接。
- `Merge Triangle Distance`：设置合并三角面的距离；合并时会考虑网格布线。根据需要的效果调整该值。
- 参数设置完成后，单击 `Create`。

|  |  |
| :---: | :---: |
| ![4.2.1 设置示例示意图 47](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-057.webp) | ![4.2.1 设置示例示意图 48](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-058.webp) |

|  |
| :---: |
| ![4.2.1 设置示例示意图 49](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-059.webp) |

- 单击 `⊙` 添加布料模型，展开 `Start Point Selection`，开始刷点。布料点默认为灰色。

| 颜色 | 含义 |
| --- | --- |
| 绿色 | 参与布料计算的粒子 |
| 红色 | 固定粒子，本身不会移动，作为移动粒子的锚点 |
| 灰色 | 无效粒子，不参与计算，可以减少性能消耗 |

刷点完成后，单击 `End Point Selection` 确认。

|  |  |
| :---: | :---: |
| ![4.2.1 设置示例示意图 50](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-060.webp) | ![4.2.1 设置示例示意图 51](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-061.webp) |

- 根据裙摆长度和样式添加碰撞体。长裙需要 4 个碰撞体：单击加号添加 4 个碰撞槽，在腿部骨骼上添加 `MagicaCapsuleCollider` 并开启碰撞显示。根据人体关节结构调整碰撞体轴向、大小和长度。

|  |  |  |
| :---: | :---: | :---: |
| ![4.2.1 设置示例示意图 52](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-062.webp) | ![4.2.1 设置示例示意图 53](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-063.webp) | ![4.2.1 设置示例示意图 54](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-064.webp) |

碰撞体中文面板如下，供参考：

![4.2.1 设置示例示意图 55](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-065.webp)

- 将碰撞体拖入碰撞槽，并勾选碰撞器选项。

|  |  |
| :---: | :---: |
| ![4.2.1 设置示例示意图 56](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-066.webp) | ![4.2.1 设置示例示意图 57](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-067.webp) |

### 布料参数说明

选择布料预设，可以快速获得一个基础布料效果。

![4.2.2 布料参数说明示意图 58](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-068.webp)

- 根据服装需要的效果进行细节调试；

- Radius：粒子半径，用于粒子碰撞判断的大小；

- Start为整体布料从粒子起点开始的参数，end为粒子末端参数，curve为从起点到末端的参数变化曲线(其他参数中的Start,end,Curve都是同样效果,后续不在单独列举)；

- Mass：粒子质量，数值大小跟粒子位移距离关联。如下图二；

- 下图三，Gravity：重力，设置粒子的重力加速度（m / s），通用重力数值为-9.8.（可根据实际制作需要考虑是否勾选启用）；

|  |  |  |
| :---: | :---: | :---: |
| ![4.2.2 布料参数说明示意图 59](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-069.webp) | ![4.2.2 布料参数说明示意图 60](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-070.webp) | ![4.2.2 布料参数说明示意图 61](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-071.webp) |

- External Force：外力的影响，设置承受多少外力；

- Mass Influence：粒子受到重量影响的比例；

- Wind Influence：风力影响的比例。

- Wind Random Scale：随机风力，值为0时，不在产生随机风力；

- 下图二，Drag：空气阻力，数值大小跟粒子运动衰减关联；

- 下图三，Max Velocity：最大粒子速度（m / s），设定粒子的最大速度移动；

|  |  |
| :---: | :---: |
| ![4.2.2 布料参数说明示意图 63](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-073.webp) | ![4.2.2 布料参数说明示意图 64](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-074.webp) |

|  |
| :---: |
| ![4.2.2 布料参数说明示意图 62](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-072.webp) |

- World Influence：世界影响力，设定身体移动时粒子受到影响的程度；

- Influence Target：设置目标；

- Max Move Speed：最大移动速度；

- Movement Influence：运动影响，身体的运动对粒子的影响；

- Rotation Influence：旋转影响，身体旋转对粒子的影响；

- Reset After Teleport：设置是否在检测到角色瞬移时重置粒子位置；

- Teleport Distance：角色在一帧中的移动距离值为多少时判定为瞬移；

- Teleport Rotation：角色在一帧中的旋转角度超过多少度时判定为瞬移；

- Stabilization Time After Reset：用于重置粒子的时间；

- Distance Disable:布料禁用；

- Reference Object:测量距离的目标；

- Distance:生效距离；

- Fade Distance:淡入淡出效果；

- Clamp Distance:距离限制；

- Min Distance Ratio:最小距离比；

- Max Distance Ratio:最大距离比；

- Velocity Influence：惯性影响；

|  |
| :---: |
| ![4.2.2 布料参数说明示意图 65](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-075.webp) |
| ![4.2.2 布料参数说明示意图 66](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-076.webp) |

- Clamp Position：位移限制；

- Clamp Rotation:旋转角度限制；

- Restore Distance：距离恢复；

- Struct：结构连接，连接原始结构中的粒子；

- Struct Stiffness：

- Bend：从原始结构中再连接一个Struct型粒子；

- Bend Point：打开Bend结构连接；

- Bend Max Connection：一个粒子的最大弯曲连接数；

- Bend Stiffness：弯曲连接强度；

|  |  |  |
| :---: | :---: | :---: |
| ![4.2.2 布料参数说明示意图 67](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-077.webp) | ![4.2.2 布料参数说明示意图 68](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-078.webp) | ![4.2.2 布料参数说明示意图 69](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-079.webp) |

- Near：忽略原始结构；

- Near Point：打开BNear结构连接；

- Near Max Connection:一个粒子的最大近连接数；

- Near Max Depth：执行近距离连接的粒子的深度范围（0.0-1.0）；

- Near Point Length：要链接的粒子之间的距离；

- Near Stiffness：接近连接强度；

- Velocity Influence：惯性影响；

- Restore Rotation：旋转恢复；

- Restore Power：粒子恢复的力度；

- Velocity Influence：惯性影响；

- Triangle Bend：三角面修复；

|  |  |  |
| :---: | :---: | :---: |
| ![4.2.2 布料参数说明示意图 70](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-080.webp) | ![4.2.2 布料参数说明示意图 71](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-081.webp) | ![4.2.2 布料参数说明示意图 72](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-082.webp) |

- Collision：碰撞判断；

- Friction：摩擦系数；

- Penetration：渗透极限（碰撞体渗透）；

- Max Connection Depth：从起点开始设置应用渗透约束的参数的最大深度；

- Connection Distance：搜索粒子连接到的对撞机时，请指定其最大搜索距离；

- Penetration Distance：指定粒子可以穿透的距离；

- Moving Radius：指定粒子可以移动的最大半径，粒子只能在此半径的球体内部移动，该半径与最大穿透距离相邻；

- Penetration Ignore Collider List：指定要忽略的碰撞体；

- Rotation Interpolation：粒子旋转补偿；

- FIXED NON-ROTATION：固定不旋转；

- LINE AVARAGE ROTATION：线性平均旋转；

|  |
| :---: |
| ![4.2.2 布料参数说明示意图 74](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-084.webp) |
| ![4.2.2 布料参数说明示意图 73](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-083.webp) |
| ![4.2.2 布料参数说明示意图 75](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-085.webp) |

- 完成效果调试后单击 `Create`，并使用 `CharaMake` 预览工具检查效果。

### 视频参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-086.mp4"></video>

## 发型物理配置

将生成的头发 Prefab 拖入 `Hierarchy`。

![4.3 发型物理配置示意图 76](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-087.webp)

选择头发文件并添加物理组件。根据头发骨骼数量添加对应数量的插槽，再将骨骼放入插槽。

|  |  |
| :---: | :---: |
| ![4.3 发型物理配置示意图 78](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-089.webp) | ![4.3 发型物理配置示意图 79](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-090.webp) |

|  |
| :---: |
| ![4.3 发型物理配置示意图 77](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-088.webp) |

- 展开 `Start Point Selection` 进行调试。发型粒子的计算方式与服装布料粒子相同，可参考布料配置。完成调试后单击 `Create`。

![4.3 发型物理配置示意图 80](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-091.webp)

- 配置完成后单击 `Apply All` 保存，并使用预览工具验收效果。

|  |  |
| :---: | :---: |
| ![4.3 发型物理配置示意图 81](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-092.webp) | ![4.3 发型物理配置示意图 82](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-093.webp) |

### 视频参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-094.mp4"></video>

## 效果预览

### 服装预览

- 右键单击 Prefab，选择“樱校中文功能入口”→“CharaMake 预览”，进入效果预览界面。

|  |  |
| :---: | :---: |
| ![4.4.1 服装预览示意图 83](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-095.webp) | ![4.4.1 服装预览示意图 84](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-096.webp) |

在预览工具中通过**材质可染色槽数**设置换色区域数量：

| 选项 | 换色区域 |
| --- | --- |
| `Zero` | 无换色区域 |
| `One` | 1 个换色区域 |
| `Two` | 2 个换色区域 |

设置完成后单击**保存到预制体**，再选择可染色槽中的色块，验证换色效果。

|  |  |
| :---: | :---: |
| ![4.4.1 服装预览示意图 85](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-097.webp) | ![4.4.1 服装预览示意图 86](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-098.webp) |

#### 服装换色视频参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-099.mp4"></video>

- 检查皮肤换色效果。

![服装换色视频参考示意图 87](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-100.webp)

- 检查无误后，单击**还原所有槽颜色**恢复默认状态。

![服装换色视频参考示意图 88](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-101.webp)

- 切换预设动画，检查资源的动画表现。选择动画后，需要单击**播放**才能开始播放。

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-102.mp4"></video>

### 发型预览

- 右键单击 Prefab，选择“樱校中文功能入口”→“CharaMake 预览”，进入效果预览界面。

|  |  |
| :---: | :---: |
| ![4.4.2 发型预览示意图 89](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-103.webp) | ![4.4.2 发型预览示意图 90](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-104.webp) |

- 调整坐标，使发型位置与角色匹配，然后单击**保存偏移到发型预制体**。

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-105.mp4"></video>

- 单击发型换色，检查效果是否符合预期。检查完成后，单击**还原所有插槽颜色**。

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-106.mp4"></video>

- 切换动画，预览头发的动态效果。

![4.4.2 发型预览示意图 91](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-107.webp)

### 同步预览发型和服装

1. 预览发型时添加服装。服装必须已经完成配置和效果验收。

   将配置好的服装 Prefab 拖入“更换身体”。

![4.4.3 同步预览发型和服装示意图 92](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-108.webp)

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-109.mp4"></video>

2. 预览服装时添加发型。发型必须已经完成配置和效果验收。

   将配置好的头发 Prefab 拖入**更换发型**，然后单击应用。

![4.4.3 同步预览发型和服装示意图 93](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-110.webp)

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-111.mp4"></video>

## 缩略图制作

商品缩略图用于向樱花校园用户展示商品效果。

在预览工具中使用列表缩略图取景框制作缩略图。调整视角后，单击“保存到预制体”。

|  |  |
| :---: | :---: |
| ![4.5 缩略图制作示意图 94](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-112.webp) | ![4.5 缩略图制作示意图 95](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-113.webp) |

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-114.mp4"></video>

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-115.mp4"></video>

---

上一篇：[骨骼绑定](/ProductMaking-Guide/Sakura-Campus-3D-Character-3-Rigging) ｜ 下一篇：[商品上传](/ProductMaking-Guide/Sakura-Campus-3D-Character-5-Product-Upload)
