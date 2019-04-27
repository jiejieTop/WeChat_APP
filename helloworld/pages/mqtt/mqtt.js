// pages/mqtt/mqtt.js

import mqtt from '../../utils/mqtt.js';

var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 连接的域名：注意格式，不要带端口号
    server_domain: "www.jiejie01.top",
    input: [],
    //连接client
    // client: null,
    // subtopic: 'mqtt_topic',
    // pubtopic: 'mqtt_topic',
    // connectflag: false,
    //连接配置
    connectopt: {
      protocolVersion: 4,         //MQTT连接协议版本 3 为3.1 / 4 为3.1.1
      clientId: 'wx',             //用户id，可随意起
      clean: false,               //不清除
      username: 'jiejie',         //用户名
      password: '12345',          //密码
      reconnectPeriod: 1000,      //1000毫秒，两次重新连接之间的间隔
      connectTimeout: 30 * 1000,  //1000毫秒，两次重新连接之间的间隔
      resubscribe: true           //如果连接断开并重新连接，则会再次自动订阅已订阅的主题（默认true）
    }
  },

  insert: function (e) {
    var cb = this.data.input;
    console.log(e)
    cb.push(this.data.input.length);
    this.setData({
      input: cb
    });
  },

  domainInput: function(e){
    // console.log(e);
    this.setData({ server_domain: e.detail.value })   //输入并更新域名数据
    // console.log(this.data.server_domain);
  },

  usernameInput: function(e){
    this.data.connectopt.username = e.detail.value;      //输入并更新数据
    // console.log(name);
    console.log(this.data.connectopt.username);
  },

  passwordInput: function(e){
    this.data.connectopt.password = e.detail.value;      //输入并更新数据
    // console.log(name);
    console.log(this.data.connectopt.password);
  },


  subtopicInput: function (e) {
    app.globalData.subtopic = e.detail.value
    // this.setData({ subtopic: e.detail.value })   //输入并更新subtopic数据
  }, 
  
  pubtopicInput: function (e) {
    app.globalData.pubtopic = e.detail.value
    // this.setData({ pubtopic: e.detail.value })   //输入并更新pubtopic数据
  },

  subtopicInput1: function(e) {
    app.globalData.subtopic1 = e.detail.value
    console.log(app.globalData.subtopic1);
    // this.setData({ subtopic: e.detail.value })   //输入并更新subtopic数据
  }, 


  ButtonTapConnect:function(event) {
    console.log("连接服务器:");
    console.log(this.data.server_domain); //得到输入框数据

    var host_name = 'wxs://' + this.data.server_domain + '/mqtt'; //更新域名连接

    //开始连接
    app.globalData.client = mqtt.connect(host_name, this.data.connectopt);

    wx.showToast({
      title: '正在连接',
      icon: 'loading',
      duration: 50000,
    })

    app.globalData.client.on('connect', (err) => {
      console.log('成功连接服务器')
      this.setData({ connectflag: true });    //更新页面
      app.globalData.client.subscribe(app.globalData.subtopic, function (err, granted) {  //订阅主题
        if (!err) {
          wx.showToast({
            title: '连接成功',       //弹出提示 连接并订阅成功
            icon: 'success',
            duration: 1000,
          })
          app.globalData.connectflag = true;
        }
      }) 
    })

    //服务器连接异常的回调
    app.globalData.client.on("offline", function (err) {
      console.log(" 连接失败")
      wx.showToast({
        title: '连接失败',       //弹出提示
        icon: 'none',
        duration: 2000,
      })
      app.globalData.client.end();   //关闭连接
    })

    // //服务器下发消息的回调
    // app.globalData.client.on("message", function (topic, payload) {
    //   console.log(" 收到 topic:" + topic + " , payload :" + payload)
    //   // wx.showModal({
    //   //   content: " 收到topic:[" + topic + "], payload :[" + payload + "]",
    //   //   showCancel: false,
    //   // });
    //   app.globalData.subData = payload.toString();

    //   console.log(app.globalData.subData);

    //   // app.updateSubdata1();

    //   // this.setData({ sub.data.text:0 });
    //   // this.setData(: payload);
    // })


  },
  



  ButtonTapClose: function(event) {
    console.log("断开连接:");

    // this.setData({ connectflag: false });
    // this.data.client.end();

    app.globalData.client.end('close', function(err){}) 
    console.log('断开服务器');
    this.setData({ connectflag: false });
    wx.showToast({
      title: '断开成功'       //弹出提示 连接并订阅成功
    })
    app.globalData.connectflag = false;
  },
  ButtonTapUnsubscribe:function(event){
    if (app.globalData.client && app.globalData.client.connected && (app.globalData.connectflag == true)) {
      app.globalData.client.unsubscribe(app.globalData.subtopic);
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 2000
      })
      app.globalData.connectflag = false;
    }else {
      wx.showToast({
        title: '请先连接服务器',
        icon: 'none',
        duration: 2000
      })
    }
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