/**
 * Created by zxw on 17-7-26.
 */
var event = require('events');
var eventEmitter = new event.EventEmitter();

//监听器#1
var listener1 = function listener1() {
    console.log('监听器1执行');
}
//监听器#2
var listener2 = function listener2() {
    console.log('监听器2执行');
}

//绑定 connection 事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);

//绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection',listener2);

//计算监听器的个数
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"个监听连接事件。");

//处理connection 事件
eventEmitter.emit('connection');

//移除监听listener1函数
eventEmitter.removeListener('connection',listener1);
console.log("listener1不再受监听");

//触发事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器监听连接事件");

console.log("程序执行完毕。");











//引入events模块
/*
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event',function () {
    console.log('evnt事件触发')
});

setTimeout(function () {
    eventEmitter.emit('some_event');
},1000)
*/
