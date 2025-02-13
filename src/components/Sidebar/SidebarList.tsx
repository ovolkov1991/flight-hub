import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SidebarItem } from '../../types/sidebar';

type SidebarEntry = [string, SidebarItem[]];

type SidebarListProps = {
  items: SidebarEntry[];
};

const SidebarList: React.FC<SidebarListProps> = ({ items }) => (
  <ul data-testid='sidebar-list'>
    {items.map(([section, list]) => (
      <div key={section} data-testid='sidebar-section'>
        <p className='text-color-secondary font-semibold text-sm pt-4'>
          {section}
        </p>
        {list.map((item) => (
          <li
            key={item.name}
            className='text-white pl-2 pt-4 hover:underline underline-offset-2'
            data-testid='sidebar-section-item'
          >
            <Link to={`${item.path}`} className='flex items-center'>
              <FontAwesomeIcon icon={item.icon} fontSize={18} />
              <span className='pl-2'>{item.name}</span>
            </Link>
          </li>
        ))}
      </div>
    ))}
  </ul>
);

export default SidebarList;
