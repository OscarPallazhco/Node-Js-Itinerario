const fs = require('fs');

const readStream = fs.createReadStream("exampleFile.txt", "UTF-8");

readStream.on('data', (data)=>{
    console.log(`read ${data.length -1} characters`);
});

readStream.once('data', (data)=>{
    console.log(data);
});

readStream.on('end', ()=>{
    console.log('finish read');
});