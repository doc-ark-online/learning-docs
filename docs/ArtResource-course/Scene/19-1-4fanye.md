# 翻页

## 材质效果预览：

![img](https://arkimg.ark.online/1730614175822-10.gif)

## 资产准备：

- 需要一张用来做翻页效果的【颜色纹理】（右图），翻页的原理是依次读取贴图的n分之1，这次的样例是用到一个平分成四格的贴图，参数见后续说明。
- 一张用于【马赛克单元格】的图（左图）。
  <img src="https://arkimg.ark.online/1730614175821-1.png" alt="img" style="zoom:50%;" />

## 开始制作：

上传贴图到编辑器（工程）

打开材质编辑器窗口。然后打开材质编辑器窗口中的【高级属性】开关。

![img](https://arkimg.ark.online/1730614175821-2.png)

如果材质显示是黑色，先在单元格形状这里贴一张白色贴图。以免影响后续我们查看贴颜色贴图后的效果。

![img](https://arkimg.ark.online/1730614175821-3.png)

LED模式切换到【翻页效果】。

![img](https://arkimg.ark.online/1730614175821-4.png)

把贴图贴在【颜色纹理】。

![img](https://arkimg.ark.online/1730614175821-5.png)

设置一下【翻页动画】的参数。行数和列数根据这张贴图都应给2。再通过【频率】和【翻转触发间隔时间占比】这两个参数调整一下翻页速度。

![img](https://arkimg.ark.online/1730614175821-6.png)

关掉线性光。

![img](https://arkimg.ark.online/1730614175821-7.png)

贴上马赛克单元格贴图，设置一下参数。

![img](https://arkimg.ark.online/1730614175821-8.png)
