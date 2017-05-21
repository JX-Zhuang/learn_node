/**
 * Created by Jesse on 17/5/3.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url,true);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname=='/'){
        fs.readFile('./clock.html',(err,data)=>{
           res.end(data);
        });
    }else if(urlObj.pathname=='/clock'){
        res.end(new Date().toLocaleString());
    }
});
server.listen(5560,'localhost');