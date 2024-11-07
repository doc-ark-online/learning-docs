# 贴图位移应用

## 案例一不透明水

### 效果预览：

材质guid：289168

![img](https://arkimg.ark.online/1730183117721-12.gif)

### 资源准备：

- 法线贴图*2，

类似：

![img](https://arkimg.ark.online/1730183117720-1.png)![img](https://arkimg.ark.online/1730183117720-2.png)

将准备好的资源上传到编辑器（工程）

### 开始制作：

选中一个基础体，打开高级属性，调整一下颜色。

![img](https://arkimg.ark.online/1730183117720-3.png)

找到高级纹理，在法线纹理和细节法线纹理上贴上自己的纹理贴图。

![img](https://arkimg.ark.online/1730183117721-4.png)

调整纹理流动：

这是调整第一个法线流动

![img](https://arkimg.ark.online/1730183117721-5.png)

这个是调整第二层法线流动

![img](https://arkimg.ark.online/1730183117721-6.png)

现在大体效果就出来，其它效果你可以适当配合着用，比如加粗糙度，边缘光，自发光，或者卡通渲染。

## 案例二灯带流动：

### 材质效果预览：

材质guid：364092
![img](https://arkimg.ark.online/1730183117721-7.gif)

### 资产准备：

- 需要一张用来做流动效果的主颜色图。这张图需要把Alpha通道（简称A通道）加上遮罩细节。
  ![img](https://arkimg.ark.online/1730183117721-8.png)

### 开始制作：

1. 上传贴图到编辑器（工程）
2. 把用来做流动效果的通道图贴在基础属性的【颜色纹理】。

![img](https://arkimg.ark.online/1730183117721-9.png)

1. 打开【呼吸灯】自发光，设置一下颜色倾向，自发光颜色

![img](https://arkimg.ark.online/1730183117721-10.png)

1.  在纹理坐标这一栏找到【基础纹理流动效果】，选择U或者V给一个合适的数值进行贴图位移动画

![img](https://arkimg.ark.online/1730183117721-11.png)

如果不想有阴影，可以在模型界面找到关闭按钮。