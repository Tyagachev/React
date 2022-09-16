import { render, screen } from '@testing-library/react';
import { Message } from './Message';

describe('Massage', () => {
  it('render Massage component', () => {
    render(<Message />);
    const textEl = screen.getByText(/текст/);
    expect(textEl).toBeInTheDocument();
  });
});
