import fs from 'fs';
import path from 'path';

const organizationFilePath = path.join(__dirname, '../data/organization.json');

const getOrganization = () =>
  new Promise((resolve, reject) => {
    fs.readFile(organizationFilePath, 'utf-8', (error, data) => {
      if (error) {
        reject('Error loading organization data');
      } else {
        resolve(JSON.parse(data));
      }
    });
  });

export default {
  get: getOrganization,
};
