# 摄像机

::: tip 阅读本文大概需要 5 分钟。

对于 3D 游戏而言，什么样的摄像机设置，配合什么样的游戏风格与类型也是十分重要的，例如动作类游戏、RPG 类游戏、RTS 类游戏、恐怖类游戏、赛车类游戏等等，这些游戏配合不同的摄像机设置才能达到最佳的游戏效果。

:::

更多摄像机使用见产品文档：[摄像机](https://docs.ark.online/WorldObjects/Camera.html)

## 1. 摄像机设置

首先我们要了解什么是摄像机，编辑器中的摄像机就类似我们现实生活中的摄像机一样，被摄像机拍摄到的内容，最终会显示到屏幕上，也就是说玩家在玩游戏时，屏幕上显示的内容就是摄像机当前正在拍摄的内容，你也可以认为摄像机就是代替玩家去看游戏世界的一双眼睛。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnJkfKpfb61XpjYx09adZieg.png)

在我们的编辑器中，默认每个场景会存在一个摄像机，该摄像机会自动跟拍我们的玩家角色，所以即便你创建了一个空工程，也会看到游戏画面会随着角色移动而移动。

在我们编辑器的“对象管理器”窗口中，可以看到一个游戏物体叫做 “Camera”，该游戏物体就是我们当前游戏使用的摄像机了，鼠标单击选中“Camera”，可以看到在属性面板中包含了大量的摄像机设置，可以根据项目的需要对属性参数和设置进行修改，如图：

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
            // 切换摄像机预设（不同预设只需要更换枚举值即可）
            cs.preset = CameraPreset.FirstPerson
        }
    }
}
```

<video controls src="https://cdn.233xyx.com/1681124470620_938.mp4"></video>



## 3. 多摄像机的运用

除了世界对象中默认存在的Camera，我们还可以通过从资源库的**游戏功能对象**中找到**摄像机**，可以直接将其拖到主视口中生成摄像机对象。

![image-20231030165926872](https://arkimg.ark.online/image-20231030165926872.webp)

我们可以在脚本中通过使用API `Camera.switch`在多个相机之间进行切换,实现一些有趣的玩法，首先将摄像机拖至场景中，调整好位置，如图：

![image-20231031113025568](https://arkimg.ark.online/image-20231031113025568.webp)

调整好每个摄像机的参数，下图示例中调整了 “是否有摄像机碰撞” 和 “使用控制器控制摄像机旋转”，如图：

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



::: tip Tips：

- 使用switch切换摄像机时，可以实现瞬间切换到新的摄像机，也可以使用编辑器提供的多种混合效果，完成匀速/变速的运镜效果

- 各个摄像机对象及其弹簧臂的属性值都是独立的，如果想在游戏中实现多种摄像机效果变换时，可以考虑两种制作思路
  - 如果各种摄像机效果差别不大，我们可以使用同一个摄像机对象，通过修改属性来实现效果的切换
  - 如果各种摄像机效果差别较大，需要调整较多属性，我们可以创建多个摄像机对象，各个摄像机对象用于实现专门的效果，通过switch接口来实现效果的切换

:::

本章节将会展示，使用摄像机对象提供的API制作出的各种功能。

## 4. 摄像机的实际应用

### 4.1.看向物体

使用 Camera 对象提供的 [LookAt](https://api-docs.ark.online/classes/mw.Camera.html#lookat) 接口即可实现让摄像机看向一个物体。

```ts
// 这里的"cat"就是图中的小猫
Camera.currentCamera.lookAt(cat)
```

![img](https://arkimg.ark.online/20231201184629_rec_.gif)

### 4.2.旋转延迟

修改 Camera 对象的 [rotationLagEnabled属性](https://api-docs.ark.online/classes/mw.Camera.html#rotationlagenabled) 即可实现让摄像机在旋转时进行平滑移动。

```ts
// 开启旋转延迟
Camera.currentCamera.rotationLagEnabled = true
```

![img](https://arkimg.ark.online/20231201184949_rec_.gif)

### 4.3.锁定目标

锁定目标，即让摄像机持续看向一个物体。

使用 Camera 对象提供的 [lock](https://api-docs.ark.online/classes/mw.Camera.html#lock) 接口即可实现让摄像机锁定一个物体

```ts
// 相机锁定“cat”
Camera.currentCamera.lock(cat, { lockInterval: 0, lockSpeed: 0, lockRange: 500, lockDistance: 5000, lockOffset: new Vector(0, 0, 80), bPause: true })
```

![img](https://arkimg.ark.online/20231201185158_rec_.gif)

### 4.4.固定摄像机

固定摄像机，即切换摄像机的位置模式属性，从而让摄像机固定在一个位置，不再跟随目标移动。（常用来制作观战功能）

修改 Camera 对象的 [positionMode属性](https://api-docs.ark.online/classes/mw.Camera.html#positionmode) 即可实现让摄像机切换位置模式。

```ts
// 将摄像机位置模式切换为“位置固定”
Camera.currentCamera.positionMode = CameraPositionMode.PositionFixed
```

![img](https://arkimg.ark.online/20231201185724_rec_.gif)

### 4.5.切换跟随目标

修改 Camera 对象的 parent 属性 即可实现让摄像机切换跟随目标。

```ts
// 将摄像机的 parent 修改为 cat
Camera.currentCamera.parent = cat
// 注意！ 设置完parent之后，需要重置一下弹簧臂的本地坐标，否则会产生偏移
Camera.currentCamera.springArm.localTransform.position = Vector.zero
```

![img](https://arkimg.ark.online/20231201190055_rec_.gif)

### 4.6.摄像机抖动

使用 Camera 对象提供的 [shake](https://api-docs.ark.online/classes/mw.Camera.html#shake) 接口即可实现让摄像机抖动。（抖动参数可以自行设置）

```ts
Camera.shake({ positionYAmplitude: 1, positionYFrequency: 0.5, positionZAmplitude: 10, positionZFrequency: 5 }, 2)
```

![img](https://arkimg.ark.online/20231201190247_rec_.gif)



### 4.7.摄像机的实际应用Demo

https://arkimg.ark.online/%E6%91%84%E5%83%8F%E6%9C%BA.rar