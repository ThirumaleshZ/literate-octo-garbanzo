import React from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme  from '../../../theme/theme';


export interface TypoGraphyProps {

  label: React.ReactNode;
  variants? : "heading1"|"heading2"|"heading3"|"button1"|"button2"|"body1"|"body2"|"caption"|"title";
  style? : React.CSSProperties;
}

const TypoGraphy = ({ label, variants = 'heading2', style }: TypoGraphyProps) => {

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variants} style={style}>{label}</Typography>

    </ThemeProvider>
    
  );
};

export default TypoGraphy;



