import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UserList from './components/userList.jsx'
import Login from './components/Login/Login.jsx'
import TaskList from './components/userTask'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/l' element={<Login />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/tasks' element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
