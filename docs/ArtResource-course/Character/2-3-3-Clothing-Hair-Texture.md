# 贴图规范

## 贴图尺寸：

- 推荐尺寸：512*512
- 贴图最大不能超过1024*1024
- 可支持透贴效果。
- 单个服装部件，包含皮肤材质，最多支持三个材质球。

## 贴图类型

### 常规贴图

- 颜色贴图（CA），法线贴图（N），混合贴图（MRAE）
- 根据情况绘制所需贴图。
- 法线贴图与混合贴图可以使用共用贴图

|      | 颜色贴图（CA）                                              | 法线贴图（N）                                                | 混合贴图（MRAE）                                             | 效果                                                   |
| ---- | ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------ |
| 作用 | 主要提供基础颜色变化信息<br />贴图A通道存放遮罩或透明度信息 | 法线贴图通过外部软件烘焙得到<br />然后通过后期绘制所需要细节后。<br />输出为DX法线。<br />不需要时，可用公用贴图代替<br /> | 可提供PBR光影效果<br />通道对应参数<br />R---M----金属度<br />G---R----粗糙度<br />B---A----AO图<br />A---E----自发光区域<br />不需要时，可用公用贴图代替 |                                                        |
| 上装 | ![img](https://arkimg.ark.online/1730277993881-24.png)      | ![img](https://arkimg.ark.online/1730277993880-1.png)        | ![img](https://arkimg.ark.online/1730277993880-2.png)        | ![img](https://arkimg.ark.online/1730277993880-3.png)  |
| 鞋子 | ![img](https://arkimg.ark.online/1730277993880-4.png)       | ![img](https://arkimg.ark.online/1730277993880-5.png)        | ![img](https://arkimg.ark.online/1730277993880-6.png)        | ![img](https://arkimg.ark.online/1730277993880-7.png)  |
| 头发 | ![img](https://arkimg.ark.online/1730277993880-8.png)       | ![img](https://arkimg.ark.online/1730277993880-9.png)        | ![img](https://arkimg.ark.online/1730277993880-10.png)       | ![img](https://arkimg.ark.online/1730277993881-11.png) |
| 发饰 | ![img](https://arkimg.ark.online/1730277993881-12.png)      | ![img](https://arkimg.ark.online/1730277993881-13.png)       | ![img](https://arkimg.ark.online/1730277993881-14.png)       | ![img](https://arkimg.ark.online/1730277993881-15.png) |
| 手套 | ![img](https://arkimg.ark.online/1730277993881-16.png)      | ![img](https://arkimg.ark.online/1730277993881-17.png)       | ![img](https://arkimg.ark.online/1730277993881-18.png)       | ![img](https://arkimg.ark.online/1730277993881-19.png) |
| 下装 | ![img](https://arkimg.ark.online/1730277993881-20.png)      | ![img](https://arkimg.ark.online/1730277993881-21.png)       | ![img](https://arkimg.ark.online/1730277993881-22.png)       | ![img](https://arkimg.ark.online/1730277993881-23.png) |

### 丝状发型

#### 头发法线：UV2

- 可以配合丝状法线来增强发丝效果。

![img](https://arkimg.ark.online/1730183245970-2.png)

- 也可全展UV烘焙高模法线

![img](https://arkimg.ark.online/1730183245970-1.png)

## 命名格式参考：

- 贴图文件需要根据贴图类型添加文件后缀
- 颜色贴图_ CA，法线贴图_ N，混合贴图_ MRAE
- 例：T_ 风格_ 部件_ 性别_ 资源编号（参考命名规范）_贴图后缀
  - T_Cartoon_Body_Female_ 资源编号（参考命名规范）_CA
  - T_Cartoon_Body_Female_ 资源编号（参考命名规范）_N
  - T_Cartoon_Body_Female_ 资源编号（参考命名规范）_MRAE

## 完成：

- 模型和贴图制作完成以后，即可进行绑定或动画制作