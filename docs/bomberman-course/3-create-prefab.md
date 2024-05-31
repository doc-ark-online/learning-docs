# 创建炸弹预制体

::: tip 阅读本文大概需要 10 分钟

本节将会创建一个炸弹预制体，为后序操作炸弹做准备。

:::

接下来我们创建炸弹预制体，单击“工程内容”面板中的“预制体”选项，单击“新建预制体”创建一个新的预制体并命名为`Bomb`，如图：

![image-20240307134731559](https://arkimg.ark.online/image-20240307134731559.webp)

在资源库中将炸弹资源(AssetID:86375)拖拽到预制体上，并设置位置为（0,0,25），如图：

![image-20240307135506976](https://arkimg.ark.online/image-20240307135506976.webp)

因为这里炸弹本身也是一个特效，所以为了防止特效播放完成后自动销毁，我们将炸弹的循环属性勾选上，并设置循环次数为0，代表无限循环，如图：

![image-20240307163421038](https://arkimg.ark.online/image-20240307163421038.webp)

在资源库中将炸弹爆炸音效资源(AssetID:122569)拖拽到预制体上，并开启“音效空间化”选项，这样爆炸声音就会有近大远小的空间效果，如图：

![image-20240307140030324](https://arkimg.ark.online/image-20240307140030324.webp)

在资源库中将炸弹爆炸特效(AssetID:27710)拖拽到预制体上，并取消“启用”和“循环”选项，保证特效默认情况下不会自动播放，如图：

![image-20240307140954211](https://arkimg.ark.online/image-20240307140954211.webp)

接下来我们编写炸弹脚本，在“工程内容”面板中，单击“脚本>新建脚本”创建一个新的脚本，并命名为`BombControl`，如图：

![image-20240307141458996](https://arkimg.ark.online/image-20240307141458996.webp)

将创建好的脚本拖拽到”Bomb“预设体上，可以看到属性面板中已经多出了我们挂载的脚本分组，如图：

![image-20240307141838845](https://arkimg.ark.online/image-20240307141838845.webp)

编写脚本前，我们思考一下脚本要实现的功能有哪些：

2. 炸弹生成3秒后，隐藏炸弹模型并播放炸弹特效、音效，做出爆炸的效果

3. 炸弹生成3秒后，同时检测附近200单位距离的所有玩家，并向检测到的玩家发送扣血事件

4. 炸弹生成5秒后，删除炸弹预设体

双击打开“BombControl”脚本，编写脚本代码如下：

```typescript
@Component
export default class BombControl extends Script {

    protected onStart(): void {
        //服务端运行代码，所有的逻辑我们写在服务端进行
        if(SystemUtil.isServer()){
            //5秒后销毁整个预设体
            setTimeout(() => {
                this.gameObject.destroy();
            }, 5000);
            //3秒后检测炸弹200范围内有无玩家
            setTimeout(() => {
                //范围检测并返回200范围内的游戏物体
                const gameObjects = QueryUtil.sphereOverlap(this.gameObject.worldTransform.position, 200);
                //对检测到的物体进行遍历
                gameObjects.forEach((gameObject) => {
                    //判断该物体是不是玩家角色
                    if(gameObject instanceof Character){
                        //如果是，我们给玩家发受伤消息(这里的消息字符串是我们自定义的)
                        Event.dispatchToClient(gameObject.player, "Event_HpChange");
                    }
                });
            }, 3000);
        }

        //客户端运行代码，所有的表现我们写在客户端进行
        if(SystemUtil.isClient()){
            //3秒后做炸弹爆炸效果
            setTimeout(() => {
                //隐藏炸弹物体
                const bomb = this.gameObject.getChildByName("炸弹") as GameObject;
                bomb.setVisibility(false);
                //显示爆炸特效
                const effect = this.gameObject.getChildByName("炸弹爆炸") as Effect;
                effect.play();
                //播放爆炸声音
                const sound = this.gameObject.getChildByName("火炮爆炸") as Sound;
                sound.play();
            }, 3000);
        }
    }
}
```

按下“Ctrl+S”保存脚本后，切换回编辑器再次按下“Ctrl+S”保存预制体，接下来我们切换回游戏场景，如果提示保存弹窗，单击“保存”按钮即可，如图：

![image-20240307145337218](https://arkimg.ark.online/image-20240307145337218.webp)

这样，我们的炸弹预制体就制作完成了！
