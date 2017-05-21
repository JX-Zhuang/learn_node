/**
 * Created by Jesse on 17/5/7.
 */
//获取模块文件的绝对路径
console.log(__filename);
//所在目录的绝对路径
console.log(__dirname);

console.log(global);
/**
 * 1.global的属性可以不用引用，也不用声明，直接使用
 * 2.在node中在模块中能直接用有两种
 *  1.是全局下的属性(global setTimeout setImmediate)
 *  2.初始化模块时传入的参数（__filename __dirname）
 **/
