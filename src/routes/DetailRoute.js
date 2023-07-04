import { Route, Routes } from 'react-router-dom';

import DetailBlog from '../pages/detail/index';

export function DetailRoute() {
  return (
    <Routes>
      <Route path='/:blogId' element={<DetailBlog/>} />
    </Routes>
  );
}
