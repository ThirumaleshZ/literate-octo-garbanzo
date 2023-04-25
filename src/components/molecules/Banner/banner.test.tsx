import { render, screen } from '@testing-library/react';
import Banner from '../../../components/molecules/Banner/index';

const headingText = "Congratulations you are ready to start!";
const subheadingText = "You are approved for funding. We are ready to advance you upto $8.8M";
const buttonLabel = "Learn More";


describe('Banner component', () => {
  test('renders the heading text', () => {
    render(<Banner heading={headingText} subHeading="" buttonLabel="" />);
    const heading = screen.getByText(headingText);
    expect(heading).toBeInTheDocument();
  });

  test('renders the subheading text', () => {
    render(<Banner heading="" subHeading={subheadingText} buttonLabel="" />);
    const subheading = screen.getByText(subheadingText);
    expect(subheading).toBeInTheDocument();
  });

  test('renders the button with the correct label', () => {
    render(<Banner heading="" subHeading="" buttonLabel={buttonLabel} />);
    const button = screen.getByRole('button', { name: buttonLabel });
    expect(button).toBeInTheDocument();
  });
});
