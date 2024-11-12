# 星火编辑器与口袋方舟编辑器常用API对比

::: tip 阅读本文大概需要 30 分钟。

本文将从星火编辑器常用 API 和口袋方舟编辑器 API 常用对比，帮助创作者快速上手使用口袋方舟编辑器进行开发。

:::

下面是 API 对比表：

| 星火编辑器 API                                               | 口袋方舟 API                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 基础控件属性                                                 | [UI 控件的基础属性](https://docs.ark.online/UI/UIWidget-BaseProperties.html) |
| UI 组件                                                      | API: [UIScript](https://api-docs.ark.online/classes/mw.UIScript.html) <br />描述：继承自 UIScript 与继承自 Script 的脚本有所不同，继承自 Script 的脚本挂载在对象管理器中，编辑器会自动帮你调用 [生命周期函数](https://docs.ark.online/UI/LifeCycleandEventDescriptionofUIScripts.html) |
| API: button <br />描述：按钮                                 | API: [Button](https://docs.ark.online/UI/UIComponent-Button.html) <br />描述：按钮<br />API: [MaskButton](https://docs.ark.online/UI/UIComponent-MaskedButton.html) <br />描述：遮罩按钮 |
| API: label <br />描述：显示文本或图片的标签                  | API: [TextBlock](https://docs.ark.online/UI/UIComponent-Text.html) <br />描述：显示文字的控件<br />API: [Image](https://docs.ark.online/UI/UIComponent-Image.html) <br />描述：静态的高保真效果图 |
| API: panel <br />描述：面板                                  | API: [Canvas](https://docs.ark.online/UI/UIComponent-Canvas.html) <br />描述：容器是承载其他 UI 控件的背景板，UI 控件也必须依托于容器才能显示和产生作用 |
| API: progress <br />描述：进度条                             | API: [ProgressBar](https://docs.ark.online/UI/UIComponent-ProgressBar.html) <br />描述：展示百分比的进度效果 |
| API: sprites <br />描述：序列帧动画                          | API: [FlipBook](https://docs.ark.online/UI/UIWidget-Flipbook.html) <br />描述：将 UI 贴图按行列切分并按顺序播放实现的 UI 动画效果 |
| API: add_child <br />描述：添加子控件                        | API: [addChild](https://api-docs.ark.online/classes/mw.Widget.html#addchild) <br />描述：添加子节点 |
| API: remove <br />描述：移除一个控件以及它的所有子控件       | API: [ destroyObject](https://api-docs.ark.online/classes/mw.Widget.html#destroyobject) <br />描述：立刻移除并销毁 不可以在使用 |
| API: virtual_joystick <br />描述：自定义虚拟摇杆             | API: [ ](https://api-docs.ark.online/classes/mw.Widget.html#destroyobject) [VirtualJoystickPanel](https://docs.ark.online/UI/UIWidget-Joystick.html) <br />描述：虚拟摇杆 |
| API: event <br />描述：注册事件                              | API: [Event.addLocalListener](https://docs.ark.online/Scripting/TheEventSystem.html#自定义事件) <br />描述：注册事件（这只是其中之一的本地事件，更加具体的事件系统点[这里](https://docs.ark.online/Scripting/TheEventSystem.html#什么是事件系统)） |
| API: event_notify，event_dispatch <br />描述：触发事件       | API: [Event.](https://docs.ark.online/Scripting/TheEventSystem.html#自定义事件)[dispatchToLocal](https://docs.ark.online/Scripting/TheEventSystem.html#派发事件到本地-dispatchtolocal) <br />描述：触发事件（这只是其中之一的本地事件，更加具体的事件系统点[这里](https://docs.ark.online/Scripting/TheEventSystem.html#什么是事件系统)） |
| API:get_or_create_state_machine <br />描述：客户端单位上的状态机 | API: [Animation.slot](https://docs.ark.online/Role/AnimationAndStane.html#动画播放部位) <br />描述：由角色的哪些部位进行播放动画。目前可播放动画的部位包括：全身、上半身、下半身。实际应用：我们可以通过该动画部位，控制角色或NPC只播放上半身或下半身的动画，达到动画融合的效果。举个例子，上半身可以播放打招呼的动画，下半身可以播放坐着的姿态，实现上下半身播放不同的动画需求。 |
| API: get_xy <br />描述：获取坐标                             | API: [position](https://api-docs.ark.online/classes/mw.Transform.html#position) <br />描述：获取坐标 |
| API: set_highlight <br />描述：获取是否高亮                  | API: [setOutline](https://api-docs.ark.online/classes/mw.Pawn.html#setoutline) <br />描述：添加描边效果 |
| API: is_visible <br />描述：单位是否可见                     | API: [opacity](https://api-docs.ark.online/classes/mw.Character.html#opacity) <br />描述：角色不透明度 |
| API: change_model <br />描述：改变单位的模型                 | API: [Player.localPlayer.character.description.base.wholeBody](https://docs.ark.online/Role/AppearanceAndReplacement.html#基础人形形象换装-多足形象换装) <br />描述：基础人形，多足形象换装 <br />API: [Player.localPlayer.character.description.advance.base](https://docs.ark.online/Role/AppearanceAndReplacement.html#高级人形形象形象换装) <br />描述：高级人形形象形象换装 |
| API: set_xray_enable <br />描述：设置遮挡显示是否可用        | 可在角色面板上开启["被遮挡时开启描边"](https://docs.ark.online/Role/RoleBasicAbility.html#%E8%A7%92%E8%89%B2%E6%8F%8F%E8%BE%B9)，角色被物体遮挡时，会显示角色描边，标记角色位置 |
| API: player<br/>描述：玩家                                   | API: [Player](https://api-docs.ark.online/classes/mw.Player.html) <br />描述：角色管理器 |
| API: local_player<br/>描述：本地玩家                         | API: [Player.localPlayer](https://api-docs.ark.online/classes/mw.Player.html#localplayer) <br />描述：客户端正在运行的玩家 |
| API: controller<br/>描述：获取玩家控制者                     | API: [Player.localPlayer.onPawnChange](https://learning.ark.online/Basic-Learning/player-and-character.html#_5-切换控制权) <br />描述：动态切换玩家当前控制的角色 |
| API: get_hero<br/>描述：获取英雄                             | API: [Player.localPlayer.character](https://api-docs.ark.online/classes/mw.Player.html#character) <br />描述：玩家控制的角色，属于Pawn对象的一种。在玩家切换控制角色时, 客户端上无法立即获取到最新值。其余情况下，只要获取到玩家就可以同时获取到加载完成的控制角色 |
| API: get_hero_name<br/>描述：获取英雄名字                    | API: [Player.localPlayer.character.displayName ](https://docs.ark.online/Role/OverHeadName.html#修改头顶名称) <br />描述：获取头顶名称 |
| API: user_name<br/>描述：用户昵称                            | API: [Player.localPlayer.character.nickname](https://api-docs.ark.online/classes/mw.Player.html#nickname) <br />描述：玩家昵称 |
| API: set_game_scene<br/>描述：切换客户端场景                 | API: [TeleportService.asyncTeleportToScene](https://docs.ark.online/Editor/SceneAndTeleport.html#场景跳转) <br />描述：场景跳转 |
| API: chat<br/>描述：发送聊天                                 | API: [ChatService](https://api-docs.ark.online/classes/mw.ChatService.html) <br />描述：聊天服务 |
| API: use_light_group<br/>描述：切换灯光组                    | API: [Lighting](https://docs.ark.online/WorldObjects/Lighting.html) <br />描述：光照系统<br />API: [PointLight](https://docs.ark.online/GameplayObjects/PointLight.html) <br />描述：点光源能实现从一个点向四周发散的光照效果 |
| API: base.game:event('事件名', function (trigger, ...)<br/>描述：创建触发器 | API: [Trigger.onEnter](https://api-docs.ark.online/classes/mw.Trigger.html#onenter) <br />描述：进入触发器事件<br />API: [Trigger.onLeave](https://api-docs.ark.online/classes/mw.Trigger.html#onleave) <br />描述：离开触发器事件 |
| API: trigger.is_enable<br/>描述：是否启用触发器              | API: [Trigger.enabled](https://api-docs.ark.online/classes/mw.Trigger.html#enabled) <br />描述：触发器是否启用 |
| API: money<br/>描述：货币                                    | API: [PurchaseService.getArkBalance](https://api-docs.ark.online/classes/mw.PurchaseService.html#getarkbalance) <br />描述：获取代币余额 |
| API: pay <br />描述：支付购买                                | API: [PurchaseService](https://docs.ark.online/CreatorPortal/In-App%20Purchase.html)<br />描述：购买代币商品 |
| API: open_and_set_posteffect<br/>描述：屏幕后效              | API: [PostProcess](https://docs.ark.online/WorldObjects/Post-Processing.html) <br />描述：正常渲染管线结束后，对最终渲染图像进行的后期加工，比如滤镜、模糊等效果。以此来模拟物理摄像机和电影特效 |
| API: set_camera <br />描述：设置摄像机的位置,旋转            | API: [Camera.currentCamera.worldTransform.position](https://learning.ark.online/Masters-Road/camera.html#_4-5-切换跟随目标)，[Camera.currentCamera.worldTransform.rotation](https://learning.ark.online/Masters-Road/camera.html#_4-5-切换跟随目标) <br />描述：设置摄像机跟随 |
| API: camera_focus<br/>描述：相机跟随单位                     | API: [Camera.currentCamera.lock](https://learning.ark.online/Masters-Road/camera.html#_4-3-锁定目标) <br />描述：摄像机锁定一个物体并跟随 |
| API: lock_camera<br/>描述：锁定相机                          | API: [Camera.currentCamera.positionMode = CameraPositionMode.PositionFixed](https://learning.ark.online/Masters-Road/camera.html#_4-4-固定摄像机) <br />描述：固定摄像机，即切换摄像机的位置模式属性，从而让摄像机固定在一个位置，不再跟随目标移动 |
| 拉起视频激励广告播放页面，并在得到播放结果时处理             | [广告接入指南](https://docs.ark.online/CreatorPortal/Advertising.html) |
| API: Vector<br/>描述：向量                                   | API: [Vector](https://api-docs.ark.online/classes/mw.Vector.html) <br />描述：三维向量，由分量 (x,y,z) 组成的三维空间中的向量<br />API: [Vector2](https://api-docs.ark.online/classes/mw.Vector2.html) <br />描述：二维向量，由分量 (x,y) 组成的二维空间中的向量<br />API: [Vector4](https://api-docs.ark.online/classes/mw.Vector4.html) <br />描述：由分量 (x,y,z,w) 组成的 4D 齐次向量 |
| API: set_scale_xyz<br/>描述：设置缩放值                      | API: [Scale](https://learning.ark.online/Core-Learning/controlling-objects.html#_3-2-使用代码修改对象变换) <br />描述：变换属性中的旋转决定了游戏对象的缩放 |
| API: set_rotation<br/>描述：设置旋转                         | API: [Rotation](https://learning.ark.online/Core-Learning/controlling-objects.html#_3-2-使用代码修改对象变换) <br />描述：变换属性中的旋转决定了游戏对象的朝向和角度 |
| API: set_position<br/>描述：设置XYZ坐标                      | API:[ Position](https://learning.ark.online/Core-Learning/controlling-objects.html#_3-2-使用代码修改对象变换) <br />描述：变换属性中的位置确定了游戏对象在游戏世界中的空间坐标 |
| API: play()<br/>描述：播放音效/特效                          | API: play() <br />描述：播放[特效](https://api-docs.ark.online/classes/mw.Effect.html#play)，[动画](https://api-docs.ark.online/classes/mw.Animation.html#play)，[音效](https://api-docs.ark.online/classes/mw.Sound.html#play) |
| API: stop()<br/>描述：停止播放音效/特效/以及动画             | API: stop() <br />描述：停止播放[特效](https://api-docs.ark.online/classes/mw.Effect.html#stop)，[动画](https://api-docs.ark.online/classes/mw.Animation.html#stop)，[音效](https://api-docs.ark.online/classes/mw.Sound.html#stop) |
| API: pause()<br/>描述：停止播放音效                          | API: pause() <br />描述：暂停播放[动画](https://api-docs.ark.online/classes/mw.Animation.html#pause)，[音效](https://api-docs.ark.online/classes/mw.Sound.html#pause) |
| API: resume() <br />描述：停止播放音效                       | API: resume() <br />描述：恢复播放[动画](https://api-docs.ark.online/classes/mw.Animation.html#resume) |
| API: i18n<br/>描述：本地化                                   | API: [LanguageUtil](https://api-docs.ark.online/classes/mw.LanguageUtil.html) <br />描述：多语言工具，[游戏本地化](https://docs.ark.online/Localization/GameLanguageLocalization.html) |
| API: math <br />描述：数学                                   | API: [MathUtil](https://api-docs.ark.online/classes/mw.MathUtil.html) <br />描述：数学库工具 |
|                                                              | API: [QueryUtil](https://api-docs.ark.online/classes/mw.QueryUtil.html) <br />描述：射线检测工具 |
| API: Timer<br/>描述：计时器<br/>API: DateTime<br/>描述：日期时间 | API: [TimeUtil](https://api-docs.ark.online/classes/mw.TimeUtil.html) <br />描述：时间工具 |
|                                                              | API: [Tween](https://learning.ark.online/Masters-Road/tween.html#_2-使用步骤) <br />描述：补间(动画)，允许你以平滑的方式更改对象的属性 |
| API: ScreenPos<br/>描述：屏幕坐标<br/>API: screen<br/>描述：屏幕 | API: [ScreenUtil](https://api-docs.ark.online/classes/mw.ScreenUtil.html) <br />描述：屏幕视口工具 |
|                                                              | API: [InputUtil](https://api-docs.ark.online/classes/mw.InputUtil.html) <br />描述：输入事件工具，映射键盘按键<br />API: [KeyEvent](https://api-docs.ark.online/classes/mw.KeyEvent.html) <br />描述：按键事件 |
| API: AISearcher<br/>描述：AI搜索器                           | API: [Navigation](https://api-docs.ark.online/classes/mw.Navigation.html) <br />描述：寻路<br />API: [NavLink](https://api-docs.ark.online/classes/mw.NavLink.html) <br />描述：寻路链接能将导航网格体内没有直接路径的区域链接起来 |
| API: Region<br/>描述：区域<br/>API: RegionCircle<br/>描述：圆形区域<br/>API: RegionRect<br/>描述：矩形区域 | API: [Trigger](https://learning.ark.online/Core-Learning/trigger.html) <br />描述：触发器区域 |
|                                                              | API:[ ](https://api-docs.ark.online/classes/mw.AdvancedVehicle.html)[ MaterialSlot](https://api-docs.ark.online/classes/mw.MaterialSlot.html) <br />描述：Model插槽，执行材质相关操作 |
|                                                              | API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ RoomSettings](https://api-docs.ark.online/classes/mw.RoomSettings.html) <br />描述：房间设置<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ TeleportService](https://api-docs.ark.online/classes/mw.TeleportService.html) <br />描述：多场景和传送服务<br />API:[ RoomInfo](https://api-docs.ark.online/interfaces/mw.RoomInfo.html) <br />描述：玩家所在的房间信息 |
| API: base<br/>描述：基类                                     | API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ Script](https://api-docs.ark.online/classes/mw.Script.html) <br />描述：脚本的基类 |
| API: Target<br/>描述：目标<br/>API: Unit<br/>描述：单位<br/>API: UnitGroup<br/>描述：单位组<br/>API: target_filters<br/>描述：单位过滤器<br/>API: SceneObject<br/>描述：场景对象<br/>API: Actor<br/>描述: 表现 | API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ GameObject](https://api-docs.ark.online/classes/mw.GameObject.html) <br />描述：Model、Pawn、Camera、AdvancedVehicle、BlockingVolume等逻辑对象均继承自GameObject<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ GameObjPool](https://api-docs.ark.online/classes/mwext.GameObjPool.html) <br />描述：用于缓存GameObject的对象池，适用资源库资源、场景对象、预制体的复用缓存<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ ObjPool](https://api-docs.ark.online/classes/mwext.ObjPool.html) <br />描述：通用对象池，可用于各种类型对象的复用 |
| API: DataCache<br/>描述：数据编辑器表<br/>API: ScoreData<br/>描述：云变量数据 | API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ DataStorage](https://docs.ark.online/Scripting/DataStorage.html#使用数据存储的步骤) <br />描述：数据存储<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ ModuleS](https://learning.ark.online/Masters-Road/module.html#_4-注册模块) <br />描述：服务端模块的基类，所有的服务端模块都必须继承这个类，才能被 ModuleService 管理<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ ModuleC](https://learning.ark.online/Masters-Road/module.html#_4-注册模块) <br />描述：客户端模块的基类，所有的客户端模块都必须继承这个类，才能被 ModuleService 管理<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ ModuleService](https://api-docs.ark.online/classes/mwext.ModuleService.html) <br />描述：服务端客户端及数据模块管理API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[Subdata](https://learning.ark.online/Online-Gaming/data-storage.html#_5-【推荐】使用数据中心存储数据) 描述：数据控制类的基类<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ DataCenterS](https://api-docs.ark.online/classes/mwext.DataCenterS.html) <br />描述：服务端数据中心，管理所有玩家的数据。<br />API:[ ](https://api-docs.ark.online/classes/mw.Impulse.html)[ DataCenterC](https://api-docs.ark.online/classes/mwext.DataCenterC.html) <br />描述：客户端数据中心，里面存放着当前玩家的数据 |

