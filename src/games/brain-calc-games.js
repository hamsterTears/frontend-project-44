/* eslint-disable consistent-return */
import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error(' error !');
  }
};

const getTask = () => {
  const randomCount1 = getRandomNumber(0, 50);
  const randomCount2 = getRandomNumber(0, 50);
  const arr = ['+', '-', '*'];
  const randomOperator = arr[getRandomNumber(0, 2)];
  const task = (`Question: ${randomCount1} ${randomOperator} ${randomCount2}`);
  const expectedAnswer = calculate(randomCount1, randomOperator, randomCount2);
  return [task, expectedAnswer];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runLogicGame(description, getTask);
};

export default startCalcGame;
