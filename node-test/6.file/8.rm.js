/**
 * Created by Jesse on 17/4/28.
 */
var fs = require('fs');
var path = require('path');
var r = path.join(__dirname,'a');
//remove dir
fs.rmdir(r,(err,data)=>{
   console.log(err,data);
});
//rename dir or file
fs.rename(path.join(__dirname,'age.txt'),path.join(__dirname,'aa.txt'),(err,data)=>{
    console.log(err,data);
});
//remove file
fs.unlink(__dirname+'/a.txt',(err,data)=>{
    console.log(err,data);
});