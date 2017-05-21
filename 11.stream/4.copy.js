/**
 * Created by Jesse on 17/5/14.
 */
var fs = require('fs');
function copy(src,target){
    var rs = fs.createReadStream(src,{

    });
    var ws = fs.createWriteStream(target);
    rs.on('data',function (data) {
        ws.end(data);
    });
}
copy('./1.jpeg','./2.jpeg');