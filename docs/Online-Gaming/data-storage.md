# 使用数据中心存储数据

::: tip 阅读本文大概需要 6 分钟。

很多时候，我们需要将游戏中玩家的积分、等级、位置等信息储存下来，当玩家下次登录可以进行数据读取以便玩家继续游玩而不用重新开始，口袋方舟提供了非常简单的数据持久化接口，使用后可以轻松将数据存储到服务器中而不用担心丢失等问题！

:::

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="//player.bilibili.com/player.html?aid=322817180&bvid=BV1qw411q7ba&cid=1317949529&p=24&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>

更多数据持久化见产品文档：[数据存储与共享 | 产品手册 (ark.online)](https://docs.ark.online/Scripting/DataStorage.html)

## 1.存取「一个」数据
> 假设 「一条」数据包含：名字、等级、金币、背包，那么就把其中的一个字段称为「一个」数据

### 1.1.存一个数据（asyncSetData）

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

### 1.2.取一个数据（asyncGetData）

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

### 1.3.存取一个数据的缺点

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

## 2.存取「一条」数据

> 如果一条数据包含：名字、等级、金币、背包。那么就把这条数据称为「一条」数据

### 2.1.定义一个数据结构

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

### 2.2.存一条数据

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

### 2.3.取一条数据

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
