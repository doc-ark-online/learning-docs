# 玩家与角色

::: tip 阅读本文大概需要 10 分钟。

在口袋方舟编辑器中，每个客户端默认会定义为一个玩家，而每一个玩家默认会生成一个可操控角色，本小节我们就来一起了解一下它们之间的关联关系！

:::

NPC 角色使用相关见产品文档：[非玩家对象](https://docs.ark.online/GameplayObjects/NPCs.html)

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src=" https://player.bilibili.com/player.html?aid=778296714&bvid=BV1iy4y1d798&cid=978207250&page=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

## 1. 玩家类

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnFXSLRPzuaRmYAgag4McUNp.png)

我们在前面小节的学习中，了解了一个服务端可能会对应多个客户端 [2.2 客户端与服务端](https://learning.ark.online/md/2.2.html) ，那么在游戏开发过程中，每个客户端会对应一个玩家类，而每一个玩家类中，会包含角色类、玩家 id(每个客户端的玩家 id 都是唯一的)等信息，那么通过代码来使用玩家类非常简单，如下：

```typescript
@Component
export default class PlayerControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        //只有在客户端中才能获取该客户端对应的玩家 
        if (SystemUtil.isClient()) {
            //玩家 id,玩家的唯一标识
            let id = Player.localPlayer.playerId;
            //当前玩家的 ping 值
            let ping = Player.localPlayer.ping;
            //当前玩家的操作角色
            let character = Player.localPlayer.character;
            //这里可以输出角色名称
            console.log(character.displayName)
        }
        //如果想在服务端获取玩家怎么做？
        if (SystemUtil.isServer()) {
            //通过玩家 id 可以获取对应玩家
            // const player = Player.getPlayer(playerid)
            //也可以直接获取玩家数组
            const players = Player.getAllPlayers();
        }
    }
}
```

## 2. 角色类

角色是具有一套行为能力的模型。游戏世界中，角色分为非玩家角色和玩家角色。

- 【玩家角色】：由玩家控制的角色，大部分的玩家角色都是游戏剧情的关键或是主角。

- 【非玩家角色】：非玩家角色也被称为 NPC ( non-player character )，指的是在游戏中不受真人玩家控制的游戏角色。NPC 一般由计算机人工智能控制，拥有一套行为模式的角色。NPC 通常分为剧情 NPC，战斗 NPC，服务 NPC 以及兼具多种功能的 NPC 等。

在一个项目中，每个客户端玩家会默认拥有一个角色，我们可以在编辑器主界面的“对象管理器”窗口中看到一个游戏物体名称为“Player”，选中“Player”，在属性面板中就会显示默认游戏角色的属性参数，如图。

![image-20230726150740795](https://arkimg.ark.online/image-20230726150740795.webp)

在上图中我们就可以对游戏角色的属性参数进行修改，除此外，我们还常常会使用脚本代码来动态的进行角色控制，例如修改移动速度、开关人物控制、让人物跳跃、下蹲等操作，下面我们通过代码来尝试获取玩家角色，然后每隔 10 秒，让该玩家角色会自动跳跃一次，示例代码如下：

```typescript
@Component
export default class PlayerControl extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        //只有在客户端中才能获取该客户端对应的玩家 
        if (SystemUtil.isClient()) {
            //开启计时器，每隔 10000 毫秒
            setInterval(() => {
                //跳跃
                Player.localPlayer.character.jump();
            }, 10000);
        }
    }
}
```

完整角色能力示例地址：[角色](https://docs.ark.online/WorldObjects/Characters.html)  ，该文档提供了角色的各种能力使用示例，如角色基本运动、飞行、游泳、下蹲、下落、跳跃、姿态、换装、插槽等。

## 3. 布娃娃系统

Character 类中有一个特殊的方法可以为我们的角色添加一个布娃娃系统，类似火柴人的游戏，当人物死亡后，火柴人的关节会变得柔软<strong>不受控制</strong>，瘫倒在地上，布娃娃就是这样的效果，如下：

<video controls src="https://arkimg.ark.online/1690360696404.mp4"></video>

通过代码设置开启与关闭布娃娃系统也非常简单，示例代码如下：

```ts
@Component
export default class PlayerControl extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart() {
        // 只有在客户端中才能获取该客户端对应的玩家 
        if (SystemUtil.isClient()) {
            setTimeout(() => {
                // 5 秒后开启布娃娃系统
                Player.localPlayer.character.ragdollEnabled = true
                setTimeout(() => {
                    // 5 秒后关闭布娃娃系统
                    Player.localPlayer.character.ragdollEnabled = false
                }, 5000);
            }, 5000);
        }
    }
}
```