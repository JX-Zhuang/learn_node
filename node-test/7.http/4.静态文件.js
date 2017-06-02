/**
 * Created by Jesse on 17/4/28.
 */
//导入核心模块http
var http = require('http');
var fs = require('fs');
/**
 * 1.能在特定的IP 特定端口上监听客户端的请求
 * 2.当请求到来的时候能执行监听函数,并返回响应
 * 创建一个服务器
 * 指定监听函数 每当客户端请求到来时执行的函数
 */
var server = http.createServer((req, res) => {
    var url = req.url;
    if(url==='/style.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.readFile('./style.css','utf8',(err,data)=>{
            console.log(data);
            res.end(data);
        });
    }else if(url==='/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.readFile('./index.html','utf8',(err,data)=>{
            res.end(data);
        });
    }else if(url==='/index.js'){
        res.setHeader('Content-Type','text/javascript;charset=utf8');
        fs.readFile('./index.js','utf8',(err,data)=>{
            res.end(data);
        });
    }

});
//port:0-65535
//ps -ef | grep node
//DNS:Domain Name System
server.listen(5560, 'localhost');