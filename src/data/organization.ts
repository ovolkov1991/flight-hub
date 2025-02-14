import { OrganizationState } from '../types/organization';

const organization: OrganizationState = {
  id: 'org001',
  name: 'SkyTech Services',
  rating: 'B',
  notifications: [
    {
      title: 'Check out your drone #102F-D',
      text: 'Your drone crossed available region. Please return your drone control to the region space.',
      read_at: null,
    },
  ],
};

export default organization;
