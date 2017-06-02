/**
 * Created by Jesse on 17/5/14.
 */
var http = require('http');
var bodyParser = require('./bodyparser');
module.exports = function (options,data,callback) {
  var request = http.request(options,(res)=>{
      bodyParser(res,function (result) {
          callback(result);
      });
  });
  request.end(data);
};