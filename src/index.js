import readlineSync from 'readline-sync';

export const rounds = 3;

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const playTemplateGame = (rules, getGeneration) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let correctAnswers = 0; correctAnswers < rounds; correctAnswers += 1) {
    const [correctAnswer, question] = getGeneration();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { getRandomNum, playTemplateGame };
