# LOD设置 

## LOD介绍视频

<iframe sandbox="allow-scripts allow-downloads allow-same-origin allow-popups allow-presentation allow-forms" frameborder="0" draggable="false" allowfullscreen="" allow="encrypted-media;" referrerpolicy="" aha-samesite="" class="iframe-loaded" src="https://player.bilibili.com/player.html?aid=357161994&bvid=BV1dX4y1t7Q8&cid=1161376703&page=1&autoplay=0" style="border-radius: 7px; width: 100%; height: 360px;"></iframe>



- **在编辑器中，您可在场景中放置一个网格模型，当玩家远离它的时候，可让该网格模型切换为不复杂的网格模型，以便让场景运行得更流畅。**

  ## LOD三角形百分比
  
  模型面数≤8000三角面的模型
  
  LOD1：50
  
  LOD2：25
  
  模型面数≥8000三角面内的模型
  
  LOD1：35
  
  LOD2：10
  
  ## 3ds Max制作lod步骤： 
  
  1.制作好lod并正确命名：
  
    原模型命名后缀LOD0 一级LOD命名后缀LOD1
  
  二级LOD命名后缀LOD2
  
  LOD模型制作完毕后后选中所有LOD打组，分组名就是导入模型的默认名字。
  
  ![img](https://arkimg.ark.online/1690947563590-7.png)
  
  2.在工具集里面找到Level Of Detail
  
  ![img](https://arkimg.ark.online/1690947563589-4.png)
  
  3.选中模型Create New Set,创建新的LOD集，做完这一步就可以导出FBX准备导入UE。
  
  ![img](https://arkimg.ark.online/1690947563590-5.png)
  
  4.导入UE的时候确保勾选上了Import Mesh LODs，如下图。导入后重新设置LOD、碰撞。
  
  ![img](https://arkimg.ark.online/1690947563590-6.png)