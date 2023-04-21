import { Box } from "@mui/material"
import { MyButton } from "../../atoms/Button"
import TypoGraphy from "../../atoms/TypoGraphy"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../../theme/theme";
type TypoWithButtonProps = {
  boxWidth: number;
  boxHeight: number;
  buttonName: string;
  buttonWidth: number;
  buttonHeight: number;
  headText: string;
  cost: string;
  headTypographyVariant:
    | "heading1"
    | "heading2"
    | "heading3"
    | "button1"
    | "button2";
  bodyTypographyVariant: "body1" | "body2" | "caption" | "title";
  handleClick: () => void;
};
export const NewCashKick=(
    {
        boxWidth,
        boxHeight,
        buttonName,
        buttonWidth,
        buttonHeight,
        headText,
        headTypographyVariant,
        bodyTypographyVariant,
        cost,
        handleClick}:TypoWithButtonProps)=>{

            
        const StyleBox=styled(Box)`
            background-color: #201F24;
            border: 1px solid #28272B;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
            gap: 20px;
            width: ${boxWidth}px;
            height: ${boxHeight}px;
            border-radius: 12px;
        `;
        const StyleTypography=styled(TypoGraphy)`
        color: ${theme.palette.white?.[500]};
        `;


    return(
            <ThemeProvider theme={theme}>
                <StyleBox >
                    <StyleTypography style={{color:theme.palette.text.primary, fontSize:'34px'}} variants={headTypographyVariant} label={headText}/>
                    <StyleTypography
  variants={bodyTypographyVariant}
  style={{color:theme.palette.text.disabled}}
  label={<>You have upto {<b data-testid="new-cash-kick-cost">{cost}</b>} available for a new cash advance</>}
/>

                        <MyButton sx={{textTransform:"none"}} color={theme.palette.white?.[500]} backgroundColor={theme.palette.purple?.[500]} name={buttonName} width={buttonWidth} height={buttonHeight} onClick={handleClick} />
                    </StyleBox>
                </ThemeProvider>
    )
}