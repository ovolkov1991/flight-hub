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
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const updatedNotifications = state.notifications.map((notification) => {
        if (notification.id === action.payload) {
          return { ...notification, read_at: new Date().toISOString() };
        }
        return notification;
      });

      return { ...state, notifications: updatedNotifications };
    },
    deleteNotification: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    },
    saveOrganization: (state, action: PayloadAction<OrganizationState>) => {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        rating: action.payload.rating,
        notifications: action.payload.notifications,
      };
    },
  },
});

export const { saveOrganization, markNotificationAsRead, deleteNotification } =
  organizationSlice.actions;

export default organizationSlice.reducer;
