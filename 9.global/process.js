/**
 * Created by Jesse on 17/5/7.
 */
// console.log(process);
/**
 * 当前工作目录
 */
console.log(process.cwd());
/**
 * 改变当前工作目录
 */
process.chdir('test');
console.log(process.cwd());