import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should render a primary button', () => {
    render(
      <>
        <Button>My Default Button</Button>
        <Button variant="primary">My Button with props</Button>
      </>
    );

    expect(
      screen.getByRole('button', { name: 'My Default Button' })
    ).toHaveClass('primary');
    expect(
      screen.getByRole('button', { name: 'My Button with props' })
    ).toHaveClass('primary');
  });
  it('should render a text button', () => {
    render(<Button variant="text">My Text Button</Button>);

    expect(screen.getByRole('button', { name: 'My Text Button' })).toHaveClass(
      'text'
    );
  });
});
