/**
 * Created by Jesse on 17/4/26.
 */
var fs = require('fs');
fs.readFile('./index.txt','utf8',(err,data)=>{
    console.log(data);
});
console.log(99);