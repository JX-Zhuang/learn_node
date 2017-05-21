/**
 * Created by Jesse on 17/4/26.
 */
var fs = require('fs');
/**
 * 1.创建目录，要求父目录存在
 */
fs.mkdir('test/t', (err) => {
    console.log(err);
});
/**
 * 2.读取目录下所有文件
 */
fs.readdir('./book', (err, files) => {
    console.log(files);
});
/**
 * 3.获取一个文件或目录详情
 */
fs.readdir('./book',(err,files)=>{
    files.forEach((file)=>{
        fs.stat('./book/'+file,(err,state)=>{
            console.log({
                size:state.size,
                dir:state.isDirectory(),
                file:state.isFile()
            });
        });
    });
});
/**
 * 4.判断一个文件（或文件夹）是否存在
 */
fs.exists('./test1', (exists) => {
    console.log(exists);
});
// fs.writeFile('./a.txt','test',(err)=>{
//     console.log(err);
// });
/**
 * 创建多级目录
 */
function makep(path) {
    var ary = path.split('/'), str = '', exists = true;
    for (var i = 0, l = ary.length; i < l; i++) {
        str += ary[i] + (i == l - 1 ? '' : '/');
        if (exists) {
            exists = fs.existsSync(str);
        }
        if (!exists)  {
            fs.mkdirSync(str);
        }

    }
}
makep('../a/test/t/t1/');
