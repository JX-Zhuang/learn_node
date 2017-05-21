/**
 * Created by Jesse on 17/4/22.
 */
let fs = require('fs');
//1.如果读取文件，文件不存在，报错
let result = fs.readFileSync('index.html','utf8');//服务端自己读取上级文件是可以的
//不加utf8，结果是二进制
// console.log(result);
//2.如果写文件，文件不存在，创建文件，如果存在，清空后再写入
//写入的时候会默认将对象转换成字符串
fs.writeFileSync('./test.json','{name:113}');
//追加
fs.appendFileSync('./test.json','{name:1123}');
