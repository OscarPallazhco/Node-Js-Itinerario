// read with require the json file
var data1 = require('./data.json');

console.log(data1);
// si se usa require con el archivo json, se lo puede tratar directamente como un objeto
console.log(data1.name);
console.log(data1.lastname);
console.log(data1.age);




// read with fs
var fs = require('fs');
fs.readFile('./data.json', 'utf-8', function(err, data){
    // data no se lo puede tratar como un objeto
    console.log(data);

    // se requiere hacer conversion para tratarlo como objeto
    data2 = JSON.parse(data);
    console.log(data2);
    console.log(data2.name);
    console.log(data2.lastname);
    console.log(data2.age);
});