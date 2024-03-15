
/*event emitter works in the same way as we do with the event listener in vanilla js 
*/
const logEvents = require('./logEvent');

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
// here there are the 2 method that is available for the eventEmitter object  that  is on and emit 
/*
on- attach a callback function , can be excuted whenever the event is triggered 
emit ()-- to trigger an event 
we can alos pass the argument to the on methosd even we can pas the multiple argument 
*/
eventEmitter.on("log", (msg) =>logEvents(msg) );

eventEmitter.emit("log", "log event emitted : ");
/*
now we have some other method tat is availbale to the eventEmitter nibject of the eventEmitter calss'
*/



