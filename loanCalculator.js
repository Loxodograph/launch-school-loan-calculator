const READLINE = require('readline-sync');
const MESSAGES = require('./messages.json');
let loopContinue = true;

function prompt(message) {
  console.log(`=> ${MESSAGES[message]}`);
}

function invalidLoanNumber(number) {
  number = parseFloat(number);
  return Number.isNaN(Number(number)) || parseFloat(number) <= 0;
}
function invalidNumber(number) {
  number = parseFloat(number);
  return Number.isNaN(Number(number)) || parseFloat(number) < 0;
} //checks if input number is empty, not a number, or less than zero

prompt('greetingBanner');
prompt('greeting');
prompt('greetingBanner');
prompt('emptyLine');

//calculator loop
while (loopContinue) {
  prompt('loanAmount');

  let loanAmountValue = READLINE.question("=> ");

  while (invalidLoanNumber(loanAmountValue)) {
    prompt('invalidNumber');
    prompt('loanAmount');
    loanAmountValue = READLINE.question("=> ");
  }

  prompt('APRrequest');
  let APRValue = READLINE.question("=> ");

  while (invalidNumber(APRValue)) {
    prompt('invalidNumber');
    prompt('APRrequest');
    APRValue = READLINE.question("=> ");
  }

  let APRPercentage = APRValue / 100
  let monthlyInterestRate = APRPercentage / 12

  prompt('loanDuration');
  let loanDuration = READLINE.question("=> ");

  if(loanDuration.includes("years")) {
    loanDuration 
  }

  while (invalidNumber(loanDuration)) {
    prompt('invalidNumber');
    prompt('loanDuration');
    APRValue = READLINE.question("=> ");
  }

  let monthlyPayment = loanAmountValue * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  prompt('monthlyPayment');
  console.log(`=> $${monthlyPayment.toFixed(2)}`);

  prompt("continue");
  let answer = READLINE.question("=> ");

  if (answer[0].toLowerCase() !== 'y') {
    prompt("goodbye");
    loopContinue = false;
  }
}