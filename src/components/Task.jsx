import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const PAGE_SIZE = 10;
const API_ENDPOINT = 'http://localhost:3030/tasks';

const Task = () => {
  const location = useLocation();
  const user1 = location.state ? location.state.user : null;
  console.log(user1)

  const [, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [searchTaskName, setSearchTaskName] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    user: '',
    taskName: '',
    description: '',
    status: '',
  });
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    if (user1) {
      fetchTasks();
    }
  }, [currentPage, user1]);

  const fetchTasks = () => {
    if (!user1) {
      return;
    }

    axios
      .get(API_ENDPOINT, {
        params: {
          user: user1,
        },
      })
      .then((res) => {
        setUsers(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  };

  const toggleAddForm = () => {
    setShowAddForm((prevShowAddForm) => !prevShowAddForm);
    setEditTask(null);
    setFormData({
      id: '', 
      user: '',
      taskName: '',
      description: '',
      status: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_ENDPOINT, formData)
      .then((response) => {
        setRecords((prevRecords) => [...prevRecords, response.data]);
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
    setFormData({ ...task });
  };

  const handleEditSubmit = () => {
    axios
      .put(`${API_ENDPOINT}/${editTask.id}`, formData)
      .then(() => {
        setRecords((prevRecords) =>
          prevRecords.map((record) => {
            if (record.id === editTask.id) {
              return { ...editTask };
            }
            return record;
          })
        );
        setEditTask(null);
        toggleAddForm();
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  };

  return (
    <div className="h-screen overflow-y-auto bg-red-500">
       <nav className="flex justify-between items-center p-4 bg-blue-500">
        <div className="flex items-center">
          <div className="text-white font-bold text-lg">
            <img className="w-10" src={logo} alt="logo" />
          </div>
          <div className="text-white ml-2 font-bold text-3xl">Task Force 141</div>
        </div>
        <div className="flex space-x-4 text-white">
          <h1 className="hover:bg-red-500 py-1 px-1 rounded-lg">
            Username: {user1}
          </h1>
          <Link to='/user' className="hover:bg-red-500 py-1 px-1 rounded-lg">
            Tasks
          </Link>
          <Link to='/' className="hover:bg-red-500 py-1 px-1 rounded-lg">Logout</Link>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="my-3 flex gap-4 mx-20">
          <div className="">
            <button className="btn bg-blue-400 py-3 px-3 rounded-lg" onClick={toggleAddForm}>
              {showAddForm ? 'Cancel' : 'Add New Task'}
            </button>
          </div>
          <div className="bg-blue-200 p-3 rounded-lg">
            <input
              placeholder="Search Task Name"
              type="text"
              name="searchTaskName"
              value={searchTaskName}
              onChange={(e) => setSearchTaskName(e.target.value)}
            />
          </div>
          <div className="py-3">
            <label className="mx-3 text-white">Filter Status</label>
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
          <div className="mx-20 bg-blue-400">
            {editTask ? <h2 className="text-center text-3xl">Edit Task</h2> : <h2 className="text-center text-3xl">Add New Task</h2>}
            <form onSubmit={editTask ? handleEditSubmit : handleFormSubmit} className="grid grid-cols-2 gap-4 bg-blue-200 p-5">
              <div className="mb-3">
                <label className="px-2">ID</label><br />
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="w-60 px-2 rounded-lg"
                />
              </div>
              <div className="mb-3">
                <label className="px-2">User</label><br />
                <input
                  type="text"
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  className="w-60 px-2 rounded-lg"
                />
              </div>
              <div className="mb-3">
                <label className="px-2">Task Name</label> <br />
                <input
                  type="text"
                  name="taskName"
                  value={formData.taskName}
                  onChange={handleChange}
                  className="w-60 px-2 rounded-lg"
                />
              </div>
              <div className="mb-3">
                <label className="px-2">Description</label><br />
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-60 px-2 rounded-lg"
                />
              </div>
              <div className="mb-3">
                <label>Status</label><br />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="rounded-lg"
                >
                  <option value="">Select Status</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button className="bg-red-400 w-20 mx-20 rounded-lg py-1 text-white" type="submit">
                {editTask ? 'Save' : 'Submit'}
              </button>
              {editTask && (
                <button type="button" onClick={() => { setEditTask(null); setFormData({ id: '', user: '', taskName: '', description: '', status: '' }); }}>
                  Cancel
                </button>
              )}
            </form>
          </div>
        )}
        <div className="container my-5">
          <h1 className="text-center mx-20 font-bold text-2xl text-white">Tasks</h1>
          <table className="table mx-20 w-full border-collapse rounded-lg overflow-hidden bg-blue-100 ">
            <thead>
              <tr>
                <th className="px-4 mx-5 text-center bg-gray-300">ID</th>
                <th className="px-4 mx-5 text-center bg-gray-300">User</th>
                <th className="px-4 mx-5 text-center bg-gray-300">Task Name</th>
                <th className="px-4 mx-5 text-center bg-gray-300">Description</th>
                <th className="px-4 mx-5 text-center bg-gray-300">Status</th>
                <th className="px-4 mx-5 text-center bg-gray-300">Actions</th>
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
                    <td className="px-4 mx-5 text-center">{data.id}</td>
                    <td className="px-4 mx-5 text-center">{data.user}</td>
                    <td className="px-4 mx-5 text-center">{data.taskName}</td>
                    <td className="px-4 mx-5 text-center">{data.description}</td>
                    <td className="px-4 mx-5 text-center">{data.status}</td>
                    <td className="px-4 mx-5 text-center">
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
            className="grid grid-flow-row grid-cols-10 gap-4 sm:grid-cols-5 text-white"
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

export default Task;

