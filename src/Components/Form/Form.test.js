import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form',()=> {

    it('render component', () => {
        render(<Form/>);
        screen.debug();
    });

    it('render component 1', () => {
        render(<Form />);
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        //userEvent.type(screen.getByRole('textbox'))
    });

    it('renders button with send', () => {
        render(<Form />);
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('button').innerHTML).toBe('Отправить')
    });
    
    

});