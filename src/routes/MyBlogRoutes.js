import { Route, Routes } from 'react-router-dom';

import MyBlog from '../pages/myblog'


export function MyBlogRoute() {
  return (
    <Routes>
      <Route path='/myblog' element={<MyBlog/>} />
    </Routes>
  );
}
