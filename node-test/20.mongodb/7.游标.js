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
// PersonModel.find({name:/zjx/},{name:1,age:1,_id:0},{limit:3},(err,docs)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(docs);
//     }
// });


/**
 * 分页查询，每页3条，查询第2页
 **/
PersonModel.find({},{_id:0,name:1,age:1},{skip:3,limit:3,sort:{age:1}},(err,docs)=>{
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
});
