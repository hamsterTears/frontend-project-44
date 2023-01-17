import runLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isCountPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => {
  const randomCount = getRandomNumber();
  const task = (`Question: ${randomCount}`);
  const expectedAnswer = (isCountPrime(randomCount)) ? 'yes' : 'no';
  return [task, expectedAnswer];
};

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runLogicGame(description, getTask);
};

export default isPrime;
