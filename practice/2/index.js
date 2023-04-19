import { count } from './main.js';
console.log(count);
setTimeout(() => {
    console.log(count);
}, 2000);