import {render, screen } from '@testing-library/react';
import CashKickModalBox from './index';


describe('CashKickModalBox', () => {
  const props = {
    heading:'Cash kick launched successfully!',
    subHeading:'We are reviewing your cash kick',
    TextfieldLabel:'Your cash kick is under review',
    bodytext:'It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified.',
    Cancelbuttonlabel:'Close',
    Clickbuttonlabel:'View cash kicks',

    isOpen: true,
  };

  it('renders the modal content when isOpen is true', () => {
    render(<CashKickModalBox {...props} />);
    expect(screen.getByText(props.heading)).toBeInTheDocument();
    expect(screen.getByText(props.subHeading)).toBeInTheDocument();
    expect(screen.getByText(props.TextfieldLabel)).toBeInTheDocument();
    expect(screen.getByText(props.bodytext)).toBeInTheDocument();
    expect(screen.getByText(props.Cancelbuttonlabel)).toBeInTheDocument();
    expect(screen.getByText(props.Clickbuttonlabel)).toBeInTheDocument();
  });

  it('does not render the modal content when isOpen is false', () => {
    render(<CashKickModalBox {...props} isOpen={false} />);
    expect(screen.queryByText(props.heading)).not.toBeInTheDocument();
    expect(screen.queryByText(props.subHeading)).not.toBeInTheDocument();
    expect(screen.queryByText(props.TextfieldLabel)).not.toBeInTheDocument();
    expect(screen.queryByText(props.bodytext)).not.toBeInTheDocument();
    expect(screen.queryByText(props.Cancelbuttonlabel)).not.toBeInTheDocument();
    expect(screen.queryByText(props.Clickbuttonlabel)).not.toBeInTheDocument();
  });

  
});


