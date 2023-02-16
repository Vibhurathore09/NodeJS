import EventEmitter from 'events';

// Creating Class

class MyEmitter extends EventEmitter{}

// Creating Object
const myEmitter = new MyEmitter();

// Example 1
// register event listener
// myEmitter.on('event' , ()=>{
//     console.log('An event occured!');
// });

// // Trigger event
// myEmitter.emit('event');
// myEmitter.emit('event');


// Example 2
let m =0;
myEmitter.once('event' , ()=>{
    console.log(++m);
});

// Trigger event
myEmitter.emit('event');
myEmitter.emit('event');