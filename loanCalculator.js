const READLINE = require('readline-sync');
const MESSAGES = require('./messages.json');

function prompt(message) {
  console.log(`=> ${MESSAGES[message]}`);
}

function invalidNumber(number) {
  number = parseFloat(number);
  return Number.isNaN(Number(number)) || parseFloat(number) <= 0;
} //checks if input number is empty, not a number, or less than zero

prompt('greeting');

//calculator loop
while (true) {
  prompt('loanAmount');

  let loanAmountValue = READLINE.question();

  while (invalidNumber(loanAmountValue)) {
    prompt('invalidNumber');
    prompt('loanAmount');
    loanAmountValue = READLINE.question();
  }

  prompt('APRrequest');
  let APRValue = READLINE.question();

  while (invalidNumber(APRValue)) {
    prompt('invalidNumber');
    prompt('APRrequest');
    APRValue = READLINE.question();
  }

  let APRPercentage = APRValue / 100
  let monthlyInterestRate = APRPercentage / 12

  prompt('loanDuration');
  let loanDuration = READLINE.question();

  while (invalidNumber(loanDuration)) {
    prompt('invalidNumber');
    prompt('loanDuration');
    APRValue = READLINE.question();
  }

  let monthlyPayment = loanAmountValue * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  prompt('monthlyPayment');
  console.log(`=> $${monthlyPayment.toFixed(2)}`);

  prompt("continue");
  let answer = READLINE.question();

  if (answer[0].toLowerCase() !== 'y') {
    console.log("=> Goodbye")
    break;
  }
}