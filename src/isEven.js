import readlineSync from 'readline-sync';
const isEven = (number) => {
    return number % 2 === 0;
}

const playGame = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May I have your name?");
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    for (let i = 0; correctAnswers < 3; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        const userAnswer = readlineSync.question(`Question: ${number}\nYour answer:`);

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log("Correct!");
        correctAnswers++;

    }
    console.log(`Congratulations, ${name}!`);
}
export default playGame;