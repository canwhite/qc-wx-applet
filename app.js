// app.js
/*---------------------------------------
整个小程序只有一个 App 实例，是全部页面共享的
----------------------------------------*/
App({
  

  /*================
  以下记录一下生命周期
  ================*/

  /*
  2.小程序从后台转前台,会触发onShow
  */
  onShow(options){
    console.log("I am onShow ")
    console.log(options);
  },

  /*
  3.当小程序从前台转向后台,后触发onHide
  */
  onHide(){
    console.log("I am onHide");

  },

  /*
  4.当小程序运行脚本错误或者Api调用失败的时候,会到这一步
  */
  onError(){
    console.log("I am Error");
  },


  /*
  1.onLaunch全局只触发一次,可以带参数options
  */
  onLaunch() {

    wx.switchTab({
      url: '/pages/index/index',
     })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              // 在这里通过callback存的值,我们会在首/page/index里边展开
              
              //点语法实际上就完成了创建
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res) //这里完成了存值
              }


            }
          })
        }
      }
    })
  },
  //提供了一个globalData，用于全局数据使用
  globalData: {
    userInfo: null,
    hello:"hello 2333333",
    list:[
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component_HL.png",
        "text": "我的"
      },
      {
        "pagePath": "/pages/news/news",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "消息"
      },
      {
        "pagePath": "/pages/mine/mine",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "我的"
      }
    ]
  }
})
