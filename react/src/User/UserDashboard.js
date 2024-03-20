import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Admin/components/Loading';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // users data state
  const [users, setUsers] = useState([]);

  // error & loading state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // open search state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSearchOption, setSelectedSearchOption] = useState('nom');

  // filter data state
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');


  function nextPage() {
    if (currentPage !== Npage) {
      setCurrentPage(currentPage + 1)
    }
  }
  function changeCurrentPage(num) {
    setCurrentPage(num)
  }
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // show or hide search bar
  const toggleSearch = () => {
    setInput('')
    setIsOpen(!isOpen);
  };

  // filter functions
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

  
  // this is for pagination with bootstrap
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const Npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(Npage + 1).keys()].slice(1);


  // fetch users Data
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


  // handle loading
  if (loading) {
    return (
      <>
        <Loading />
      </>

    );
  }
  // handle error
  if (error) {
    return (
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <h2 className="mt-5 fw-semibold">Error: {error}</h2>
      </div>
    );
  }


  return (
    <div className="page-section-bg-primary mt-5 mb-0 flex-grow-1">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="d-flex justify-content-between mx-5">
              {/* header */}
              <h2 className="fw-semibold mb-0">Users List</h2>

              {/* Afficher le nombre total des utilisateurs */}
              <div className="d-flex align-items-center">
                <p className="h5">{data.length} Users</p>
              </div>

              {/* Search hide/show */}
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
                      {!isOpen ? <i className="fa-solid fa-magnifying-glass"></i> : <i class="fa-solid fa-xmark"></i>}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row mt-4 d-flex justify-content-center">
          {data.length == 0 ? (<div className="mx-5 text-center">
            <svg width={'60px'} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="17.018" fill="#ffcb4c" r="17" /><g fill="#65471b"><path d="m14.524 21.036c-.145-.116-.258-.274-.312-.464-.134-.46.13-.918.59-1.021 4.528-1.021 7.577 1.363 7.706 1.465.384.306.459.845.173 1.205-.286.358-.828.401-1.211.097-.11-.084-2.523-1.923-6.182-1.098-.274.061-.554-.016-.764-.184z" /><ellipse cx="13.119" cy="11.174" rx="2.125" ry="2.656" /><ellipse cx="24.375" cy="12.236" rx="2.125" ry="2.656" /></g><path d="m17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694-.249-1.08-1.204-1.118-1.697-1.003-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512.508-.536.833-1.129.946-2.113.119-1.035-.232-2.313-.433-2.809-.374-.921-1.005-1.649-1.734-1.899-1.137-.39-1.945.321-1.542 1.561.604 1.854.208 3.375-.833 4.293-2.449 2.157-3.588 3.695-2.83 6.973.828 3.575 4.377 5.876 7.952 5.048z" fill="#f19020" /><path d="m9.296 6.351c-.164-.088-.303-.224-.391-.399-.216-.428-.04-.927.393-1.112 4.266-1.831 7.699-.043 7.843.034.433.231.608.747.391 1.154-.216.405-.74.546-1.173.318-.123-.063-2.832-1.432-6.278.047-.257.109-.547.085-.785-.042zm12.135 3.75c-.156-.098-.286-.243-.362-.424-.187-.442.023-.927.468-1.084 4.381-1.536 7.685.48 7.823.567.415.26.555.787.312 1.178-.242.39-.776.495-1.191.238-.12-.072-2.727-1.621-6.267-.379-.266.091-.553.046-.783-.096z" fill="#65471b" /></svg>
            <p className='fs-1 fw-semibold'>No Data Found</p>
            <p className='px-5 fs-4'>There are no users that match your current filters.</p>
          </div>
          ) :
            records.map(user => (
              <div className="col-md-6 col-lg-3 mx-5 mb-5 shadow bg-light" id={`#page${currentPage}`} key={user.id} style={{ minWidth: '300px', minWidth: '300px' }}>
                <div className="card bg-light" style={{ border: '0', height: '100%' }}>
                  <div className="card-body row bg-light flex-grow">
                    <div className="col-6">
                      <a style={{ color: "#707070", textDecoration: 'none' }} href="">
                        <img src={user.photo} alt="" className="img-fluid  shadow" width={'60px'} />
                      </a>
                    </div>
                    <div className="col-6 card-title align-self-center text-center mb-0  bg-light">
                      <h5>{user.nom} {user.prenom}</h5>
                      <p className="">
                        {user.ville}
                      </p>
                    </div>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item ">
                      <i className="fa fa-envelope float-right"></i>
                      <span> Email :</span>
                      <a style={{ color: "#707070", textDecoration: 'none' }} href={`mailto:${user.email}`}>{user.email}</a>
                    </li>
                    <li className="list-group-item"><i className="fa fa-phone float-right"></i> Phone : {user.telephone}</li>
                    <li className="list-group-item"><i className="fa-solid fa-flag float-right"></i> Nationality : {user.nationalite}</li>
                    <li className="list-group-item"><i className="fa-solid fa-location-dot float-right"></i> Address : {user.adresse}</li>
                  </ul>
                  <div className="card-body text-center my-2">
                    <Link className="btn btn-dark  tooltips mb-2" to={`/view-user/${user.id}`}>
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
        <div className="row">
          {/* pagination */}
          <div className="mx-5 text-center d-flex justify-content-center mb-5">
            <ul className="pagination pagination-lg">
              <li className="page-item">
                <Link onClick={prevPage} className='page-link'>Prev</Link>
              </li>

              {numbers.map((number, index) => {
                if (number >= currentPage - 2 && number <= currentPage + 2) {
                  return (
                    <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={index}>
                      <Link onClick={() => { changeCurrentPage(number) }} className="page-link">
                        {number}
                      </Link>
                    </li>
                  );
                }

                else if (number === currentPage - 3 || number === currentPage + 3) {
                  return (
                    <li className="page-item" key={index}>
                      <span className="page-link">...</span>
                    </li>
                  );
                }
                return null;
              })}

              <li className="page-item">
                <Link onClick={nextPage} className='page-link'>Next</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserDashboard;
