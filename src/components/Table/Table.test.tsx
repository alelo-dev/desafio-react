import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '.';

describe('<Table />', () => {
  it('should render the Table', () => {
    render(
      <Table title="Test table" headers={['One', 'Two']}>
        <tr>
          <td>Body one</td>
          <td>Body two</td>
          <td>action</td>
        </tr>
      </Table>
    );

    expect(
      screen.getByRole('heading', { name: 'Test table' })
    ).toBeInTheDocument();

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table.querySelectorAll('th')).toHaveLength(2);
    expect(table.querySelectorAll('td')).toHaveLength(3);
  });
});
