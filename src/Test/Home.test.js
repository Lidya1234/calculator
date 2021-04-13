import React from 'react';
import { render } from '@testing-library/react';

import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home has ', () => {
  it('Title of math Quotes', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Math Quotes');
    expect(title).toBeInTheDocument();
  });
  it('same content with the snapshot', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Math Quotes');
    expect(title).toMatchSnapshot();
  });
});
