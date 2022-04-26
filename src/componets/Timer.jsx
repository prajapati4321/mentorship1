
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTimer } from 'react-timer-hook';
// import './functions.js';
function Timer({ expiryTimestamp }) {
   const {
    seconds,
    minutes,
    hours,
    days,
    // start,
    // pause,
    // resume,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
	  <>
      <div style={{fontSize: '20px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
  </>
  )
};



export default Timer;