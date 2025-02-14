import { Pilot } from '../types/pilot';

import pilots from '../data/pilots';

const getPilots = (): Promise<Pilot[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(pilots);
    }, 300);
  });

const addNewPilot = (pilot: Pilot) => {
  new Promise((resolve) => {
    setTimeout(() => {
      pilots.push(pilot);
      resolve(pilot);
    });
  });
};

export default {
  get: getPilots,
  add: addNewPilot,
};
