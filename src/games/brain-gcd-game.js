import logicGame from '../index.js';

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const getAnswer = () => {
  const randomCount1 = Math.floor(Math.random() * 10) + 1;
  const randomCount2 = Math.floor(Math.random() * 10) + 1;
  const question = `Question: ${randomCount1} ${randomCount2}`;
  console.log(question);
  const expectedAnswer = getGcd(randomCount1, randomCount2);
  return expectedAnswer;
};

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  logicGame(description, getAnswer);
};
gcd();
export default gcd;
