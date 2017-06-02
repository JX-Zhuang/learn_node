/**
 * Created by Jesse on 17/4/22.
 */
//1.如果客户端请求的东西有，读出来内容，写回到客户端
//创建服务，
// 1.配置node代码提示
// 2.配置es6语法提示
let http = require('http'),
    mime = require('mime'),
    fs = require('fs'),
    url = require('url'),//处理路径的 可以将路径转换成对象 pathname属性就是真正的请求路径，query就是?的值，query默认是字符串，需要转换成对象
    listener = function (req, res) {
        //浏览器访问服务端，就会执行这个函数，服务端会一直等待客户端的到来
        //还要告诉客户端响应的内容是utf8格式
        let result,
            {pathname, query} = url.parse(req.url, true);   //解构
        if(pathname=='/'){
            result = fs.readFileSync('./index.html');
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
        }else {
            try{
                result = fs.readFileSync('./'+pathname);
                //使用第三方模块
                res.setHeader('Content-Type', mime.lookup(pathname)+';charset=utf-8');
            }catch (e){
                console.log(pathname)
                res.statusCode = 404;
                res.end('not found');
            }
        }
        res.statusCode = 200;
        res.end(result);//字符串或者buffer类型
    };
http.createServer(listener).listen(3000);