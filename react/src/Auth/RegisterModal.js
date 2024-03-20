import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';



const RegisterModal = ({ handleClose, show }) => {
    const [data, setData] = useState({
        prenom: '',
        nom: '',
        email: '',
        password: '',
        cpassword: '',
        error_list: [],
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            prenom: data.prenom,
            nom: data.nom,
            email: data.email,
            password: data.password
        }

        if (data.password !== data.cpassword) {
            swal({
                icon: 'error',
                title: 'Error',
                text: 'Password and Confirm Password do not match',
            });
            return;
        }

        await axios.get('/sanctum/csrf-cookie').then(response => {

            axios.post('/api/register', userData).then(res => {

                if (res.data.status === 200) {

                    swal("Success", res.data.message, "success");

                    axios.post('/api/login', userData).then(res => {

                        if (res.data.status === 200) {

                            localStorage.setItem('auth_token', res.data.token);
                            localStorage.setItem('auth_name', res.data.username);
                            localStorage.setItem('auth_photo', res.data.userphoto);
                            localStorage.setItem('auth_role', res.data.userrole);
                            localStorage.setItem('auth_id', res.data.userid);

                            if (res.data.userrole === 'admin') {
                                navigate('/dashboard');
                                window.location.reload();
                            } else {
                                navigate('/dashboard');
                                window.location.reload();

                            }

                        }
                    });

                } else {
                    setData({ ...data, error_list: res.data.validation_errors });
                }
            });

        });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >

                <Modal.Header className='bg-success-subtl' closeButton>
                    <Modal.Title className='fw-semibold fs-3'>Sign Up</Modal.Title>
                </Modal.Header>

                <Modal.Body className='px-5'>
                    <div className="mt-2 mb-2">
                        <form className='p-4'>
                            {/* first & last name input */}
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="fs-6 mb-1">First name</label>
                                    <input className="form-control" type="text" name='prenom' value={data.prenom} onChange={handleChange} />
                                    <span className='mb-1 text-danger'>{data.error_list.nom}</span>
                                </div>
                                <div className="col-md-6">
                                    <label className="fs-6 mb-1">Last name</label>
                                    <input className="form-control" type="text" name='nom' value={data.nom} onChange={handleChange} />
                                    <span className='mb-1 text-danger'>{data.error_list.prenom}</span>
                                </div>
                            </div>
                            {/* email input */}
                            <div className="mb-3">
                                <label className="fs-6 mb-1">Email Adress </label>
                                <input className="form-control" type="text" name='email' value={data.email} onChange={handleChange} />
                                <span className='mb-1 text-danger'>{data.error_list.email}</span>
                            </div>
                            {/* enter password input */}
                            <div className="mb-3">
                                <label className="fs-6 mb-1">Enter Password</label>
                                <input className="form-control" type="password" name='password' value={data.password} onChange={handleChange} />
                                <span className='mb-1 text-danger'>{data.error_list.password}</span>
                            </div>
                            {/* confirm password input */}
                            <div className="">
                                <label className="fs-6 mb-1">Confirm Password</label>
                                <input className="form-control" type="password" name='cpassword' value={data.cpassword} onChange={handleChange} />
                            </div>
                        </form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-danger rounded-0' onClick={handleClose}>Close</button>
                    <button className='btn btn-dark rounded-0' onClick={handleSubmit}>Sign Up</button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default RegisterModal;
{/* <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top shadow" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/">PROJET REACT</Link>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Home</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Contact</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><button className="nav-link py-3 px-0 px-lg-3 rounded btn btn-primary" onClick={handleShowLogin}>Login</button></li>
                            <li className="nav-item mx-0 mx-lg-1"><button className="nav-link py-3 px-0 px-lg-3 rounded btn btn-info" onClick={handleShowRegister}>Register</button></li>
                        </ul>
                    </div>
                </div>
            </nav> */}