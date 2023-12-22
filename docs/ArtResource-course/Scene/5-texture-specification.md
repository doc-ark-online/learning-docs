# 贴图规范

### 贴图注意事项视频

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9A%E8%B4%B4%E5%9B%BE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.mp4" />



### 贴图大小

贴图大小必须为2的 N 次幂，可以使用长型贴图：如32X32、64X64、128X128、256X256，512X512、1024X1024、64X128、256X128、256X512，512X1024，（最大1024*1024）

**标准规范贴图：**

1024*1024
![image-20231222145858440](https://arkimg.ark.online/image-20231222145858440.png)

**长形贴图：**

256*512
![image-20231222145744899](https://arkimg.ark.online/image-20231222145744899.png)

## 贴图格式:

### PBR:

- 贴图格式均为 TGA 格式，

- 法线默认使用 DirectX 法线,

- 混合贴图（后缀为_MRAE）各个通道分别为：**R**：Metallic  **G**: Roughness  **B**: Ambient occlusion   **A**:  Emissive  (没有自发光请不要有 A 通道)

- 普通透贴 mask 放在颜色 Alpha 通道里。

- **R， G， B， A** 对应贴图各个颜色通道

  ![img](https://arkimg.ark.online/432352356545446574.jpg)

### Substance 3D Painter 贴图输出模板：

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9ASubstance%203D%20Painter%E7%9A%84%E7%9B%B8%E5%85%B3%E8%AE%BE%E7%BD%AE.mp4" />

常规无自发光模式：

![img](https://arkimg.ark.online/1687770071646-2.png)

有自发光模式：

![img](https://arkimg.ark.online/1687770071647-3.png)

无自发光有透贴模式：

![img](https://arkimg.ark.online/1687770071647-4.png)

**关于 Substance 3D Painter 环境请看下面链接文档 Substance 3D Painter 部分**

 [推荐环境配置（点此跳转）](./../001-Environment-configuration)

#### 二次元：

- 只有颜色贴图。
- 普通自发光 mask 放在颜色 Alpha 通道里。
- 普通透贴 mask 放在颜色 Alpha 通道里
- 自发光和透贴不能共存

#### 低多边形：

无需贴图，（也可有贴图）使用不同母材质即可。

# 贴图精度推荐：

**不强制规范贴图精度大小，下面最低标准精度。**

推荐性能最优精度**1M256*256**，可以上下浮到10%。

可以下载下方链接，达到一样精度即可，可以上下浮到10%。
 [贴图精度统一文件（点此下载）](https://arkimg.ark.online/%E8%B4%B4%E5%9B%BE%E7%B2%BE%E5%BA%A6%E7%BB%9F%E4%B8%80%E6%96%87%E4%BB%B6.zip)

![img](https://arkimg.ark.online/1687770071647-5-1687940263328-1.png)