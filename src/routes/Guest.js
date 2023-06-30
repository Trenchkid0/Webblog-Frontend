import { Route, Routes } from 'react-router-dom';

import Blog from '../pages/blog/index';

export function GuestRoute() {
  return (
    <Routes>
      <Route path='/' element={<Blog/>} />
    </Routes>
  );
}
