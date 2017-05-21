/**
 * Created by Jesse on 17/5/5.
 */
var fs = require('fs');
function copyFile(path,target) {
    var data;
    try{
        data = fs.readFileSync(path);
    }catch (e){
       throw Error(e);
    }
    fs.writeFileSync(target,data);
}
module.exports = copyFile;