import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Admin/components/Loading';

const UserProfile = () => {
    const imgstyle = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sexe: "",
        nationalite: "",
        photo: "",
        role: "",
        adresse: "",
        ville: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pathname = window.location.pathname;
                const parts = pathname.split('/');
                const user_id = parts[parts.length - 1];

                const res = await axios.get(`/api/edit-user/${localStorage.getItem('auth_id')}`);

                setLoading(false);
                if (res.data.status === 200) {
                    setUser({
                        nom: res.data.user.nom,
                        prenom: res.data.user.prenom,
                        email: res.data.user.email,
                        telephone: res.data.user.telephone,
                        sexe: res.data.user.sexe,
                        nationalite: res.data.user.nationalite,
                        photo: res.data.user.photo,
                        role: res.data.user.role,
                        adresse: res.data.user.adresse,
                        ville: res.data.user.ville,
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);

                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <>
                <Loading />
            </>

        );
    }

    return (
        <div className="container text-center pt-4 mt-5 flex-grow-1" style={{ boxSizing: "border-box", fontSize: "14px" }}>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12  p-0" >
                        <nav aria-label="breadcrumb" style={{ backgroundColor: '#c5cee4' }}>
                            <ol className="breadcrumb py-3 px-3">
                                <li className="breadcrumb-item"><Link to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link></li>
                                <li className="breadcrumb-item active fw-bold" aria-current="page">Profile</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-12 p-0 px-3 py-3 mb-3 bg-light border">
                                <div className="d-flex flex-column align-items-center">
                                    <img className="photo"
                                        src={user.photo}
                                        alt="user photo" style={imgstyle} />
                                    <p className="fw-bold h4 mt-3">{user.nom} {user.prenom}</p>
                                    <p className="text-muted">Full Stack Developer</p>
                                    <p className="text-muted mb-3">{user.adresse}, {user.ville}</p>
                                    <div className="d-flex ">
                                        <Link to="/profile/edit" className="btn btn-lg btn-dark rounded-0 follow me-2">Edit Profile</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 p-0 px-2 pb-2 mb-3 bg-light border">
                                <div className="d-flex justify-content-between border-bottom pt-2 pb-2 px-3">
                                    <p><span className="fas fa-globe me-2"></span>Website</p>
                                    <a href="" style={{ textDecoration: "none", color: "#686868", }}>https://{user.nom.toLocaleLowerCase()}{user.prenom.toLocaleLowerCase()}.com</a>
                                </div>
                                <div className="d-flex justify-content-between border-bottom pt-2 pb-2 px-3">
                                    <p><span className="fab fa-github-alt me-2"></span>Github</p>
                                    <a href="" style={{ textDecoration: "none", color: "#686868", }}>{user.nom.toLocaleLowerCase()}{user.prenom.toLocaleLowerCase()}</a>
                                </div>
                                <div className="d-flex justify-content-between border-bottom pt-2 pb-2 px-3">
                                    <p><span className="fab fa-twitter me-2 fw-bold fs-5" style={{ color: "#8ab7f1" }}></span>Twitter</p>
                                    <a href="" style={{ textDecoration: "none", color: "#686868", }}>@{user.nom.toLocaleLowerCase()}{user.prenom.toLocaleLowerCase()}</a>
                                </div>
                                <div className="d-flex justify-content-between border-bottom pt-2 pb-2 px-3">
                                    <p><span className="fab fa-instagram me-2 fw-bold fs-5" style={{ color: "#E1306C" }}></span>Instagram</p>
                                    <a href="" style={{ textDecoration: "none", color: "#686868", }}>@{user.nom.toLocaleLowerCase()}_{user.prenom.toLocaleLowerCase()}</a>
                                </div>
                                <div className="d-flex justify-content-between pt-2  px-3">
                                    <p><span className="fab fa-facebook-f me-2 fw-bold fs-5" style={{ color: "#5999ec" }}></span>facebook</p>
                                    <a href="" style={{ textDecoration: "none", color: "#686868", }}>{user.prenom.toLocaleLowerCase()} {user.nom.toLocaleUpperCase()}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 ps-md-4">
                        <div className="row">
                            <div className="col-12 px-3 mb-3 pb-3 bg-light border">
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="pt-2 pb-2 fw-semibold">Full Name</p>
                                    <p className="pt-2 pb-2">{user.nom} {user.prenom}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="pt-2 pb-2 fw-semibold">Email</p>
                                    <p className="pt-2 pb-2">{user.email}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="pt-2 pb-2 fw-semibold">Phone</p>
                                    <p className="pt-2 pb-2">{user.telephone}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="pt-2 pb-2 fw-semibold">Mobile</p>
                                    <p className="pt-2 pb-2">{user.telephone}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="pt-2 pb-2 fw-semibold">Nationality</p>
                                    <p className="pt-2 pb-2">{user.nationalite}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="pt-2 pb-2 fw-semibold">Role</p>
                                    <p className="pt-2 pb-2">{user.role}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="pt-2  fw-semibold">Gender</p>
                                    <p className="pt-2 ">{user.sexe}</p>
                                </div>
                            </div>
                            <div className="col-12 px-3 py-3 bg-light border">
                                <h6 className="d-flex align-items-center mb-3 fw-bold py-3"><i
                                    className="text-info me-2">assignment</i>Project
                                    Status</h6>
                                <small>Web Design</small>
                                <div className="progress mb-2" style={{ height: '5px' }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }}
                                        aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Backend API</small>
                                <div className="progress mb-2" style={{ height: '5px' }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}
                                        aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Website Markup</small>
                                <div className="progress mb-2" style={{ height: '5px' }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }}
                                        aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UserProfile;

