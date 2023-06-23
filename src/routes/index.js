import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';


import { HeroRoute } from './HeroRoutes';

import Login from '../pages/signin';
import Signup from '../pages/signup';

import Layout from '../components/Layout';
import Container from '../components/Container';


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
              {/* <Layout>
                <Head>
                  <title>Home &mdash; Epictetus</title>
                </Head>
                <Container>
                  
                  <div className="flex -mx-4 flex-wrap mt-6">
                    
                  </div>
                </Container>
              </Layout> */}
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
  