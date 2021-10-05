const fs = require('fs');

var fileExist = fs.existsSync('new_folder');

if (fileExist) {
    console.log('Directorio ya existe');
} else {
    fs.mkdir('new_folder', (err)=>{
        if (err) {
            throw err;
        }
        console.log('Directoy created');
    });
}
