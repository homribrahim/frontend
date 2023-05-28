import React from 'react';
import Slider from '@material-ui/core/Slider';

export default function RangeSlider(props) {
  

  return (
    <div className="z-30" >
    
      <Slider
      style={{color:"#0D47A1"}}
        value={props.value}
        max={1000}
        onChange={props.handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}
