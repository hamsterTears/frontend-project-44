import logicGame from '../index.js';

const getProgression = () => {
  const randomCount1 = Math.floor(Math.random() * 10) + 1;
  const randomCount2 = Math.floor(Math.random() * 10) + 1;
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
  logicGame(description, getTask);
};

export default progression;
