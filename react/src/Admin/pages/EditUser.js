import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const EditUser = () => {

    const [userData, setUserData] = useState({
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

    const [loading, setLoading] = useState(true);



    const onChangeValue = (e) => {
        
        setUserData({
            ...userData,
            [e.target.name]: e.target.value })
    }


    const updateData = async () => {
        const pathname = window.location.pathname;
        const parts = pathname.split('/');
        const user_id = parts[parts.length - 1];

        try {


            const res = await axios.put(`/api/update-user/${user_id}`, userData);

            if (res.data.status === 200) {
                setLoading(false);
                swal("Success!", "User Updated Successfully!", "success");
            }
        } catch (error) {
            if (error.response.status === 500) {
                if (error.response.data.error.includes('Duplicate entry')) {
                    swal({
                        title: "Error!",
                        text: "Email is already taken!",
                        icon: "error",
                    });
                } else {
                    console.log(error.response.data.error);
                    swal({
                        title: "Error!",
                        text: "Some fields are missing!",
                        icon: "error",
                    });
                }
                setLoading(false);
            }
        }
    }
    const onSubmitButton = async (e) => {
        e.preventDefault();
        await updateData()

    }
    useEffect(() => {
        const fetchData = async () => {
            const pathname = window.location.pathname;
            const parts = pathname.split('/');
            const user_id = parts[parts.length - 1];

            try {
                const res = await axios.get(`/api/edit-user/${user_id}`);
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
                        role: res.data.user.role,
                        adresse: res.data.user.adresse,
                        ville: res.data.user.ville,
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                swal({
                    title: "Error!",
                    text: "Some fields are missing!",
                    icon: "error",
                });
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
        <div className="container mt-5">
            <form className="row mt-3" onSubmit={onSubmitButton}>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 shadow p-3">
                    <div className="card h-100 ">
                        <div className="card-body">
                            <div className="account-settings text-center">
                                <div className="user-profile">
                                    <div className="user-avatar ">
                                        <img className='rounded-5 shadow' src={userData.photo} width={'200px'} alt="Maxwell Admin" />
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
                                    <h6 className="mb-2 mt-4 text-primary fw-bold">Personal Details</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Nom :</label>
                                        <input type="text" className="form-control" name="nom" value={userData.nom} onChange={onChangeValue} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Prenom :</label>
                                        <input type="text" className="form-control" name="prenom" value={userData.prenom} onChange={onChangeValue} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Email :</label>
                                        <input type="email" className="form-control" name="email" value={userData.email} onChange={onChangeValue} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Phone Number :</label>
                                        <input type="text" className="form-control" name="telephone" value={userData.telephone} onChange={onChangeValue} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Role :</label>
                                        <select className="form-control" name="role" value={userData.role} onChange={onChangeValue}>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Gender :</label>
                                        <select className="form-control" name="sexe" value={userData.sexe} onChange={onChangeValue}>
                                            <option value="male">Male</option>
                                            <option value="famale">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Nationality :</label>
                                        <input type="text" className="form-control" name="nationalite" value={userData.nationalite} onChange={onChangeValue} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>City :</label>
                                        <input type="text" className="form-control" name="ville" value={userData.ville} onChange={onChangeValue} />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-group mt-3">
                                        <label className='h6 mb-2'>Adresse :</label>
                                        <input type="text" className="form-control" name="adresse" value={userData.adresse} onChange={onChangeValue} />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-end mt-4">
                                        <Link to='/admin/users' name="submit" className="btn btn-secondary me-4">Cancel</Link>
                                        <button type="submit" name="submit" className="btn btn-success">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUser;





