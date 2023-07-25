# 角色编辑器

::: tip 做游戏最缺什么？素材和角色？编辑器除了提供免费的海量素材资源库外，也提供了角色编辑器，轻松设置几下就可以出现一个优质角色，让你的游戏千人千面，不再为了资源而发愁！

:::

了解更多本节内容见产品文档：[角色编辑工具](https://docs.ark.online/Editor/CharacterEditor.html)

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=435814758&bvid=BV1z3411R7Y2&cid=978221145&page=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 角色编辑器的使用

首先，在“对象管理器”面板中选中“Player”，也就是我们的主角，然后在属性面板中，单击“编辑玩家形象”按钮，如图：

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

### 1.4化妆相关

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

## 2. 保存与加载角色形象数据

在角色编辑器中，我们通过“另存为”会将当前角色的搭配数据存到本地，本节我们就来尝试下在脚本中动态的加载搭配数据吧！

### 2.1 应用捏人数据

打开角色编辑器，进行角色创作，在菜单栏单击“工程-保存”按钮，即可将当前人物形象保存为主角形象，如图：

![image-20230725171419364](https://arkimg.ark.online/image-20230725171419364.png)

运行游戏后，可以看到主角已经变成我们捏出的角色了，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnov1GQHJJOEKncitYc37PBe.gif)

### 2.2 保存角色形象数据

有时候，我们并不想立刻使用捏好的角色形象，而是喜欢在游戏中的某个时刻，动态的进行角色外观更换，这时候就需要将捏好的数据保存下来，单击“另存为按钮”，在弹出窗口中，选择自己需要保存的数据，示例中只保存了发型、上衣、下衣数据，如图：

![image-20230725172406582](https://arkimg.ark.online/image-20230725172406582.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcndT459Wz4XK2a5AWOaUi9rd.png)

单击“保存选中项”后，输入一个当前搭配的名称即可，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnlJPA0dPAIWz0nbQJR9zQoh.png)

单击“确定”按钮，就可以看到生成了一个角色资源文件，如图：

![image-20230725172453667](https://arkimg.ark.online/image-20230725172453667.png)

关闭角色编辑器，在弹出的提示框中选择“不保存”，因为我们不希望立刻应用当前新的服饰内容，如图：

![image-20230725172549083](https://arkimg.ark.online/image-20230725172549083.png)

在“工程内容”窗口中的“角色”选项中，选中我们刚保存的角色数据文件，右键菜单中选择“复制工程内容 ID”即可复制角色数据的 ID，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnb7OBy0D7x5Huzm4QboIhqf.png)

### 2.3 加载角色形象数据

- 方法一：在角色编辑器中加载角色形象数据

  打开角色编辑器后，将角色形象数据拖动到角色上后即可完成加载

  ![img](https://arkimg.ark.online/PRAKKGxRqW.gif)

  如果是想应用到当前角色上，记得点击保存哦！

- 方法二：使用代码加载角色形象数据

  创建一个脚本挂载到场景中，编写脚本代码如下：

```ts
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //只有在客户端中才能获取该客户端对应的玩家 
        if (SystemUtil.isClient()) {
            //异步获取当前客户端对应的玩家对象
            Player.asyncGetLocalPlayer().then((player) => {
                setTimeout(() => {
                    //5 秒后进行换装操作,这里的参数就粘贴我们在上一小节中最后复制的角色资源 ID
                    player.character.setDescription(["012D5D934581C29E3BEDADB2A754E019"])
                }, 5000);
            })
        }
    }
}
```

运行游戏，5 秒后主角就会动态使用我们的数据了，如图：

![img](https://arkimg.ark.online/20230725173213_rec_.gif)



### 2.4 NPC 加载角色形象数据

除了玩家控制的角色以外，其他角色被称为“NPC”

- 方法一：在角色编辑器中加载形象数据

  在当前项目中，向场景中拖拽一个角色，并打开角色编辑器，如图：

  ![image-20230725175635230](https://arkimg.ark.online/image-20230725175635230.png)

  接着将角色形象数据拖动到NPC身上，然后点击保存即可

  ![image-20230725175746066](https://arkimg.ark.online/image-20230725175746066.png)

  可以看到，角色形象数据成功的应用到了NPC身上

  ![image-20230725175836819](https://arkimg.ark.online/image-20230725175836819.png)

- 方法二：使用代码给NPC加载角色形象数据

  创建一个脚本，并挂载到人型对象下方，如图：

  ![image-20230725175128590](https://arkimg.ark.online/image-20230725175128590.png)

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
