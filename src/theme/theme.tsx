import { ThemeOptions,createTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface ThemeOptions {}

  interface Palette {
    border?: {
      highemp?: string;
      lowemp?: string;
      
    },
    icon?: {
      highemp?: string;
      lowemp?: string;
    },
  
    accent?: {
        darkoverlay?: string;
        pink?: string;
        aquablue?: string;
        lightlavender?: string;
        peachyellow?: string;
        redorange?: string;

    },
    white?:{
      600?:string,
      500?:string,
    },
    purple?:{
      600?:string,
      500?:string,
      400?:string
    }
   
  }

  interface PaletteOptions {
    border?: {
      highemp?: string;
      lowemp?: string;
      
    },
    icon?: {
      highemp?: string;
      lowemp?: string;
    },
    purple?:{
      600?:string,
      500?:string,
      400?:string
    },
    white?:{
      600?:string,
      500?:string,
    }
    gray?: {
        100?: string;
        50?: string;
        },
    accent?: {
        darkoverlay?: string;
        pink?: string;
        aquablue?: string;
        lightlavender?: string;
        peachyellow?: string;
        redorange?: string;

    },
  
  }

  interface TypographyVariants {
    title:React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
}

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?:React.CSSProperties;
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    
 
  }
 
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1: true;
    body2: true;
    caption: true;
    
    heading1: true;
    heading2: true;
    heading3: true;
    button1:true;
    button2:true;
    title:true
  }
}

let theme = createTheme({
  palette: {
    primary:
    {
      main:"#040407",
 },
    purple:{
      600:'#393552',
      500:'#6C5DD3',
      400:'#B4A9FF'
    },
    white:{
600:'#D8D8D9',
500:'#E8E8E9'
    },

    border:{
      highemp:'#413F4D',
      lowemp:'#28272B'
    },
   accent:{
   darkoverlay:'#333333',
   pink:'#E39AB2',
   aquablue:'#A0D7E7',
   lightlavender:'#CFC8FF',
   peachyellow:'#E5CB9B',
   redorange:'#EC977D',

   },
    secondary: {
      main: '#2D2D30',
      light: '#201F24',
      contrastText: '#19181C',
    },
  
    grey: {
      50: '#3A3A3D',
      100: '#262529',
      200:'#727080',
     },
     text: {
     
      primary: '#E8E7F0',
      secondary: '#C9C8CC',
      disabled: '#A5A5A6',
    },
    
   
  },

  typography: {
    allVariants:{
      fontFamily:'Gilroy',
      fontStyle:"normal",

    },
    title:{
      fontWeight: 700,
fontSize: '36px',
lineHeight: '42px',
letterSpacing: '-0.015em'
    },
    heading1:{
      fontWeight: 600,
fontSize: '28px',
lineHeight: '34px',
letterSpacing: '-0.005em'
    },
    heading2:{
      fontWeight: 600,
fontSize: '24px',
lineHeight: '29px',
letterSpacing: '-0.005em'
    },
    heading3:{
      fontWeight: 500,
fontSize: '18px',
lineHeight: '150%',
 },
 body1:{
  fontWeight: 500,
fontSize: '16px',
lineHeight: '140%',
},
body2:{
  fontWeight: 600,
fontSize: '14px',
lineHeight: '17px',
letterSpacing:'0.01em'
},
caption:{
  fontWeight: 500,
fontSize: '12px',
lineHeight: '15px',
letterSpacing:'0.02em'
},
button1: {
      textTransform: 'capitalize',
      fontSize:'16px',
      fontWeight:600,
      lineHeight:'19px'
    },
    button2: {
      textTransform: 'capitalize',
      fontSize:'14px',
      fontWeight:600,
      lineHeight:'14px',
      letterSpacing:'0.01em'
    },

  
 
}})

const shadows = theme.shadows;
shadows[1] = " 0px 6px 24px rgba(0, 0, 0, 0.1)";

theme = createTheme({ ...theme, shadows });


export default theme;