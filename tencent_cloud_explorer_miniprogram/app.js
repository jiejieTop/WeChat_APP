//app.js
App({
  globalData: {
    // 腾讯云物联网开发平台explorer中获取 产品ID和设备名称
    productId: "HIMKZYEY1Z", // 产品ID
    deviceName: "SF1", // 设备名称
    // 腾讯云控制台-访问管理-访问密钥-API密钥管理中获取 SecretId, secretKey
    secretId: "AKID17yf8NhCh3FDwRmrjPr7CPM7g0VmEa6k",
    secretKey: "oSxMWR8amjSvZJsDLGxUlncBW1FGLIdl",
  },
  onLaunch: function(options) {
    console.log("onLaunch")
  },
})