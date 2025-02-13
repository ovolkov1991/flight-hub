import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

import BreadCrumbs from '../BreadCrumbs';

// mimic RTK
const useSelector = () => ({
  rating: 'A',
  name: 'DRONE DOCK',
  notifications: [{ title: 'Some new notification' }],
});

const Header = () => {
  // add some RTK to get authorized organization data
  // like it's rating and name
  const organization = useSelector();

  return (
    <header
      data-testid='header'
      className='w-full flex items-center justify-between py-6 px-8 max-h-fit bg-white shadow-md text-slate-500'
    >
      <BreadCrumbs />
      <nav>
        <ul className='flex gap-6'>
          <li>
            <Link to='/notifications' className='relative'>
              {organization.notifications.length && (
                <div className='flex items-center justify-center absolute z-10 text-white bg-secondary p-2 rounded-full text-sm -top-2.5 -right-2 size-3'>
                  {organization.notifications.length}
                </div>
              )}
              <FontAwesomeIcon
                icon={faBell}
                color='#000e4e'
                fontSize={24}
                className='hover-shake-angle'
              />
            </Link>
          </li>
          <li>
            <Link to='/organization' className='hover:text-slate-700'>
              <FontAwesomeIcon icon={faUser} color='#000e4e' fontSize={24} />
              <span className='pl-2 font-semibold'>{organization.name}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
