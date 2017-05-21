/**
 * Created by Jesse on 17/5/18.
 */
/**
 *
 * @type {[*]}
 */
var nums = [3, 2, 5, 33, 566, 4];
/**
 * reduce会依次把数组中的每一个元素传入next
 * 每次返回值会传入下一次的current
 * 最后得到一个最终值
 * @type {*}
 */
var s = nums.reduce(function (current, next) {
    return current > next ? current : next;
}, 0);
console.log(s);

console.log(Math.max.apply(null,nums));