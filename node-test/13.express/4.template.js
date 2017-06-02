/**
 * Created by Jesse on 17/5/17.
 */
var express = require('express');
var path = require('path');
var app = express();
/**
 * 1.动态内容
 * 2.静态内容
 * 3.动静结合
 */
//配置属性值
//配置模版引擎
app.set('view engine','ejs');
//指定模版存放的目录
//resolve 先获取当前文件的所在在绝对目录，然后再拼上后面的目录
app.set('views',path.resolve('views'));

app.get('/',(req,res)=>{
    res.render('index',{
        title:'首页'
    });
});
app.get('/reg',(req,res)=>{
    res.render('index',{
        title:'注册'
    });
});
app.listen(5560);
