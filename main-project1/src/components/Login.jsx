import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      showPassword: false, // Initially hiding the password
      showRememberPassword: false, // Initially hiding the "Remember your password" pop-up
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleTogglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  handleForgotPassword = () => {
    this.setState((prevState) => ({
      showRememberPassword: !prevState.showRememberPassword,
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (email === 'alpha@gmail.com' && password === 'password123') {
      if (password.length >= 8) {
        this.props.history.push('/home');
      } else {
        this.setState({ error: 'Password should be at least 8 characters long' });
      }
    } else {
      this.setState({ error: 'Invalid email or password' });
    }
  };

  render() {
    const { email, password, error, showPassword, showRememberPassword } = this.state;
    const eyeIcon = showPassword ? faEyeSlash : faEye;

    return (
      <div className=''>
        <div className="flex h-screen bg1">
          <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
            <form className="m-5 w-10/12" onSubmit={this.handleSubmit}>
              <h1 className="w-full text-4xl tracking-widest text-center my-6">
                Login
              </h1>
              <div className="w-full my-6">
                <input
                  className="p-2 rounded shadow w-full text-black"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="w-full my-6">
                <div className="relative">
                  <input
                    className="p-2 rounded shadow w-full text-black"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    aria-label="Password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  <FontAwesomeIcon
                    icon={eyeIcon}
                    className="text-black absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={this.handleTogglePassword}
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="w-full my-10">
                <button
                  type="submit"
                  className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-500 to-yellow-300 text-black"
                >
                  Login
                </button>
              </div>

              <a
                className="underline font-semibold text-center text-white"
                href="/"
                onClick={this.handleForgotPassword}
              >
                Forgot password
              </a>
              {showRememberPassword && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-800">Remember your password</p>
                    <button
                      className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg"
                      onClick={this.handleForgotPassword}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
