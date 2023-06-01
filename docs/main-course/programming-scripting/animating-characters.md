# 角色动画

::: tip 阅读本文大概需要 5 分钟。

在游戏中，角色要在不同时刻播放不同的角色动画，才可以让角色看起来更加的鲜活生动，口袋方舟提供了大量的动画供玩家使用，请一定要多多尝试不同有趣的动画！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=905795054&bvid=BV14P4y1z71N&cid=978207056&page=1" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 动画

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
    async onStart() {
        //下载并加载 122683 资源
        await AssetUtil.asyncDownloadAsset("122683")
        AssetUtil.loadAsset("122683")
        //为了方便观看，先延迟 5 秒
        setTimeout(() => {
            //播放动画并返回动画对象，参数 1：播放 122683 号动画,参数 2：花费多长时间播放完当前动画，这里指的是使用 10 秒播放完一次完整的 122683 号动画
            let animation = Gameplay.getCurrentPlayer().character.playAnimation("122683", 10)
            //如果需要，可以任何时间手动停止播放动画
            //animation.stop()
        }, 5000);
    }
}
```

运行游戏，可以看到角色开始播放动画了，如图：

![](https://cdn.233xyx.com/1681130073853_649.png)

**021 新增指定动画播放插槽**

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

## 2. 动画姿态

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

* **Character.loadStance() **
  * 创建一个二级姿态对象并返回, 可在任意端调用
* **SubStance.blendMode**
  * 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身)
* **SubStance.play() / SubStance.stop()**
  * 播放 / 停止这个姿态对象（当前持有的姿态）, 并返回执行结果
* **Character.stopStance() **
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

## 3. 预览动画效果

在具体动画资源的右上角，有一个+号按钮，点击后会弹出一个预览窗口，该功能能为我们省去拖入场景看效果的时间

![](https://cdn.233xyx.com/1681130073576_078.gif)