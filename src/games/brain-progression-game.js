import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = () => {
  const randomCount1 = getRandomNumber(0, 10);
  const randomCount2 = getRandomNumber(0, 10);
  let start = randomCount1;
  const arr = [];
  for (let i = 0; i < 8; i += 1) {
    start += randomCount2;
    arr.push(start);
  } return arr;
};

const getTask = () => {
  const progression = getProgression();
  const indexOfHiddenCount = Math.floor(Math.random() * 8);
  const expectedAnswer = progression[indexOfHiddenCount];
  progression[indexOfHiddenCount] = '..';
  const task = `Question: ${progression.join(' ')}`;
  return [task, expectedAnswer];
};

const progression = () => {
  const description = 'What number is missing in the progression?';
  runLogicGame(description, getTask);
};

export default progression;
