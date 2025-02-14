import { configureStore } from '@reduxjs/toolkit';

import organizationReducer from './slices/organizationSlice';
import pilotReducer from './slices/pilotSlice';

export const store = configureStore({
  reducer: {
    organization: organizationReducer,
    pilots: pilotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
