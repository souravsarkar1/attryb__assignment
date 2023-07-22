// import React, { useState } from 'react';
// import './Signup.css'
// import { useDispatch } from 'react-redux';
// import { dealerSignup } from '../../../Redux/DealerAuth/action';
// import { Link, useNavigate } from 'react-router-dom';

// const initialState = {
//   name: '',
//   email: '',
//   pass: '',
//   city: '',
//   age: "",
// }
// const DealerSignupPage = () => {
//   const [formData, setFormData] = useState(initialState);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     // Convert the 'age' value to a number using the '+' operator
//     // If it's not the 'age' field, it will be treated as a string as before
//     const newValue = name === "age" ? +value : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   //const {name,email,pass,age,city} = formData;
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const payload = formData;
//     // console.log(payload);
//     dispatch(dealerSignup(payload)).then((re) => {
//       navigate('/login/dealer')
//     })
//     //setFormData(initialState);
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2 style={{ color: "blueviolet" }}>Create a Account and Became a Dealer</h2>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Password:password shold be 8 charecters
//           <input
//             type="password"
//             name="pass"
//             value={formData.pass}
//             onChange={handleChange}
//             required
//             placeholder='Should contain atleast one Upper case ans one spacial Case'
//           />
//         </label>
//         <label>
//           City:
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required

//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Sign Up</button>
//         <p>Already Have a Account? <Link to={'/login/dealer'}>Login</Link></p>
//       </form>
//     </div>
//   );
// };

// export default DealerSignupPage;


import React, { useState } from 'react';
import './Signup.css';
import { useDispatch } from 'react-redux';
import { dealerSignup } from '../../../Redux/DealerAuth/action';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const initialState = {
  name: '',
  email: '',
  pass: '',
  city: '',
  age: '',
};

const DealerSignupPage = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const isExist = useSelector((state) => state.userAuthReducer.isExist);
  //const userMsg = useSelector((state) => state.userAuthReducer.userMsg);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Convert the 'age' value to a number using the '+' operator
    // If it's not the 'age' field, it will be treated as a string as before
    const newValue = name === 'age' ? +value : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const passwordChecking = (pass) => {
    return pass.length >= 8 && /[A-Z]/.test(pass) && /\d/.test(pass) && /[!@#$%^&*]/.test(pass);
  };
  //console.log(isExist);
  //console.log(userMsg);
  const handleSubmit = (event) => {
    event.preventDefault();

    const { pass } = formData;

    if (!passwordChecking(pass)) {
      alert('Password should contain at least eight characters, one uppercase character, one number, and one special character.');
      return;
    }

    // Clear previous errors and proceed with form submission
    // since password validation is successful.
    dispatch(dealerSignup(formData)).then(() => {
      // if (userMsg === "New user has been updated") {
      //   alert(userMsg);
      //   navigate('/login');
      // }
      // else if (isExist === 'A user with the same email already exists') {
      //   alert('Please login with the existing email id.');
      //   navigate('/login');
      // }
      setTimeout(() => {
        let data = Cookies.get("userSignupMsg");
      if (data==="New user has been updated") {
        alert(`New user has been updated`);
       localStorage.setItem("userSignupMsg","");
       navigate('/login');
      }
      else{
        alert(`Please login with the existing email id.`);
        localStorage.setItem("userSignupMsg","");
        navigate('/login');
      }
      }, 0);
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create An Account</h2>
        <h2>To Use Our Services</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password: (Should be at least 8 characters long, containing at least one uppercase character, one number, and one special character)
          <input
            type="password"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            required
            placeholder="Should contain at least one uppercase character, one number, and one special character"
          />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default DealerSignupPage;
