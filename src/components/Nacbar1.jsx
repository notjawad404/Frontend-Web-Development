import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar1 = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500">
      <div className="flex items-center">
        <div className="text-white font-bold text-lg">
        <img className="w-10" src={logo} alt="logo"/>
        </div>
        <div className="text-white ml-2 font-bold text-3xl">Task Force 141</div>
      </div>
      <div className="flex space-x-4 text-white">
        <h1 className="py-1 px-1 rounded-lg">Admin</h1>
        <Link to='/users' className="hover:bg-red-500 py-1 px-1 rounded-lg">UserList</Link>
        <Link to='/tasks' className="hover:bg-red-500 py-1 px-1 rounded-lg">TaskList</Link>
        <Link to='/' className="hover:bg-red-500 py-1 px-1 rounded-lg">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar1;