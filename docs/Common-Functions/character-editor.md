# 角色编辑器与换装

::: tip 阅读本文大概需要 10 分钟。

做游戏最缺什么？素材和角色？编辑器除了提供免费的海量素材资源库外，也提供了角色编辑器，轻松设置几下就可以出现一个优质角色，对于游戏来说这是是非常重要的，它能够让玩家更好地体验到游戏的魅力，提升用户粘性，同时也有助于提高游戏的水准和玩家的沉浸感。

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317943498&p=20&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

了解更多本节内容见产品文档：[角色形象与换装 | 产品手册](https://docs.ark.online/Role/AppearanceAndReplacement.html#角色形象介绍)

## 1. 角色编辑器的使用

首先，在 **对象管理器** 面板中选中 **Player**，也就是我们的玩家角色，然后在属性面板中，单击“编辑玩家形象”按钮，如图：

![image-20230725162612188](https://arkimg.ark.online/image-20230725162612188.png)

操作完成即可打开我们主角的角色编辑器，如图：

![image-20230725162718873](https://arkimg.ark.online/image-20230725162718873.png)

### 1.1 角色形象

角色编辑器的使用非常简单，首先在右侧的“属性形象窗口”中，在角色设定中可以切换不同类型的角色。

这里展示一个 Lowpoly 男性角色，如图：

![image-20230725162852819](https://arkimg.ark.online/image-20230725162852819.png)

### 1.2 头部相关

在面部修改界面中，可以看到除了面部整体外，还包括五官、表情等多处参数可供我们进行修改，方便我们捏出自己喜欢的人物面部，如图：

![image-20230725163014984](https://arkimg.ark.online/image-20230725163014984.png)

### 1.3 身体相关

在身体修改界面中，可以看到包括身体、四肢等内容的修改，可以让你轻松的修改角色的身材比例，如图：

![image-20230725163101398](https://arkimg.ark.online/image-20230725163101398.png)

### 1.4 化妆相关

在身体修改界面中，可以看到包括肤色、口红、贴花等各种设置，可以让你轻松的给角色进行化妆，如图：

![image-20230725163240218](https://arkimg.ark.online/image-20230725163240218.png)

### 1.5 发型相关

在发型面板中，我们可以为我们的角色更换前发与后发，这里我们来操作一下，首先更换一个前发，如图：

![image-20230725163907822](https://arkimg.ark.online/image-20230725163907822.png)

接下来，再更换一个后发，如图：

![image-20230725164131457](https://arkimg.ark.online/image-20230725164131457.png)

### 1.6 服饰相关

与发型修改相同，我们可以在这里修改上衣、下衣、手套、鞋的相关资源，如图：

![image-20230725164710059](https://arkimg.ark.online/image-20230725164710059.png)

### 1.6 装备挂件

除了换衣服和发型外，我们还可以将静态模型、特效、预制体等资源附着于角色指定位置，附着上去的资源我们称之为 **挂件**  ，默认的附着位置称之为 **插槽**。通过调整挂件与插槽的偏移，可以让挂件效果更加完美。

关于挂件的详细说明与使用可以查阅产品手册：[角色插槽 | 产品手册 ](https://docs.ark.online/Role/Slot.html)

在实际游戏中，玩家身上的翅膀、帽子、手中的武器等，都可以使用挂件系统来实现。接下来将会演示如何给玩家戴上一顶帽子：

![8d3b94d0-3fc3-4237-b9ab-639d28cdb906](https://arkimg.ark.online/8d3b94d0-3fc3-4237-b9ab-639d28cdb906.webp)

1. 在角色编辑器属性中，点击**挂件**。
2. 因为是要添加帽子，所以选中**头部相关设置**。
3. 在头发属性中点击添加按钮，添加一个挂件。
4. 然后将左侧资源库中的帽子拖入进去，并且调节到合适位置与大小。

这样我们帽子挂件就设置好了，如果想要让挂件默认在角色上显示我们还需要一些额外的设置：

![8f81f9ea-5884-41b4-8a39-cbe9ef9d3acb](https://arkimg.ark.online/8f81f9ea-5884-41b4-8a39-cbe9ef9d3acb.webp)

在角色编辑器右上角的**设置**中将**默认显示挂件**勾选上，这样在游戏运行后使用了这套装扮的角色就会将挂件显示出来了。

::: tip 挂件的优先加载

编辑器所有需要动态生成的资源都需要优先加载，挂件也不例外，我们需要将挂载的模型、特效等资源拖入优先加载中。

:::

### 1.7 切换整套服装配饰

在资源库中，有许多美术同学搭配好的服装数据供我们使用：

![1ef2d38d-f7d8-4d1f-bcac-266b0f9bdd41](https://arkimg.ark.online/1ef2d38d-f7d8-4d1f-bcac-266b0f9bdd41.webp)

在资源库中找到 **角色/NPC** 选项，选中它后我们就可以看到许多成套的搭配了，将需要的直接拖到角色编辑器的主视口中这样就可以应用整套角色数据了。

## 2. 保存与加载角色形象数据

在角色编辑器中，我们通过 **另存为** 会将当前角色的搭配数据与挂件数据存到本地，本节我们就来尝试下在脚本中动态的加载搭配数据吧！

### 2.1 应用捏人数据

打开角色编辑器，进行角色创作，在菜单栏单击“工程-保存”按钮，即可将当前人物形象保存为主角形象，如图：

![image-20230725171419364](https://arkimg.ark.online/image-20230725171419364.png)

运行游戏后，可以看到主角已经变成我们捏出的角色了，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnov1GQHJJOEKncitYc37PBe.gif)

### 2.2 保存角色形象数据

有时候，我们并不想立刻使用捏好的角色形象，而是喜欢在游戏中的某个时刻，动态的进行角色外观更换，这时候就需要将捏好的数据保存下来，单击“另存为按钮”，在弹出窗口中，选择自己需要保存的数据：

![image-20230725172406582](https://arkimg.ark.online/image-20230725172406582.png)

保存时可以快捷选择 *完整角色* 和 *套装服饰* 。在预览窗口中可以看到不同角色数据的效果，在这里我们选择套装服饰，这样保存的角色数据中不会有化妆、身体比例等数据。

![](https://arkimg.ark.online/image-20240925102823558.webp)![image-20240925102836234](https://arkimg.ark.online/image-20240925102836234.webp)

单击“保存选中项”后，输入一个当前搭配的名称即可，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnlJPA0dPAIWz0nbQJR9zQoh.png)

单击“确定”按钮，就可以看到生成了一个角色资源文件，如图：

![image-20230725172453667](https://arkimg.ark.online/image-20230725172453667.png)

关闭角色编辑器，在弹出的提示框中选择“不保存”，因为我们不希望立刻应用当前新的服饰内容，如图：

![image-20230725172549083](https://arkimg.ark.online/image-20230725172549083.png)

在“工程内容”窗口中的“角色”选项中，选中我们刚保存的角色数据文件，右键菜单中选择“复制 Asset ID”即可复制角色数据的 Asset ID，如图：

![](https://arkimg.ark.online/image-20240926174031908.webp) 

### 2.3 加载角色形象数据

- 方法一：在角色编辑器中加载角色形象数据

  打开角色编辑器后，将角色形象数据拖动到角色上后即可完成加载

  ![img](https://arkimg.ark.online/PRAKKGxRqW.gif)

  如果是想应用到当前角色上，记得点击保存哦！

- 方法二：使用代码加载角色形象数据

  创建一个脚本挂载到场景中，编写脚本代码如下：

::: tip 关于 setDescription 函数

这个函数可以直接传入 1.7 小节中资源库中整套装扮的 Asset ID 也可以直接换装。

:::

```typescript
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //只有在客户端中才能获取该客户端对应的玩家 
        if (SystemUtil.isClient()) {
            setTimeout(() => {
                //5 秒后进行换装操作,这里的参数就粘贴我们在上一小节中最后复制的角色资源 ID
                Player.localPlayer.character.setDescription(["012D5D934581C29E3BEDADB2A754E019"])
            }, 5000);
        }
    }
}
```

运行游戏，5 秒后主角就会动态使用我们的数据了，如图：

![img](https://arkimg.ark.online/20230725173213_rec_.gif)

### 2.4 NPC 加载角色形象数据

除了玩家控制的角色以外，其他角色被称为 “NPC”

- 方法一：在角色编辑器中加载形象数据

  在当前项目中，向场景中拖拽一个角色，并打开角色编辑器，如图：

  ![image-20230725175635230](https://arkimg.ark.online/image-20230725175635230.png)

  接着将角色形象数据拖动到NPC身上，然后点击保存即可

  ![image-20230725175746066](https://arkimg.ark.online/image-20230725175746066.png)

  可以看到，角色形象数据成功的应用到了 NPC 身上

  ![image-20230725175836819](https://arkimg.ark.online/image-20230725175836819.png)

- 方法二：使用代码给 NPC 加载角色形象数据

  创建一个脚本，并挂载到人型对象下方，如图：

  ![image-20240919144333357](https://arkimg.ark.online/image-20240919144333357.webp)

  编写脚本如下：

```ts
@Component
export default class NPCControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //在客户端中给 NPC 换装
        if (SystemUtil.isClient()) {
            //首先获取当前人型对象
            let npc = this.gameObject as Character
            //加载玩家角色的角色 ID，把上面复制的角色 ID 粘到这里就好
            npc.setDescription(["012D5D934581C29E3BEDADB2A754E019"]);
        }
    }
}
```

运行游戏，可以看到后面的人型角色已经使用了我们的角色数据，如图：

![image-20230725180620428](https://arkimg.ark.online/image-20230725180620428.png)

## 3 加载多足形象

### 3.1 角色加载多足形象

- 方法一：在 Player 属性面板设置多足形象

  在对象管理器中点击 **Player**，在出现的属性面板中找到 **形象设置** - **外观类型**，在下拉列表中选择 **多足形象**。

​	![image-20240919134431895](https://arkimg.ark.online/image-20240919134431895.webp) 

​	在资源库的 **静态模型** - **人物/怪物/动物** 分类中，找到适合的多足形象，并拖动到属性面板的**整体形象**中即可完成加载。

![image-20240919140246387](https://arkimg.ark.online/image-20240925103800885.webp)   

- 方法二：使用代码加载多足角色形象

  在资源库的 **角色/NPC** - **多足形象** 分类中，找到适合的资源，右键复制 Asset ID。

  ![image-20240919142423808](https://arkimg.ark.online/image-20240919142423808.webp) 

  创建一个脚本挂载到场景中，编写脚本代码如下：

```typescript
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //只有在客户端中才能获取该客户端对应的玩家 
        if (SystemUtil.isClient()) {
            setTimeout(() => {
                //5 秒后进行换装操作,这里的参数就粘贴我们刚才复制的多足形象的资源ID
                Player.localPlayer.character.setDescription(["327748"])
            }, 5000);
        }
    }
}
```

运行游戏，5 秒后主角就会动态使用我们的数据了，如图：

![image-20240919142734963](https://arkimg.ark.online/image-20240919142734963.webp) 

::: tip 关于多足形象的动画

多足形象并不像人形形象一样具有基础姿态，所以不会在走、跑、跳的时候做相应的动作。所以在使用多足形象的时候，需要我们自己通过代码逻辑来为多足形象播放动画。更多关于角色动画的详情内哦你如果请查阅[角色姿态与动画 | 教程](./../Core-Learning/animating-characters.html)

:::

### 3.2 NPC 加载多足形象

- 方法一：在角色编辑器中加载形象数据

  在当前项目中，向场景中拖拽一个角色，并在角色的属性面板中找到 **形象设置** - **外观类型**，在下拉列表中选择 **多足形象**。

  ![image-20240919143915384](https://arkimg.ark.online/image-20240919143915384.webp)

  接着在资源库的 **静态模型** - **人物/怪物/动物** 分类中，找到适合的多足形象，并拖动到属性面板的**整体形象**中即可完成加载。可以看到，多足形象成功的应用到了 NPC 身上。

  ![image-20240919144052464](https://arkimg.ark.online/image-20240919144052464-1.webp)

- 方法二：使用代码给 NPC 加载角色形象数据

  创建一个脚本，并挂载到人型对象下方，如图：

  ![image-20240919144333357](https://arkimg.ark.online/image-20240919144333357.webp)

  在资源库的 **角色/NPC** - **多足形象** 分类中，找到适合的资源，右键复制 Asset ID。

  ![image-20240919142423808](https://arkimg.ark.online/image-20240919142423808.webp) 

  编写脚本如下：

```ts
@Component
export default class NPCControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //首先获取当前人型对象
        let npc = this.gameObject as Character
        //把上面复制的四足形象资源 ID 粘到这里就好
        npc.setDescription(["327748"]);
    }
}
```

运行游戏，可以看到后面的 NPC 角色已经使用了我们选择的四足形象外观，如图：

![image-20240919144944140](https://arkimg.ark.online/image-20240919144944140.webp) 
