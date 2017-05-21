/**
 * Created by Jesse on 17/5/18.
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/write', (req, res) => {
    //默认设置
    res.cookie('name','zjx');
    //设置域名 只有再次访问指定域名的时候客户端才会向服务器端发送cookie
    res.cookie('name','zhuang',{
        domain:'127.0.0.1'
    });
    //指定路径 只有当下次客户端 向服务器发送请求时，如果path=/read1时，才会向服务器发送，否则不发送
    res.cookie('age','21',{
        path:'/read1'
    });

    //过期时间
    res.cookie('age','22',{
        expires:new Date(Date.now()+10*1000),
        maxAga:10*1000
    });

    res.end('ok');
});
app.get('/read',(req,res)=> {
   console.log(req.cookies);
   res.end('ok');
});
app.get('/read1',(req,res)=> {
    console.log(req.cookies);
    res.end(req.cookies);
});
app.listen(5560);