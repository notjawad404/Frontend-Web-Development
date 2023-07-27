import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom';

const PAGE_SIZE = 10;
const API_ENDPOINT = 'http://localhost:3030/tasks';



const Users = () => {
  const [, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [searchTaskName,] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    user: '',
    taskName: '',
    description: '',
    status: '',
  });
  const [editTask, setEditTask] = useState(null);
  const [username,] = useState('');

  const location = useLocation();
  const user = location.state.user

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const fetchTasks = () => {
    const url = `${API_ENDPOINT}?user=${user}`;
    axios.get(url).then((res) => {
      setUsers(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  };

  const toggleAddForm = () => {
    setShowAddForm((prevShowAddForm) => !prevShowAddForm);
    setEditTask(null);
    setFormData({
      user: '',
      taskName: '',
      description: '',
      status: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = { ...formData, user: username };
    axios
      .post(API_ENDPOINT, taskData)
      .then((response) => {
        alert('Task added successfully');
        console.log("Response = ",response)
        // setRecords((prevRecords) => [...prevRecords, response.data]);
        toggleAddForm();
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(records.length / PAGE_SIZE);
  const offset = currentPage * PAGE_SIZE;
  const currentData = records.slice(offset, offset + PAGE_SIZE);

  const handleEdit = (task) => {
    setEditTask(task);
    setShowAddForm(true);
    setFormData({ ...task, user: task.user });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_ENDPOINT}/${editTask.taskid}`, editTask)
      .then(() => {
        setRecords((prevRecords) =>
          prevRecords.map((record) => (record.taskid === editTask.taskid ? editTask : record))
        );
        setEditTask(null);
        toggleAddForm();
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  };

  return (
    <div className="h-screen overflow-y-auto">
      <nav className="flex justify-between items-center p-4 bg-blue-500">
      <div className="flex items-center">
        <div className="text-white font-bold text-lg">
        <img className="w-10" src={logo} alt="logo"/>
        </div>
        <div className="text-white ml-2 font-bold text-3xl">Task Force 141</div>
      </div>
      <div className="flex space-x-4 text-white">
      <h1 className="hover:bg-red-500 py-1 px-1 rounded-lg">
                Username: {user}
              </h1>
              <Link to='/user' className="hover:bg-red-500 py-1 px-1 rounded-lg">
                Tasks
              </Link>
              <Link to='/'  className="hover:bg-red-500 py-1 px-1 rounded-lg">Logout</Link>
      </div>
    </nav>
      <div className="container mt-5">
        <div className="my-3 flex gap-4 mx-20">
          <div className="">
            <button className="btn bg-red-400 py-3 px-3 rounded-lg" onClick={toggleAddForm}>
              {showAddForm ? 'Cancel' : 'Add New Task'}
            </button>
          </div>
          <div className="py-3">
            <label className="mx-3">Filter Status</label>
            <select
              name="filterStatus"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="incomplete">Incomplete</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {showAddForm && (
          <div className='mx-20 bg-blue-400'>
            {editTask ? <h2 className='text-center text-3xl'>Edit Task</h2> : <h2 className='text-center text-3xl'>Add New Task</h2>}
            <form onSubmit={editTask ? handleEditSubmit : handleFormSubmit} className="grid grid-cols-2 gap-4 bg-blue-200 p-5">
              <div className="mb-3">
                <label className='px-2'>User</label><br></br>
                <input
                  type="text"
                  name="user"
                  // value={formData.user}
                  onChange={handleChange}
                  className='w-60 px-2 rounded-lg'
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>Task Name</label> <br></br>
                <input
                  type="text"
                  name="taskName"
                  // value={formData.taskName}
                  onChange={handleChange}
                  className='w-60 px-2 rounded-lg'
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>Description</label><br></br>
                <input
                  type="text"
                  name="description"
                  // value={formData.description}
                  onChange={handleChange}
                  className='w-60 px-2 rounded-lg'
                />
              </div>
              <div className="mb-3">
                <label>Status</label><br></br>
                <select
                  name="status"
                  // value={formData.status}
                  onChange={handleChange}
                  className='rounded-lg'
                >
                  <option value="">Select Status</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button className='bg-red-400 w-20 mx-20 rounded-lg py-1 text-white' type="submit">{editTask ? 'Save' : 'Submit'}</button>
              {editTask && (
                <button type="button" onClick={() => {setEditTask(null); setFormData({ user: '', taskName: '', description: '', status: '' });}}>
                  Cancel
                </button>
              )}
            </form>
          </div>
        )}

        <div className="container my-5">
          <h1 className="text-center font-bold text">Tasks</h1>
          <table className="table mx-20 border-collapse">
            <thead>
              <tr>
                <th className="px-4 mx-5 text-center border border-gray-800">User</th>
                <th className="px-4 mx-5 text-center border border-gray-800">ID</th>
                <th className="px-4 mx-5 text-center border border-gray-800">Task Name</th>
                <th className="px-4 mx-5 text-center border border-gray-800">Description</th>
                <th className="px-4 mx-5 text-center border border-gray-800">Status</th>
                <th className="px-4 mx-5 text-center border border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData
                .filter((data) => {
                  if (filterStatus === 'all') return true;
                  return data.status === filterStatus;
                })
                .filter((data) => {
                  if (searchTaskName === '') return true;
                  return data.taskName.toLowerCase().includes(searchTaskName.toLowerCase());
                })
                .map((data, index) => (
                  <tr key={index}>
                    <td className="px-4 mx-5 text-center border border-gray-800">{data.user}</td>
                    <td className="px-4 mx-5 text-center border border-gray-800">{data.taskid}</td>
                    <td className="px-4 mx-5 text-center border border-gray-800">{data.taskName}</td>
                    <td className="px-4 mx-5 text-center border border-gray-800">{data.description}</td>
                    <td className="px-4 mx-5 text-center border border-gray-800">{data.status}</td>
                    <td className="px-4 mx-5 text-center border border-gray-800">
                      <button
                        className="bg-blue-400 m-0 w-full rounded-lg"
                        onClick={() => handleEdit(data)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-x-4 mx-20">
          <ReactPaginate
            className="grid grid-flow-row grid-cols-10 gap-4 sm:grid-cols-5"
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
  );
};

export default Users;
