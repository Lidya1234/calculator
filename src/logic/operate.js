import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = Big(numberOne + numberTwo);
      break;
    case '-':
      result = Big(numberOne - numberTwo);
      break;
    case 'X':
      result = Big(numberOne * numberTwo);
      break;
    case '÷':
      result = Big(numberOne / numberTwo);
      break;
    case '%':
      result = `${Big(numberOne / 100)}%`;
      break;
    default:
      result = '0';
  }
  return result;
};
export default operate;
