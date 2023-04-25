import { Button } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import  theme  from "../../../theme/theme"
import { SxProps } from "@mui/material";
type ButtonProps = {
  name: string;
  variant?: "contained" | "outlined" | "text";
  icon?: React.ReactNode;
  width: number;
  height: number;
  backgroundColor?:string,
  color?:string,
  border?:string,
  sx?:SxProps,
  onClick?: () => void;
};
export const MyButton = (props: ButtonProps) => {
  const StyledButton = styled(Button)`
    && {
      background-color:${props.backgroundColor};
      color: ${props.color};
      border-radius: 12px;
      width: ${props.width}px;
      height: ${props.height}px;
      border: ${props.border};
      &:hover {
        background-color: ${props.backgroundColor};
      }
    }
  `;

  return (
    <ThemeProvider theme={theme}>
        <StyledButton
          variant={props.variant}
          startIcon={props.icon}
          onClick={props.onClick}
          sx={props.sx}
        >
          {props.name}
        </StyledButton>
      
    </ThemeProvider>
  );
};
