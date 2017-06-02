/**
 * Created by Jesse on 17/4/28.
 */
//导入核心模块http
var http = require('http');
/**
 * 1.能在特定的IP 特定端口上监听客户端的请求
 * 2.当请求到来的时候能执行监听函数,并返回响应
 * 创建一个服务器
 * 指定监听函数 每当客户端请求到来时执行的函数
 */
var server = http.createServer((req, res) => {
    var obj = {
        method:req.method,
        url:req.url,
        headers:req.headers,
        cookie:req.headers.cookie
    };
    //响应码
    res.statusCode = 404;
    //响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //响应体
    res.write('Hello ');
    setTimeout(()=>{
        res.write('world');
        res.end(JSON.stringify(obj));
    },2000);
});
//port:0-65535
//ps -ef | grep node
//DNS:Domain Name System
server.listen(5560, 'localhost');