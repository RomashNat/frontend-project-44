import { getRandomNum, playTemplateGame } from '../index.js';

const isPrimeNum = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGeneration = () => {
  const number = getRandomNum(1, 20);
  const correctAnswer = isPrimeNum(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return [correctAnswer, question];
};

const isPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playTemplateGame(rules, getGeneration);
};

export default isPrime;
