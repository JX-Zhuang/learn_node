/**
 * Created by Jesse on 17/5/7.
 */
Function.prototype.bind = function (obj) {
    var self = this;
    var argus = Array.prototype.slice.call(arguments,1);
    return function () {
        self.apply(obj,argus.concat(Array.prototype.slice.call(arguments)));
    }
};
function say(name, word) {
    console.log(this.name, name, word);
}
var obj = {
    name: 'zhuang'
};
var newSay = say.bind(obj, 'hello');
newSay('world');
newSay('world1');
newSay('world13');
