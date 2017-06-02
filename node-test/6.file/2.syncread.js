/**
 * Created by Jesse on 17/4/26.
 */
var fs = require('fs');
var data = fs.readFileSync('./index.txt','utf8');
console.log(data);
console.log(99);