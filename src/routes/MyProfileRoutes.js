import { Route, Routes } from 'react-router-dom';

import MyProfile from '../pages/myprofile/index';
import MyProfileEdit from '../pages/myprofile/edit';

export function MyProfileRoute() {
  return (
    <Routes>
      <Route path='/:userId' element={<MyProfile/>} />
      <Route path='/edit/:userId' element={<MyProfileEdit/>} />
    </Routes>
  );
}
