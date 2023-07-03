# 角色姿态&角色动画

::: tip 阅读本文大概需要 15 分钟。

在游戏中，角色要在不同时刻播放不同的角色动画，才可以让角色看起来更加的鲜活生动，口袋方舟提供了大量的动画供玩家使用，请一定要多多尝试不同有趣的动画！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=905795054&bvid=BV14P4y1z71N&cid=978207056&page=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 基础认知

一共有三种方式可以更改角色动作：**基础姿态**、**动画姿态**、**动画**

### 基础姿态

角色的基本姿态，包含待机、下蹲、行走、奔跑、跳跃、飞行、游泳等一套基础动画！不能单个状态控制。下发演示了基础的跑步和跳跃动画：

<video controls src="https://arkimg.ark.online/UE4_ST84tjsSV6.mp4"/>

### 动画姿态

又叫**二级姿态**。在某一业务场景下的特定姿态，如持刀、持枪、趴下、瞄准、敬礼、爬梯、看书等等需要持续的状态！开发者**需要手动控制停止**，可以单独控制任意姿态，还能控制在上半身播放还是下半身播放或者全身播放，同时只能播放一个动画姿态。下面演示播放一个“对焦姿势”的二级姿态,并且只播放上半身和只播放下半身的演示：

<video controls src="https://arkimg.ark.online/Efh3HgqmIkdQ.mp4"/>

### 动画

在某个业务场景下的动画，如扔手雷、换弹药、跳舞等！会自动结束。可以单独控制上半身播放还是下半身播放或者全身播放，同时只能播放一个动画。下方演示播放一个动画的效果，并且控制了只播放在上半身或下半身：

<video controls src="https://arkimg.ark.online/uiEQPyyt7xXc.mp4"/>

### 几种方式的优先级和区别

以上**三种方式，可以同时存在**，但是**每个方式单独的同时只能存在一个**。如果同时存在时按照以下规则播放：

* 动画最优先，有动画时会播放动画，不管上半身还是下半身还是全身。
* 然后是二级姿态优先，没有动画播放时，存在二级姿态则会播放二级姿态，不管上半身还是下半身还是全身。
* 最低优先级的是基础姿态，不存在动画和二级姿态时，播放基础姿态。

演示效果，利用动画和二级姿态同时播放，控制不同位置，做到一边坐着一边挥手的效果（姿态 id:170905,动画 id:29755）：

<video controls src="https://arkimg.ark.online/dewpu8EJ42vN.mp4"/>

演示效果，利用基础姿态和二级姿态同时播放，做到边跑边持枪的效果(持枪姿态 id:94258)：

<video controls src="https://arkimg.ark.online/7QJsulOVYq3n.mp4"/>

## 2. 基础姿态

编辑器提供成套的基础姿态，可以在资源库的“基础姿态”中找到，如图：

![image-20230616155957563](./../../../../../../../%E6%88%AA%E5%9B%BE/%E5%AE%98%E6%96%B9%E6%95%99%E7%A8%8B%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8/image-20230616155957563.png)

在选择不同的默认“体型类型”时，编辑器会自动切换为对应体型的角色基础姿态。

如，我们这里在对象管理器选中“Player”对象，属性面板中修改“体型类型”为"二次元成年男性",如图：

![image-20230616193004043](./../../../../../../../%E6%88%AA%E5%9B%BE/%E5%AE%98%E6%96%B9%E6%95%99%E7%A8%8B%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8/image-20230616193004043.png)

再确定一下“使用平台角色形象”为不勾选状态（如果勾选中，则取消勾选）：

![image-20230620092025146](./../../../../../../../%E6%88%AA%E5%9B%BE/%E5%AE%98%E6%96%B9%E6%95%99%E7%A8%8B%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8/image-20230620092025146.png)

我们此时运行起来游戏，会发现默认角色对象就变成一位男性了，且默认姿态也是男性的默认姿态了。如图：

![image-20230616193101525](./../../../../../../../%E6%88%AA%E5%9B%BE/%E5%AE%98%E6%96%B9%E6%95%99%E7%A8%8B%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8/image-20230616193101525.png)

### 如何使用基础姿态

* 在资源库中，找到基础姿态，右键复制 guid，这里我们选择“写实\_男性\_基础姿态"复制 guid

* ![image-20230619112304310](./../../../../../../../%E6%88%AA%E5%9B%BE/%E5%AE%98%E6%96%B9%E6%95%99%E7%A8%8B%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8/image-20230619112304310.png)

* 我们创建一个脚本来演示角色的姿态，新建脚本命名为“AnimationControl”，拖拽脚本**挂载到对象管理器**中，然后双击脚本编写代码。

* 首先异步获取角色对象，获取到角色对象后，直接更改`basicStance`属性为我们刚才复制的 guid：119836，代码如下：

* ```typescript
  @Core.Class
  export default class AnimationControl extends Core.Script {
  
      /** 当脚本被实例后，会在第一帧更新前调用此函数 */
      protected onStart(): void {
          if (SystemUtil.isClient()) {
              // 客户端，获取到当前角色对象
              Gameplay.asyncGetCurrentPlayer().then((player: Gameplay.Player) => {
                  // 设置基础姿态为119836
                  player.character.basicStance = "119836" //[!code focus]
              });
          }
      }
  
  }
  ```
  
* 运行游戏之前，把 Player 对象的“体型类型”改回“二次元成年女性”，方便我们运行看效果。

* 改回女生后，我们再运行游戏看看效果，能看到默认站立状态、走路状态、跳跃状态，都不是之前身娇体柔的小女生姿态了。

* 然后我们对比一下看看，没有更改基础姿态的情况：

<video controls src="https://arkimg.ark.online/7YAEoXlJQngM.mp4" />

* 更改基础姿态为`119836` 的情况：

<video controls src="https://arkimg.ark.online/kZaco5cdyVx3.mp4" />



## 3. 二级姿态

基础姿态是玩家基础行为的动画，想进行更细微更自定义的姿态控制，如看书、开车、持枪、瞄准、爬梯等，就需要用上二级姿态了。可以在资源库的“动画姿态”找到所有的二级姿态。

![image-20230619163702538](https://arkimg.ark.online/image-20230619163702538.png)

### 如何使用二级姿态

我这里使用“双手步枪姿态”的 guid`94258`来演示使用二级姿态。

先在资源库选中



## 2. 动画

动画是用来控制角色动作的一类资源，例如游戏当中的走路、跑步、攻击、跳跃、释放技能等都属于动画，编辑器提供了一系列完整的优质动画资源，供开发者选择使用。

![](https://cdn.233xyx.com/1681130073761_442.PNG)

动画的使用就非常简单了，这里我们创建一个脚本“PlayerControl”，并挂载到对象列表中，如图：

![](https://cdn.233xyx.com/1681130073506_212.PNG)

“本地资源库”中选择一个需要播放的动画，并记录 GUID，如图：

![](https://cdn.233xyx.com/1681130073759_698.PNG)

编写脚本代码如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            //下载并加载 122683 资源
            await AssetUtil.asyncDownloadAsset("122683")//[!code focus]
            //为了方便观看，先延迟 5 秒
            setTimeout(() => {
                //播放动画并返回动画对象，参数 1：播放 122683 号动画,参数 2：花费多长时间播放完当前动画，这里指的是使用 10 秒播放完一次完整的 122683 号动画
                let animation = Gameplay.getCurrentPlayer().character.playAnimation("122683", 10)//[!code focus]
                //如果需要，可以任何时间手动停止播放动画
                //animation.stop()
            }, 5000);
        }
    }
}
```

运行游戏，可以看到角色开始播放动画了，如图：

![](https://cdn.233xyx.com/1681130073853_649.png)

**指定动画播放插槽**

![](https://cdn.233xyx.com/1681130073463_751.png)

```ts
// 为玩家对象注册“按数字 1”的事件
this.character.onSkill1Triggered.add(() => {
    // 读取 4166 的动画
    let anim = this.character.loadAnimation("4166")
    // 设置默认插槽
    anim.slot = Gameplay.AnimSlot.Default
    // 播放动画
    anim.play()
});
this.character.onSkill2Triggered.add(() => {
    let anim = this.character.loadAnimation("4166")
    anim.slot = Gameplay.AnimSlot.FullyBody
    anim.play()
});
this.character.onSkill3Triggered.add(() => {
    let anim = this.character.loadAnimation("4166")
    // 设置上半身插槽
    anim.slot = Gameplay.AnimSlot.Upper
    anim.play()
});
this.character.onSkill4Triggered.add(() => {
    let anim = this.character.loadAnimation("4166")
    // 设置下半身插槽
    anim.slot = Gameplay.AnimSlot.Lower
    anim.play()
})
```

AnimSlot 枚举对应四种情况的表现：

![](https://cdn.233xyx.com/1681130073774_733.gif)

## 3. 动画姿态

动画姿态可以理解为角色的姿势限定，它会根据选择的姿势文件固定角色的某些骨骼。例如我们上面的跳舞动画，动画会管理全身的动作，所以如果想做到上半身跳着舞，下半身能跑步，这是不允许的，如图：

![](https://cdn.233xyx.com/1681130073760_235.gif)

这时候我们会想到，例如持枪动画，这种动画只要求上半身保持持枪动作，下半身可能站立不动，可能在跑步，可能在跳跃，这种需求怎么实现？那就需要用到动画姿态了，动画姿态可以理解为角色的姿势限定，它会根据姿态规则固定角色的某些骨骼，例如持枪姿态，就是只会限定上半身的动作为持枪而不去处理下半身的动作。编辑器同样给我们提供了大量的动画姿态供我们使用，如图：

![](https://cdn.233xyx.com/1681130073541_516.png)

这里找一个持枪动作姿态作为示例，如图：

![](https://cdn.233xyx.com/1681130073814_179.png)

修改上小节脚本内容如下：

```ts
@Core.Class
export default class PlayerControl extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    async onStart() {   
        //下载并加载 49098 号资源 
        await AssetUtil.asyncDownloadAsset("49098")  
        AssetUtil.loadAsset("49098") 
        //只有客户端播放动画才有意义，我们才能在设备上看到玩家动画
        if(Util.SystemUtil.isClient()){
            //首先获取当前客户端的玩家对象
            Gameplay.asyncGetCurrentPlayer().then(player=>{
                //让玩家角色播放 49098 动画姿态
                player.character.animationStance = "49098"
            })
       }
    }
}
```

运行后可以看到，角色上半身保持了持枪动画姿态，而下半身依旧可以正常使用各种跑步、跳跃等动作，如图：

![](https://cdn.233xyx.com/1681130073425_401.gif)

除此之外，也可以使用姿态对象实现姿态功能，代码如下：

```ts
export default class Test extends Core.Script {
    character: Gameplay.Character;
    stanceProxy: Gameplay.SubStance;

    /** 仅在游戏时间对非模板实例调用一次 */
    protected onStart() {
        //设置能否每帧触发 onUpdate
        this.useUpdate = false;

        Gameplay.asyncGetCurrentPlayer().then((player) => {
            this.character = player.character;

            // 延时 3 秒开始播放 49096（举枪姿势）
            setTimeout(() => {
                // 创建 guid 为 49096 的二级姿态对象
                this.stanceProxy = this.character.loadStance("49096", true);
                // 设置姿态混合模式为只混合上半身
                this.stanceProxy.blendMode = Gameplay.StanceBlendMode.BlendUpper;
                // 开始播放姿态
                this.stanceProxy.play();
            }, 3000);

            // 延时 3 秒开始播放 122227（翘二郎腿姿势）
            setTimeout(() => {
                // 创建 guid 为 122227 的二级姿态对象
                this.stanceProxy = this.character.loadStance("122227", true);
                // 设置姿态混合模式为只混合下半身
                this.stanceProxy.blendMode = Gameplay.StanceBlendMode.BlendLower;
                // 开始播放姿态
                this.stanceProxy.play();
            }, 6000);
        });
    }
}
```

**019 新增姿态对象**

* **Character.loadStance()**
  * 创建一个二级姿态对象并返回, 可在任意端调用
* **SubStance.blendMode**
  * 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身)
* **SubStance.play() / SubStance.stop()**
  * 播放 / 停止这个姿态对象（当前持有的姿态）, 并返回执行结果
* **Character.stopStance()**
  * 停止任何正在播放的姿态, 当你不想保存执行 play()后的姿态对象时, 可以直接调用这个方法停止姿态（停止当前角色的所有姿态）

```TypeScript
this.character.onSkill1Triggered.add(() => {
    // 角色获取 guid 为 49096 的二级姿态
    this.subStance = this.character.loadStance("49096", true);
    // 设置姿态的混合模式为全身混合
    this.subStance.blendMode = Gameplay.StanceBlendMode.WholeBody;
    this.subStance.play();
});
this.character.onSkill2Triggered.add(() => {
    let stanceProxy = this.character.loadStance("14493", false);
    // 设置姿态的混合模式为只混合下半身
    stanceProxy.blendMode = Gameplay.StanceBlendMode.BlendLower;
    stanceProxy.play();
});
this.character.onSkill3Triggered.add(() => {
    this.subStance.stop();
});
this.character.onSkill4Triggered.add(() => {
    this.character.stopStance(false);
})
```

![](https://cdn.233xyx.com/1681130073761_302.gif)

## 5. 预览动画效果

在具体动画资源的右上角，有一个+号按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景看效果的时间

![](https://cdn.233xyx.com/1681130073576_078.gif)

|          | 姿态全身 | 姿态上身 | 姿态下身 |
| -------- | -------- | -------- | -------- |
| 动画默认 |          |          |          |
| 动画全身 |          |          |          |
| 动画上身 |          |          |          |
| 动画下身 |          |          |          |