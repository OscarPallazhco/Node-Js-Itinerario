const fs = require('fs');
const colors = require('./colors.json');


colors.colorList.forEach(color => {
    var data = `${color.color}: ${color.hex}\n`;
    fs.appendFile('colors.txt', data, (err) => {
        if (err) throw err;
    });
});
console.log(`The data was appended to file!`);