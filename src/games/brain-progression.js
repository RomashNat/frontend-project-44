import { getRandomNum, playTemplateGame } from '../index.js';


const createProgression = (first, step, lengthProg) => {
    const progression = [];
    for (let i = 0; i < lengthProg; i++) {
        progression.push(first + i * step);
    }
    return progression;
}

const hideIndex = (progression, index) => {
    const progress = [...progression];
    progress[index] = '..';
    return progress;
}

const getGeneration = () => {
    const first = getRandomNum(0, 20);
    const step = getRandomNum(1, 5);
    const lengthProg = getRandomNum(5, 10);
    const progression = createProgression(first, step, lengthProg);
    const rightIndex = getRandomNum(0, lengthProg - 1);
    const correctAnswer = String(progression[rightIndex]);
    const allProgression = hideIndex(progression, rightIndex);
    const question = `Question: ${allProgression}`;
    return [correctAnswer, question];
}

const brainProgression = () => {
    const rules = 'What number is missing in the progression?';
    playTemplateGame(rules, getGeneration);
}

export default brainProgression;