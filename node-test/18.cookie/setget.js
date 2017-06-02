/**
 * Created by Jesse on 17/5/19.
 */
var document = {};
Object.defineProperty(document, 'cookies', {
    value: []
});
Object.defineProperty(document, 'cookie', {
    set: function (cookie) {
        this.cookies.push(cookie);
    },
    get: function () {
        return this.cookies.join(';');
    }
});

document.cookie = 'n=1';
document.cookie = 'd=11';
document.cookie = 'd=11222';
console.log(document.cookie);