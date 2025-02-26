// import readlineSync from 'readline-sync';
import { getRandomNum, playTemplateGame} from '../index.js';

const getOperation = () => {
    const operations = ['+', '-', '*'];
    return operations[getRandomNum(0, operations.length - 1)];
}

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
    }
}

const getGeneration = () => {
    const num1 = getRandomNum(1, 20);
    const num2 = getRandomNum(1, 20);
    const operation = getOperation();
    const correctAnswer = String(calculateResult(num1, num2, operation));
    const question = `Question: ${num1} ${operation} ${num2}`;
    return [correctAnswer, question];
}
const brainCalc = () => {
    const rules = 'What is the result of the expression?';
    playTemplateGame(rules, getGeneration); 
}


export default brainCalc;