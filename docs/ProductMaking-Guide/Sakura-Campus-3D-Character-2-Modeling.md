# 樱花校园 3D 角色制作指南：模型制作

> 本系列：[1. 环境准备](/ProductMaking-Guide/Sakura-Campus-3D-Character-1-Environment) · **2. 模型制作** · [3. 骨骼绑定](/ProductMaking-Guide/Sakura-Campus-3D-Character-3-Rigging) · [4. 引擎配置](/ProductMaking-Guide/Sakura-Campus-3D-Character-4-Engine-Setup) · [5. 商品上传](/ProductMaking-Guide/Sakura-Campus-3D-Character-5-Product-Upload)

完成准备工作后，即可开始制作商品。

## 制作示例

可以依据设计图制作，也可以自行设计。本文以下图设计稿为例：

![2.1 制作示例示意图 3](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-005.webp)

该设计包含帽子、头发和服装三个部分。

### 头发示例

- 打开建模软件，导入官方提供的裸模，根据头部模型制作头发。

- 头发可以采用体块或面的形式制作。本文以 3ds Max 中的插片方式为例。

- 从多个角度观察模型，避免穿帮，并用头发遮挡镂空部分。

- 如图所示，对头发执行一键全展。由于使用公共材质和贴图，无需单独制作贴图。

- 头发完成即可进行服装制作。

|  |  |
| :---: | :---: |
| ![2.1.1 头发示例示意图 4](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-006.webp) | ![2.1.1 头发示例示意图 5](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-007.webp) |
| ![2.1.1 头发示例示意图 6](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-008.webp) | ![2.1.1 头发示例示意图 7](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-009.webp) |

### 服装示例

- 根据裸模制作服装。删除被服装完全遮挡的裸模部分，并让服装关节线尽量与裸模保持一致。

![2.1.2 服装示例示意图 8](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-010.webp)

- 制作裙装时，将下体模型保留到腰线位置，不要修改内裤区域。

|  |  |
| :---: | :---: |
| ![2.1.2 服装示例示意图 9](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-011.webp) | ![2.1.2 服装示例示意图 10](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-012.webp) |

- 按照模型结构拆分并摆放 UV，以便绘制贴图。

- 若使用纯色效果，按结构和颜色区域拆分 UV，直接填充色块；相同颜色的 UV 可以集中摆放。UV 完成后，使用任意合适的软件绘制贴图。

- 绘制完成后，输出一张完整的 TGA 贴图。

|  |  |
| :---: | :---: |
| ![2.1.2 服装示例示意图 11](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-013.webp) | ![2.1.2 服装示例示意图 12](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-014.webp) |

- 整理 3ds Max 文件并区分材质球。一个商品对应一个部件，一个部件只能使用一套 UV 和一张贴图。最多设置两个换色区域，其他区域不可换色；材质球可以分为三个。

- 模型整理完成后导出 FBX。

|  |  |
| :---: | :---: |
| ![2.1.2 服装示例示意图 13](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-015.webp) | ![2.1.2 服装示例示意图 14](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-016.webp) |

## 绑定准备

- 对于使用其他软件制作的模型，建议另存一份 3ds Max 文件，便于后续制作动画。

- 可以导入其他软件导出的 FBX 或 OBJ 文件。

- 在 3ds Max 中导入文件，完成法线重置、Shader 命名、材质 ID 区分、平滑组区分和文件命名。

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-017.mp4"></video>

---

上一篇：[环境准备](/ProductMaking-Guide/Sakura-Campus-3D-Character-1-Environment) ｜ 下一篇：[骨骼绑定](/ProductMaking-Guide/Sakura-Campus-3D-Character-3-Rigging)
