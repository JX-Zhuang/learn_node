/**
 * Created by Jesse on 17/5/20.
 */
/**
 * 1.安装mongoose
 * 2.require
 * 3.连接数据库 mongod 服务端  mongo 客户端
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/player22');
db.connection.on('error',(err)=>{
   console.log('err:'+err);
});
db.connection.on('open',()=>{
    console.log('ok');
});
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0},
    time: {type: Date, default: Date().now},
    email: {type: String, default: ''}
});
var PersonModel = db.model('tests',PersonSchema);
var condition = {name:'zhuang'};
var update = {$set:{age:18}};
//multi 更新匹配到的所有记录
PersonModel.update(condition,{age:12},{multi:true},(err)=>{
   if(err){
       console.log(err);
   } else {
       console.log('update ok');
   }
});

PersonModel.remove({name:'zhuang'},(err,docs)=>{
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
});