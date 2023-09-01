# 图片

::: tip 阅读本文大概需要 8 分钟。

在游戏的 UI 控件中，图片控件的使用频率是比较高的，玩手游的时候可以看到各种 UI 图片显示在屏幕上，那么我们第一个 UI 控件就来学习图片控件吧！

:::

## 1.创建图片控件

图片控件就是用来显示图像资源的，并给与了三种图像绘制模式，使用起来非常简单方便。双击我们创建的“MyUI”文件打开 UI 编辑器，将“控件”中的“图片”拖拽到画布上来，如图：

![UE4_9ED68Rpcfo](https://arkimg.ark.online/UE4_9ED68Rpcfo.webp)

单击选中该图片，在“对象属性”面板中显示如下：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnOdeQZIvAmFRVGvyQ4LuPud.png)

## 2.显示图片

先来说一下什么是 UI 资源，UI 资源本质上为 UI 贴图资源，是贴图资源的一部分，也是一张图片，特点在于 UI 资源一般情况下仅用于 UI 设计，而不用于静态模型的贴图表现。口袋方舟提供了大量的 UI 资源，供开发者使用。

![UE4_3DljstxLZb](https://arkimg.ark.online/UE4_3DljstxLZb.webp)

在“资源库”中，找一个 UI 类型的资源，注意，图片控件只支持显示 UI 贴图类型的资源，不支持显示图片类型的资源。如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnCFFTMDb5QxK6pVcjIwZD7d.png)

将该资源拖拽到图片控件的“对象属性”面板中的“图片”属性中，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKZjmewJfUXfyT3CPKCHXwf.png)

如上图，可以看到，图像已经显示了出来。

## 3.修改颜色

在“对象属性”面板中，单击“图片颜色”属性，可以在打开的“取色器”面板中进行颜色选取，选择颜色完成后单击“确定”按钮来修改图片颜色，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnh1ZrmmGQXLqFrApClaTADc.png)

可以看到图片已经改变了颜色，通过这种方法，一张图片我们就可以显示不同的颜色了，最终图片效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnqi64fr14TTmd2QK0CwlBTc.png)

## 4.图片旋转

在“对象属性”面板中，修改“角度”属性，可以看到，图片已经开始旋转起来，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn6GDg5Wh7QS66Vzyglh2sPh.gif)

虽然我们已经进行了旋转，但是我们可以看到我们的图像是绕中心位置旋转的，我们在做游戏的过程中，常常需要图像能绕不同的点进行旋转，例如可以绕左上角的点旋转或者是右下角的点旋转，那么怎么实现呢？这时候就需要用到“锚点”了！

锚点是一个坐标值，默认为（0.5,0.5），锚点拥有一个特殊的坐标系，每个图片的左上角为坐标(0,0)点，左下角为(0,1)点，右上角为(1,0)点，右下角为坐标(1,1)点，所以也就明白，默认的(0.5,0.5)其实是图片的中心点了，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn8m080eetTOa37S7U5MuiBf.png)

当图片旋转起来，会绕着锚点进行旋转，当我们把锚点数值进行修改，旋转样式也会发生改变，如图，这里我们将锚点设置为（1,1）：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnWIiQpb25HrHoGR8q78vNLg.png)

再次旋转图片，可以看到，图片开始绕右下角进行旋转了，与原本的旋转轨迹发生偏差，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnG7TjpQ43Hz8bJgxkiHpDIQ.gif)

## 5.图片倾斜

在“对象属性”面板中，修改“渲染倾斜度”属性，可以使图片发生倾斜，而倾斜也是根据图片的锚点进行倾斜，这里我们看一下锚点在(0,0)位置的倾斜效果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnyceWHKEk4yYNAl1G9D2TMf.gif)

可以看到锚点所在的图像上方保持固定，下方倾斜。接下来我们再看一下锚点在（1,1）位置的倾斜效果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnirAGjp5XtXCDaC97DTuLKg.gif)

可以看到锚点所在的图像下方保持固定，上方倾斜。

## 6.图片缩放

在使用图片的过程中，我们常常需要修改图片的大小，这里我们可以直接修改图片分辨率进行缩放，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGtpy7wlgEIxve9PX11JDRd.gif)

也可以通过“渲染缩放”，通过设置 x 与 y 轴的倍数进行图像缩放，而且该属性也会依赖于锚点，这里展示锚点在(1,1)位置的缩放效果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn14jUOLrvyWzcK7k1D9COl0.gif)

## 7.图片透明

在使用图片的过程中，我们有时需要修改图片的透明度，达到半透明或全透明效果，这里我们也有两种实现方法。第一种，使用上述第 3 小节中图片修改颜色的方法，在“取色器”面板中，修改图像的 Alpha 通道即可达到半透明效果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGFdasy9NWginHTAcdXMM6d.png)

第二种，通过修改“渲染透明”属性，即可达到半透明效果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnK7ukyTfNu5uhh1tgrdtJLc.png)

## 8.绘制类型

图片控件提供给我们三种图像绘制类型：图片、九宫格、边界绘制，接下来我们依次进行展示。

### 8.1 图片类型

大多数情况下，我们都会使用默认的图片类型去显示一张图片，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn5BGw2iFTV0GIOhiysJzVAb.png)

### 8.2 九宫格类型

九宫格类型可以在显示图像的同时，设置显示图像的四个边与图片控件(绿框部分)的四个边之间的距离，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn7EdwZriziu0zUKtIeaR15f.png)

九宫格划分图片后，可以按照上图中看出，当图片缩放时，只有四个角是不会拉伸的，其他部分会按照黄色箭头进行拉伸，而一般九宫格我们只需要设置上下左右四个分割线距离上下左右四个边的边距即可，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnqyz2Zcf1xH8nZaz9jBUJcf.png)

### 8.3 边界绘制类型

边界绘制类型与九宫格类似，提供上下左右四个边界并划分出九宫格后，中间部分的内容会掏空不显示，只显示四周内容，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn06X1JMGlFF3FDx9pB5oZWh.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKSI5Al0jnZE0fJLYeY4ZKe.png)