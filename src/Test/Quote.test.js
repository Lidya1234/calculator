import React from 'react';
import { render } from '@testing-library/react';

import Quote from '../components/Quote';
import '@testing-library/jest-dom/extend-expect';

describe('Home has ', () => {
  it('Title of math Quotes', () => {
    const { getByText } = render(<Quote />);
    const title = getByText('Quote Of The Day');
    expect(title).toBeInTheDocument();
  });
  it('same content with the snapshot', () => {
    const { getByText } = render(<Quote />);
    const title = getByText('Quote Of The Day');
    expect(title).toMatchSnapshot();
  });
});
