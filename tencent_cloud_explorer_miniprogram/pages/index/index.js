const app = getApp()
const lotmodel = require("../../lotclient_for_miniprogram/lotmodel.js");
import IotexplorerClient from '../../lotclient_for_miniprogram/lotclient.js';

Page({
  data: {
    client: null,
    deviceData: {},

    scaleTextStyle: {
      show: true,
      size: 12,
      color: '#666'
    },
    indicatorTextStyle: {
      show: true,
      size: 14,
      text: '烟雾'
    },
    indicatorValueStyle: {
      show: true,
      size: 24,
      color: '#4575e8'
    },
    indicatorCircleStyle: {
      show: true,
      boderColor: [
        {
          progress: 0,
          value: "#4575e8"
        },
        {
          progress: 1,
          value: "#fff"
        }
      ]
    }

  }, 
  onLoad: function (options) {
    console.log("index onLoad")
    this.setData({
      productId: app.globalData.productId,
      deviceName: app.globalData.deviceName,
    })

    // 实例化要请求产品的client对象
    this.data.client = new IotexplorerClient(app.globalData.secretId, app.globalData.secretKey)
    this.queryDeviceData()
  },
  queryDeviceData()
  { 
    let that = this

    // 实例化一个请求对象
    let req = new lotmodel.DescribeDeviceDataRequest();
    req.DeviceName = app.globalData.deviceName;
    req.ProductId = app.globalData.productId;

    // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
    this.data.client.DescribeDeviceData(req, function (err, response) {
      if (err) {
        console.log("err:", err);
        wx.showToast({
          title: "查询失败",
          icon: 'none',
          duration: 3000
        })
        return;
      }
      wx.showToast({
        title: "查询成功",
        icon: 'none',
        duration: 1000
      })
      
      let deviceData = JSON.parse(response.Data)
      that.setData({
        deviceData: deviceData
      })
      console.log(that.data.deviceData);
    });
  },
  controlDeviceData(e) {
    let that = this
    let data = e.detail.value
    if (data.LED == true) {
      data.LED = 1
    } else {
      data.LED = 0
    }
    if (data.BEEP == true) {
      data.BEEP = 1
    } else {
      data.BEEP = 0
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value, JSON.stringify(data))

    // 实例化一个请求对象
    let req = new lotmodel.ControlDeviceDataRequest();
    req.DeviceName = app.globalData.deviceName;
    req.ProductId = app.globalData.productId;
    req.Data = JSON.stringify(data);

    // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
    this.data.client.ControlDeviceData(req, function (err, response) {
      if (err) {
        console.log(err);
        wx.showToast({
          title: "操作失败",
          icon: 'none',
          duration: 3000
        })
        return;
      }
      console.log(err)
      wx.showToast({
        title: "操作成功",
        icon: 'none',
        duration: 1000
      })
    });
  },
})