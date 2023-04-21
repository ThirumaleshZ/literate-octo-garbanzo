import React from 'react';
import { Slider } from '@mui/material';




export interface SliderProps {
  onChange?: (value: number) => string;
  value: number;
  maxValue: number;
  onSilderChange?:(event: Event, newValue: number | number[])=>void
  }
const Slide = ({ value, maxValue, onChange, onSilderChange }:SliderProps) => {


  return (
          <Slider
            value={value}
            defaultValue={0.0}
            getAriaValueText={onChange}
            max={maxValue}
            onChange={onSilderChange}
            sx={{
              width: 300,
              color: '#6C5DD3',
              '& .MuiSlider-thumb': {
                borderRadius: '8px',
              },
            }}
          />
  )
}


export default Slide;
