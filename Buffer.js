/**
 * Created by zxw on 17-7-28.
 */
buf = new Buffer(256);
len = buf.write("create a new buffer");
console.log("写入字节数:"+len);