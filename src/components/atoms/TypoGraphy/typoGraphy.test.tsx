import TypoGraphy  from "./index";
import { render, screen } from '@testing-library/react'

test('Trying to test first atom', () => {
    render(<TypoGraphy label="Hello" variants="heading1"/>)  
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument();
})