// index.js
// 获取应用实例
const app = getApp()

//Page实例
Page({
  //具体页面使用值
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //返回到上一级
  goto(){
    // 	返回的页面数，如果 delta 大于现有页面数，则返回到首页。
    wx.navigateTo({
      url: '/pages/test/test?id=123',
    })
  },


  goSub(){
    //路由往分包跳的时候是root和下边的pages合拼的路径跳转
    wx.navigateTo({
      url: '/subModule/qctest/index',
    })  
  },
  //加一个事件处理
  clickMe(){
    this.setData({
      motto: "hello qc" 
    })
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
   },
  //page的生命周期
  onLoad(options) {
    // console.log("--------",options); //在这里就可以拿到id了

    //判断userInfo是否存在
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      //open-type等于是把获取用户信息的过程给简化了
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    //js只需要管理状态，提醒我们的渲染层需要更新了就可以
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
