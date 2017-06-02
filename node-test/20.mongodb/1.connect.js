/**
 * Created by Jesse on 17/5/20.
 */
/**
 * 1.安装mongoose
 * 2.require
 * 3.连接数据库 mongod 服务端  mongo 客户端
 */
var mongoose = require('mongoose');
//player22可以不存在
var db = mongoose.connect('mongodb://localhost:27017/player22');
db.connection.on('error', (err) => {
    console.log('err:' + err);
});
db.connection.on('open', () => {
    console.log('ok');
});

/**
 * 定义一个schema，描述此集合里有哪些字段，字段是什么类型
 */
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0},
    time: {type: Date, default: Date().now},
    email: {type: String, default: ''}
});
/**
 * 现有schema再有model
 * 创建一个model，集合名字是person
 * 指的是整体
 */
var PersonModel = db.model('test', PersonSchema);
/**
 * Entity
 * 根据模型创建实体
 * 个体对象
 */
var PersonEntity = new PersonModel({
    name: 'zhuang',
    age: 25,
    email: 'zhuang@z.com'
});
PersonEntity.save((err,doc)=>{
   if(err){
       console.log('err:',err);
   } else {
       console.log(doc);
   }
});
/**
 * model 调用create
 * entity 调用save
 **/