
var fs = require('fs');

function callback(err, data){
    console.log(data);
}

fs.readdir('c:/', callback);
// callback es llamado cuando readdir termine de ejecutarse

console.log('Se ejecuta mientras se esta leyendo el directorio');