import React from 'react';

const Loading = () => {
    return (
        <div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center backdrop-filter-blur">
            <div className="text-center">
                <div class="spinner-border spinner-border-lg text-primary" role="status"></div>&nbsp;&nbsp;
                <span class="fs-1 fw-bold">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;


