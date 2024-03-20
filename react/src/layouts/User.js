import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from '../User/UserDashboard'
import UserNav from '../User/UserNav'
import ViewUser from '../User/ViewUser'
import UserProfile from '../User/UserProfile'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import About from '../pages/About'
import EditProfile from '../User/EditProfile'
import logo from '../assets/r-l-logo.png'

const User = () => {
    return (
        <>
            <UserNav logo={logo}/>
            <Routes>
                <Route path='/dashboard' element={<UserDashboard />} />
                <Route path='/view-user/:id' element={<ViewUser />} />
                <Route path='/profile' element={<UserProfile />} />
                {/* <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} /> */}
                <Route path='/profile/edit' element={<EditProfile />} />
                <Route path='*' element={<NotFound />} />

            </Routes>
        </>
    )
}

export default User
