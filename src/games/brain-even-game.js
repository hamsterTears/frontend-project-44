/* eslint-disable consistent-return */
import logicGame from '../index.js';

const getTask = () => {
  const randomCount = Math.floor(Math.random() * 100) + 1;
  const task = `Question: ${randomCount}`;
  if (randomCount % 2 === 0) {
    const expectedAnswer = 'yes';
    return [task, expectedAnswer];
  } if (randomCount % 2 !== 0) {
    const expectedAnswer = 'no';
    return [task, expectedAnswer];
  }
};

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  logicGame(description, getTask);
};

export default evenGame;
evenGame();
