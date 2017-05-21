/**
 * Created by Jesse on 17/5/18.
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/', (req, res) => {
    if (req.cookies.come) {
        res.end('old');
    } else {
        res.cookie('come', true, {maxAge: 10 * 1000});
        res.end('new');
    }
});
app.listen(5560);