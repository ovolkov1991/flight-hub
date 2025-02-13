import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Overview from './pages/Overview';
import RealtimeMap from './pages/Map';
import FlightAuthorizations from './pages/FlightAuthorizations';
import Drones from './pages/Drones';
import Pilots from './pages/Pilots';
import FlightLog from './pages/FlightLog';
import NotFound from './pages/NotFound';

function App() {
  return (
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
              <RealtimeMap />
            </MainLayout>
          }
        />
        <Route
          path='/flight-authorizations'
          element={
            <MainLayout>
              <FlightAuthorizations />
            </MainLayout>
          }
        />
        <Route
          path='/drones'
          element={
            <MainLayout>
              <Drones />
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
          path='/flight-log'
          element={
            <MainLayout>
              <FlightLog />
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
}

export default App;
