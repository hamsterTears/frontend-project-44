/* eslint-disable consistent-return */
import logicGame from '../index.js';

const getTask = () => {
  const randomCount1 = Math.floor(Math.random() * 10) + 1;
  const randomCount2 = Math.floor(Math.random() * 10) + 1;
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

const calcGame = () => {
  const description = 'What is the result of the expression?';
  logicGame(description, getTask);
};
export default calcGame;

calcGame();
