/**
 * Created by Jesse on 17/5/7.
 */
var util = require('util');
function Parent() {
    this.name = 'father';
    this.age = 40;
    this.say = function () {
        console.log(this.name);
    }
}
Parent.prototype.showName = function () {
    console.log('name',this.name);
};
function Child() {
    Parent.call(this);
    this.name = 'child';
}
/**
 * 继承，只能继承原先上的方法
 */
util.inherits(Child,Parent);
var c = new Child();
c.showName();
/**
 * 将任意一个对象转化成字符串
 */
console.log(util.inspect(c));

console.log(util.isArray([2,3]));
console.log(util.isArray({a:3}));
console.log(util.isRegExp());
console.log(util.isDate());