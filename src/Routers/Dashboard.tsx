import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginV from '../views/Login/index';
import DcV from '../views/Dc/index';

const Dashboard = () => {
    return (
        <Routes>
            <Route path='dashboard/dc' element={<DcV />} />
            <Route path='dashboard/' element={<DcV />} />
            {/* <Route path='dashboard/marvel' element={<MarvelV />} />
            <Route path='dashboard/search' element={<SearchV />} /> */}
            <Route path='/*' element={<LoginV />} />
        </Routes>
    )
}

export default Dashboard