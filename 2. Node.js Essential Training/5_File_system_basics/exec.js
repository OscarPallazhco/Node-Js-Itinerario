const cp = require('child_process');

// cp.exec("start http://www.linkedin.com");

// cp.exec("start ./exec.js");

cp.exec("dirss", (err, data, stderr)=>{
    // err es el error de ejecutar el exec
    // sdterr es el error de ejecutar el comando, en este caso el "dir"
    if (err) {
        console.log(stderr);
    }
    console.log(stderr);
    console.log(data);
});

