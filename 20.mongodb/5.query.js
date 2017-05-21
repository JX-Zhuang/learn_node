/**
 * Created by Jesse on 17/5/21.
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
PersonModel.update({name:'zjx4'},{age:20},(err,docs)=>{
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
});
//指定返回的字段，1:返回 0:不返回
PersonModel.find({age:20},{name:1,age:1,_id:0},(err,docs)=>{
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
});

PersonModel.findOne({},{name:1,age:1,_id:0},(err,doc)=>{
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
});