const readline = require('readline');

const questions = [
    '¿Nombre? ',
    '¿Edad? ',
    '¿Genero? ',
    '¿Pais? ',
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const collectAnswers = (questions, done)=>{
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = (answer)=>{
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered);
};

function finish(answers) {
    console.log('Thanks for the answers');
    console.log(answers);
    process.exit();
}

collectAnswers(questions, finish);

