import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginV from '../views/Login';
import Dashboard from './Dashboard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginV />} />
                <Route path='/*' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;