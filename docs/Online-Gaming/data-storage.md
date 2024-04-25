# 数据存储

::: tip 阅读本文大概需要 10 分钟。

很多时候，我们需要将游戏中玩家的积分、等级、位置等信息储存下来，当玩家下次登录可以进行数据读取以便玩家继续游玩而不用重新开始，口袋方舟提供了非常简单的数据持久化接口，使用后可以轻松将数据存储到服务器中而不用担心丢失等问题！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317949529&p=24&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

更多数据持久化见产品文档：[数据存储与共享 | 产品手册 (ark.online)](https://docs.ark.online/Scripting/DataStorage.html)

## 1.设置存储环境

### 1.1.什么是存储环境？

使用数据存储，必须先设置存储环境，存储环境主要有两个：

- “临时存储”：数据会存放在设备本地的缓存文件中，更换设备后，数据消失。
- “永久存储”：数据会存放在 手机端 提供的服务器上，数据会跟随用户账号进行永久存储。

### 1.2.设置存储环境

注意：DataStorage 的相关接口**只能**在服务端调用生效

```ts
// 填true，代表将数据存储环境设置为“临时存储”
DataStorage.setTemporaryStorage(true)

// 填false，代表将数据存储环境设置为“永久存储”
DataStorage.setTemporaryStorage(false)

// 一劳永逸的写法：
// （因为我们都是在 PC 环境下开发，然后游戏在手机端运行，
//  使用 SystemUtil.isPIE 这个常量，就能够实现自动判断运行环境，从而设置正确的存储环境）
DataStorage.setTemporaryStorage(SystemUtil.isPIE)
```



## 2.存取「一个」数据

> 假设 「一条」数据包含：名字、等级、金币、背包，那么就把其中的一个字段称为「一个」数据

### 2.1.存一个数据（asyncSetData）

```typescript
@Component
export default class GameStart extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 存储数据只能在服务端执行生效
        if (SystemUtil.isServer()) {
            // 存数据
            DataStorage.asyncSetData("name", "空伊伊");
        }
    }
}
```

运行效果： 运行上述代码，会在项目根目录下创建一个 DBCache 文件夹， 该文件夹会在本地存储调用`asyncSetData`后生成的数据。
![dataSave20231010](https://arkimg.ark.online/dataSave20231010.gif)

### 2.2.取一个数据（asyncGetData）

```typescript
@Component
export default class GameStart extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {

        // 存储数据只能在服务端执行生效
        if (SystemUtil.isServer()) {
            // // 存数据
            // DataStorage.asyncSetData("name", "空伊伊");

            // 取数据
            let result = await DataStorage.asyncGetData("name");
            // 将获取到的数据打印出来
            console.log(result.data);
        }
    }
}
```
运行效果： 运行上述代码，根据键"name"去取到对应的值并打印出来 注意`asyncGetData`是一个异步方法，必须加`await`去等待数据获取完成，因为获取数据不会在当前帧就立马执。如果不加`await`，那么接收到的就只是一个`Promise`对象，并不是具体的数据。
![image-20231010143932489](https://arkimg.ark.online/image-20231010143932489.webp) 

### 2.3.存取一个数据的缺点

![img](https://ali-forum.ark.online/forum/202302/20/141655tws4vwvnqxakhkx7.png)

假如我现在需要保存上方的数据，那么我通过一个一个的保存，需要添加下列代码进行保存。

```typescript
DataStorage.asyncSetData("name", "空伊伊");
DataStorage.asyncSetData("level", "22");
DataStorage.asyncSetData("gold", "300");
DataStorage.asyncSetData("bag", "手枪，飞镖，瓶子");
```

**执行结果**

![image-20231010144218207](https://arkimg.ark.online/image-20231010144218207.webp)

  **缺点** ：

- 1.当数据字段多起来的时候，这样一个一个的存储，会导致数据文件过多，不方便管理和查看 。

- 2.获取到的数据，不知道对应的类型，难以使用。

## 3.存取「一条」数据

> 如果一条数据包含：名字、等级、金币、背包。那么就把这条数据称为「一条」数据

### 3.1.定义一个数据结构

如下，用一个class来作为数据结构是最为合适的，因为你自己可以定义字段的类型，还能写一些操作数据的方法。

```typescript
export class DataInfo {
    /**角色姓名 */
    roleName: string;
    /**角色等级 */
    level: number;
    /**金币 */
    gold: number;
    /**背包 */
    bag: string[];

    constructor(name: string, level: number, gold: number, ...param: string[]) {
        this.roleName = name;
        this.level = level;
        this.gold = gold;
        this.bag = param;
    }
}
```

![img](https://ali-forum.ark.online/forum/202302/20/144632pvwx5m2e7w2vv5ns.png)

可以看到，将数据转换成 JSON 格式进行存储，在获取数据的时候就能将数据还原为数据结构，很方便
另外需要注意！
Map 这种数据结构，无法序列化，所以尽量避开使用。

::: tip
由于 asyncSetData 和 asyncGetData 内部已经帮我们执行了 JSON 和数据结构的转换，所以使用这两个 API 来存数据，就不需要我们进行格式转换了。
:::

### 3.2.存一条数据

```typescript
// 方法1：
// 创建一条数据
const data1 = new DataInfo("空伊伊", 22, 300, "手枪", "飞镖", "瓶子");
// 传入自定义的键值
DataStorage.asyncSetData("Player1", data1);

// 方法2：
const data2 = { "roleName": "空伊伊", "level": "22" };
DataStorage.asyncSetData("Player1", data2);
```

### 3.3.取一条数据

```typescript
// 方法1：
// 取数据（记得一定要异步！）
const result = (await DataStorage.asyncGetData("Player1"));
const data = result.data as DataInfo;
// 打印数据
console.log(data.roleName, data.level, data.gold, data.bag);

// 方法2：
const data = (await DataStorage.asyncGetData("Player1")).data;
console.log("取出了数据 ", data["roleName"], data["level"]);
```

## 4. 数据存储相关的限制

在永久存储数据时，由于要和 手机端 提供的服务器进行交互，为了避免服务器承受过大的压力，所以存储数据在大小和频率上都做了相关限制。

具体规则如下：

- **大小限制**：单条数据的大小不能超过 **64** kb

- **改写间隔限制**：对于一个 Key 对应的一条数据，有效修改间隔为 **6** 秒



## 5.【推荐】使用数据中心存储数据 

### 5.1.数据中心介绍

数据中心是编辑器内置的一套 API 接口，对 DataStorage 接口进行了封装。能够优化 DataStorage 的使用体验，实现如下效果：

- **数据缓存**：数据中心会在玩家一上线时，读取到该玩家对应的数据，然后缓存到服务端。

- **自动处理改写间隔**：数据中心在服务端维护了一个计时器，会在数据发生改变后，间隔 10 秒才将数据发送给 手机端 的数据服务器。此外还会在玩家退出游戏时也进行一次数据发送。这样就避免了存储数据超过了改写间隔限制而导致数据存储失败的情况。
- **自动同步数据**：数据中心的数据在服务端初始化以及发生改变时，都会同步给客户端，客户端可以通过 DataCenterC 获取到自己的数据。

### 5.2.数据中心使用方法

**（一）创建一个 SubData**

SubData 是一个数据基类，我们自定义的数据结构需要继承 SubData 才能与数据中心关联。

```ts
export class BagData extends Subdata {
	// 这个装饰器必须加，只有加了装饰器的字段才能被永久存储
    @Decorator.persistence()
    item: string[] // 背包内容

    @Decorator.persistence()
    level: number // 背包等级
	
    /**初始化数据（当没有数据时，才会自动调用这个方法） */
    protected onDataInit(): void {
        this.item = ["默认道具1", "默认道具2"]
        this.level = 1
    }
	
    /**向背包添加数据 */
    public addItem(str: string) {
        this.item.push(str)
        // 这里调用save，作用是将此次数据变化存放到存储队列，服务端会在10秒的间隔内，将数据进行永久存储
        // 填 true 的作用，是立即将数据同步给客户端
        this.save(true)
    }

}
```

**（二）在服务端获取数据**

```ts
// 第一个参数是Player对象，第二个参数是对应数据结构的类名
DataCenterS.getData(player, BagData)
```

**（三）在客户端获取数据**

```ts
// 如果是在客户端一启动的时候就要获取数据，那就需要添加这行 ready 代码
//（因为服务端同步数据到客户端是有一个间隔时间的，加上 ready 才能够保证获取到数据）
// await DataCenterC.ready()

// 只有一个参数：数据结构的类名（因为客户端只维护自己的数据，想要获取其它客户端的数据，需要到服务端进行获取）
DataCenterC.getData(BagData)
```

**（四）数据升级**

数据升级相关的内容可以阅读下方这条帖子：

https://forum.ark.online/forum.php?mod=viewthread&tid=1875

