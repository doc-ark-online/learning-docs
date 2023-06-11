# 初生点

::: tip 阅读本文大概需要 3 分钟。

口袋方舟编辑器默认为每个玩家创建了一个可操控角色，那么游戏开始时，这个角色出生在哪里呢？这时初生点就派上用场了。

:::

更多初生点使用见产品文档：[初生点](https://docs.ark.online/GameplayObjects/SpawnPoint.html)

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=863312444&bvid=BV1uG4y1Q7ny&cid=978207160&page=1" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 什么是初生点

在多人游戏开发中，所有客户端对应的玩家都会出生在一个地图中，但是玩家角色具体出现在地图的位置就由初生点来控制了，默认我们创建一个工程，都会自动生成一个初生点，如图：

![image-20230609193735698](https://arkimg.ark.online/image-20230609193735698.webp)

默认运行游戏后，玩家角色就会从该位置创建出来，那么角色被创建出来后，面向哪个方向呢？可以看到在初生点上有一个蓝色的箭头，该箭头就指向了角色创建出来后的朝向方向，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn3e9m8ZUpATt2t2y278Sclf.gif)

## 2. 创建初生点

除了默认的初生点，我们还可以往场景当中拖拽多个初生点，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnbjSa8ALjrW3BSMDBsB3obh.png)

当游戏中存在多个初生点时，游戏运行后会随机选择一个初生点创建角色。如果场景中没有任何一个初生点时，游戏运行后，角色将会被创建在地图原点（0,0,0）。

## 3. 使用初生点的注意事项

一般来说新创建的场景 ，初生点都会在地面以上，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnuK74ObtGrfuVvsimKGqaHf.png)

如果出现初生点移动到了地面的下边，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnobeRs47psTHv5DRFDzuOmf.png)

就会出现角色一开场就往下落的情况，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnYB0TZJw8sDSQ20FH7iTFId.gif)

- 场景中有多个出生点时，玩家角色将会随机一个初生点出生
- 场景中一个初生点都没有时，玩家角色将在（0，0，0）点出生
  - 此时，如果地面位置没变，运行游戏结果就是会如上图一般开局往下落
  - 如果初生点的位置是在地面以上，也出现类似的往下掉，可能是没有给地面开启碰撞导致的，在**对象管理器**选中地面后在属性面板开启碰撞即可
  - ![image-20230609194138219](https://arkimg.ark.online/image-20230609194138219.webp)


## 4. 拓展-锁定和隐藏

如上所说，地面相关设置也很重要，创建默认场景会携带一个地面：用户可以设置位置，旋转，缩放等参数。

可以发现，咱们默认不能在场景里面选中地面，是为什么呢？

如下图，可以看到 Ground 的最右侧有一个锁住的图标，点击一下该图标，我们就能在主视口里选中地面了

![image-20230609194253015](https://arkimg.ark.online/image-20230609194253015.webp)

这个图标代表的意思：将该物体在场景中锁住，不可以在场景中选中。这就是锁定功能。

平时看不见该图标，只要将鼠标移动到对应物体上的时候才会展示该图标，如图：

![image-20230609194417320](https://arkimg.ark.online/image-20230609194417320.webp)

鼠标放上去之后可以看到，除了小锁图标以外，旁边还有个小眼睛。这个是显示隐藏功能。

点击这个小眼睛，就可以隐藏对应的物体，我们拿 DefaultUI 举例，如图我们是还没隐藏的情况：

![image-20230609194628582](https://arkimg.ark.online/image-20230609194628582.webp)

可以看到①的地方没有任何变化，②和③也能正常展示。

现在我们鼠标放到对象管理器的 DefaultUI 这里，点击小眼睛，结果如图：

![image-20230609194742392](https://arkimg.ark.online/image-20230609194742392.webp)

小眼睛变成了小睫毛，并且鼠标不在上面的时候也可见了，DefaultUI 也变成了灰色。

同时能看到主视口中已经看不到了摇杆和按钮！

但是！这个时候我们运行游戏查看一下，发现还是能看到摇杆和按钮！

这是因为小锁和小眼睛这两个功能，都只是为了我们在编辑场景的时候方便的，并**不会对运行时产生影响**！



总结：

* 鼠标放到对象管理器的 item 上可以看到小锁和小眼睛
* 小锁点击后会让物体在场景中无法选中
* 小眼睛点击后可以把该物体在场景中隐藏
* 小锁和小眼睛都只在编辑时生效，不影响游戏运行