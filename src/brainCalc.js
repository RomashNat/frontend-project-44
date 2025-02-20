import readlineSync from 'readline-sync';

const brainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    const getRandomNum = (min, max) => {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getOperation = () => {
        const operations = ['+', '-', '*'];
        return operations[0, operations.length - 1];
    }
   
    for (let i = 0; i < 3; i++) {
 

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
}


export default brainCalc;