# 创建炸弹预制体

::: tip 阅读本文大概需要 10 分钟

本节将会创建一个炸弹预制体，为后序操作炸弹做准备。

:::

在工程内容中选中 ① 预制体 --> ②新建预制体 --> ③ 命名为 `Bomb`

![UE4_gMzH2lmjzR](https://arkimg.ark.online/UE4_gMzH2lmjzR.webp)

一个会爆炸的炸弹，涉及到的特效、音效，可以在左边“资源库”中查找。这里我选用的资源如下：

- 炸弹特效  assetId ：86375
- 爆炸特效  assetId ：27710
- 爆炸声音  assetId ：122569

资源选好后，先将炸弹拖拽到预制体中，并修改位置为(0,0,0)，这样动态生成预制体时就不会出现模型与预制体有位置偏移。

将炸弹设置好后，再将爆炸特效与音效拖入预制体中，设置好位置。

![UE4_vI3kg2nwMB](https://arkimg.ark.online/UE4_vI3kg2nwMB.webp)

接下来选中音效，在属性面板中将"音效空间化"勾选上，这样在音效播放时候就会有近大远小的效果，让游戏更加真实。

![UE4_yuRPgR9rAs](https://arkimg.ark.online/UE4_yuRPgR9rAs.webp)

设置好后，选中爆炸特效，在属性面板中取消勾选 “启用”，取消勾选“循环”。因为爆炸特效需要使用代码在合适的时候触发，且只会触发一次。

![UE4_tpmJkpoSFu](https://arkimg.ark.online/UE4_tpmJkpoSFu.webp)

至此炸弹预制体就搭建好了，下一节我们将会创建炸弹预制体来控制它。
