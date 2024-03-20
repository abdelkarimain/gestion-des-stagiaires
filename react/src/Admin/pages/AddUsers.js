import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    const [userData, setuserData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "+33790357190",
        sexe: "male",
        nationalite: "MOROCCAN",
        photo: "https://via.placeholder.com/360x360.png",
        role: "user",
        adresse: "82, place Ramos 52482 Dupre-sur-Mer",
        ville: "RABAT",
    });
    const navigate = useNavigate()

    const onChangeValue = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitButton = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/add-users', userData);
        if (res.data.status === 200) {
            swal("Success!", "User added Successfully!", "success");
            setuserData({
                nom: "",
                prenom: "",
                email: "",
                telephone: "+33790357190",
                sexe: "male",
                nationalite: "MOROCCAN",
                photo: "https://via.placeholder.com/360x360.png",
                role: "user",
                adresse: "82, place Ramos 52482 Dupre-sur-Mer",
                ville: "RABAT",
            });
            navigate('/admin/users');
        } else if (res.data.status === 500) {
            if (res.data.error.includes('Duplicate entry')) {
                swal({
                    title: "Error!",
                    text: "Email is already taken!",
                    icon: "error",
                });
            } else {
                swal({
                    title: "Error!",
                    text: "Some fields are missing!",
                    icon: "error",
                });
            }
        }
    };

    return (
        <div className="container mt-5 pt-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white"><h4 className="fw-semibold">Add New User</h4></div>

                        <div className="card-body">
                            <form onSubmit={onSubmitButton}>
                                <div className='row'>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="nom" className="form-label">Nom:</label>
                                        <input type="text" id="nom" name="nom" className="form-control" value={userData.nom} onChange={onChangeValue} />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="prenom" className="form-label">Prenom:</label>
                                        <input type="text" id="prenom" name="prenom" className="form-control" value={userData.prenom} onChange={onChangeValue} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="text" id="email" name="email" className="form-control" value={userData.email} onChange={onChangeValue} />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="telephone" className="form-label">Telephone:</label>
                                        <input type="text" id="telephone" name="telephone" className="form-control" value={userData.telephone} onChange={onChangeValue} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="sexe" className="form-label">Sexe:</label>
                                        <input type="text" id="sexe" name="sexe" className="form-control" value={userData.sexe} onChange={onChangeValue} />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="nationalite" className="form-label">Nationalite:</label>
                                        <input type="text" id="nationalite" name="nationalite" className="form-control" value={userData.nationalite} onChange={onChangeValue} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="photo" className="form-label">Photo:</label>
                                        <input type="text" id="photo" name="photo" className="form-control" value={userData.photo} onChange={onChangeValue} />
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="ville" className="form-label">Ville:</label>
                                        <input type="text" id="ville" name="ville" className="form-control" value={userData.ville} onChange={onChangeValue} />
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="ville" className="form-label">Role:</label>
                                        <input type="text" id="ville" name="ville" className="form-control" value={userData.role} onChange={onChangeValue} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="adresse" className="form-label">Adresse:</label>
                                    <textarea type="text" id="adresse" name="adresse" className="form-control" onChange={onChangeValue}>{userData.adresse}</textarea>
                                </div>



                                <button type="submit" className="btn btn-primary">Add User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUsers;
