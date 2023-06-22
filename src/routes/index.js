import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';


import { HeroRoute } from './HeroRoutes';

import Login from '../pages/signin';
import Signup from '../pages/signup';

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
          path='signup'
          element={
            <GuestOnlyRoute>
              <Signup />
              
            </GuestOnlyRoute>
          }
        />
        <Route
          path='/'
          element={
            <>
               
              
              <GuardRoute />
            </>
          }
        >    
         <Route path='hero/*' element={<HeroRoute />} />
         <Route path='' element={<Navigate to='/hero' replace={true} />} />
        </Route>
      </Routes>
    );
  }
  