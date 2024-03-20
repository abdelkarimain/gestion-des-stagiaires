
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center py-5 my-5 mx-auto  flex-grow-1 d-flex justify-content-center ">
            <div className="pt-5 mt-5">
                <h1 className='h1 fs-1'>4<i className="fa-solid fa-bug text-danger fs-1"></i>4</h1>
                <h3 className="mt-4 fs-1">Opps! Page Not Found</h3>
                <p>The requested URL was not found on this server.<br />Try an other url.</p>
                <div className="mt-5">
                    <Link to="/" className="btn m-2 btn-primary"><i className="fa-solid fa-house"></i> Back to Dashboard</Link>
                </div>
            </div>
        </div>

    );
}

export default NotFound;

