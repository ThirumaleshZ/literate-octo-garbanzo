
import { HederComponent } from "./HeaderComponent"
import { BodyComponent } from "./BodyComponent"
import TemplateLayout from "../../components/templates/templateDesign"
import {useNavigate} from 'react-router-dom';

export const ReviewCashKick=()=>{
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(-1);
    }
    return(
        <TemplateLayout header={<HederComponent handleBackClick={handleClick}/>} children={<BodyComponent/>} />
    )
}