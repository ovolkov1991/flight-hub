import { Pilot } from '../types/pilot';

import pilots from '../data/pilots';

const getPilots = (): Promise<Pilot[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(pilots);
    }, 300);
  });

export default {
  get: getPilots,
};
