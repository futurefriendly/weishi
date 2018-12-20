/* CSS GUIDE 微视样式结构说明
================================================================
 *
 * PROJECT: 微视;
 * URL:   http://www.weishi.com;
 * AUTHOR:  bennyzhai;
 * UPDATE:  19:30 2013/12/5
 * 
================================================================*/

[Official]		最新官网

1	style.css	打包的主样式		(import 2,3)
2	base.css	基础样式
3	main.css	基础模块样式

4	html目录[inc/Official/style_mod.html]	区域模块和结构（内联）

================================================================

[Official131023]	131023前官网备份

1	style.css	打包的主样式		(import 2,3)
2	base.css	基础样式
3	main.css	模块和结构样式

================================================================

[Sub]				微视个人页、分享页、频道列表页、上传视频页等二级页面

【PC页面(Web)】

0	style.global.css	全局公共样式			(import 6,7)

1	style.share.css		分享页业务样式			(import 8,9)
2	style.custom.css	个人页业务样式			(import 10,11)
3	style.channel.css	频道列表页业务样式		(import 12,13)
4	style.channelfall.css	频道列表页瀑布流模式业务样式	(import 14,15)
5	style.upload.css	上传视频页业务样式		(import 16,17)

6	style.base.css		全局基础样式
7	style.main.css		全局结构样式

8	share.base.css		分享页业务基础样式
9	share.main.css		分享页业务结构样式

10	custom.base.css		个人页业务基础样式
11	custom.main.css		个人页业务结构样式

12	channel.base.css	频道列表页业务基础样式
13	channel.main.css	频道列表页业务结构样式

14	channelfall.base.css	频道列表页瀑布流模式业务基础样式（只有PC页面）
15	channelfall.main.css	频道列表页瀑布流模式业务结构样式（只有PC页面）

16	upload.base.css	上传视频页业务基础样式
17	upload.main.css	上传视频页业务结构样式

18	asyn.css		异步样式（浮层等）

【Mobile页面(h5)】

1	mobile.share.css		分享页打包的主样式	(import 4,6,5,7)
2	mobile.custom.css		个人页打包的主样式	(import 4,8,5,9)
3	mobile.channel.css		频道列表页打包的主样式	(import 4,10,5,11)

4	mobile.base.css			全局基础样式
5	mobile.main.css			全局结构样式

6	mobile.share.base.css		分享页业务基础样式
7	mobile.share.main.css		分享页业务结构样式

8	mobile.custom.base.css		个人页业务基础样式
9	mobile.custom.main.css		个人页业务结构样式

10	mobile.channel.base.css		频道列表页业务基础样式
11	mobile.channel.main.css		频道列表页业务结构样式