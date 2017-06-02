/**
 * Created by Jesse on 17/4/26.
 */
//Buffer里面只能放字节 0-255
// 指定大小
var buffer = new Buffer(1);
buffer[0] = 16;
console.log(buffer.length);
//通过字符串创建buffer
console.log(new Buffer('庄嘉祥'));
//通过数组创建buffer
console.log(new Buffer(['庄','嘉','祥']));
//只能放数字
console.log(new Buffer([1,'2484',3]));