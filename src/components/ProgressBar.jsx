import React from 'react';
import { Circle } from 'rc-progress';

const ProgressBar = ({ percent, text,color }) => {
  const textStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fill: '#000',  
    textAnchor: 'middle',
    dominantBaseline: 'middle',
  };

  return (
    <div style={{ position: 'relative' ,height:100,width: 100,margin:'15px', marginTop:'40px'}}>
      <Circle
        percent={percent}
        strokeWidth={6}
        trailWidth={6}
        strokeColor={color}
        strokeLinecap='square'
      />
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <text x="50%" y="50%" style={textStyle}>
          {text}
        </text>
      </svg>
    </div>
  );
}

export default ProgressBar;
