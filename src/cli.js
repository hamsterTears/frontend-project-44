import readlineSync from 'readline-sync';

 const greeting = (userName)=> {
    var userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
 }


export default greeting;

