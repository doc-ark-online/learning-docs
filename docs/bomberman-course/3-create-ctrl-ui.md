# 创建控制 UI

::: tip 阅读本文大概需要 5 分钟

本节将会创建炸弹人小游戏的控制 UI

:::

在工程内容中选择 ① UI  --> ② 创建新 UI --> ③ 将新建 UI 命名为 `CtrlUI`

![UE4_GWGlNhoQVc](https://arkimg.ark.online/UE4_GWGlNhoQVc.webp)

双击 `CtrlUI` ，编辑器会使用自动使用 UI 编辑器打开文件。

从控件中拖入 **①摇杆** 与 **②摄像机滑动区域**，分别放在左边和右边。

![UE4_RmDAPuOmkW](https://arkimg.ark.online/UE4_RmDAPuOmkW.webp)

然后拖入两个按钮，分别改名为 `mAttackBtn` 和 `mJumpBtn` ，代表这是 **①攻击按钮** 和 **②跳跃按钮**。之后将颜色、大小、位置等调节为自己想要的后，点击右上角保存。

:::  tip UI 命名

因为这两个按钮需要触发相关代码逻辑，所以我们要将它们导出到脚本中。UI 编辑器只会导出名字首字母为小写的控件，因此需要将控件名字首字母改为小写。

:::

![UE4_PnfW9vHQky](https://arkimg.ark.online/UE4_PnfW9vHQky.webp)

这两个按钮，我们希望它们在任何分辨率的手机上，都可以在右下角。所以需要将它们的对齐方式设置为左下角对齐：

![UE4_CaGuKwRY2B](https://arkimg.ark.online/UE4_CaGuKwRY2B.webp)

至此，我们的控制 UI 就完成了。