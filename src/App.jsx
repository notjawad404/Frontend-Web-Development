import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UserList from './components/userList.jsx'
import Login from './components/Login/Login.jsx'
import TaskList from './components/userTask'
import User from './components/User.jsx'
import Home from './components/Home.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/users' element={<UserList />} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/tasks' element={<TaskList />} />
          <Route path='/user' element={<User/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
