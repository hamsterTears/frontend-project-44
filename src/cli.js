import readlineSync from 'readline-sync';

const greeting = () => {
  // eslint-disable-next-line no-var, no-redeclare
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greeting();
