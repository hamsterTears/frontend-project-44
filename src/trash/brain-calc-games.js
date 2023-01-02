/* eslint-disable import/no-unresolved */
import logicGame from './index.js';

const getTask = () => {
  const randomCount1 = Math.floor(Math.random() * 10) + 1;
  const randomCount2 = Math.floor(Math.random() * 10) + 1;
  const arr = ['+', '-', '*'];
  const randomOperator = arr[Math.floor(Math.random() * arr.length)];
  const task = `${randomCount1}${randomOperator}${randomCount2}`;
  let expectedAnswer = 0;
  if (randomOperator === '+') {
    // eslint-disable-next-line no-unused-vars, no-const-assign
    expectedAnswer = (randomCount1 + randomCount2);
  } if (randomOperator === '-') {
    expectedAnswer = (randomCount1 - randomCount2);
  } if (randomOperator === '*') {
    expectedAnswer = (randomCount1 * randomCount2);
  } return [task, expectedAnswer];
};

const calcGame = () => {
  const description = 'What is the result of the expression?';
  logicGame(description, getTask);
};
export default calcGame;

calcGame();

//     const answer = readlineSync.question('Your answer: ');
//     // eslint-disable-next-line no-undef
//     if (Number(answer) === expectedAnswer) {
//       console.log('Correct!');
//       correctAnswers += 1;
//     } else {
//       // eslint-disable-next-line no-undef
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
//       console.log(`Let's try again, ${name}!`);
//       break;
//     }
//   } if (correctAnswers === 3) {
//     console.log(`Congratulations, ${name}!`);
//   }
