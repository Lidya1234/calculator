import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const result = data;
  if (/[0-9]/.test(buttonName)) {
    if (!total && total === '0' && !next && !operation) {
      result.total = buttonName;
    }

    if (total && total !== '0' && !next && !operation) {
      result.total += buttonName;
    }
    if (buttonName === '0' && total === '0') {
      result.total = 0;
    }
    if (total && operation && (!next || next === '0')) {
      result.next = buttonName;
    }
    if (total && operation && next) {
      result.next += buttonName;
    }
  }
  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = operate(total, -1, 'X');
    }
    if (next) {
      result.next = operate(next, -1, 'X');
    }
  }
  if (buttonName === '.') {
    if (!total || total === '0') { result.total = '0.'; }
    if (total && !next && total.indexof('.') === -1) {
      result.total += '.';
    }
    if (next && next.indexof('.') === -1) {
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
  if (buttonName === ('+' || '-' || 'X' || '÷')) {
    if (total && !next) {
      result.operation = buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && next) {
      result.total = operate(total, next, operation);
      result.next = '';
      result.operation = '';
    }
  }
  if (buttonName === 'AC') {
    result.total = undefined;
    result.next = undefined;
    result.operation = undefined;
  }

  return result;
};
export default calculate;
