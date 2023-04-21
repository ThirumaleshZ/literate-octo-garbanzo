import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MyButton } from '.';

describe('MyButton', () => {
    it('renders the button with the correct text', () => {
        render(<MyButton name="Test Button" width={278} height={60} />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
      });

  it('renders with a specified variant', () => {
    render(<MyButton name="Test Button" variant="outlined" width={278} height={60} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('MuiButton-outlined');
  });

  it('styles the button with the correct width and height', () => {
    render(<MyButton name="Test Button" width={100} height={50} />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('width: 100px');
    expect(button).toHaveStyle('height: 50px');
  });

  it('calls a onClick function when button clicked', () => {
    const onClick = jest.fn();
    render(<MyButton name="Test Button" onClick={onClick} width={278} height={60} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
