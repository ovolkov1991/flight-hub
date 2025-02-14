import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Overview from './pages/Overview';
import Pilots from './pages/Pilots';
import NotFound from './pages/NotFound';
import CreateNewPilot from './pages/CreateNewPilot';
import Notifications from './pages/Notifications';
import UnderConstruction from './pages/UnderConstruction';

const App = () => (
  <Router>
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout>
            <Overview />
          </MainLayout>
        }
      />
      <Route
        path='/map'
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path='/flight-authorizations'
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path='/drones'
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path='/pilots'
        element={
          <MainLayout>
            <Pilots />
          </MainLayout>
        }
      />
      <Route
        path='/pilots/create'
        element={
          <MainLayout>
            <CreateNewPilot />
          </MainLayout>
        }
      />
      <Route
        path='/flight-log'
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path='/organization'
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path='/notifications'
        element={
          <MainLayout>
            <Notifications />
          </MainLayout>
        }
      />
      <Route
        path='*'
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  </Router>
);

export default App;
