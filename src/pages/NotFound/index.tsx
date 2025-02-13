import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center'>
      <div className='p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-5xl font-bold text-color-secondary'>404</h1>
        <p className='text-xl font-semibold text-color-primary'>
          You've droned into an unknown page!
        </p>
        <span className='text-4xl mt-4'>🚁💨</span>
        <Link
          to='/'
          className='block mt-2 text-slate-500 font-semibold hover:text-slate-700'
        >
          Let's navigate back home!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
