
import { render, fireEvent, screen } from '@testing-library/react';
import ModalBox from "./index";

describe('ModalBox', () => {
   const props = {
    heading :"Name your cash kick",
    subHeading : "Add a name to identify your cash kick",
    TextFieldLabel :"Cash kick name",
    CancelButtonLabel : "Cancel",
    ClickButtonLabel : "Create cash kick",
  };
  test('renders ModalBox component', () => {
  render(<ModalBox TextfieldLabel={''} Cancelbuttonlabel={''} Clickbuttonlabel={''} isOpen={false} {...props} />);
  });

  test('does not display Modal component when isOpen is false', () => {
  const { queryByRole } = render(<ModalBox TextfieldLabel={''} Cancelbuttonlabel={''} Clickbuttonlabel={''} isOpen={false} {...props} />);
  const modalElement = queryByRole('dialog');
  expect(modalElement).toBeNull();
  });

  test('displays heading and subheading correctly', () => {
  const heading = 'Test Heading';
  const subHeading = 'Test Subheading';
  const { getByText } = render(<ModalBox TextfieldLabel={''} Cancelbuttonlabel={''} Clickbuttonlabel={''} isOpen={true} heading={heading} subHeading={subHeading} />);
  const headingElement = getByText(heading);
  const subHeadingElement = getByText(subHeading);
  expect(headingElement).toBeInTheDocument();
  expect(subHeadingElement).toBeInTheDocument();
  });
  
  
test('displays Cancel and Click buttons and onClick props are being called', () => {
  const cancelButtonLabel = 'Test Cancel Button Label';
  const clickButtonLabel = 'Test Click Button Label';
  const onCloseMock = jest.fn();
  const onClickMock = jest.fn();
  const { getByText } = render(<ModalBox isOpen={true} Cancelbuttonlabel={cancelButtonLabel} Clickbuttonlabel={clickButtonLabel} onClose={onCloseMock} onClick={onClickMock} heading={''} subHeading={''} TextfieldLabel={''} />);
  const cancelButtonElement = getByText(cancelButtonLabel);
  const clickButtonElement = getByText(clickButtonLabel);
  fireEvent.click(cancelButtonElement);
  fireEvent.click(clickButtonElement);
  expect(cancelButtonElement).toBeInTheDocument();
  expect(clickButtonElement).toBeInTheDocument();
  expect(onCloseMock).toHaveBeenCalled();
  expect(onClickMock).toHaveBeenCalled();
});
});




