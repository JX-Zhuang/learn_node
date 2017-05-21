/**
 * Created by Jesse on 17/4/26.
 */
var fs = require('fs');
function copy(src,target) {
    try{
        var data = fs.readFileSync(src);
    }catch (e){
        throw Error(e);
    }
    fs.writeFile(target,data,()=>{console.log(arguments)});
}
module.exports = copy;