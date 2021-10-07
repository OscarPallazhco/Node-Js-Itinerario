const fs = require('fs');

const writeStream = fs.createWriteStream("exampleFile2.txt", "UTF-8");
const readStream = fs.createReadStream("exampleFile.txt", "UTF-8");


//leer de la terminal y escribir en el archivo
// process.stdin.on('data', (data)=>{
//     writeStream.write(data)
// });

//leer de la terminal y escribir en el archivo, mediante pipes
// process.stdin.pipe(writeStream);


//leer del arhivo y escribir en el otro, mediante pipes
// readStream.pipe(writeStream)




