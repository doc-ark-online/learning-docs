# 输入框

::: tip 阅读本文大概需要 5 分钟。

在游戏过程中，很多玩家的输入信息需要动态传递到游戏中，例如输入玩家昵称、输入聊天内容等，这时候就需要用上输入框了，输入框的使用也非常简单，接下来我们一起来看一下输入框的使用。

:::

## 1. 创建输入框

在游戏与应用开发中，输入框也是必不可少的一项资源，用户常常通过输入框来提交自己的一些输入信息，例如账号、密码、昵称、聊天等等。接下来，我们就来创建一个输入框，双击我们创建的“MyUI”文件打开 UI 编辑器，从“组件”窗口中选中“输入框”并拖拽到画布中来，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnTryZYHnpdoZsFSnvs9pc5g.png)

接下来我们一起看一下输入框有哪些属性把！输入框的“对象属性”面板如下图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnCmJU6zP22HygLGmGKbZ5Ih.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnA1dRGha6B2zUfT9yLkuNlh.png)

## 2. 输入框属性

接下来我们讲解一下常用的输入框属性。

“输入限制”可以限制当前输入框最大支持文本长度，默认为 10，我们将其修改为 3，可以看到输入框中的默认文本只显示了 3 个，效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnAzG3EJRTxJx29Lww55Bvah.png)

输入框还可以修改文字颜色与背景颜色、阴影等多种显示样式属性，修改示例如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn7FXb2kvCzXDmXfF6PVXh1f.png)

除了颜色以外，我们还可以修改字体的“字号”、“字间距”、“对齐方式”属性，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnp3JfLLTzUPjVfIKt6tloof.gif)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn9m4juAy4xgHwYKZ0aJNxwe.png)

“默认文本”设定了当输入框中没有输入任何文本时的显示内容，“文本”为输入框中用户输入的内容，示例设置与效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnVupcdzIlXOTpH0X6TfFo8e.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnJnYsKNpQhuUelaX6VLcIrd.gif)

除上述常用设置外，“内容限制”属性可以限制用户输入的内容为整数、小数或星号密码，在需要限制输入字符类型时也是很好用的。