/**
 * Created by Jesse on 17/5/18.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.set('view engine','ejs');
app.set('views',__dirname);
app.use(cookieParser());
function checkLogin(req,res,next) {
    if(req.cookies&&req.cookies.username){
        next();
    }else{
        res.redirect('/');
    }
}
//进入登录页
app.get('/',(req,res)=>{
    res.render('login');
});

app.get('/login',(req,res)=>{
    var username = req.query.username;
    if(username){
        res.cookie('username',username,{
            httpOnly:true
        });
    }
    res.redirect('/user');
});

app.get('/user',checkLogin,(req,res)=>{
    res.render('user',{
        username:req.cookies.username
    });
});

app.listen(5560);