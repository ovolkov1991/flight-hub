import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../store';
import { saveOrganization } from '../store/slices/organizationSlice';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import sidebarItems from '../data/sidebarItems';
import { organizationAPI } from '../api';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const storedOrganization = useSelector(
    (state: RootState) => state.organization
  );

  const getAllPilots = async () => {
    const organization = await organizationAPI.get();
    dispatch(saveOrganization(organization));
  };

  useEffect(() => {
    getAllPilots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notifications = useMemo(
    () => storedOrganization.notifications,
    [storedOrganization]
  );

  return (
    <div className='flex'>
      <Sidebar items={sidebarItems} />
      <div className='flex-col w-full'>
        <Header
          organizationName={storedOrganization.name}
          notifications={notifications}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
