# 快速布局

::: tip 阅读本文大概需要 5 分钟。

UI 编辑器的布局非常简单，但是要做到 UI 控件的精细布局就比较麻烦了，比如需要将一个按钮刚好放到视图的左上角或屏幕中间，那么就需要计算坐标了。为了解决这个问题，快速布局提供了一系列功能帮助我们快速的将 UI 放到需要的位置上，下面我们就来一起看一下吧！

:::

## 1.多 UI 自动分布

当编辑器中包含多个 UI 控件，有时候我们需要将这些 UI 控件进行水平或垂直方向上进行等距分布，这时候我们只需要多选需要布局的控件后，单击水平或垂直布局即可，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnSzb1mfXX68f5l7cpHVg1Wc.png)

这里我们简单尝试一下，在 UI 编辑器中拖拽 3 个按钮并随意摆放，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn5ga4gFKye3muQxkC7FTTCb.png)

首先，我们按下键盘上的 shift 键然后点击 3 个按钮将其多选，接下来，我们单击上图中“分布”的第一个按钮，也就是水平布局按钮，布局后效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhgZunyVbh1wmtZpUy1JlXc.png)

可以看到，3 个按钮在水平布局上的间距已经一致了，接下来单击第二个垂直布局按钮，布局后效果如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcneopT6JqhtclcAFUVKbdOvf.png)

可以看到，3 个按钮无论在水平方向还是垂直方向上，都保持相同的间距了。

## 2.多 UI 快速对齐

除了上面小节的等距分布外，更多情况下，我们需要将多个 UI 进行对齐操作，编辑器为我们提供对齐、右对齐、上对齐、下对齐、水平居中对齐、垂直居中对齐操作，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnEUCPrPcN1DmtJVZQaVNRof.png)

将上一小节的三个按钮大小进行修改，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnPVaTdpJOSh6mq1Zae2FDjc.png)

接下来我们依然使用这 3 个按钮分别看一下这六种情况的对齐结果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnv69AaMXV2VHP6hMmEYfOVh.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntpRzZsh4pU5tJmzxSS7NQh.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnwEOIYM7cs6Yv8toNYps2Bd.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnC0IUv4Ox1yrlnZqS2bFboe.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnMwjaT2xfDnVvC25VAn4d9e.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnsVa7ep3QjPwdPoV1VZCSUc.png)

## 3.UI 相对于父容器的对齐

- 更多细节参考：[UI 编辑器设计功能](https://docs.ark.online/UI/UIDesigner.html)

上面两个小节我们是将多个同级别的 UI 控件进行布局，接下来我们说一下如何将一个控件相对于父容器进行快速对齐操作，首先我们只保留一个按钮，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnXXi9W7Oj4gLXNzf9BNOjq4.png)

编辑器提供了一系列居置功能，分别代表当前控件相对于父容器进行左对齐、右对齐、上对齐、下对齐、水平居中对齐、垂直居中对齐的操作，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnTqsdSn2MW8Zd0WgOe9aEIh.png)

下面我们选中这个按钮，分别演示一下不同对齐的显示效果，如图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnUV3jRUixFw94N3ph3W3y9e.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnvllzWS4oFjNKxHFcarsZod.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn2Ho0AoSrq0iONXo3fSVZZW.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnBU6XSPCBLTzENxDbExYCQc.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnEffU10igbvl7Tdr0pcvP2f.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnqbek3sO8XBHsz8p83nxDJg.png)

::: precautions 需要注意当有多个控件需要对齐时，对齐位置会根据选中的第一个控件作为对齐标准

:::