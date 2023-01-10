import readlineSync from 'readline-sync';
import greeting from './cli.js';

const logicGame = (description, getTask) => {
  const userName = greeting();
  console.log(description);
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [task, expectedAnswer] = getTask();
    console.log(task);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (String(answer) === String(expectedAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`"Let's try again, ${userName}!"`);
      return correctAnswers === 3;
    }
  } return console.log(`'Congratulations, ${userName}!'`);
};
export default logicGame;
