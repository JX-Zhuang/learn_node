/**
 * Created by Jesse on 17/5/3.
 */
var http = require('http');
var url = require('url');
var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url,true);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    console.log(urlObj);
    res.end(JSON.stringify(urlObj));
});
server.listen(5560,'localhost');