import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const logicGame = (description, getAnswer) => {
  console.log(description);
  let correctAnswers = 0;
  // eslint-disable-next-line prefer-const
  const name = greeting;
  while (correctAnswers < 3) {
    // const [task, expectedAnswer] = getTask();
    const expectedAnswer = getAnswer();
    // console.log(`Question:${task}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (Number(answer) === expectedAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`"Let's try again, ${name}!"`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`'Congratulations, ${name}!'`);
  }
};
export default logicGame;
