Page({

  /**
   * 页面的初始数据
   */
  data: {
    log_id: null


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("--- logs onLoad---");
    console.log(options);
    console.log(options.id);
    console.log(options.title);
    this.setData({ log_id: options.id});


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("--- logs onReady---");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("--- logs onShow---");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("--- logs onHide---");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("--- logs onUnload---");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("--- logs onPullDownRefresh---");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("--- logs onReachBottom---");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("--- logs onShareAppMessage---");
  }
})