import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import swal from 'sweetalert';
import DataTable from 'react-data-table-component';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSearchOption, setSelectedSearchOption] = useState('nom');

    const toggleSearch = () => {
        setInput('');
        setIsOpen(!isOpen);
    };

    const columns = [
        {
            name: <h6 className='text-center fw-bold'>Image</h6>,
            selector: (row) => <img className='rounded-5 m-2' src={row.photo} width={'50px'} alt="" />
        },
        {
            name: <h6 className='text-center fw-bold'>Nom</h6>,
            selector: row => row.nom,
            sortable: true
        },
        {
            name: <h6 className='text-center fw-bold'>Prenom</h6>,
            selector: row => row.prenom,
            sortable: true
        },
        {
            name: <h6 className='text-center fw-bold'>Email</h6>,
            selector: row => row.email,
        },
        {
            name: <h6 className='text-center fw-bold'>Telephone</h6>,
            selector: row => row.telephone,
        },
        {
            name: <h6 className='text-center fw-bold'>Role</h6>,
            selector: row => row.role,
            sortable: true
        },
        {
            name: <h6 className='text-center fw-bold'>Gender</h6>,
            selector: row => row.sexe,
            sortable: true
        },
        {
            name: <h6 className='text-center fw-bold'>Action</h6>,
            selector: row => (
                <>
                    <Link className="" to={`/admin/edit-user/${row.id}`} >
                        <i className="fa-solid fa-pen-to-square" style={{ fontSize: '25px', color: 'blue' }}></i>
                    </Link>

                    <Link onClick={(e) => deleteUser(e, row.id)} className='ms-5'>
                        <i className="fa-solid fa-trash-can" style={{ fontSize: '25px', color: 'red' }}></i>
                    </Link>
                </>
            ),
        }
    ];

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');

    function handleFilter(e) {
        setInput(e.target.value);
    }

    function handleSearchOption(e) {
        setSelectedSearchOption(e.target.value);
    }

    useEffect(() => {
        const newdata = users.filter(row => {
            const searchTerm = input.toLowerCase();
            const selectedColumnValue = row[selectedSearchOption].toLowerCase();
            return selectedColumnValue.includes(searchTerm);
        });
        setData(newdata);
    }, [input, users, selectedSearchOption]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/users');
                setUsers(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error.message || 'An error occurred while fetching users.');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setData(users);
    }, [users]);

    const deleteUser = async (e, id) => {
        e.preventDefault();

        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });

        if (willDelete) {
            try {
                const res = await axios.delete(`http://localhost:8000/api/delete-user/${id}`);

                if (res.data.status === 200) {
                    swal("Success!", "User Deleted Successfully!", "success");

                    const updatedRes = await axios.get('http://localhost:8000/api/users');
                    setUsers(updatedRes.data);

                } else {
                    swal("Error!", "Error deleting user!", "error");
                }
            } catch (error) {
                swal("Error!", "An error occurred while deleting the user", "error");
            }
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="container">
                <h2 className="mt-5 fw-semibold">Users List</h2>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="page-section-bg-primary mt-5 mb-0 flex-grow-1">
            <div className="container">
                <div className="mx-5 my-3 d-flex justify-content-between">
                    <h2 className="fw-semibold text-center">Users List</h2>
                    <div className={`search ${isOpen ? 'open' : ''}`}>
                        <div className="input-group" width={600} >
                            <input
                                type="text"
                                className={`form-control rounded me-2 ${isOpen ? '' : 'd-none'}`}
                                onChange={handleFilter}
                                placeholder='Search...'
                            />
                            <select
                                className={`form-select rounded me-2 ${isOpen ? '' : 'd-none'}`}
                                onChange={handleSearchOption}
                                    value={selectedSearchOption}
                            >
                                <option value="nom">Nom</option>
                                <option value="prenom">Prenom</option>
                                <option value="role">Role</option>
                                <option value="ville">Ville</option>
                                {/* Add more options for other search option */}
                            </select>
                            <div className="input-group-append">
                                <button
                                    className={`btn btn-lg ${!isOpen ? 'btn-success' : 'btn-danger'}`}
                                    type="button"
                                    onClick={toggleSearch}
                                >
                                    {!isOpen ? <i className="fa-solid fa-magnifying-glass"></i> : <i className="fa-solid fa-xmark"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link className="btn btn-lg btn-primary h1" to="/admin/add-user">Add user</Link>
                </div>

                <DataTable columns={columns} data={data} highlightOnHover striped pointerOnHover pagination />

            </div>
        </div>
    );
};

export default Users;
