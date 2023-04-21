import React from 'react'
import { Checkbox } from '@mui/material'

interface Inputprops{
  disabled?:boolean
  indeterminate?:boolean
  label?:string
  isChecked:boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Checkboxes = (props:Inputprops) => {
    const{disabled,indeterminate,label,isChecked,handleChange}=props
 return (
    <>
   <Checkbox disabled={disabled}
  indeterminate={indeterminate}
 checked={isChecked}
 aria-label={label}
  onChange={handleChange}
  sx={{
    color: "primary",
   '&.Mui-checked': {
      color:"purple.400",
      },
  }}
/>
    </>
  )
}

export default Checkboxes