import styled from "styled-components";
import theme from "../../../theme/theme";

type PorgressBarProps={
    percentage:number,
}
export const ProgressBar=({percentage}:PorgressBarProps)=>{
    const StyleCircle=styled.circle`
         fill:none ;
         stroke: #3A3A3D;
        `;

        const StyleCircle2=styled.circle`
        fill:none ;
        stroke: #A0D7E7;
       `;

        const StyleSvg=styled.svg`
            width: 80px;
            height: 80px;
        `;


       const StyleText=styled.text`
        font-weight: 500;
        font-size: 1.3rem;
      `;
    const radius=35;
    const dashArray=radius*Math.PI*2;
    const dashOffSet=dashArray-(dashArray * percentage)/100;
    return(
        <StyleSvg  viewBox={`0 0 80px 80px`}>
            <StyleCircle cx='40px' cy='40px' strokeWidth='10px' r={radius}/>
            <StyleCircle2 
            cx='40px' 
            cy='40px' 
            strokeWidth='10px'
            style={{
                strokeDasharray:dashArray,
                strokeDashoffset:dashOffSet
            }} 
            r={radius}
            />
            <StyleText 
            x='50%' 
            y='50%' 
            dy='0.4em' 
            dx='0.2em' 
            textAnchor="middle"
            style={{
                stroke:theme.palette.accent?.aquablue,
            }}
            >
                {percentage}%
            
            </StyleText>
        </StyleSvg>
    )
}