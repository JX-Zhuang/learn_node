/**
 * Created by Jesse on 17/5/5.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    switch (urlObj.pathname) {
        case '/':
            fs.readFile('index.html', 'utf8', (err, data) => {
                res.end(data);
            });
            break;
        case '/reg':
            let str = '';
            req.on('data', (data) => {
                console.log(data);
                str += data;
            });
            req.on('end', () => {
                console.log(querystring.parse(str));
                res.end('ok');
            });
            break;
    }
}).listen(5560);