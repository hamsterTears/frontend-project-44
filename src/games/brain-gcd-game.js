import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const getTask = () => {
  const randomCount1 = getRandomNumber();
  const randomCount2 = getRandomNumber();
  const task = `Question: ${randomCount1} ${randomCount2}`;
  const expectedAnswer = getGcd(randomCount1, randomCount2);
  return [task, expectedAnswer];
};

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runLogicGame(description, getTask);
};

export default gcd;
