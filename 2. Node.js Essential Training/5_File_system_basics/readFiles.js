const fs = require('fs');

// read a image
function imageRead(err, image) {
    if (err) {
        console.log(`An error has occurred ${err}`);
    }
    console.log(image);
}

fs.readFile('./assets/images/escudo-bsc-parallax.png', imageRead);