/**
 * Created by Jesse on 17/5/15.
 */
var express = require('express');
var app = express();
/**
 * app.use(path,callback)
 * path省略表示所有路径
 */
app.use((req, res, next) => {
    res.start = Date.now();
    console.time('cost');
    var end = res.end;
    res.end = function () {
        end.apply(res,Array.prototype.slice.apply(arguments));
        console.log(Date.now() - res.start);
        console.timeEnd('cost');
    };
    next();
});
app.use('/money', (req, res, next) => {
    res.mny = 100;
    next();
});
app.use('/hello', (req, res, next) => {
    res.mny = 100;
    next();
});
app.use('/hello', (req, res, next) => {
    res.mny -= 10;
    next();
});
app.use('/money', (req, res, next) => {
    res.mny -= 30;
    next();
});
app.get('/money', (req, res) => {
    res.send({钱: res.mny});
});
app.get('/hello', (req, res) => {
    res.send(res.mny + '');
    console.log(99)
});
 app.listen(5560);