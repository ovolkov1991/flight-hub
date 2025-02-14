import { Link } from 'react-router-dom';
import { Rating } from '../../types/organization';

type SidebarOrganizationProps = {
  name: string;
  rating: Rating | null;
};

const Organization: React.FC<SidebarOrganizationProps> = ({ name, rating }) => (
  <Link
    to='/organization'
    className='flex items-center mt-6 py-2 border-organization'
    data-testid='organization'
  >
    <div
      className='flex items-center justify-center border-organization size-10 px-4 ml-2 text-white text-xl font-bold'
      data-testid='organization-rating'
    >
      {rating || 'A'}
    </div>
    <div className='text-white ml-2'>
      <p className='text-xs'>Organization</p>
      <p className='font-semibold' data-testid='organization-name'>
        {name}
      </p>
    </div>
  </Link>
);
export default Organization;
