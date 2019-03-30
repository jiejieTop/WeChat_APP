// pages/mqtt/mqtt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 连接的域名：注意格式，不要带端口号
    server_domain: "www.jiejie01.top",
    clientid: '12345',
    username: 'jiejie',
    password: 'jiejie',
    subtopic: 'mqtt_test',
    pubtopic: 'mqtt_test',
    connectflag: false

  },

  ButtonTapConnect:function(event) {
    console.log("连接服务器:");
    this.setData({ connectflag: true});
    wx.showToast({
      title: '连接成功'
    })
  },
  ButtonTapClose: function(event) {
    console.log("断开连接:");
    this.setData({ connectflag: false});
    wx.showToast({
      title: '断开成功'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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