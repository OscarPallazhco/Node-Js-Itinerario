
var fs = require('fs');

data = {
    "name": "Oscar",
    "lastname": "Pallazhco",
    "age": 25
}

fs.writeFile('data.json', JSON.stringify(data), (err)=>{
    if (err) {
        console.log('An error occurred', err);
    }
    console.log('Write finished');
});
