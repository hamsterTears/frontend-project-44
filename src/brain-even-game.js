/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const evenGame = () => {
  let correctAnswers = 0;
  const name = greeting;

  while (correctAnswers < 3) {
    const randomCount = Math.floor(Math.random() * 100) + 1;
    console.log(`Question:${randomCount}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if ((randomCount % 2 === 0 && answer === 'yes') || (randomCount % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomCount % 2 === 0 ? 'yes' : 'no'}'.`);
      console.log(`"Let's try again, ${name}!"`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`'Congratulations, ${name}!'`);
  }
};

export default evenGame();
