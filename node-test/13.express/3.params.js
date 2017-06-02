/**
 * Created by Jesse on 17/5/16.
 */
var express = require('express');
var app = express();


app.get('/',(req,res)=>{
    res.send({
        host:req.host,
        path:req.path,
        query:req.query,
    });
});
app.get('/user/:id/:age',(req,res)=>{
    res.send({
        host:req.host,
        path:req.path,
        query:req.query,
        params:req.params   //路径参数
    });
});
/**
 * send()
 * Array或Object Express返回一个JSON 会调用JSON.stringify()
 * 不能使用数字作为参数
 *
 * sendStatus()
 */
app.listen(5560);