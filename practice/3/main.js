const obj = {
    a: 1
};
setTimeout(() => {
    obj.a++;
    console.log('main', obj);
}, 1000);
module.exports = obj;