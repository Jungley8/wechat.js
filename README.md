# wechat.js
新版wechat jssdk 的调用精简脚本

> 精简分享和接口调用方法，不过也略去了回掉方法

## 教程
```
var config = {
    debug:false,
    appId:'{$appId}',
    timestamp:{$timestamp},
    nonceStr: "{$noncestr}",
    signature: "{$signature}",
}
var share = {
    title:'标题',
    desc:'描述",// 可用 \r\n 换行
    link: location.href, // 分享链接
    imgUrl: location.protocol + '//' + location.host + '/logo.png', // 分享图片
}
wechat('init', config);// 初始化配置
wechat('share', share);// 分享接口

// 预览图片
var picUrls = [];
for (var i = 1; i < 5; i++) {
    // 图片链接最好不要含有空格等特殊符号，或者 用encodeURI处理
    picUrls.push(host+'/Theme/images/pic_('+i+').jpg');
}
function previewImage() {//调用方法预览图片
    wechat('previewImage', {
        current: picUrls[0], // 当前显示图片的http链接
        urls: picUrls // 需要预览的图片http链接列表
    })
}
```
## 参考
* [https://github.com/Maopy/wechat.js](https://github.com/Maopy/wechat.js "https://github.com/Maopy/wechat.js")
* [https://github.com/sofish/wechat.js](https://github.com/sofish/wechat.js "https://github.com/sofish/wechat.js")