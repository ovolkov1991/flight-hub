import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrganizationState } from '../../types/organization';

const initialState: OrganizationState = {
  id: '',
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
    saveOrganization: (state, action: PayloadAction<OrganizationState>) => {
      return {
        ...state,
        name: action.payload.name,
        rating: action.payload.rating,
        notifications: action.payload.notifications,
      };
    },
  },
});

export const { saveOrganization, markNotificationAsRead } =
  organizationSlice.actions;
export default organizationSlice.reducer;
