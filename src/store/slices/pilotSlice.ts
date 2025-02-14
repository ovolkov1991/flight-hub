import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pilot, PilotState } from '../../types/pilot';

const initialState: PilotState = {
  list: [],
};

const pilotSlice = createSlice({
  name: 'pilots',
  initialState,
  reducers: {
    addPilot: (state, action: PayloadAction<Pilot>) => {
      state.list.push(action.payload);
    },
    deletePilot: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((pilot) => pilot.id !== action.payload);
    },
    savePilotsList: (state, action: PayloadAction<Pilot[]>) => {
      state.list = action.payload;
    },
  },
});

export const { savePilotsList, addPilot, deletePilot } = pilotSlice.actions;
export default pilotSlice.reducer;
