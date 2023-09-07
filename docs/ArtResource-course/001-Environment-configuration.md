# 环境配置

## 推荐软件环境配置

### 模型和动画制作软件环境配置

- 推荐使用3dsMax（2019及其以上版本），Maya，Blender
- 推荐软件单位设置
  - 厘米（cm）
- 动画帧率设置要求
  - 动画帧率：30FPS

### 软件单位设置：  

-  **3dsMax**

![img](https://arkimg.ark.online/1689238733632-9.png)

- **Maya：**    

![img](https://arkimg.ark.online/1689238733631-1.png)

- **Blender ：**                                              

![img](https://arkimg.ark.online/1689238733631-2.png)

### 动画帧率设置：

-  **3dsMax**

![img](https://arkimg.ark.online/1691465334372-1.png)

- **Maya：**

![img](https://arkimg.ark.online/1689238733631-4.png)

- **Blender ：** 

![img](https://arkimg.ark.online/1689238733631-5.png)

## 贴图制作软件环境配置

- 贴图推荐使用 SubstancePainter 软件制作，手绘和 PBR 都可以使用。
- 我们提供不同类型的模板，根据需求选择对应模板使用

### 通用设置

- 资源通用包
  
  [点此下载](![](https://arkimg.ark.online/%E8%B4%B4%E5%9B%BE%E5%88%B6%E4%BD%9C%E8%BD%AF%E4%BB%B6%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.zip)) 
- 将 Assets 文件夹复制到 SP 安装路径下,直接替换即可。不会影响本地保存的文件

![img](https://arkimg.ark.online/1689238733631-6.png)

### 3D 角色 PBR 服装模板

创建文件时，选择 SP 同步 UE_000

![img](https://arkimg.ark.online/1689238733631-7.png)

创建完成后检查以下几处是否正常

复合材质球：Mask 贴图(User0-3)，颜色贴图 Alpha 通道（User4）

着色器设置：MW_Character 着色器    背景贴图：Desert_Outer_HDR

纹理集通道设置：User0-4,且通道规格均为 L8。输出模板：Mw_Stylize 输出模板

材质球命名：SP 内材质命名和3Dmax 内材质命名无关。

材质命名以贴图输出方便优先建议：性别(Female,Male)_部件(Body,Foot,Hand,Leg)_编号

![img](https://arkimg.ark.online/1689238733632-8.png)

## 烘焙软件环境配置

- 制作 PBR 贴图时，烘焙基础贴图使用
- 推荐使用软件 Marmoset Toolbag
- 建议烘焙 Normal，Curvature，AO，ID 四种基础贴图

**使用 DX 法线**