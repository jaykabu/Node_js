// create and trigger custom event in node js
// single event

// const events = require("events");
// const event = new events.EventEmitter();
// event.on('click',()=>console.log("first event create"));
// event.emit('click',"jaykabutarwala");


//javascipt using event// double event

// $("button").on('click',function () {
//     console.log("jay");
//     test();
// });
// function test() {
//     alert("wrong");
//
// }

// double event

// const events = require("events");
// const event = new events.EventEmitter();
//
// const first_event = function(){
//      console.log("jay");
//     event.emit('click2');
//
// };
// const sencond_event = function(){
//     console.log("kabutarwala");
// };
// event.on('click2',sencond_event);
// event.on('click',first_event);


//=> practical



const events = require("events");
const event = new events.EventEmitter();

event.on('click',()=>console.log("event create"));
event.emit('click2');

const event2 = ()=>console.log("second event create");

event.emit('click2',event2);
event.emit('click',event);
