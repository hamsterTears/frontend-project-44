/* eslint-disable consistent-return */
import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEven = (randomCount) => {
  if (randomCount % 2 === 0) {
    return true;
  }
  return false;
};

const getTask = () => {
  const randomCount = getRandomNumber();
  const task = `Question: ${randomCount}`;
  const expectedAnswer = (isEven(randomCount)) ? 'yes' : 'no';
  // if (randomCount % 2 === 0) {
  //   const expectedAnswer = 'yes';
  //   return [task, expectedAnswer];
  // } if (randomCount % 2 !== 0) {
  //   const expectedAnswer = 'no';
  return [task, expectedAnswer];
};

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  runLogicGame(description, getTask);
};

export default evenGame;
