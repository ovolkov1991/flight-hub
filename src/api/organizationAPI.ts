import { OrganizationState } from '../types/organization';

// NOTE: unfortunately browser does not support fs read/write
// therefore I had to place mocked data object here

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

const getOrganization = (): Promise<OrganizationState> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(organization);
    }, 300);
  });

export default {
  get: getOrganization,
  notification: {
    // decided not to mock any functions no more
    markAsRead: () => {},
    delete: () => {},
  },
};
