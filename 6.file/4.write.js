/**
 * Created by Jesse on 17/4/26.
 */
var fs = require('fs'),
    copy = require('./5.copy');
// fs.writeFileSync('./write.txt','庄嘉祥');
copy('./name.txt','./copy.txt');
/**
 * flag:对文件进行何种操作
 * w:清空并写入
 * a:在原有基础上追加
 */
// fs.writeFile('./write.txt','庄嘉祥1',{flag:'a'},()=>{
//     console.log(arguments);
// });

/**
 * 追加
 */
fs.appendFile('./write.txt','China',()=>{});