type Props = {
  children: React.ReactNode;
};

function Header() {
  return (
    <header>
      <div>{'Dashboards > Pilots'}</div>
      <nav>
        <ul>
          <li>Notifications Bell</li>
          <li>Profile Bell</li>
        </ul>
      </nav>
    </header>
  );
}

function Layout({ children }: Props) {
  return (
    <div className='flex bg-red-200 '>
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
