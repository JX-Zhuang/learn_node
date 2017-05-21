/**
 * Created by Jesse on 17/5/15.
 */
var express = require('express');
var app = express();
//配置路由
//当用户访问／的时候，会执行后面的回调函数
app.get('/',(req,res)=>{
    //send可以自动判断参数类型，自动转换响应信息
    //并且自动设置Content-Type
    res.send('home');
});
app.get('/hello',(req,res)=>{
    res.send('hello');
})
//启动服务器
app.listen(5560);