import { Routes, Route } from 'react-router-dom';

import HomeLayout from './page/home/HomePage';

const Router = () => (
  <Routes>
    <Route path="/" element={<HomeLayout />} />
  </Routes>
);

export default Router;
