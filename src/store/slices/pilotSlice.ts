import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pilot, PilotState } from '../../types/pilot';

const initialState: PilotState = {
  pilots: [],
};

const pilotSlice = createSlice({
  name: 'pilots',
  initialState,
  reducers: {
    addPilot: (state, action: PayloadAction<Pilot>) => {
      state.pilots.push(action.payload);
    },
    deletePilot: (state, action: PayloadAction<string>) => {
      state.pilots = state.pilots.filter(
        (pilot) => pilot.id !== action.payload
      );
    },
  },
});

export const { addPilot, deletePilot } = pilotSlice.actions;
export default pilotSlice.reducer;
