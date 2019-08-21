const initData = 'this is first line\nthis is second line'
import mqtt from '../../../utils/mqtt.js';

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rLedOnUrl: "../../../pages/images/r_led.png",
    gLedOnUrl: "../../../pages/images/g_led.png",
    bLedOnUrl: "../../../pages/images/b_led.png",
    ledOffUrl: "../../../pages/images/led.png",
    beepOnUrl: "../../../pages/images/beep_on.png",
    beepOffUrl: "../../../pages/images/beep_off.png",
    r_led_on: false,
    g_led_on: false,
    b_led_on: false,
    beep_on: false,
    dvecontrol:{
      rled:"off",
      gled:"off",
      bled:"off",
      beep:"off"
    }
  },

  check: function () {
    if (app.globalData.connectflag == true) {
      return true
    }
    else {
      wx.showToast({
        title: '请先连接服务器',       //弹出提示
        icon: 'none',
        duration: 1000,
      })
      return false
    }
  },

  control: function(){
    var dvecontrolstr = JSON.stringify(this.data.dvecontrol)
    console.log(dvecontrolstr)
    app.globalData.client.publish('control_topic', dvecontrolstr, { qos: 1, rein: false }, (error) => {
      if (!error) {
        wx.showToast({
          title: '发布成功',       //弹出提示 发布成功
          icon: 'none',
          duration: 1000,
        })
      }
      else {
        wx.showToast({
          title: '发布失败',       //弹出提示 发布成功
          icon: 'none',
          duration: 1000,
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---pub onLoad--- ");
    this.check()
  },

  ImageTapRLedOn: function (event){
    if(this.check() == true){
      this.data.dvecontrol.rled = "on"
      this.control()
      this.setData({
        r_led_on: true
      })
    }
  },

  ImageTapRLedOff: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.rled = "off"
      this.control()
      this.setData({
        r_led_on: false
      })
    }
  },

  ImageTapGLedOn: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.gled = "on"
      this.control()
      this.setData({
        g_led_on: true
      })
    }
  },

  ImageTapGLedOff: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.gled = "off"
      this.control()
      this.setData({
        g_led_on: false
      })
    }
  },

  ImageTapBLedOn: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.bled = "on"
      this.control()
      this.setData({
        b_led_on: true
      })
    }
  },

  ImageTapBLedOff: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.bled = "off"
      this.control()
      this.setData({
        b_led_on: false
      })
    }
  },

  ImageTapBeepOn: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.beep = "on"
      this.control()
      this.setData({
        beep_on: true
      })
    }
  },

  ImageTapBeepOff: function (event) {
    if (this.check() == true) {
      this.data.dvecontrol.beep = "off"
      this.control()
      this.setData({
        beep_on: false
      })
    }
  },

  insert: function (e) {
    if (app.globalData.connectflag == true)
    {
      console.log(app.globalData.client.publish('topic', 'message'))

      wx.showToast({
          title: '发布成功',       //弹出提示 发布成功
          icon: 'none',
          duration: 1000,
        })

    }
    else{
      wx.showToast({
          title: '请先订阅主题',       //弹出提示 发布成功
          icon: 'none',
          duration: 1000,
        })
    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("---pub onReady--- ");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("---pub onShow--- ");
    this.check()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("---pub onHide--- ");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("---pub onUnload--- ");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("---pub onPullDownRefresh--- ");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("---pub onReachBottom--- ");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("---pub onShareAppMessage--- ");
  }
})