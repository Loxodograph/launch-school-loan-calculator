const READLINE = require('readline-sync');
const MESSAGES = require('./messages.json')

function prompt(message) {
  console.log(`=> ${MESSAGES[message]}`);
}

function invalidLoanNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number)) || parseFloat(number) <= 0;
} //checks if input number is empty, not a number, or less than zero

prompt('greeting');

prompt('loanAmount');

let loanAmountValue = READLINE.question();

while(invalidLoanNumber(loanAmountValue)){
  prompt('invalidNumber');
  loanAmountValue = READLINE.question();
}


