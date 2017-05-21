/**
 * Created by Jesse on 17/5/14.
 */
var http = require('http');
var users = [];
http.createServer((req,res)=>{
    var result = '';
    req.on('data',(data)=> {
        result+=data;
    });
    req.on('end',()=>{
        users.push(JSON.parse(result));
        //设置响应头，允许哪个来源访问服务器
        // res.setHeader('Access-Control-Allow-Origin','http://localhost:63342,http://localhost:3001');
        res.end(JSON.stringify(users));
    });
}).listen(5560);