/**
 * Created by zxw on 17-7-25.
 */

var fs = require("fs");//首先引入fs模块
var fileName = 'inputa.txt';//定义文件路径

console.log("同步执行开始");
var data = fs.readFileSync(fileName);
console.log(data.toString());
console.log("同步执行结束!\n");

console.log("异步执行开始!");
fs.readFile(fileName,function (error,data) {
    console.log(error);
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
})
console.log("异步执行结束!");















