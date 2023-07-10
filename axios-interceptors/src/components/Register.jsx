import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from './axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(true); // Set to true initially
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(true); // Set to true initially
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(true); // Set to true initially
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setUser('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {success ? (
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-4">Success!</h1>
          <p>
            <a href="#" className="text-blue-500">
              Sign In
            </a>
          </p>
        </section>
      ) : (
        <section className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="flex items-center">
                Username:
                {validName && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 text-green-500"
                  />
                )}
                {!validName && user && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="ml-2 text-red-500"
                  />
                )}
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className={`w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                  validName ? 'focus:ring-blue-500' : 'focus:ring-red-500'
                } focus:border-transparent`}
              />
              {!validName && user && (
                <p className="text-red-500 text-sm mt-1">
                  <FontAwesomeIcon icon={faTimes} className="mr-1" />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="flex items-center">
                Password:
                {validPwd && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 text-green-500"
                  />
                )}
                {!validPwd && pwd && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="ml-2 text-red-500"
                  />
                )}
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className={`w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                  validPwd ? 'focus:ring-blue-500' : 'focus:ring-red-500'
                } focus:border-transparent`}
              />
              {!validPwd && (
                <p className="text-red-500 text-sm mt-1">
                  <FontAwesomeIcon icon={faTimes} className="mr-1" />
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="confirm_pwd" className="flex items-center">
                Confirm Password:
                {validMatch && matchPwd && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 text-green-500"
                  />
                )}
                {!validMatch && matchPwd && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="ml-2 text-red-500"
                  />
                )}
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className={`w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                  validMatch ? 'focus:ring-blue-500' : 'focus:ring-red-500'
                } focus:border-transparent`}
              />
              {!validMatch && matchPwd && (
                <p className="text-red-500 text-sm mt-1">
                  <FontAwesomeIcon icon={faTimes} className="mr-1" />
                  Must match the first password input field.
                </p>
              )}
            </div>

            <button
              disabled={!validName || !validPwd || !validMatch}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4">
            Already registered?<br />
            <span className="line">
              {/*put router link here*/}
              <a href="#" className="text-blue-500">
                Sign In
              </a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Register;
