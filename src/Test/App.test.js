import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect';

describe('Check if', () => {
  test('it renders AC button link', () => {
    const { getByText } = render(<App />);
    const link = getByText(/AC/i);
    expect(link).toBeInTheDocument();
  });

  test('it renders X button link', () => {
    const { getByText } = render(<App />);
    const link = getByText(/X/i);
    expect(link).toBeInTheDocument();
  });
  test('it renders % button link', () => {
    const { getByText } = render(<App />);
    const link = getByText(/%/i);
    expect(link).toBeInTheDocument();
  });
  test('it renders = button link', () => {
    const { getByText } = render(<App />);
    const link = getByText(/=/i);
    expect(link).toBeInTheDocument();
  });
});
