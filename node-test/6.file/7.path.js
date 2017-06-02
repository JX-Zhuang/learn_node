/**
 * Created by Jesse on 17/4/28.
 */
var fs = require('fs');
var path = require('path');
console.log(path.join('book','test','node.js'));
//seperator  分隔符
console.log(path.sep);
console.log(__dirname);
console.log(__filename);
//获取文件名
console.log(path.basename('7.path.js'));
//只获取 7.path
console.log(path.basename('7.path.js','.js'));
//获取文件扩展名
console.log(path.extname('/Users/Jesse/Desktop/node-test/6.file/7.path.js'));
console.log(path.resolve());
//相对路径解析成绝对路径
console.log(path.resolve('book','test'));
console.log(path.resolve('book','node.json','../javascript.json'));