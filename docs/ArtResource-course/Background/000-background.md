# 背景商品

背景商品中的模型和特效不能用素材库里面公开的资源！！！特效使用粒子发射器制作。

## 注意事项：

1. 顶部模型不能不能挡住天光，角色不能处在阴影区域。
2. 物体离摄像机足够远，不要有模型遮挡摄像机了。
3. 口袋方舟运行时不同分辨率的场景都需要检查，确保不同的分辨率设备都不会有问题。
4. 不能修改灯光环境后处理等参数，一切氛围通过贴图表现。
5. 预制体坐标必须是在（0,0,0）位置，切制作完成之后旋转一下预制体，检查各个角度是否有问题。
6. 需要检查提供的两个摄像机效果，必须两个都没有问题。
7. 角色站立位置必须是（0,0,0），若必要有凸起模型，凸起位置必须是在（0,0,0）。
8. 场景**最小**范围为800X800X800/cm的box（ [box点击下载](https://arkimg.ark.online/background-box.rar) ）制作的场景建议超出这个范围，但不能小于这个范围。
   <img src="https://arkimg.ark.online/1735545213066-1.png" alt="img" style="zoom:50%;" />
9. 不管任意形状背景，不能小于此基础背景区域。
   <img src="https://arkimg.ark.online/1-1737443937832-3.jpg" alt="1" style="zoom:29%;" />

10. 贴图大小建议为1024（不得超过2048）
11. 背景商品中的模型不能用素材库里面公开的模型或者特效资源（如有特效资源请使用粒子发射器制作）
12. 若静态模型z轴坐标低于0，需关掉投射阴影。

## max文件（2020）：

在max里面打了两个摄像机，与角编工程基本一致，制作时候可以用做参考。

 [背景.3DS_MAX（点击下载）](https://arkimg.ark.online/Beijing.rar) 

![beijnshangpin1](https://arkimg.ark.online/beijnshangpin1.png)

## 口袋方舟编辑器工程：

 [背景制作口袋方舟工程样例.rar](https://arkimg.ark.online/%E8%83%8C%E6%99%AF%E5%88%B6%E4%BD%9C%E5%B7%A5%E7%A8%8B%E6%A0%B7%E4%BE%8B.rar) 

- 安装插件：
  <img src="https://arkimg.ark.online/beijnshangpin2.PNG" alt="beijnshangpin2" style="zoom:25%;" /><img src="https://arkimg.ark.online/beijnshangpin3.PNG" alt="beijnshangpin3" style="zoom:25%;" /><img src="https://arkimg.ark.online/beijnshangpin4.PNG" alt="beijnshangpin4" style="zoom:25%;" />

- 打开插件场景监视器

![beijnshangpin5](https://arkimg.ark.online/beijnshangpin5.PNG)

- 点击场景相机预览背景效果：

<video controls src="https://arkimg.ark.online/20250113135757_rec_.mp4" />

- 摄像机对应效果：

需要检查主视口和拍照两个效果都没有问题。

![beijnshangpin6](https://arkimg.ark.online/beijnshangpin6.png)

![beijnshangpin8](https://arkimg.ark.online/beijnshangpin8.png)

- 调整一下分辨率检查各个设备的效果，确保每个分辨率无穿帮。

![bb5413ac-c9e7-486c-92e8-aee6eae06c18](https://arkimg.ark.online/bb5413ac-c9e7-486c-92e8-aee6eae06c18.png)

- 自己也可以本地拖一个角色编辑看一下效果

![49fc8dc9-b367-4595-9532-3d0aaec3c59a](https://arkimg.ark.online/49fc8dc9-b367-4595-9532-3d0aaec3c59a.png)

## 资源制作与上传：

模型可以替换，用圆柱体，正方体均可，或者用模型挡住四周无穿帮即可。资源制作大小在提供的范围内可适当放大范围，但不能缩小。![image-20250108175318499](https://arkimg.ark.online/image-20250108175318499.png)

本地制作好之后上传到编辑器可查看[静态模型上传](./../1-StaticModel)

## 背景预制体上传：

将一个空锚点拖入场景，确保锚点坐标在（0,0,0）。修改预制体名字，将所有场景物件拖入空锚点中。右键生成预制体，然后上传预制体。

![beijnshangpin9](https://arkimg.ark.online/beijnshangpin9.png)

- 上传之后在官网查看资源审核情况，通过之后提过Assetld即可。

  ![5cbcc59a-74b9-4aa0-be3d-1949903b45b6](https://arkimg.ark.online/5cbcc59a-74b9-4aa0-be3d-1949903b45b6.png)

## icon制作：

同样用到上面timeline里面的场景监视器，截一张图制作256*256的正方形，格式要求png，通过上传ui。

ui上传教程：[UI导入上传](./../2-UI)
<img src="https://arkimg.ark.online/ffb659a1-5f98-44cc-8a62-d751ec140cf7.png" style="zoom:33%;" /><img src="https://arkimg.ark.online/001-1735630094907-23.png" alt="001" style="zoom:50%;" /><img src="https://arkimg.ark.online/002-1735630104443-25.png" alt="002" style="zoom:50%;" /><img src="https://arkimg.ark.online/003.png" alt="003" style="zoom:50%;" />

上传完成之后一样去官网查看Assetld

## 最终提交：

- 场景预制体Assetld
- 场景icon Assetld