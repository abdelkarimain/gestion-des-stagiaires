import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Testimonial from '../pages/Testimonial';
import logo from '../assets/r-l-logo.png'

const Public = () => {
    return (
        <>
            <Navbar logo={logo} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer logo={logo} />
        </>
    )
}

export default Public;
