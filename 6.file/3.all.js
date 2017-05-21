/**
 * Created by Jesse on 17/4/26.
 */
var fs = require('fs');
var arr = ['name', 'age'];
for (var i = 0, l = arr.length; i < l; i++) {
    (function (i) {
        fs.readFile(arr[i] + '.txt', 'utf8', (err, data) => {
            console.log(arr[i], data);
        });
    })(i);
    fs.readFile(arr[i] + '.txt', 'utf8', (err, data) => {
        console.log(arr[i], data);
    });
}