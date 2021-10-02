// console global object 
// console.log(__dirname);
// console.log(__filename);

const path = require('path');
// console.log(`The filename is ${path.basename(__filename)}`);



// process global object
// console.log(process.env);
// console.log(process.argv);


//process.argv
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};
const greeting = grab('--greeting');
const name = grab('--name');
console.log(`${name} say: ${greeting}`);
// execute node global.js --greeting Hi --name Eduardo