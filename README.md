# community
一个移动端社区网站demo（开发ing）。主要为了学习`react`。其中使用`react-create-app`构建开发及生成环境（`react-create-app`内置了`webpack`，无需额外配置。目前根据开发进度只配置了部分开发环境）。
- 技术栈使用`react@16.2`，`react-router@4.x` `redux` 
- 使用了蚂蚁金服的UI组件库 `antd` 以及 `antd-mobile`
- 其他技术：使用`Less`处理css，使用`easy-mock`mock数据

## 已经实现的功能
- [x] 登录注册流的实现：包括表单验证，提交，cookies缓存，用户显示
- [x] 路由配置，包括一级导航跳转，列表查看详情页跳转，跳转动效实现
- [x] 列表加载

## 接下来要实现的功能有
- [ ] 列表上拉加载更多功能
- [ ] 各个页面的UI实现
- [ ] 解决bug
- [ ] 其他遇到了在想...

## 发现的bug
    当跳转到登录界面时，无法正常返回到之前的界面，会出现点击多次回退按钮无效的情况。
    debug发现原因是由于在PublicRouter中，login组件的route和app的route平级，当切换组件时，app组件会重新执行Mount的生命周期。
    而我为了能够使history全局通信，使用了发布订阅的模式，将注册监听事件的动作放在了app的mount周期内，而没有在组件销毁时同步销毁该事件，
    导致同样的事件会随着app重载的次数而增加。尝试在unMount周期销毁时注销以监听的事件，但是如果下一次app组件mount速度快于上一次app组件unmount的速度，会导致无法监听。
    所以需要另外想办法解决。
