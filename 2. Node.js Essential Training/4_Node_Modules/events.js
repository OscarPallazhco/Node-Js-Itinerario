const events = require('events');

var emitter = new events.EventEmitter();

emitter.on('CustomEvent', (user, message) => {
    console.log(`${user} say: ${message}`);
});


emitter.emit('CustomEvent', 'Eduardo', 'prueba');

process.stdin.on('data', (data)=>{
    var input = data.toString().trim();
    if (input === 'exit') {
        emitter.emit('CustomEvent', 'process', 'Bye!');
        process.exit();
    }
    emitter.emit('CustomEvent', 'Terminal', input);
});