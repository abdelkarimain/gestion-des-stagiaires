import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Loading from '../Admin/components/Loading';

const EditProfile = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sexe: "",
        nationalite: "",
        photo: "",
        adresse: "",
        ville: "",
    })

    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await axios.get(`/api/edit-user/${localStorage.getItem('auth_id')}`);

                setLoading(false);
                if (res.data.status === 200) {
                    setUserData({
                        nom: res.data.user.nom,
                        prenom: res.data.user.prenom,
                        email: res.data.user.email,
                        telephone: res.data.user.telephone,
                        sexe: res.data.user.sexe,
                        nationalite: res.data.user.nationalite,
                        photo: res.data.user.photo,
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.put(`/api/update-user/${localStorage.getItem('auth_id')}`, userData);
        if (res.data.status === 200) {
            swal("Success!", "User Updated Successfully!", "success");
            navigate('/profile')
        }
        else if (res.data.status === 500) {
            if (res.data.error.includes('Duplicate entry')) {

                swal({
                    title: "Error!",
                    text: "Email is already taken!",
                    icon: "error",
                });
            } else {
                console.log(res.data.error);
                swal({
                    title: "Error!",
                    text: "Some fields are missing!",
                    icon: "error",
                });
            }
        }
    }

    if (loading) {
        return (
            <>
                <Loading />
            </>

        );
    }

    return (
        <>
            <div className="container pt-4 mt-5  flex-grow-1" style={{ boxSizing: "border-box", fontSize: "14px" }}>
                <div className="container mt-3">
                    <div className="col-12 p-0 shadow" style={{ boxSizing: "border-box", fontSize: "14px" }}>
                        <nav aria-label="breadcrumb" style={{ backgroundColor: '#c5cee4' }}>
                            <ol className="breadcrumb p-3">
                                <li className="breadcrumb-item"><Link to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/profile" style={{ textDecoration: "none" }}>Profile</Link></li>
                                <li className="breadcrumb-item active fw-bold" aria-current="page">Edit Profile</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="container">
                        <form className="row mt-3" onSubmit={handleSubmit}>
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 shadow p-3">
                                <div className="card h-100 ">
                                    <div className="card-body">
                                        <div className="account-settings text-center">
                                            <div className="user-profile">
                                                <div className="user-avatar ">
                                                    <img className='rounded-circle shadow' src={userData.photo} width={'200px'} alt="Maxwell Admin" />
                                                </div>
                                                <h5 className="user-name mt-3  fw-bold">{userData.nom} {userData.prenom}</h5>
                                                <h6 className="user-email  mt-2">{userData.email}</h6>
                                            </div>
                                            <div className="about">
                                                <h5 className='fw-bold text-danger mt-4'>About</h5>
                                                <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 shadow p-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h1 className="mb-2 mt-1 text-primary text-center fw-semibold">Personal Details</h1>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Nom :</label>
                                                    <input type="text" className="form-control" name="nom" value={userData.nom} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Prenom :</label>
                                                    <input type="text" className="form-control" name="prenom" value={userData.prenom} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Email :</label>
                                                    <input type="email" className="form-control" name="email" value={userData.email} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Phone Number :</label>
                                                    <input type="text" className="form-control" name="telephone" value={userData.telephone} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Gender :</label>
                                                    <select className="form-control" name="sexe" value={userData.sexe} onChange={handleChange}>
                                                        <option value="male">Male</option>
                                                        <option value="famale">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Nationality :</label>
                                                    <input type="text" className="form-control" name="nationalite" value={userData.nationalite} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>City :</label>
                                                    <input type="text" className="form-control" name="ville" value={userData.ville} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="form-group mt-3">
                                                    <label className='h6 mb-2'>Adresse :</label>
                                                    <textarea type="text" className="form-control" rows="4" name="adresse" value={userData.adresse} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="text-end mt-4">
                                                    <Link to='/profile' name="submit" className="btn btn-secondary me-4">Cancel</Link>
                                                    <button type="submit" name="submit" className="btn btn-success">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default EditProfile;
