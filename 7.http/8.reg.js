/**
 * Created by Jesse on 17/5/3.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var user = [];
var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url,true);
    console.log(req.url,urlObj)
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname=='/'){
        fs.readFile('./8.reg.html',(err,data)=>{
           res.end(data);
        });
    }else if(urlObj.pathname=='/reg'){
        var str = '';
       //每当服务器接收到客户端发送来的一段数据的时候就会触发data事件
        req.on('data',(data)=>{
            str+=data;
        });
        req.on('end',()=>{
           user.push(JSON.parse(str));
           res.end(JSON.stringify(user));
        });
    }
});
server.listen(5561,'localhost');