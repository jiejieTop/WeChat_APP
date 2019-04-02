import mymqtt from '../mqtt/mqtt.js';

const initData = 'this is first line\nthis is second line'


var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],

    text: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---sub onLoad--- ");
    this.data.text = app.globalData.subData;
    // text += app.globalData.subData
    // this.setData({ text: app.globalData.subData});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("---sub onReady--- ");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("---sub onShow--- ");
    this.data.text = app.globalData.subData;
    this.setData({ text: app.globalData.subData});
    console.log("subData:" + app.globalData.subData);
    console.log("text:" + this.data.text);

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("---sub onHide--- ");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("---sub onUnload--- ");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("---sub onPullDownRefresh--- ");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("---sub onReachBottom--- ");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("---sub onShareAppMessage--- ");
  }
})