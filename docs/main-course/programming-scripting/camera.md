# 摄像机

::: tip 阅读本文大概需要 5 分钟。

对于 3D 游戏而言，什么样的摄像机设置，配合什么样的游戏风格与类型也是十分重要的，例如动作类游戏、RPG 类游戏、RTS 类游戏、恐怖类游戏、赛车类游戏等等，这些游戏配合不同的摄像机设置才能达到最佳的游戏效果。

:::

更多摄像机使用见产品文档：[摄像机](https://docs.ark.online/WorldObjects/Camera.html)

## 1. 摄像机设置

首先我们要了解什么是摄像机，编辑器中的摄像机就类似我们现实生活中的摄像机一样，被摄像机拍摄到的内容，最终会显示到屏幕上，也就是说玩家在玩游戏时，屏幕上显示的内容就是摄像机当前正在拍摄的内容，你也可以认为摄像机就是代替玩家去看游戏世界的一双眼睛。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnJkfKpfb61XpjYx09adZieg.png)

在我们的编辑器中，默认每个场景会存在一个摄像机，该摄像机会自动跟拍我们的玩家角色，所以即便你创建了一个空工程，也会看到游戏画面会随着角色移动而移动。

在我们编辑器的“对象管理器”窗口中，可以看到一个游戏物体叫做 Camera，该游戏物体就是我们当前游戏使用的摄像机了，鼠标单击选中“Camera”，可以看到在属性面板中包含了大量的摄像机设置，可以根据自己的需要进行设置修改，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn6yuewhGzg7KLuI8UDI7jde.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnEKCe1yzsiTQeUCRH9FQEWh.png)

## 2. 摄像机模式

| 模式         | 英文名称             | 枚举值 | 说明                         |
| ------------ | -------------------- | ------ | ---------------------------- |
| 第一人称     | FirstPerson          | 0      | 第一人称视角的摄像机效果     |
| 第三人称     | ThirdPerson          | 1      | 第三人称视角的摄像机效果     |
| 俯视角       | TopDownAngle         | 2      | 俯视角 45 度的摄像机效果     |
| 默认         | Default              | 3      | 类似樱花校园模拟器的默认效果 |
| TPS 过肩视角 | TPSOverShoulderAngle | 4      | 第三人称过肩视角的摄像机效果 |
| FPS 射击视角 | FPSShootingAngle     | 5      | 第一人称射击视角的摄像机效果 |

<video controls src="https://cdn.233xyx.com/1681124470620_938.mp4"></video>