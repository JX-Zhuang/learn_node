/**
 * Created by Jesse on 17/5/14.
 */
var fs = require('fs');
var ws = fs.createWriteStream('./write.txt',{
    flags:'a',      //不清空原来文件，追加
    start:21        //开始的写入位置
});
//写入
ws.write('庄嘉祥','utf8',function () {
    console.log(arguments);
});
ws.write('你好','utf8',function () {
    console.log(arguments);
});
//写入并且关闭
ws.end('中国','utf8');