import React from 'react';

const Footer = ({logo}) => {
    return (
        <div className="container ">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-bold border-top ">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                    >
                        <img src={logo} alt="" width={100} />
                    </a>
                    <span className="mb-3 mb-md-0 text-dark fw-semibold">
                        © 2024 Company, Inc
                    </span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            <i class="fa-brands fa-twitter fs-2"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                        <i class="fa-brands fa-instagram fs-2"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                        <i class="fa-brands fa-facebook fs-2"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

    );
}

export default Footer;
