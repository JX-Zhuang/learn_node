/**
 * Created by Jesse on 17/5/5.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            res.end(data);
        });
    } else if (pathname == '/reg') {
        var contnetType = req.headers['content-type'];
        var str = '';
        req.on('data', (data) => {
            str += data;
        });
        req.on('end', () => {
            var obj ;
            switch (contnetType) {
                case 'application/x-www/form-urlencoded':
                    obj = querystring.parse(str);
                    break;
                case 'application/json':
                    obj = JSON.parse(str);
                    break;
            }
            console.log(obj);
            res.end('ok');
        });
    }
}).listen(5560);