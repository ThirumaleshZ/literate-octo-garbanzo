import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { HederComponent } from './HeaderComponent';

describe('HeaderComponent', () => {
  it('should render HeaderComponent with props', () => {
    const handleBackClick = jest.fn();
    render(<HederComponent handleBackClick={handleBackClick} />);
    expect(screen.getByText('New Cash Kick')).toBeInTheDocument();
    expect(screen.getByText('Let’s setup a new cash kick to power your Saas')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
  });

  it('should call handleBackClick function when Back button is clicked', () => {
    const handleBackClick = jest.fn();
    render(<HederComponent handleBackClick={handleBackClick} />);
    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);
    expect(handleBackClick).toHaveBeenCalledTimes(1);
  });
});
