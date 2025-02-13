import { Link } from 'react-router-dom';

const Pilots = () => {
  return (
    <div className='flex py-8 px-12 items-center justify-between'>
      <h1>Table I am gonna build</h1>
      <Link to='/pilots/create'>Create</Link>
    </div>
  );
};

export default Pilots;
