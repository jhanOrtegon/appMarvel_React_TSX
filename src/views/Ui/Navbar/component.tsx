import { NavLink } from 'react-router-dom'

const NavbarC: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div style={{ width: '180px', display: 'flex', 'justifyContent': 'space-between', alignItems: 'center' }}>
                    <img src="/assets/logo/spiderman.png" alt="spiderman" height='50' />
                    <NavLink className="navbar-brand" to='/dc' >AppHeroes</NavLink>
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

                <div>
                    <ul className="navbar-nav">
                        <li
                            className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                                to='/logout'>Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarC
