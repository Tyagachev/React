import {render, screen } from '@testing-library/react';
import { Message } from './Message';

describe('Massage', ()=> {
    it('render Massage component', ()=> {
        render(<Message/>)
        screen.debug();
        expect(screen.getByText(/текст/)).toBeInTheDocument();
    });
});