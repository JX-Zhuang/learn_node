/**
 * Created by Jesse on 17/5/7.
 */
// var EventEmitter = require('events');
var EventEmitter = require('./eventemitter');
var util = require('util');
function Girl(name) {
    this.name = name;
    EventEmitter.call(this);
}
util.inherits(Girl, EventEmitter);
function Boy(name) {
    this.name = name;
    this.say = function (words) {
        console.log(this.name, words);
    }
}
var g = new Girl('M');
var xm = new Boy('小明');
var xw = new Boy('小王');
var foo = xm.say.bind(xm, '看上就买吧');
//注册监听 事件
g.addListener('看', foo);
// g.addListener('看', foo);
g.on('看', xm.say.bind(xw, '喜欢就多看看'));
//发布订阅 事件
g.emit('看');
g.removeListener('看', foo);
g.removeListener('看2', foo);
g.emit('看');
g.removeAllListeners('看');
g.emit('看');


g.once('饿了', function () {
    console.log('吃饭');
});
g.once('困了', function () {
    console.log('睡觉');
});
g.emit('困了');
g.emit('困了');
g.emit('饿了');
g.emit('饿了');
g.emit('饿了');

// function Parent(name) {
//     this.name = name;
// }
// Parent.prototype.say = function () {
//   console.log(this.name);
// };
//
// function Child() {
//     Parent.call(this);
// }
//
// function inherits(ctor,superCtor) {
//     function temp() {
//
//     }
//     temp.prototype = superCtor.prototype;
//     ctor.prototype = new temp();
// }
// inherits(Child,Parent);
// var c = new Child();
// c.say();
