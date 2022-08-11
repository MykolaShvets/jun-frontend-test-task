import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setYourHorse} from '../../store/slices/horseSlice';

export const HorseSelector = ({horseName}) => {
    const {yourHorse} = useSelector(state => state.horseReducer);
    const dispatch = useDispatch();

    const horseHandler = (e) => {
        dispatch(setYourHorse({horse: e.target.value}));
    };

    return (
        <label>
            <input value={horseName}
                   type='checkbox'
                   onChange={(e) => horseHandler(e)}
                   checked={yourHorse === horseName}
            />
            {horseName}
        </label>
    )
}
