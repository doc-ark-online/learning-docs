# 植物制作

## 通常可以用这三种方式制作植物：

![1](https://arkimg.ark.online/1.jpg)

## PBR植物：

![img](https://arkimg.ark.online/1730184430534-3.png)

### 资产准备：

- FBX
- 贴图：
  - 颜色贴图，A通道放透明遮罩（关于透明请看文档：透明，半透效果）
  - 法线贴图
  - MRAE混合贴图，（RGBA对应放以下贴图）
    - R通道放金属度
    - G通道放粗糙度
    - B通道放AO
    - A通道放自发光遮罩（没有可以不用放，存24位即可。）

### 材质设置：

拖出导入模型，给到我们基础材质

![img](https://arkimg.ark.online/1730184430534-4.png)

点开材质编辑，材质模式选择“树叶”，

(PS：目前树叶材质基本和基础材质一样，但后续会升级，支持更多效果。)

![img](https://arkimg.ark.online/1730184430534-5.jpeg)

物理模式切换到高级模式

![img](https://arkimg.ark.online/1730184430534-6.png)

将贴图贴到正确的卡槽位置

![img](https://arkimg.ark.online/1730184430534-7.png)

## NPR植物：

![20241029152543_rec_](https://arkimg.ark.online/20241029152543_rec_.gif)

### 资产准备：

- FBX
- 贴图：
  - 颜色贴图，A通道放透明遮罩
  - 若想做PBR+NPR效果请准备法线贴图和MRAE混合图贴到正确位置即可。

将做好的贴图资源导入到编辑器（工程）

### 材质设置：

导入贴图贴到正确的卡槽上，设置透明模式为：镂空蒙版模式：

![img](https://arkimg.ark.online/1730184430534-8.png)

设置亮部颜色和暗部颜色：

![img](https://arkimg.ark.online/1730184430534-9.png)

想要其它风格化效果可以尝试调整其它卡通渲染参数

## 无光渐变关阴影植物：

![img](https://arkimg.ark.online/1730184430534-10.png)

当然，所有静态模型都可以关投影，

![img](https://arkimg.ark.online/1730184430534-11.png)

### 资产准备：

- FBX

- 贴图：
  - 颜色贴图，A通道放透明遮罩
  
  - 如果想要有渐变效果，需要贴图A通道是渐变模式，且材质模式为透明模式
  
  - ![img](https://arkimg.ark.online/1730184430535-12.png)![img](https://arkimg.ark.online/1730184430535-13.png)
  
     修改颜色：
  
    ![img](https://arkimg.ark.online/1730270086340-7.png)
  
  -  如果不想有渐变效果，直接使用mask遮罩即可，材质模式也改成mask透明模式。