/**
 * Created by zxw on 17-8-20.
 */

var express = require('express');
var swig = require('swig');
var mysql = require('mysql');
var app = express();

//设置静态文件托管
app.use('/public',express.static(__dirname+'./public'));

app.engine('html',swig.renderFile);

app.set('views','./views');

app.set('view engine','html');

swig.setDefaults({cache:false})

//根绝不同的功能划分模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));


/*
app.get('/',function (req,res) {
    //res.send('hello world');

    res.render('index');
})
*/

/*
app.get('/main.css',function (req,res,next) {
    res.setHeader('content-type','text/css');

    res.send("body {background:red;}");
})*/
//监听http请求
var connection = mysql.createConnection({
    host: '115.159.110.11',
    user: 'zxw',
    password: 'wenwen',
    database: 'ThoughtWorks',
    port: '3306'
});

connection.connect(function(err){
    if(err){
        console.log('数据库连接失败');
        return;
    }else {
        console.log('数据库连接成功');
        app.listen(8000);
    }
});


