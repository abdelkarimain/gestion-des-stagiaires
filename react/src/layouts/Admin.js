import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/pages/Dashboard';

import AdminNav from '../Admin/components/AdminNav';
import logo from '../assets/r-l-logo.png'
import Users from '../Admin/pages/Users';
import AddUsers from '../Admin/pages/AddUsers';
import EditUser from '../Admin/pages/EditUser';
import AdminNotFound from '../Admin/pages/AdminNotFound';
import AdminProfile from '../Admin/pages/AdminProfile';
import EditAdminProfile from '../Admin/pages/EditAdminProfile';
import Security from '../Admin/pages/Security';

const Admin = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <AdminNav logo={logo} />
                    <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Routes>
                            <Route path='/admin/dashboard' Component={Dashboard} />
                            <Route path='/admin/users' Component={Users} />
                            <Route path='/admin/add-user' Component={AddUsers} />
                            <Route path='/admin/edit-user/:id' Component={EditUser} />
                            <Route path='/admin/profile' Component={AdminProfile} />
                            <Route path='/admin/profile/edit' Component={EditAdminProfile} />
                            
                            <Route path='/admin/security' Component={Security} />
                            <Route path='/admin/*' Component={AdminNotFound} />
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Admin;