

import { useState, type FormEvent, type ChangeEvent } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });

    // window.location.assign('/categories')
  };



  return (

    <div className="form-container">
      <form className="form login-form" onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        {/* Username input field */}
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-input in"
            type="text"
            name="email"
            value={formState.email || ""}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input in"
            type="password"
            name="password"
            value={formState.password || ""}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the login form */}
        <div className="form-group btn-div">
          <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>

  );
};

export default Login;