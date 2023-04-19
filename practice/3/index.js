const { a } = require('./main');
const obj = require('./main');
console.log(a);
setTimeout(() => {
    console.log('index a:', a);
    console.log('index obj:', obj);
}, 2000);