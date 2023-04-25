import { Stack } from "@mui/material"
import TypoGraphy from "../../components/atoms/TypoGraphy"
import theme from "../../theme/theme"
import { MyButton } from "../../components/atoms/Button"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from "styled-components";
import Profile from "../../components/molecules/Profile";
type HeaderComponentProps={
    handleBackClick:()=>void
}
export const HederComponent=({handleBackClick}:HeaderComponentProps)=>{
    const StyleStack=styled(Stack)`
        margin-bottom: 35px;
        margin-left: 5px;
        margin-top: 5px;
    `
    return(
        <StyleStack >
            <Stack flexDirection={"row"} marginBottom='35px' justifyContent={"space-between"} width={'1130px'}>
                    <Stack>
                        <TypoGraphy 
                        variants="heading1" 
                        style={{
                            color:theme.palette.text.primary, 
                            width:'229px',
                            height:'42px'
                        }} 
                        label="New Cash Kick" />
                        <TypoGraphy 
                        variants="body1" 
                        style={{
                            color:theme.palette.text.disabled,
                             width:'338px', 
                             height:'27px'
                        }} 
                        label="Let’s setup a new cash kick to power your Saas" />
                    </Stack>
                    <Stack>
                        <Profile />
                    </Stack>
                </Stack>
            <MyButton 
            sx={{
                fontFamily:'Gilroy', 
                fontStyle:'normal', 
                fontWeight:'600px', 
                fontSize:'16px',
                textTransform:'capitalize',
            }} 
            onClick={()=>{handleBackClick()}} 
            icon={<KeyboardBackspaceIcon/>} 
            width={87} 
            height={31} 
            backgroundColor={theme.palette.secondary.light} 
            color={theme.palette.text.primary} 
            name={"Back"} 
            border={`1px solid ${theme.palette.border?.lowemp}`}/>
        </StyleStack>
    )
}