import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const LoginModal = ({ handleClose, show }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error_list: []
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: data.email,
            password: data.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {

            axios.post('/api/login', userData).then(res => {

                if (res.data.status === 200) {

                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('auth_photo', res.data.userphoto);
                    localStorage.setItem('auth_role', res.data.userrole);
                    localStorage.setItem('auth_id', res.data.userid);

                    swal("Success", res.data.message, "success");

                    if (res.data.userrole === 'admin') {
                        navigate('/admin/dashboard');
                        window.location.reload();
                    } else {
                        navigate('/dashboard');
                        window.location.reload();

                    }

                } else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");
                }
                else {
                    setData({ ...data, error_list: res.data.validation_errors });
                }
            });

        });
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >

                <Modal.Header className='bg-success-subtl' closeButton>
                    <Modal.Title className='fw-semibold fs-3'>Sign In</Modal.Title>
                </Modal.Header>

                <Modal.Body className='px-5'>
                    <div className="mt-2 mb-2">
                        <form className='p-4'>
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
                        </form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-danger rounded-0' onClick={handleClose}>Close</button>

                    <button className='btn btn-success rounded-0' onClick={handleSubmit}>Sign In</button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default LoginModal;

