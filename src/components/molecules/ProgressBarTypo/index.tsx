import { Box, Stack} from "@mui/material"
import TypoGraphy from "../../atoms/TypoGraphy"
import styled, { ThemeProvider } from "styled-components"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import theme from "../../../theme/theme";
import { ProgressBar } from "../../atoms/ProgressBar";
type ProgressBarWithTypoProps={
    headText:string,
    bodyText:string,
    headTypographyVariant:"heading1"|"heading2"|"heading3"|"button1"|"button2",
    bodyTypographyVariant:"body1"|"body2"|"caption"|"title",
    percentage:number
    boxWidth:number
    boxHeight:number
}
export const ProgressBarWithTypo=({
        headText,
        bodyText,
        bodyTypographyVariant,
        percentage,
        boxWidth,
        boxHeight
        }:ProgressBarWithTypoProps)=>{

        const StyleBox=styled(Box)`
        background: #201F24;
        border: 1px solid #28272B;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: flex-start;
        padding: 32px;
        gap: 12px;
        width: ${boxWidth}px;
        height: ${boxHeight}px;
       `;

        const StyleInfoIcon=styled(InfoOutlinedIcon)`
            color: #727080;
        `;

    return(
        <ThemeProvider theme={theme}>
            <StyleBox>
                <ProgressBar percentage={percentage} />
                <Stack marginTop='24px' width='178px' height='34px'>
                    <Stack direction="row" gap={2} >
                        <TypoGraphy style={{color:theme.palette.text.secondary}} variants={bodyTypographyVariant} label={bodyText} />
                        <StyleInfoIcon/>
                    </Stack>
                    <TypoGraphy style={{color:theme.palette.text.primary}} label={headText} />
                </Stack>
            </StyleBox>
        </ThemeProvider>
    )
}