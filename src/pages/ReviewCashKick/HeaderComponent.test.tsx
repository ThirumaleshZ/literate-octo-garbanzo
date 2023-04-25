import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { HederComponent } from './HeaderComponent';
import { MyButton } from '../../components/atoms/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Profile from '../../components/molecules/Profile';

describe('HeaderComponent', () => {
  it('should render HeaderComponent with props', () => {
    const handleBackClick = jest.fn();
    render(<HederComponent handleBackClick={handleBackClick} />);
    expect(screen.getByText('New Cash Kick')).toBeInTheDocument();
    expect(screen.getByText('Let’s setup a new cash kick to power your Saas')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
  });

  it('renders the "Back" button correctly and calls the correct function', () => {
    const setResourceTypeMock = jest.fn();
    render(
      <MyButton
        sx={{
                fontFamily:'Gilroy', 
                fontStyle:'normal', 
                fontWeight:'600px', 
                fontSize:'16px',
                textTransform:'capitalize',
            }} 
            onClick={()=>setResourceTypeMock()} 
            icon={<KeyboardBackspaceIcon/>} 
            width={87} 
            height={31} 
            backgroundColor='#201F24' 
            color='#E8E7F0' 
            name={"Back"} 
            border={`1px solid #28272B`}
      />
    );
    const back = screen.getByRole("button", {
      name: /Back/i,
    });
    expect(back).toBeInTheDocument();
    expect(back).toHaveStyle("width: 87px");
    expect(back).toHaveStyle("height: 31px");
    expect(back).toHaveStyle("background-color: #201F24");
    expect(back).toHaveStyle("border: 1px solid #28272B");
    expect(back).toHaveStyle("border-radius: 12px");
    fireEvent.click(back);
    expect(setResourceTypeMock).toHaveBeenCalledTimes(1);
  });
});

