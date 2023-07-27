import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const role = location.state.role;
  const user = location.state.user;
  const navigate = useNavigate();
  console.log('Role = ', role)

  function handleNavigate() {
    navigate('/task', { state: { user: user } });
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-blue-500">
        <div className="flex items-center">
          <div className="text-white font-bold text-lg">
            <img className="w-10" src={logo} alt="logo" />
          </div>
          <div className="text-white ml-2 font-bold text-3xl">Task Force 141</div>
        </div>
        <div className="flex space-x-4 text-white">
          {role === "user" ? (
            <>
              <h1 className="hover:bg-red-500 py-1 px-1 rounded-lg">
                Username: {user}
              </h1>
              <button onClick={handleNavigate} className="hover:bg-red-500 py-1 px-1 rounded-lg">
                Tasks
              </button>
              <Link to="/user" className="hover:bg-red-500 py-1 px-1 rounded-lg">User</Link>
            </>
          ) : (
            <>
              <h1 className="hover:bg-red-500 py-1 px-1 rounded-lg">
                Admin
              </h1>
              <Link to="/users" className="hover:bg-red-500 py-1 px-1 rounded-lg">
                UserList
              </Link>
              <Link to="/tasks" className="hover:bg-red-500 py-1 px-1 rounded-lg">
                TaskList
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="flex justify-center items-center mt-48 font-bold text-2xl">
        Welcome {user} to Task Force 141
      </div>

    </div>
  );
};

export default Home;
