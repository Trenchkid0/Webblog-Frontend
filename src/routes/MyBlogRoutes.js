import { Route, Routes } from 'react-router-dom';

import MyBlog from '../pages/myblog/index';

export function MyBlogRoute() {
  return (
    <Routes>
      <Route path='/:userId' element={<MyBlog/>} />
    </Routes>
  );
}
