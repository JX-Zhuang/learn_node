/**
 * Created by Jesse on 17/4/28.
 */
//导入核心模块http
var http = require('http');
var fs = require('fs');
var mime = require('mime');
/**
 * 1.能在特定的IP 特定端口上监听客户端的请求
 * 2.当请求到来的时候能执行监听函数,并返回响应
 * 创建一个服务器
 * 指定监听函数 每当客户端请求到来时执行的函数
 */
var server = http.createServer((req, res) => {
    var url = req.url;
    if(url === '/'){
        url = '/index.html';
    }
    res.setHeader('Content-Type', mime.lookup(url)+';charset=utf-8');
    fs.readFile('.' + url, 'utf8', (err, data) => {
        res.end(data);
    });

});
//port:0-65535（2^16-1）
//ps -ef | grep node
//DNS:Domain Name System
server.listen(5560, 'localhost');