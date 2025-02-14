import { Rating } from '../../types/organization';
import { SidebarItems } from '../../types/sidebar';
import CompanyBrand from './CompanyBrand';
import Organization from './Organization';
import SidebarList from './SidebarList';

type SidebarProps = {
  items: SidebarItems;
  organizationRating: Rating | null;
  organizationName: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  items,
  organizationRating,
  organizationName,
}) => (
  <aside className='bg-primary px-6 py-4 min-w-fit min-h-screen'>
    <CompanyBrand />

    <Organization name={organizationName} rating={organizationRating} />

    <nav className='pt-2'>
      <SidebarList items={Object.entries(items)} />
    </nav>
  </aside>
);

export default Sidebar;
