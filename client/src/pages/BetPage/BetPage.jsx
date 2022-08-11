import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {HorseSelector} from '../../components/HorseSelector/HorseSelector';
import './BetPage.css'

export const BetPage = () => {
    const {horsesNames, yourHorse} = useSelector(state => state.horseReducer);

    return (
        <div className='bet__container'>
            <p>Avalible horses</p>
            <div className='bet__selector_list'>
                {horsesNames.map(horseName => <HorseSelector key={horseName + 1} horseName={horseName}/>)}
            </div>
            {yourHorse &&
                <h2 className='bet__your-horse'>You chose <span>{yourHorse}</span>!</h2>}
            {yourHorse && <Link to='/race' className='start__btn'> START RACE </Link>}
        </div>
    )
}
