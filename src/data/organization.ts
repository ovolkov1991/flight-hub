import { OrganizationState } from '../types/organization';

const organization: OrganizationState = {
  id: 'org001',
  name: 'SkyTech Services',
  rating: 'B',
  notifications: [
    {
      id: 'notif001',
      title: 'Check out your drone #102F-D',
      text: 'Your drone crossed available region. Please return your drone control to the region space.',
      read_at: null,
    },
    {
      id: 'notif002',
      title: 'System Update Scheduled',
      text: 'A scheduled system update will occur on September 15 at 2:00 AM UTC. Expect minor downtime.',
      read_at: '2024-02-14T10:30:00Z',
    },
    {
      id: 'notif003',
      title: 'New Firmware Available',
      text: 'A new firmware update is available for your drone. Visit settings to update now.',
      read_at: null,
    },
  ],
};

export default organization;
