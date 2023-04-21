import Stack from '@mui/material/Stack'
import TypoGraphy from '../../atoms/TypoGraphy'
import Icon from '../../atoms/Icon'
import SeederLogo from "../../../../public/assets/icons/seederLogo.svg"
import { makeStyles } from '@mui/styles';
interface Inputprops{
src:string,
variant : "heading1"|"heading2"|"heading3"|"button1"|"button2"|"body1"|"body2"|"caption"|"title"
children:string,
color?:string,
isactive?:boolean
handleClick?:() => void
}
const useStyles = makeStyles({
  root: {
    width: "210px",
    height: "49px",
    background: "#2D2D30",
    borderRadius: "12px",
    display:"flex",
    justifyContent: "flex-start",
    paddingLeft:"8px",
    color:"text.primary"
  },
  unactive:{
    color:"#A5A5A6",
    paddingLeft:"3px",

  }
});

const Sideitem= ({src=SeederLogo,variant,children,color,handleClick,isactive}:Inputprops) => {
 
const classes=useStyles()
 
  return (
    <>
    <Stack direction="row" alignItems="center" gap={3} data-testid="custom-sideelement" className={isactive?classes.root:classes.unactive} onClick={handleClick}>
          <Icon src={src} alt="logo" />
          <TypoGraphy variants={variant}  label={children}/>
      </Stack>
        </>
  )
}

export default Sideitem