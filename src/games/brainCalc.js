import readlineSync from 'readline-sync';
import { getRandomNum, getOperation, calculateResult } from '../index.js';

const brainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    for (let correctAnswer = 0; correctAnswer < 3; correctAnswer++) {

        const num1 = getRandomNum(1, 20);
        const num2 = getRandomNum(1, 20);
        const operation = getOperation();
        const correctAnswer = calculateResult(num1, num2, operation);
        const userAnswer = readlineSync.question(`Question: ${num1} ${operation} ${num2}\nYour answer: `);

        if (parseInt(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log("Correct!");
    }
    console.log(`Congratulations, ${name}!`);
}


export default brainCalc;