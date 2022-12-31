// eslint-disable-next-line no-unused-vars
import readlineSync, { question } from 'readline-sync';
import greeting from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export default function gameLogic(expectedAnswer) {
  // eslint-disable-next-line no-unused-expressions
  greeting;
  // eslint-disable-next-line no-undef
  let correctAnswers = 0;
  const name = greeting;

  //   while (correctAnswers < 3) {
  // eslint-disable-next-line no-unused-expressions
  const answer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-undef
  if (Number(answer) === expectedAnswer) {
    console.log('Correct!');
    correctAnswers += 1; {
      if (correctAnswers === 3) {
        console.log(`'Congratulations, ${name}!'`);
      } else { return true; }
    }
  } else {
    // eslint-disable-next-line no-undef
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`"Let's try again, ${name}!"`);
  }
};
gameLogic(expectedAnswer);
//   } if (correctAnswers === 3) {
//     console.log(`'Congratulations, ${name}!'`);
//   }
// }
