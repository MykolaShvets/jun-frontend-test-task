import {combineReducers, configureStore} from '@reduxjs/toolkit';

import { horseReducer } from './slices/horseSlice';

const rootReducer = combineReducers({
  horseReducer
})

export const storeSetup = () => configureStore({
  reducer: rootReducer
})