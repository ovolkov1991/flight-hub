import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrganizationState } from '../../types/organization';

const initialState: OrganizationState = {
  rating: null,
  name: '',
  notifications: [],
};

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action: PayloadAction<number>) => {
      const notification = state.notifications[action.payload];
      if (notification) {
        notification.read_at = new Date().toISOString();
      }
    },
  },
});

export const { markNotificationAsRead } = organizationSlice.actions;
export default organizationSlice.reducer;
