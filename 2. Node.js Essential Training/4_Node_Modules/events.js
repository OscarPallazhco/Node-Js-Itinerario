const events = require('events');

var emitter = new events.EventEmitter();

emitter.on('CustomEvent', (user, message) => {
    console.log(`${user} say: ${message}`);
});

// emitir un evento
emitter.emit('CustomEvent', 'Eduardo', 'prueba');

//emitir un evento cuando ingresa datos por terminal
process.stdin.on('data', (data)=>{
    var input = data.toString().trim();
    if (input === 'exit') {
        emitter.emit('CustomEvent', 'process', 'Bye!');
        process.exit();
    }
    emitter.emit('CustomEvent', 'Terminal', input);
});