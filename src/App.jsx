import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import UserList from './components/userList.jsx'
import Login from './components/Login/Login.jsx'
import TaskList from './components/userTask'
import Home from './components/Home.jsx'
import Task from './components/Task'
import AddTask from './components/AddTask'
// import AdminRoute1 from './components/Routes/AdminRoute1'
// import UserRoute1 from './components/Routes/UserRoute1'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
          <Route path='/tasks' element={
            // <AdminRoute1>
          <TaskList />
            //  </AdminRoute1> 
          } />
          <Route path='/users' element={
            // <AdminRoute1>
              <UserList />
            //  </AdminRoute1>
          } />

          <Route path='/task' element={<Task/>}/>
          <Route path='/addtask' element={<AddTask/>}/>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;