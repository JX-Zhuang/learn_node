/**
 * Created by Jesse on 17/5/17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//extended 为true时，用querystring，如果是false会用bodyParser里的方法
app.use(bodyParser.urlencoded({extended:true})); //此中间件会把请求体提取出来放到req.body上
// app.use(bodyParser.json( ));
app.use(express.static(__dirname));

app.post('/reg',(req,res)=>{
    console.log(req.body);
    res.send('reg');
});
app.listen(5560);