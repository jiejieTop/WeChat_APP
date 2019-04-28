const initData = 'this is first line\nthis is second line'
import mqtt from '../../../utils/mqtt.js';

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---pub onLoad--- ");
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