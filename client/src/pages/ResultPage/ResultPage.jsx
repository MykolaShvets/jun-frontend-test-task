import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './ResultPage.css';

export const ResultPage = () => {
  const { finishedHorses, yourHorse } = useSelector(state => state.horseReducer);

  return (
    <>
      {!yourHorse ? (<Navigate to="/" replace />) : (
        <div className='result__container'>
          <h1>{yourHorse === finishedHorses[0].name ? 'Congratulation!!! Try again!!!' : 'Sorry... Try again!!!'}</h1>
          <div>
            <h2 className={finishedHorses[0].name === yourHorse ? 'gold your-horse' : 'gold'}>{finishedHorses[0].name} (Time: {finishedHorses[0].time})</h2>
            <h3 className={finishedHorses[1].name === yourHorse ? 'silver your-horse' : 'silver'}>{finishedHorses[1].name} (Time: {finishedHorses[1].time})</h3>
            <h4 className={finishedHorses[2].name === yourHorse ? 'bronze your-horse' : 'bronze'}>{finishedHorses[2].name} (Time: {finishedHorses[2].time})</h4>
            {finishedHorses
              .slice(3, 6)
              .map(horse => <p key={horse.name + 3} className={horse.name === yourHorse && 'your-horse'}>{horse.name} (Time: {horse.time})</p>)}
          </div>
          <a href='/' className='again__btn'>Try Again!!!</a>
        </div>
      )}
    </>

  )
}
