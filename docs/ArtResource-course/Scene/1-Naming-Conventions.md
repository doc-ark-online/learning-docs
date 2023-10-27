# 命名规范

### 静态模型资产命名规范视频

<video controls src="https://arkimg.ark.online/02%E5%9C%BA%E6%99%AF%E7%AF%87%EF%BC%9A%E9%9D%99%E6%80%81%E6%A8%A1%E5%9E%8B%E8%B5%84%E4%BA%A7%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83.mp4" />



# 资产命名

- **首字母大写，不能有空格，不能有双下划线，不能有中文。**

**资源前缀：**

| 美术命名前缀 | 全名             | 模块分类     |
| ------------ | ---------------- | ------------ |
| SM           | StaticMesh       | 静态网格物体 |
| T            | Texture          | 贴图         |
| MI           | MaterialInstance | 材质实例     |

**模型命名：**

- **SM**_ [风格](./artistic-style) _[分类](./Classification) _[开发者 id](./DeveloperID) _自定义命名 _资源编号

- **贴图命名 ：**
  - **T**_ 风格_ 分类_ 开发者 id_ 自定义命名_ 资源编号_**D**(颜色贴图)
  - **T**_ 风格_ 分类_ 开发者 id_ 自定义命名_ 资源编号_**N**(法线贴图)
  - **T**_ 风格_ 分类_ 开发者 id_ 自定义命名_ 资源编号_ **MRAE**(混合贴图)

**材质命名：**

- **MI**_ 风格_ 分类_ 开发者 id_ 自定义命名_资源编号

- **自定义命名：任意描述（不超过10个字符）**
- **场景资源编号：任意六位内字母或数字组合：**

AB0001 ,AAAB02 .....

## 示意

比如一个宠物店里面的沙发：

模型命名：

- SM_Cartoon_Sofa_100000001_CWD_AA001

贴图命名：

- T_Cartoon_Sofa_100000001_CWD_AA001_D
- T_Cartoon_Sofa_100000001_CWD_AA001_N
- T_Cartoon_Sofa_100000001_CWD_AA001_MRAE

材质球命名：

- MI_Cartoon_Sofa_100000001_CWD_AA001

- 支持多维质材质，如果有一个模型多个材质 id，命名在资源编号后面_a  _b  _c  .....，例如：
  - MI_Cartoon_Sofa_100000001_CWD_AA001_a
  
    T_Cartoon_Sofa_100000001_CWD_AA001_a_D
  
  - MI_Cartoon_Sofa_100000001_CWD_AA001_b
  
    T_Cartoon_Sofa_100000001_CWD_AA001_b_D 

(建议不超过3个材质 id)

**注意：资源编号为自己上传模型命名，上传的时候请避免有重复，重复命名将覆盖自己已上传资源。**