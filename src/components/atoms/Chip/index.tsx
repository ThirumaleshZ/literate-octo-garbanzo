import React, { ReactElement } from 'react'
import { Avatar, Chip } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MUIChipProp {
  label?: string
  variant?: 'filled' | 'outlined'
  size?: 'small' | 'large'
  color?: string
  text?: string
  src?: string
  avatar?: ReactElement
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MUIChip = (props: any) => {
  return (
    <Chip
      {...props}
      className={`${props.label} ${props.variant} ${props.size}  ${props.color}`}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="chip"
    />
  )
}

export default MUIChip
