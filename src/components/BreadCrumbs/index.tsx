import { Link, useLocation } from 'react-router-dom';
import { capitalize, getPathList } from '../../utils';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathList = getPathList(location.pathname);

  return (
    <nav data-testid='breadcrumbs'>
      <ul className='flex space-x-1 text-slate-500 font-semibold'>
        <li>
          <Link
            to='/'
            className='hover:text-slate-700'
            data-testid='breadcrumbs-item'
          >
            Dashboard
          </Link>
        </li>

        {pathList.map((link, index) => {
          const isLast = index === pathList.length - 1;
          const routeTo = `/${pathList.slice(0, index + 1).join('/')}`;

          return (
            <li
              key={link}
              className='hover:text-slate-700'
              data-testid='breadcrumbs-item'
            >
              &gt; <Link to={isLast ? '#' : routeTo}>{capitalize(link)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
