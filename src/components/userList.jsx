

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import Navbar1 from './Nacbar1';

const PAGE_SIZE = 10;

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [, setDeleteUsername] = useState('');
  const [existingUsernameError, setExistingUsernameError] = useState('');
  const [existingEmailError, setExistingEmailError] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [filterAccess, setFilterAccess] = useState('all');
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = () => {
    axios.get('http://localhost:3030/users').then((res) => {
      setUsers(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  };

  const handleAddEditClick = (data) => {
    if (data.id) {
      setShowForm(true);
      setFormData(data);
    } else {
      setShowForm(true);
      setFormData({});
    }
    setExistingUsernameError('');
    setExistingEmailError('');
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isExistingUsername = (username) => records.some((data) => data.username === username);
  const isExistingEmail = (email) => records.some((data) => data.email === email);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, access } = formData;
    if (formData.id) {
      axios.put(`http://localhost:3030/users/${formData.id}`, formData).then((res) => {
        console.log(res.data);
        setRecords((prevRecords) =>
          prevRecords.map((record) => (record.id === res.data.id ? res.data : record))
        );
        setShowForm(false);
        setFormData({});
      });
    } else {
      if (isExistingUsername(username)) {
        setExistingUsernameError('Username already exists');
        return;
      }
      if (isExistingEmail(email)) {
        setExistingEmailError('Email already exists');
        return;
      }
      const newUser = { ...formData, access };
      axios.post('http://localhost:3030/users', newUser).then((res) => {
        console.log(res.data);
        setRecords((prevRecords) => [...prevRecords, res.data]);
        setShowForm(false);
        setFormData({});
        alert('Record updated successfully');
      });
    }
  };

  const handleDeleteSubmit = (id) => {
  
    axios
      .delete(`http://localhost:3030/users/`+ id)
      .then(() => {
        alert('User deleted successfully');
        fetchUsers();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
  

  const handleAddButtonClick = () => {
    setShowForm(true);
    setFormData({});
    setDeleteUsername('');
    setExistingUsernameError('');
    setExistingEmailError('');
  };

  const handleCancelButtonClick = () => {
    setShowForm(false);
    setFormData({});
    setDeleteUsername('');
    setExistingUsernameError('');
    setExistingEmailError('');
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(records.length / PAGE_SIZE);
  const offset = currentPage * PAGE_SIZE;
  const currentData = records.slice(offset, offset + PAGE_SIZE);

  return (
    <div className='h-screen overflow-y-auto'>
    <Navbar1/>
    <div className="mx-20 md:mx-20">
      <div className="container mt-5">
        <div className="mb-3 flex gap-2">
          <button onClick={handleAddButtonClick} className="bg-red-400 px-4 py-2 rounded-md text-white">
            Add User
          </button>
          <div className="bg-red-200 p-3 rounded-lg">
            <label className="mx-3">Search Name</label>
            <input
              type="text"
              name="searchUsername"
              value={searchUsername}
              onChange={(e) => setSearchUsername(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <label className="mx-3">Filter access</label>
            <select name="filterAccess" value={filterAccess} onChange={(e) => setFilterAccess(e.target.value)}>
              <option value="all">All</option>
              <option value="granted">Granted</option>
              <option value="denied">Denied</option>
            </select>
          </div>
        </div>
        {showForm && (
            <div className="bg-blue-200 p-4 rounded-lg user-grid">
              <h2 className="text-center mb-4">{formData.id ? 'Edit User' : 'Add User'}</h2>
              <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    className="form-control pr-12 pl-1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Username:</label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    value={formData.username || ''}
                    onChange={handleChange}
                    className="form-control pr-12 pl-1"
                    required
                  />
                  {existingUsernameError && <span className="text-red-600">{existingUsernameError}</span>}
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    className="form-control pr-12 pl-1"
                    required
                  />
                  {existingEmailError && <span className="text-red-600">{existingEmailError}</span>}
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <br />
                  <div className="relative inline-block">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password || ''}
                      onChange={handleChange}
                      className="form-control pr-12 pl-1"
                      required
                    />
                    <button
                      type="button"
                      className=" text-gray-500 absolute top-1/2 right-2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Access:</label>
                  <select
                    required
                    name="access"
                    value={formData.access || ''}
                    onChange={handleChange}
                    className="form-control px-3"
                  >
                    <option value="" disabled>Select access</option>
                    <option value="granted">Granted</option>
                    <option value="denied">Denied</option>
                  </select>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary mx-4 bg-green-600 w-20 rounded-md">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelButtonClick}
                    className="btn btn-danger bg-orange-600 rounded-md w-20"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
          
        <div className="container mt-4">
          <table className="table">
            <thead>
              <tr>
                <th className=' uppercase border border-gray-800 py-2' colSpan={7}>Users List</th>
              </tr>
              <tr>
                {users.map((user, index) => (
                  <th className='uppercase border border-gray-800' key={index}>{user}</th>
                ))}
                <th className='border border-gray-800'>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentData
                .filter((data) => {
                  if (filterAccess === 'all') return true;
                  return data.access === filterAccess;
                })
                .filter((data) => {
                  if (searchUsername === '') return true;
                  return data.username.toLowerCase().includes(searchUsername.toLowerCase());
                })
                .map((data, index) => (
                  <tr key={index}>
                    <td className="px-4 text-center border border-gray-800">{data.id}</td>
                    <td className="px-4 text-center border border-gray-800">{data.name}</td>
                    <td className="px-4 text-center border border-gray-800">{data.username}</td>
                    <td className="px-4 text-center border border-gray-800">{data.email}</td>
                    <td className="px-4 text-center border border-gray-800">{data.password}</td>
                    <td className="px-4 text-center border border-gray-800">{data.access}</td>
                    <td className='border border-gray-800'>
                      <button onClick={() => handleAddEditClick(data)} className="bg-blue-400 mx-2 w-20 rounded-lg">
                        Edit
                      </button>
                      <button onClick={() => handleDeleteSubmit(data.id)} className="bg-red-400 w-20 mx-2 rounded-lg ">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="mt-4 space-x-4">
  <ReactPaginate className='grid grid-flow-row lg:grid-cols-10 md:grid-cols-4 md:mx-20 gap-4 mx-40'
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageChange}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
</div>

      </div>
    </div>
    </div>
  );
};

export default UserListPage;
