import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFound from './pages/errors/NotFound';

const Router = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
