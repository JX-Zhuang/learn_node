/**
 * Created by Jesse on 17/5/14.
 */
var http = require('http'),
    fs = require('fs'),
    bodyParser = require('./bodyparser'),
    proxy = require('./request');
http.createServer((req, res) => {
    // fs.createReadStream('./index.html').pipe(res);
    if (req.url == '/') {
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.url == '/reg') {
        bodyParser(req,function (result) {
            proxy({
                host:'localhost',
                path:'/',
                port:5560,
                method:'POST'
            },result,function (response) {
                res.end(response);
            });
        })

    }

}).listen(3001);