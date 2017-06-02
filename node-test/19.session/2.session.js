/**
 * Created by Jesse on 17/5/19.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var session = {};
function removeSession(req, res, next) {
    var sid = req.cookies.sid;
    if (sid) {
        var mny = session[sid].mny;
        if (mny == 0) {
            delete session[sid];
            delete req.cookies.sid;
        }
    }
    next();
}
function makeMoney(req, res, next) {
    var sid = req.cookies.sid;
    if (!session[sid]) {
        session[sid] = {
            mny: 100
        };
    }
    next();
}
app.use(cookieParser());
app.use(makeMoney);
app.use(removeSession);
app.get('/', (req, res) => {
    var sid = req.cookies.sid;
    if (sid) {
        session[sid].mny -= 10;
        res.send(session[sid].mny + '');
    } else {
        var currentSid = Date.now() + '' + Math.random();
        res.setHeader('Set-Cookie', 'sid=' + currentSid);
        session[currentSid] = {
            mny: 100
        };
        res.send('new friend');
    }
});
app.listen(5560);
