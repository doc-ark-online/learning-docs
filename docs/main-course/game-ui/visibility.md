# UI 显示/隐藏

::: tip 阅读本文大概需要 5 分钟。

在 UI 中，常常需要显示或隐藏某个 UI 界面或控件，接下来我们就来快速实现 UI 面板的显示与隐藏。

:::

首先，创建一个 UI 文件，双击打开 UI 文件，在 UI 编辑器中，拖放一个 Button 按钮与一个 Canvas 容器，在容器上可以添加一些其他的子 UI，方便我们识别，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnA2ZrKUwLlZy90l5Gub9Hzb.png)

对象列表结构如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnuQqnnLDTHh2RpkNe93exkc.png)

创建一个 UI 脚本并与当前 UI 文件进行关联，修改脚本内容如下：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnFXT2D5yAfYW2ULA8BeRBqh.gif)

```typescript
export default class MyUI extends UIScript {
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		//通过路径查找 Button_1 按钮
		let button = this.uiWidgetBase.findChildByPath("RootCanvas/Button_1") as Button;
		//通过路径查找 Canvas_1 对象
		let canvas = this.uiWidgetBase.findChildByPath("RootCanvas/Canvas_1") as Canvas;
		//为按钮关联点击事件
		button.onClicked.add(() => {
			if (canvas.visible == true) {
				canvas.visibility = SlateVisibility.Collapsed;
			} else {
				canvas.visibility = SlateVisibility.Visible;
			}
		});
	}
}
```

应用该 UI 后，效果如下：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntXETaEbAFAm5kYSJJPhK2d.gif)