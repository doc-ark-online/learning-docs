# 玩家角色与摄像机

::: tip 阅读本文大概需要 10 分钟。

编辑器开发游戏过程中，**玩家**与**角色**这两个概念贯穿始终。本章节我们来一起了解一下它们之间的关系。

:::


## 1.玩家

首先我们要理解什么是玩家，当用户进入游戏后，服务端会自动生成一个玩家对象给用户。每个用户都有一个与之对应的玩家对象，在游戏中，玩家是控制的主体，而角色是玩家在游戏世界中的具体化身。用户自己的这个玩家对象我们称之为 **本地玩家(local Player)** 。

要注意的是：在服务端中，不存在本地玩家这个概念。因为一个游戏房间中会同时拥有多个玩家，想要在服务端对某个玩家进行操作，通常我们会使用**平台 ID（userId）**来获取它的玩家对象，然后对其进行操作。 

在游戏中，我们并不能直接看到玩家，它是一个纯逻辑概念。游戏中看到的模型，其实是玩家控制的**角色**，角色的详细信息将会在下文介绍。

![48312f7e-9948-4ad4-918a-16128a01d35e](https://arkimg.ark.online/48312f7e-9948-4ad4-918a-16128a01d35e.webp)

下面代码演示了如何获取玩家的平台 ID

```typescript
@Component
export default class GameStart extends Script {
    protected onStart(): void {
        // 获取本地玩家平台ID //[!code focus]
        if (SystemUtil.isClient()) { //[!code focus]
            const userId = Player.localPlayer.userId; //[!code focus]
        } //[!code focus]
    }
}
```

::: danger 获取本地玩家注意事项

要注意的是`Player.localPlayer`属性仅在继承自 Script 的脚本中可以使用，如果要在 UI 脚本中获取本地玩家，请使用`Player.asyncGetLocalPlayer()` 函数。

:::

## 2.角色

角色是出现在游戏中的拥有特殊功能的模型，也是玩家的具体化身。角色是玩家对象的一个属性，每个玩家进入游戏后都会拥有一个默认角色，我们可以调节角色的外观、身材、移动速度等属性制作出不同的角色。

我们可以在编辑器主界面的 **对象管理器** 中看到一个游戏物体名称为 **Player**，选中它在 **属性面板** 中就会显示游戏角色默认的属性参数，如下图。我们可以直接在属性面板修改，这样修改完之后，**所有的用户** 默认值就换成我们设定的了。

更多关于角色换装的详细信息可以查阅这篇教程：[角色编辑器与换装 | 教程](https://learning.ark.online/Common-Functions/character-editor.html)

![80466816-ebe8-4b50-bf31-c1fec2efca65](https://arkimg.ark.online/80466816-ebe8-4b50-bf31-c1fec2efca65.webp)

在上图中我们就可以对游戏角色的属性参数进行修改，除此外，我们还常常会使用脚本代码来动态的进行角色控制，例如修改移动速度、让人物跳跃、下蹲等操作，下面我们通过代码来尝试获取玩家角色，然后修改它的最大跳跃高度：

```typescript
@Component
export default class GameStart extends Script {
    protected onStart(): void {
        // 修改本地玩家的角色的最大跳跃高度为 100 //[!code focus]
        if (SystemUtil.isClient()) { //[!code focus]
            Player.localPlayer.character.maxJumpHeight = 100; //[!code focus] //[!code focus]
        }//[!code focus]
    }
}
```

关于角色的详细信息请查阅产品手册：[角色基础功能 | 产品手册](https://docs.ark.online/Role/RoleBasicAbility.html) ，该文档提供了角色的各种能力使用示例，如角色基本运动、飞行、游泳、下蹲、下落、跳跃、姿态、换装、插槽等。

## 3.摄像机

每个玩家角色在创建时，都会拥有一个与之对应的相摄像机对象。这个摄像机对象默认为角色的子物体，一直跟随玩家位置。我们可以在对象管理器中找到`Camera`来设置默认相机参数，关于相机详细功能介绍请查阅产品手册：[摄像机 | 产品手册](https://docs.ark.online/WorldObjects/Camera.html)

![7dfd77de-7adb-4491-990d-3d51a0bdcde4](https://arkimg.ark.online/7dfd77de-7adb-4491-990d-3d51a0bdcde4.webp)

## 4.用户加入房间与离开房间

在上文中我们提到**角色(Character)** 与 **玩家(Player)**，由于现实生活的种种因素，玩家会频繁地进出游戏房间，这就导致了角色在游戏世界中的动态变化，编辑器提供了四个不同的回调事件来通知开发者玩家进出游戏。

### 4.1  玩家进入与离开

使用 `onPlayerAdd` 事件可以监听到玩家加入游戏，这个函数可以在客户端与服务端使用。不过要注意的是在客户端使用时无法监听到该客户端自身玩家的进入，因为在本客户端玩家进入前脚本可能还没有开始运行。 

```typescript
Player.onPlayerAdd.add((player: Player) => {
    console.info("有玩家加入了游戏!");
});
```

使用`onPlayerRemove`事件可以监听到玩家离开游戏，同样这个函数也可以在客户端与服务端使用。

```typescript
Player.onPlayerRemove.add((player: Player) => {
    console.info("有玩家离开了游戏!");
});
```

### 4.2 角色创建与销毁

在创建玩家后，会接着创建玩家的角色，当事件触发时角色的骨骼和碰撞体已经创建完毕，可以开始移动，而角色的外观和挂件则可能需要等待一段时间才能创建完成。如果需要等待角色的彻底完成可以使用 Character 的 `asyncReady` 来进行等待。

也可以通过监听 `Character.onDescriptionComplete` 事件来确保角色拥有完整的外观和挂件。

要注意的是`onPlayerAdd`事件回调中访问该玩家 Character 对象可能会出现错误，因为这时该玩家的角色可能还没有创建完成，为了确保流程正确我们可以使用 ` onCharacterAdd` 来监听玩家角色创建。

```typescript
Player.onPlayerAdd.add((player: Player) => {
    console.info("有玩家加入了游戏!");
	// 监听角色创建事件
    player.onCharacterAdd.add((character: Character) => {
        console.info("玩家的角色创建成功!");
    });
});
```

当有玩家下线时候，对应的角色模型就会自动销毁，这时如果我们在客户端给某些玩家挂载了挂件可能需要对挂件进行销毁或者回收处理，就可以监听 `onCharacterRemove`事件，同样我们可以将它也写在角色进入回调中。

```typescript
Player.onPlayerAdd.add((player: Player) => {
    console.info("有玩家加入了游戏!");
    player.onCharacterAdd.add((character: Character) => {
        console.info("玩家的角色创建成功!");
    });
    
    player.onCharacterRemove.add((character: Character) => {  //[!code focus]
        console.info("玩家的角色将要被销毁!"); //[!code focus]
    }); //[!code focus]
});
```

## 5.切换控制权

在第一小节我们介绍过，角色是玩家的一个属性，所以我们可以来动态切换玩家当前控制的角色。这个功能可以用来实现体育模拟类游戏中切换不同运动员的功能。

::: tip

控制权必须要在服务端切换，下面代码实现了使用代码创建新角色并且将控制权切换过去。在本章节看不懂也没关系，这里只是先提前说明玩家的功能，在学习完网络功能章节后相信大家就能读懂下列代码了。

:::

```typescript
@Component
export default class PlayerCharacter extends Script {

    protected onStart(): void {
        // 下列代码仅在服务端执行
        if (SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            Event.addClientListener("SpawnCharacterAndControl", (player) => {
                const newPawn = Player.spawnDefaultCharacter();
                newPawn.worldTransform.position = new Vector(200, 0, 500);
                player.control(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if (SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            const myPlayer = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数:在生成并控制的新角色位置播放一个特效
            myPlayer.onPawnChange.add(async (pawn) => {
                await AssetUtil.asyncDownloadAsset("7750")
                EffectService.playAtPosition("7750", new Vector(200, 0, 500));
            });
            
            // 添加一个按键方法:按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Keys.One, () => {
                Event.dispatchToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

在游戏运行后按 1 就可以创建一个新的角色，并且将当前玩家控制的角色切换为新创建的角色。切换过去之后，原本玩家的角色就会留在原地变为 NPC 。**同一个角色在同一时刻只能由唯一玩家控制**。下文视频中请注意角色头顶名字的不同代表着新的角色：

<video controls="" src="https://arkimg.ark.online/2023-09-25_10-48-46_x264.mp4"></video>

