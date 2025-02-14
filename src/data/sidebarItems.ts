import {
  faHouse,
  faMap,
  faUsersGear,
  faPlaceOfWorship,
  faPlaneCircleCheck,
  faPlaneCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export default {
  Dashboards: [
    { name: 'Overview', path: '/', icon: faHouse },
    { name: 'Realtime Map', path: '/map', icon: faMap },
  ],
  General: [
    {
      name: 'Flight Authorizations',
      path: '/flight-authorizations',
      icon: faPlaneCircleCheck,
    },
    { name: 'Drones', path: '/drones', icon: faPlaceOfWorship },
    { name: 'Pilots', path: '/pilots', icon: faUsersGear },
    { name: 'Flight Log', path: '/flight-log', icon: faPlaneCircleExclamation },
  ],
};
