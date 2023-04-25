import { render, screen } from '@testing-library/react';
import Slide from './index';


test('renders the slider with the correct props', () => {
  const value = 50;
  const maxValue = 100;


  render(<Slide value={value} maxValue={maxValue} 
    onChange={ () => "0" } 
    />);

  const sliderElement = screen.getByRole('slider');
  expect(sliderElement).toBeInTheDocument();

  expect(sliderElement).toHaveAttribute('aria-valuenow', String(value));
  expect(sliderElement).toHaveAttribute('aria-valuemax', String(maxValue));
});
