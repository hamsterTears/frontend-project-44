/* eslint-disable consistent-return */
import logicGame from '../index.js';

const getTask = () => {
  const randomCount1 = Math.floor(Math.random() * 10) + 1;
  const randomCount2 = Math.floor(Math.random() * 10) + 1;
  const arr = ['+', '-', '*'];
  const randomOperator = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Question: ${randomCount1} ${randomOperator} ${randomCount2}`);
  return [randomCount1, randomCount2, randomOperator];
};

const getAnswer = () => {
  const [randomCount1, randomCount2, randomOperator] = getTask();
  if (randomOperator === '+') {
    // eslint-disable-next-line no-unused-vars, no-const-assign
    return (randomCount1 + randomCount2);
  } if (randomOperator === '-') {
    return (randomCount1 - randomCount2);
  } if (randomOperator === '*') {
    return (randomCount1 * randomCount2);
  }
};

const calcGame = () => {
  const description = 'What is the result of the expression?';
  logicGame(description, getAnswer);
};
export default calcGame;

calcGame();
