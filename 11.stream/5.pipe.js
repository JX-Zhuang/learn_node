/**
 * Created by Jesse on 17/5/14.
 */
var fs = require('fs');
function copy(src,target){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}
copy('./1.jpeg','./2 .jpeg');

/**
 * fs write read->整体读写
 * stream->流 一组有序的，有起点和终点的字节数据传输手段
 **/