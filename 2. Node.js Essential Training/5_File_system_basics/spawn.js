const cp = require('child_process');

const questionApp = cp.spawn('node', ["../4_Node_Modules/questions.js"]);

questionApp.stdin.write('Oscar \n');
questionApp.stdin.write('25 \n');
questionApp.stdin.write('M \n');
questionApp.stdin.write('Ecuador \n');

questionApp.stdout.on('data', (data)=>{
    console.log(`questionApp: ${data}`);
});

questionApp.on("close", ()=>{
    console.log("questionaApp closed");
});