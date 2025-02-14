import fs from 'fs';
import path from 'path';
import { Pilot } from '../types/pilot';

const pilotsFilePath = path.join(__dirname, '../data/pilots.json');

const getPilots = (): Promise<Pilot[]> =>
  new Promise((resolve, reject) => {
    fs.readFile(pilotsFilePath, 'utf-8', (error, data) => {
      if (error) {
        reject('Error loading pilots data');
      } else {
        resolve(JSON.parse(data));
      }
    });
  });

const addPilots = (newPilot: Pilot): Promise<Pilot> =>
  new Promise((resolve, reject) => {
    getPilots()
      .then((pilots: Pilot[]) => {
        pilots.push(newPilot);

        fs.writeFile(
          pilotsFilePath,
          JSON.stringify(pilots, null, 2),
          'utf8',
          (err) => {
            if (err) {
              reject("Error saving new pilot's data");
            } else {
              resolve(newPilot);
            }
          }
        );
      })
      .catch(reject);
  });

export default {
  get: getPilots,
  set: addPilots,
};
