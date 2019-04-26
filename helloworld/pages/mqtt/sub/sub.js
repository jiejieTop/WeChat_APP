// import mymqtt from '../mqtt/mqtt.js';

const initData = 'this is first line\nthis is second line'
import mqtt from '../../../utils/mqtt.js';

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: null
  },

  

  updateSubData:function(){
    console.log("---sub updateSubData--- ");
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

  updateSubdata: function () {
    // this.setData({subData:data});
    // console.log(subData);
    this.setData({ text: app.globalData.subData })

    
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

    if (app.globalData.connectflag == true)
    {
      //服务器下发消息的回调
      app.globalData.client.on('message', (topic, payload) => {
        console.log(" 收到 topic:" + topic + " , payload :" + payload)

        app.globalData.subData = payload.toString();
        console.log(app.globalData.subData);
        
        this.setData({ text: app.globalData.subData });//更新页面
      })

    }else{
      wx.showToast({
        title: '请先订阅主题',
        icon: 'none',
        duration: 2000
      })
   }

    this.setData({ text: app.globalData.subData });
    
    this.setData({ text: app.globalData.subData });
    console.log("subData:" + app.globalData.subData);
    console.log("text:" + this.data.text);

    // this.updateSubdata();
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