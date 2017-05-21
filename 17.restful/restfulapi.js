/**
 * Created by Jesse on 17/5/17.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var users = [{
    id: 1,
    name: '1'
}, {
    id: 2,
    name: '2'
}];
app.set('view engine', 'ejs');
// // app.set('views',__dirname+'/newviews');
app.set('views', path.resolve('newviews'));
// app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));
/**
 * 1.所有用户信息 curl -v -H 'accept:text/html' http://localhost:5560/users
 * 2.某个用户信息
 */

app.get('/users', (req, res) => {
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    var accept = req.headers.accept;
    var acceptType = accept.split(',').map(function (item) {
        var values = item.split(';');
        return {
            type: values[0],
            q: values[1] ? values[1].split('=')[1] : 1
        };
    }).sort(function (a, b) {
        return b.q - a.q;
    })[0].type;
    if (acceptType == 'text/html') {
        res.render('index', {
            users: users
        });
    } else {
        res.send(users);
    }
    console.log(acceptType);
});
app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    var arr = users.filter(function (item) {
        return item.id == id;
    });
    res.send(arr.length > 0 ? arr : 'Not Found');
});

/**新增用户
 * curl -X POST --data "name=213"  http://localhost:5560/users
 * -X 指定请求方法 --data指定请求体的数据
 *
 */
app.post('/users', (req, res) => {
    var addUser = req.body;
    console.log(addUser)
    if(addUser.name){
        addUser.id = users[users.length - 1].id+1;
        users.push(addUser);
        //当新增加一个资源的时候要返回新生产的对象
        res.send(addUser);
    }else{
        res.send({
            msg:'post error'
        });
    }
});

/**
 * 整体更新全部属性
 * curl -X PUT --data "name=213&id=1"  http://localhost:5560/users/1
 */
app.put('/users/:id',(req,res)=>{
    var putUser = req.body;
    if(putUser.id==req.params.id){
        for(var i = 0;i<users.length;i++){
            if(req.params.id==users[i].id){
                users[i] = putUser;
                break;
            }
        }
        res.send(putUser);
    }else {
        res.send({
            msg:'put error'
        });
    }
});
/**
 *局部更新，请求体里只传要更新的字段
 * curl -X PATCH --data "name=213122"  http://localhost:5560/users/1
 */
app.patch('/users/:id',(req,res)=>{
    var updatedFields = req.body;
    if(updatedFields.name){
        for(var i = 0;i<users.length;i++){
            if(users[i].id==req.params.id){
                for (var k in updatedFields){
                    if(users[i].hasOwnProperty(k)){
                        users[i][k] = updatedFields[k];
                    }
                }
                res.send(users[i]);
                break;
            }
        }
    }else{
        res.send({
            msg:'patch error'
        });
    }
});
/**
 * 删除
 * curl -X DELETE  http://localhost:5560/users/2
 */
app.delete('/users/:id',(req,res)=>{
    if(req.params.id){
        users = users.filter(function (user) {
           return user.id!=req.params.id;
        });
        res.send({});
        return;
        // for(var i = 0;i<users.length;i++){
        //     if(req.params.id==users[i].id){
        //         users.splice(i,1);
        //         res.send({});
        //         return;
        //     }
        // }
    }
    res.send({
        msg:'delete error'
    });
});




app.listen(5560);