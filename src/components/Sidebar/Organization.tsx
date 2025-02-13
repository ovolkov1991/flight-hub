import { Link } from 'react-router-dom';

// mimic RTK
const useSelector = () => ({ rating: 'A', name: 'DRONE DOCK' });

const Organization = () => {
  // add some RTK to get authorized organization data
  // like it's rating and name
  const organization = useSelector();

  return (
    <Link
      to='/organization'
      className='flex items-center mt-6 py-2 border-organization'
      data-testid='organization'
    >
      <div
        className='flex items-center justify-center border-organization size-10 px-4 ml-2 text-white text-xl font-bold'
        data-testid='organization-rating'
      >
        {organization.rating}
      </div>
      <div className='text-white ml-2'>
        <p className='text-xs'>Organization</p>
        <p className='font-semibold' data-testid='organization-name'>
          {organization.name}
        </p>
      </div>
    </Link>
  );
};

export default Organization;
