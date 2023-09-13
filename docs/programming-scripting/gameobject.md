# 游戏物体的使用

::: tip 阅读本文大概需要 7 分钟。

在游戏开发中，常常需要将资源库中的物体摆放到场景，那么除了直接拖拽到场景的方式，也常常需要使用脚本动态生成游戏物体。接下来我们就来了解下游戏物体的创建与使用以及常用属性。

::: 

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=948268391&bvid=BV1Qs4y1x74M&cid=978207163&page=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 游戏物体常用属性

首先我们从编辑器的“本地资源库”中，拖拽一个静态模型到场景当中，这里拖拽了一个正方体到场景中，如图：

![](https://arkimg.ark.online/image-20230723172017928.png)

然后我们可以看到，属性面板中会显示出该游戏物体的相关属性，并且可以很方便的进行修改设置，这里我们把常用的属性列出来，如图：

**基础属性：**

Name：示例为“正方体”，我们可以在这里修改物体的名称，修改名称后，回车确定修改。

Guid：在场景中的每个物体，都有一个唯一的Guid，我们可以通过Guid来查找对应的物体。

网络状态：网络运行环境，具体运行环境的区别可以查看 [客户端与服务端](https://learning.ark.online/md/2.2.html)

Tag：标签，默认为空，这里可以填写字符串生成标签，一般标签用来标识或区分游戏物体。

![image-20230723172826548](https://arkimg.ark.online/image-20230723172826548.png)

**变换：**

变换：在这里可以修改物体三个轴向的位置、旋转和缩放，但是这里可以看到显示的都是相对数值，什么是相对数值呢？具体可以查看该小节：[游戏物体父子级](https://learning.ark.online/md/3.7.html)

![image-20230723172904353](https://arkimg.ark.online/image-20230723172904353.png)

**场景设置：**

可见性：是否显示。包含三个选项，从父对象获取、开启、关闭

碰撞：是否碰撞。包含四个选项，开启碰撞、关闭碰撞、仅开启检测、仅开查询碰撞

![image-20230723172942802](https://arkimg.ark.online/image-20230723172942802.png)

- 属性面板的每个节点位置我们都能通过右键点击弹出菜单，进行复制粘贴操作

![image-20230723173533264](https://arkimg.ark.online/image-20230723173533264.png)

## 2. 脚本动态创建游戏物体

游戏开发中，我们常常需要通过脚本动态的进行游戏物体的创建，这里我们选择一个圆柱（GUID：7671）进行动态创建。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntJVFk5ZtPaLS3tcdaY4Xxb.png)

创建并在场景当中挂载一个脚本，脚本代码如下：

```ts
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        //这里创建一个双端的圆柱，所以我们需要在服务端创建，所有客户端也会自动同步创建
        if (SystemUtil.isServer()) {
            //创建圆柱模型
            let object = await GameObject.asyncSpawn("7671")
            //设置模型位置
            object.worldTransform.position = Vector.zero
            //5 秒后
            setTimeout(() => {
                //销毁该物体
                object.destroy()
            }, 5000);
        }
    }
}
```

运行游戏，可以看到该物体被动态创建出来，5 秒过后会自动销毁，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcniGvCIowojlMfcO9qkN0Tmc.png)

除了普通物体，特效、声音、预设体等都可以使用该脚本方式动态创建出来。

创建一个特效/声音，无需其他客户端同步显示，那么只需要在客户端编写全部逻辑。

创建一个普通物体，如果需要其他客户端都同步显示，那么需要在服务端进行创建与销毁操作，而对物体的移动、旋转修改等操作也可以在客户端修改，会自动同步所有客户端显示，具体客户端与服务端查看：[客户端与服务端](https://learning.ark.online/md/2.2.html)

## 3. 更改物体位置

```ts
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        //这里创建一个双端的圆柱，所以我们需要在服务端创建，所有客户端也会自动同步创建
        if (SystemUtil.isServer()) {
            //创建圆柱模型
            let object = await GameObject.asyncSpawn("7671")
            //设置模型位置到 Vector(500,500,100)的位置
            object.worldTransform.position = new Vector(500, 500, 100)
        }
    }
}
```

## 4. 更改物体颜色

有时候我们需要对游戏物体的颜色进行修改，主要是去修改物体的材质。

因为我们并不能直接对物体的颜色进行修改，我们要理解一件事，物体的显示是基于材质的，而我们只能对材质进行颜色的修改，例如我们可以创建一个红色的材质，然后将这个材质应用于椅子、窗户等物体，那么我们就会拥有一个红色的椅子和一个红色的窗户了。

那么我们来创建一个材质，选择需要更改颜色的物体，在属性中单击该按钮，如图：

![image-20230723184716188](https://arkimg.ark.online/image-20230723184716188.png)

这时候会在重新弹出一个材质编辑窗口，我们在这里选择"BaseColor"，然后就可以通过"颜色"选项修改材质的基础颜色，修改好颜色后，点击"确认"，最后再进行保存。

![image-20230723185641626](https://arkimg.ark.online/image-20230723185641626.png)

保存后，回到主界面，就可以看到场景上的方块颜色发生改变了

![image-20230723185834673](https://arkimg.ark.online/image-20230723185834673.png)



如果其他物体也想改成红色，那么直接使用我们这个材质就可以了，如图：

![image-20230723185931634](https://arkimg.ark.online/image-20230723185931634.png)

