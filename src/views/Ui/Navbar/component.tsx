import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginContext } from '../../../context/auth/loginContext'
import { EAuth } from '../../../store/auth/enum'

const NavbarC: React.FC = () => {
    const { stateAuth, dispatch } = useContext(loginContext)
    const router = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div style={{ width: '180px', display: 'flex', 'justifyContent': 'space-between', alignItems: 'center' }}>
                    <img src="/assets/logo/spiderman.png" alt="spiderman" height='50' />
                    <NavLink className="navbar-brand" to='/dashboard/dc' >AppHeroes</NavLink>
                </div>

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                                to='/dashboard/dc'>DC
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                                to='/dashboard/marvel'>Marvel
                            </NavLink>
                        </li>

                        <li
                            className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                                to='/dashboard/search'>Search
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <span className='text-white'>{stateAuth?.user}</span>
                    <button className='btn btn-danger mx-2'
                        onClick={() => {

                            const action = {
                                type: EAuth.logout
                            }

                            dispatch!(action)
                            router('/')

                        }}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarC
