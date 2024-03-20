import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Security = () => {
    const [formData, setFormData] = useState({
        oldpassword: "",
        newpassword: "",
        confirmnewpassword: "",
    });

    const navigate = useNavigate();

    const onChangeValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.newpassword !== formData.confirmnewpassword) {
            swal("Error!", "New Password and Confirm Password do not match", "error");
            return;
        }
    
        const data = {
            oldpassword: formData.oldpassword,
            newpassword: formData.newpassword,
            confirmnewpassword: formData.confirmnewpassword,
        };
    
        try {
            const res = await axios.put(`/api/update-password/${localStorage.getItem('auth_id')}`, data);
            if (res.data.status === 200) {
                swal("Success!", "Password Updated Successfully!", "success");
                navigate('/admin/profile');
            } else {
                swal("Error!", res.data.error || "An error occurred while updating password", "error");
            }
        } catch (error) {
            console.error("Error updating password:", error);
            swal("Error!", "An error occurred while updating password", "error");
        }
    };

    return (
        <div className="container mt-5 pt-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white"><h4 className="fw-semibold">Update Password</h4></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="oldpassword" className="form-label">Old Password:</label>
                                    <input type="password" id="oldpassword" name="oldpassword" className="form-control" value={formData.oldpassword} onChange={onChangeValue} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newpassword" className="form-label">New Password:</label>
                                    <input type="password" id="newpassword" name="newpassword" className="form-control" value={formData.newpassword} onChange={onChangeValue} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmnewpassword" className="form-label">Confirm New Password:</label>
                                    <input type="password" id="confirmnewpassword" name="confirmnewpassword" className="form-control" value={formData.confirmnewpassword} onChange={onChangeValue} />
                                </div>
                                <button type="submit" className="btn btn-primary">Update Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
