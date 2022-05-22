import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginV from '../views/Login';
import Dashboard from './Dashboard';
import PrivteRouters from './PrivteRouters';
import PublicRouters from './PublicRouters';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PublicRouters>
                        <LoginV />
                    </PublicRouters>
                } />

                <Route path='/*'
                    element={
                        <PrivteRouters>
                            <Dashboard />
                        </PrivteRouters>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;