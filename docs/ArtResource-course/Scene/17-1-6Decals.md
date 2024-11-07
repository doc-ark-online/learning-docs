# 贴花的应用

## 效果展示：

![img](https://arkimg.ark.online/1730183893798-10.png)![img](https://arkimg.ark.online/1730183893798-1.png)

## 案例一：

在材质上做一层贴花来破一下平铺重复感（脏迹，流迹，青苔等。）

![img](https://arkimg.ark.online/1730183893798-2.png)

### 资源准备：

透明贴花贴图：

如果是tga，需要在A通道做遮罩处理，黑透白不透，32位储存。

![img](https://arkimg.ark.online/1730183893798-3.png)

如果是PNG，需要在不透明的地方做镂空处理。

![img](https://arkimg.ark.online/1730183893798-4.png)

关于透明相关详情可以看文档：透明，半透明效果

上传贴图到编辑器（工程）

## 材质设置：

打开需要贴贴花材质，将做好得贴花贴图放入贴花颜色纹理卡槽

![img](https://arkimg.ark.online/1730183893798-5.png)

调整贴花不透明度和贴花颜色：

![img](https://arkimg.ark.online/1730183893798-6.png)

调整贴花的平铺值或者偏移

![img](https://arkimg.ark.online/1730183893798-7.png)

案例二：

拖一个面片到需要位置

![img](https://arkimg.ark.online/1730183893798-8.png)

修改材质颜色，贴上颜色纹理，修改透明模式为镂空蒙版模式：

注意这里需要的贴图也是和上面透明贴图规范一致。

![img](https://arkimg.ark.online/1730183893798-9.png)

更多详情请看透明，半透明文档中的镂空蒙版模式