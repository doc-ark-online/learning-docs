# 樱花校园 3D 角色制作指南：骨骼绑定

> 本系列：[1. 环境准备](/ProductMaking-Guide/Sakura-Campus-3D-Character-1-Environment) · [2. 模型制作](/ProductMaking-Guide/Sakura-Campus-3D-Character-2-Modeling) · **3. 骨骼绑定** · [4. 引擎配置](/ProductMaking-Guide/Sakura-Campus-3D-Character-4-Engine-Setup) · [5. 商品上传](/ProductMaking-Guide/Sakura-Campus-3D-Character-5-Product-Upload)

## 服装绑定

### 绑定设置

将模型每个顶点受骨骼影响的数量设置为 **不超过 2 个**。

![3.1.1 绑定设置示意图 15](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-018.webp)

- 使用 3ds Max 打开服装模型文件。

![3.1.1 绑定设置示意图 16](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-019.webp)

- 选择图中元素，按住 `Ctrl` 并单击需要制作布料效果的部分。以裙装为例，需要单独拆分裙子部分。单击 `Detach` 完成拆分，然后按数字顺序命名，例如 `MobGirl_NewBody_XXX_001`、`MobGirl_NewBody_XXX_002`。

|  |  |
| :---: | :---: |
| ![3.1.1 绑定设置示意图 17](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-020.webp) | ![3.1.1 绑定设置示意图 18](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-021.webp) |

#### 拆分视频参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-022.mp4"></video>

### 绑定权重

- 本例使用女性角色。依次单击 `File` → `Import` → `Merge`，选择女性角色骨骼 `MobGirl_NewBody`，然后单击 `Open`。
- 单击 `All`，再单击 `OK`。

|  |  |  |
| :---: | :---: | :---: |
| ![3.1.2 绑定权重示意图 19](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-023.webp) | ![3.1.2 绑定权重示意图 20](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-024.webp) | ![3.1.2 绑定权重示意图 21](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-025.webp) |

- 分别为两部分模型添加 `Skin`。单击 `Add`，选取所有骨骼后单击 `Select`。下图红框中出现全部骨骼信息即表示添加成功。

|  |  |  |
| :---: | :---: | :---: |
| ![3.1.2 绑定权重示意图 22](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-026.webp) | ![3.1.2 绑定权重示意图 23](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-027.webp) | ![3.1.2 绑定权重示意图 24](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-028.webp) |

- 选择模型并单击 `Edit Envelopes`（默认快捷键为 `1`），勾选 `Vertices`，开始处理权重。

- 单击鼠标右键打开菜单，选择 `Weight Tool Dialog` 打开权重面板。

|  |  |  |
| :---: | :---: | :---: |
| ![3.1.2 绑定权重示意图 25](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-029.webp) | ![3.1.2 绑定权重示意图 26](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-030.webp) | ![3.1.2 绑定权重示意图 27](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-031.webp) |

- 根据需要实现的布料效果和人体结构调整权重。

- 例如，选择模型并将骨骼影响限制设置为 `2`。

![3.1.2 绑定权重示意图 28](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-032.webp)

- 启用 `Edit Envelopes` 后，单击关节处的黑色封套，再选择需要控制的模型顶点。数值越大，顶点受到的权重影响越大；也可以通过颜色判断，颜色越深表示权重越大。

|  |  |
| :---: | :---: |
| ![3.1.2 绑定权重示意图 29](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-033.webp) | ![3.1.2 绑定权重示意图 30](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-034.webp) |

权重工具面板中文注释如下，供参考：

![3.1.2 绑定权重示意图 31](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-035.webp)

### 服装导出

- 框选所有模型和骨骼，依次单击 `File` → `Export` → `Export Selected`，选择目标文件夹并保存。文件统一使用服装名称，例如 `MobGirl_NewBody_taofenmingbijia_<创作者ID>`。

- `FBX Export` 面板保持默认设置，模型导出时无需勾选 `Animation`。

|  |  |  |
| :---: | :---: | :---: |
| ![3.1.3 服装导出示意图 32](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-036.webp) | ![3.1.3 服装导出示意图 33](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-037.webp) | ![3.1.3 服装导出示意图 34](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-038.webp) |

### 导出参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-039.mp4"></video>

## 头发绑定

### 创建骨骼

- 打开头发模型文件，检查模型是否位于中心点。选择层级并启用“仅影响轴心点”，确保红框中的坐标为 `0`。

![3.2.1 创建骨骼示意图 35](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-040.webp)

- 在创建面板中选择 `Bone`，根据模型样式创建头发骨骼，并根据模型大小调整骨骼尺寸和位置。根骨骼命名为 `Bone_Root`。

|  |  |
| :---: | :---: |
| ![3.2.1 创建骨骼示意图 36](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-041.webp) | ![3.2.1 创建骨骼示意图 37](https://arkimg.ark.online/sakura-campus-3d-guide-20260828-042.webp) |

### 创建参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-043.mp4"></video>

头发绑点和导出流程可参考服装绑定。

### 绑定参考

<video controls src="https://arkimg.ark.online/sakura-campus-3d-guide-20260828-044.mp4"></video>

---

上一篇：[模型制作](/ProductMaking-Guide/Sakura-Campus-3D-Character-2-Modeling) ｜ 下一篇：[引擎配置](/ProductMaking-Guide/Sakura-Campus-3D-Character-4-Engine-Setup)
