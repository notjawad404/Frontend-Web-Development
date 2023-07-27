import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Task = () => {
    const location = useLocation()
    const user1 = location.state ? location.state.user : null;
    console.log(user1)

    const [tasks, setTasks] = useState([])
    const [records, setRecords] = useState([])
    const [inputData, setInputData] = useState({
        user: "",
        id: "",
        taskName: "",
        description: "",
        status: ""

    })

    function handleaddSubmit(e) {
        e.preventDefault();
        console.log(inputData)
        axios.post('http://localhost:3031/tasks', inputData)
        .then((res) => {
            console.log(res.data)
            alert("Task added successfully")
        })
    }


    useEffect(() => {
       axios.get(`http://localhost:3031/tasks?user=${user1}`)
       .then((res) => {
              console.log(res.data)
                setTasks(Object.keys(res.data[0]));
                setRecords(res.data)

       }) 
    }, [user1])

  return (
    <div className="h-screen overflow-y-auto bg-green-400">
    <nav className="flex justify-between items-center p-4 bg-blue-500">
      <div className="flex items-center">
        <div className="text-white font-bold text-lg">
        <img className="w-10" src={logo} alt="logo"/>
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
              <Link to='/'  className="hover:bg-red-500 py-1 px-1 rounded-lg">Logout</Link>
      </div>
    </nav>
        <div className="mx-20 mt-10">
            <button className="btn btn-primary bg-red-600 py-2 px-2 text-white">Add Task</button>
        </div>
        <div className="bg-blue-200 p-5 mx-20">
        <form className="grid grid-cols-2 gap-4" onSubmit={handleaddSubmit}>
      <div className="mb-3">
                <label className='px-2'>User</label><br></br>
                <input 
                type="text"
                name="user"
                className="w-60 px-2 rounded-lg"
                onChange={(e) => setInputData({...inputData, user: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>ID</label><br></br>
                <input 
                type="number"
                name="id"
                className="w-60 px-2 rounded-lg"
                onChange={(e) => setInputData({...inputData, id: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>Task Name</label> <br></br>
                <input
                  type="text"
                  name="taskName"
                  className='w-60 px-2 rounded-lg'
                  onChange={(e) => setInputData({...inputData, taskName: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className='px-2'>Description</label><br></br>
                <input
                  type="text"
                  name="description"
                  className='w-60 px-2 rounded-lg'
                    onChange={(e) => setInputData({...inputData, description: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label>Status</label><br></br>
                <select
                  name="status"
                  className='rounded-lg'
                    onChange={(e) => setInputData({...inputData, status: e.target.value})}
                >
                  <option value="">Select Status</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button className='bg-red-400 w-20 rounded-lg  text-white' type="submit">Submit</button>
      </form>
        </div>
        <div className="mx-20 mt-10">
        <table className="w-full">
            <thead className="bg-gray-200">
                <tr>
                { tasks.map((task, index) => (
                    <th key={index} className="text-center px-4 capitalize">
                    {task}                     
                    </th>
                ))}
                <th>Actions</th>
                </tr>

            </thead>
            <tbody className="bg-blue-200">
            
                    {records.map((record, index) => (
                        <tr key={index} className="text-center">
                            <td className="text-center px-4">{record.user}</td>
                            <td className="text-center px-4">{record.taskid}</td>
                            <td className="text-center px-4">{record.taskName}</td>
                            <td className="text-center px-4">{record.description}</td>
                            <td className="text-center px-4">{record.status}</td>
                            <td className="text-center px-4">
                                <button className="btn btn-primary">Edit</button>
                            </td>
                        </tr>
                    ))}
                
            </tbody>
        </table>
        </div>

      
    </div>
  )
}

export default Task
