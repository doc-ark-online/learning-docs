# 樱花校园 3D 角色制作指南：环境准备

> 本系列：**1. 环境准备** · [2. 模型制作](/ProductMaking-Guide/Sakura-Campus-3D-Character-2-Modeling) · [3. 骨骼绑定](/ProductMaking-Guide/Sakura-Campus-3D-Character-3-Rigging) · [4. 引擎配置](/ProductMaking-Guide/Sakura-Campus-3D-Character-4-Engine-Setup) · [5. 商品上传](/ProductMaking-Guide/Sakura-Campus-3D-Character-5-Product-Upload)

::: tip 阅读提示

在正式开始制作商品之前，请认真阅读以下内容并做好准备工作。

:::

## 软件版本

### Unity

::: warning 版本要求

必须使用 **Unity 2022.3.14f1c1**，制作樱花校园商品前请先安装该版本。

:::

访问 [Unity 官网](https://unity.cn/releases/full/2020)下载安装 Unity Hub，
然后在 Unity Hub 中搜索并安装 Unity 2022.3.14f1c1。

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-001.mp4"></video>

[下载樱花校园项目工程（ZIP）](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-002.zip)。
该工程前期可用于观察美术效果，中后期用于验证服装绑定并输出 Prefab 文件。

如果安装 Unity 时没有勾选 Android Build Support 和 iOS Build Support，
可以在打开工程后补充安装。

::: warning 注意

未安装 Android Build Support 或 iOS Build Support，可能导致上传失败或无法上传。

:::

![Unity示意图 1](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-003.webp)

### 3D 建模

::: warning 导出版本

建模软件不限，可使用 3ds Max、Maya、Blender 等工具；绑定完成后，
建议通过 **3ds Max 2019** 导出最终 FBX 文件。

:::

本文使用 3ds Max 演示，同时包含将其他软件导出的 FBX 导入 3ds Max 的相关步骤。

### 图像编辑工具

图像编辑软件不限，可使用 Substance 3D Painter、BodyPaint 3D 或 Photoshop，
最终输出图片文件即可。

## 选择商品类别

请确认目前樱花校园工作室支持的商品类别目录，选择需要制作的商品类别。

当前支持以下商品类别：

1. **服装**：必须包含上下装并遮挡私密部位。为了获得更完整的展示效果，建议同时制作鞋子。

2. **发型**：匹配裸模头部范围即可，不限制发型种类。

::: info 规划中的商品类别

以下类别当前版本暂不支持创作者制作上架：

- 眼镜：匹配裸模头部范围即可。
- 发饰：匹配裸模发型范围即可。
- 面具：匹配裸模头部范围即可。
- 眼睛：暂未提供商品售卖渠道。
- 翅膀：匹配裸模背部范围即可。
- 尾巴：匹配裸模尾椎范围即可。

:::

## 准备标准文件和模板

制作商品前，请准备以下标准文件和模板：

| 文件 | 用途 | 下载 |
| --- | --- | --- |
| `MobMan.FBX` | 男性服装绑定标准骨骼 | [下载男性标准骨骼](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-mobman.fbx) |
| `MobGirl.FBX` | 女性服装绑定标准骨骼 | [下载女性标准骨骼](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-mobgirl.fbx) |
| `MobGirl_NewBody_taofenmingbijia.unitypackage` | 女性服装样例，包含发型和发饰 | [下载女性服装样例](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-female-sample.unitypackage) |

女性服装样例为 Prefab 文件，可直接拖入引擎。样例内包含通用服装材质：
可以复制材质球到个人目录，修改命名并替换颜色贴图；**不要修改 Toon Ramp 通道的公用贴图**。

## 制作规范

### 单位设置

3ds Max 的系统单位和显示单位均设置为厘米。

![1.4.1 单位设置示意图 2](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-004.webp)

### 命名规范

以下以女性资源为例；制作其他角色时，替换名称中的 `MobGirl`：

| 商品类型 | 命名格式 |
| --- | --- |
| 服装 | `MobGirl_NewBody_<ID>_<资源名拼音>` |
| 头发 | `MobGirl_NewHair_<ID>_<资源名拼音>` |
| 眼镜 | `MobGirl_NewGlasses_<ID>_<资源名拼音>` |
| 发饰 | `MobGirl_NewHairAcc_<ID>_<资源名拼音>` |
| 面具 | `MobGirl_NewMask_<ID>_<资源名拼音>` |
| 翅膀 | `MobGirl_NewWing_<ID>_<资源名拼音>` |
| 尾巴 | `MobGirl_NewTail_<ID>_<资源名拼音>` |

资源名称不能超过 **45 个字符**，例如：
`MobGirl_NewBody_xxxxxxxxx_xxxxxxx_xxxxxxxxx`。

### 面数规范

完整角色包含裸模。只要角色总面数未超出限制，其他部件未使用的面数可以适当分配给其余部分。


### 贴图规范

- 贴图命名与模型命名保持一致。

- 贴图最大尺寸为 **1024 × 1024**，推荐使用 **512 × 512**。

- 头发统一使用引擎工程文件提供的公用贴图。

### 资源与材质命名规范

| 材质类型 | Shader/材质命名 |
| --- | --- |
| 头发 | `Hair` |
| 皮肤（裸模） | `Body` |
| 服装 | `ClothUpper`；多个材质使用数字后缀区分，如 `ClothUpper_1`、`ClothUpper_2` |
| 道具 | 使用需求名称的拼音 |

::: warning 换色区域与材质 ID

- 服装最多只能设置 **2 个换色区域**，即 2 个材质 ID/材质球；其余区域不可换色，裸模材质单独计算。
- 换色区域必须使用材质 ID 1 和材质 ID 2，请合理安排材质 ID 顺序。
- 需要换色的材质必须命名为 `ClothUpper` 和 `ClothUpper_1`。

:::

---

下一篇：[模型制作](/ProductMaking-Guide/Sakura-Campus-3D-Character-2-Modeling)
