import readlineSync from 'readline-sync';
import greeting from './cli.js';

const logicGame = (description, getAnswer) => {
  console.log(description);
  let correctAnswers = 0;
  const name = greeting;
  while (correctAnswers < 3) {
    const expectedAnswer = getAnswer();
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (String(answer) === String(expectedAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`"Let's try again, ${name}!"`);
      return correctAnswers === 3;
    }
  } return console.log(`'Congratulations, ${name}!'`);
};
export default logicGame;
