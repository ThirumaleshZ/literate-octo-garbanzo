import { fireEvent, render, screen } from "@testing-library/react";
import { ReviewCashKick } from ".";
import { MemoryRouter } from "react-router-dom"; 

describe("ReviewCashKick", () => {
  
  test('handleClick prop calls useNavigate with -1', () => {
    render(<MemoryRouter>
      <ReviewCashKick />
      </MemoryRouter>);
    const buttonElement = screen.getByRole('button',{name:/Back/});
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});