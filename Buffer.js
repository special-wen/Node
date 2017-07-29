/**
 * Created by zxw on 17-7-28.
 */
buf = new Buffer(26);
/*
len = buf.write("create a new buffer");
console.log("写入字节数:"+len);*/
for(var i = 0;i<26;i++){
    buf[i] = i+97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));

var buffer = new Buffer("lyt");
var json = buffer.toJSON(buffer);
console.log(json);
