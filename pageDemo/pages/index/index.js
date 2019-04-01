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
    console.log("--- index onLoad---");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("--- index onReady---");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("--- index onShow---");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("--- index onHide---");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("--- index onUnload---");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("--- index onPullDownRefresh---");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("--- index onReachBottom---");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("--- index onShareAppMessage---");
  },


  itemClick: function(){
    console.log("itemClick");
    wx.navigateTo({
      url: '../logs/logs?id=1&title=这是一个标题'
    })
  }

})