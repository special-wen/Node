/**
 * Created by zxw on 17-7-29.
 */
var fs = require("fs");
var data = "";

//创建可读流
var readStream = fs.createReadStream('input.txt');

//设置编码为utf8
readStream.setEncoding("utf8");

//处理流事件 --> data,end,and error
readStream.on('data',function (chunk) {
    data += chunk;
});

readStream.on('end',function () {
    console.log(data);
});

readStream.on('error',function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");

//写入流
var fs_write = require("fs");
var data_write = 'lyt';
//创建一个可以写入的流，写入文件input.txt中
var writeStream = fs_write.createWriteStream('input.txt');

//使用utf8编码写入数据
writeStream.write(data_write,'utf8');

//标记文件尾部
writeStream.end();

//处理流事件 -->data_write,end,and error
writeStream.on('finish',function () {
    console.log("写入完成.");
});

writeStream.on('error',function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");

