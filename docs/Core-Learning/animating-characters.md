# 角色姿态与动画

::: tip 阅读本文大概需要 15 分钟。

在游戏中，角色要在不同时刻播放不同的角色动画，才可以让角色看起来更加的鲜活生动，口袋方舟提供了大量的动画供玩家使用，请一定要多多尝试不同的有趣的动画！

:::

## 1. 基础认知

一共有三种方式可以更改角色动作：**基础姿态**、**动画姿态**、**动画**

### 1.1 基础姿态

角色的基本姿态，包含待机、下蹲、行走、奔跑、跳跃、飞行、游泳等一套基础动画！不能单个状态控制。下发演示了基础的跑步和跳跃动画（注意左上角的那些按钮是演示用的，默认是不存在的，不用担心版本不同）：

<video controls src="https://arkimg.ark.online/UE4_ST84tjsSV6.mp4"/>

### 1.2 动画姿态

又叫**二级姿态**。在某一业务场景下的特定姿态，如持刀、持枪、趴下、瞄准、敬礼、爬梯、看书等等需要持续的状态！且部分姿态会根据用户的操作会播放不同的动画（如持枪姿态下，用户操作视角对着天空和对着地下，角色上半身会有对应的动画融合，使持枪对准的位置是天空或者地下）。开发者**需要手动控制停止**，可以单独控制任意姿态，还能控制在上半身播放还是下半身播放或者全身播放，同时只能播放一个动画姿态。下面演示播放一个“对焦姿势”的二级姿态,并且只播放上半身和只播放下半身的演示：

<video controls src="https://arkimg.ark.online/Efh3HgqmIkdQ.mp4"/>

### 1.3 动画

在某个业务场景下的动画，如扔手雷、换弹药、跳舞等！会自动结束。可以单独控制上半身播放还是下半身播放或者全身播放，同时只能播放一个动画。下方演示播放一个动画的效果，并且控制了只播放在上半身或下半身（能看出来，动画播放完成后会自动回到姿态）：

<video controls src="https://arkimg.ark.online/uiEQPyyt7xXc.mp4"/>

### 1.4 几种方式的优先级和区别

以上**三种方式，可以同时存在**，但是**每种方式自身同时只能存在一个**。如果多种方式同时存在时按照以下规则播放：

* 动画最优先，有动画时会播放动画，不管上半身还是下半身还是全身。
* 然后是二级姿态优先，没有动画播放时，存在二级姿态则会播放二级姿态，不管上半身还是下半身还是全身。
* 最低优先级的是基础姿态，不存在动画和二级姿态时，播放基础姿态。

演示效果，利用动画和二级姿态同时播放，控制不同位置，做到一边坐着一边挥手的效果（姿态 id:170905,动画 id:29755）：

<video controls src="https://arkimg.ark.online/dewpu8EJ42vN.mp4"/>

演示效果，利用基础姿态和二级姿态同时播放，做到边跑边持枪的效果(持枪姿态 id:94258)：

<video controls src="https://arkimg.ark.online/7QJsulOVYq3n.mp4"/>

## 2. 基础姿态

编辑器提供成套的基础姿态，可以在资源库的“基础姿态”中找到，如图：

![image-20230616155957563](https://arkimg.ark.online/image-20230616155957563.webp)

在选择不同的默认“体型类型”时，编辑器会自动切换为对应体型的角色基础姿态。

如，我们这里在对象管理器选中“Player”对象，属性面板中修改“体型类型”为"二次元成年男性",如图：

![image-20230616193004043](https://arkimg.ark.online/image-20230616193004043.webp)

再确定一下“使用平台角色形象”为不勾选状态（如果勾选中，则取消勾选）：

![image-20230620092025146](https://arkimg.ark.online/image-20230620092025146.webp)

我们此时运行起来游戏，会发现默认角色对象就变成一位男性了，且默认姿态也是男性的默认姿态了。如图：

![image-20230616193101525](https://arkimg.ark.online/image-20230616193101525.png)

### 2.1 使用基础姿态

* 在资源库中，找到基础姿态，右键复制资源ID ，这里我们选择“写实\_男性\_基础姿态"复制资源ID

* ![image-20230619112304310](https://arkimg.ark.online/image-20230619112304310.webp)

* 我们创建一个脚本来演示角色的姿态，新建脚本命名为 `AnimationControl`，拖拽脚本**挂载到对象管理器**中，然后双击脚本编写代码。

* 首先异步获取角色对象，获取到角色对象后，直接更改 character 的`basicStance`属性为我们刚才复制的 assetId ：119836，代码如下：

* ```typescript
  @Component
  export default class AnimationControl extends Script {
      /** 当脚本被实例后，会在第一帧更新前调用此函数 */
      protected onStart(): void {
          if (SystemUtil.isClient()) {
              // 设置基础姿态为119836
              const stance = Player.localPlayer.character.loadStance("119836"); //[!code focus]
              stance.play(); //[!code focus]
          }
      }
  }
  ```
  
* 运行游戏之前，把 Player 对象的“体型类型”改回“二次元成年女性”，方便我们运行看效果。

* 改回女生后，我们再运行游戏看看效果，能看到默认站立状态、走路状态、跳跃状态，都不是之前身娇体柔的小女生姿态了。


* **更改基础姿态**为`119836` 的情况：
<video controls src="https://arkimg.ark.online/kZaco5cdyVx3.mp4" />

* 然后我们对比一下看看修改之前，**没有更改基础姿态**的情况：
<video controls src="https://arkimg.ark.online/7YAEoXlJQngM.mp4" />



## 3. 二级姿态

基础姿态是玩家基础行为的动画，想进行更细微更自定义的姿态控制，如看书、开车、持枪、瞄准、爬梯、扛东西等，就需要用上二级姿态了。可以在资源库的“动画姿态”找到所有的二级姿态。

![image-20230619163702538](https://arkimg.ark.online/image-20230619163702538.webp)

### 3.1 播放二级姿态

我这里使用“双手步枪探头瞄准姿态”的 assetId `20308` 来演示使用二级姿态。

先在资源库选中资源，右键`复制资源 ID`备用，打开刚才新建的`AnimationControl`脚本，在获取到角色对象后,需要先下载一下二级姿态的资源，然后使用 character 的`loadSubStance`函数加载二级姿态，然后通过返回的对象播放该姿态，代码如下：

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // 设置基础姿态为 119836 (写实-男性-基础姿态)
            // const stance = Player.localPlayer.character.loadStance("119836");
            // stance.play();

            // 定义一个放姿态 assetId 的变量，后面引用
            const stanceGuid = "20308"; //[!code focus]
            // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            await AssetUtil.asyncDownloadAsset(stanceGuid); //[!code focus]
            // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            const subStance = Player.localPlayer.character.loadSubStance(stanceGuid); //[!code focus]
            // 设置姿态播放模式为全身播放(StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            subStance.blendMode = StanceBlendMode.WholeBody; //[!code focus]
            // 使用姿态对象调用播放接口
            subStance.play(); //[!code focus]
        }
    }
}
```

运行效果视频：
<video controls src="https://arkimg.ark.online/R0ZFp3HlBtKd.mp4" />

### 3.2 设置姿态混合模式

姿态混合模式可以控制角色的某个身体部位来播放姿态，下面讲解如何使用。

控制只播放上半身:

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // 设置基础姿态为 119836 (写实-男性-基础姿态)
            // const stance = Player.localPlayer.character.loadStance("119836");
            // stance.play();

            // 定义一个放姿态 assetId 的变量，后面引用
            const stanceGuid = "20308";
            // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            await AssetUtil.asyncDownloadAsset(stanceGuid);
            // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            const subStance = Player.localPlayer.character.loadSubStance(stanceGuid);
            // 设置姿态播放模式为上半身播放(Gameplay.StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            subStance.blendMode = StanceBlendMode.BlendUpper; //[!code focus]
            // 使用姿态对象调用播放接口
            subStance.play();
        }
    }
}
```

效果截图：

![image-20230721171030074](https://arkimg.ark.online/image-20230721171030074.png)

* 看得出来，下半身就没有变化，是默认的基础姿态了

播放模式还可以设置如下几种方式：

```typescript
enum StanceBlendMode {
    /** 只混合上半身 */
    BlendUpper = 0,
    /** 只混合下半身 */
    BlendLower = 1,
    /** 全身混合 */
    WholeBody = 2
}
```

### 3.3 停止二级姿态

有时有需求会停止二级姿态，只需要将 loadStance 获取到的对象留着，后面需要停止时直接调用它的`stop`函数即可停止播放二级姿态。如：

```typescript
// 设置基础姿态为 119836 (写实-男性-基础姿态)
const stance = Player.localPlayer.character.loadStance("119836");
// 停止二级姿态
subStance.stop()
```

### 3.4 使用姿态接口播放动画

姿态接口，除了用来播放姿态以外，还可以利用动画资源来作为姿态播放。表现效果就是会循环播放该动画，某些动画只有固定动作的，就比较合适用来作为姿态使用了，比如使用 assetId 为“8362”的坐下看书动画来作为姿态播放，更改动画 id 后的代码：

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // 设置基础姿态为 119836 (写实-男性-基础姿态)
            // const stance = Player.localPlayer.character.loadStance("119836");
            // stance.play();

            // 定义一个放姿态 assetId 的变量，后面引用
            const stanceGuid = "8362"; //[!code focus]
            // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            await AssetUtil.asyncDownloadAsset(stanceGuid);
            // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            const subStance = Player.localPlayer.character.loadSubStance(stanceGuid);
            // 设置姿态播放模式为全身播放(Gameplay.StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            subStance.blendMode = StanceBlendMode.WholeBody; //[!code focus]
            // 使用姿态对象调用播放接口
            subStance.play();
        }
    }
}
```

表现效果如下：

![image-20230721171759d756](https://arkimg.ark.online/image-20230721171759756.webp)

## 4. 动画

动画是用来控制角色动作的一类资源，例如游戏当中的走路、跑步、攻击、跳跃、释放技能等都属于动画，编辑器提供了一系列完整的优质动画资源，供开发者选择使用。

![image-20230721172241338](https://arkimg.ark.online/image-20230721172241338.webp)

### 4.1 播放动画

前面讲完了基础姿态和二级姿态的使用，这里动画的使用就非常简单了。

找到你想播放的动画，右键复制其资源 ID，等下在代码里面使用；我们这里选择"14497" 蛇舞动画来作为演示。

依然还是 `AnimationControl` 脚本，在获取到角色对象后，延时5000毫秒调用 character 的`loadAnimation`函数加载一个动画出来。

> 为什么要延时5000毫秒，因为动画播放会自动结束，很可能动画时长很短，启动起来之后闪一下就没了，所以延时来演示比较清楚。

注释掉播放姿态的代码后，播放动画代码如下：

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // ====== 演示更换基础姿态的代码 START =======
            // const stance = Player.localPlayer.character.loadStance("119836");
            // stance.play();
            // ====== 演示更换基础姿态的代码 END =======


            // ====== 演示更换二级姿态的代码 START =======
            // // 定义一个放姿态 assetId 的变量，后面引用
            // const stanceGuid = "8362" 
            // // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            // await AssetUtil.asyncDownloadAsset(stanceGuid);
            // // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            // const subStance = Player.localPlayer.character.loadSubStance(stanceGuid);
            // // 设置姿态播放模式为全身播放(Gameplay.StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            // subStance.blendMode = StanceBlendMode.WholeBody; 
            // // 使用姿态对象调用播放接口
            // subStance.play();
            // ====== 演示更换二级姿态的代码 END =======

            // ====== 演示播放动画的代码 START =======
            setTimeout(async () => { //[!code focus]
                const animId = "14497"//[!code focus]
                // 下载动画资源//[!code focus]
                await AssetUtil.asyncDownloadAsset(animId);//[!code focus]
                // 加载动画对象//[!code focus]
                const anim = Player.localPlayer.character.loadAnimation(animId);//[!code focus]
                // 播放动画//[!code focus]
                anim.play();//[!code focus]
            }, 5000);//[!code focus]
            // ====== 演示播放动画的代码 END =======
        }
    }
}
```

启动游戏，延时5秒后可以看到效果

<video controls src="https://arkimg.ark.online/ZjR91JD1urg7.mp4"/>

### 4.2 动画播放插槽

改动下代码，只让角色下半身播放动画，将 anim 对象的 slot 属性设置为`AnimSlot.Lower`，代码如下：

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // ====== 演示更换基础姿态的代码 START =======
            // const stance = Player.localPlayer.character.loadStance("119836");
            // stance.play();
            // ====== 演示更换基础姿态的代码 END =======


            // ====== 演示更换二级姿态的代码 START =======
            // // 定义一个放姿态 assetId 的变量，后面引用
            // const stanceGuid = "8362" 
            // // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            // await AssetUtil.asyncDownloadAsset(stanceGuid);
            // // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            // const subStance = Player.localPlayer.character.loadSubStance(stanceGuid);
            // // 设置姿态播放模式为全身播放(Gameplay.StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            // subStance.blendMode = StanceBlendMode.WholeBody; 
            // // 使用姿态对象调用播放接口
            // subStance.play();
            // ====== 演示更换二级姿态的代码 END =======

            // ====== 演示播放动画的代码 START =======
            setTimeout(async () => {
                const animId = "14497"
                // 下载动画资源
                await AssetUtil.asyncDownloadAsset(animId);
                // 加载动画对象
                const anim = Player.localPlayer.character.loadAnimation(animId);
                // 设置动画播放为下半身（要注意和姿态的接口不一样）
                anim.slot = AnimSlot.Lower;  //[!code focus]
                // 播放动画
                anim.play();
            }, 5000);
            // ====== 演示播放动画的代码 END =======
        }
    }
}
```

运行游戏后等待5秒，播放效果：

<video controls src="https://arkimg.ark.online/NFbczeClu8mk.mp4"/>

播放插槽列表如下：

```typescript
enum AnimSlot {
    /** 默认插槽 */
    Default = 0,
    /** 上半身插槽 */
    Upper = 1,
    /** 下半身插槽 */
    Lower = 2,
    /** 全身插槽 */
    FullyBody = 3
}
```

### 4.3 停止动画

使用`loadAnimation`获取的动画对象来调用`stop`函数即可，例：

```typescript
anim.stop()
```

## 5. 组合二级姿态和动画

二级姿态和动画的使用我们都学完了，上半身播姿态，下半身播动画的融合效果如下：
<video controls src="https://arkimg.ark.online/lSJQtf4ThzTM.mp4"/>


代码示例：

```typescript
@Component
export default class AnimationControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // // ====== 演示更换基础姿态的代码 START =======
            // const stance = Player.localPlayer.character.loadStance("119836");
            // stance.play();
            // // ====== 演示更换基础姿态的代码 END =======


            // ====== 演示更换二级姿态的代码 START =======
            // 定义一个放姿态 assetId 的变量，后面引用
            const stanceGuid = "8362"; //[!code focus]
            // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            await AssetUtil.asyncDownloadAsset(stanceGuid); //[!code focus]
            // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            const subStance = Player.localPlayer.character.loadSubStance(stanceGuid); //[!code focus]
            // 设置姿态播放模式为全身播放(Gameplay.StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            subStance.blendMode = StanceBlendMode.BlendUpper;  //[!code focus]
            // 使用姿态对象调用播放接口
            subStance.play(); //[!code focus]
            // ====== 演示更换二级姿态的代码 END =======

            setTimeout(async () => { //[!code focus]
                // ====== 演示播放动画的代码 START =======
                const animId = "14497"; //[!code focus]
                // 下载动画资源
                await AssetUtil.asyncDownloadAsset(animId); //[!code focus]
                // 加载动画对象
                const anim = Player.localPlayer.character.loadAnimation(animId); //[!code focus]
                // 设置动画播放为下半身（要注意和姿态的接口不一样）
                anim.slot = AnimSlot.Lower; //[!code focus]
                // 播放动画
                anim.play(); //[!code focus]
                // ====== 演示播放动画的代码 END =======
            }, 5000); //[!code focus]
        }
    }
}
```



## 6. 预览动画效果

在具体动画资源的右上角，有一个+号按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景看效果的时间。

> 点出来预览窗口后，直接点击其他资源也可以直接预览，就不用每个资源都点一次放大镜了

![](https://cdn.233xyx.com/1681130073576_078.gif)

## 7. 演示项目代码

[点击下载演示项目](https://arkimg.ark.online/MainCourseAnimationDemo-027.zip)