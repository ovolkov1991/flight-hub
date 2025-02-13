import { useLocation } from 'react-router-dom';
import { capitalize, getPathList } from '../../utils';

const UnderConstruction = () => {
  const location = useLocation();

  const pageTitle =
    getPathList(location.pathname)
      .at(-1)
      ?.split('-')
      .map((item) => capitalize(item))
      .join(' ') ?? '';

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-10'>
      <div className='p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold text-color-primary'>
          <span className='text-4xl'>🚧</span>
          {pageTitle} Page Under Construction
          <span className='text-4xl'>🚧</span>
        </h1>
        <p className='mt-2 text-slate-500'>
          We're working on something awesome. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
