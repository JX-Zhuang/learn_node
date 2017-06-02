/**
 * Created by Jesse on 17/5/7.
 */

setTimeout(()=>{
    console.log('a');
},10);
/**
 * 在下一个事件环中执行此函数
 */
setImmediate(()=>{
    console.log('b');
});
/**
 * 把这个函数放在当前的任务末尾
 */
process.nextTick(function () {
    console.log('c');
});
console.log('d');