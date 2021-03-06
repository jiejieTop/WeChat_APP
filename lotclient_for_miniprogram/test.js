const lotclient = require('./lotclient.js')
const lotmodel = require('./lotmodel.js')

const SECRETID = "xxx";
const SECRETKEY = "xxx";
const PRODUCTID = "xxx";
const DEVICENAME= "dev001";


function test(cb) {
  //testGetDeviceHistory(cb);
  //testGetDeviceData(cb);
  testGetDeviceStatus(cb);
}


function testGetDeviceStatus(cb) {

  // 实例化要请求产品的client对象
  let client = new lotclient(SECRETID,SECRETKEY);


  // 实例化一个请求对象
  let req = new lotmodel.DescribeDeviceDataRequest();
  req.DeviceName = DEVICENAME;
  req.ProductId = PRODUCTID;

  // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
  client.DescribeDevice(req, function (err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
      console.log(err);
      cb("failed:" + err);
      return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
    cb("GetDeviceStatus success");
  });
}

function testGetDeviceData(cb) {

  // 实例化要请求产品的client对象
  let client = new lotclient(SECRETID, SECRETKEY);
  

  // 实例化一个请求对象
  let req = new lotmodel.DescribeDeviceDataRequest();
  req.DeviceName = DEVICENAME;
  req.ProductId = PRODUCTID;

  // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
  client.DescribeDeviceData(req, function (err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
      console.log(err);
      cb("failed:" + err);
      return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
    cb("GetDeviceData success");
  });
}

function testGetDeviceHistory(cb) {
  
  // 实例化要请求产品的client对象
  let client = new lotclient(SECRETID, SECRETKEY);
  

  // 实例化一个请求对象
  let req = new lotmodel.DescribeDeviceDataHistoryRequest();
  req.MinTime = Math.round(Date.parse('2019-08-07T10:00:00.875+08:00'));
  req.MaxTime = Math.round(Date.parse('2019-08-07T18:00:00.875+08:00'));
  req.FieldName = "color";
  req.Limit = 5;
  req.DeviceName = DEVICENAME;
  req.ProductId = PRODUCTID;
  
  //var tt = req.to_json_string();

  // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
  client.DescribeDeviceDataHistory(req, function (err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
      console.log(err);
      cb("failed:"+err);
      return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
    cb("DescribeDeviceDataHistory success:"+response.Results.length);
  });

}

module.exports = {
  test: test
}