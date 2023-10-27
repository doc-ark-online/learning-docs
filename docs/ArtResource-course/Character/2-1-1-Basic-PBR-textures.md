# 基础 PBR 贴图

- PBR 贴图请使用 SubstancePainter 软件制作。
- 基础 PBR 风格贴图共三张：
  - 颜色贴图（CA）
  - 法线贴图（N）
  - 混合贴图（MRAE）

<video controls src="https://arkimg.ark.online/03%E8%A7%92%E8%89%B2%E7%AF%87%EF%BC%9A%E8%A7%92%E8%89%B2PBR%E9%A3%8E%E6%A0%BC%E8%B4%B4%E5%9B%BE%E5%88%B6%E4%BD%9C.mp4" />

## 颜色贴图（CA）

- 颜色贴图需要绘制颜色通道和 User4通道。
  - RGB 主要提供基础颜色变化信息。
    
    ![img](https://arkimg.ark.online/1688449135846-7.png)
  - User4=颜色贴图 Alpha 通道，提供低画质下光照体积感。
    
    ![img](https://arkimg.ark.online/1688449135840-1.png)
- User4（Alpha）使用所提供的 SP 模板和材质球，放在最上层即可
- 根据实际需要可以微调叠加值

![img](https://arkimg.ark.online/1688987050495-1.png)

- 可在 User4通道中观察效果

![img](https://arkimg.ark.online/1688449135841-4.png)

## 法线贴图（N）

- 法线贴图一般通过外部软件烘焙得到
- 然后通过 SubstancePainter 绘制所需要细节后。
- 输出为 DX 法线。
  
  ![img](https://arkimg.ark.online/1688449135841-5.png)

## 混合贴图（**MRAE**）

- 正常 PBR 流程制作，使用 SubstancePainter 模板输出即可自动合成
- 通道对应参数
  - **R---M----金属度**
  - **G---R----Roughness（去噪，整体）**
  - **B---A----AO 图**
  - **A---E----自发光 G**

![img](https://arkimg.ark.online/1688449135841-6.png)