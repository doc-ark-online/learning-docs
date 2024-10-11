# 角色姿态与动画

::: tip 阅读本文大概需要 15 分钟。

在游戏中，角色要在不同时刻播放不同的角色动画，才可以让角色看起来更加的鲜活生动，口袋方舟提供了大量的动画供玩家使用，请一定要多多尝试不同的有趣的动画！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317933550&p=14&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

更多关于角色动画的详情内容请查阅：[动画与姿态 | 产品手册 (ark.online)](https://docs.ark.online/Role/AnimationAndStane.html)

## 1. 基础认知

一共有三种方式可以更改角色动作：**基础姿态**、**动画姿态**、**动画**。

### 1.1 基础姿态

角色的基本姿态，包含待机、下蹲、行走、奔跑、跳跃、飞行、游泳等一套基础动画！不能单个状态控制，其中又分为男女两组，根据人物的性别不同就会不同，这是编辑器初始自带的，一般情况下不需要我们操心。

### 1.2 动画姿态

又叫**二级姿态**。在某一业务场景下的特定姿态，如持刀、持枪、趴下、瞄准、敬礼、爬梯、看书等等需要持续的状态！二级姿态会覆盖掉基础姿态，且**需要开发者手动控制开始和停止** ，还可以控制上半身、下半身或者全身播放。

### 1.3 动画

在某个业务场景下的动画，如扔手雷、换弹药、跳舞等！会自动结束。可以单独控制上半身播放还是下半身播放或者全身播放，同时只能播放一个动画，动画有最高优先级，会覆盖掉二级姿态，但动画播放完成后会自动回到原来的姿态/二级姿态。

### 1.4 几种方式的优先级和区别

以上**三种方式，可以同时存在**，但是**每种方式自身同时只能存在一个**。如果多种方式同时存在时按照以下规则播放：

* 动画最优先，有动画时会播放动画，不管上半身还是下半身还是全身。
* 然后是二级姿态优先，没有动画播放时，存在二级姿态则会播放二级姿态，不管上半身还是下半身还是全身。
* 最低优先级的是基础姿态，不存在动画和二级姿态时，播放基础姿态。

## 2. 二级姿态

基础姿态有了玩家基础行为的动画。但是想进行更细微的姿态控制，如看书、开车、持枪、瞄准、爬梯、扛东西等效果，就需要用二级姿态了。可以在资源库的“动画姿态”找到所有的二级姿态。

![image-20240923191526767](https://arkimg.ark.online/image-20240923191526767.png)

### 播放二级姿态

我这里使用“双手步枪探头瞄准姿态”的 assetId `20308` 来演示使用二级姿态。

- 先在资源库选中资源，右键`复制资源 ID`备用。
- 我们创建一个脚本来演示角色的姿态，新建脚本命名为 `AnimationControl`，拖拽脚本挂载到场景中 Ground (或者是空锚点)中，然后双击脚本编写代码。

在获取到角色对象后,需要先下载一下二级姿态的资源，然后使用 character 的`loadSubStance`函数加载二级姿态，然后通过返回的对象播放该姿态，代码如下：

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
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

<video controls="" src="https://arkimg.ark.online/%E5%A7%BF%E6%80%811.mp4"></video>

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

### 2.2 停止二级姿态

停止时直接调用它的`stop`函数即可停止播放二级姿态。如：

```typescript
// 停止二级姿态
subStance.stop()
```

## 3. 动画

动画是用来控制角色动作的一类资源，例如游戏当中的走路、跑步、攻击、跳跃、释放技能等都属于动画，编辑器提供了一系列完整的优质动画资源，供开发者选择使用。

![image-20230721172241338](https://arkimg.ark.online/image-20230721172241338.webp)

### 3.1 播放动画

找到你想播放的动画，右键复制其资源 ID，等下在代码里面使用；我们这里选择"14497" 蛇舞动画来作为演示。

依然还是 `AnimationControl` 脚本，在获取到角色对象后，延时5000毫秒调用 character 的`loadAnimation`函数加载一个动画出来。

> 为什么要延时5000毫秒，因为动画播放会自动结束，很可能动画时长很短，启动起来之后闪一下就没了，所以延时来演示比较清楚。

播放动画代码如下：

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
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

<video controls="" src="https://arkimg.ark.online/%E5%A7%BF%E6%80%812.mp4"></video>

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

下面代码实现按 “1” 键播放上半身动画，按 “2” 键播放下半身动画，按 “3” 播放全身动画。

```typescript
@Component
export default class AnimationControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // ====== 演示播放动画的代码 START =======
            setTimeout(async () => { //[!code focus]
                const animId = "14497"//[!code focus]
                // 下载动画资源//[!code focus]
                await AssetUtil.asyncDownloadAsset(animId);//[!code focus]
                // 加载动画对象//[!code focus]
                const anim = Player.localPlayer.character.loadAnimation(animId);//[!code focus]

               
                // 按下键盘 1 键
                InputUtil.onKeyDown(Keys.One, () => {
                    // 动画播放的插槽位置选择上半身
                    anim.slot = AnimSlot.Upper; //[!code focus]

                    // 播放动画//[!code focus]
                    anim.play();//[!code focus]
                })
                
                // 按下键盘 2 键
                InputUtil.onKeyDown(Keys.Two, () => {
                    // 动画播放的插槽位置选择下半身
                    anim.slot = AnimSlot.Lower; //[!code focus]

                    // 播放动画//[!code focus]
                    anim.play();//[!code focus]
                })

                // 按下键盘 3 键
                InputUtil.onKeyDown(Keys.Three, () => {
                    // 动画播放的插槽位置选择全身
                    anim.slot = AnimSlot.FullyBody; //[!code focus]

                    // 播放动画//[!code focus]
                    anim.play();//[!code focus]
                })

            }, 5000);//[!code focus]
            // ====== 演示播放动画的代码 END =======
        }
    }
}
```

进入游戏，分别按下“1” “2” “3”键可以看到效果

<video controls="" video src="https://arkimg.ark.online/%E5%A7%BF%E6%80%813.mp4"></video>



### 3.2 停止动画

使用`loadAnimation`获取的动画对象来调用`stop`函数即可，例：

```typescript
anim.stop()
```

## 4. 组合二级姿态和动画

接下来我们举例混合使用二级姿态和动画来实现我们需要的常见动画效果，比如我们要做一个人物持枪，然后5秒后进行换弹操作（也可以是其他的，比如坐着挥手等等，原理是一样的）。


代码示例：

```typescript
@Component
export default class AnimationControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            // ====== 演示更换二级姿态的代码 START =======
            // 定义一个放姿态 assetId 的变量，后面引用
            const stanceGuid = "4172"; //[!code focus]
            // 因为姿态是属于资源类型，在远程资源库中，所以使用前先下载资源到本地(await 关键词的作用就是等待资源下载完成后再执行后面的代码)
            await AssetUtil.asyncDownloadAsset(stanceGuid); //[!code focus]
            // 使用角色的加载姿态接口，将姿态资源信息给角色对象, 生成姿态对象来控制
            const subStance = Player.localPlayer.character.loadSubStance(stanceGuid); //[!code focus]
            // 设置姿态播放模式为全身播放(Gameplay.StanceBlendMode 中有全身、上半身、下半身三种播放模式）
            subStance.blendMode = StanceBlendMode.WholeBody;  //[!code focus]
            // 使用姿态对象调用播放接口
            subStance.play(); //[!code focus]
            // ====== 演示更换二级姿态的代码 END =======

            setTimeout(async () => { //[!code focus]
                // ====== 演示播放动画的代码 START =======
                const animId = "281659"; //[!code focus]
                // 下载动画资源
                await AssetUtil.asyncDownloadAsset(animId); //[!code focus]
                // 加载动画对象
                const anim = Player.localPlayer.character.loadAnimation(animId); //[!code focus]
                // 设置动画播放为全身（要注意和姿态的接口不一样）
                anim.slot = AnimSlot.FullyBody; //[!code focus]
                // 播放动画
                anim.play(); //[!code focus]
                // ====== 演示播放动画的代码 END =======
            }, 5000); //[!code focus]
        }
    }
}
```

<video controls="" src="https://arkimg.ark.online/%E5%A7%BF%E6%80%815.mp4"></video>

## 5. 预览动画效果

在具体动画资源的右上角，有一个放大镜样式的按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景看效果的时间。

> 点出来预览窗口后，直接点击其他资源也可以直接预览，就不用每个资源都点一次放大镜按钮了

<video controls="" src="https://arkimg.ark.online/990pTTEqczVBmihW.mp4"></video>

## 6. 演示项目代码

 [姿态动画演示项目.rar](https://arkimg.ark.online/%E5%A7%BF%E6%80%81%E5%8A%A8%E7%94%BB.rar) 

