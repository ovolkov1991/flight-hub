import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import sidebarItems from '../data/sidebarItems';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className='flex'>
    <Sidebar items={sidebarItems} />
    <div className='flex-col w-full'>
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;
