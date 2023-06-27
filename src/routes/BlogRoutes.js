import { Route, Routes } from 'react-router-dom';

import Blog from '../pages/blog';
import BlogCreate from '../pages/blog/create';

export function BlogRoute() {
  return (
    <Routes>
      <Route path='/' element={<Blog/>} />
      <Route path='/create' element={<BlogCreate />} />
    </Routes>
  );
}
