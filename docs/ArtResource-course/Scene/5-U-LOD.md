# LOD 设置 

## LOD 介绍视频

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9A%E6%A8%A1%E5%9E%8BLOD%E4%BB%8B%E7%BB%8D.mp4" />



- **在编辑器中，您可在场景中放置一个网格模型，当玩家远离它的时候，可让该网格模型切换为不复杂的网格模型，以便让场景运行得更流畅。**

  ## LOD 三角形百分比
  
  模型面数≤8000三角面的模型
  
  LOD1：50
  
  LOD2：25
  
  模型面数≥8000三角面内的模型
  
  LOD1：35
  
  LOD2：10
  
  ## 3ds Max 制作 lod 步骤： 
  
  1.制作好 lod 并正确命名：
  
    原模型命名后缀 LOD0 一级 LOD 命名后缀 LOD1
  
  二级 LOD 命名后缀 LOD2
  
  LOD 模型制作完毕后后选中所有 LOD 打组，分组名就是导入模型的默认名字。
  
  ![img](https://arkimg.ark.online/1690947563590-7.png)
  
  2.在工具集里面找到 Level Of Detail
  
  ![img](https://arkimg.ark.online/1690947563589-4.png)
  
  3.选中模型 Create New Set,创建新的 LOD 集，做完这一步就可以导出 FBX 准备导入编辑器，编辑器会根据命名识别你是否制作了LOD。如果错误命名编辑器会自动生成LOD。
  
  ![img](https://arkimg.ark.online/1690947563590-5.png)
  