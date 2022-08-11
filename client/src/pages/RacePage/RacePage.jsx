import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { socket } from '../../services/socketService';
import { getHorsesData } from '../../store/slices/horseSlice';
import { RaceInfo } from '../../components/RaceInfo/RaceInfo';
import { RaceMap } from '../../components/RaceMap/RaceMap';
import { ShortResult } from '../../components/ShortResult/ShortResult';
import './RacePage.css'

export const RacePage = () => {
  const { runingHorses, finishedHorses, yourHorse } = useSelector(state => state.horseReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(yourHorse){
      socket.emit('start');
    dispatch(getHorsesData());
    return () => socket.disconnect;
    }

    navigate('/')
  }, [])

  return (
    <div className='race__container'>
          <div className='info__box'>
            {runingHorses && runingHorses.map(horse => <RaceInfo horse={horse} key={horse.name + 2} />)}
            {finishedHorses[0] && <ShortResult />}
          </div>
          <RaceMap horses={runingHorses} />
          {finishedHorses.length === 6 && <Link to='/result' className='result__btn'>To results</Link>}
    </div>
  )
}
