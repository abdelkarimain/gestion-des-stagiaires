import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usersCount, setUsersCount] = useState(null);
    const [adminsCount, setAdminsCount] = useState(null);
    useEffect(() => {
        axios.get('/api/users')
            .then(res => {
                const usersData = res.data;

                let userCount = 0;
                let adminCount = 0;

                usersData.forEach(user => {
                    if (user.role === 'user') {
                        userCount++;
                    } else if (user.role === 'admin') {
                        adminCount++;
                    }
                });

                setUsersCount(userCount);
                setAdminsCount(adminCount);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setError(error.message || 'An error occurred while fetching users.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <Loading />
            </>

        );
    }

    if (error) {
        return (
            <div className="container">
                <h2 className="mt-5 fw-semibold">Users List</h2>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <>
            <h1 className="display-4 d-none d-sm-block">Dashboard</h1>
            <p className="lead d-none d-sm-block">
                Welcome {localStorage.getItem('auth_name')}
            </p>
            <div className="row mb-3">
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x" />
                            </div>
                            <h6 className="text-uppercase">Admins</h6>
                            <h1 className="display-4">{adminsCount}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x" />
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">{usersCount}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x" />
                            </div>
                            <h6 className="text-uppercase">All Users</h6>
                            <h1 className="display-4">{usersCount+adminsCount}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Dashboard;
