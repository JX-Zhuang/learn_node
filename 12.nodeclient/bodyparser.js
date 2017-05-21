/**
 * Created by Jesse on 17/5/14.
 */
module.exports = function (res,callback) {
    var result = '';
    res.on('data',(data)=>{
        result+=data;
    });
    res.on('end',()=>{
        callback(result);
    });
};