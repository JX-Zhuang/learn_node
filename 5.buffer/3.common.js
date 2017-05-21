/**
 * Created by Jesse on 17/4/26.
 */
var buf1 = new Buffer('庄庄');
var buf2 = new Buffer('嘉');
var buf3 = new Buffer('祥');
var buf4 = new Buffer('dsfdsf祥121');
var all = Buffer.concat([buf1,buf2,buf3,buf4]);
console.log(all.slice(6,9).toString());
console.log(all.toString());
var newBuffer = new Buffer(9);
buf1.copy(newBuffer,0,0,3);
buf2.copy(newBuffer,3,0,3);
buf3.copy(newBuffer,6,0,3);
console.log(newBuffer.toString());

Buffer.myConcat = function (arr,length) {
    var buffer ,start = 0;
    if(!length){
        length = 0;
        for(var i = 0;i<arr.length;i++){
            length += Buffer.byteLength(arr[i]);
        }
    }
    buffer = new Buffer(length);
    for(var i = 0;i<arr.length;i++){
        arr[i].copy(buffer,start);
        start+=Buffer.byteLength(arr[i]);
    }
    return buffer;
};
var myBuffer = Buffer.myConcat([buf1,buf2,buf3,buf4]);
console.log(myBuffer.toString());