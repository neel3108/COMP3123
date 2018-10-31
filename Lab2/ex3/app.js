var events = require('events');
var emitter = new events.EventEmitter();
 
var myEventHandler = function () {
    console.log('Alarm has been triggered!');
    emitter.emit('call');
  }
var callHandler = function () {
    console.log('Call 911!');
  }

emitter
  .on('alarm', myEventHandler)
  .on('call', callHandler);

emitter.emit('alarm');
