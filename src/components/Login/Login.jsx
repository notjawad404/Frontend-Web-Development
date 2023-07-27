import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
    
      setLoginError('');
      setIsAdmin(true);
      const role = 'admin'
      console.log(role,' logged in successfully')
      navigate('/home', {state: {role: role}});
    } else {
      axios
        .get('http://localhost:3030/users')
        .then((response) => {
          const users = response.data;
          const user = users.find((user) => user.username === username && user.password === password);

          if (user) {
            if (user.access === 'granted') {
              setLoginError('');
              setIsAdmin(false);
              const role = 'user'
                    console.log(role,' logged in successfully')
              navigate('/home', {state: {role: role, user: username}});
            } else {
              setLoginError('Access denied.');
              setIsAdmin(false);
            }
          } else {
            setLoginError('Invalid username or password.');
            setIsAdmin(false);
          }
        })
        .catch((error) => {
          setLoginError('Failed to fetch users. Please try again later.');
          console.error(error);
        });
    }
  };

  return (
    <div className="bg-red-400 h-screen">
      <div className='flex justify-center items-center pt-36'>
        <form onSubmit={handleLogin} className='bg-lime-400 p-10 rounded-md'>
          <h1 className='text-center font-bold text-2xl'>Login</h1>
          <div className="form-group my-4">
            <label>Username:</label><br></br>
            <input className='px-2 w-60 rounded-lg' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group my-4">
            <label>Password:</label>
            <div className='relative'>
              <input className='pl-2 pr-7 w-60 rounded-lg' type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute top-1 right-1 text-gray-500"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mx-24">
            Login
          </button>
          {loginError && <div className="my-4">{loginError}</div>}
          {isAdmin && <div className="my-4">Admin is logged in.</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
