import { Link } from 'react-router-dom';

const Pilots = () => {
  // TODO: add some logic to retrieve table data from RTK with pagination

  return (
    <div className='py-8 px-12'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl text-slate-500 font-semibold'>Pilots</h1>
        <Link to='/pilots/create' className='btn bg-secondary'>
          + Create
        </Link>
      </div>
    </div>
  );
};

export default Pilots;
