;
(function (global, doc) {
  'use strict'
  var Wechat = function () {
    wx.error(function (res) {
      console.log(res)
    })
  }
  // 权限验证配置
  var config = function (ret) {
    wx.config({
      debug: ret.debug,
      appId: ret.appId,
      timestamp: ret.timestamp,
      nonceStr: ret.nonceStr,
      signature: ret.signature,
      jsApiList: [ // 授权接口列表
        'getLocation',
        'closeWindow',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage'
      ]
    })
  }
  // 分享接口
  var share = function(share){
    wx.ready(function () {
      wx.onMenuShareTimeline(share);
      wx.onMenuShareAppMessage(share);
      wx.onMenuShareQQ(share);
      wx.onMenuShareWeibo(share);
      wx.onMenuShareQZone(share);
    })
  }
  // 添加监听
  Wechat.prototype.on = function (name, data) {
    if (!name) return
    if (name === 'init') {
      config(data);
    } else if (name === 'share') {
      share(data);
    } else {
      var keys = name.split(',')
      keys.map(function (key) {
        wx.ready(function () {
          // 处理数据接入
          wx[key](data)
        })
      })
    }
    return this
  }
  // 对外只分享一个接口，不过会返回本身，可以有备用
  var Wx = new Wechat()
  // 创建唯一实例
  var entry = function () {
    return Wx.on.apply(Wx, arguments)
  }
  // TODO: UMD
  global.wechat = global.wechat || entry
})(window, document)