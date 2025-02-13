import { SidebarItems } from '../../types/sidebar';
import CompanyBrand from './CompanyBrand';
import Organization from './Organization';
import SidebarList from './SidebarList';

type SidebarProps = {
  items: SidebarItems;
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => (
  <aside className='bg-primary px-6 py-4 min-w-fit'>
    <CompanyBrand />

    <Organization />

    <nav className='pt-2'>
      <SidebarList items={Object.entries(items)} />
    </nav>
  </aside>
);

export default Sidebar;
