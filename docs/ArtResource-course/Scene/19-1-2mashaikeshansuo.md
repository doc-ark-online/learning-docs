# 马赛克闪烁图案

## 材质效果预览：

![img](https://arkimg.ark.online/1730612077793-20.gif)

## 资产准备：

- 需要一张用来做马赛克单元格的黑白图（白色部分调成你想要的效果，例如闪烁五角星，爱心等）。
  <img src="https://arkimg.ark.online/1730612077791-1.png" alt="img" style="zoom:25%;" />

- 需要一张用来做遮罩的图。
  <img src="https://arkimg.ark.online/1730612077791-2.png" alt="img" style="zoom:25%;" />

- 准备一张带通道的主颜色图（图一），这张图需要在Alpha通道（简称A通道）把狗狗的腮红位置留出来（如图二），其他通道不用动。（A通道是透明通道，它的原理是：黑透白不透，所以最后我们用到的只有通道内留出白色的部分）。
  <img src="https://arkimg.ark.online/1730612077791-3.png" alt="img" style="zoom:50%;" />

| 图一                                                         | 图二                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://arkimg.ark.online/1730612077791-4.png" alt="img" style="zoom:25%;" /> | <img src="https://arkimg.ark.online/1730612077791-5.png" alt="img" style="zoom:38%;" /> |



## 开始制作：

导入上传贴图到编辑器（工程）

打开材质编辑器窗口。然后打开材质编辑器窗口中的【高级属性】开关。

![img](https://arkimg.ark.online/1730612077791-6.png)

将【基础属性】工具栏中的【材质模式】切换到【广告牌】。再把【LED背景】这一栏中的【LED模式切换】切换到“故障模式”。

![img](https://arkimg.ark.online/1730612077792-7.png)

如果材质显示是黑色，先在【单元格形状】这里贴一张白色贴图。以免影响后续我们查看贴颜色贴图后的效果。

![img](https://arkimg.ark.online/1730612077792-8.png)

再把漫反射颜色调整一下。

![img](https://arkimg.ark.online/1730612077792-9.png)

把主颜色图（图1），遮罩黑白图（图2），马赛克单元格（图3），这三张图，贴在相应的位置。

| 图1                                                          | 图2                                                          | 图3                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://arkimg.ark.online/1730612077792-10.png" alt="img" style="zoom:17%;" /> | <img src="https://arkimg.ark.online/1730612077792-11.png" alt="img" style="zoom:25%;" /> | <img src="https://arkimg.ark.online/1730612077792-12.png" alt="img" style="zoom:17%;" /> |

主颜色图贴在这个位置。

![img](https://arkimg.ark.online/1730612077792-13.png)

马赛克单元格贴这里，调整一下LED背景颜色和平铺率。

![img](https://arkimg.ark.online/1730612077792-14.png)

遮罩图贴在这里。

![img](https://arkimg.ark.online/1730612077792-15.png)

关掉线性光。

![img](https://arkimg.ark.online/1730612077792-16.png)

把狗狗腮红处的呼吸灯做出来。

![img](https://arkimg.ark.online/1730612077792-17.png)

调整一下整体的色调映射设置，给点自发光。这个样例的参数如截图所示，如果需要更亮的话，数值还可以开高一点。

![img](https://arkimg.ark.online/1730612077792-18.png)
