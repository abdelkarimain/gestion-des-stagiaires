import axios from 'axios';
import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const UserNav = ({logo}) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        axios.post('/api/logout').then(res => {

            if (res.data.status === 200) {
                localStorage.removeItem('auth_token', res.data.token);
                localStorage.removeItem('auth_name', res.data.username);
                localStorage.removeItem('auth_role', res.data.userrole);
                localStorage.setItem('auth_id', res.data.userid);
                swal("Success", res.data.message, "success");
                navigate('/');
                window.location.reload();
            }
        });
    }

    const activeLinkStyle = ({ isActive }) => {
        if (isActive) {
            return {
                backgroundColor: '#007ACC',
            }
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/dashboard">
                        <img src={logo} width={'100px'} alt="" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fw-semibold" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/dashboard">Dashboard</NavLink>
                            </li>

                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/profile">Profile</NavLink>
                            </li>

                            {/* <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/contact">Contact</NavLink>
                            </li>

                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/About">About Us</NavLink>
                            </li> */}
                        </ul>
                        <div className="d-flex ms-auto">
                            <div className="dropdown">
                                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                    id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={localStorage.getItem('auth_photo')} alt="" width="32" height="32" className="rounded-circle me-2" />
                                    <strong className=' text-white'>{localStorage.getItem('auth_name')}</strong>
                                </Link>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" onClick={handleLogout}>Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default UserNav;









{/* <nav className="navbar navbar-expand-lg shadow">
                <div className="container">
                    <Link className="navbar-brand" to='/'>React App</Link>

                    <div className='d-flex'>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/view-user'>Users</Link>
                            </li>
                        </ul>
                        <div className="dropdown mx-5">
                            <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                                id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={localStorage.getItem('auth_photo')} alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>{localStorage.getItem('auth_name')}</strong>
                            </Link>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" onClick={handleLogout}>Log Out</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav> */}