# 呼吸灯，自发光

## 效果预览：

![img](https://arkimg.ark.online/1730184259672-8.gif)

## 资源准备：

最核心的是这张MRAE混合贴图，TGA格式。

需要在A通道做自发光遮罩处理，黑不发光白发光。

其它通道分辨放  R:金属度，G：粗糙度，B：AO

![img](https://arkimg.ark.online/1730184259671-1.png)

颜色贴图和法线贴图按照实际情况绘制。

上传贴图到编辑器（工程）

## 材质设置：

编辑材质，将物理模式改成高级模式，将制作好的MRAE纹理贴入正确的卡槽

![img](https://arkimg.ark.online/1730184259671-2.png)

找到呼吸灯，修改呼吸灯颜色，修改自发光强度。

![img](https://arkimg.ark.online/1730184259671-3.gif)

需要注意的是，rgb数字越大，自发光强度越大，且数字不能超过128.

![img](https://arkimg.ark.online/1730184259671-4.png)

呼吸灯频率：0表示没有呼吸效果，1~15，数字越大，呼吸闪烁频率越快，

![img](https://arkimg.ark.online/1730184259671-5.gif)

### 自发光使用颜色贴图发光

如果发光不想是单色，需要处理颜色贴图，然后呼吸灯颜色参数没有颜色倾向，只有强度。

![img](https://arkimg.ark.online/1730184259671-6.png)

![img](https://arkimg.ark.online/1730184259671-7.png)