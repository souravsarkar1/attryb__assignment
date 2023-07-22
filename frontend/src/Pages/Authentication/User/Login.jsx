import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../Redux/UserAuth/action';
import Cookies from 'js-cookie';
const initialState = {
  email: '',
  password: '',
}
const LoginPage = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const nanigate = useNavigate();
  const location = useLocation();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
useEffect(()=>{
  Cookies.remove();
  localStorage.clear();
},[])
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    console.log('clicked');
    const payload = {email : formData.email, pass : formData.password};
   // console.log(payload);
    dispatch(userLogin(payload)).then((res)=>{
      nanigate(location.state);
    })
   // setFormData(initialState);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>User Login</h2>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
        <br />
        <h3> No Account!
          <Link to={'/signup'}>Make a Account Now</Link>
        </h3>
      </form>

    </div>
  );
};

export default LoginPage;
