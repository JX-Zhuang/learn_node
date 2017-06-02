/**
 * Created by Jesse on 17/5/5.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var querystring = require('querystring');
var util = require('util');
var copyFile = require('./copyfile');
var mime = require('mime');
http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            res.end(data);
        });
    } else if (pathname == '/reg') {
        // var str = '';
        //构建一个解析器
        var form = new formidable.IncomingForm();
        //用解析器解析请求体
         //把非file的input放在fields里
        //把文件类型的元素放在files里
        form.parse(req, function(err, fields, files) {
            let fileName = '/img/'+Date.now()+files.avatar.name;
            res.writeHead(200, {'content-type': 'text/plain'});
            copyFile(files.avatar.path,__dirname+fileName);
            //inspect 把对象转化成字符串
            // res.end(util.inspect({fields: fields, files: files}));
            res.end(fileName);
        });
    }else {
        fs.exists('.'+pathname,(exists)=>{
           if(exists){
               res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
               fs.readFile('.'+pathname,(err,data)=>{
                   if(err){
                       console.log(err);
                       res.statusCode = 404;
                       res.end('404');
                   }
                    res.end(data);
               });
           }else {
               res.statusCode = 404;
               res.end('404');
           }
        });
        // res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        // fs.readFile('./'+decodeURIComponent(pathname),(err,data)=>{
        //     if(err){
        //         console.log(err);
        //         res.statusCode = 404;
        //         res.end('404');
        //     }
        //     res.end(data);
        // });
    }
}).listen(5560);