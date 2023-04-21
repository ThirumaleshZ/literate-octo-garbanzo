import React from "react";
import { Avatar } from "@mui/material";
import styled from "@emotion/styled";


interface Props {
  src?: string;
  alt?: string;
  
  
}

const MyAvatar=styled(Avatar)`
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;`



const AvatarComponent: React.FC<Props> = ({ src, alt}) => {
  return (
    <>
      <MyAvatar data-testid="avatarid"
        alt={alt}
        src={src}
        
        
        style={{
          width:"32px",
         
           
          height:"32px"
            
        }}
      />

     
    </>
  );
};

export default AvatarComponent;
