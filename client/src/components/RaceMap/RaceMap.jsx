import React from 'react';

import './RaceMap.css';

export const RaceMap = ({ horses }) => {
  return (
    <div className='race-map__box'>
      {horses
        .map(horse => (
        <p className={horse.name.toLowerCase().slice(0, 8)} 
        key={horse.name + 3} 
        style={{paddingLeft: horse.distance + 2 + 'px'}}>
          {horse.name.slice(0, 3)}
        </p>
        ))}
    </div>
  )
}
