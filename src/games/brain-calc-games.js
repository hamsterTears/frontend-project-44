/* eslint-disable consistent-return */
import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const calculate = (num1, operator, num2) => {
  let result;
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
  } return result;
};

const getTask = () => {
  const randomCount1 = getRandomNumber(0, 50);
  const randomCount2 = getRandomNumber(0, 50);
  const arr = ['+', '-', '*'];
  const randomOperator = arr[Math.floor(Math.random() * arr.length)];
  const task = (`Question: ${randomCount1} ${randomOperator} ${randomCount2}`);
  const expectedAnswer = calculate(randomCount1, randomOperator, randomCount2);
  return [task, expectedAnswer];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runLogicGame(description, getTask);
};

export default startCalcGame;
