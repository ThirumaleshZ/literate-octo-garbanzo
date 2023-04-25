
import React from 'react';
import { Box } from '@mui/material';
import TextField from '../../atoms/TextField/index';
import TypoGraphy from '../../atoms/TypoGraphy/index';
import styled from 'styled-components';



const StyledBox = styled(Box)({
    display : 'flex',
    flexDirection: 'column',
})


export interface TextFieldTypographyProps {
  label: string;
  placeholder: string;
  width?: number;
  onChange: () => void;
  value: string| any;
  color: string;
  variant: "heading1"|"heading2"|"heading3"|"button1"|"button2"|"body1"|"body2"|"caption"|"title"
}

const TextFieldTypography = ({ label, placeholder, width, onChange, value, variant, color = '#A5A5A6' }: TextFieldTypographyProps) => {
  const textColor = color
  return (
    <StyledBox>
      
      <TypoGraphy label={label} variants={variant} style={{color: textColor }}></TypoGraphy>
        <TextField placeholder={placeholder} width={width} 
          onChange={onChange} 
          value={value}  
          sx={{backgroundColor : 'grey.50' }} />    
    
    </StyledBox>
  );
};

export default TextFieldTypography;