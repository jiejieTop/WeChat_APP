### 智能灯小程序DEMO
1. 说明
本示例小程序配合TencentOS_tiny智能灯数据模板示例使用：TencentOS_tiny/examples/tencent_cloud_sdk_data_template
[腾讯云侧接入文档参见: 智能灯接入指引](https://cloud.tencent.com/document/product/1081/34744)

2. tencent_cloud_sdk_data_template 接入腾讯云explorer后，在 app.js 中修改以下字段即可使用
````
  globalData: {
    // 腾讯云物联网开发平台explorer中获取 产品ID和设备名称
    productId: "U2LPAXBT2C", // 产品ID
    deviceName: "royye_light", // 设备名称
    // 腾讯云控制台-访问管理-访问密钥-API密钥管理中获取 SecretId, secretKey
    secretId: "AKIDxZ2LTTi84eaR3OfS8hnfxd4JHzQatFpF",
    secretKey: "UigMrA9rJXUCeoiBQP8dsJuJ6sYzmNjs",
  },
````