import logicGame from '../index.js';

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const getTask = () => {
  const randomCount1 = Math.floor(Math.random() * 10) + 1;
  const randomCount2 = Math.floor(Math.random() * 10) + 1;
  const task = `Question: ${randomCount1} ${randomCount2}`;
  const expectedAnswer = getGcd(randomCount1, randomCount2);
  return [task, expectedAnswer];
};

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  logicGame(description, getTask);
};

export default gcd;

gcd();
