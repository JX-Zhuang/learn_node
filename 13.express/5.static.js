/**
 * Created by Jesse on 17/5/17.
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
// app.use(function (req,res,next) {
//     console.log(req.path)
//    fs.createReadStream(__dirname+'/public'+req.path).pipe(res);
// });
app.use(express.static(__dirname+'/public'));
// app.use(express.static(path.resolve('public')));
app.listen(5560);