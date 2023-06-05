# 3.1 三维坐标系

::: tip 阅读本文大概需要 3 分钟。

在编辑器中搭建场景的时候，了解编辑器的坐标系规则，才可以更加容易的将内容摆放在自己需要的位置。

也能了解到想让物体往前移动，是更改哪个值，是应该加还是应该减等等。

接下来就来了解一下口袋方舟使用的 3D 坐标系。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?bvid=BV1xA411k7CE&vd_source=c94089b4804c1edb7b67c4629d433f6b" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1.了解坐标系

在学习口袋方舟之前，首先要了解一下口袋方舟所使用的坐标系。在一些 2D 游戏或者平面设计、数学等领域中，可能你已经接触了 2D 坐标系，也就是大家熟知的二维笛卡尔坐标系，该坐标系从原点（0,0）开始，向右伸出一条横轴，为 x 轴的正方向；向上伸出一条纵轴，为 y 轴的正方向，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn1JPA6HN7SwDi1kyEPxSTFb.png)

在游戏开发中，编辑 3D 场景时，只有两个坐标就无法定位到某个物体的具体位置了，所以引入 3D 坐标系来完成场景中每个物体的定位。

那么 3D 坐标系是如何定位一个物体，除了原来的 x、y 轴以外，还会新增一个轴向为 z 轴（可以理解为，把上面的 2D 坐标系倒下来放桌子上，然后在(0, 0)点位置再加一个垂直的轴-Z 轴。

在我们编辑器中，3D 坐标系如下图所示：

![image-20230602153538281](https://arkimg.ark.online/image-20230602153538281.webp)

左右方向是 X 轴（红色），前后方向是 Y 轴（绿色 ），上下方向是 Z 轴（蓝色）

* 基于坐标(0, 0, 0)点，如图所示，X 轴向右是正方向是变大，Y 轴向后是正方向是变大，Z 轴向上是正方向是变大。
* 所以，我们想让一个物体向正前方移动应该是**减少**Y 的值；向右移动是**增加**X 的值；向下移动是**减少**Z 的值。

在编辑器中，视角是会随时变化的，视角变化后当前世界的坐标轴是什么方向就不确定了，这个时候可以通过主视口的左下角这里，查看当前的坐标系信息，这里是会随着你视角转动而实时变化的，如图所示：

![image-20230602161738454](https://arkimg.ark.online/image-20230602161738454.webp)

除了主视口-左下角的信息以外，选中物体时，展示的拖拽箭头，其实也是一样的能体现坐标信息：

![image-20230602161920015](https://arkimg.ark.online/image-20230602161920015.webp)

这两个位置都符合默认设置：红色是 X 轴，绿色是 Y 轴，蓝色是 Z 轴，箭头方向为正方向！