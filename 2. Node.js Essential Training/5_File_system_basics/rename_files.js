const fs = require('fs');

//renombrar
fs.rename("./exampleFile.txt", "./exampleFile2.txt", (err)=>{
    if (err) {
        console.log('No se puede renombrar el archivo', err.message);
    }else{
        console.log('Rename complete');
    }
});

//cambiar ubicacion
fs.rename("./exampleFile2.txt", "./new_folder/exampleFile2.txt", (err)=>{
    if (err) {
        console.log('No se puede renombrar el archivo', err.message);
    }else{
        console.log('Rename complete');
    }
});