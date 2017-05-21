/**
 * Created by Jesse on 17/5/14.
 */
var http = require('http');
//请求参数
var options = {
    host: 'localhost',
    port: 5560,
    path: '/post',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
        // 'Content-Type':'application/json'
    }
};
//向服务器发送请求
var request = http.request(options, (res) => {
    console.log(res.statusCode);
    console.log(res.headers);
    var result = '';
    res.on('data', (data) => {
        result += data;
    });
    res.on('end', () => {
        console.log(JSON.parse(result));
    });
});
//request也是一个流，可写流
// request.write('{"name":"zhuang"');
// request.write(',"age":"21"}');

request.write('name=zhuangjx&age=20');
request.end();