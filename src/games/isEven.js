import readlineSync from 'readline-sync';
import { getRandomNum } from '../index.js';

const isEven = (number) => {
    return number % 2 === 0;
}

const playGame = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let correctAnswers  = 0; correctAnswers < 3; correctAnswers ++) {
        const number = getRandomNum(1, 50);
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log("Correct!");

    }
    console.log(`Congratulations, ${name}!`);
}
export default playGame;