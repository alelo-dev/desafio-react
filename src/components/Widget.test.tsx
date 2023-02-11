import React from 'react';
import { render, screen } from '@testing-library/react';
import Widget from './Widget';

describe('<Widget />', () => {
  it('should render the children', () => {
    render(
      <Widget>
        <h1>This is my widget!</h1>
      </Widget>
    );
    expect(screen.getByTestId('Widget')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'This is my widget!'
    );
  });
});
