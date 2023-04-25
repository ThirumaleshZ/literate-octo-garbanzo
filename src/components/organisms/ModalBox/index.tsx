import { Card, Stack, Modal } from '@mui/material';
import { MyButton } from '../../atoms/Button/index';
import TextField from '../../atoms/TextField/index';
import TypoGraphy from '../../atoms/TypoGraphy';

export interface ModalBoxProps {
  heading: string;
  subHeading: string;
  TextfieldLabel: string;
  Cancelbuttonlabel: string;
  Clickbuttonlabel: string;
  isOpen: boolean; 
  onClose?: () => void; 
  onClick?: ()=>void;
  handleChange?:(e:any)=>void;   
  value?:string;  
}

const ModalBox = ({
    heading,
    subHeading,
    TextfieldLabel,
    Cancelbuttonlabel,
    Clickbuttonlabel,
    isOpen,
    value,
  onClose,
onClick,
handleChange }: ModalBoxProps) => {
  
  return (
    <>
      {isOpen && ( 
      <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
        }}
>
   <Card
          sx={{
          backgroundColor: 'grey.100',
          width: '640px',
          height: '360px',
          paddingX: '30px',
          paddingY: '30px',
          borderRadius: '12px',
      }}
>
    <Stack direction="column" spacing={8}>
    <Stack direction="column" alignItems="left">
    <TypoGraphy label={heading} variants="heading1" />
    <TypoGraphy label={subHeading} variants="heading3" />
    </Stack>
    <Stack>
    <TypoGraphy label={TextfieldLabel} variants="body1" />
    <TextField
        placeholder="Ex: marketing expenses"
        name='cashKick'
        handleChange={handleChange}
        value={value}
        sx={{
        backgroundColor: '#3A3A3D',
        borderRadius: '12px',
    }}
/>
  </Stack>
  <Stack direction="row" spacing={2} justifyContent="right">
  <MyButton
        name={Cancelbuttonlabel}
        variant="contained"
        width={133}
        height={60}
        onClick={onClose}
        backgroundColor="#2D2D30"
        sx={{textTransform:'none'}}
             />
      <MyButton
        name={Clickbuttonlabel}
        variant="contained"
        width={208}
        height={60}
        backgroundColor="#6C5DD3"
        onClick={onClick}
        sx={{textTransform:'none'}}
             />
    </Stack>
    </Stack>
    </Card>
    </Modal>
)}
  </>
  );
};

export default ModalBox;