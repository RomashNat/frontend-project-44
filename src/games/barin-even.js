import { getRandomNum, playTemplateGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const getGeneration = () => {
  const number = getRandomNum(1, 50);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return [correctAnswer, question];
};

const playGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  playTemplateGame(rules, getGeneration);
};

export default playGame;
