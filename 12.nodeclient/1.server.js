/**
 * Created by Jesse on 17/5/14.
 */
var users = [];
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var ws = fs.createWriteStream('./user.txt',{
   flags:'a'
});
var server = http.createServer((req, res) => {
    req.pipe(ws);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.httpVersion);
    // console.log(req.url);
    req.setEncoding('utf8');
    var result = '';
    var contentType = req.headers['content-type'];
    req.on('data', (data) => {
        result += data;
    });
    req.on('end',()=>{
        var user = '';
        if(contentType=='application/json'){
            user = JSON.parse(result);
        }else if(contentType=='application/x-www-form-urlencoded'){
            user = querystring.parse(result);
        }
        users.push(user);
        res.end(JSON.stringify(users));
    });
    /**
     * 通用头，请求头，响应头和实体头
     * 通用头
     * 实体头
     * 自定义头
     */
    // res.setHeader('name', 'zjx');
});
server.listen(5560);