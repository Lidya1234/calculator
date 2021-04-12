import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  switch (operation) {
    case '+':
      result = Big(number1.plus(number2));
      break;
    case '-':
      result = Big(number1.minus(number2));
      break;
    case 'X':
      result = Big(number1.times(number2));
      break;
    case '÷':
      result = Big(number1.div(number2));
      break;
    case '%':
      result = `${Big(number1.div(100))}%`;
      break;
    default:
      result = '0';
  }
  return result.toPrecision().toString();
};
export default operate;
