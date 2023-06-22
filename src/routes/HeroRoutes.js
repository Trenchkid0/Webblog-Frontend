import { Route, Routes } from 'react-router-dom';

import Hero from '../pages/hero';


export function HeroRoute() {
  return (
    <Routes>
      <Route path='/' element={<Hero/>} />
     
    </Routes>
  );
}
