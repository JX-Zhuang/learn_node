/**
 * Created by Jesse on 17/5/8.
 */
var fs = require('fs');
var rs = fs.createReadStream('./index.txt',{
    start:2,
    end:9,
    highWaterMark:3
});
rs.setEncoding('utf8');
//pause 暂停
//resume 恢复
rs.on('data',function (data) {
    console.log(data);
    rs.pause();
    setTimeout(function () {
        rs.resume();
    },1000);
});
rs.on('end',function () {
    console.log('end');
});
rs.on('error',function (err) {
   console.log(err);
});
/**
 * 错误处理
 * 1.同步 try catch
 * 2.异步 回调函数里的error对象是否有值
 * 3.在流里判断错误，监听它的error事件
 **/