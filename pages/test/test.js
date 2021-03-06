// pages/test.js
// 要用globalData注意在这里引入App

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello",
    city:"",
    select:1

  },

  //试验一下数据请求,这部分也是Api部分的 ,只不过这部分用的比较频繁,就放在这里试了一下
  testRequest(){
    //在这里进行下数据请求,这部分和uni-app神之相似
    wx.request({
      url:"https://bird.ioliu.cn/weather",
      data:{
        city:"北京"
      },
      header:{
        "token":"xxx"
      },
      success:(res)=>{
        //注意这里需要设置不校验域名
        console.log(res.data.basic.city);
        this.setData({
          city:res.data.basic.city
        })
      },
      fail:(err)=>{console.log(err)}
    })

  },
  handleTap1(){ console.log('I am tap1')},
  handleTap2(){ console.log("I am tap2")},
  handleTap3(){console.log("I am tap3") },
  handleTap4(){console.log("I am tap4")},
  goback(){

    wx.navigateBack();

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("I am onLoad");
    //我们在这里处理一下全局变量,注意global从App实例中拿
    console.log("------global", app.globalData.hello)

    //接收上一级传过来的数据
    console.log('-----options',options);



    this.testRequest();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("I am onReady");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("I am onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("I am onHIde");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("I am onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})