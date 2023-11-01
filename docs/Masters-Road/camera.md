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

![image-20230726105221009](https://arkimg.ark.online/image-20230726105221009.png)



## 2. 摄像机预设

**预设种类：**

| 模式         | 英文名称             | 枚举值 | 说明                         |
| ------------ | -------------------- | ------ | ---------------------------- |
| 第一人称     | FirstPerson          | 0      | 第一人称视角的摄像机效果     |
| 第三人称     | ThirdPerson          | 1      | 第三人称视角的摄像机效果     |
| 俯视角       | TopDownAngle         | 2      | 俯视角 45 度的摄像机效果     |
| 默认         | Default              | 3      | 类似樱花校园模拟器的默认效果 |
| TPS 过肩视角 | TPSOverShoulderAngle | 4      | 第三人称过肩视角的摄像机效果 |
| FPS 射击视角 | FPSShootingAngle     | 5      | 第一人称射击视角的摄像机效果 |

**切换摄像机预设的代码：**

```typescript
@Component
export default class CameraControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //客户端才能获取到相机
        if (SystemUtil.isClient()) {
            // 获取当前摄像机
            let cs = Camera.currentCamera;
            // 切换摄像机预设
            cs.preset = CameraPreset.FirstPerson
        }
    }
}
```

<video controls src="https://cdn.233xyx.com/1681124470620_938.mp4"></video>



## 3. 多摄像机的运用

除了世界对象中默认存在的Camera，我们还可以通过从资源库的**游戏功能对象**中找到**摄像机**，可以直接将其拖到主视口中生成摄像机对象。

![image-20231030165926872](https://arkimg.ark.online/image-20231030165926872.webp)

我们可以使用`Camera.switch`在多个相机之间进行切换,实现一些有趣的玩法，首先将摄像机拖至场景中，调整好位置，如图：

![image-20231031113025568](https://arkimg.ark.online/image-20231031113025568.webp)

调整好每个摄像机的参数，示例中调整了摄像机碰撞和使用控制器旋转，如图：

![image-20231031131624637](https://arkimg.ark.online/image-20231031131624637.webp)

随后编写脚本，ChangeCamera，脚本内容如下：

```typescript
@Component
export default class ChangeCamera extends Script {
    
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        console.log("start");
        if (SystemUtil.isClient()) {
            this.initCamera();
        }
    }
    /**
     * 初始化摄像机
     */
    private async initCamera() {

        //获取场景中的摄像机
        let camera_1 = await GameObject.asyncFindGameObjectById("174DB24A") as Camera;
        let camera_2 = await GameObject.asyncFindGameObjectById("29F62ED8") as Camera;

        //获取角色初始摄像机
        let camera_Default = Camera.currentCamera;

        //添加按键方法，按下"1"键切换一号摄像机
        InputUtil.onKeyDown(Keys.One, () => {
            Camera.switch(camera_1, 1, CameraSwitchBlendFunction.EaseInOut,5)
        })

        //添加按键方法，按下"2"键切换二号摄像机
        InputUtil.onKeyDown(Keys.Two, () => {
            Camera.switch(camera_2, 1, CameraSwitchBlendFunction.EaseInOut, 5)
        })

        //添加按键方法，按下"3"键切换回初始摄像机
        InputUtil.onKeyDown(Keys.Three, () => {
            Camera.switch(camera_Default,0)
        })
    }
}
```

将`ChangeCamera`脚本拖入场景，运行游戏按键"1,2,3"就可以自由切换相机了：

<video controls src="https://arkimg.ark.online/027MoreCamera1.mp4"></video>



::: tip TIPS。

- 使用switch切换摄像机时，可以实现瞬间切换到新的摄像机，也可以使用编辑器提供的多种混合效果，完成匀速/变速的运镜效果

- 各个摄像机对象及其弹簧臂的属性值都是独立的，如果想在游戏中实现多种摄像机效果变换时，可以考虑两种制作思路
  - 如果各种摄像机效果差别不大，我们可以使用同一个摄像机对象，通过修改属性来实现效果的切换
  - 如果各种摄像机效果差别较大，需要调整较多属性，我们可以创建多个摄像机对象，各个摄像机对象用于实现专门的效果，通过switch接口来实现效果的切换

:::