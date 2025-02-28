import { getRandomNum, playTemplateGame } from '../index.js';

const gcdResult = (num1, num2) => {
    if (num1 === num2) {
        return num1;
    }
    if (num1 > num2) {
        return gcdResult(num1 - num2, num2);
    }
    return gcdResult(num1, num2 - num1);
}

const getGeneration = () => {
    const num1 = getRandomNum(1, 50);
    const num2 = getRandomNum(1, 50);
    const correctAnswer = String(gcdResult(num1, num2));
    const question = `Question: ${num1} ${num2}`;
    return [correctAnswer, question];
}

const brainGcd = () => {
    const rules = 'Find the greatest common divisor of given numbers.';
    playTemplateGame(rules, getGeneration);
}

export default brainGcd;