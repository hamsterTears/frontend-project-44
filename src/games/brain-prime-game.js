/* eslint-disable consistent-return */
import logicGame from '../index.js';

const getAnswer = () => {
  const randomCount = Math.floor(Math.random() * 100) + 1;
  console.log(`Question:${randomCount}`);
  if (((randomCount > 1) && (randomCount % randomCount === 0))
  && ((randomCount % 2 !== 0) || (randomCount === 2))) {
    return 'yes';
  } if ((randomCount % 2 === 0) && (randomCount !== 2)) {
    return 'no';
  }
};

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  logicGame(description, getAnswer);
};
isPrime();
export default isPrime;
