/**
 * Created by Jesse on 17/5/21.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/player22');
db.connection.on('error', (err) => {
    console.log('err:' + err);
});
db.connection.on('open', () => {
    console.log('ok');
});
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0},
    time: {type: Date, default: Date().now},
    email: {type: String, default: ''}
});
var PersonModel = db.model('tests', PersonSchema);
