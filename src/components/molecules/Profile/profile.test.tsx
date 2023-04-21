import { render, screen } from '@testing-library/react';
import Profile from './index';

describe('Profile component', () => {
  it('renders avatar and dropdown', () => {
    render(<Profile />);
    const avatarElement = screen.getByRole('img', { name: /avatar/i });
    expect(avatarElement).toBeInTheDocument();

    const dropdownElement = screen.getByRole('button', { name: /dropdown/i });
    expect(dropdownElement).toBeInTheDocument();
  });
});
