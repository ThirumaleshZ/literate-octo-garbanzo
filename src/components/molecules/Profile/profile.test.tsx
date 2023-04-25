import { render, screen } from '@testing-library/react';
import Profile from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Profile component', () => {
  test('renders Profile component', () => {
    render(
      <BrowserRouter>
      <Profile></Profile>
      </BrowserRouter>
      );

    const profileElement = screen.getByTestId('profileComponent');
    expect(profileElement).toBeInTheDocument();
  })
  
});
