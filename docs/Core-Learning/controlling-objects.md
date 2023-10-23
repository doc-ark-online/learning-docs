# 修改游戏对象

## 1. 优先加载与动态下载

在口袋方舟编辑器中，资源库中所有对象全部存储在云端（也就是服务器上）。只有当我们使用的时候编辑器才会将它下载下来，这样不但节约了开发者打包项目的时间，同时也减少了游戏包体大小，加快了游戏进入速度，减少用户在等待时间流失。

因为这个设计，我们所有 **动态生成的资源（摆放在场景中的不需要） ，全部都会先下载然后再生成 ( AsyncSpawn 函数)**，下载操作是编辑器自动进行的，但是下载需要一定的时间，所以有些资源会在第一次使用的时候延后一点时间才生成出来。

如果游戏中存在一些在玩家刚刚进入游戏就马上要生成、不能接受第一次延迟出现的物体，比如玩家手中的道具、玩家释放的技能特效等，我们就可以将它们放在 **优先加载**列表中，在这个列表中的游戏对象会在进入游戏时下载，且必须要等这些资源下载完毕后，才会进入游戏。

::: warning 关于优先加载

优先加载中的资源太多会显著加大游戏进入时长，对于什么资源要放进去开发者需要仔细斟酌。

:::

### 1.1 使用优先加载

使用优先加载相当简单，只要将需要加载的资源拖动到对象管理器的 **优先加载** 下即可。如视频，这里我将正方体拖到优先加载中：

<video controls="" src="https://arkimg.ark.online/GYlITlOl5tEjVgzS.mp4"></video>

### 1.2 使用代码动态下载

我们可以在合适的时机使用函数`AssetUtil.assetLoaded` 对资源进行判断，检查资源是否已经被下载到本地，如果没有就使用函数 `AssetUtil.asyncDownloadAsset` 来对资源进行下载：

``` typescript
@Component
export default class AssetExample extends Script {

    protected onStart(): void {
        const cubeAssetId = "197386";
        if (AssetUtil.assetLoaded(cubeAssetId)) { //[!code focus]
            console.log("正方体资源已经下载！");
        } else {
            console.log("正方体资源没有下载,现在启动下载..."); 
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => { //[!code focus]
                console.log("正方体资源已经下载！"); 
            });
        }
    }
}
```

## 2. 脚本动态创建游戏对象

游戏开发中，我们常常需要通过脚本动态的进行游戏对象的创建，这里我们选择一个正方体（asset Id: 197386）进行动态创建。

![b9c78123-72e3-43d5-8834-052ed621d5dc](https://arkimg.ark.online/b9c78123-72e3-43d5-8834-052ed621d5dc.webp)

创建并在场景当中挂载一个脚本，脚本代码如下。这里我们主要使用 `GameObject.asyncSpawn` 对资源进行了异步创建操作。

创建游戏对象，还可以使用同步创建函数 `GameObject.spawn` 函数，要注意的是使用同步函数编辑器将不会自动下载资源，需要手动调用下载函数或是将物体拖拽到优先加载中。

```typescript
@Component
export default class GameStart extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        //这里创建一个双端的圆柱，所以我们需要在服务端创建，所有客户端也会自动同步创建
        if (SystemUtil.isServer()) {
            //创建圆柱模型
            GameObject.asyncSpawn("197397");
        }
    }
}
```

运行游戏，可以看到该物体被动态创建出来了。

::: danger Spawn 资源注意事项

双端预制体只能在服务端创建，客户端预制体只能在客户端创建。

普通资源在服务端创建后为双端物体，在客户端创建为单端物体。

关于游戏对象的网络类型会在后续章节介绍，这里只需要大概了解即可。[客户端与服务端 | 教程 (ark.online)](https://learning.ark.online/Online-Gaming/client-and-server.html)

:::

除了模型，特效、声音、预制体等都可以使用该脚本方式动态创建出来。

## 3. 更改游戏对象属性

上文中我们在常见属性中讲到了游戏对象的变换属性，这个属性决定了游戏对象的位置、旋转、缩放。游戏开发中，我们经常需要修改这个属性用以实现各类游戏功能，举个例子，我们可以通过在每一帧调整小球的缩放、位置和旋转参数，来实现一个弹跳移动的小球。这种频繁的属性修改是游戏开发中常见且重要的操作之一。

### 3.1 将游戏对象转为指定类型

在上一章节中我们讲过，编辑器中所有的物体都继承自游戏对象基类（GameObject），使用 `GameObject.spawn` 函数创建出来的对象默认类型为 GameObject 类型，如果我们想要使用某些专属于某个类型对象的函数，就需要手动指定创建出来的游戏对象的类型了。

比如 `Model` 类型才可以设置碰撞属性、`Trigger` 类型才可以设置进入触发器事件。

在TypeScript中，`as` 关键字用于类型断言。它允许我们手动设置变量的数据类型，并防止编译器自行推断它。类型断言通常用于将任何类型视为特定类型，例如我们将生成出的游戏对象（圆柱体），转换为 Model 类型：

```typescript
@Component
export default class Test extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        //这里创建一个双端的圆柱，所以我们需要在服务端创建，所有客户端也会自动同步创建
        if (SystemUtil.isServer()) {
            //创建圆柱模型 //[!code focus]
            const cylinder = GameObject.spawn("197397") as Model; //[!code focus] //[!code ++]
            //转换为模型后就可以设置模型的碰撞了 //[!code focus]
            cylinder.setCollision(CollisionStatus.Off); //[!code focus]
        }
    }
}
```

上文中只是演示了 `as` 的一种转换方式，我们通常声明一个新的变量，然后将转换后的游戏对象赋值给它：

```typescript
@Component
export default class Test extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        //这里创建一个双端的圆柱，所以我们需要在服务端创建，所有客户端也会自动同步创建
        if (SystemUtil.isServer()) {
            //创建游戏对象
            const gameObject = GameObject.spawn("197397"); //[!code focus]
            //声明一个变量 将游戏对象转换为模型类型  //[!code focus]
            const cylinder = gameObject as Model; //[!code focus]//[!code ++]
            //转换为模型后就可以设置模型的碰撞了 //[!code focus]
            cylinder.setCollision(CollisionStatus.Off); //[!code focus]
        }
    }
}
```

### 3.2 使用代码修改对象变换

除了直接在对象管理器中修改以外，我们还可以使用代码或运动器来动态修改物体的变换。

位置（Position）：变换属性中的位置确定了游戏对象在游戏世界中的空间坐标。

旋转（Rotation）：变换属性中的旋转决定了游戏对象的朝向和角度。

缩放（Scale）：变换属性中的缩放用于调整游戏对象的大小。

```typescript
@Component
export default class TransformExp extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        //这里创建一个双端的圆柱，所以我们需要在服务端创建，所有客户端也会自动同步创建
        if (SystemUtil.isServer()) {
            //创建圆柱对象
            const object = await GameObject.asyncSpawn("197397");
            //设置对象位置到 Vector(500,500,100)的位置 //[!code focus]
            object.worldTransform.position = new Vector(500, 500, 100); //[!code focus]

            //设置对象缩放为 Vector(10,10,10)//[!code focus]
            object.worldTransform.scale = new Vector(10, 10, 10);//[!code focus]

            //设置对象旋转为 Rotation(10,2,2)//[!code focus]
            object.worldTransform.rotation = new Rotation(10, 2, 2);//[!code focus]
        }
    }
}
```

### 3.3 使用运动器修改对象变换

实现简单的运动如直线运动、简谐运动、圆周运动等，我们可以无需代码直接使用编辑器封装好的 **运动功能对象：运动器** 来实现。

在资源库中拖一个正方体到场景上，然后在运动功能对象中拖一个 **运动器** 到正方体上使其成为正方体子物体：

![3aafe13e-92a1-4fc0-8697-86daf578b2c3](https://arkimg.ark.online/3aafe13e-92a1-4fc0-8697-86daf578b2c3.webp)

接下来选中运动器，在它的属性面板上就可以设置各种常见运动方式的参数了。设置参数后在对象管理器中选中运动器，可以在主视口中看到预览线，更方便大家设计关卡：

![5037c061-99ae-4255-89d0-599f101b82a6](https://arkimg.ark.online/5037c061-99ae-4255-89d0-599f101b82a6.webp)

设置好之后勾选**启用**，接下来运行游戏就可以看到效果了！

![3d3a8a38-391a-466a-844d-cd388a428c97](https://arkimg.ark.online/3d3a8a38-391a-466a-844d-cd388a428c97.webp)

关于运动器详细教程可以查阅：[运动器教程](https://learning.ark.online/Masters-Road/physicsSports.html)

## 4. 更改游戏对象颜色

有时候我们需要对游戏对象的颜色进行修改，主要是去修改物体的材质。

因为我们并不能直接对物体的颜色进行修改，我们要理解一件事，物体的显示是基于材质的，而我们只能对材质进行颜色的修改，例如我们可以创建一个红色的材质，然后将这个材质应用于椅子、窗户等物体，那么我们就会拥有一个红色的椅子和一个红色的窗户了。

那么我们来创建一个材质，选择需要更改颜色的物体，在属性中单击该按钮，如图：

![cab467a5-2164-4877-8d85-156186a48103](https://arkimg.ark.online/cab467a5-2164-4877-8d85-156186a48103.webp)

这时候会在重新弹出一个材质编辑窗口，我们在这里选择 **"基础属性"** ，然后就可以通过 **"漫反射颜色"** 选项修改材质的颜色，修改好颜色后，点击 **"确认"** ，最后再进行保存。

![e0a4b22b-d4ac-47e9-bb8c-a9925bb80c26](https://arkimg.ark.online/e0a4b22b-d4ac-47e9-bb8c-a9925bb80c26.webp)

保存后，回到主界面，就可以看到场景上的方块颜色发生改变了

![image-20230723185834673](https://arkimg.ark.online/image-20230723185834673.png)

如果其他物体也想改成红色，那么直接使用我们这个材质就可以了，如图：

![image-20230723185931634](https://arkimg.ark.online/image-20230723185931634.png)
