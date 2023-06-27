import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';


import { BlogRoute } from './BlogRoutes';
import { MyBlogRoute } from './MyBlogRoutes';

import Login from '../pages/signin';
import Signup from '../pages/signup';

import Blog from '../pages/blog';


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

            <Blog />
              <GuardRoute />
            </>
          }
        >    
         <Route path='blog/*' element={<BlogRoute />} />
         <Route path='myblog/*' element={<MyBlogRoute />} />
         <Route path='' element={<Navigate to='/blog' replace={true} />} />
        </Route>
      </Routes>
    );
  }
  