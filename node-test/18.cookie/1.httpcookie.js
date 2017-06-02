/**
 * Created by Jesse on 17/5/18.
 */
var http = require('http');
http.createServer((req, res) => {
    if (req.url == '/write') {
        //响应头  实体头  扩展头自定义头
        res.writeHead(200, {
            'Set-Cookie': 'age=21;path=/;Max-Age=' + 10
        });
        res.end('ok');
    } else if (req.url == '/read') {
        res.end(req.headers.cookie);
    }
}).listen(5560);