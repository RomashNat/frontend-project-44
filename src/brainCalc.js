import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 const getOperation = () => {
     const operations = ['+', '-', '*'];
     return operations[0, operations.length - 1];
 }

const brainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    let correctAnswers = 0;
   
    for (let i = 0; correctAnswers < 3; i++) {
        
        const num1 = getRandomNum(1, 10);
        const num2 = getRandomNum(1, 10);
        const operation = getOperation();
        const correctAnswer = `${num1}${operation}${num2}`;
        const userAnswer =  readlineSync.question(`Question: ${num1}${operation}${num2}\nYour answer:`);

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