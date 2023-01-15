/* eslint-disable consistent-return */
import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getTask = () => {
  const randomCount1 = getRandomNumber();
  const randomCount2 = getRandomNumber();
  const arr = ['+', '-', '*'];
  const randomOperator = arr[Math.floor(Math.random() * arr.length)];
  const task = (`Question: ${randomCount1} ${randomOperator} ${randomCount2}`);
  if (randomOperator === '+') {
    // eslint-disable-next-line no-unused-vars, no-const-assign
    const expectedAnswer = (randomCount1 + randomCount2);
    return [task, expectedAnswer];
  } if (randomOperator === '-') {
    const expectedAnswer = (randomCount1 - randomCount2);
    return [task, expectedAnswer];
  } if (randomOperator === '*') {
    const expectedAnswer = (randomCount1 * randomCount2);
    return [task, expectedAnswer];
  }
};

// const getAnswer = () => {

//   const [randomCount1, randomCount2, randomOperator] = getTask();
//   if (randomOperator === '+') {
//     // eslint-disable-next-line no-unused-vars, no-const-assign
//     const expectedAnswer = (randomCount1 + randomCount2);
//     console.log(expectedAnswer);
//     return expectedAnswer;
//   } if (randomOperator === '-') {
//     const expectedAnswer = (randomCount1 - randomCount2);
//     console.log(expectedAnswer);
//     return expectedAnswer;
//   } if (randomOperator === '*') {
//     const expectedAnswer = (randomCount1 * randomCount2);
//     console.log(expectedAnswer);
//     return expectedAnswer;
//   }
// };

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runLogicGame(description, getTask);
};

export default startCalcGame;
