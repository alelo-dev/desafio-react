import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('<Loading />', () => {
  it('should render the loading', () => {
    render(<Loading />);
    expect(screen.getByTestId('Loading')).toBeInTheDocument();
  });
});
