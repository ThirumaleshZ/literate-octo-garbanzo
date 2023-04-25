import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextFieldTypography from '../../molecules/TextfieldTypography/index';

describe('TextFieldTypography component', () => {
  it('renders label and placeholder text', () => {
    const label = 'Contact Information';
    const placeholder = 'placeholder text';
    render(<TextFieldTypography value={''} color={''} label={label} placeholder={placeholder} 
      onChange={ () => '0' } variant={'body1'} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const onChange = jest.fn();
    const value = '';
    render(<TextFieldTypography label="Contact Information" placeholder="placeholder text" onChange={onChange} value={value} color={''} variant={'caption'} />);
    const inputElement = screen.getByPlaceholderText('placeholder text');
    const newValue = 'new value';
    userEvent.type(inputElement, newValue);
  });
});
