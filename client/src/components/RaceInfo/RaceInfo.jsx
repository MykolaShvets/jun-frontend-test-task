import React from 'react';

import './RaceInfo.css';

export const RaceInfo = ({ horse }) => {
  return (
    <div className={horse.distance === 1000 ? 'race__info_box finished' : 'race__info_box'}>
      <p><span>Horse:</span>{horse.name}</p>
      <p><span>Distance:</span>{horse.distance}</p>
    </div>
  )
}
