# 控制游戏对象

## 1. 脚本动态创建游戏物体

游戏开发中，我们常常需要通过脚本动态的进行游戏物体的创建，这里我们选择一个正方体（asset Id: 197386）进行动态创建。

![b9c78123-72e3-43d5-8834-052ed621d5dc](D:\教程图片缓存\b9c78123-72e3-43d5-8834-052ed621d5dc.webp)

创建并在场景当中挂载一个脚本，脚本代码如下：

```typescript
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
            }, 3000);
        }
    }
}
```

运行游戏，可以看到该物体被动态创建出来，5 秒过后会自动销毁

除了普通物体，特效、声音、预设体等都可以使用该脚本方式动态创建出来。

创建一个特效/声音，无需其他客户端同步显示，那么只需要在客户端编写全部逻辑。

创建一个普通物体，如果需要其他客户端都同步显示，那么需要在服务端进行创建与销毁操作，而对物体的移动、旋转修改等操作也可以在客户端修改，会自动同步所有客户端显示，具体客户端与服务端查看：[客户端与服务端](https://learning.ark.online/md/2.2.html)

## 2. 更改物体位置

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

## 3. 更改物体颜色

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
