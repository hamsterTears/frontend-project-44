/* eslint-disable no-redeclare */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const greeting = (userName) => {
  // eslint-disable-next-line no-var
  var userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;
