// pages/mqtt/mqtt.js
import mqtt from '../../utils/mqtt.js';

//连接的服务器域名，注意格式！！！

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 连接的域名：注意格式，不要带端口号
    server_domain: "www.jiejie01.top",
    //连接client
    client: null,
    subtopic: 'mqtt_topic',
    pubtopic: 'mqtt_topic',
    connectflag: false,
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
    this.setData({ subtopic: e.detail.value })   //输入并更新subtopic数据
  }, 
  
  pubtopicInput: function (e) {
    this.setData({ pubtopic: e.detail.value })   //输入并更新pubtopic数据
  },


  ButtonTapConnect:function(event) {
    console.log("连接服务器:");
    console.log(this.data.server_domain); //得到输入框数据

    var host_name = 'wxs://' + this.data.server_domain + '/mqtt'; //更新域名连接

    //开始连接
    this.data.client = mqtt.connect(host_name, this.data.connectopt);

    wx.showToast({
      title: '正在连接',
      icon: 'loading',
      duration: 50000,
    })

    this.data.client.on('connect', (err) => {
      console.log('成功连接服务器')
      this.setData({ connectflag: true });    //更新页面
      this.data.client.subscribe(this.data.subtopic, function (err, granted) {  //订阅主题
        if (!err) {
          wx.showToast({
            title: '连接成功',       //弹出提示 连接并订阅成功
            icon: 'success',
            duration: 1000,
          })
        }
      }) 
    })

    //服务器连接异常的回调
    this.data.client.on("offline", function (err) {
      console.log(" 连接失败")
      wx.showToast({
        title: '连接失败',       //弹出提示
        icon: 'none',
        duration: 2000,
      })
      this.data.client.end();   //关闭连接
    })
  },


  ButtonTapClose: function(event) {
    console.log("断开连接:");

    // this.setData({ connectflag: false });
    // this.data.client.end();

    this.data.client.end('close', function(err){}) 
    console.log('断开服务器');
    this.setData({ connectflag: false });
    wx.showToast({
      title: '断开成功'       //弹出提示 连接并订阅成功
    })
  },
  ButtonTapUnsubscribe:function(event){
    if (this.data.client && this.data.client.connected) {
      this.data.client.unsubscribe(this.data.subtopic);
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 2000
      })
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