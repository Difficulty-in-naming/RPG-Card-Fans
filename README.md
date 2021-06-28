# RPG-Card-Fans
这是一个跨平台的开源卡牌游戏框架,你可以使用Typescript编写Mod

## 如何开发Mod
1.安装Node.js,打开控制台输入npm install -g typescript
2.安装VSCode或者Rider等TypeScript IDE

##如何自定义UI
1.首先你需要安装FairyGUI,
2.新建一个Unity工程,然后把仓库中的UI目录下的Plugins拷贝到新建工程中
3.修改导出配置设置资源导出路径为Mod目录
4.此时你会获得View_XXXXX.ts文件.
5.创建一个你的UI_XXXXX文件继承自View_XXXXX,然后你可以通过UI_XXXXX.CreatePanel()的方式创建出你的UI.