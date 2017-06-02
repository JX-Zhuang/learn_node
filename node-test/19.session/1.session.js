/**
 * Created by Jesse on 17/5/19.
 */
var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
    secret:'zhuang',    //secret的值建议使用随机字符串
    cookie:{maxAge:30*60*1000},    //过期时间（毫秒）
    resave:true,//每次响应结束的时候，都重新保存session
    saveUninitialized:true  //保存未初始化的session
}));

app.get('/',(req,res)=>{
    console.log(req.session);
    if(req.session.sign){
        res.send(req.session.name);
    }else {
        //因为session是借助cookie实现的，所以当设置session的时候，会自动设置cookie
        req.session.sign = true;
        req.session.name = 'zhuang';
        res.send('hello');
    }
});
app.listen(5560);
