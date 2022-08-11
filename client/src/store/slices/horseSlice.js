import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { socket } from "../../services/socketService";

const horsesNames = ['Princess Diana', 'Cricket', 'Rebel', 'Lucy', 'Lacey', 'Ginger'];

const initialState = {
  horsesNames,
  yourHorse: '',
  runingHorses: [],
  finishedHorses: [],
  time: 0
}

export const getHorsesData = createAsyncThunk(
  'horseSlice/getHorsesData',
  async (_, { dispatch }) => {
    try {
      socket.on('ticker', (res) => {

        dispatch(setRuningHorses({ horses: res }))
        res.forEach(item => {

          if (item.distance === 1000) {
            dispatch(setFinishedHorses({ finishedHorse: item }));
          }

        });
      });

    } catch (e) {
      console.log(e);
    }
  }
)

const horseSlice = createSlice({
  name: 'hourseSlice',
  initialState,
  reducers: {
    setRuningHorses: (state, action) => {
      state.runingHorses = action.payload.horses;
      state.time += 1
    },
    setFinishedHorses: (state, action) => {
      const filtered = state.finishedHorses.filter(horse => horse.name === action.payload.finishedHorse.name);
      
      if (filtered.length > 0){
        return;
      }

      state.finishedHorses.push({...action.payload.finishedHorse, time: state.time + 's'});
    },
    setYourHorse: (state, action) => {
      state.yourHorse = action.payload.horse;
    }
  }
})

export const horseReducer = horseSlice.reducer;

export const { setRuningHorses, setFinishedHorses, setYourHorse } = horseSlice.actions;