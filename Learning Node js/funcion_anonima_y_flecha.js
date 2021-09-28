var fs = require('fs');

// funcion anonima
fs.readFile('filename', 'utf-8', function(err, data) {
   // do something 
});


// funcion flecha
fs.readFile('filename', 'utf-8', (err, data) => {
   // do something 
});