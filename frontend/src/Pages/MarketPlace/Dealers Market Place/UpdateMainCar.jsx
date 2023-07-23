import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCarByDealer } from '../../../Redux/DelarReducer/action';
import Cookies from 'js-cookie';

const UpdateMainCar = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.dealerReducer.dealerData);
  const myData = data.find((el) => el._id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(id);
  // State to manage the form inputs
  const [formData, setFormData] = useState({
    img: myData.img,
    list_price: myData.list_price,
    max_speed: myData.max_speed,
    mileage: myData.mileage,
    model_name: myData.model_name,
    power_bhp: myData.power_bhp,
    year_of_model: myData.year_of_model,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newVal ;
    if (name === "list_price" || name === 'max_speed' || name === 'mileage' || name === 'power_bhp' || name === 'year_of_model') {
        newVal = +value;
    }
    setFormData({
      ...formData,
      [name]: newVal,
    });
  };

  // Handle form submission (You can implement your logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle form submission, e.g., dispatching an action to update the data in the Redux store
    console.log(formData);
    dispatch(updateCarByDealer(id,formData)).then((res)=>{
       // navigate('/dealerprofile')
       const updateCarByDealerMsg = Cookies.get('updateCarByDealerMsg');
       alert(updateCarByDealerMsg);
       setTimeout(()=>{
        navigate('/dealerprofile')
       },1000)
    })
  };

  return (
    <div>
      <h2>Update Car Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          required
        />

        <label>List Price:</label>
        <input
          type="text"
          name="list_price"
          value={formData.list_price}
          onChange={handleChange}
          required
        />

        <label>Max Speed:</label>
        <input
          type="text"
          name="max_speed"
          value={formData.max_speed}
          onChange={handleChange}
          required
        />

        <label>Mileage:</label>
        <input
          type="text"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          required
        />

        <label>Model Name:</label>
        <input
          type="text"
          name="model_name"
          value={formData.model_name}
          onChange={handleChange}
          required
        />

        <label>Power (BHP):</label>
        <input
          type="text"
          name="power_bhp"
          value={formData.power_bhp}
          onChange={handleChange}
          required
        />

        <label>Year of Model:</label>
        <input
          type="text"
          name="year_of_model"
          value={formData.year_of_model}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Car</button>
      </form>
    </div>
  );
};

export default UpdateMainCar;
