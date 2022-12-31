import readlineSync from 'readline-sync';
import greeting from './cli.js';

console.log('What is the result of the expression?');

const calcGame = () => {
  let correctAnswers = 0;
  const name = greeting;
  let expectedAnswer = 0;

  // eslint-disable-next-line no-unreachable-loop
  while (correctAnswers < 3) {
    const randomCount1 = Math.floor(Math.random() * 10) + 1;
    const randomCount2 = Math.floor(Math.random() * 10) + 1;
    const arr = ['+', '-', '*'];
    const randomOperator = arr[Math.floor(Math.random() * arr.length)];
    console.log(`${randomCount1}${randomOperator}${randomCount2}`);
    if (randomOperator === '+') {
      // eslint-disable-next-line no-unused-vars, no-const-assign
      expectedAnswer = (randomCount1 + randomCount2);
    } else if (randomOperator === '-') {
      // eslint-disable-next-line no-const-assign
      expectedAnswer = (randomCount1 - randomCount2);
    } else if (randomOperator === '*') {
      // eslint-disable-next-line no-const-assign
      expectedAnswer = (randomCount1 * randomCount2);
    }

    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-undef
    if (Number(answer) === expectedAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      // eslint-disable-next-line no-undef
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
calcGame();
export default calcGame;
