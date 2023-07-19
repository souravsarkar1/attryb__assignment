import React, { useState } from 'react';
import './Signup.css'
import { useDispatch } from 'react-redux';
import { dealerSignup } from '../../../Redux/DealerAuth/action';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  pass: '',
  city: '',
  age: "",
}
const DealerSignupPage = () => {
  const [formData, setFormData] = useState(initialState);
const dispatch = useDispatch();
const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Convert the 'age' value to a number using the '+' operator
    // If it's not the 'age' field, it will be treated as a string as before
    const newValue = name === "age" ? +value : value;
    setFormData({ ...formData, [name]: newValue });
  };
  
//const {name,email,pass,age,city} = formData;
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const payload = formData;
    console.log(payload);
    dispatch(dealerSignup(payload)).then((re)=>{
      navigate('/login/dealer')
    })
    //setFormData(initialState);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
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
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default DealerSignupPage;
