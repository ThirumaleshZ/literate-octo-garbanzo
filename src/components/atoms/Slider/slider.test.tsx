import { render, screen } from '@testing-library/react';
import Slide from './index';


test('renders the slider with the correct props', () => {
  const value = 50;
  const maxValue = 100;


  render(<Slide value={value} maxValue={maxValue} onChange={function (value: number): string {
    throw new Error('Function not implemented.');
  } } onSliderChange={function (e: any): void | undefined {
    throw new Error('Function not implemented.');
  } }  />);

  const sliderElement = screen.getByRole('slider');
  expect(sliderElement).toBeInTheDocument();

  expect(sliderElement).toHaveAttribute('aria-valuenow', String(value));
  expect(sliderElement).toHaveAttribute('aria-valuemax', String(maxValue));
});
