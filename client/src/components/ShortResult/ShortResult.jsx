import React from 'react';
import { useSelector } from 'react-redux';

import './ShortResult.css';

export const ShortResult = () => {
  const { finishedHorses } = useSelector(state => state.horseReducer);

  return (
    <div className='short-result__box'>
      {finishedHorses[0] && (<div className='first'>
        <p>{finishedHorses[0].name}</p>
        <p>{finishedHorses[0].time}</p>
      </div>)}
      {finishedHorses[1] && <div className='second'>
        <p>{finishedHorses[1].name}</p>
        <p>{finishedHorses[1].time}</p>
      </div>}
      {finishedHorses[2] && <div className='third'>
        <p>{finishedHorses[2].name}</p>
        <p>{finishedHorses[2].time}</p>
      </div>}
    </div>
  )
}
