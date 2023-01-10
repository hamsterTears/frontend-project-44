import logicGame from '../index.js';

const getTask = () => {
  const randomCount = Math.floor(Math.random() * 100) + 1;
  const task = (`Question: ${randomCount}`);
  if (((randomCount > 1) && (randomCount % randomCount === 0))
  && ((randomCount % 2 !== 0) || (randomCount === 2))) {
    const expectedAnswer = 'yes';
    return [task, expectedAnswer];
  } if ((randomCount % 2 === 0) && (randomCount !== 2)) {
    const expectedAnswer = 'no';
    return [task, expectedAnswer];
  } return task;
};

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  logicGame(description, getTask);
};

export default isPrime;
