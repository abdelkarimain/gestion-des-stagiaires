import axios from 'axios';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AdminNav = (props) => {
    const navigate = useNavigate();
    const activeLinkStyle = ({ isActive }) => {
        if (isActive) {
            return {
                backgroundColor: '#007ACC',
            }
        }
    }

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
    };

    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar vh-100 fixed-top">
            <div className="sidebar-fixed">
                <div className="d-flex flex-column align-items-center py-3">
                    <NavLink className="navbar-brand" to="/admin/dashboard">
                        <img src={props.logo} width={'160px'} height={'60px'} alt="" />
                    </NavLink>
                </div>
                <hr />
                <ul className="nav flex-column ">
                    <li className="nav-item">
                        <NavLink style={activeLinkStyle} to="/admin/dashboard" className="nav-link text-white py-3 px-5" activeClassName="active">
                            <i class="fa-solid fa-gauge fs-3"></i> &nbsp;&nbsp;
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={activeLinkStyle} to="/admin/profile" className="nav-link text-white py-3 px-5" activeClassName="active">
                            <i class="fa-regular fa-address-card fs-3"></i> &nbsp;&nbsp;
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={activeLinkStyle} to="/admin/users" className="nav-link text-white py-3 px-5" activeClassName="active">
                            <i className="fa-solid fa-users fs-3"></i>&nbsp;&nbsp;
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={activeLinkStyle} to="/admin/add-user" className="nav-link text-white py-3 px-5" activeClassName="active">
                            <i className="fa-solid fa-user-plus fs-3"></i>&nbsp;&nbsp;
                            Add User
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={activeLinkStyle} to="/admin/security" className="nav-link text-white py-3 px-5" activeClassName="active">
                            <i className="fa-solid fa-shield-halved fs-3"></i>&nbsp;&nbsp;
                            Security
                        </NavLink>
                    </li>
                </ul>
                <div className="mb-0">
                    <hr />
                    <div className="dropdown py-3 px-5">
                        <a
                            href="#"
                            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src={localStorage.getItem('auth_photo')}
                                alt=""
                                width={32}
                                height={32}
                                className="rounded-circle me-2"
                            />
                            <strong>{localStorage.getItem('auth_name')}</strong>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-light text-small shadow"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                                <Link className="dropdown-item" onClick={handleLogout}>
                                    <i class="fa-solid fa-right-from-bracket fs-3 text-danger fw-1"></i> &nbsp;&nbsp;
                                    <span className='text-danger fw-semibold'>Sign out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default AdminNav;
