/**
 * Created by zxw on 17-7-29.
 */

//链试流
var fs = require("fs");
var zlib = require("zlib");

//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成.");

//解压文件
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('output.txt'));
console.log("文件解压完成");