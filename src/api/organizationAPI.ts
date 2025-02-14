import { OrganizationState } from '../types/organization';

import organization from '../data/organization';

const getOrganization = (): Promise<OrganizationState> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(organization);
    }, 300);
  });

export default {
  get: getOrganization,
};
