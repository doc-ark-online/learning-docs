# 饰品绑定 

### 绑定基础设置

#### 设置模型顶点受骨骼影响限制，参考下图设置，模型顶点受骨骼影响数需≤4。![BDGF](https://arkimg.ark.online/BDGF-1740537528038-2.png)

### 饰品动态骨骼

带物理晃动效果的饰品需自行搭建骨骼，如不需要可直接绑定到对应身体部位即可。

<video controls src="https://arkimg.ark.online/饰品动态骨骼介绍.mp4" />

### 动态骨骼命名规范

请按照下列规范设置骨骼，当不符合下列标准时，会导致动态骨骼无效或效果异常。
- 单个部位FBX模型骨骼上限为100根。
- 带晃动效果骨骼第一根骨骼节点命名必须包含后缀“_Dynphy”。
- 末端骨骼命名必须包含后缀“_Nub ”。


#  教程：动态挂件

| 挂件名称： | 骨骼截图：                                             | 备注：对应的FBX参考源文件                                    |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| 耳饰       | ![img](https://arkimg.ark.online/1740381821353-22.png) | [点击下载文件](https://arkimg.ark.online/SM_Cartoon_Dress_ACershi_001.rar) |
| 面饰       | ![img](https://arkimg.ark.online/1740381821354-23.png) | [点击下载文件](https://arkimg.ark.online/SM_Cartoon_Dress_AKmiansha_001.rar) |
| 挂件饰品   | ![img](https://arkimg.ark.online/1740381821354-24.png) | [点击下载文件](https://arkimg.ark.online/SK_Cartoon_Prop_QHDSsan_001.rar) |

### 3dsMax：

- 导入官方提供的基础骨骼，基于基础模型搭建饰品骨骼。

   ![img](https://arkimg.ark.online/1740381821354-25.png)
- 按头饰模型走势搭建动态骨骼，按规范命名，并将动态骨骼链接到对应头部Head下。

   ![img](https://arkimg.ark.online/1740381821354-26.png)
- 选中耳饰添加绑定蒙皮命令“Skin”并添加对应的动态骨骼，选择模型顶点进行绑定蒙皮。

   ![img](https://arkimg.ark.online/1740381821354-27.png)
- 权重分配后可旋转骨骼检查模型蒙皮是否合理。

   ![img](https://arkimg.ark.online/1740381821354-28.png)
- 完成权重调整后，导出为FBX资源以备用。

   ![img](https://arkimg.ark.online/1740381821354-29.png)

###### MAX头饰骨骼搭建绑定全流程：

- 动态骨骼服装搭建绑定导出全流程

<video controls src="https://arkimg.ark.online/%E5%A4%B4%E9%A5%B0%E7%BB%91%E5%AE%9A%E6%B5%81%E7%A8%8B%20(1).mp4" />

- 无动态骨骼服装绑定导出全流程

<video controls src="https://arkimg.ark.online/%E5%A4%B4%E9%A5%B0%E7%BB%91%E5%AE%9A%E6%B5%81%E7%A8%8B2%20(1).mp4" />

### Maya:

- 导入官方提供的基础骨骼，基于基础模型搭建头饰骨骼。

   ![img](https://arkimg.ark.online/1740381821354-30.png)
- 选择装备面板创建骨骼或点击左侧顶部骨架面板按饰品模型走势创建动态骨骼。

   ![img](https://arkimg.ark.online/1740381821354-31.png)
- 骨骼搭建完成后按规范骨骼命名，并将动态骨骼链接到头部骨骼Head下。

   ![img](https://arkimg.ark.online/1740381821354-32.png)
- 选中模型点击顶部蒙皮面板选择“绑定蒙皮”，单个模型顶点最大受4根骨骼影响。

   ![img](https://arkimg.ark.online/1740381821354-33.png)
- 旋转头饰骨骼检查权重，针对不合理的权重进行手动调整。

   ![img](https://arkimg.ark.online/1740381821354-34.png)
- 权重优化，检查模型弯曲过渡是否均匀，完成后回到第0帧Apose。

   ![img](https://arkimg.ark.online/1740381821354-35.png)
- 完成权重调整后，按导出设置导出该饰品FBX。

   ![img](https://arkimg.ark.online/1740381821354-36.png)

### 注意事项：饰品绑定完成后，如果需要挪动位置，饰品模型需要重置坐标并重新绑定，否则会出现骨骼，动态效果错乱等问题。对比截图如下：

![img](https://arkimg.ark.online/1740381821354-37.png)

**解决方法：**调整好饰品位置后，复制一个模型出来方便重置后的模型拾取权重——避免重复绑定。

<video controls src="https://arkimg.ark.online/%E9%A5%B0%E5%93%81%E9%AA%A8%E9%AA%BC%E5%BC%82%E5%B8%B8%E8%A7%A3%E5%86%B3%20(1).mp4" />

# 资源导出

- 需要导出为FBX格式文件。
- 资源从DCC软件中导出，包含模型+骨骼（含动态骨骼）。
- 导出后即可进入口袋方舟进行资源上传（配置选择对应动态骨骼模板）。

### 导出设置：导出饰品FBX通用

- 选择对应模型部位物体与骨骼（目标模型，骨骼，动态骨骼及末端）。
- 轴向:Up Axis:Z-up,类型：Type:Binary
- 动画面板不勾选:Animation

###### 3dsMAX:

![img](https://arkimg.ark.online/1740381821354-38.png)

###### Maya：

![img](https://arkimg.ark.online/1740381821354-39.png)

###### Blender:

![img](https://arkimg.ark.online/1740381821354-40.png)