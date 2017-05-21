/**
 * Created by Jesse on 17/5/7.
 */
function EventEmitter() {
    this._events = {};
}
EventEmitter.prototype.addListener = function (type,listener) {
    if(typeof listener !== 'function'){
        throw Error('"listener" argument must be a function');
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else {
        this._events[type] = [listener];
    }
};
EventEmitter.prototype.emit = function (type) {
    var self = this;
    if(this._events[type]){
        this._events[type].forEach(function (listener) {
            listener.call(self);
        })
    }
};
EventEmitter.prototype.once = function (type,listener) {
    if(typeof listener !== 'function'){
        throw Error('"listener" argument must be a function');
    }
    function g() {
        this.removeListener(type,g);
        listener();
    }
    this.addListener(type,g);
};
EventEmitter.prototype.removeListener = function (type,listener) {
    var arr = this._events[type];
    if(arr){
        for(var i = 0;i<arr.length;i++){
            if(arr[i] === listener){
                arr.splice(i,1);
            }
        }
    }
};
EventEmitter.prototype.removeAllListeners = function (type) {
    if(this._events[type]){
        delete this._events[type];
    }
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
module.exports = EventEmitter;