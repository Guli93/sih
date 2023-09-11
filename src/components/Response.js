import React from 'react';
import ProgressBar from './ProgressBar';

const Response = ({sentimentScore,sentimentResult}) => {

  const percent = Math.abs(sentimentScore);

  return (
    <div className='response-box'>
      <h1>Response</h1>
      <div className='emotions'>
        <div className='pr-1'>
        <ProgressBar percent={percent} text={`${percent}%`}color="rgb(6, 153, 131)"/>
          <p>Positive</p>
        </div>

        <div className='pr-1'>
        <ProgressBar percent={30} text="30%" color="rgb(255, 0, 144);"/>
          <p>Negatic</p>
        </div>
        <div className='pr-1'>
        <ProgressBar percent={70} text="70%" color="yellow"/>
          <p>Neutral</p>
        </div>
    
      </div>
      <div>
          <h1 className='res-text'>{`${sentimentResult}`}</h1>
          <p>sentiment</p>
        </div>
    </div>
  );
}

export default Response;
