/* eslint-disable consistent-return */
import logicGame from '../index.js';

const getAnswer = () => {
  const randomCount = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomCount}`);
  if (randomCount % 2 === 0) {
    return 'yes';
  } if (randomCount % 2 !== 0) {
    return 'no';
  }
};

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  logicGame(description, getAnswer);
};

export default evenGame;
evenGame();
