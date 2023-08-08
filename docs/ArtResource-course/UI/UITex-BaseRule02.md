# UI图标去重标准

为了节省UI图标的内存消耗，增加同类资源的可复用性，建议对上传资源进行去重后，再上传。

### 可镜像

左右镜像类图标只需要上传一个

![](https://arkimg.ark.online/1686905791371-1.png)

![1686905791372-9](https://arkimg.ark.online/1686905791372-9.png)

### 可换色

纯色图标需要改为白色，通过编辑器的调色功能来实现复用

![img](https://arkimg.ark.online/1686905791371-2.png)

### 可拆分复用

- 交互图标，动作图标等各个项目通用模块资源：底版和图标拆开，方便其他项目复用。图标用白色方便换色

![img](https://arkimg.ark.online/1686905791371-3.png)

- 同个图标含有不同信息的，可以拆分为主题和可变信息，拆分为多个图标入库实现图标的复用

![img](https://arkimg.ark.online/1686905791371-4.png)

![img](https://arkimg.ark.online/1686905791371-5.png)

![img](https://arkimg.ark.online/1686905791371-6.png)

![img](https://arkimg.ark.online/1686905791372-7.png)

- 当背板或者底纹是可重复的花纹时，需要拆分为四方连续贴图，并且资源尺寸控制在256*256

![img](https://arkimg.ark.online/1686905791372-8.png)