# TypeScript 学习

::: tip 阅读本文大概需要 30 分钟。

在游戏开发过程中，当创作者所需的功能编辑器没有时，就需要创作者编写脚本来实现了。口袋方舟编辑器使用了 TypeScript 编程语言，学习起来十分简单，接下来我们就来一起学习一下这门编程语言！

:::

## 前置知识

### 关于注释

在阅读官方示例代码时会发现代码中有大段的文字内容，它们通常以 // 或 /* 开头。这些文字内容在编程领域我们称之为**代码注释**，它是一种用于解释代码的标记方式。注释不会影响代码的执行，但可以帮助其他开发人员理解和使用代码。

注释有单行和多行两种形式：

- 单行注释：使用 // 开始，只能注释同一行内容。
- 多行注释：使用 /* 和 */ 之间的内容进行注释，可以注释多行内容。

在阅读其它人编写的代码时，大家要多留意注释内容，这样可以更好的学习代码内容。

### 关于每行代码句末的分号

在 TypeScript 语言中，分号（;）用于表示语句的结束，句末的分号是可选的，创作者们不必非要添加上它。在示例代码中使用它仅仅是为了提高代码可读性，方便创作者们学习。

## 1. 类

::: tip 学习建议

关于面向对象、类这些概念比较复杂，这里我们简单了解下即可，只有开发逻辑较为复杂的游戏时才需要深入学习。

:::

### 1.1 什么是类？

TypeScript 是一门面向对象语言，在面向对象语言中`类 (Class)`描述了具有相同属性和方法的模板。可以简单地将类看作是一种定义对象结构和行为的模板。

创作者可以在类中添加函数、变量来实现特定的游戏逻辑，比如操作一个 NPC 按指定路线寻路、播放特效、播放音效等。

在编辑器中我们每次新建脚本，都会默认在该脚本中创建一个与脚本名同名的类。这里我创建一个名为 `LearnTS` 的脚本作为演示：

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {  }

    /**
     * 周期函数 每帧执行
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {  }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {  }
}
```

可以看到默认脚本模板中，在第二行使用 Class 关键字定义了一个名为 `LearnTS` 的类。在类名之后又使用 `extends` 关键字继承了`Script`这个类。

这里就引申出一个新的概念：**继承**，那么什么叫继承呢？在面向对象编程中，继承是从已有的类中建立新类的过程，新类可以继承已有类的属性和方法。被继承的类被称为父类，继承父类的类叫做子类。通过继承可以实现代码的复用减少代码编写时间。

回到上边的例子，`Script` 就是已有的类(由编辑器提供)，`LearnTS` 是新创建的类，也就是说 `Script` 是 `LearnTS ` 的父类， `LearnTS`  是它的子类。

默认脚本代码中的这三个生命周期函数: `onStart`、`onUpdate`、`onDestroy` 就是从父类`Script`继承下来的。

### 1.2 什么是类的成员？

在上一小节的脚本模板代码中我们可以看到，在声明类这一行代码的最后使用了一个花括号`{}`，在花括号中所有函数、变量都被称之为类的成员。具体来说变量被称为类的成员变量、函数称为类的成员函数。

类的成员可以使用**访问修饰符**来控制它的可见范围，简单来说就是可以控制某个函数或变量可以在哪些地方被使用、修改。

在 TypeScript 中，访问修饰符有以下下三种，这些修饰符可以帮助开发者更好地封装和控制类的行为，限制对类成员的访问，从而提高代码的效率和可读性。

1. `public`：公共访问修饰符，表示该成员可以从任何地方访问。
2. `private`：私有访问修饰符，表示该成员只能在其所属类内部访问。
3. `protected`：受保护访问修饰符，表示该成员可以在其所属类及其子类中访问。

这就是类的简单入门，想要深入学习可以在最下方扩展章节中阅读扩展资料进一步学习。学完类之后我们来学习一下如何在 `LearnTS`类中申明变量、编写自定义逻辑吧！

## 2. 变量

变量是一种存储各种类型数据的容器，程序可以使用和更改它。比如玩家的名字、积分、生命值等就可以声明为变量。

**声明变量**就是创建一个新变量的过程，在程序开发中我们通常使用声明变量来表示创建变量这一整个行为，在 TypeScript 中变量有两种常见声明方式：

- 声明为类的成员变量。
- 声明为块级变量。

这两种不同的声明方式直接影响到变量的作用域，在类中声明的变量可以被整个类中所有方法或其他类中的方法使用，在方法中声明的块级变量只能在该方法中使用。推荐创作者们若无不要尽量少创建类变量，这样会让一个变量的更改逻辑变得于复杂，不方便后续定位问题。

概念了解之后，来实际看看如何创建这两种变量吧，这里我继续使用第一小节中的脚本作为示例。

:::tip 关于变量类型

在其它一些强类型语言中，声明变量需要指定其类型。在 TypeScript 中可以无需对变量指定类型，但是我们推荐为每个变量指定它的类型，这样可以更好地使用代码提示功能。

:::

### 2.1 创建类的成员变量

下面的代码，在类中创建了一个用来玩家存储生命值的变量，并将它命名为 `MyHP` 。( 背景中模糊的代码是之前已经存在的，新添加的代码会用绿色的背景并且高亮表示 )

:::warning 关于变量命名

变量名不能包含空格，如果变量名中包含空格会导致代码出现错误（无法按预期执行）。变量名推荐使用有实际意义的单词或者短语，这样后续代码使用时会更清晰。

:::

```typescript
@Component
export default class LearnTS extends Script {

    // 生命值 //[!code focus] //[!code ++]
    MyHp; //[!code focus] //[!code ++]

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

在之前小节中，提到了类的成员变量可以使用访问修饰符来指定其可被使用的范围，接下来就来实际操作一下给刚刚声明的变量加上访问修饰符。

要给上一步中声明的变量 `MyHp` 加上公共访问修饰符，只需要将 public 这个单词写在变量名前边。要注意的是访问修饰符与变量名之间必须有至少一个空格，这样才可以正常使用否者代码会出现错误。

如果想要将变量修改为只能在类内使用，只需要将 public 修改为 private 即可。

```typescript
@Component
export default class LearnTS extends Script {

    // 生命值  //[!code focus] //[!code ++]
    public MyHp; //[!code focus] //[!code ++]

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

### 2.2 创建块级变量

与类的成员变量不同的是，块级变量不能使用访问修饰符。在 TypeScript 语言中，块级变量只在该代码块内部可使用，一旦超出该代码块的范围，变量的作用域就会消失。

在 TypeScript 中可以使用 `let` 和 `const` 关键字来声明块级变量。其中，`let` 用于声明一个可以被重新赋值的变量，而 `const` 则用于声明一个不可被重新赋值的变量，这种不可以被修改的变量我们称之为常量。

**因为常量不可以被重新赋值，所以常量必须要在声明时就对它赋值。**在下一小节会对赋值操作进行详细介绍，这里大家只需要记住这个概念。

以下是一个示例，展示了在 `onStart` 函数中声明块级变量:

- 使用 let 关键字声明了一个 名为 x 的变量。
- 使用 const 关键字声明了一个名为 y 的常量。

```typescript
@Component
export default class LearnTS extends Script {

    // 生命值
    public MyHp;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { 
        let x; // 块级变量  //[!code focus] //[!code ++]
        const y = 20; // 块级常量 //[!code focus] //[!code ++]
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

### 2.3  为变量赋值

在编程中，给一个变量指定为某个值的过程称之为**赋值**。

在 TypeScript 语言中新建的变量默认为空值，想要给它赋值可以使用 `=` （等于号）对它进行操作，通常要修改的变量放在等号左边，想要赋予它的内容放在等号的右边。比如我们要给上一小节中的 x 赋值为 100，我们可以这样写：

::: tip

变量可以在声明的同时给它赋值，这个值通常称之为**初始值**，下列代码中变量 x 的初始值就是 100。

:::

```typescript
@Component
export default class LearnTS extends Script {

    // 生命值
    public MyHp;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { 
        let x = 100; // 块级变量  //[!code focus] //[!code ++]
        const y = 20; // 块级常量
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

使用 `let` 关键字申明的变量可以声明后继续修改它的值，每一次赋值操作都会将变量原本的值覆盖，在实际代码编写中创作者们要格外注意代码执行的顺序避免出现错误。

要注意的是在后序对变量进行赋值操作时，**不需要使用 let 关键字**只需使用变量名即可。下列代码中展示了对变量 x 进行多次赋值，使他最终等于 1

```typescript
@Component
export default class LearnTS extends Script {

    // 生命值
    public MyHp;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { 
        let x = 100; // 块级变量  //[!code focus] //[!code ++]
        x = 50; // 赋值为 50  //[!code focus] //[!code ++]
        x = 1; // 赋值为 1  //[!code focus] //[!code ++]
        const y = 20; // 块级常量
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

对于类的成员变量来说，使用方式略有不同。想要获取到它需要使用一个新的关键字 `this` ，这个关键字代表着当前的类，使用 `this.MyHp` 就能获取到生命值变量了，赋值操作的话与其它变量相同。下面展示了将 MyHp 变量的值修改为 100。

```typescript
@Component
export default class LearnTS extends Script {

    // 生命值
    public MyHp;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
       // 给 MyHp 变量赋值为 100 //[!code focus] //[!code ++]
       this.MyHp = 100; //[!code focus] //[!code ++] 
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

## 3. 数据类型

TypeScript 的变量可以指定为各种类型，指定类型之后可以减少类型错误和运行时错误的可能性，从而提高代码的质量和稳定性。在多人协作的项目中，明确的变量类型声明可以减少沟通成本，因为团队成员可以更容易地理解彼此的代码。

在 TypeScript 语言中要给一个变量指定类型，可以在声明变量时在变量名后加冒号 `( : )` ，冒号后为变量类型，比如我想给变量 x 声明为数字类型 （number） 可以这样做：

``` typescript
let x: number;
```

了解了如何指定变量类型后，一起来看看常用的数据类型吧。

### 3.1  TS 中常用的数据类型

**数字类型**

数字类型是脚本中最常用的类型之一，可以通过不同的赋值方式来指定数字的进制。比如以 `0b` 开头代表这个变量为二进制数字，在游戏开发中我们常用的进制为 十进制，声明十进制变量时无需添加任何前缀。

```typescript
let binaryLiteral: number = 0b1010;  // 二进制 0b 开头
let decLiteral: number = 10;         // 十进制 无前缀 默认为十进制
```

**字符串类型**

在 TypeScript 中，字符串是用于表示文本数据的基本数据类型。字符串可以包含字母、数字、特殊字符或空格，使用单引号（**'**）或双引号（**"**）来表示字符串类型。

```typescript
let name: string = "口袋方舟";
```

**布尔类型**

布尔类型只有两个值：**true 和 false** ，用来表示 **“是” 或 “否”** 布尔类型常用于条件判断和逻辑运算。可以简单地将它看作为一个开关，要么是开要么就是关，不存在第三个状态。

```typescript
let switch: boolean = true;
```

**数组类型**

数组是一种可以存储多个值的数据结构，数组的类型由其元素类型决定。要申明一个数组类型的变量只需要在类型后面加上方括。例如，一个包含数字的数组的类型是 number[] 。

```typescript
// 声明一个初始值为空数组的数字数组 ，等于号后面的 [] 代表数组的初始值为空
let arrayNum: number[] = [];
// 声明一个初始值为有两个数据的数组
let arrayNum2: number[] = [1, 2];
```

**空类型**

空类型代表着某个变量还没有值，变量如果在声明时没有赋值那么它的值就是**“空”**。我们一般用 `undefined` 表示变量未被赋值或未定义，使用 `null` 表示“无”或“没有值，null 和 undefined 的类型就是它们本身。

要注意的是，null 可以赋值给任意类型的变量，代表这个变量现在为空了。

```typescript
// 将变量 x 赋值为 null
let x: null = null;
// 将数字数组的值设置为空 
let arrayNum: number[] = null;
```

**Void 类型**

void 类型是一种特殊的空值，它常用在函数的返回值中，标识某个函数没有返回值，在下一小节函数中将会详细介绍 void 类型。

### 3.2 口袋方舟中常用的数据类型

::: warning 关于对象

为了开发方便，在口袋方舟中内置了一些新的数据类型。这些数据类型以对象形式存在，使用时需要使用 `new` 关键字来声明。类也是一种对象，创作者们可以类比一下类的结构。

:::

**向量类型 (Vector)**

向量类型分为三种：二维向量 、三维向量、四维向量，在口袋方舟中 UI 多用二维向量表示一个控件的位置，在场景中多用三维向量表示游戏对象所处的位置。向量类型是一个对象，需要使用 `new` 关键字来声明。

```typescript
// 创建一个名为 vector2 的二维向量
let vectoc2: Vector2 = new Vector2(100, 100);
// 创建一个名为 vector3 的三维向量
let vectoc3: Vector = new Vector(100, 100, 100);
// 创建一个名为 vector4 的四维向量
let vectoc4: Vector4 = new Vector4(100, 100, 100, 100);
```

更多关于 Vector 的内容可以参阅产品手册：[Vector | API (ark.online)](https://api-docs.ark.online/classes/mw.Vector.html)

**旋转类型 (Rotation)**

旋转类型在场景中多用来代表一个游戏对象的旋转角度，在口袋方舟中游戏对象的旋转可以使用欧拉角来表示。所以旋转类型也是一个拥有三个参数的类型，这三个参数分别代表着每个轴的欧拉角值。

```typescript
// 创建一个名为 rotation 的旋转量
let rotation: Rotation = new Rotation(0, 0, 0);
```

更多关于 Rotation 的内容可以参阅产品手册：[Rotation | API (ark.online)](https://api-docs.ark.online/classes/mw.Rotation.html)

**变换类型 (Transform)**

变换类型代表着一个游戏对象在三维空间中缩放、旋转、平移。平移用于确定物体的位置，缩放用于确定物体的大小，旋转用于确定物体的朝向。

使用变换类型，可以一次性给游戏对象赋值多个值，更佳简洁。

```typescript
// 创建一个名为 rotation 的旋转量用来表示朝向
let rotation: Rotation = new Rotation(0, 0, 0);
// 创建一个名为 position 的三维向量用来表示平移
let position: Vector = new Vector(100, 100, 100);
// 创建一个名为 scale 的三维向量用来表示缩放
let scale: Vector = new Vector(1, 1, 1);
// 创建一个名为 transform 的变换变量
let transform = new Transform(position, rotation, scale);
```

更多关于 Transform 的内容可以参阅产品手册：[Transform | API (ark.online)](https://api-docs.ark.online/classes/mw.Transform.html)

**线性颜色类型 (LinearColor)**

在游戏开发中想要更改物体颜色时，就要用到颜色类型了。在游戏美术中，通常将红、黄、蓝定义为原色，所有的颜色都可以使用这三种元色按不同比例组合而成。

在口袋方舟中，我们颜色类型有四个参数前三个分别代表红色、绿色、蓝色在该颜色中的占比，第四个参数代表该颜色的透明度。

```typescript
// 创建一个名为 purple 的 LinearColor 变量
let purple = new LinearColor(0.5, 0.2, 1, 1);
```

更多关于 LinearColor 的内容可以参阅产品手册：[LinearColor | API (ark.online)](https://api-docs.ark.online/classes/mw.LinearColor.html)

## 4. 函数

在 TypeScript 中，函数是在脚本中多次使用到的编程结构，用于执行特定的任务。函数可以接受参数，并返回特定值。绝大多数编程语言中都有内置的函数（也可以称之为方法），比如编辑器中获取玩家的函数 `Player.getPlayer()`。

创作者们可以根据自己的需求编写一些特定的函数，之后就可以在特定时间点调用该函数实现指定功能逻辑了。

在游戏开发中，我们可以简单的将函数看作是一段特定的动作，比如我们可以将吃东西这件事封装为一个函数 `eat` ，之后通过给函数传入不同的参数实现吃不同的东西，比如传入苹果、肉、鸡蛋...

### 4.1 创建函数

其实在脚本默认模板中就已经看到了函数的身影，也就是脚本中的生命周期函数 `onStart`、`onUpdate`、`onDestroy`这三个。

要创建自定义的函数可以参考它们的结构。

下列代码中演示了创建一个 ` Eat ` 函数。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { }

    // 吃东西函数 //[!code focus] //[!code ++]
    private Eat(): void { //[!code focus] //[!code ++]
        //[!code focus] //[!code ++]
    } //[!code focus] //[!code ++]

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

如果想在执行函数时给它传递一些变量，可以在声明函数时声明**形参**，之后在调用函数时就可以将指定变量传入进去了。

下列代码实现了在 Eat 函数添加一个类型为字符串的形参，代表传入的食物名字，并在执行函数时在日志中输出食物名字。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void { }

    // 吃东西函数 //[!code focus] //[!code ++]
    private Eat(food: string): void { //[!code focus] //[!code ++]
        // 使用日志输出函数输出食物名字 //[!code focus] //[!code ++]
        console.info(food); //[!code focus] //[!code ++]
    } //[!code focus] //[!code ++]

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

### 4.2 使用函数

使用指定函数十分简单，只需要在合适的位置调用它即可（要注意作用域哦~）。下列代码演示了如何调用 Eat 函数，并传入食物名字：“苹果”。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */ 
    protected onStart(): void { //[!code focus] //[!code ++]
 //[!code focus] //[!code ++]
        // 因为函数也是类的成员，所以需要用 this 来获取 //[!code focus] //[!code ++]
        // 调用 Eat 函数，传入食物名字 苹果 //[!code focus] //[!code ++]
        this.Eat("苹果"); //[!code focus] //[!code ++]
 //[!code focus] //[!code ++]
    } //[!code focus] //[!code ++]

    private Eat(food: string): void { //[!code focus] //[!code ++]
        // 使用日志输出函数输出食物名字 //[!code focus] //[!code ++]
        console.info(food); //[!code focus] //[!code ++]
    } //[!code focus] //[!code ++]

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void { }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void { }
}
```

## 5. 操作符

在 TypeScript 中，操作符是一种特殊的关键字或符号，用于执行特定的数学或逻辑运算。TypeScript 支持多种操作符，包括算术操作符、比较操作符、逻辑操作符、位操作符、赋值操作符和其他一些特殊操作符。

### 5.1 算术操作符

用于执行基本的数学运算，如加（+）、减（-）、乘（*）、除（/）和取模（%）。创作者可以使用这些算数操作符对变量进行基础的数学运算。

下列代码中展示了使用加法运算符，将两个变量相加，并将计算所得值赋值给变量 c ，其它的运算符与加法用法类似创作者们可以动手试试！

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 数字类型变量 x 
        let x: number = 1;
        // 数字类型变量 y
        let y: number = 1;
        // 将 x 与 y 相加, 然后将所得到的值赋值给 变量 c ,最终 C 的值是 2
        let c: number = x + y;
        // 输出  c , 最终输出为 2
        console.info(c);
    }
}
```

要注意的是，字符串类型的变量可以使用 “+” 来将两个字符串拼接成一个：

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 字符串 a 
        let a: string = "口袋方舟";
        // 字符串 b
        let b: string = "启动!";
        // 字符串 c , 由 a 和 b 拼接而成，这里它等于 "口袋方舟启动!"
        let c: string = a + b;
        // 输出 字符串 c , 最终输出为 "口袋方舟启动!"
        console.info(c);
    }
}
```

### 5.2 比较操作符

用于比较两个值的大小关系，如等于（==）、不等于（!=）、大于（>）、小于（<）、大于等于（>=）和小于等于（<=），在 TypeScript 中的比较运算符一定会返回布尔类型的值用来表示判断结果。

下列代码中展示了在编辑器中比较两个数字类型变量的大小。比较操作符常与 if 函数一起使用，在下一小节流程控制中将会详细介绍。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        let x: number = 1;
        let y: number = 2;
        // 输出 false 
        console.info(x > y);
        // 输出 true
        console.info(x < y);
    }
}
```

### 5.3 逻辑操作符

用于组合布尔值，如逻辑与（ && ）、逻辑或（ || ）和逻辑非（ ! )。刚刚我们学习了比较操作符，那么多个逻辑要一起判断该怎么办呢？这时就该逻辑操作符上场了。逻辑操作符多与比较操作符一同使用，可以将多个比较操作连接在一起。

下列代码实现了判断变量 x 是否大于 10并且小于 20 的逻辑：

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 声明一个变量 x 并赋值为 15
        let x: number = 15;
        // 判断 x 是否大于 10 并且小于 20 然后输出结果, 最终结果为 true
        console.info(x > 10 && x < 20); 
    }
}
```

## 6. 流程控制

本文的最后，我们来一起学习流程控制，学完流程控制之后配合之前学到的知识，创作者们就可以实现大部分游戏逻辑了！

流程控制是编程语言中用于控制程序执行流程的关键字或语句。它们用于根据条件、循环或跳转等逻辑来控制函数的执行顺序。

### 6.1 条件语句 - if

条件语句简单来讲就是根据给定的条件来决定执行哪一段代码。比如在游戏中玩家需要开门，系统需要判断玩家是否拥有钥匙。如果有钥匙就执行打开门的函数，如果没有钥匙就执行提示函数，告诉玩家需要先有钥匙才能开门。

在 TypeScript 中主要用到的条件语句就是 **if** ，它代表只有当某些条件为 true 时才运行某一段代码，它常与 **else** 连用，写在 else 代码块中的会在不满足条件时调用，下图是 if 与 else 连用时的流程图。要注意的是 if 并非必须与 else 一起用，在处理简单逻辑时可以只用 if 。

![799b937e-55e1-47e8-8739-6b8b9fe91c6a](https://arkimg.ark.online/799b937e-55e1-47e8-8739-6b8b9fe91c6a.webp)

下列代码中，展示了在脚本中判断变量 x 是否小于等于 20，如果是就输出“变量小于等于 20”，如果不是就输出“变量大于 20”到日志中。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 数字类型变量 x 
        let x: number = 15;
        // 使用分支语句
        if (x <= 20) {
            console.info("变量小于等于 20");
        } else {
            console.info("变量大于 20");
        }
    }
}
```

### 6.2 循环语句 - for / while

循环语句可以用于重复执行某一段代码，直到满足某个条件为止。在 TypeScript 中主要用到的循环语句有两个，**for** 和 **while**，它们两者功能基本相同，在执行逻辑上略有不同，for 循环可以在每次循环结束后额外执行一次指定的语句，接下来将会详细介绍这两种不同的循环语句：

- for 循环逻辑流程图：

![cfff6b44-d8a4-487c-a77f-ac2ee3694c9d](https://arkimg.ark.online/cfff6b44-d8a4-487c-a77f-ac2ee3694c9d.webp)

下列代码中演示了在编辑器中，将数字数组类型变量 x 的前三个元素输出到日志中:

1. for 循环语句首先使用 let 声明了一个数字类型的变量 index，这个变量在 for 中我们称之为**初始值(initialization)**。
2. 接下来编写了一段逻辑运算，判断 index 是否小于 3， 如果小于 3 的话就会执行 for 循环下面的代码块中的代码。这段逻辑在 for 循环中称之为**条件(condition)**。
3. 最后编写了一段数值运算，每次执行后都会给 index 变量的值加上 1。 这个运算操作在 for 循环中称之为**自增(increment)**。

在编辑器中运行后，最终输出三行日志分别为： 1，2，3。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 数字数组类型变量 x 
        let x: number[] = [1, 2, 3, 4];
        // 定义一个变量 index 并赋值为 0
        // 判断当 index 小于 3 就执行下列代码块中代码
        // 每次执行结束后， 就给 index 变量加上 1
        for (let index: number = 0; index < 3; index++) {
            // 声明变量赋值为数组当前下标元素
            let y: number = x[index];
            // 将当前元素输出
            console.info(y); 
        } 
    }
}
```

- while 循环逻辑流程图如下，while 与 for 最大的区别是当它的条件为 true 时会一直执行下去。更合适与基于某个条件进行循环的场景， for 循环更适合于有预先设计好循环次数的场景，当然这不是强制要求创作者们可以按自己的开发习惯选择合适的语句。

![e7a19ebd-f4ab-4b55-9db2-6a1e0294d23d](https://arkimg.ark.online/e7a19ebd-f4ab-4b55-9db2-6a1e0294d23d.webp)

下列代码中演示了在编辑器中循环判断一个数字变量 x 是否为 100，如果 x 是 100 就一直循环，接下来使用 `setTimeout`函数在三秒钟之后将 x 赋值为 0，这时循环将会停止。

```typescript
@Component
export default class LearnTS extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 数字类型变量 x 
        let x: number = 100;
        // 定义 while 循环，如果 x 等于 100 就一直执行输出日志
        while (x == 100) {
            console.info("x 为 100 !");
        }
        // 三秒之后将 x 赋值为 0
        setTimeout(() => {
            x = 0;
        }, 3000);
    }
}
```

::: danger 关于循环的错误用法

上述代码在程序运行后会一直执行循环体内的代码，直到三秒之后变量 x 被赋值为 0 才会停止执行循环。如果删除掉 setTimeout 函数，这个循环将会永远执行下去直到程序被关闭。

这种无法自主停下来的循环，在编程领域中称之为“死循环”。在编写循环代码时我们要格外注意死循环的产生(除非是故意的)，因为死循环可能会导致游戏逻辑被阻塞无法正常运行。

:::

## 7. 扩展学习

TypeScript 是一种流行的编程语言，学习资料非常丰富。下面是一些质量比较高的资料供大家参考学习。

### 7.1. 文档学习方式

如果有编程经验，可以根据下列文档快速入门 TypeScript 语言，推荐最少学习章节：

* [基础语法](https://www.runoob.com/typescript/ts-basic-syntax.html)
* [基础类型](https://www.runoob.com/typescript/ts-type.html)
* [联合类型](https://www.runoob.com/typescript/ts-union.html)
* [数组 (Array)](https://www.runoob.com/typescript/ts-array.html)
* [键值对 (Map)](https://www.runoob.com/typescript/ts-map.html)
* [函数](https://www.runoob.com/typescript/ts-function.html)
* [异步函数](https://www.runoob.com/w3cnote/es6-async.html)
* [类](https://www.runoob.com/typescript/ts-class.html)
* [泛型](https://ts.xcatliu.com/advanced/generics.html)

如果没有编程经验，那么就需要从 0 开始学习 TS 语言，可以去更多的网站学习 TypeScript 的更多细节，下文提供了多个完整的文档教程，**推荐先看第一个教程**，在第一个教程中遇到看不懂或者不太理解的地方时，再翻阅其他教程来加强理解：

* 推荐阅读：[TypeScript 新手教程](https://www.runoob.com/typescript/ts-tutorial.html)

* [TypeScript 入门教程](https://ts.xcatliu.com/)

* [TypeScript 官方教程](https://www.tslang.cn/docs/home.html)

* [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)

### 7.2. 视频学习方式

如果不习惯文档教程的学习形式，也可以通过看视频教程的方式来学习。下文列举了适用于有编程经验的创作者学习的教学视频，总时长约为 2 小时。

* [类型声明](https://www.bilibili.com/video/BV1wY411D79Z/?p=3)
* [基础数据类型](https://www.bilibili.com/video/BV1wY411D79Z?p=4)
* [联合类型](https://www.bilibili.com/video/BV1wY411D79Z?p=9)
* [数组和对象](https://www.bilibili.com/video/BV1wY411D79Z?p=6)
* [键值对 (Map)](https://www.bilibili.com/video/BV1gd4y147yk?p=14)
* [函数](https://www.bilibili.com/video/BV1wY411D79Z?p=13)
* [异步函数](https://www.bilibili.com/video/BV1WP4y187Tu)
* [类 - 属性和函数](https://www.bilibili.com/video/BV1wY411D79Z?p=22)
* [类 - 继承](https://www.bilibili.com/video/BV1wY411D79Z?p=23)
* [泛型](https://www.bilibili.com/video/BV1wY411D79Z?p=32)

若没有编程经验，也可以从第一节开始看：

* [TypeScript 全套教程](https://www.bilibili.com/video/BV1wY411D79Z?p=1)