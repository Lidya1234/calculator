import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const result = data;
  if (/[0-9]/.test(buttonName)) {
    console.log(buttonName);
    if ((total === null || total === '0') && next === null && operation === null) {
      result.total = buttonName;
      console.log(result.total);
    }

    if (total && total !== '0' && next === null && operation === null) {
      result.total += buttonName;
    }
    if (buttonName === '0' && total === '0') {
      result.total = 0;
    }
    if (total && operation && (next === null || next === '0')) {
      result.next = buttonName;
    }
    if (total && operation && next) {
      result.next += buttonName;
    }
  }
  if (buttonName === '+/-') {
    if (total && next === null) {
      result.total = operate(total, -1, 'X');
    }
    if (next) {
      result.next = operate(next, -1, 'X');
    }
  }
  if (buttonName === '.') {
    if (total === null || total === '0') { result.total = '0.'; }
    if (total !== null && next === null && total.indexOf('.') === -1) {
      result.total += '.';
    }
    if (next && next.indexOf('.') === -1) {
      result.next += '.';
    }
  }

  if (buttonName === '%') {
    if (total && !next) {
      result.total = operate(total, 100, '÷');
    }
    if (next) {
      result.next = operate(next, 100, '÷');
    }
  }
  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (total && next === null) {
      result.operation = buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && next) {
      result.total = operate(total, next, operation);
      result.next = null;
      result.operation = null;
    }
  }
  if (buttonName === 'AC') {
    result.total = '0';
    result.next = null;
    result.operation = null;
  }

  return result;
};
export default calculate;
