// path es un core module
const path = require('path');
var location = path.join(__dirname, 'www', 'files');
console.log(location);

// util es un core module
const util = require('util');
// util proporciona un log, que a diferencia del console.log, este imprime ademas la hora y fecha
// util.log(location);


// v8 es un core module
const v8 = require('v8');
console.log(v8.getHeapStatistics());


// importar una funcion en especifico de un core module
const{ format } = require('util');
console.log((format('%s', 'foo')));