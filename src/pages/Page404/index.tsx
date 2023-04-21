import TypoGraphy from "../../components/atoms/TypoGraphy"
import TemplateLayout from "../../components/templates/templateDesign"
import theme from "../../theme/theme"

export const Page404=()=>{
    return(
        <TypoGraphy label="Error 404 Page not found" style={{color:theme.palette.accent?.aquablue,marginLeft:'40%'}}/>
    )
}