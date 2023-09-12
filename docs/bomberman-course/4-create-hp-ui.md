# 创建血条 UI

::: tip 阅读本文大概需要 5 分钟

本节将会创建炸弹人小游戏的血条 UI

:::

参考上一小节内容，我们创建一个名为 `HpUI` 的 UI 文件。

![Carnac_mAWat5JNst](https://arkimg.ark.online/Carnac_mAWat5JNst.webp)

打开 UI 后，拖入一个进度条组件，将它修改为合适血条的样式。

![Carnac_WwVGCPAHgg](https://arkimg.ark.online/Carnac_WwVGCPAHgg.webp)

1. 修改名字为 `mHPbar`。
2. 修改大小，将血条设置宽一点。
3. 将对齐方式改为 中心对齐 、靠上对齐。
4. 将图片颜色修改为红色。
5. 将条厚度修改为与血条**属性** --> **大小** 中  **Y** 的数值相同，这样刚好铺满整个组件。
6. 将滑动按钮图片的绘制类型修改为“无”，这样可以隐藏进度条上的小按钮。
7. 将可见性修改为“可见不可交互”，这样血条就不会被用户拖动了。

设置完成后记得点击保存，这样血条 UI 就制作完毕了。

<video controls src="https://arkimg.ark.online/%E8%A1%80%E6%9D%A1%E5%88%9B%E5%BB%BA%E7%89%87%E6%AE%B5.mp4"></video>

