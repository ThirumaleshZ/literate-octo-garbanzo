import { Card, Stack, Box } from '@mui/material'
import { MyButton } from '../../atoms/Button/index'
import TypoGraphy from '../../atoms/TypoGraphy';
import animatedGif from '../../../../public/assets/images/Animation_seeder.gif'

export interface CashKickModalBoxProps {
  heading: string;
  subHeading: string;
  TextfieldLabel: string;
  bodytext: string;
  Cancelbuttonlabel: string;
  Clickbuttonlabel: string;
  isOpen: boolean; 
  onClose?: () => void; 
  handleViewCash?:()=>void;
}

const CashKickModalBox = ({ heading, subHeading, TextfieldLabel, bodytext, Cancelbuttonlabel, Clickbuttonlabel, isOpen, onClose, handleViewCash }: CashKickModalBoxProps) => {
  return (
    <>
      {isOpen && ( 
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          <Card
            sx={{
              backgroundColor: 'grey.100',
              width: '640px',
              height: '584px',
              paddingX: '30px',
              paddingY: '30px',
              borderRadius: '12px'
            }}
          >
            <Stack direction="column" spacing={4}>
              <Stack direction="column" alignItems="left">
                <TypoGraphy label={heading} variants="heading1" />
                <TypoGraphy label={subHeading} variants="heading3" />
              </Stack>
              <Box sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}>
                <img src={animatedGif} alt="Progress bar" width={172} height={172} />
              </Box>
              <Stack spacing={2} paddingY={2} sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}>
                <TypoGraphy label={TextfieldLabel} variants="heading2" />
                <TypoGraphy label={bodytext} variants="body1" />
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="right" paddingY={2}>
                <MyButton name={Cancelbuttonlabel} variant="contained" width={133} height={60} backgroundColor='#2D2D30' onClick={onClose} />
                <MyButton name={Clickbuttonlabel} variant="contained" width={208} height={60} backgroundColor='#6C5DD3' onClick={handleViewCash} />
              </Stack>
            </Stack>
          </Card>
        </Box>
      )}
    </>
  )
}

export default CashKickModalBox;