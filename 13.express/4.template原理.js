/**
 * Created by Jesse on 17/5/17.
 */
function render(tmpl,data) {
    return tmpl.replace(/\{\{(\w+)\}\}/,function (input,group1) {
        return data[group1];    //替换匹配到的内容
    });
}

var result = render('<h1>{{title}}</h1>',{title:'hello'});
console.log(result);
