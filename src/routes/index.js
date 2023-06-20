import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';

import Login from '../pages/signin';
import Layout from '../components/Layout';

export function AppRoutes() {
    return (
      <Routes>
        <Route
          path='login'
          element={
            <GuestOnlyRoute>
              <Login />
            </GuestOnlyRoute>
          }
        />
        <Route
          path='/'
          element={
            <>
              <Layout />
              <GuardRoute />
            </>
          }
        >    
        </Route>
      </Routes>
    );
  }
  