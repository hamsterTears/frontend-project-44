import logicGame from '../index.js';

const getTask = () => {
  const randomCount = Math.floor(Math.random() * 100) + 1;
  const task = (`Question: ${randomCount}`);
  if (randomCount < 2) {
    const expectedAnswer = 'no';
    return [task, expectedAnswer];
  }
  for (let i = 2; i < randomCount; i += 1) {
    if (randomCount % i === 0) {
      const expectedAnswer = 'no';
      return [task, expectedAnswer];
    }
  }

  const expectedAnswer = 'yes';
  return [task, expectedAnswer];
};

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  logicGame(description, getTask);
};

export default isPrime;
