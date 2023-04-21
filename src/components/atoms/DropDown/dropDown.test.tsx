import { render, screen } from '@testing-library/react'
import Dropdown from './index';

describe('DropdownCheck', () => {
    
     test('render correctly', () => {
        render(<Dropdown/>)
        const DropdownButton = screen.getByRole('button');
        expect(DropdownButton).toBeInTheDocument();
     });
    
})