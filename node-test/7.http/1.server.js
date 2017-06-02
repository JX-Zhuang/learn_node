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
    var date = new Date();
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write('Hello');
    res.write(' world ');
    res.write(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
    res.end(' '+date.toString());
});
//port:0-65535
//ps -ef | grep node
//DNS:Domain Name System
server.listen(5560, 'localhost');