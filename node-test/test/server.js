/**
 * Created by Jesse on 17/4/18.
 */
let http = require('http'),
    fs = require('fs'),
    add = require('./help').minus;
console.log(add(1,2));
http.createServer((req,res)=>{
    const url = req.url;
    let str;
    console.log(url.match(/^\/(.+)\.(.+)/));
    if(url==='/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        str = fs.readFileSync('.'+url);
    }
    if(url==='/'){
        str = fs.readFileSync('./index.html');
    }
    res.end(str);
}).listen(8080,()=>{
    console.log('server is ok');
});