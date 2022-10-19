import { Routes, Route } from "react-router-dom";
import { HomeLayout } from '../home/home-layout/home-layout';

export const Router = () => (
    <Routes>
        <Route path="/" element={<HomeLayout />} />
    </Routes>
);
