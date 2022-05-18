import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginV from '../views/Login';
import DcV from '../views/Dc'
// import MarvelV from '../views/Marvel'
// import SearchV from '../views/Search'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginV />} />
                {/* <Route path='' element={<HomeV />} /> */}
                <Route path='/dc' element={<DcV />} />
                <Route path='/*' element={<LoginV />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;