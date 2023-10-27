# 高级人形形象 

## 角色绑定视频介绍（上）

<video controls src="https://arkimg.ark.online/04%E5%8A%A8%E7%94%BB%E7%AF%87%EF%BC%9A%E9%AB%98%E7%BA%A7%E4%BA%BA%E5%BD%A2%E5%BD%A2%E8%B1%A1%E7%9A%84%E7%BB%91%E5%AE%9A%E4%BB%8B%E7%BB%8D%EF%BC%88%E4%B8%8A%EF%BC%89.mp4" />

## 角色绑定视频介绍（下）

<video controls src="https://arkimg.ark.online/04%E5%8A%A8%E7%94%BB%E7%AF%87%EF%BC%9A%E9%AB%98%E7%BA%A7%E4%BA%BA%E5%BD%A2%E5%BD%A2%E8%B1%A1%E7%9A%84%E7%BB%91%E5%AE%9A%E4%BB%8B%E7%BB%8D%EF%BC%88%E4%B8%8B%EF%BC%89.mp4" />

## 绑定流程图

![whiteboard_exported_image](https://arkimg.ark.online/whiteboard_exported_image.png)

## 1.确定分类：

**基础服装部件：服装跟随人型骨架骨骼绑定。**

**高级服饰部件：服装单独动态骨骼绑定，需要挂点主体适配。**

|                  | 基础服装部件                                          | 高级服装部件                                          |
| :--------------: | ----------------------------------------------------- | ----------------------------------------------------- |
|       骨架       | 人型骨架                                              | 人型骨架+服装动态骨骼                                 |
|     挂点适配     | 不需要                                                | 需要                                                  |
| 动画效果（裙子） | ![img](https://arkimg.ark.online/1690363014381-4.gif) | ![img](https://arkimg.ark.online/1690363000526-1.gif) |

模型部件需要更好的动态效果的时候可选择高级服装部件流程来绑定。

编辑器服装有：上装，下装，鞋子，手套，头发。

可使用绑定方式有：

|      | 基础服装部件 | 高级服装部件 |
| :--: | ------------ | ------------ |
| 上装 | ✔            | ✔            |
| 下装 | ✔            | ✔            |
| 鞋子 | ✔            | X            |
| 手套 | ✔            | X            |
| 头发 | X            | ✔            |

## 2.根据分类选择骨骼绑定：

[基础动态服装部件](./3-2-1-Basic-Dynamic-Component) 

[高级动态服装部件](./3-2-3-Advanced-Dynamic-Component)