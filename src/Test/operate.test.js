import operate from '../logic/operate';
import '@testing-library/jest-dom/extend-expect';

describe('check if operate', () => {
  test('performs addition of two given numbers', () => {
    const result = operate('2', '5', '+');
    expect(result).toEqual('7');
  });
  test('performs subtraction of two given numbers', () => {
    const result = operate('5', '2', '-');
    expect(result).toEqual('3');
  });
  test('performs multiplication of two given numbers', () => {
    const result = operate('2', '5', 'X');
    expect(result).toEqual('10');
  });
  test('performs division of two given numbers', () => {
    const result = operate('4', '2', '÷');
    expect(result).toEqual('2');
  });
});
