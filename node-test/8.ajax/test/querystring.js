/**
 * Created by Jesse on 17/5/5.
 */
var quertstring = {
    parse:function (str,flag) {
        flag = flag||'&';
        var ary = str.split(flag);
        var obj = {};
        ary.forEach((element)=>{
            let a = element.match(/([^=]*)=?(.*)/);
            if(a){
                obj[a[1]] = a[2];
            }
        });
        return obj;
    },
    stringify:function (obj,flag) {
        flag = flag||'&';
        let str = '';
        for(var k in obj){
            str += k+'='+obj[k]+flag;
        }
        return str.slice(0,str.length-1);
    }
};
var str = 'name=12&p=232';
console.log(quertstring.parse(str));
console.log(quertstring.stringify(quertstring.parse(str)));
