import readlineSync from 'readline-sync';
function isEven(number) {
    return number % 2 === 0;
}

function playGame() {
    console.log("brain-even");
    const name = readlineSync.question("Welcome to the Brain Games!\nMay I have your name?");
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const number = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        const userAnswer = readlineSync.question(`Question: ${number}\nYour answer:`);

        if (userAnswer !== 'yes' && userAnswer !== 'no') {
            console.log(`'${userAnswer}' is wrong answer ;(. Let's try again, ${name}!`);
            return;
        }

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${name}!`);
}
export default playGame;