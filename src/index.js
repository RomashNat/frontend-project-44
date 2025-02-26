import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const playTemplateGame = (rules, getGeneration, isCheck) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(rules);

    for (let correctAnswers = 0; correctAnswers < 3; correctAnswers++) {
        const [correctAnswer, question] = getGeneration();
        console.log(question);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseInt(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log("Correct!");
    }
    console.log(`Congratulations, ${name}!`);
}

export { getRandomNum, playTemplateGame };