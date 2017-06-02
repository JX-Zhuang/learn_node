/**
 * Created by Jesse on 17/4/26.
 */
//字符串转buffer
var buffer = new Buffer('庄嘉祥');
//buffer转字符串
console.log(buffer.toString('utf8',3,6));