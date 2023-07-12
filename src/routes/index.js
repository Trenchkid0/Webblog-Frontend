import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';


import { BlogRoute } from './BlogRoutes';
import { DetailRoute } from './DetailRoute';
import { MyBlogRoute } from './MyBlogRoutes';
import { MyProfileRoute } from './MyProfileRoutes';

import Login from '../pages/signin';
import Signup from '../pages/signup';

import Navbar from '../components/Navbar';



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
                <Navbar/>
              <GuardRoute />
            </>
          }
        >  
         <Route path='blog/*' element={<BlogRoute />} />
         <Route path='detail/*' element={<DetailRoute />} />
         <Route path='myblog/*' element={<MyBlogRoute />} />
         <Route path='myprofile/*' element={<MyProfileRoute />} />
         <Route path='' element={<Navigate to='/blog' replace={true} />} />
        </Route>
      </Routes>
    );
  }
  