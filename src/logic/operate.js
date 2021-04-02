import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const number1 = Big(+numberOne);
  const number2 = Big(+numberTwo);
  switch (operation) {
    case '+':
      result = Big(number1 + number2);
      break;
    case '-':
      result = Big(number1 - number2);
      break;
    case 'X':
      result = Big(number1 * number2);
      break;
    case '÷':
      result = Big(number1 / number2);
      break;
    case '%':
      result = `${Big(number1 / 100)}%`;
      break;
    default:
      result = '0';
  }
  return result.toPrecision().toString();
};
export default operate;
