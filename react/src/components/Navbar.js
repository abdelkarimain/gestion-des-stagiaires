import axios from 'axios';
import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import LoginModal from '../Auth/LoginModal';
import RegisterModal from '../Auth/RegisterModal';

const Navbar = ({ logo }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const showLogin = () => {
        setShowLoginModal(true);
    };

    const handleCloseLogin = () => {
        setShowLoginModal(false);
    };
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const showRegister = () => {
        setShowRegisterModal(true)
    };
    const handleCloseRegister = () => {
        setShowRegisterModal(false);
    };

    const activeLinkStyle = ({ isActive }) => {
        if (isActive) {
            return {
                backgroundColor: '#007ACC',
            }
        }
    }

    return (
        <>
            <LoginModal handleClose={handleCloseLogin} show={showLoginModal} />
            <RegisterModal handleClose={handleCloseRegister} show={showRegisterModal} />
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} width={'100px'} alt="" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item me-auto">
                                <NavLink className="nav-link px-4 me-2" style={activeLinkStyle} to="/testimonial">Clients Reviews</NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item me-auto">
                                <button className=" px-4 me-2 btn btn-outline-info fw-semibold py-2" onClick={showLogin}>Login</button>
                            </li>
                            <li className="nav-item me-auto">
                                <button className=" px-4 me-2 btn btn-outline-success fw-semibold py-2" onClick={showRegister}>Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
